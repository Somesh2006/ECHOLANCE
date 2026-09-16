"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Code2, LayoutGrid, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "analytics">("preview");

  // Interactive Mouse Tilt Effect on the Mockup
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
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-echolance-cyan animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
            Next-Gen Digital Agency
          </span>
          <span className="text-xs text-echolance-cyan font-semibold">
            • 2026 Edition
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05]"
        >
          We Build Digital Experiences{" "}
          <span className="text-gradient-cyan block mt-2 sm:inline sm:mt-0">
            That Make Businesses Stand Out.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          Echolance designs and develops modern, high-speed websites that turn casual visitors into loyal clients and propel business growth.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            onClick={onOpenModal}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            glow
          >
            Start a Project
          </Button>

          <a href="#work">
            <Button
              variant="glass"
              size="lg"
              icon={<Play className="w-3.5 h-3.5 fill-current" />}
            >
              Explore Our Work
            </Button>
          </a>
        </motion.div>

        {/* Quick Micro Stats / Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-echolance-emerald" />
            <span>100% Custom Codebase</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-echolance-cyan" />
            <span>99+ Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-echolance-indigo" />
            <span>Next.js & TypeScript</span>
          </div>
        </motion.div>

        {/* Dynamic Animated Website Showcase / Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.85, type: "spring", stiffness: 80 }}
          className="mt-14 w-full max-w-5xl perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            style={{
              transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="relative rounded-2xl bg-[#0b0d14] border border-white/10 p-2 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl group overflow-hidden"
          >
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 bg-[#07080d]/60 rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL bar */}
              <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400 w-64 sm:w-80 justify-center">
                <span className="text-echolance-emerald text-[10px]">🔒 https://</span>
                <span className="text-slate-200 font-medium">echolance.agency</span>
              </div>

              {/* Mockup Tabs */}
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "preview" ? "bg-echolance-cyan text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live View
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-2.5 py-1 rounded-md transition-colors hidden sm:block ${
                    activeTab === "code" ? "bg-echolance-indigo text-white font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Code Engine
                </button>
              </div>
            </div>

            {/* Mockup Dynamic Content Canvas */}
            <div className="relative min-h-[340px] sm:min-h-[420px] rounded-xl bg-[#06070a] border border-white/5 p-4 sm:p-6 overflow-hidden text-left flex flex-col justify-between">
              
              {/* Background ambient mesh inside browser mockup */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-echolance-cyan/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-echolance-violet/10 rounded-full blur-3xl pointer-events-none" />

              {activeTab === "preview" ? (
                <div className="space-y-6 relative z-10">
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-echolance-cyan to-echolance-indigo" />
                      <span className="font-bold text-sm text-white">AURORA STUDIO</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
                      <span>Projects</span>
                      <span>Services</span>
                      <span>Studio</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-echolance-cyan/10 text-echolance-cyan border border-echolance-cyan/30">
                      Live Preview
                    </span>
                  </div>

                  {/* Mock Hero Layout with animated Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-7 space-y-3">
                      <span className="text-[11px] font-mono text-echolance-cyan uppercase tracking-wider">
                        • Digital Product Design
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        Crafting High-Frequency Brand Architecture
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Responsive design system engineered with Next.js, Framer Motion, and custom shaders.
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                        <div className="px-4 py-2 rounded-lg bg-white text-slate-950 font-bold text-xs">
                          Launch Experience
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 font-medium text-xs border border-white/10">
                          View 3D Demo
                        </div>
                      </div>
                    </div>

                    {/* Right Interactive Mock Cards */}
                    <div className="md:col-span-5 grid grid-cols-2 gap-3">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-md"
                      >
                        <div className="w-7 h-7 rounded-lg bg-echolance-cyan/20 flex items-center justify-center text-echolance-cyan">
                          <Zap className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-bold text-white">99.9% Uptime</p>
                        <p className="text-[10px] text-slate-400">Global Edge CDN</p>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-md"
                      >
                        <div className="w-7 h-7 rounded-lg bg-echolance-indigo/20 flex items-center justify-center text-echolance-indigo">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-bold text-white">100/100</p>
                        <p className="text-[10px] text-slate-400">Lighthouse Score</p>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                        className="col-span-2 p-3 rounded-xl bg-gradient-to-r from-echolance-indigo/20 to-echolance-violet/20 border border-white/10 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-echolance-emerald animate-ping" />
                          <span className="text-xs font-medium text-white">Real-Time Sync Active</span>
                        </div>
                        <span className="text-[10px] font-mono text-echolance-cyan">60 FPS</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Code View */
                <div className="font-mono text-xs text-slate-300 space-y-2 relative z-10 overflow-x-auto">
                  <div className="text-slate-500">// Echolance Web Engine Architecture</div>
                  <div>
                    <span className="text-echolance-cyan">import</span> {"{"} DigitalCanvas, MotionEngine {"}"}{" "}
                    <span className="text-echolance-cyan">from</span> <span className="text-emerald-400">&quot;@echolance/core&quot;</span>;
                  </div>
                  <br />
                  <div>
                    <span className="text-echolance-indigo">export default async function</span> <span className="text-amber-300">WebsiteEngine</span>() {"{"}
                  </div>
                  <div className="pl-4 text-slate-400">
                    <span className="text-echolance-cyan">const</span> site = <span className="text-echolance-cyan">await</span> createExperience({"{"}
                  </div>
                  <div className="pl-8 text-slate-300">
                    performance: <span className="text-amber-400">100</span>,
                  </div>
                  <div className="pl-8 text-slate-300">
                    designSystem: <span className="text-emerald-400">&quot;Bespoke High-Contrast Agency&quot;</span>,
                  </div>
                  <div className="pl-8 text-slate-300">
                    animations: <span className="text-emerald-400">&quot;GSAP Physics + Smooth Parallax&quot;</span>,
                  </div>
                  <div className="pl-4 text-slate-400">{"}"});</div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-echolance-cyan">return</span> &lt;<span className="text-amber-300">DigitalCanvas</span> site=&#123;site&#125; /&gt;;
                  </div>
                  <div>{"}"}</div>
                </div>
              )}

              {/* Bottom Mockup Status Bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SYSTEM STATUS: OPERATIONAL</span>
                <span className="text-echolance-cyan">ECHOLANCE AGENCY ENGINE v3.4</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
