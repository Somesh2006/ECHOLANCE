"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code, Sparkles, Terminal } from "lucide-react";

export function FloatingUI() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle spring physics for smooth parallax
  const mouseX = useSpring(0, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 25 });
  const xOffset = useTransform(mouseX, (val) => val * -12);
  const yOffset = useTransform(mouseY, (val) => val * -12);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize offset (-1 to 1) from viewport center
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div
      className="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* 01 — BROWSER PREVIEW CARD (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={
          shouldReduceMotion
            ? undefined
            : {
                x: xOffset,
                y: yOffset,
              }
        }
        className="absolute top-28 right-12 xl:right-20 w-72 xl:w-80 rounded-2xl bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.12)] p-5 shadow-2xl transition-transform duration-700 ease-out"
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            ECHOLANCE.STUDIO
          </span>
        </div>

        {/* Content Showcase Preview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5C07B]">
              ECHOLANCE ATELIER
            </span>
            <span className="text-[10px] text-white/40 font-mono">2026</span>
          </div>

          <h4 className="text-sm font-semibold tracking-tight text-white leading-snug">
            DIGITAL EXPERIENCE STUDIO
          </h4>

          <div className="pt-2 flex items-center justify-between border-t border-white/5">
            <span className="text-[11px] text-white/60 font-medium">
              EXPLORE WORK
            </span>
            <ArrowUpRight size={14} className="text-[#E5C07B]" />
          </div>
        </div>
      </motion.div>

      {/* 02 — DESIGN / ART DIRECTION PANEL (Mid Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 1.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-[48%] right-8 xl:right-14 rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.10)] px-4 py-2 shadow-xl"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
          <span className="text-xs font-mono tracking-widest text-white/70">
            BESPOKE BY DEFAULT
          </span>
        </div>
      </motion.div>

      {/* 03 — STUDIO BADGE (Top Left subtle indicator) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute top-28 left-12 xl:left-16 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-white/60 uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>AVAILABLE FOR SELECT COMMISSIONS</span>
      </motion.div>
    </div>
  );
}
