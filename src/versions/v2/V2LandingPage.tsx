import { flowScreens, useCases } from "../../data/content";
import { FaqList, InquiryForm } from "../shared/LandingPrimitives";
import "./v2.css";

export function V2LandingPage() {
  return (
    <main className="v2-page" id="top">
      <nav className="v2-nav" aria-label="主要導覽">
        <a href="#top" className="v2-logo">SNAPSHOT MINI</a>
        <div><a href="#v2-proof">產品</a><a href="#v2-flow">流程</a><a href="#v2-scenes">情境</a></div>
        <a href="#v2-contact" className="v2-nav-cta">打造專屬拍貼</a>
      </nav>

      <section className="v2-hero">
        <div className="v2-hero-title">
          <h1>把店裡的今天，<br />沖印成只有這裡有的一張。</h1>
          <p>臺灣首創桌上型拍貼機，30 公分見方，從客製相框版型一路完成拍照、列印與電子檔。</p>
          <a href="#v2-contact">開始一場店內限定拍貼</a>
        </div>
        <div className="v2-contact-sheet" aria-label="SnapShotMini 拍貼接觸印樣">
          <figure><img src="/assets/reference/character-frame-showcase.jpg" alt="角色聯名拍貼成果" /><figcaption>品牌招待</figcaption></figure>
          <figure><img src="/images/product/source/product-front.jpg" alt="SnapShotMini 桌上型拍貼機" /><figcaption>30 × 30 × 30 cm</figcaption></figure>
          <figure><img src="/assets/reference/creator-anniversary-collaboration.jpg" alt="創作者聯名拍貼成果" /><figcaption>付費販售</figcaption></figure>
        </div>
        <img className="v2-proof-mark v2-proof-mark-hero" src="/images/direction/v2-proof-mark.svg" alt="" aria-hidden="true" />
        <div className="v2-film-edge"><span>SNAPSHOT MINI</span><span>TAIWAN FIRST DESKTOP PHOTO EXPERIENCE</span><span>2026</span></div>
      </section>

      <section className="v2-proof" id="v2-proof">
        <div className="v2-proof-copy">
          <h2>大型機器需要一坪。<br />這一台，只需要你的櫃檯。</h2>
          <p>保留 10 吋觸控螢幕、鏡頭與出紙空間，把完整拍貼流程收進約 10 kg 的桌上型機身。</p>
        </div>
        <div className="v2-negative">
          <img src="/images/product/source/product-angle-left.jpg" alt="SnapShotMini 原型機側面" />
          <div><b>30</b><span>cm / width</span></div>
          <div><b>10</b><span>inch / touch</span></div>
          <div><b>10</b><span>kg / body</span></div>
        </div>
      </section>

      <section className="v2-process" id="v2-flow">
        <div className="v2-process-head"><h2>一卷拍完，六格完成。</h2><p>付費販售才出現付款格；品牌招待會直接進入拍照。</p></div>
        <div className="v2-film-strip">
          {flowScreens.map((screen) => (
            <article key={screen.title}>
              <div className="v2-frame"><img src={screen.image} alt={screen.alt} /></div>
              <h3>{screen.title}</h3><p>{screen.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-custom">
        <div className="v2-custom-copy"><h2>每間店，都能有自己的相紙。</h2><p>設備首頁、相框版型與機身外觀可依品牌或活動內容討論客製。</p></div>
        <div className="v2-print-stack">
          <img src="/images/flow/s1-device-home.png" alt="客製設備首頁" />
          <img src="/assets/reference/idol-support-frame-layout.jpg" alt="應援主題相框版型" />
          <img src="/assets/reference/character-frame-template.jpg" alt="角色相框版型" />
          <img className="v2-proof-mark v2-proof-mark-stack" src="/images/direction/v2-proof-mark.svg" alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="v2-scenes" id="v2-scenes">
        {useCases.map((item, index) => (
          <article key={item.title}>
            <div className="v2-scene-image"><img src={item.image} alt={item.alt} /><span>{index === 0 ? "COMPLIMENTARY" : "PAID EDITION"}</span></div>
            <div><h2>{item.title}</h2><p>{item.description}</p><strong>{item.caption}</strong></div>
          </article>
        ))}
      </section>

      <section className="v2-faq"><div><h2>沖印之前，<br />先把合作問清楚。</h2></div><FaqList /></section>

      <section className="v2-contact" id="v2-contact">
        <div><h2>下一卷，<br />從你的店開始。</h2><p>留下店家資料，我們會依品牌、場域與營運方式討論客製內容。</p></div>
        <InquiryForm />
      </section>

      <footer className="v2-footer"><strong>SNAPSHOT MINI</strong><span>臺灣首創桌上型拍貼機</span><a href="#top">TOP ↑</a></footer>
    </main>
  );
}
