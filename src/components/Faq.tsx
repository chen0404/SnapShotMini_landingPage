import { faqItems } from "../data/content";

export function Faq() {
  return (
    <section id="faq" className="bg-canvas-soft px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div>
          <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.05em] text-carbon">
            合作前，你可能會想知道。
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-[1.47] text-carbon/62">
            合作內容會依品牌與場域客製。這裡先回答產品本身最常見的問題。
          </p>
        </div>

        <div className="border-t border-carbon/12">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item group border-b border-carbon/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-xl font-semibold tracking-[-0.02em] text-carbon md:text-2xl">
                {item.question}
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-carbon/6 text-2xl font-normal text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-8 pr-12 text-[17px] leading-[1.47] text-carbon/64">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
