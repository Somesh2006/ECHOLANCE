"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { Trophy, Award, Star, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { AGENCY_STATS } from "@/data/agency-data";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden"
    >
      {/* Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="dual"
        watermark="ECHOLANCE"
        watermarkPosition="center"
      />
      <Container>
        {/* Large Display Typography Statement */}
        <div className="max-w-4xl space-y-8 pb-16 sm:pb-24 border-b border-white/10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="08" label="ABOUT ECHOLANCE" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            WE DON&apos;T JUST BUILD WEBSITES. <br />
            <span className="text-[#E5C07B]">
              WE BUILD DIGITAL EXPERIENCES.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-3xl leading-relaxed font-normal"
          >
            Echolance is a bespoke digital agency. We partner with ambitious
            companies to craft custom web platforms that capture market attention,
            command authority, and deliver lasting performance.
          </motion.p>
        </div>

        {/* Value Cards Matrix */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: transitionEase }}
            className="p-6 rounded-2xl bg-[#0D0F16] border border-white/10 space-y-3"
          >
            <div className="p-3 rounded-xl bg-[#E5C07B]/10 border border-[#E5C07B]/20 text-[#E5C07B] w-fit">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Bespoke Code
            </h3>
            <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed">
              Zero visual page builders. Every platform is written from first
              principles with clean TypeScript.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: transitionEase }}
            className="p-6 rounded-2xl bg-[#0D0F16] border border-white/10 space-y-3"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Sub-Second Speed
            </h3>
            <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed">
              Optimized for Core Web Vitals to maximize engagement, retention, and
              instant page loads.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ease: transitionEase }}
            className="p-6 rounded-2xl bg-[#0D0F16] border border-white/10 space-y-3"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#E5C07B] w-fit">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Conversion UX
            </h3>
            <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed">
              Human-centric interfaces structured to convert casual visitors into
              high-conviction inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ease: transitionEase }}
            className="p-6 rounded-2xl bg-[#0D0F16] border border-white/10 space-y-3"
          >
            <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Dedicated Care
            </h3>
            <p className="text-xs text-[rgba(255,255,255,0.55)] leading-relaxed">
              Long-term technical partnership with ongoing performance audits,
              security hardening, and sprints.
            </p>
          </motion.div>
        </div>

        {/* Agency Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#0D0F16] border border-white/10">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col space-y-1 font-mono text-center sm:text-left border-r last:border-r-0 border-white/10 pr-4"
            >
              <span className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[#E5C07B] uppercase mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-white/50">{stat.detail}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
