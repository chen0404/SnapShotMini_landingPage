import { useState, type FormEvent } from "react";
import { faqItems } from "../../data/content";

type FormState = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT;

    if (!endpoint) {
      setState("error");
      setMessage("目前暫時無法送出合作需求，請稍後再試。");
      return;
    }

    setState("submitting");
    setMessage("");
    const form = event.currentTarget;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Lead form request failed");
      form.reset();
      setState("success");
      setMessage("資料已送出，我們會由專人與你聯繫。");
    } catch {
      setState("error");
      setMessage("目前暫時無法送出合作需求，請稍後再試。");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} aria-busy={state === "submitting"}>
      <div className="inquiry-grid">
        <label>
          <span>店家或品牌名稱</span>
          <input name="businessName" autoComplete="organization" maxLength={100} required />
        </label>
        <label>
          <span>聯絡人姓名</span>
          <input name="contactName" autoComplete="name" maxLength={50} required />
        </label>
        <label>
          <span>聯絡電話</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={30} required />
        </label>
        <label>
          <span>電子郵件</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} spellCheck={false} required />
        </label>
        <label>
          <span>店家類型</span>
          <select name="businessType" defaultValue="" required>
            <option value="" disabled>請選擇</option>
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
      <p className="inquiry-legal">送出代表你同意由專人依填寫資訊與你聯繫。</p>
      {message ? (
        <p className={`inquiry-message is-${state}`} role="status" aria-live="polite">{message}</p>
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
