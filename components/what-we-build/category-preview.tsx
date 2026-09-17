"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Sparkles,
  LayoutDashboard,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface CategoryPreviewProps {
  categoryId: string;
}

export function CategoryPreview({ categoryId }: CategoryPreviewProps) {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl bg-[#0D0F16] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C07B]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="ml-2 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            ECHOLANCE // ARCHITECTURE PREVIEW
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
          BESPOKE CODE
        </span>
      </div>

      {/* Content Sandbox */}
      <div className="relative z-10 my-auto py-4">
        <AnimatePresence mode="wait">
          {categoryId === "websites" && (
            <motion.div
              key="websites"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>STUDIO FLAGSHIP</span>
                  <span className="text-emerald-400">● ACTIVE</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  Crafting Digital Identity for Industry Pioneers.
                </h4>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs">
                    EXPLORE →
                  </span>
                  <span className="text-xs font-mono text-white/60">
                    Next.js + GSAP
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/70">
                  Sub-Second Page Paint
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#E5C07B]">
                  Tailored Brand Art
                </div>
              </div>
            </motion.div>
          )}

          {categoryId === "ecommerce" && (
            <motion.div
              key="ecommerce"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 flex items-center justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
                    HEADLESS STOREFRONT
                  </span>
                  <div className="text-lg font-bold text-white">
                    Minimalist Atelier Bag
                  </div>
                  <div className="text-xs font-mono text-white/60">
                    $740.00 USD · Global Shipping
                  </div>
                </div>
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5C07B]">
                  <ShoppingBag size={22} />
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Sub-Second Cart &amp; Checkout</span>
                </div>
                <span className="text-[#E5C07B]">STRIPE API</span>
              </div>
            </motion.div>
          )}

          {categoryId === "landing-pages" && (
            <motion.div
              key="landing-pages"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-5 space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
                  HIGH-CONVERSION ARCHITECTURE
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                  Maximize Visitor Engagement &amp; Intent.
                </h4>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs">
                    START TRIAL →
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    A/B Test Ready
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/60">FOCUSED FUNNEL STRUCTURE</span>
                <span className="text-white font-semibold">100% LIGHTHOUSE</span>
              </div>
            </motion.div>
          )}

          {categoryId === "dashboards" && (
            <motion.div
              key="dashboards"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-3 font-mono"
            >
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/40">LATENCY</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">14ms</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/40">MEMORY</div>
                  <div className="text-sm font-bold text-white mt-0.5">42%</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/40">UPTIME</div>
                  <div className="text-sm font-bold text-[#E5C07B] mt-0.5">99.99%</div>
                </div>
              </div>
              <div className="rounded-2xl bg-black/50 border border-white/10 p-4 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-white/40">
                  <span>REAL-TIME TELEMETRY</span>
                  <span className="text-emerald-400">● 60 FPS</span>
                </div>
                <div className="flex items-end gap-1.5 h-10 pt-1">
                  {[30, 50, 75, 45, 90, 65, 80, 55, 95, 85, 70, 100, 90, 80].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-sm ${
                        i === 11 ? "bg-[#E5C07B]" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {categoryId === "digital-products" && (
            <motion.div
              key="digital-products"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>APPLICATION MATRIX</span>
                  <span className="text-[#E5C07B]">REACT 19</span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Modular Component Systems &amp; Workspaces
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
                    State Synchronization
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
                    Zero Layout Shift
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>RESPONSIVE ACROSS ALL PLATFORMS</span>
                <span className="text-[#E5C07B]">100% TAILORED</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Specs */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
        <span>BUILT FROM FIRST PRINCIPLES</span>
        <span className="text-[#E5C07B]">ECHOLANCE STUDIO</span>
      </div>
    </div>
  );
}
