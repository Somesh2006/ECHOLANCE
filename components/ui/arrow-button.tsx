import React from "react";
import { cn } from "@/utils/cn";

interface ArrowButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "white" | "glass" | "dark";
  className?: string;
}

export function ArrowButton({
  children,
  variant = "white",
  className,
  ...props
}: ArrowButtonProps) {
  const variantStyles = {
    white:
      "bg-white text-black hover:bg-zinc-200 active:scale-[0.98]",
    glass:
      "bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] text-white hover:bg-[rgba(255,255,255,0.14)] active:scale-[0.98]",
    dark:
      "bg-[#0D0F14] text-white border border-white/15 hover:border-white/30 hover:bg-[#141822] active:scale-[0.98]",
  };

  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
        →
      </span>
    </a>
  );
}
