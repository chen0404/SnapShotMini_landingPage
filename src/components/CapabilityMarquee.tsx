import { marqueeItems } from "../data/content";

export function CapabilityMarquee() {
  return (
    <div className="marquee-shell overflow-hidden bg-carbon py-5 text-white">
      <div className="marquee-track flex w-max items-center motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1 ? true : undefined}
          >
            {marqueeItems.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center whitespace-nowrap px-7 text-sm font-semibold tracking-[-0.02em] md:px-12 md:text-[17px]"
              >
                {item}
                <span className="ml-12 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
