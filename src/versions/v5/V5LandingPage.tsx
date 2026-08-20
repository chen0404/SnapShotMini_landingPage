import { useState } from "react";
import { flowScreens, useCases } from "../../data/content";
import { publicAsset } from "../../utils/publicAsset";
import { FaqList, InquiryForm } from "../shared/LandingPrimitives";
import "./v5.css";

const views = [
  { id: "front", label: "正面", image: publicAsset("images/product/optimized/product-front-optimized.webp") },
  { id: "angle", label: "斜角", image: publicAsset("images/product/optimized/product-angle-front-optimized.webp") },
  { id: "side", label: "側面", image: publicAsset("images/product/optimized/product-angle-left-optimized.webp") },
] as const;

export function V5LandingPage() {
  const [view, setView] = useState<(typeof views)[number]["id"]>("angle");
  const activeView = views.find((item) => item.id === view) ?? views[1];

  return (
    <main className="v5-page" id="top">
      <a className="v5-skip-link" href="#v5-main-content">跳到主要內容</a>
      <nav className="v5-nav" aria-label="主要導覽"><a className="v5-logo" href="#top" translate="no">SNAPSHOT<span>MINI</span></a><div><a href="#v5-spec">產品規格</a><a href="#v5-flow">拍貼流程</a><a href="#v5-scenes">營運情境</a></div><a className="v5-cta" href="#v5-contact">洽談客製合作</a></nav>

      <section className="v5-hero" id="v5-main-content" tabIndex={-1}>
        <div className="v5-hero-copy"><h1>不用騰出一坪，<br /><em>也能把專屬拍貼體驗帶進店裡。</em></h1><p>SnapShotMini 是臺灣首創桌上型拍貼機，約 30 公分見方，就能完成拍照、列印與電子檔下載。設備首頁、相框版型與機身外觀，也能依品牌或活動需求客製。</p><a href="#v5-contact">洽談客製合作 →</a></div>
        <div className="v5-character-card">
          <div className="v5-card-title"><span>SNAPSHOT MINI</span><b>桌上型機種</b></div>
          <img id="v5-product-view" src={activeView.image} alt={`SnapShotMini 產品${activeView.label}視圖`} width="1200" height="1200" fetchPriority="high" decoding="async" />
          <div className="v5-view-tabs" role="group" aria-label="切換產品視角">{views.map((item)=><button key={item.id} type="button" className={view===item.id?"is-active":undefined} aria-pressed={view===item.id} aria-controls="v5-product-view" onClick={()=>setView(item.id)}>{item.label}</button>)}</div>
          <dl><div><dt>尺寸</dt><dd>30 × 30 × 30 公分</dd></div><div><dt>螢幕</dt><dd>10 吋觸控螢幕</dd></div><div><dt>重量</dt><dd>約 10 公斤</dd></div></dl>
        </div>
      </section>

      <section className="v5-spec" id="v5-spec"><div className="v5-section-title"><h2>櫃檯放得下的完整拍貼機</h2><p>機身約 30 × 30 × 30 公分，不必騰出傳統拍貼機約一坪的空間。</p></div><div className="v5-spec-board"><div className="v5-view-grid">{views.map((item)=><figure key={item.id}><img src={item.image} alt={`SnapShotMini ${item.label}產品視圖`} width="1200" height="1200" loading="lazy" decoding="async"/><figcaption>{item.label}視圖</figcaption></figure>)}</div><div className="v5-swatches"><h3>可依品牌客製的內容</h3><div><span className="purple">設備首頁</span><span className="lime">相框版型</span><span className="pink">機身外觀</span><span className="cyan">列印與掃碼下載</span></div><p>設備首頁、相框版型與機身外觀，都能依品牌或活動需求討論。</p></div></div></section>

      <section className="v5-flow" id="v5-flow">
        <div className="v5-section-title"><h2>6 個步驟，完成拍照、列印與下載</h2><p>品牌招待情境不顯示付款步驟；付費販售情境則在拍照前完成付款。</p></div>
        <p className="v5-flow-hint">← 左右滑動查看 6 個步驟 →</p>
        <div className="v5-action-grid" role="region" aria-label="拍貼流程，可左右滑動查看" tabIndex={0}>
          {flowScreens.map((screen,index)=><article key={screen.title}><span>{String(index+1).padStart(2,"0")}</span><img src={screen.image} alt={screen.alt} width={screen.width} height={screen.height} loading="lazy" decoding="async"/><h3>{screen.title}</h3><p>{screen.description}</p></article>)}
        </div>
      </section>

      <section className="v5-frames">
        <div><h2>每一次聯名，都能成為店內限定收藏。</h2><p>不是只把品牌標誌貼上去，而是把相框版型設計成值得帶走的限定內容。</p></div>
        <div className="v5-frame-stack">
          <figure><img src={publicAsset("images/frames/idol-support-frame.webp")} alt="原創偶像應援主題相框情境" width="1024" height="1536" loading="lazy" decoding="async"/><figcaption>應援</figcaption></figure>
          <figure><img src={publicAsset("images/frames/illustrator-collaboration-frame.webp")} alt="原創插畫家聯名相框情境" width="1024" height="1536" loading="lazy" decoding="async"/><figcaption>創作者</figcaption></figure>
          <figure><img src={publicAsset("images/frames/coffee-shop-brand-frame.webp")} alt="原創咖啡店品牌相框情境" width="1024" height="1536" loading="lazy" decoding="async"/><figcaption>門市設計</figcaption></figure>
        </div>
      </section>

      <section className="v5-scenes" id="v5-scenes"><h2>一台設備，兩種營運情境</h2><div>{useCases.map((item,index)=><article key={item.title}><span className={index===0?"lime":"pink"}>{item.caption}</span><img src={item.image} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async"/><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>

      <section className="v5-faq"><h2>合作前，你可能會想知道</h2><FaqList /></section>
      <section className="v5-contact" id="v5-contact"><div><h2>聊聊你想打造的拍貼體驗</h2><p>留下品牌、場域與營運需求，專人會與你聯繫，確認適合的客製內容與合作方式。</p></div><InquiryForm /></section>
      <footer className="v5-footer"><strong translate="no">SNAPSHOT MINI</strong><span>讓櫃檯成為記憶發生的地方。</span><a href="#top">回到頂端 ↑</a></footer>
    </main>
  );
}
