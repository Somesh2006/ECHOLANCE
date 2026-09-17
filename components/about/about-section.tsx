"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { CORE_PRINCIPLES } from "@/data/agency-data";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="about"
      className="relative w-full py-28 sm:py-36 lg:py-44 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="dual"
        watermark="ABOUT"
        watermarkPosition="center"
      />

      <Container>
        {/* Centerpiece Statement */}
        <div className="max-w-4xl space-y-8 pb-16 sm:pb-24 border-b border-white/10 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="03" label="ABOUT ECHOLANCE" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-white leading-[1.02]"
          >
            WE LIKE MAKING <br />
            THE INTERNET <br />
            <span className="text-[#E5C07B]">
              FEEL A LITTLE MORE INTERESTING.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="text-base sm:text-xl md:text-2xl text-[rgba(255,255,255,0.7)] max-w-3xl leading-relaxed font-normal"
          >
            Echolance is a digital studio focused on creating websites that feel
            distinctive, work beautifully and give ambitious businesses a stronger
            digital presence.
          </motion.p>
        </div>

        {/* 3 Editorial Principles */}
        <div className="pt-16 sm:pt-20 space-y-8 relative z-10">
          <div className="flex items-center justify-between pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B]">
              OUR FOUNDATIONS
            </span>
            <span className="text-xs font-mono text-white/40">
              03 PRINCIPLES
            </span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {CORE_PRINCIPLES.map((principle, idx) => (
              <motion.div
                key={principle.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: transitionEase,
                }}
                className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
              >
                <div className="lg:col-span-5 flex items-baseline gap-6">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#E5C07B]">
                    {principle.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-[#E5C07B] transition-colors">
                    {principle.title}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-sm sm:text-base md:text-lg text-[rgba(255,255,255,0.65)] leading-relaxed font-normal max-w-2xl">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
