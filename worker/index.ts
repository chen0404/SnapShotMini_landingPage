import { Resend, type CreateEmailOptions } from "resend";

interface Env {
  ALLOWED_ORIGINS: string;
  LEAD_TO_EMAIL: string;
  RESEND_API_KEY: string;
  RESEND_FROM: string;
}

interface LeadPayload {
  businessName: string;
  businessType: "cafe" | "creative-store" | "chain-brand" | "other";
  contactName: string;
  email: string;
  locations: string;
  notes: string;
  phone: string;
  submissionId: string;
}

interface EmailSendResult {
  error: {
    message: string;
    name: string;
  } | null;
}

type SendEmail = (
  apiKey: string,
  payload: CreateEmailOptions,
  idempotencyKey: string,
) => Promise<EmailSendResult>;

const maxBodyLength = 16_000;
const businessTypeLabels: Record<LeadPayload["businessType"], string> = {
  cafe: "咖啡廳",
  "creative-store": "文創店",
  "chain-brand": "品牌連鎖店",
  other: "其他",
};

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body: unknown, status: number, origin?: string) {
  const headers = new Headers({ "Content-Type": "application/json; charset=utf-8" });
  if (origin) {
    for (const [name, value] of Object.entries(corsHeaders(origin))) headers.set(name, value);
  }
  return Response.json(body, { status, headers });
}

function isAllowedOrigin(origin: string, allowedOrigins: string) {
  return allowedOrigins.split(",").map((item) => item.trim()).filter(Boolean).includes(origin);
}

function readString(value: unknown, maxLength: number, required = true) {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  if (required && !normalized) return null;
  if (normalized.length > maxLength) return null;
  return normalized;
}

function validateLead(value: unknown): LeadPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;
  const businessName = readString(body.businessName, 100);
  const contactName = readString(body.contactName, 50);
  const phone = readString(body.phone, 30);
  const email = readString(body.email, 254);
  const businessType = readString(body.businessType, 30);
  const locations = readString(body.locations ?? "", 3, false);
  const notes = readString(body.notes ?? "", 1000, false);
  const submissionId = readString(body.submissionId ?? "", 120, false);

  if (!businessName || !contactName || !phone || !email || !businessType || locations === null || notes === null || submissionId === null) return null;
  if (!/^\S+@\S+\.\S+$/.test(email)) return null;
  if (!(businessType in businessTypeLabels)) return null;
  if (locations && (!/^\d{1,3}$/.test(locations) || Number(locations) < 1 || Number(locations) > 999)) return null;
  if (submissionId && !/^[a-zA-Z0-9_-]+$/.test(submissionId)) return null;

  return {
    businessName,
    businessType: businessType as LeadPayload["businessType"],
    contactName,
    email,
    locations,
    notes,
    phone,
    submissionId,
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;",
  })[character] ?? character);
}

function buildEmail(lead: LeadPayload) {
  const rows = [
    ["店家或品牌名稱", lead.businessName],
    ["聯絡人姓名", lead.contactName],
    ["聯絡電話", lead.phone],
    ["電子郵件", lead.email],
    ["店家類型", businessTypeLabels[lead.businessType]],
    ["門市數量", lead.locations || "未填寫"],
    ["合作需求", lead.notes || "未填寫"],
  ] as const;

  const htmlRows = rows.map(([label, content]) => `
    <tr>
      <th style="padding:10px 12px;border:1px solid #d7d1c1;text-align:left;vertical-align:top;background:#fff9e9">${escapeHtml(label)}</th>
      <td style="padding:10px 12px;border:1px solid #d7d1c1;white-space:pre-wrap">${escapeHtml(content)}</td>
    </tr>`).join("");
  const text = rows.map(([label, content]) => `${label}：${content}`).join("\n");

  return {
    html: `<!doctype html><html lang="zh-Hant"><body style="margin:0;padding:24px;color:#101010;background:#f4f1e8;font-family:Arial,'Noto Sans TC',sans-serif"><div style="max-width:680px;margin:0 auto;padding:24px;background:#ffffff"><h1 style="margin:0 0 20px;font-size:24px">新的 SnapShotMini 合作詢問</h1><table style="width:100%;border-collapse:collapse">${htmlRows}</table><p style="margin:20px 0 0;color:#6b665b;font-size:12px">可直接回覆此郵件聯繫填表人。</p></div></body></html>`,
    text: `新的 SnapShotMini 合作詢問\n\n${text}\n\n可直接回覆此郵件聯繫填表人。`,
  };
}

async function sendEmailWithResend(
  apiKey: string,
  payload: CreateEmailOptions,
  idempotencyKey: string,
): Promise<EmailSendResult> {
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send(payload, { idempotencyKey });

  return { error };
}

export async function handleRequest(request: Request, env: Env, sendEmail: SendEmail = sendEmailWithResend) {
  const origin = request.headers.get("Origin") ?? "";
  if (!origin || !isAllowedOrigin(origin, env.ALLOWED_ORIGINS)) {
    return jsonResponse({ ok: false, message: "不允許的來源。" }, 403);
  }

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== "POST") {
    return jsonResponse({ ok: false, message: "不支援的請求方式。" }, 405, origin);
  }
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ ok: false, message: "請求格式不正確。" }, 415, origin);
  }

  const rawBody = await request.text();
  if (rawBody.length > maxBodyLength) {
    return jsonResponse({ ok: false, message: "送出的資料過長。" }, 413, origin);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, message: "請求格式不正確。" }, 400, origin);
  }

  if (body && typeof body === "object" && !Array.isArray(body) && typeof (body as Record<string, unknown>).website === "string" && (body as Record<string, string>).website.trim()) {
    return jsonResponse({ ok: true }, 200, origin);
  }

  const lead = validateLead(body);
  if (!lead) {
    return jsonResponse({ ok: false, message: "請確認表單欄位後再送出。" }, 422, origin);
  }
  if (!env.RESEND_API_KEY || !env.RESEND_FROM || !env.LEAD_TO_EMAIL) {
    console.error("Lead form worker is missing required environment bindings.");
    return jsonResponse({ ok: false, message: "目前暫時無法送出合作需求。" }, 503, origin);
  }

  const email = buildEmail(lead);
  const { error } = await sendEmail(env.RESEND_API_KEY, {
    from: env.RESEND_FROM,
    to: [env.LEAD_TO_EMAIL],
    replyTo: lead.email,
    subject: "新的 SnapShotMini 合作詢問",
    html: email.html,
    text: email.text,
    tags: [{ name: "source", value: "snapshotmini-form" }],
  }, `snapshotmini-lead/${lead.submissionId || crypto.randomUUID()}`);

  if (error) {
    console.error("Resend rejected a lead notification email.", { name: error.name });
    return jsonResponse({ ok: false, message: "目前暫時無法送出合作需求。" }, 502, origin);
  }

  return jsonResponse({ ok: true }, 200, origin);
}

export default {
  fetch(request: Request, env: Env) {
    return handleRequest(request, env);
  },
};
