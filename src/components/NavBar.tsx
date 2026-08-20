import { useState } from "react";
import { navLinks } from "../data/content";
import { ChromeButton } from "./ChromeButton";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-carbon/94 text-white backdrop-blur-xl">
      <nav
        aria-label="主要導覽"
        className="mx-auto flex h-11 max-w-[1200px] items-center justify-between px-5 md:px-8"
      >
        <a
          href="#top"
          className="text-sm font-black uppercase tracking-[-0.04em] text-white"
          aria-label="SnapShotMini 首頁"
        >
          SNAPSHOT<span className="text-primary">MINI</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white/68 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ChromeButton href="#contact" className="!min-h-7 !px-4 !py-1 !text-xs">
            打造專屬拍貼
          </ChromeButton>
        </div>

        <button
          type="button"
          className="min-h-11 px-2 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "關閉" : "選單"}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="grid border-t border-white/15 bg-carbon/98 px-5 pb-5 text-white backdrop-blur-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-white/10 py-4 text-sm font-normal"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ChromeButton
            href="#contact"
            className="mt-4"
            onClick={() => setIsOpen(false)}
          >
            打造專屬拍貼
          </ChromeButton>
        </div>
      ) : null}
    </header>
  );
}
