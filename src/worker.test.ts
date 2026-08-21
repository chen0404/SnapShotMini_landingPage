import { describe, expect, it, vi } from "vitest";
import { handleRequest } from "../worker/index";

const origin = "https://chen0404.github.io";
const env = {
  ALLOWED_ORIGINS: origin,
  LEAD_TO_EMAIL: "chen@snapfoto.co",
  RESEND_API_KEY: "re_test_only",
  RESEND_FROM: "SnapShotMini 合作詢問 <onboarding@resend.dev>",
};
const lead = {
  businessName: "測試品牌 <script>",
  contactName: "陳小姐",
  phone: "02-3765-5060",
  email: "visitor@example.com",
  businessType: "cafe",
  locations: "2",
  notes: "希望了解合作方式",
  submissionId: "submission_test_1",
  website: "",
};

function createRequest(body: unknown, requestOrigin = origin) {
  return new Request("https://worker.example.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: requestOrigin },
    body: JSON.stringify(body),
  });
}

describe("lead form worker", () => {
  it("sends a validated lead to the fixed recipient with Reply-To", async () => {
    const sendEmail = vi.fn().mockResolvedValue({ error: null });
    const response = await handleRequest(createRequest(lead), env, sendEmail);

    expect(response.status).toBe(200);
    expect(sendEmail).toHaveBeenCalledOnce();
    const [apiKey, email, idempotencyKey] = sendEmail.mock.calls[0];
    expect(apiKey).toBe("re_test_only");
    expect(email.from).toBe("SnapShotMini 合作詢問 <onboarding@resend.dev>");
    expect(email.to).toEqual(["chen@snapfoto.co"]);
    expect(email.replyTo).toBe("visitor@example.com");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).not.toContain("測試品牌 <script>");
    expect(idempotencyKey).toBe("snapshotmini-lead/submission_test_1");
  });

  it("rejects requests from an unknown origin", async () => {
    const sendEmail = vi.fn();
    const response = await handleRequest(createRequest(lead, "https://attacker.example"), env, sendEmail);

    expect(response.status).toBe(403);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects invalid lead data", async () => {
    const sendEmail = vi.fn();
    const response = await handleRequest(createRequest({ ...lead, email: "chen@mem" }), env, sendEmail);

    expect(response.status).toBe(422);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects invalid phone numbers", async () => {
    const sendEmail = vi.fn();
    const response = await handleRequest(createRequest({ ...lead, phone: "1234" }), env, sendEmail);

    expect(response.status).toBe(422);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it.each(["businessName", "contactName", "phone", "email"])(
    "rejects a missing required %s field",
    async (field) => {
      const sendEmail = vi.fn();
      const response = await handleRequest(createRequest({ ...lead, [field]: "" }), env, sendEmail);

      expect(response.status).toBe(422);
      expect(sendEmail).not.toHaveBeenCalled();
    },
  );

  it("accepts a lead without optional fields", async () => {
    const sendEmail = vi.fn().mockResolvedValue({ error: null });
    const response = await handleRequest(createRequest({
      ...lead,
      businessType: "",
      locations: "",
      notes: "",
    }), env, sendEmail);

    expect(response.status).toBe(200);
    expect(sendEmail).toHaveBeenCalledOnce();
    const email = sendEmail.mock.calls[0][1];
    expect(email.html.match(/未填寫/g)).toHaveLength(3);
  });

  it("accepts honeypot submissions without sending email", async () => {
    const sendEmail = vi.fn();
    const response = await handleRequest(createRequest({ ...lead, website: "spam.example" }), env, sendEmail);

    expect(response.status).toBe(200);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns a safe error when Resend rejects the email", async () => {
    const sendEmail = vi.fn().mockResolvedValue({
      error: { message: "rejected", name: "validation_error" },
    });
    const response = await handleRequest(createRequest(lead), env, sendEmail);

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, message: "目前暫時無法送出合作需求。" });
  });
});
