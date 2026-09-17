"use client";

import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | "primary-white"
    | "primary-dark"
    | "secondary-glass"
    | "primary"
    | "gold"
    | "secondary"
    | "glass"
    | "outline"
    | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
}

export function Button({
  children,
  variant = "primary-white",
  size = "md",
  withArrow = false,
  icon,
  iconPosition = "right",
  glow = false,
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-3.5 gap-2 tracking-wide",
    lg: "text-sm sm:text-base px-8 py-4 gap-2.5 tracking-wide",
  };

  const variantClasses: Record<string, string> = {
    "primary-white":
      "bg-white text-black hover:bg-zinc-200 active:scale-[0.98] shadow-sm",
    primary:
      "bg-white text-black hover:bg-zinc-200 active:scale-[0.98] shadow-sm",
    "primary-dark":
      "bg-[#0D0F14] text-white border border-white/20 hover:bg-[#151822] hover:border-white/40 active:scale-[0.98]",
    "secondary-glass":
      "bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] text-white hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.22)] active:scale-[0.98]",
    secondary:
      "bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] text-white hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.22)] active:scale-[0.98]",
    glass:
      "bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] text-white hover:bg-[rgba(255,255,255,0.12)] active:scale-[0.98]",
    gold:
      "bg-echolance-gold text-slate-950 font-bold hover:bg-[#ebd095] hover:shadow-[0_0_25px_rgba(229,192,123,0.35)] active:scale-[0.98]",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 active:scale-[0.98]",
    ghost:
      "bg-transparent text-white/80 hover:text-white hover:bg-white/5",
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant] || variantClasses["primary-white"],
        glow && "shadow-[0_0_30px_rgba(229,192,123,0.3)]",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
          →
        </span>
      )}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 inline-block">
          {icon}
        </span>
      )}
    </button>
  );
}
