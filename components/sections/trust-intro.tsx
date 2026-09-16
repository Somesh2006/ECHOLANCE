"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGENCY_STATS } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { CheckCircle2, Trophy, Award, Star } from "lucide-react";

export function TrustIntro() {
  return (
    <section className="py-20 md:py-28 relative z-10 border-t border-b border-white/5 bg-[#07080d]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout: Philosophy & Trust */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6">
            <SectionHeading
              badge="Agency Positioning"
              title="We don’t build generic templates."
              gradientText="We craft digital authority."
              subtitle="Echolance is a bespoke web design & engineering agency. We partner with forward-thinking companies to build modern digital experiences that capture attention, command authority, and generate revenue."
            />
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 glass-panel-hover">
              <Trophy className="w-6 h-6 text-echolance-cyan mb-3" />
              <h4 className="text-white font-bold text-base mb-1">Empirical Speed</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sub-second initial paint optimized for maximum search rankings and retention.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 glass-panel-hover">
              <Award className="w-6 h-6 text-echolance-indigo mb-3" />
              <h4 className="text-white font-bold text-base mb-1">Custom Architecture</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                100% clean Next.js & TypeScript code built specifically for your brand needs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 glass-panel-hover">
              <Star className="w-6 h-6 text-echolance-violet mb-3" />
              <h4 className="text-white font-bold text-base mb-1">Conversion Psychology</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Strategic typography and UI layouts engineered to convert site visitors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 glass-panel-hover">
              <CheckCircle2 className="w-6 h-6 text-echolance-emerald mb-3" />
              <h4 className="text-white font-bold text-base mb-1">Dedicated Support</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Continuous post-launch enhancements, security patches, and growth sprints.
              </p>
            </div>
          </div>
        </div>

        {/* Numerical Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-white/10 backdrop-blur-xl">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col space-y-1 text-center sm:text-left border-r last:border-r-0 border-white/10 pr-4"
            >
              <span className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-echolance-cyan tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
