import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { publicAsset } from "../../utils/publicAsset";

const navigationItems = [
  { label: "產品特色", href: "#v5-spec" },
  { label: "客製內容", href: "#v5-custom" },
  { label: "拍貼流程", href: "#v5-flow" },
  { label: "使用情境", href: "#v5-scenes" },
  { label: "常見問題", href: "#v5-faq" },
] as const;

export function V5Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="v5-header">
      <a className="v5-brand" href="#top" aria-label="SnapShotMini 回到頁面頂端">
        <img
          className="v5-brand-full"
          src={publicAsset("images/brand/snapshot-logo.png")}
          alt="SNAPSHOT 妞拍貼"
          width="1172"
          height="226"
        />
        <img
          className="v5-brand-mark"
          src={publicAsset("images/brand/snapshot-mark.png")}
          alt=""
          width="175"
          height="226"
          aria-hidden="true"
        />
        <span>MINI</span>
      </a>

      <nav className="v5-desktop-nav" aria-label="主要導覽">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="v5-header-actions">
        <a className="v5-header-cta" href="#v5-contact" aria-label="洽談客製合作">
          <span className="v5-cta-full">洽談客製合作</span>
          <span className="v5-cta-short">合作洽談</span>
        </a>
        <button
          ref={menuButtonRef}
          className="v5-menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="v5-mobile-menu"
          aria-label={menuOpen ? "關閉導覽選單" : "開啟導覽選單"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <XIcon size={24} weight="bold" aria-hidden="true" /> : <ListIcon size={24} weight="bold" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="v5-mobile-menu" id="v5-mobile-menu">
          <nav aria-label="手機導覽">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>
          <a className="v5-mobile-menu-cta" href="#v5-contact" onClick={closeMenu}>洽談客製合作 →</a>
        </div>
      ) : null}
    </header>
  );
}
