"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, CheckCircle2, Play, Pause, RefreshCw } from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface WebsiteBuildProps {
  onOpenModal: () => void;
}

interface BuildStage {
  step: string;
  id: "empty" | "structure" | "design" | "content" | "interaction" | "live";
  title: string;
  description: string;
}

const STAGES: BuildStage[] = [
  {
    step: "01",
    id: "empty",
    title: "EMPTY CANVAS",
    description: "Initial client brief, architectural wireframes, and layout grid setup.",
  },
  {
    step: "02",
    id: "structure",
    title: "STRUCTURE & GRID",
    description: "12-column responsive fluid grid and structural DOM element placement.",
  },
  {
    step: "03",
    id: "design",
    title: "DESIGN & TOKENS",
    description: "Geist typography scale, high-contrast obsidian color tokens, and surface layers.",
  },
  {
    step: "04",
    id: "content",
    title: "CONTENT & ASSETS",
    description: "High-resolution media, photography, editorial headlines, and copy layout.",
  },
  {
    step: "05",
    id: "interaction",
    title: "MOTION & PHYSICS",
    description: "GSAP scroll animations, spring physics, and hover state interactions.",
  },
  {
    step: "06",
    id: "live",
    title: "LIVE WEBSITE",
    description: "Sub-second Next.js edge deployment, Lighthouse 99+ score, and live launch.",
  },
];

export function WebsiteBuildAnimation({ onOpenModal }: WebsiteBuildProps) {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance through build stages
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % STAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStage = STAGES[currentStageIdx];

  return (
    <section className="py-24 md:py-36 relative z-10 exhibition-grid bg-[#07080c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-amber-400 uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>SIGNATURE INTERACTION</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              FROM IDEA TO LIVE WEBSITE.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isPlaying ? "PAUSE ASSEMBLY" : "PLAY ASSEMBLY"}</span>
            </button>
          </div>
        </div>

        {/* Stage Timeline Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STAGES.map((stage, idx) => {
            const isActive = idx === currentStageIdx;
            const isCompleted = idx < currentStageIdx;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setCurrentStageIdx(idx);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                  isActive
                    ? "bg-amber-400/15 border-amber-400 text-white font-bold shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                    : isCompleted
                    ? "bg-white/5 border-white/10 text-slate-300"
                    : "bg-white/[0.02] border-white/5 text-slate-500 hover:text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span>{stage.step}</span>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </div>
                <div className="text-xs font-mono tracking-wider truncate">{stage.title}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Physical Assembly Canvas */}
        <div className="relative rounded-3xl bg-[#0b0d15] border border-white/10 p-6 sm:p-10 shadow-2xl min-h-[460px] flex flex-col justify-between overflow-hidden">
          
          {/* Top Stage Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
                PHASE {activeStage.step}: {activeStage.title}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {activeStage.description}
            </span>
          </div>

          {/* PHYSICAL ANIMATED WEBSITE FRAMEWORK IN VARIOUS STAGES */}
          <div className="relative flex-1 py-8 flex items-center justify-center min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {/* STAGE 01: EMPTY */}
              {activeStage.id === "empty" && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl h-64 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 text-center font-mono space-y-2 text-slate-500"
                >
                  <span className="text-xs tracking-widest">[ 12-COLUMN ARCHITECTURAL GRID PREPARED ]</span>
                  <span className="text-[10px] text-slate-600">Awaiting structural DOM wireframe assembly...</span>
                </motion.div>
              )}

              {/* STAGE 02: STRUCTURE */}
              {activeStage.id === "structure" && (
                <motion.div
                  key="structure"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl space-y-4 font-mono text-xs"
                >
                  <div className="h-12 border border-white/20 rounded-xl bg-white/5 flex items-center px-4 justify-between text-slate-400">
                    <span>[HEADER // NAVBAR CONTAINER]</span>
                    <span className="text-amber-400">flex justify-between</span>
                  </div>
                  <div className="grid grid-cols-12 gap-3 h-40">
                    <div className="col-span-8 border border-white/20 rounded-xl bg-white/5 p-4 flex flex-col justify-between text-slate-400">
                      <span>[HERO MAIN CONTAINER - 8 COL]</span>
                      <span className="text-slate-600">h1, p, cta</span>
                    </div>
                    <div className="col-span-4 border border-white/20 rounded-xl bg-white/5 p-4 flex flex-col justify-between text-slate-400">
                      <span>[VISUAL CANVAS - 4 COL]</span>
                      <span className="text-slate-600">3d canvas engine</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 03: DESIGN */}
              {activeStage.id === "design" && (
                <motion.div
                  key="design"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl space-y-4 font-mono text-xs"
                >
                  <div className="h-12 border border-amber-400/40 rounded-xl bg-amber-400/5 px-4 flex items-center justify-between text-white font-bold">
                    <span>ECHOLANCE AGENCY</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300">#090A0D</span>
                      <span className="px-2 py-0.5 rounded bg-amber-400 text-black">Geist Sans</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-3 h-40">
                    <div className="col-span-8 border border-amber-400/30 rounded-xl bg-gradient-to-br from-[#0e1017] to-[#07080b] p-5 space-y-2">
                      <div className="h-4 w-3/4 bg-white/20 rounded" />
                      <div className="h-3 w-1/2 bg-amber-400/40 rounded" />
                    </div>
                    <div className="col-span-4 border border-indigo-500/30 rounded-xl bg-indigo-950/20 p-4" />
                  </div>
                </motion.div>
              )}

              {/* STAGE 04: CONTENT */}
              {activeStage.id === "content" && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl space-y-4"
                >
                  <div className="h-12 border border-white/20 rounded-xl bg-[#090a0d] px-5 flex items-center justify-between text-white font-mono font-bold text-xs">
                    <span>ECHOLANCE</span>
                    <span className="text-amber-400 text-[10px]">WORK • SERVICES • PROCESS</span>
                  </div>
                  <div className="grid grid-cols-12 gap-3 h-40">
                    <div className="col-span-8 border border-white/15 rounded-xl bg-[#0d0f15] p-5 space-y-2 text-left">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">DIGITAL STUDIO</span>
                      <h4 className="text-xl font-bold text-white font-sans">WE BUILD DIGITAL EXPERIENCES</h4>
                      <p className="text-xs text-slate-300 font-sans">High-speed platforms engineered for growth.</p>
                    </div>
                    <div className="col-span-4 rounded-xl border border-white/10 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80')" }} />
                  </div>
                </motion.div>
              )}

              {/* STAGE 05: INTERACTION */}
              {activeStage.id === "interaction" && (
                <motion.div
                  key="interaction"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl space-y-4"
                >
                  <div className="h-12 border border-white/20 rounded-xl bg-[#090a0d] px-5 flex items-center justify-between text-white font-mono text-xs">
                    <span className="font-bold">ECHOLANCE</span>
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-black font-bold text-[10px] animate-bounce">
                      HOVER &amp; SCROLL ACTIVE
                    </span>
                  </div>
                  <div className="grid grid-cols-12 gap-3 h-40">
                    <div className="col-span-8 border border-amber-400/40 rounded-xl bg-[#0d0f15] p-5 space-y-3 text-left shadow-2xl">
                      <h4 className="text-xl font-bold text-white font-sans">60 FPS GSAP MOTION</h4>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black text-xs font-bold font-mono hover:scale-105 transition-transform cursor-pointer">
                        <span>START A PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="col-span-4 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 font-mono text-[10px] text-amber-300 flex flex-col justify-between">
                      <span>SPRING PHYSICS</span>
                      <span>STIFFNESS: 150</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 06: LIVE WEBSITE */}
              {activeStage.id === "live" && (
                <motion.div
                  key="live"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-2xl p-6 rounded-2xl bg-[#090a0d] border border-amber-400/50 shadow-[0_0_50px_rgba(251,191,36,0.2)] text-left space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="font-mono text-xs text-white font-bold">ECHOLANCE DEPLOYED</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                      LIGHTHOUSE 99+ PASS
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white font-sans uppercase">
                      WE BUILD DIGITAL EXPERIENCES THAT MOVE.
                    </h3>
                    <p className="text-xs text-slate-300 font-sans">
                      Next-generation digital platform deployed to global edge servers.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <MagneticWrapper strength={15}>
                      <button
                        onClick={onOpenModal}
                        className="px-5 py-2.5 rounded-full bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300 transition-colors flex items-center gap-2"
                      >
                        <span>START YOUR BUILD</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </MagneticWrapper>
                    <span className="text-[10px] font-mono text-slate-500">LIVE AT ECHOLANCE.AGENCY</span>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400 relative z-20">
            <div className="flex items-center gap-2">
              <RefreshCw className={`w-3 h-3 ${isPlaying ? "animate-spin" : ""}`} />
              <span>STEP {currentStageIdx + 1} OF 6 IN PROGRESS</span>
            </div>
            <span>PHYSICAL ASSEMBLY ENGINE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
