"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ProcessStatePreview } from "./process-state-preview";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";

export interface ProcessStage {
  number: string;
  id: string;
  title: string;
  headline: string;
  description: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    id: "discover",
    title: "DISCOVER",
    headline: "Strategic Alignment & Goals",
    description: "Understand the business, audience, goals and project direction.",
  },
  {
    number: "02",
    id: "define",
    title: "DEFINE",
    headline: "Information Architecture & Flow",
    description: "Shape the structure, content and experience before development.",
  },
  {
    number: "03",
    id: "design",
    title: "DESIGN",
    headline: "Visual Art Direction & Systems",
    description: "Create the visual language, layouts and interaction system.",
  },
  {
    number: "04",
    id: "build",
    title: "BUILD",
    headline: "Engineered Code & Next.js SSR",
    description: "Turn the approved direction into a responsive, functional website.",
  },
  {
    number: "05",
    id: "launch",
    title: "LAUNCH",
    headline: "Edge Deployment & Verification",
    description: "Test, refine and prepare the final experience for launch.",
  },
];

export function ProcessSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  const activeStage = PROCESS_STAGES[activeStageIndex];

  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden"
    >
      {/* Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="gold"
        watermark="PROCESS"
        watermarkPosition="top-right"
      />

      <Container>
        {/* Section Header */}
        <div className="space-y-6 max-w-3xl pb-16 sm:pb-24 border-b border-white/10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="06" label="HOW WE WORK" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            FROM FIRST IDEA <br />
            <span className="text-white">TO FINAL LAUNCH.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="typography-body text-[rgba(255,255,255,0.65)] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            A clear process keeps the creative work focused, flexible and moving
            in the right direction.
          </motion.p>
        </div>

        {/* Process Timeline Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Process Stages List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPast = activeStageIndex > idx;

              return (
                <div key={stage.id} className="flex flex-col">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setActiveStageIndex(idx)}
                    onMouseEnter={() => setActiveStageIndex(idx)}
                    onFocus={() => setActiveStageIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveStageIndex(idx);
                      }
                    }}
                    className={cn(
                      "group w-full p-6 sm:p-7 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E5C07B]/50",
                      isActive
                        ? "bg-[#0D0F16] border-[#E5C07B]/40 shadow-xl shadow-black/60 opacity-100"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-55 hover:opacity-90"
                    )}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={cn(
                            "text-sm font-mono tracking-widest",
                            isActive
                              ? "text-[#E5C07B] font-bold"
                              : isPast
                              ? "text-white/80"
                              : "text-white/40"
                          )}
                        >
                          {stage.number}
                        </span>

                        <h3
                          className={cn(
                            "text-xl sm:text-2xl font-bold tracking-tight transition-colors",
                            isActive ? "text-white" : "text-white/80"
                          )}
                        >
                          {stage.title}
                        </h3>
                      </div>

                      <span
                        className={cn(
                          "text-xs font-mono tracking-widest transition-colors uppercase hidden sm:inline-block",
                          isActive ? "text-[#E5C07B]" : "text-white/30"
                        )}
                      >
                        STAGE {stage.number}
                      </span>
                    </div>

                    <p
                      className={cn(
                        "text-xs sm:text-sm leading-relaxed transition-colors pl-8 sm:pl-10",
                        isActive ? "text-white/70" : "text-white/40"
                      )}
                    >
                      {stage.description}
                    </p>
                  </button>

                  {/* Mobile Only: Inline State Preview */}
                  {isActive && (
                    <div className="lg:hidden py-4">
                      <ProcessStatePreview stageId={activeStage.id} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Desktop): Sticky Dynamic Process State Sandbox */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
            <ProcessStatePreview stageId={activeStage.id} />
          </div>
        </div>
      </Container>
    </section>
  );
}
