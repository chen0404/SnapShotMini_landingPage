import {
  ArrowSquareOutIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  PhoneIcon,
  ThreadsLogoIcon,
} from "@phosphor-icons/react";
import { publicAsset } from "../../utils/publicAsset";

const privacyPolicyUrl = "https://snapfoto.co/%e9%9a%b1%e7%a7%81%e6%ac%8a%e6%94%bf%e7%ad%96";

export function V5Footer() {
  return (
    <footer className="v5-footer">
      <div className="v5-footer-main">
        <div className="v5-footer-brand">
          <a href="#top" aria-label="SnapShotMini 回到頁面頂端">
            <img
              src={publicAsset("images/brand/snapshot-logo.png")}
              alt="SNAPSHOT 妞拍貼"
              width="1172"
              height="226"
            />
            <span>MINI</span>
          </a>
          <p>讓櫃檯成為記憶發生的地方。</p>
        </div>

        <nav className="v5-footer-links" aria-label="頁尾導覽">
          <h2>探索</h2>
          <a href="#v5-spec">產品特色</a>
          <a href="#v5-custom">客製內容</a>
          <a href="#v5-flow">拍貼流程</a>
          <a href="#v5-scenes">使用情境</a>
          <a href="#v5-faq">常見問題</a>
        </nav>

        <div className="v5-footer-contact">
          <h2>聯絡我們</h2>
          <a href="tel:+886237655060">
            <PhoneIcon size={20} weight="bold" aria-hidden="true" />
            <span>02-3765-5060</span>
          </a>
          <a href="mailto:chen@snapfoto.co">
            <EnvelopeSimpleIcon size={20} weight="bold" aria-hidden="true" />
            <span>chen@snapfoto.co</span>
          </a>
        </div>

        <div className="v5-footer-social">
          <h2>品牌與社群</h2>
          <a href="https://snapfoto.co/" target="_blank" rel="noreferrer">
            <ArrowSquareOutIcon size={20} weight="bold" aria-hidden="true" />
            <span>SNAPSHOT 妞拍貼官網</span>
          </a>
          <a href="https://www.instagram.com/snapshot.tw/" target="_blank" rel="noreferrer">
            <InstagramLogoIcon size={20} weight="bold" aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com/snapfoto.co" target="_blank" rel="noreferrer">
            <FacebookLogoIcon size={20} weight="bold" aria-hidden="true" />
            <span>Facebook</span>
          </a>
          <a href="https://www.threads.com/@snapshot.tw" target="_blank" rel="noreferrer">
            <ThreadsLogoIcon size={20} weight="bold" aria-hidden="true" />
            <span>Threads</span>
          </a>
        </div>
      </div>

      <div className="v5-footer-legal">
        <div>
          <strong>享印生活股份有限公司</strong>
          <span>SNAPSHOT.TW CO., LTD</span>
          <span>統一編號 90334859</span>
        </div>
        <div>
          <a href={privacyPolicyUrl} target="_blank" rel="noreferrer">隱私權政策</a>
          <span>© 2026 享印生活股份有限公司</span>
          <a href="#top">回到頂端 ↑</a>
        </div>
      </div>
    </footer>
  );
}
