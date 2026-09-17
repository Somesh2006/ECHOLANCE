"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGENCY_STATS } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { CheckCircle2, Zap, Code2, Sparkles } from "lucide-react";

export function TrustIntro() {
  return (
    <section className="py-20 md:py-28 relative z-10 border-t border-b border-white/5 bg-[#07080d]/80 backdrop-blur-md exhibition-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Split Layout: Philosophy & Trust */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              badge="AGENCY POSITIONING"
              title="We don’t build generic templates."
              gradientText="We craft digital authority."
              subtitle="Echolance is a bespoke web design & engineering studio. We partner with forward-thinking companies to build modern digital experiences that command attention, communicate value, and propel business growth."
            />
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#0b0d15] border border-white/10 hover:border-amber-400/30 transition-colors space-y-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <h4 className="text-white font-bold text-sm font-sans uppercase">Empirical Speed</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Performance-focused implementation optimized for Core Web Vitals and instant page load.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0d15] border border-white/10 hover:border-amber-400/30 transition-colors space-y-2">
              <Code2 className="w-5 h-5 text-amber-400" />
              <h4 className="text-white font-bold text-sm font-sans uppercase">Bespoke Code</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Clean Next.js & TypeScript architecture built specifically for your brand needs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0d15] border border-white/10 hover:border-amber-400/30 transition-colors space-y-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-white font-bold text-sm font-sans uppercase">Cinematic Motion</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                GSAP scroll physics and spring interactions engineered to feel responsive and high-end.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0d15] border border-white/10 hover:border-amber-400/30 transition-colors space-y-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              <h4 className="text-white font-bold text-sm font-sans uppercase">Long-Term Support</h4>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                Continuous post-launch feature iterations, security hardening, and performance monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Factual Technical Specs Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#0b0d15] border border-white/10 shadow-xl font-mono">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col space-y-1 border-r last:border-r-0 border-white/10 pr-4 text-left"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-white uppercase pt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 font-sans">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
