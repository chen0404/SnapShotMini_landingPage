import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { flowScreens } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function FlowExperience() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const title = root.current?.querySelector<HTMLElement>(".flow-title");
        const cards = gsap.utils.toArray<HTMLElement>(".flow-card");
        const gallery = root.current?.querySelector<HTMLElement>(".flow-gallery");

        if (!title || !gallery || cards.length === 0) return;

        ScrollTrigger.create({
          trigger: root.current,
          start: "top top+=96",
          endTrigger: gallery,
          end: "bottom bottom-=72",
          pin: title,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        cards.forEach((card) => {
          const image = card.querySelector(".flow-image");

          gsap.fromTo(
            image,
            { scale: 0.8, opacity: 0.22, filter: "brightness(0.55)" },
            {
              scale: 1,
              opacity: 1,
              filter: "brightness(1)",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                end: "center 54%",
                scrub: 0.8,
              },
            },
          );

          gsap.to(image, {
            opacity: 0.2,
            filter: "brightness(0.45)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "center 22%",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts.ready.then(refresh);

      return () => {
        window.removeEventListener("load", refresh);
        media.revert();
      };
    },
    { scope: root },
  );

  return (
    <section id="experience" ref={root} className="bg-carbon px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div className="flow-title h-fit lg:pt-10">
          <h2 className="max-w-3xl text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.05em]">
            從
            <span
              className="mx-3 inline-block h-[0.62em] w-[1.45em] translate-y-[0.04em] overflow-hidden rounded-full align-baseline"
              aria-hidden="true"
            >
              <img
                src="/images/flow/s1-device-home.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
            開始，到帶走。
          </h2>
          <p className="mt-7 max-w-md text-[17px] leading-[1.47] tracking-[-0.015em] text-white/64">
            每個畫面只做一件事，讓店內訪客從選相框到拿到照片都保持直覺。
          </p>
          <p className="mt-8 border-l-2 border-primary pl-5 text-sm font-normal leading-6 text-white/76">
            免費情境會略過付款，直接進入拍照。
          </p>
        </div>

        <div className="flow-gallery space-y-20 lg:space-y-32">
          {flowScreens.map((screen) => (
            <article key={screen.title} className="flow-card group">
              <div className="flow-image overflow-hidden rounded-[2.5rem] bg-[#fffdf8] p-3 shadow-[0_30px_80px_rgba(0,0,0,.3)] md:p-5">
                <div className="overflow-hidden rounded-lg bg-white">
                  <img
                    src={screen.image}
                    alt={screen.alt}
                    className="aspect-video h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-7 grid gap-3 border-t border-white/14 pt-5 md:grid-cols-[0.42fr_1fr] md:gap-8">
                <div>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">{screen.title}</h3>
                  {"note" in screen ? (
                    <p className="mt-2 text-xs font-semibold text-primary">{screen.note}</p>
                  ) : null}
                </div>
                <p className="max-w-xl text-[17px] leading-[1.47] text-white/62">{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
