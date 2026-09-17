"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  gradientText,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        align === "right" && "items-end text-right ml-auto",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-echolance-gold w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-echolance-gold animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-mono uppercase">
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-gold block sm:inline mt-1 sm:mt-0">
            {gradientText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base text-slate-400 font-normal leading-relaxed mt-2 font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
