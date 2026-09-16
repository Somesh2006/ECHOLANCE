"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, Service } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import {
  LayoutGrid,
  Code2,
  Figma,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Button } from "../ui/button";

interface ServicesProps {
  onOpenModal: () => void;
}

export function Services({ onOpenModal }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);

  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Figma: <Figma className="w-5 h-5" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  };

  return (
    <section id="services" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Core Capabilities"
          title="Engineered for impact."
          gradientText="Designed for growth."
          subtitle="We combine bespoke visual craft with high-performance software engineering to deliver digital solutions that scale."
        />

        {/* Interactive Services Grid & Preview */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Service Cards List */}
          <div className="lg:col-span-6 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-gradient-to-r from-white/[0.08] to-white/[0.03] border-echolance-cyan/50 shadow-[0_10px_30px_rgba(56,189,248,0.15)]"
                      : "bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-echolance-cyan font-bold">
                        {service.number}
                      </span>
                      <div
                        className={`p-2.5 rounded-xl transition-colors ${
                          isSelected
                            ? "bg-echolance-cyan text-slate-950 font-bold"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        {iconMap[service.iconName]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {service.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-echolance-cyan border border-white/10">
                        {service.metrics}
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? "text-echolance-cyan translate-x-1" : "text-slate-600"
                        }`}
                      />
                    </div>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Live Dynamic Interactive Visual Sandbox Preview */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-[#0b0d15] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-echolance-cyan/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-echolance-indigo/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-echolance-cyan/20 border border-echolance-cyan/40 text-echolance-cyan">
                      {iconMap[activeService.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-echolance-cyan uppercase tracking-wider">
                        {activeService.tag}
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-echolance-emerald/20 border border-echolance-emerald/40 text-echolance-emerald text-xs font-mono font-bold">
                    {activeService.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                  {activeService.fullDesc}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-2 relative z-10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables Included:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-echolance-cyan shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code / Visual Sandbox Sandbox */}
                <div className="rounded-xl bg-[#06070a] border border-white/10 p-4 font-mono text-xs text-slate-300 relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-echolance-cyan" />
                      <span>{activeService.id}-spec.ts</span>
                    </div>
                    <span className="text-[10px] text-echolance-emerald">STATUS: READY</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] text-slate-300 leading-relaxed pt-1">
                    <code>{activeService.previewCode}</code>
                  </pre>
                </div>

                {/* CTA trigger inside service preview */}
                <div className="pt-2 relative z-10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready for this capability?</span>
                  <Button
                    onClick={onOpenModal}
                    variant="primary"
                    size="sm"
                    icon={<Sparkles className="w-3.5 h-3.5" />}
                  >
                    Request Proposal
                  </Button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
