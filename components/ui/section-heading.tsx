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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-echolance-cyan w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-echolance-cyan animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-cyan block sm:inline mt-1 sm:mt-0">
            {gradientText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 font-normal leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
