import type { AnchorHTMLAttributes, ReactNode } from "react";

type ChromeButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "signal" | "carbon";
};

export function ChromeButton({
  children,
  className = "",
  variant = "signal",
  ...props
}: ChromeButtonProps) {
  const variantClass =
    variant === "signal"
      ? "bg-primary text-white hover:bg-[#ad4935]"
      : "border border-carbon/32 bg-transparent text-carbon hover:border-carbon hover:bg-carbon hover:text-white";

  return (
    <a
      className={`chrome-button inline-flex min-h-11 items-center justify-center px-[22px] py-[11px] text-[17px] font-semibold tracking-[-0.02em] transition duration-300 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
