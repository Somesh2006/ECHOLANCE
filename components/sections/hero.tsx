"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code2, Sparkles, Layers, Terminal, LayoutGrid } from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center items-center overflow-hidden z-10 exhibition-grid"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Stacked Kinetic Typography + Copy + CTAs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Top Micro Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-300">
              ECHOLANCE // DIGITAL STUDIO
            </span>
          </motion.div>

          {/* Main Headline Stacked */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-sans leading-[0.95]"
          >
            WE BUILD <br />
            DIGITAL <br />
            EXPERIENCES <br />
            <span className="text-amber-300 font-serif italic text-3xl sm:text-5xl md:text-6xl tracking-normal normal-case block mt-1">
              that move.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl font-sans font-normal leading-relaxed"
          >
            We design and build modern websites that help businesses look better, work better and grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <MagneticWrapper strength={15}>
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.25)] cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticWrapper>

            <a href="#work">
              <button className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs tracking-widest transition-all duration-300 backdrop-blur-md cursor-pointer">
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </a>
          </motion.div>

          {/* Micro Spec Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-4 flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400 border-t border-white/5"
          >
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Next.js & TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>GSAP Scroll Physics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Bespoke Design System</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Visual Environment (Websites Being Assembled) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-6 w-full relative perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            style={{
              transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="relative rounded-2xl bg-[#0d0f15] border border-white/10 p-4 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-4 overflow-hidden"
          >
            {/* Ambient Lighting Field */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Fictional Browser Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-[10px] text-slate-400 hidden sm:inline">
                  https://echolance.agency/canvas
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                LIVE INTERFACE ENGINE
              </span>
            </div>

            {/* Floating UI Construction Canvas */}
            <div className="relative min-h-[300px] sm:min-h-[360px] rounded-xl bg-[#07080b] border border-white/5 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
              
              {/* Floating Layout Fragment 1: Design Tokens */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-4 left-4 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 z-20 max-w-[180px]"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
                  <span>DESIGN TOKENS</span>
                  <span>v2.4</span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <span className="w-4 h-4 rounded bg-[#090a0d] border border-white/20 inline-block" />
                  <span className="w-4 h-4 rounded bg-amber-400 inline-block" />
                  <span className="w-4 h-4 rounded bg-slate-400 inline-block" />
                  <span className="w-4 h-4 rounded bg-white inline-block" />
                </div>
              </motion.div>

              {/* Floating Layout Fragment 2: Code Editor Snippet */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 right-4 p-3 rounded-lg bg-[#050608]/90 border border-white/10 font-mono text-[10px] text-slate-300 z-20 space-y-1"
              >
                <div className="flex items-center gap-1 text-slate-500 pb-1 border-b border-white/5">
                  <Terminal className="w-3 h-3 text-amber-400" />
                  <span>website-core.ts</span>
                </div>
                <div className="text-amber-300">export const Site = {"{"}</div>
                <div className="pl-2 text-slate-400">fps: 60,</div>
                <div className="pl-2 text-slate-400">speed: &quot;sub-second&quot;</div>
                <div className="text-amber-300">{"}"};</div>
              </motion.div>

              {/* Center Main Web Layout Preview Canvas */}
              <div className="mt-16 space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    • BRAND ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    READY TO BUILD
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    HIGH-FREQUENCY DIGITAL PLATFORM
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Precision design system, responsive physics, and sub-second Next.js architecture.
                  </p>
                </div>
              </div>

              {/* Bottom Specs Status Bar */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400 relative z-10">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-3 h-3 text-amber-400" />
                  <span>12-COL FLUID GRID</span>
                </div>
                <span>ECHOLANCE ENGINE v2026</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
