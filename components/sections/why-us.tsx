"use client";

import React from "react";
import { motion } from "framer-motion";
import { DIFFERENTIATORS } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { Code2, Zap, Sparkles, TrendingUp, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface WhyUsProps {
  onOpenModal: () => void;
}

export function WhyUs({ onOpenModal }: WhyUsProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-echolance-cyan" />,
    Zap: <Zap className="w-6 h-6 text-echolance-indigo" />,
    Sparkles: <Sparkles className="w-6 h-6 text-echolance-violet" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-echolance-emerald" />,
  };

  return (
    <section id="why-us" className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-[#07080d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Choose Echolance"
          title="Built differently to achieve"
          gradientText="extraordinary results."
          subtitle="We reject generic SaaS templates and visual page builders. Here is how our boutique agency model sets your digital presence apart."
        />

        {/* 4 Core Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff, idx) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-[#0b0d15] border border-white/10 glass-panel-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              {/* Corner Pill Tag */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {iconMap[diff.icon]}
                </div>
                <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-echolance-cyan">
                  {diff.highlight}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-echolance-cyan transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mb-2">
                  {diff.subtitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Comparison checklist badge */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <Check className="w-4 h-4 text-echolance-emerald" />
                <span>Verified Quality Standards</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Box: Template vs Echolance */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-echolance-indigo/10 via-echolance-cyan/10 to-echolance-violet/10 border border-white/10 p-8 md:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono text-echolance-cyan uppercase tracking-widest">
              The Echolance Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to replace your generic site with a bespoke digital platform?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Let’s conduct a free 15-minute digital architecture audit of your existing website.
            </p>
          </div>

          <Button
            onClick={onOpenModal}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            glow
          >
            Claim Free Website Audit
          </Button>
        </div>

      </div>
    </section>
  );
}
