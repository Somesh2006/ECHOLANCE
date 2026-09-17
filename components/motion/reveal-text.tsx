"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function RevealText({
  children,
  delay = 0,
  duration = 0.8,
  className,
  as: Component = "div",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className={cn("overflow-hidden inline-block", className)}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
