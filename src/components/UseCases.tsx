import { useCases } from "../data/content";

export function UseCases() {
  return (
    <section id="use-cases" className="bg-canvas px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.05em] text-carbon">
          客人想印的理由，不只一種。
        </h2>

        <div className="case-accordion mt-16 flex min-h-[680px] flex-col gap-5 lg:flex-row">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.title}
              className={`case-panel group grid min-h-[520px] cursor-default grid-rows-[1fr_auto] overflow-hidden rounded-[2.5rem] border border-carbon/10 bg-[#fffdf8] lg:min-h-[680px] ${index === 0 ? "lg:flex-[1.2]" : "lg:flex-1"}`}
              tabIndex={0}
            >
              <img
                src={useCase.image}
                alt={useCase.alt}
                className="h-full min-h-0 w-full object-cover shadow-[0_24px_70px_rgba(76,53,42,.18)] transition-transform duration-700 ease-out group-hover:scale-[1.025] group-focus:scale-[1.025]"
                loading="lazy"
              />
              <div className="relative border-t border-carbon/10 bg-[#fffdf8] p-7 text-carbon md:p-10 lg:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">{useCase.caption}</p>
                <h3 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.045em] md:text-[40px]">
                  {useCase.title}
                </h3>
                <p className="mt-4 max-w-xl text-[17px] leading-[1.47] text-carbon/65">
                  {useCase.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
