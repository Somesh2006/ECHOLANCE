"use client";

import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  glow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-echolance-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-echolance-cyan via-echolance-indigo to-echolance-violet text-white hover:brightness-110 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-95",
    secondary:
      "bg-white text-slate-950 hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95",
    glass:
      "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-95",
    outline:
      "border border-echolance-border text-slate-200 hover:border-echolance-cyan/50 hover:text-white hover:bg-echolance-cyan/5 active:scale-95",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5 active:scale-95",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        glow && "shadow-[0_0_30px_rgba(56,189,248,0.3)]",
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 transition-transform group-hover:translate-x-1">{icon}</span>}
    </button>
  );
}
