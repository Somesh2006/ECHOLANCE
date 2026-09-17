import React from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  accentBorder?: boolean;
}

export function GlassCard({
  children,
  hoverEffect = true,
  accentBorder = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        "bg-[rgba(255,255,255,0.05)] backdrop-blur-[16px]",
        "-webkit-backdrop-filter:blur(16px)",
        "border",
        accentBorder
          ? "border-echolance-gold/30 hover:border-echolance-gold/50"
          : "border-[rgba(255,255,255,0.10)]",
        hoverEffect &&
          "transition-all duration-400 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
