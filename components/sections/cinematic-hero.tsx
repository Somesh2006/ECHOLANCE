"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { CursorGlow } from "@/components/hero/cursor-glow";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { HeroLightArc } from "@/components/ui/atmosphere-layers";

export function CinematicHero() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="home"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-[#080808] flex flex-col justify-between select-none"
    >
      {/* 01 — BACKGROUND VIDEO LAYER (z-0) — 100% PRESERVED */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_202655_a7f5aca0-2f80-4bc9-bcb5-96ac95662003.mp4"
        />

        {/* Cinematic dark gallery grading overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#080808]/80 pointer-events-none" />
      </div>

      {/* 02 — GOLD LIGHT ARC LAYER (z-5) */}
      <HeroLightArc />

      {/* 03 — DESKTOP CURSOR INTERACTION GLOW */}
      <CursorGlow />

      {/* 04 — NAVBAR (z-30) */}
      <Navbar />

      {/* 05 — TOP RIGHT VERTICAL METRICS */}
      <div className="absolute top-28 right-8 sm:right-12 lg:right-16 z-20 hidden md:flex flex-col items-end text-right space-y-1 text-[11px] font-mono tracking-[0.25em] text-[#A7A39A] uppercase pointer-events-none">
        <span className="text-[#F5F2EA]/80 font-semibold">• IDEAS</span>
        <span>• DESIGN</span>
        <span>• BUILD</span>
        <span className="text-[#D8B36A] font-semibold">• GROW</span>
      </div>

      {/* 06 — BOTTOM-ANCHORED HERO CONTENT (z-10) */}
      <div className="relative z-10 w-full mt-auto px-6 pb-10 sm:px-10 sm:pb-12 lg:px-16 lg:pb-14 flex flex-col justify-end">
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          {/* Left Column: Micro Label & Main Headline */}
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            {/* Micro Label */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: transitionEase,
              }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#F5F2EA]/[0.05] border border-[#F5F2EA]/10 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5F2EA]/80">
                ECHOLANCE // DIGITAL STUDIO
              </span>
            </motion.div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight text-[#F5F2EA] flex flex-col font-sans">
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.3, ease: transitionEase }}
                  className="inline-block"
                >
                  WE BUILD
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.42, ease: transitionEase }}
                  className="inline-block"
                >
                  DIGITAL
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.54, ease: transitionEase }}
                  className="inline-block font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_35px_rgba(216,179,106,0.3)] tracking-normal"
                >
                  EXPERIENCES
                </motion.span>
              </span>
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.66, ease: transitionEase }}
                  className="inline-block"
                >
                  THAT MOVE.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Right Column: Description Copy & Tactile CTAs */}
          <div className="flex flex-col space-y-6 lg:max-w-md xl:max-w-lg lg:pb-3">
            <motion.p
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: shouldReduceMotion ? 0 : 0.85,
                ease: transitionEase,
              }}
              className="text-sm sm:text-base md:text-lg text-[#A7A39A] max-w-xl leading-relaxed font-sans font-normal"
            >
              We design and build modern websites that help businesses look
              better, work better and grow.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Primary CTA */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: shouldReduceMotion ? 0 : 1.0,
                  ease: transitionEase,
                }}
              >
                <MagneticWrapper strength={0.25}>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F2EA] text-[#080808] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-[#F0C978] hover:shadow-[0_0_24px_rgba(240,201,120,0.4)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D8B36A]"
                  >
                    <span>START A PROJECT</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                      →
                    </span>
                  </a>
                </MagneticWrapper>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: shouldReduceMotion ? 0 : 1.1,
                  ease: transitionEase,
                }}
              >
                <MagneticWrapper strength={0.25}>
                  <a
                    href="#work"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F2EA]/[0.06] hover:bg-[#F5F2EA]/[0.12] backdrop-blur-[16px] border border-[#F5F2EA]/15 text-[#F5F2EA] font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:border-[#D8B36A]/40 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D8B36A]/40"
                  >
                    <span>EXPLORE OUR WORK</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block text-[#D8B36A]">
                      →
                    </span>
                  </a>
                </MagneticWrapper>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 07 — MINIMAL SCROLL INDICATOR & RIGHT COORDINATES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="w-full pt-8 sm:pt-10 flex items-end justify-between text-[11px] font-mono tracking-widest text-[#A7A39A] uppercase"
        >
          {/* Bottom Left Scroll Indicator */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full border border-[#F5F2EA]/20 flex items-center justify-center text-[10px] text-[#F5F2EA]">
              N
            </span>
            <span className="text-[#F5F2EA]/70">SCROLL TO EXPLORE</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-[#D8B36A]"
            >
              ↓
            </motion.span>
          </div>

          {/* Bottom Right Coordinates */}
          <div className="hidden sm:flex items-center gap-4 text-right text-[11px] tracking-[0.22em] text-[#A7A39A] font-mono">
            <span className="text-[#F5F2EA] font-semibold">EST. 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#D8B36A]" />
            <span>BESPOKE CODE</span>
            <span className="w-1 h-1 rounded-full bg-[#D8B36A]" />
            <span>REAL IMPACT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

