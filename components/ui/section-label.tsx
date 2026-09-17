import React from "react";
import { cn } from "@/utils/cn";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: string;
  label: string;
  accent?: boolean;
}

export function SectionLabel({
  number,
  label,
  accent = true,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        className
      )}
      {...props}
    >
      {number && (
        <span
          className={cn(
            "text-[11px] font-mono tracking-widest px-2 py-0.5 rounded border",
            accent
              ? "text-echolance-gold border-echolance-gold/30 bg-echolance-gold/10"
              : "text-white/50 border-white/10 bg-white/5"
          )}
        >
          {number}
        </span>
      )}
      <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/60">
        {label}
      </span>
    </div>
  );
}
