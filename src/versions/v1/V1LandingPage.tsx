import { flowScreens, productSpecs, useCases } from "../../data/content";
import { FaqList, InquiryForm } from "../shared/LandingPrimitives";
import "./v1.css";

export function V1LandingPage() {
  return (
    <main className="v1-page" id="top">
      <nav className="v1-nav" aria-label="主要導覽">
        <a className="v1-logo" href="#top">SNAPSHOT<span>MINI</span></a>
        <div className="v1-nav-links">
          <a href="#v1-product">產品</a>
          <a href="#v1-flow">拍貼流程</a>
          <a href="#v1-scenes">使用情境</a>
        </div>
        <a className="v1-nav-cta" href="#v1-contact">打造專屬拍貼</a>
      </nav>

      <section className="v1-hero">
        <div className="v1-hero-copy">
          <h1>一坪的拍貼體驗，<br />現在只佔一個櫃檯。</h1>
          <p>
            臺灣首創桌上型拍貼機。把客製相框版型、拍照、付款、列印與電子檔，
            完整收進 30 公分見方。
          </p>
          <div className="v1-actions">
            <a href="#v1-contact">打造專屬拍貼</a>
            <a href="#v1-product">近看 30 公分</a>
          </div>
        </div>
        <div className="v1-stage" aria-label="SnapShotMini 產品展示台">
          <div className="v1-stage-light" />
          <img src="/images/product/source/product-angle-front.jpg" alt="SnapShotMini 白色桌上型拍貼機" />
          <div className="v1-stage-plaque">
            <span>SNAPSHOTMINI</span>
            <strong>30 × 30 × 30 CM</strong>
          </div>
        </div>
        <p className="v1-hero-note">適合咖啡廳、文創店與品牌門市的櫃檯型體驗</p>
      </section>

      <section className="v1-proof" id="v1-product">
        <div className="v1-proof-head">
          <h2>不是縮小功能，<br />是縮小佔地。</h2>
          <p>店內訪客照樣完成選框、拍照、選片、列印與下載；合作店家只需要安排一個桌面位置。</p>
        </div>
        <div className="v1-measure">
          <div className="v1-measure-photo">
            <img src="/images/product/source/product-angle-left.jpg" alt="SnapShotMini 原型機側面" />
            <span className="v1-measure-x">30 cm</span>
            <span className="v1-measure-y">30 cm</span>
          </div>
          <div className="v1-spec-rail">
            {productSpecs.map((spec) => (
              <div key={spec.label}>
                <span>{spec.label}</span>
                <strong>{spec.value}<small>{spec.unit}</small></strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="v1-custom">
        <div>
          <h2>從開機第一眼，<br />到拿走最後一張，都是你的品牌。</h2>
          <p>設備首頁、相框版型與機身外觀都能依品牌或活動內容討論客製。</p>
        </div>
        <div className="v1-custom-wall">
          <img src="/images/flow/s1-device-home.png" alt="可客製的設備首頁" />
          <img src="/assets/reference/idol-support-frame-layout.jpg" alt="品牌相框版型範例" />
          <img src="/assets/reference/character-frame-template.jpg" alt="角色聯名相框範例" />
        </div>
      </section>

      <section className="v1-flow" id="v1-flow">
        <div className="v1-flow-intro">
          <h2>六個清楚動作，<br />完成一張值得帶走的照片。</h2>
          <p>品牌招待情境會略過付款；付費販售情境則在拍照前完成支付。</p>
        </div>
        <div className="v1-flow-line">
          {flowScreens.map((screen, index) => (
            <article key={screen.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={screen.image} alt={screen.alt} />
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v1-scenes" id="v1-scenes">
        <h2>同一台機器，服務兩種門市目標。</h2>
        <div className="v1-scenes-grid">
          {useCases.map((useCase) => (
            <article key={useCase.title}>
              <img src={useCase.image} alt={useCase.alt} />
              <div>
                <span>{useCase.caption}</span>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="v1-faq" id="v1-faq">
        <h2>合作前，先把產品問清楚。</h2>
        <FaqList />
      </section>

      <section className="v1-contact" id="v1-contact">
        <div>
          <h2>把下一張，<br />放上你的櫃檯。</h2>
          <p>留下店家資料，我們會依品牌、場域與營運方式討論合適的客製內容。</p>
        </div>
        <InquiryForm />
      </section>

      <footer className="v1-footer">
        <strong>SNAPSHOTMINI</strong>
        <p>臺灣首創桌上型拍貼機</p>
        <a href="#top">回到頂端 ↑</a>
      </footer>
    </main>
  );
}
