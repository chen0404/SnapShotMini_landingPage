import { flowScreens, productSpecs, useCases } from "../../data/content";
import { FaqList, InquiryForm } from "../shared/LandingPrimitives";
import "./v4.css";

export function V4LandingPage() {
  return (
    <main className="v4-page" id="top">
      <header className="v4-topbar"><a href="#top">SNAPSHOT MINI / POS</a><nav><a href="#v4-product">產品規格</a><a href="#v4-flow">拍貼流程</a><a href="#v4-contact">合作詢問</a></nav><a href="#v4-contact">提出合作詢問 →</a></header>
      <div className="v4-receipt">
        <section className="v4-hero">
          <div className="v4-receipt-head"><strong>SNAPSHOT MINI</strong><span>TAIWAN / DESKTOP PHOTO EXPERIENCE</span><span>INQUIRY: YOUR NEXT STORE MEMORY</span></div>
          <h1>一坪的拍貼機，<br />結帳成 30 公分。</h1>
          <p>臺灣首創桌上型拍貼機，把客製相框版型、拍照、付款、列印與電子檔，完整放上咖啡廳、文創店與品牌門市的櫃檯。</p>
          <div className="v4-hero-product"><img src="/images/product/source/product-angle-front.jpg" alt="SnapShotMini 桌上型拍貼機" /><div><span>QTY 01</span><b>30 × 30 × 30 CM</b><span>COUNTERTOP READY</span></div></div>
          <a className="v4-primary" href="#v4-contact">打造專屬拍貼</a>
        </section>

        <section className="v4-specs" id="v4-product">
          <h2>產品規格</h2><p className="v4-rule">ITEM -------------------------------- DETAILS</p>
          {productSpecs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value} {spec.unit}</strong></div>)}
          <div><span>市場定位</span><strong>臺灣首創桌上型拍貼機</strong></div><div><span>適用場域</span><strong>咖啡廳 / 文創店 / 品牌門市</strong></div>
          <p className="v4-total"><span>傳統設備佔地</span><del>約 1 坪</del><b>本機：30 CM 桌面</b></p>
        </section>

        <section className="v4-custom"><h2>客製合作內容</h2><p>不是固定套版。每次合作都能依品牌與活動需求討論。</p><div className="v4-custom-pics"><figure><img src="/images/flow/s1-device-home.png" alt="客製設備首頁" /><figcaption>設備首頁</figcaption></figure><figure><img src="/assets/reference/idol-support-frame-layout.jpg" alt="相框版型範例" /><figcaption>相框版型</figcaption></figure><figure><img src="/images/product/source/product-front.jpg" alt="機身外觀" /><figcaption>機身外觀</figcaption></figure></div></section>

        <section className="v4-flow" id="v4-flow"><h2>處理流程</h2><p className="v4-rule">STATUS ------------------------------ OUTPUT</p>{flowScreens.map((screen,index)=><article key={screen.title}><span>[{index+1}/6]</span><img src={screen.image} alt={screen.alt}/><div><h3>{screen.title}</h3><p>{screen.description}</p></div><b>✓</b></article>)}</section>

        <section className="v4-scenes">{useCases.map((item,index)=><article key={item.title}><span>MODE {index+1}</span><img src={item.image} alt={item.alt}/><h2>{item.title}</h2><p>{item.description}</p><strong>{item.caption}</strong></article>)}</section>

        <section className="v4-faq"><h2>合作備註</h2><FaqList /></section>
        <section className="v4-contact" id="v4-contact"><div><h2>確認合作需求</h2><p>送出不是下單。我們會由專人依品牌、場域與營運方式聯繫討論。</p></div><InquiryForm /></section>
        <footer className="v4-footer"><div className="v4-barcode" aria-hidden="true"/><strong>THANK YOU / KEEP THE MOMENT</strong><span>SNAPSHOTMINI.TW</span><a href="#top">BACK TO TOP ↑</a></footer>
      </div>
    </main>
  );
}
