"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointer, ArrowRight } from "lucide-react";

interface BuildStagePreviewProps {
  stageId: string;
}

export function BuildStagePreview({ stageId }: BuildStagePreviewProps) {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full p-6 sm:p-10 lg:p-12 bg-[#0A0C12] text-[#F5F5F5] min-h-[360px] sm:min-h-[440px] flex flex-col justify-between select-none relative overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {/* ========================================================
            01 — IDEA: Blueprint & Architecture
           ======================================================== */}
        {stageId === "idea" && (
          <motion.div
            key="idea"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="w-full my-auto space-y-5 font-mono"
          >
            <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/20 text-xs text-white/50">
              <span>01 // CONCEPTUAL BLUEPRINT</span>
              <span className="text-[#E5C07B]">SCOPE &amp; DIRECTION</span>
            </div>

            <div className="space-y-3">
              <div className="h-9 border border-dashed border-white/20 rounded-lg flex items-center justify-between px-3 text-[11px] text-white/40">
                <span>[ BRAND IDENTITY ]</span>
                <div className="flex gap-4">
                  <span>[ EXPERIENCE ]</span>
                  <span>[ WORK ]</span>
                  <span>[ CONTACT ]</span>
                </div>
                <span>[ ACTION ]</span>
              </div>

              <div className="p-6 border border-dashed border-white/25 rounded-2xl space-y-3 bg-white/[0.01]">
                <div className="h-7 w-3/4 bg-white/10 rounded border border-dashed border-white/25 flex items-center px-3 text-xs text-white/60">
                  [ PRIMARY BRAND HEADLINE PROPOSAL ]
                </div>
                <div className="h-4 w-1/2 bg-white/5 rounded border border-dashed border-white/15" />
                <div className="flex gap-3 pt-2">
                  <div className="h-8 w-32 bg-white/10 rounded-full border border-dashed border-white/30 flex items-center justify-center text-xs text-white/70">
                    [ PRIMARY CTA ]
                  </div>
                  <div className="h-8 w-28 bg-white/5 rounded-full border border-dashed border-white/20 flex items-center justify-center text-xs text-white/40">
                    [ SECONDARY ]
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            02 — STRUCTURE: Spatial Grid & Information Flow
           ======================================================== */}
        {stageId === "structure" && (
          <motion.div
            key="structure"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="w-full my-auto space-y-5 font-mono"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs text-white/50">
              <span>02 // INFORMATION ARCHITECTURE</span>
              <span className="text-[#E5C07B]">SPATIAL GRID</span>
            </div>

            <div className="space-y-3">
              <div className="h-10 bg-white/5 border border-white/15 rounded-xl flex items-center justify-between px-4 text-xs text-white/70">
                <span className="font-bold text-white">ECHOLANCE</span>
                <div className="flex gap-4 text-[11px] text-white/50">
                  <span>DISCOVER</span>
                  <span>ABOUT</span>
                  <span>REACH US</span>
                </div>
                <span className="px-3 py-1 rounded bg-white/10 text-[10px] text-white/80">
                  START A PROJECT
                </span>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/15 rounded-2xl space-y-3">
                <div className="h-8 w-4/5 bg-white/10 rounded-lg flex items-center px-3 text-xs text-white/80 font-semibold">
                  CONTAINER: DISPLAY HEADLINE
                </div>
                <div className="h-4 w-3/5 bg-white/5 rounded" />
                <div className="flex gap-3 pt-2">
                  <div className="h-8 w-32 bg-white/15 rounded-full flex items-center justify-center text-xs text-white">
                    PRIMARY BUTTON
                  </div>
                  <div className="h-8 w-28 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xs text-white/60">
                    SECONDARY
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            03 — DESIGN: Art Direction & Typography System
           ======================================================== */}
        {stageId === "design" && (
          <motion.div
            key="design"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="w-full my-auto space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
              <span>03 // ART DIRECTION &amp; SYSTEM</span>
              <span className="text-[#E5C07B]">DARK PALETTE &amp; TYPE</span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-[#E5C07B]/30 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#090A0D] border border-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>

              <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Digital Experiences That Move.
              </h3>

              <p className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-md">
                Clean editorial typography paired with generous architectural spacing and balanced proportions.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <span className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider">
                  START A PROJECT →
                </span>
                <span className="px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-medium">
                  EXPLORE WORK
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            04 — BUILD: Engineered Next.js Codebase
           ======================================================== */}
        {stageId === "build" && (
          <motion.div
            key="build"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="w-full my-auto space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
              <span>04 // CODE &amp; ARCHITECTURE</span>
              <span className="text-[#E5C07B]">NEXT.JS &amp; TYPESCRIPT</span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">
                  Modular Component Hierarchy
                </span>
                <span className="text-emerald-400">Strict TypeScript</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Engineered for Sub-Second Performance.
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Hand-crafted Next.js components, lightweight asset pipelines, and clean modular code with zero page builder overhead.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-white/60">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10">App Router</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10">React 19</span>
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================
            05 — LIVE: Production Launch & Verification
           ======================================================== */}
        {stageId === "live" && (
          <motion.div
            key="live"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: transitionEase }}
            className="w-full my-auto space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
              <span>05 // PRODUCTION LAUNCH</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE AT EDGE
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/15 space-y-4 shadow-2xl">
              <span className="text-xs font-mono text-[#E5C07B] uppercase tracking-wider">
                ECHOLANCE DIGITAL STUDIO
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Digital Experiences That Stand Out.
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-lg">
                Delivered on global edge infrastructure with instant page loads, smooth interaction physics, and ongoing support.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider shadow-lg hover:bg-zinc-200 transition-colors"
                >
                  START A PROJECT →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
        <span>DELIBERATE STAGES OF CRAFT</span>
        <span className="text-[#E5C07B] uppercase">STAGE: {stageId}</span>
      </div>
    </div>
  );
}
