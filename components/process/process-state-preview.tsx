"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileCode2,
  Palette,
  Terminal,
  Rocket,
  CheckCircle2,
  FileQuestion,
  Network,
  Cpu,
  ShieldCheck,
} from "lucide-react";

interface ProcessStatePreviewProps {
  stageId: string;
}

export function ProcessStatePreview({ stageId }: ProcessStatePreviewProps) {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl bg-[#0D0F16] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl select-none">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5C07B]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="ml-2 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            ECHOLANCE // PROCESS WORKBENCH
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
          STAGE WORKFLOW
        </span>
      </div>

      {/* Dynamic Process Visual Sandbox */}
      <div className="relative z-10 my-auto py-4">
        <AnimatePresence mode="wait">
          {/* ========================================================
              01 — DISCOVER (Discovery Brief & Strategic Questions)
             ======================================================== */}
          {stageId === "discover" && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-white/40">
                  <span>DISCOVERY BRIEF // PHASE 01</span>
                  <span className="text-[#E5C07B]">INTERVIEW &amp; ANALYSIS</span>
                </div>

                <div className="space-y-2.5 text-white/80 font-sans">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <FileQuestion size={16} className="text-[#E5C07B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Market Differentiation Target
                      </div>
                      <div className="text-[11px] text-white/50 mt-0.5">
                        What makes the product unmistakable compared to current competitors?
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                    <Compass size={16} className="text-white/60 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Core Conversion Funnels
                      </div>
                      <div className="text-[11px] text-white/50 mt-0.5">
                        Mapping primary visitor intents to high-conviction decision paths.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>DELIVERABLE: STRATEGIC BRIEF</span>
                <span className="text-[#E5C07B]">ALIGNMENT VERIFIED</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              02 — DEFINE (Information Architecture & Layout Wireframes)
             ======================================================== */}
          {stageId === "define" && (
            <motion.div
              key="define"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[10px] text-white/40">
                  <span>INFORMATION ARCHITECTURE</span>
                  <span className="text-blue-300">SITEMAP MAP</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#E5C07B]">
                    <Network size={14} />
                    <span className="font-bold">ROOT: / (EXPERIENCE LANDING)</span>
                  </div>
                  <div className="pl-5 space-y-1.5 text-white/60 border-l border-white/15 ml-1.5 text-[11px]">
                    <div>├── /work (Editorial Showcase)</div>
                    <div>├── /services (Interactive Roster)</div>
                    <div>├── /build (Stage Engine)</div>
                    <div>└── /contact (Direct Inquiry)</div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>CONTENT SPECIFICATION</span>
                <span className="text-white font-semibold">100% DEFINED</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              03 — DESIGN (Visual Language & Layout Systems)
             ======================================================== */}
          {stageId === "design" && (
            <motion.div
              key="design"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span>DESIGN SYSTEM TOKENS</span>
                  <span className="text-[#E5C07B]">FIGMA + TOKENS</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-white/40">TYPOGRAPHY</div>
                    <div className="text-xs font-bold text-white">Geist Sans &amp; Mono</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-white/40">PRIMARY ACCENT</div>
                    <div className="text-xs font-bold text-[#E5C07B]">#E5C07B Warm Gold</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
                  <span>INTERACTION FIDELITY</span>
                  <span className="text-emerald-400">100% PROTOTYPED</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>DELIVERABLE: DESIGN SYSTEM</span>
                <span className="text-white font-semibold">APPROVED</span>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              04 — BUILD (Next.js & TypeScript Engineering)
             ======================================================== */}
          {stageId === "build" && (
            <motion.div
              key="build"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4 font-mono text-xs"
            >
              <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-2 leading-relaxed">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-white/40">
                  <span>ENGINEERING PIPELINE</span>
                  <span className="text-emerald-400">● COMPILED</span>
                </div>
                <div className="text-white/60">
                  <span className="text-blue-300">import</span> &#123; gsap &#125;{" "}
                  <span className="text-blue-300">from</span>{" "}
                  <span className="text-emerald-300">&quot;gsap&quot;</span>;
                </div>
                <div className="text-white/70">
                  <span className="text-[#E5C07B]">const</span> timeline = gsap.timeline(&#123;
                </div>
                <div className="pl-4 text-white/60">
                  ease: <span className="text-emerald-300">&quot;power3.out&quot;</span>,
                </div>
                <div className="pl-4 text-white/60">duration: 0.85</div>
                <div className="text-white/70">&#125;);</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center text-white">
                  <div className="text-[10px] text-white/40">CORE STACK</div>
                  <div className="text-xs font-bold text-[#E5C07B] mt-0.5">NEXT.JS 15 + TS</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center text-white">
                  <div className="text-[10px] text-white/40">MOTION</div>
                  <div className="text-xs font-bold text-white mt-0.5">GSAP PHYSICS</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              05 — LAUNCH (Production Deployment & Edge Monitoring)
             ======================================================== */}
          {stageId === "launch" && (
            <motion.div
              key="launch"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: transitionEase }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white">
                      GLOBAL EDGE STATUS // LIVE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                    ZERO DOWNTIME
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs pt-1">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">PERFORMANCE</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">100/100</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">SSL &amp; EDGE</div>
                    <div className="text-sm font-bold text-[#E5C07B] mt-0.5">ACTIVE</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-[10px] text-white/40">SEO SCHEMA</div>
                    <div className="text-sm font-bold text-white mt-0.5">INDEXED</div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>POST-LAUNCH SPRINT</span>
                <span className="text-emerald-400">CONTINUOUS CARE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40">
        <span>CRAFTED BY ECHOLANCE</span>
        <span className="text-[#E5C07B] uppercase">PHASE: {stageId}</span>
      </div>
    </div>
  );
}
