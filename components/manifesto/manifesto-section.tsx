"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { ManifestoOrbitalArc } from "@/components/ui/atmosphere-layers";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const textX1 = useTransform(smoothProgress, [0, 1], ["-3%", "3%"]);
  const textX2 = useTransform(smoothProgress, [0, 1], ["3%", "-3%"]);
  const textX3 = useTransform(smoothProgress, [0, 1], ["-2%", "2%"]);

  return (
    <section
      id="discover"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080808] text-[#F5F2EA] overflow-hidden select-none border-t border-[#F5F2EA]/10"
    >
      {/* 01 — Atmospheric Gold Orbital Arc */}
      <ManifestoOrbitalArc />

      {/* 02 — Subtle Gold Core Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#D8B36A]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <div className="relative z-10 space-y-10 sm:space-y-14">
          
          {/* Top Bar Label & Right Coordinates List */}
          <div className="flex items-start justify-between border-b border-[#F5F2EA]/10 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
              <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                // WHAT WE DO
              </span>
            </div>

            {/* Top Right Strategic Services Column */}
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7A39A]">
              <span className="text-[#F5F2EA]/80 font-medium">STRATEGY</span>
              <span>•</span>
              <span>DESIGN</span>
              <span>•</span>
              <span>DEVELOPMENT</span>
              <span>•</span>
              <span className="text-[#D8B36A]">BEYOND</span>
            </div>
          </div>

          {/* ==============================================================
              REFINED EDITORIAL TYPOGRAPHIC SCENE (CONTROLLED PROPORTIONS)
          ============================================================== */}
          <div className="relative py-2 sm:py-6 flex flex-col justify-center space-y-0.5 sm:space-y-1">
            
            {/* LINE 01: IDEAS */}
            <div className="overflow-hidden">
              <motion.div
                style={{ x: shouldReduceMotion ? 0 : textX1 }}
                className="flex items-baseline"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-[#F5F2EA] leading-[0.96] uppercase">
                  IDEAS
                </span>
              </motion.div>
            </div>

            {/* LINE 02: INTO */}
            <div className="overflow-hidden">
              <motion.div
                style={{ x: shouldReduceMotion ? 0 : textX2 }}
                className="flex items-baseline"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-[#F5F2EA] leading-[0.96] uppercase">
                  INTO
                </span>
              </motion.div>
            </div>

            {/* LINE 03: REALITY */}
            <div className="overflow-hidden">
              <motion.div
                style={{ x: shouldReduceMotion ? 0 : textX3 }}
                className="flex items-baseline gap-4"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif italic font-normal tracking-tight text-[#D8B36A] drop-shadow-[0_0_25px_rgba(216,179,106,0.3)] leading-[0.96] uppercase">
                  REALITY
                </span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Editorial Narrative, Button & Right Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-6 sm:pt-10 border-t border-[#F5F2EA]/10">
            <div className="lg:col-span-8 space-y-5">
              <p className="text-sm sm:text-base lg:text-lg text-[#A7A39A] font-sans leading-relaxed max-w-xl font-normal">
                Echolance is a digital studio crafting websites, brands and online experiences for the next generation of businesses.
              </p>

              <div>
                <a
                  href="#work"
                  className="inline-flex items-center gap-3.5 group cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full border border-[#F5F2EA]/20 bg-[#F5F2EA]/[0.04] text-[#F5F2EA] flex items-center justify-center group-hover:scale-105 group-hover:border-[#D8B36A] group-hover:bg-[#D8B36A] group-hover:text-[#080808] transition-all duration-300 shadow-md">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#F5F2EA] uppercase group-hover:text-[#D8B36A] transition-colors">
                    DISCOVER OUR APPROACH
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom Right Quote */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="text-left lg:text-right space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#A7A39A] block">
                  IDEAS THAT CREATE
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5F2EA] font-semibold block">
                  OPPORTUNITIES —
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
