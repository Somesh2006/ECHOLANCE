"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, Service } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import {
  LayoutGrid,
  Code2,
  ShoppingBag,
  Sparkles,
  Globe,
  ShieldCheck,
  ArrowRight,
  Check,
  Terminal,
} from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface ServicesProps {
  onOpenModal: () => void;
}

export function Services({ onOpenModal }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);

  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  };

  return (
    <section id="services" className="py-24 md:py-32 relative z-10 exhibition-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <SectionHeading
          badge="OUR CAPABILITIES"
          title="Engineered for impact."
          gradientText="Designed for growth."
          subtitle="We combine bespoke visual craft with high-performance software engineering to deliver digital platforms that scale."
        />

        {/* Interactive Services Grid & Sandbox */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Large Interactive Service List */}
          <div className="lg:col-span-6 space-y-3">
            {SERVICES.map((service) => {
              const isSelected = activeService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  onMouseEnter={() => setActiveService(service)}
                  onFocus={() => setActiveService(service)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-white/[0.08] border-amber-400/50 shadow-[0_10px_30px_rgba(251,191,36,0.1)]"
                      : "bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-amber-400 font-bold">
                        {service.number}
                      </span>
                      <div
                        className={`p-2.5 rounded-xl transition-colors ${
                          isSelected
                            ? "bg-amber-400 text-black font-bold"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        {iconMap[service.iconName]}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {service.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {service.metrics}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? "text-amber-400 translate-x-1" : "text-slate-600"
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
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {service.shortDesc}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Live Interactive Visual Sandbox */}
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
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300">
                      {iconMap[activeService.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                        0{activeService.number} // CAPABILITY
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                    {activeService.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed relative z-10 font-sans">
                  {activeService.fullDesc}
                </p>

                {/* Key Deliverables List */}
                <div className="space-y-2 relative z-10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    DELIVERABLES INCLUDED:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 font-sans"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Dynamic Sandbox Demonstrations */}
                <div className="rounded-xl bg-[#06070a] border border-white/10 p-4 font-mono text-xs text-slate-300 relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-amber-400" />
                      <span>{activeService.id}-demo.ts</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">SPEC: VERIFIED</span>
                  </div>

                  {activeService.id === "web-design" && (
                    <div className="space-y-2 py-2">
                      <div className="text-amber-300">// Design System Tokens</div>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded bg-white/10 text-white">Font: Geist Sans</span>
                        <span className="px-2 py-1 rounded bg-white/10 text-white">Grid: 12-Col</span>
                      </div>
                      <div className="text-slate-400">Contrast: AAA Compliant</div>
                    </div>
                  )}

                  {activeService.id === "web-development" && (
                    <div className="space-y-1 py-2 text-[11px]">
                      <div className="text-amber-300">export async function generateCore() {"{"}</div>
                      <div className="pl-4 text-slate-300">const edge = await fetchEdgeCache();</div>
                      <div className="pl-4 text-emerald-400">return &lt;NextApp speed=&quot;0.4s&quot; /&gt;;</div>
                      <div className="text-amber-300">{"}"}</div>
                    </div>
                  )}

                  {activeService.id === "ecommerce" && (
                    <div className="space-y-2 py-2 text-[11px]">
                      <div className="flex items-center justify-between text-white">
                        <span>Cart Engine: Shopify Headless API</span>
                        <span className="text-amber-400">$499.00</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                  )}

                  {activeService.id === "landing-pages" && (
                    <div className="space-y-2 py-2 text-[11px]">
                      <div className="text-amber-300">// High-Conversion Funnel Spec</div>
                      <div className="flex justify-between text-slate-300">
                        <span>Hero CTA Response: Instant</span>
                        <span className="text-emerald-400 font-bold">Optimal Funnel</span>
                      </div>
                    </div>
                  )}

                  {activeService.id === "business-websites" && (
                    <div className="space-y-2 py-2 text-[11px]">
                      <div className="text-amber-300">// Technical SEO & Architecture</div>
                      <div className="text-slate-300">JSON-LD Schema Registered • SSL Secured</div>
                    </div>
                  )}

                  {activeService.id === "website-maintenance" && (
                    <div className="space-y-2 py-2 text-[11px]">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Global Edge CDN: Active</span>
                        <span className="text-emerald-400 font-bold">24/7 Monitor</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Request Proposal Trigger */}
                <div className="pt-2 relative z-10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to build this capability?</span>
                  <MagneticWrapper strength={15}>
                    <button
                      onClick={onOpenModal}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-black font-mono font-bold text-xs hover:bg-amber-300 transition-colors"
                    >
                      <span>TALK WITH US</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </MagneticWrapper>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
