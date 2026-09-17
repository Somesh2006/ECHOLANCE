"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layout,
  ShoppingBag,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Activity,
  Maximize2,
  Lock,
  Compass,
  Cpu,
  Terminal,
} from "lucide-react";
import { ServiceItem } from "@/data/agency-data";

interface ServicePreviewProps {
  activeService: ServiceItem;
}

export function ServicePreview({ activeService }: ServicePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  // Subtle pointer parallax physics (Desktop only)
  const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 20 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[480px] rounded-3xl bg-[#0D0F16] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl select-none group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5C07B]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Micro Studio Metadata Bar (Top) */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-rose-500/60 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-amber-500/60 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-emerald-500/60 transition-colors" />
          <span className="ml-3 text-[11px] font-mono tracking-widest text-white/40 uppercase">
            ECHOLANCE // {activeService.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-white/40 uppercase">
            60 FPS // GPU ACCELERATED
          </span>
          <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E5C07B]">
            0{activeService.number} // CAPABILITY
          </span>
        </div>
      </div>

      {/* Dynamic Visual Preview (Reacts with subtle parallax on desktop) */}
      <motion.div
        style={shouldReduceMotion || isTouch ? undefined : { x: mouseX, y: mouseY }}
        className="relative z-10 my-auto py-6 transition-transform duration-500 ease-out"
      >
        <AnimatePresence mode="wait">
          {/* ========================================================
              01 — WEB DESIGN PREVIEW
             ======================================================== */}
          {activeService.id === "web-design" && (
            <motion.div
              key="web-design"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="grid grid-cols-12 gap-3">
                {/* Typography Specimen */}
                <div className="col-span-12 sm:col-span-7 rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                      TYPE SPECIMEN
                    </span>
                    <span className="text-[10px] font-mono text-[#E5C07B]">
                      GEIST DISPLAY
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                    Aa Bb Gg 09
                  </div>
                  <div className="text-xs text-white/60 font-mono flex items-center gap-3 pt-1">
                    <span>WEIGHT: 600</span>
                    <span>•</span>
                    <span>KERNING: -0.03EM</span>
                  </div>
                </div>

                {/* Color Palette Tokens */}
                <div className="col-span-12 sm:col-span-5 rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    DESIGN TOKENS
                  </span>
                  <div className="flex items-center gap-2 my-2">
                    <div className="w-8 h-8 rounded-lg bg-[#090A0D] border border-white/20" title="#090A0D" />
                    <div className="w-8 h-8 rounded-lg bg-[#E5C07B]" title="#E5C07B" />
                    <div className="w-8 h-8 rounded-lg bg-white/80" title="#F5F5F5" />
                    <div className="w-8 h-8 rounded-lg bg-white/10" title="Glass 10%" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50">4 CORE TOKENS</span>
                </div>
              </div>

              {/* Layout Blueprint & Spacing Guides */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5C07B]/10 border border-[#E5C07B]/30 flex items-center justify-center text-[#E5C07B]">
                    <Layout size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Asymmetric Visual Balance
                    </div>
                    <div className="text-[11px] text-white/50">
                      Editorial 12-Column Grid &amp; Golden Ratio Spacing
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#E5C07B]">12-COL GRID</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              02 — WEB DEVELOPMENT PREVIEW
             ======================================================== */}
          {activeService.id === "web-development" && (
            <motion.div
              key="web-development"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4 font-mono"
            >
              {/* Code Panel */}
              <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-2 text-xs leading-relaxed overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-white/40">
                  <span>app/experience/page.tsx</span>
                  <span className="text-emerald-400">● SSR 0.18s</span>
                </div>
                <div className="text-white/50">
                  <span className="text-[#E5C07B]">export default async function</span>{" "}
                  <span className="text-white">ExperiencePage</span>() &#123;
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-blue-300">const</span> platform ={" "}
                  <span className="text-[#E5C07B]">await</span> loadAgencyArchitecture();
                </div>
                <div className="pl-4 text-white/70">
                  <span className="text-purple-300">return</span> &lt;
                  <span className="text-white font-semibold">CinematicCanvas</span>{" "}
                  <span className="text-blue-300">physics</span>=
                  <span className="text-emerald-300">&quot;sub-second&quot;</span> /&gt;;
                </div>
                <div className="text-white/50">&#125;</div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <div className="text-[10px] text-white/40">FRAMEWORK</div>
                  <div className="font-bold text-white mt-0.5">NEXT.JS 15</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <div className="text-[10px] text-white/40">TYPE SAFETY</div>
                  <div className="font-bold text-[#E5C07B] mt-0.5">TYPESCRIPT</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                  <div className="text-[10px] text-white/40">ANIMATION</div>
                  <div className="font-bold text-white mt-0.5">GSAP 3.12</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              03 — E-COMMERCE PREVIEW
             ======================================================== */}
          {activeService.id === "ecommerce" && (
            <motion.div
              key="ecommerce"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
                    HEADLESS STORE // EDITION 01
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Chronograph Spatial 42mm
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-semibold text-white">$1,850.00</span>
                    <span className="text-[11px] text-emerald-400 font-mono">In Stock (Global)</span>
                  </div>
                </div>

                <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
                  <ShoppingBag size={24} className="text-[#E5C07B]" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/80 font-mono">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>INSTANT STRIPE CHECKOUT</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white">
                  SUB-SECOND
                </span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              04 — LANDING PAGES PREVIEW
             ======================================================== */}
          {activeService.id === "landing-pages" && (
            <motion.div
              key="landing-pages"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
                    CAMPAIGN BLUEPRINT
                  </span>
                  <span className="text-[10px] font-mono text-white/40">A/B READY</span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                  ACCELERATE YOUR MARKET AUTHORITY.
                </h4>

                <div className="flex items-center gap-3 pt-1">
                  <div className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs">
                    PRIMARY CTA →
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white font-medium text-xs">
                    LEARN MORE
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <div className="text-white/40 text-[10px]">DESIGN FOCUS</div>
                  <div className="text-white font-semibold mt-1">High Conversion Funnel</div>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                  <div className="text-white/40 text-[10px]">LOAD SPEED</div>
                  <div className="text-[#E5C07B] font-semibold mt-1">Sub-Second Mobile</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              05 — UI / UX PREVIEW
             ======================================================== */}
          {activeService.id === "ui-ux" && (
            <motion.div
              key="ui-ux"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40">
                  <span>INTERFACE COMPONENTS</span>
                  <span className="text-[#E5C07B]">DESIGN SYSTEM</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white font-medium">Haptic Physics</span>
                    <span className="w-7 h-4 rounded-full bg-[#E5C07B] p-0.5 flex justify-end">
                      <span className="w-3 h-3 rounded-full bg-black inline-block" />
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white font-medium">Glassmorphism</span>
                    <span className="w-7 h-4 rounded-full bg-white/20 p-0.5 flex justify-start">
                      <span className="w-3 h-3 rounded-full bg-white/60 inline-block" />
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                  <span>search.component.query</span>
                  <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white">⌘K</kbd>
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 flex items-center justify-between text-xs font-mono">
                <span className="text-white/50">PROTOTYPE FIDELITY</span>
                <span className="text-white font-semibold">100% INTERACTIVE</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              06 — MAINTENANCE PREVIEW
             ======================================================== */}
          {activeService.id === "maintenance" && (
            <motion.div
              key="maintenance"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.45, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-white">
                      PLATFORM HEALTH // 99.99%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">24/7 ACTIVE</span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">UPTIME</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">99.99%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">LIGHTHOUSE</div>
                    <div className="text-sm font-bold text-[#E5C07B] mt-0.5">100 / 100</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">SECURITY</div>
                    <div className="text-sm font-bold text-white mt-0.5">A+ GRADE</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-white/70">
                  <ShieldCheck size={16} className="text-[#E5C07B]" />
                  <span>BI-WEEKLY FEATURE SPRINTS</span>
                </div>
                <span className="text-emerald-400 text-[11px]">ACTIVE PARTNERSHIP</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Footer Deliverables Tags */}
      <div className="relative z-10 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
            DELIVERABLES INCLUDED
          </span>
          <span className="text-[11px] font-mono text-[#E5C07B]">
            {activeService.metrics}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {activeService.deliverables.map((item) => (
            <span
              key={item}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
