import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { productSpecs } from "../data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProductBento() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>(".product-media").forEach((media) => {
        gsap.fromTo(
          media,
          { scale: 0.82, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top 88%",
              end: "center 52%",
              scrub: 0.8,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section id="product" ref={root} className="bg-canvas-soft px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1480px]">
        <div className="max-w-6xl">
          <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.05em] text-carbon">
            <span className="block">完整拍貼體驗，</span>
            <span className="block">放進 30 公分。</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.47] tracking-[-0.015em] text-carbon/65 md:text-xl">
            從客製首頁、相框版型到列印與電子檔，一台桌上型機器完成整段體驗。
          </p>
        </div>

        <div className="mt-16 grid grid-flow-dense grid-cols-1 auto-rows-[minmax(220px,1fr)] gap-5 lg:grid-cols-12 lg:grid-rows-2">
          <article className="group relative min-h-[620px] overflow-hidden rounded-[2.5rem] bg-[#fffdf8] lg:col-span-7 lg:row-span-2">
            <img
              src="/images/product/source/product-angle-left.jpg"
              alt="SnapShotMini 原型機產品側面"
              className="product-media h-full w-full object-cover object-center shadow-[0_24px_70px_rgba(76,53,42,.18)] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-carbon/10 bg-[#fffdf8]/94 p-7 text-carbon backdrop-blur-xl md:p-10">
              <h3 className="text-3xl font-black tracking-[-0.04em] md:text-[40px]">
                小機身，完整流程。
              </h3>
              <p className="mt-3 max-w-md text-[17px] leading-[1.47] text-carbon/65">
                保留真正需要的螢幕、鏡頭與出紙空間，讓拍貼體驗進得了更多店面。
              </p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2.5rem] border border-carbon/10 bg-[#fffdf8] p-6 lg:col-span-5 lg:row-span-1 md:p-8">
            <div className="grid h-full grid-cols-[0.82fr_1.18fr] items-center gap-5">
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-carbon md:text-[34px] md:leading-[1.08]">
                  從第一眼，到最後一張，都能是你的。
                </h3>
                <p className="mt-4 text-sm leading-6 text-carbon/68">
                  設備首頁與相框版型都能依品牌內容客製。
                </p>
              </div>
              <div className="relative h-full min-h-48">
                <img
                  src="/assets/reference/character-frame-template.jpg"
                  alt="角色聯名拍貼相框設計範例"
                  className="product-media absolute right-0 top-0 h-[74%] w-[62%] rotate-[4deg] rounded-2xl object-cover shadow-[0_18px_45px_rgba(76,53,42,.2)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.025]"
                  loading="lazy"
                />
                <img
                  src="/assets/reference/idol-support-frame-layout.jpg"
                  alt="應援主題拍貼相框排列範例"
                  className="product-media absolute bottom-0 left-0 h-[68%] w-[62%] -rotate-[5deg] rounded-2xl object-cover shadow-[0_18px_45px_rgba(76,53,42,.2)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-[2.5rem] bg-carbon p-7 text-white lg:col-span-3 lg:row-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">桌面空間</p>
            <div>
              <p className="text-[clamp(3rem,5vw,5rem)] font-black leading-none tracking-[-0.06em]">
                {productSpecs[0].value}
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">{productSpecs[0].unit}</p>
            </div>
          </article>

          <article className="grid grid-rows-2 overflow-hidden rounded-[2.5rem] border border-carbon/10 bg-[#fffdf8] text-carbon lg:col-span-2 lg:row-span-1">
            {productSpecs.slice(1).map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-end justify-between p-5 ${index === 0 ? "border-b border-carbon/20" : ""}`}
              >
                <div>
                  <p className="text-4xl font-black tracking-[-0.05em]">{spec.value}</p>
                  <p className="text-xs font-normal text-carbon/55">{spec.label}</p>
                </div>
                <p className="pb-1 font-normal text-primary">{spec.unit}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
