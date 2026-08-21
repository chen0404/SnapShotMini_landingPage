import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { faqItems } from "../../data/content";

type FormState = "idle" | "submitting" | "success" | "error";
type RequiredField = "businessName" | "contactName" | "phone" | "email";
type FieldErrors = Partial<Record<RequiredField, string>>;

const requiredFields: RequiredField[] = ["businessName", "contactName", "phone", "email"];

function isValidTaiwanPhone(value: string) {
  const normalized = value.replace(/[\s().-]/g, "");
  return /^(?:09\d{8}|0[2-8]\d{7,8}|\+886(?:9\d{8}|[2-8]\d{7,8}))$/.test(normalized);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validateField(name: RequiredField, value: string) {
  const normalized = value.trim();

  if (!normalized) {
    return {
      businessName: "請填寫店家或品牌名稱。",
      contactName: "請填寫聯絡人姓名。",
      phone: "請填寫聯絡電話。",
      email: "請填寫電子郵件。",
    }[name];
  }
  if (name === "phone" && !isValidTaiwanPhone(normalized)) {
    return "請輸入有效的臺灣電話，例如 0912 345 678 或 02-3765-5060。";
  }
  if (name === "email" && !isValidEmail(normalized)) {
    return "請輸入完整的電子郵件，例如 name@example.com。";
  }
  return "";
}

function validateRequiredFields(formData: FormData) {
  return requiredFields.reduce<FieldErrors>((errors, name) => {
    const value = formData.get(name);
    const error = validateField(name, typeof value === "string" ? value : "");
    if (error) errors[name] = error;
    return errors;
  }, {});
}

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const submissionId = useRef("");
  const formId = useId();

  function handleFieldBlur(event: FocusEvent<HTMLInputElement>) {
    const name = event.currentTarget.name as RequiredField;
    const error = validateField(name, event.currentTarget.value);
    setFieldErrors((current) => ({ ...current, [name]: error || undefined }));
  }

  function handleFieldChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name as RequiredField;
    if (!fieldErrors[name]) return;
    const error = validateField(name, event.currentTarget.value);
    setFieldErrors((current) => ({ ...current, [name]: error || undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validateRequiredFields(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setState("error");
      setMessage("請確認標示欄位後再送出。");
      const firstInvalidField = requiredFields.find((name) => errors[name]);
      if (firstInvalidField) {
        (form.elements.namedItem(firstInvalidField) as HTMLInputElement | null)?.focus();
      }
      return;
    }

    setFieldErrors({});
    const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT;

    if (!endpoint) {
      setState("error");
      setMessage("目前暫時無法送出合作需求，請稍後再試。");
      return;
    }

    setState("submitting");
    setMessage("");
    if (!submissionId.current) submissionId.current = crypto.randomUUID();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(formData),
          submissionId: submissionId.current,
        }),
      });
      if (!response.ok) throw new Error("Lead form request failed");
      form.reset();
      submissionId.current = "";
      setFieldErrors({});
      setState("success");
      setMessage("資料已送出，我們會由專人與你聯繫。");
    } catch {
      setState("error");
      setMessage("目前暫時無法送出合作需求，請稍後再試。");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={state === "submitting"} noValidate>
      <label className="inquiry-honeypot" aria-hidden="true">
        <span>網站</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="inquiry-grid">
        <label className={fieldErrors.businessName ? "has-error" : undefined}>
          <span>店家或品牌名稱（必填）</span>
          <input
            name="businessName"
            autoComplete="organization"
            maxLength={100}
            required
            aria-invalid={Boolean(fieldErrors.businessName)}
            aria-describedby={fieldErrors.businessName ? `${formId}-business-name-error` : undefined}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          {fieldErrors.businessName ? <span className="inquiry-field-error" id={`${formId}-business-name-error`}>{fieldErrors.businessName}</span> : null}
        </label>
        <label className={fieldErrors.contactName ? "has-error" : undefined}>
          <span>聯絡人姓名（必填）</span>
          <input
            name="contactName"
            autoComplete="name"
            maxLength={50}
            required
            aria-invalid={Boolean(fieldErrors.contactName)}
            aria-describedby={fieldErrors.contactName ? `${formId}-contact-name-error` : undefined}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          {fieldErrors.contactName ? <span className="inquiry-field-error" id={`${formId}-contact-name-error`}>{fieldErrors.contactName}</span> : null}
        </label>
        <label className={fieldErrors.phone ? "has-error" : undefined}>
          <span>聯絡電話（必填）</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? `${formId}-phone-hint ${formId}-phone-error` : `${formId}-phone-hint`}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          <span className="inquiry-field-hint" id={`${formId}-phone-hint`}>格式範例：0912 345 678、02-3765-5060</span>
          {fieldErrors.phone ? <span className="inquiry-field-error" id={`${formId}-phone-error`}>{fieldErrors.phone}</span> : null}
        </label>
        <label className={fieldErrors.email ? "has-error" : undefined}>
          <span>電子郵件（必填）</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            spellCheck={false}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? `${formId}-email-hint ${formId}-email-error` : `${formId}-email-hint`}
            onBlur={handleFieldBlur}
            onChange={handleFieldChange}
          />
          <span className="inquiry-field-hint" id={`${formId}-email-hint`}>請輸入完整信箱，例如 name@example.com</span>
          {fieldErrors.email ? <span className="inquiry-field-error" id={`${formId}-email-error`}>{fieldErrors.email}</span> : null}
        </label>
        <label>
          <span>店家類型（選填）</span>
          <select name="businessType" defaultValue="">
            <option value="">請選擇</option>
            <option value="cafe">咖啡廳</option>
            <option value="creative-store">文創店</option>
            <option value="chain-brand">品牌連鎖店</option>
            <option value="other">其他</option>
          </select>
        </label>
        <label>
          <span>門市數量（選填）</span>
          <input name="locations" type="number" min="1" max="999" inputMode="numeric" />
        </label>
      </div>
      <label className="inquiry-notes">
        <span>合作需求（選填）</span>
        <textarea name="notes" rows={4} maxLength={1000} autoComplete="off" />
      </label>
      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? <><span className="inquiry-spinner" aria-hidden="true" />正在送出…</> : "送出合作需求"}
      </button>
      <p className="inquiry-legal">
        送出代表你同意由專人依填寫資訊與你聯繫，並同意
        <a href="https://snapfoto.co/%e9%9a%b1%e7%a7%81%e6%ac%8a%e6%94%bf%e7%ad%96" target="_blank" rel="noreferrer">隱私權政策</a>。
      </p>
      {message ? (
        <p className={`inquiry-message is-${state}`} role={state === "error" ? "alert" : "status"} aria-live="polite">{message}</p>
      ) : null}
    </form>
  );
}

export function FaqList() {
  return (
    <div className="faq-list">
      {faqItems.map((item) => (
        <details key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span aria-hidden="true">＋</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
