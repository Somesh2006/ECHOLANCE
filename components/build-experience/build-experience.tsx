"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { BrowserFrame } from "@/components/portfolio/browser-frame";
import { BuildStagePreview } from "./build-stage-preview";
import { cn } from "@/utils/cn";

export interface BuildStage {
  number: string;
  id: string;
  title: string;
  subtitle: string;
}

const STAGES: BuildStage[] = [
  {
    number: "01",
    id: "idea",
    title: "IDEA",
    subtitle: "Rough wireframe sketches, blueprints & conceptual mapping.",
  },
  {
    number: "02",
    id: "structure",
    title: "STRUCTURE",
    subtitle: "Information architecture, 12-col grid & layout flow.",
  },
  {
    number: "03",
    id: "design",
    title: "DESIGN",
    subtitle: "Custom typography, dark tokens & visual balance.",
  },
  {
    number: "04",
    id: "content",
    title: "CONTENT",
    subtitle: "Editorial brand copy, narrative hierarchy & assets.",
  },
  {
    number: "05",
    id: "interaction",
    title: "INTERACTION",
    subtitle: "GSAP motion physics, cursor feedback & micro-interactions.",
  },
  {
    number: "06",
    id: "live",
    title: "LIVE",
    subtitle: "Sub-second edge deployment & 100/100 Lighthouse performance.",
  },
];

export function BuildExperience() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // Optional automatic gentle progression when section is in view
  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isInView, shouldReduceMotion]);

  const currentStage = STAGES[activeStageIndex];

  return (
    <section
      ref={sectionRef}
      id="build-experience"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden"
    >
      {/* Background Atmosphere Layer */}
      <SectionAtmosphere
        grid="fine"
        glow="dual"
        watermark="BUILD"
        watermarkPosition="center"
      />

      <Container>
        {/* Section Header */}
        <div className="space-y-6 max-w-3xl pb-16 sm:pb-20 border-b border-white/10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="05" label="THE BUILD" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            WATCH AN IDEA <br />
            <span className="text-white">BECOME A WEBSITE.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="typography-body text-[rgba(255,255,255,0.65)] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Every project moves through a series of deliberate stages before it
            goes live.
          </motion.p>
        </div>

        {/* Cinematic Horizontal / Responsive Stage Timeline */}
        <div className="py-12 relative">
          {/* Connecting Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-[5.2rem] left-0 right-0 h-[1px] bg-white/10 z-0">
            <motion.div
              className="h-full bg-[#E5C07B]"
              initial={{ width: "0%" }}
              animate={{
                width: `${((activeStageIndex + 1) / STAGES.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: transitionEase }}
            />
          </div>

          {/* Stage Controls */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPast = activeStageIndex > idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={cn(
                    "group p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E5C07B]/50",
                    isActive
                      ? "bg-[#0D0F16] border-[#E5C07B]/40 shadow-xl shadow-black/60"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-60 hover:opacity-100"
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={cn(
                        "text-xs font-mono tracking-widest",
                        isActive
                          ? "text-[#E5C07B] font-bold"
                          : isPast
                          ? "text-white/80"
                          : "text-white/40"
                      )}
                    >
                      {stage.number}
                    </span>

                    <span
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        isActive
                          ? "bg-[#E5C07B] animate-pulse"
                          : isPast
                          ? "bg-white/60"
                          : "bg-white/20"
                      )}
                    />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "text-sm sm:text-base font-bold tracking-tight transition-colors",
                        isActive ? "text-white" : "text-white/80"
                      )}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-white/40 mt-1 line-clamp-2 leading-snug">
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Transforming Browser Preview Showcase */}
        <div className="w-full pt-4">
          <BrowserFrame
            urlPath={`echolance.studio/build-evolution/${currentStage.id}`}
            projectNumber={currentStage.number}
          >
            <BuildStagePreview stageId={currentStage.id} />
          </BrowserFrame>
        </div>

        {/* Micro Footer Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 border-t border-white/10 mt-12">
          <span>INTERACTIVE STAGE: {currentStage.title}</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]" />
            <span>CLICK ANY STAGE ABOVE TO INSPECT TRANSFORMATION</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
