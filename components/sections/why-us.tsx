"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_POINTS } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { Code2, Zap, Sparkles, Globe, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface WhyUsProps {
  onOpenModal: () => void;
}

export function WhyUs({ onOpenModal }: WhyUsProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-echolance-gold" />,
    Zap: <Zap className="w-6 h-6 text-echolance-cyan" />,
    Sparkles: <Sparkles className="w-6 h-6 text-echolance-emerald" />,
    Globe: <Globe className="w-6 h-6 text-purple-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="why-us" className="py-28 md:py-36 relative z-10 border-t border-white/5 bg-[#08090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="07 — WHY ECHOLANCE"
          title="ENGINEERED TO OUTPERFORM"
          gradientText="GENERIC TEMPLATES."
          subtitle="Here is how our boutique agency model sets your digital presence apart from cookie-cutter websites."
        />

        {/* 5 Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
          {WHY_POINTS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0e1018] border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {iconMap[pillar.icon]}
                </div>
                <span className="text-xs text-echolance-gold font-bold">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-echolance-gold transition-colors font-mono">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mb-2 font-sans">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Check className="w-4 h-4 text-echolance-emerald" />
                <span>Verified Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audit CTA Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-echolance-gold/15 via-amber-500/5 to-echolance-cyan/15 border border-white/10 p-8 md:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left font-mono">
            <span className="text-xs text-echolance-gold uppercase tracking-widest">
              FREE TECHNICAL AUDIT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              Ready to replace your generic site with a custom platform?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Schedule a free 15-minute digital architecture audit of your existing website performance and UX.
            </p>
          </div>

          <Button
            onClick={onOpenModal}
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            glow
          >
            CLAIM FREE AUDIT
          </Button>
        </div>

      </div>
    </section>
  );
}
