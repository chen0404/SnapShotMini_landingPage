import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_LEAD_FORM_ENDPOINT;

    if (!endpoint) {
      setState("error");
      setMessage("名單接收端點尚未設定，請先由開發團隊完成串接。");
      return;
    }

    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead form request failed");

      form.reset();
      setState("success");
      setMessage("資料已送出，我們會由專人與你聯繫。");
    } catch {
      setState("error");
      setMessage("目前無法送出，請稍後再試。");
    }
  }

  return (
    <section id="contact" className="bg-canvas px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[2.5rem] border border-carbon/10 bg-carbon text-white lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="relative">
            <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.05em]">
              讓下一張，出現在你的店裡。
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.47] text-white/64">
              留下店家資料，我們會由專人聯繫，依品牌與場域討論合適的客製內容。
            </p>
          </div>
        </div>

        <form
          className="bg-canvas-soft p-8 text-carbon md:p-12 lg:p-16"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="form-field">
              <span>店家或品牌名稱</span>
              <input name="businessName" autoComplete="organization" required />
            </label>
            <label className="form-field">
              <span>聯絡人</span>
              <input name="contactName" autoComplete="name" required />
            </label>
            <label className="form-field">
              <span>聯絡電話</span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="form-field">
              <span>店家類型</span>
              <select name="businessType" defaultValue="" required>
                <option value="" disabled>
                  請選擇
                </option>
                <option value="cafe">咖啡廳</option>
                <option value="creative-store">文創店</option>
                <option value="chain-brand">品牌連鎖店</option>
                <option value="other">其他</option>
              </select>
            </label>
            <label className="form-field">
              <span>門市數量</span>
              <input name="locations" type="number" min="1" inputMode="numeric" />
            </label>
          </div>

          <label className="form-field mt-6">
            <span>想補充的需求</span>
            <textarea name="notes" rows={4} />
          </label>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="mt-7 min-h-12 w-full rounded-full bg-primary px-6 py-3 text-[17px] font-semibold text-white transition duration-200 hover:bg-[#ad4935] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
          >
            {state === "submitting" ? "正在送出" : "打造專屬拍貼"}
          </button>

          <p className="mt-4 text-xs leading-5 text-carbon/58">
            送出代表你同意由專人依填寫資訊與你聯繫，並同意
            <a className="underline" href="https://snapfoto.co/%e9%9a%b1%e7%a7%81%e6%ac%8a%e6%94%bf%e7%ad%96" target="_blank" rel="noreferrer">隱私權政策</a>。
          </p>

          {message ? (
            <p
              role="status"
              className={`mt-5 rounded-lg px-4 py-3 text-sm font-semibold ${state === "success" ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
