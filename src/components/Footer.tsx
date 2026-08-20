export function Footer() {
  return (
    <footer className="bg-canvas-soft px-5 py-12 text-carbon md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 border-t border-carbon/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-black uppercase tracking-[-0.04em]">
            Snapshot <span className="text-primary">Mini</span>
          </p>
          <p className="mt-3 max-w-sm text-xs leading-5 text-carbon/55">
            為實體店家打造可客製的桌上型拍貼體驗。
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-normal text-carbon/55">
          <a href="#product" className="hover:text-primary">產品</a>
          <a href="#experience" className="hover:text-primary">拍貼流程</a>
          <a href="#use-cases" className="hover:text-primary">使用情境</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <span>隱私權政策待補</span>
        </div>
      </div>
    </footer>
  );
}
