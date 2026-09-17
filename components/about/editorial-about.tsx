"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";

export function EditorialAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const textY = useTransform(smoothProgress, [0, 1], ["2%", "-2%"]);
  const rotateCompass = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080808] text-[#F5F2EA] select-none overflow-hidden border-t border-[#F5F2EA]/10"
    >
      {/* Ambient Gold Radial Light Fields */}
      <div className="absolute top-1/4 right-1/10 w-[500px] h-[500px] bg-[#D8B36A]/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[450px] h-[450px] bg-[#D8B36A]/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <div className="relative z-10 space-y-12 sm:space-y-16">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-[#F5F2EA]/10 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
              <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                // ABOUT ECHOLANCE
              </span>
            </div>

            <span className="text-[11px] font-mono text-[#A7A39A] uppercase tracking-widest hidden sm:block">
              AN INDEPENDENT DIGITAL STUDIO
            </span>
          </div>

          {/* Digital Poster Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (7 Cols): Typographic Statement & Studio Narrative */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : textY }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F2EA] leading-[1.05] font-sans">
                  WE LIKE MAKING <br />
                  THE INTERNET <br />
                  <span className="font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_25px_rgba(216,179,106,0.3)]">
                    A MORE INTERESTING PLACE.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#A7A39A] font-sans leading-relaxed max-w-lg font-normal">
                <p>
                  Echolance is an independent digital studio driven by curiosity, typography, and a conviction that websites should feel like bespoke architectural spaces rather than disposable templates.
                </p>
                <p>
                  We partner with ambitious founders, cultural brands, and high-growth enterprises to craft digital flagships that command immediate authority, load with sub-second precision, and convert effortlessly.
                </p>
              </div>

              {/* Studio Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F5F2EA]/10">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold text-[#D8B36A] tracking-widest block">01 // BESPOKE</span>
                  <p className="text-xs text-[#A7A39A] font-sans leading-relaxed">Zero templates. Bespoke brand platforms.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold text-[#D8B36A] tracking-widest block">02 // INTENTIONAL</span>
                  <p className="text-xs text-[#A7A39A] font-sans leading-relaxed">Aesthetic elegance with sub-second execution.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-semibold text-[#D8B36A] tracking-widest block">03 // EVOLVING</span>
                  <p className="text-xs text-[#A7A39A] font-sans leading-relaxed">Modular architectures for long-term scale.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column (5 Cols): Typographic Circular Studio Compass */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
                {/* Rotating Typographic Compass Ring */}
                <motion.div
                  style={{ rotate: shouldReduceMotion ? 0 : rotateCompass }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg viewBox="0 0 300 300" className="w-full h-full animate-spin-very-slow">
                    <defs>
                      <path
                        id="aboutTextPathSm"
                        d="M 150, 150 m -105, 0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0"
                      />
                    </defs>
                    <text className="text-[10px] font-mono fill-[#D8B36A] uppercase tracking-[0.24em]">
                      <textPath href="#aboutTextPathSm" startOffset="0%">
                        • ECHOLANCE • DIGITAL STUDIO • EST. 2026 • BESPOKE CODE
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Inner Compass Center */}
                <div className="w-24 h-24 rounded-full border border-[#D8B36A]/30 bg-[#0B0B0B] flex flex-col items-center justify-center text-center p-2 shadow-xl">
                  <span className="text-lg font-serif italic text-[#D8B36A]">✦</span>
                  <span className="text-[9px] font-mono tracking-widest text-[#F5F2EA] uppercase mt-0.5">
                    CRAFT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
