"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS, ProcessStep } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import {
  Search,
  PenTool,
  Code,
  Rocket,
  RefreshCw,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";

interface ProcessProps {
  onOpenModal: () => void;
}

export function Process({ onOpenModal }: ProcessProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  const stepIcons = [
    <Search key="1" className="w-5 h-5" />,
    <PenTool key="2" className="w-5 h-5" />,
    <Code key="3" className="w-5 h-5" />,
    <Rocket key="4" className="w-5 h-5" />,
    <RefreshCw key="5" className="w-5 h-5" />,
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Our Workflow"
          title="From initial vision to"
          gradientText="market-leading product."
          subtitle="Our 5-stage engineering process ensures transparent milestones, fast iteration, and zero launch surprises."
        />

        {/* Interactive Step Navigation Pipeline */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 relative flex flex-col justify-between border ${
                  isActive
                    ? "bg-gradient-to-r from-echolance-cyan/20 to-echolance-indigo/20 border-echolance-cyan/50 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                    : "bg-transparent border-transparent hover:bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs ${isActive ? "text-echolance-cyan font-bold" : "text-slate-500"}`}>
                    STAGE {step.step}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg ${
                      isActive ? "bg-echolance-cyan text-slate-950" : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {stepIcons[idx]}
                  </div>
                </div>

                <div>
                  <h4 className={`text-sm font-bold truncate ${isActive ? "text-white" : "text-slate-300"}`}>
                    {step.title.split("&")[0]}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                    {step.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-[#0b0d15] border border-white/10 p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden"
            >
              {/* Background ambient radial glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-echolance-indigo/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Side: Overview & Key Outcome */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-echolance-cyan to-echolance-violet font-mono">
                    STAGE {activeStep.step}
                  </span>
                  <div className="h-4 w-[1px] bg-white/15" />
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-echolance-cyan" />
                    <span>{activeStep.duration}</span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {activeStep.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-echolance-emerald/10 to-transparent border border-echolance-emerald/30">
                  <span className="text-xs font-mono uppercase tracking-wider text-echolance-emerald block mb-1">
                    Key Outcome Guaranteed
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {activeStep.keyOutcome}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={onOpenModal}
                    variant="primary"
                    size="md"
                    icon={<Sparkles className="w-4 h-4" />}
                  >
                    Initiate Stage 01 with Us
                  </Button>
                </div>
              </div>

              {/* Right Side: Stage Deliverables Checklist */}
              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                  Tangible Deliverables Handed Over:
                </h4>

                <div className="space-y-3">
                  {activeStep.deliverables.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-sm text-white glass-panel-hover"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-echolance-cyan shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">COMPLETE</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
