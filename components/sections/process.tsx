"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Target, Rocket, TrendingUp } from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface ProcessProps {
  onOpenModal: () => void;
}

interface StepItem {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  whatWeDo: string;
  whatYouGet: string[];
  icon: React.ReactNode;
}

const PROCESS_STEPS: StepItem[] = [
  {
    num: "01",
    id: "discover",
    title: "DISCOVER",
    subtitle: "Strategy & Business Alignment",
    whatWeDo: "We deep-dive into your business goals, target user psychology, competitive landscape, and technical specifications before writing code.",
    whatYouGet: ["Product Vision Brief", "User Archetype Specs", "Tech Stack Architecture", "Project Roadmap"],
    icon: <Target className="w-5 h-5 text-amber-400" />,
  },
  {
    num: "02",
    id: "design",
    title: "DESIGN",
    subtitle: "Visual Identity & User Interface",
    whatWeDo: "We craft custom typography hierarchies, high-contrast obsidian design systems, micro-interactions, and interactive Figma prototypes.",
    whatYouGet: ["Figma Design System", "Interactive Prototypes", "Motion Specs", "Brand Alignment"],
    icon: <Layers className="w-5 h-5 text-amber-400" />,
  },
  {
    num: "03",
    id: "build",
    title: "BUILD",
    subtitle: "Software Engineering & Motion",
    whatWeDo: "We convert approved designs into clean, modular Next.js and TypeScript codebases with GSAP scroll physics and sub-second loading.",
    whatYouGet: ["Next.js & React Codebase", "GSAP Motion Scripts", "API & Webhook Engines", "100 Speed Benchmark"],
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
  },
  {
    num: "04",
    id: "launch",
    title: "LAUNCH",
    subtitle: "Quality Assurance & Deployment",
    whatWeDo: "Rigorous cross-device verification across 7 viewports, accessibility validation, technical SEO indexing, and zero-downtime deployment.",
    whatYouGet: ["Cross-Browser Verification", "Technical SEO Indexing", "SSL & Domain Setup", "Global Edge CDN"],
    icon: <Rocket className="w-5 h-5 text-amber-400" />,
  },
  {
    num: "05",
    id: "grow",
    subtitle: "Optimization & Partnership",
    title: "GROW",
    whatWeDo: "Long-term engineering partnership, Core Web Vitals monitoring, bi-weekly feature sprints, and ongoing conversion optimization.",
    whatYouGet: ["24/7 Uptime Monitoring", "Bi-Weekly Enhancements", "Security Hardening", "Growth Analytics"],
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
  },
];

export function Process({ onOpenModal }: ProcessProps) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIdx];

  return (
    <section id="process" className="py-24 md:py-36 relative z-10 exhibition-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="Connected workflow."
          gradientText="Predictable outcomes."
          subtitle="A structured 5-stage engineering process designed to take your digital presence from concept to high-performance launch."
        />

        {/* Connected Process Track */}
        <div className="relative">
          
          {/* Progress Indicator Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-[2px] bg-amber-400 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIdx / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          {/* Timeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIdx;
              const isPast = idx < activeStepIdx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400/15 border-amber-400 text-white shadow-[0_10px_30px_rgba(251,191,36,0.15)] scale-[1.02]"
                      : isPast
                      ? "bg-white/5 border-white/20 text-slate-300"
                      : "bg-white/[0.02] border-white/5 text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-2">
                    <span className={isActive ? "text-amber-400" : "text-slate-500"}>
                      STEP {step.num}
                    </span>
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-extrabold font-sans tracking-tight text-white uppercase">
                    {step.title}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400 mt-1 line-clamp-1">
                    {step.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Dynamic Spec Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#0b0d15] border border-white/10 p-6 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: WHAT WE DO */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                <span>STAGE {activeStep.num} SPECIFICATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-sans">
                {activeStep.title}: {activeStep.subtitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeStep.whatWeDo}
              </p>

              <div className="pt-2">
                <MagneticWrapper strength={15}>
                  <button
                    onClick={onOpenModal}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300 transition-colors"
                  >
                    <span>START THIS STAGE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MagneticWrapper>
              </div>
            </div>

            {/* Right: WHAT YOU GET */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#06070a] border border-white/10 space-y-3 font-sans">
              <h5 className="text-xs font-mono tracking-widest text-slate-400 uppercase border-b border-white/10 pb-2">
                DELIVERABLES PRODUCED:
              </h5>
              <div className="space-y-2">
                {activeStep.whatYouGet.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-3 text-xs text-slate-200 p-2 rounded-lg bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
