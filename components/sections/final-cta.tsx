"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { ArrowUpRight, Sparkles, MoveRight } from "lucide-react";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  // Subtle cursor light follower within CTA section
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const headlineLines = [
    { text: "YOUR WEBSITE", delay: 0.15 },
    { text: "SHOULD FEEL", delay: 0.25 },
    { text: "DIFFERENT.", delay: 0.35, isAccent: true },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative w-full py-28 sm:py-36 lg:py-48 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* 01 — Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="dual"
        watermark="NEXT"
        watermarkPosition="center"
      />
      
      {/* Cursor Follower Light (Desktop Only) */}
      {!shouldReduceMotion && isHoveringSection && (
        <motion.div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block z-0"
          style={{
            left: mouseX,
            top: mouseY,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(229, 192, 123, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      )}

      <Container>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 sm:space-y-12 relative z-10">
          {/* Label Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C07B] animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              READY WHEN YOU ARE.
            </span>
          </motion.div>

          {/* Large Dominant Display Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tight text-white leading-[0.98] flex flex-col items-center">
            {headlineLines.map((line) => (
              <span key={line.text} className="overflow-hidden inline-block">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 50, filter: "blur(12px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.85,
                    delay: shouldReduceMotion ? 0 : line.delay,
                    ease: transitionEase,
                  }}
                  className={`inline-block ${
                    line.isAccent
                      ? "text-[#E5C07B] drop-shadow-[0_0_35px_rgba(229,192,123,0.3)]"
                      : "text-white"
                  }`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.45, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-2xl leading-relaxed font-normal"
          >
            Have an idea, a business or a website that needs a new direction?
            Let&apos;s build something worth remembering.
          </motion.p>

          {/* Tactile CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.55, ease: transitionEase }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <MagneticWrapper strength={0.3} className="w-full sm:w-auto">
              <a
                href="mailto:contact@echolance.studio?subject=New%20Project%20Inquiry"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98] shadow-2xl shadow-black/80 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>START A PROJECT</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">
                  →
                </span>
              </a>
            </MagneticWrapper>

            {/* Secondary CTA */}
            <MagneticWrapper strength={0.25} className="w-full sm:w-auto">
              <a
                href="#work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.12)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.14)] text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Micro Footer Spec */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-10 flex items-center gap-3 text-xs font-mono text-white/40 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5C07B]" />
            <span>EST. 2026 // BESPOKE DIGITAL STUDIO</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
