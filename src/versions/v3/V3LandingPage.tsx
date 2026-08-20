import { flowScreens, useCases } from "../../data/content";
import { FaqList, InquiryForm } from "../shared/LandingPrimitives";
import "./v3.css";

export function V3LandingPage() {
  return (
    <main className="v3-page" id="top">
      <nav className="v3-nav" aria-label="主要導覽">
        <a href="#top" className="v3-brand"><span>SM</span> SnapShotMini</a>
        <div className="v3-links"><a href="#v3-product">30 cm</a><a href="#v3-route">拍貼路線</a><a href="#v3-scenes">營運方向</a></div>
        <a className="v3-cta" href="#v3-contact">打造專屬拍貼 →</a>
      </nav>

      <section className="v3-hero">
        <div className="v3-hero-copy">
          <h1>完整拍貼體驗，<br />下一站：你的櫃檯。</h1>
          <p>臺灣首創桌上型拍貼機。從一坪落地設備，縮成 30 公分見方，讓咖啡廳、文創店與品牌門市也能輕鬆導入。</p>
          <div><a href="#v3-contact">規劃你的站點</a><a href="#v3-route">查看完整路線</a></div>
        </div>
        <div className="v3-hero-map" aria-label="SnapShotMini 尺寸與產品示意">
          <div className="v3-loop"><span>30 cm</span><span>10 吋</span><span>10 kg</span></div>
          <img src="/images/product/source/product-angle-front.jpg" alt="SnapShotMini 桌上型拍貼機" />
          <p><b>SM</b><span>臺灣首創桌上型拍貼機</span></p>
        </div>
      </section>

      <section className="v3-size" id="v3-product">
        <div className="v3-size-label"><span className="v3-dot v3-dot-blue" /> <b>空間線</b><small>SPACE LINE</small></div>
        <div className="v3-size-story"><h2>傳統拍貼機約需一坪。<br />SnapShotMini 只需一個桌面站位。</h2><p>保留螢幕、鏡頭與出紙空間，讓完整體驗進入坪效更重要的店面。</p></div>
        <div className="v3-size-track"><span>1 坪</span><i /><strong>30 × 30 × 30 cm</strong></div>
      </section>

      <section className="v3-route" id="v3-route">
        <div className="v3-route-head"><div><span className="v3-dot v3-dot-red" /> <b>體驗線</b><small>EXPERIENCE LINE</small></div><h2>從開始，到帶走，<br />每一站只做一件事。</h2><p>品牌招待會略過付款站；付費販售則在拍照前完成支付。</p></div>
        <div className="v3-stations">
          {flowScreens.map((screen, index) => (
            <article key={screen.title}>
              <div className="v3-station-marker"><span>{index + 1}</span></div>
              <img src={screen.image} alt={screen.alt} />
              <h3>{screen.title}</h3><p>{screen.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v3-custom">
        <div className="v3-custom-info"><div><span className="v3-dot v3-dot-yellow" /> <b>客製線</b><small>CUSTOM LINE</small></div><h2>品牌內容不只停在照片外框。</h2><p>設備首頁、相框版型與機身外觀，都能成為合作店家的專屬站點識別。</p></div>
        <div className="v3-custom-grid"><img src="/images/flow/s1-device-home.png" alt="客製設備首頁" /><img src="/assets/reference/idol-support-frame-layout.jpg" alt="客製相框版型" /><img src="/assets/reference/character-frame-template.jpg" alt="角色聯名相框" /></div>
      </section>

      <section className="v3-scenes" id="v3-scenes">
        <div className="v3-scene-head"><span className="v3-dot v3-dot-green" /> <b>營運線</b><small>OPERATION LINE</small></div>
        <div className="v3-scene-panes">
          {useCases.map((item) => <article key={item.title}><img src={item.image} alt={item.alt} /><div><strong>{item.caption}</strong><h2>{item.title}</h2><p>{item.description}</p></div></article>)}
        </div>
      </section>

      <section className="v3-faq"><div><h2>轉乘合作之前，<br />你可能會問。</h2></div><FaqList /></section>
      <section className="v3-contact" id="v3-contact"><div><span className="v3-dot v3-dot-yellow" /><h2>把下一站，<br />設在你的店裡。</h2><p>留下店家資料，讓我們依場域與品牌內容規劃合適的導入方式。</p></div><InquiryForm /></section>
      <footer className="v3-footer"><b><span>SM</span> SnapShotMini</b><p>臺灣首創桌上型拍貼機</p><a href="#top">回到起點 ↑</a></footer>
    </main>
  );
}
