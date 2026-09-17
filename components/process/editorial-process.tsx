"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProcessFlowingTrack } from "@/components/ui/atmosphere-layers";
import { cn } from "@/utils/cn";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "IDEA",
    subtitle: "Discovery & Vision",
    caption: "CHAOTIC PARTICLES → ALIGNMENT",
    detail:
      "We align on strategic vision, audience psychology, brand essence, and technical scope to turn abstract concepts into tangible trajectories.",
    stageType: "idea",
    metrics: "STRATEGY // SCOPE // ARCHITECTURE",
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Kinetic Systems & Art",
    caption: "GEOMETRIC ORBIT FORMATION",
    detail:
      "We sculpt bespoke art direction, kinetic typography systems, and interaction models that elevate your brand far beyond generic templates.",
    stageType: "design",
    metrics: "TYPOGRAPHY // MOTION // TOKENS",
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Next.js 15 Engineering",
    caption: "LAYERED ARCHITECTURAL MATRIX",
    detail:
      "Engineered with clean Next.js 15, strict TypeScript, responsive layouts, and sub-second global edge performance.",
    stageType: "build",
    metrics: "STRICT TS // ZERO LATENCY // CLEAN",
  },
  {
    number: "04",
    title: "LIVE",
    subtitle: "Launch & Continuous Scale",
    caption: "POLISHED RESOLVED BEACON",
    detail:
      "Seamless production deployment, core web vitals optimization, analytics verification, and ongoing technical partnership.",
    stageType: "live",
    metrics: "99.99% UP // SUB-SECOND // SCALE",
  },
];

export function EditorialProcess() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = PROCESS_STEPS[activeIdx];

  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080808] text-[#F5F2EA] select-none border-t border-[#F5F2EA]/10 overflow-hidden"
    >
      {/* Background Soft Core Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D8B36A]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <div className="space-y-12 sm:space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-[#F5F2EA]/10 pb-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
                <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                  // OUR PROCESS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F2EA] font-sans uppercase leading-[1.05]">
                FROM <br />
                CONCEPT TO <br />
                <span className="font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_25px_rgba(216,179,106,0.3)]">
                  PRODUCTION.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-4 space-y-2.5">
              <p className="text-xs sm:text-sm text-[#A7A39A] font-sans leading-relaxed font-normal">
                A single continuous visual journey where abstract ideas evolve into structured geometry, layered engineering, and high-performance reality.
              </p>
              <span className="text-[10px] font-mono text-[#D8B36A] uppercase tracking-widest block">
                [ 04 PROGRESSIVE STAGES ]
              </span>
            </div>
          </div>

          {/* Continuous Glowing Golden Path & 4 Milestone Nodes */}
          <div className="relative py-4 sm:py-10">
            <ProcessFlowingTrack activeStage={activeIdx} />

            {/* 4 Interactive Stage Columns */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <motion.div
                    key={step.number}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.65, delay: idx * 0.08, ease: transitionEase }}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={cn(
                      "group cursor-pointer flex flex-col justify-between p-5 sm:p-6 rounded-xl transition-all duration-400 min-h-[270px] relative overflow-hidden",
                      isActive
                        ? "bg-[#0F0F0F] border border-[#D8B36A]/45 shadow-[0_0_30px_rgba(216,179,106,0.1)] scale-[1.01]"
                        : "bg-[#0B0B0B]/60 border border-[#F5F2EA]/10 hover:border-[#D8B36A]/30 hover:bg-[#0F0F0F]/40"
                    )}
                  >
                    {/* Top Marker & Number */}
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 font-mono text-[11px] font-semibold",
                          isActive
                            ? "border-[#D8B36A] bg-[#D8B36A]/20 text-[#F0C978] shadow-[0_0_12px_rgba(216,179,106,0.4)]"
                            : "border-[#F5F2EA]/20 bg-[#080808] text-[#A7A39A] group-hover:border-[#D8B36A]/40"
                        )}
                      >
                        {step.number}
                      </div>

                      <span className="text-[10px] font-mono text-[#D8B36A] tracking-widest uppercase">
                        STAGE {step.number}
                      </span>
                    </div>

                    {/* Step Visual Dynamic Specimen */}
                    <div className="py-2 flex items-center justify-center h-20">
                      <StageMicroVisual stage={step.stageType} isActive={isActive} />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F5F2EA]/10">
                      <h3
                        className={cn(
                          "text-lg sm:text-xl font-bold font-sans tracking-tight uppercase transition-colors",
                          isActive ? "text-white" : "text-[#F5F2EA]"
                        )}
                      >
                        {step.title}
                      </h3>

                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D8B36A]">
                        {step.subtitle}
                      </p>

                      <p className="text-xs text-[#A7A39A] font-sans leading-relaxed pt-0.5 line-clamp-2">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Stage Telemetry Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#0B0B0B] border border-[#F5F2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] animate-ping" />
              <span className="text-[#A7A39A] uppercase tracking-widest text-[11px]">ACTIVE STATE:</span>
              <span className="text-[#F0C978] uppercase font-semibold tracking-wider text-[11px]">
                STAGE {activeStep.number} // {activeStep.title}
              </span>
            </div>
            <div className="text-[10px] text-[#A7A39A] uppercase tracking-widest text-center sm:text-right">
              {activeStep.metrics}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

// Micro Visuals for each Stage
function StageMicroVisual({ stage, isActive }: { stage: string; isActive: boolean }) {
  if (stage === "idea") {
    return (
      <svg viewBox="0 0 100 60" className="w-full h-full max-h-16">
        <circle cx="20" cy="24" r="2.5" fill="#D8B36A" opacity={isActive ? 0.9 : 0.4} />
        <circle cx="40" cy="48" r="2" fill="#F0C978" opacity={isActive ? 1 : 0.5} />
        <circle cx="65" cy="16" r="1.5" fill="#D8B36A" opacity={isActive ? 0.8 : 0.3} />
        <circle cx="80" cy="40" r="3" fill="#F0C978" opacity={isActive ? 0.9 : 0.4} />
        <path d="M20 24 Q 50 8, 65 16" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.6" />
        <path d="M40 48 Q 60 56, 80 40" stroke="#F0C978" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.6" />
      </svg>
    );
  }

  if (stage === "design") {
    return (
      <svg viewBox="0 0 100 60" className="w-full h-full max-h-16">
        <ellipse cx="50" cy="30" rx="36" ry="20" fill="none" stroke="#D8B36A" strokeWidth="0.8" opacity={isActive ? 0.8 : 0.4} />
        <ellipse cx="50" cy="30" rx="22" ry="12" fill="none" stroke="#F0C978" strokeWidth="1" strokeDasharray="2 2" opacity={isActive ? 0.9 : 0.5} />
        <circle cx="50" cy="30" r="3" fill="#F0C978" opacity={isActive ? 1 : 0.6} />
      </svg>
    );
  }

  if (stage === "build") {
    return (
      <svg viewBox="0 0 100 60" className="w-full h-full max-h-16">
        <rect x="20" y="12" width="60" height="36" fill="none" stroke="#D8B36A" strokeWidth="0.8" opacity={isActive ? 0.9 : 0.4} />
        <line x1="20" y1="30" x2="80" y2="30" stroke="#F0C978" strokeWidth="0.8" strokeDasharray="2 2" opacity={isActive ? 0.8 : 0.4} />
        <line x1="50" y1="12" x2="50" y2="48" stroke="#F0C978" strokeWidth="0.8" strokeDasharray="2 2" opacity={isActive ? 0.8 : 0.4} />
        <circle cx="50" cy="30" r="2.5" fill="#F0C978" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 60" className="w-full h-full max-h-16">
      <circle cx="50" cy="30" r="22" fill="none" stroke="#D8B36A" strokeWidth="0.8" opacity={isActive ? 0.6 : 0.2} />
      <polygon points="50,14 64,30 50,46 36,30" fill="rgba(216,179,106,0.2)" stroke="#F0C978" strokeWidth="1.2" />
      <circle cx="50" cy="30" r="3" fill="#F0C978" className="drop-shadow-[0_0_6px_#F0C978]" />
    </svg>
  );
}
