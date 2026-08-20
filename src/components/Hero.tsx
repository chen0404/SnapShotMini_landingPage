import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChromeButton } from "./ChromeButton";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".hero-copy > *", {
          y: 42,
          opacity: 0,
          duration: 0.9,
          stagger: 0.11,
        })
        .from(
          ".hero-machine",
          { x: 120, y: 70, rotate: 4, scale: 0.86, opacity: 0, duration: 1.2 },
          "-=0.75",
        )
        .from(
          ".hero-shadow",
          { scaleX: 0.5, opacity: 0, duration: 0.8 },
          "-=0.8",
        );
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-canvas px-5 pb-0 pt-24 md:px-10 md:pt-28 lg:px-14"
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div className="hero-copy relative z-20 max-w-2xl lg:pb-10 lg:pl-10">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-carbon/54">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            桌上型拍貼體驗
          </p>
          <h1 className="w-full text-[clamp(2.9rem,5vw,4.8rem)] font-black leading-[0.98] tracking-[-0.055em] text-carbon [text-wrap:balance]">
            今天的我們，值得一張。
          </h1>
          <p className="mt-6 max-w-xl text-[17px] font-normal leading-[1.47] tracking-[-0.015em] text-carbon/70 md:text-xl">
            店內限定相框，讓每次相聚都能立即拍下、印出、帶走。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ChromeButton href="#contact">打造專屬拍貼</ChromeButton>
            <ChromeButton href="#experience" variant="carbon">
              看看怎麼運作
            </ChromeButton>
          </div>
        </div>

        <div className="relative z-10 -mx-5 mt-2 min-h-[480px] md:-mx-10 lg:-mr-14 lg:min-h-[720px]">
          <div className="hero-shadow absolute bottom-[4%] left-[18%] h-[7%] w-[64%] rounded-full bg-carbon/20 blur-2xl" />
          <div className="hero-machine absolute inset-0 overflow-hidden bg-canvas shadow-[0_28px_70px_-28px_rgba(70,50,40,.35)]">
            <img
              src="/images/product/source/product-angle-front.jpg"
              alt="SnapShotMini 白色桌上型拍貼機原型"
              className="h-full w-full object-cover object-[50%_48%]"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/20 bg-carbon/82 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
              <span>SnapShotMini</span>
              <span>30 × 30 × 30 cm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
