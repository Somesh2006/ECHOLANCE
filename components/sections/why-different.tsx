"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { Code2, Zap, Sparkles, Globe, ShieldCheck } from "lucide-react";

interface Pillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    id: "custom-design",
    num: "01",
    title: "CUSTOM DESIGN",
    subtitle: "Zero generic templates or visual page builders.",
    description:
      "Every layout, typography scale, micro-interaction, and visual component is written from scratch specifically for your brand's unique positioning.",
    icon: <Code2 className="w-5 h-5 text-[#E5C07B]" />,
  },
  {
    id: "fast-performance",
    num: "02",
    title: "FAST PERFORMANCE",
    subtitle: "Performance-focused implementation.",
    description:
      "Speed is a core design requirement. We optimize bundles, assets, critical CSS paths, and edge rendering for sub-second page loads.",
    icon: <Zap className="w-5 h-5 text-[#E5C07B]" />,
  },
  {
    id: "responsive",
    num: "03",
    title: "RESPONSIVE EXPERIENCE",
    subtitle: "Fluid rendering across all viewport sizes.",
    description:
      "Dedicated mobile and desktop layouts crafted to maintain typography hierarchy, usable touch targets, and visual quality on 375px to 4K displays.",
    icon: <Sparkles className="w-5 h-5 text-[#E5C07B]" />,
  },
  {
    id: "modern-tech",
    num: "04",
    title: "MODERN TECHNOLOGY",
    subtitle: "Architected to scale effortlessly.",
    description:
      "Built with Next.js 15 App Router, React 19, TypeScript, and modern headless integrations engineered to handle high growth without tech debt.",
    icon: <Globe className="w-5 h-5 text-[#E5C07B]" />,
  },
  {
    id: "ongoing-support",
    num: "05",
    title: "ONGOING SUPPORT",
    subtitle: "Long-term engineering partnership.",
    description:
      "Launch is only phase one. We provide ongoing feature developments, security hardening, bi-weekly enhancements, and continuous optimization.",
    icon: <ShieldCheck className="w-5 h-5 text-[#E5C07B]" />,
  },
];

export function WhyDifferent() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="why-different"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden"
    >
      {/* Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="fine"
        glow="neutral"
        watermark="CRAFT"
        watermarkPosition="center"
      />
      <Container>
        {/* Section Header */}
        <div className="space-y-6 max-w-3xl pb-16 sm:pb-24 border-b border-white/10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="07" label="WHY ECHOLANCE" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            CRAFT OVER TEMPLATES. <br />
            <span className="text-white">ENGINEERED TO DISTINGUISH.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="typography-body text-[rgba(255,255,255,0.65)] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            We reject cookie-cutter agency workflows to build custom digital
            experiences engineered for lasting authority and speed.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: idx * 0.08,
                ease: transitionEase,
              }}
              className="p-8 rounded-3xl bg-[#0D0F16] border border-white/10 hover:border-[#E5C07B]/40 transition-all duration-300 space-y-4 text-left group"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold text-[#E5C07B]">
                  {pillar.num} // PILLAR
                </span>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#E5C07B] group-hover:text-black transition-colors">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {pillar.title}
              </h3>

              <p className="text-xs font-mono text-[#E5C07B]/90 font-medium">
                {pillar.subtitle}
              </p>

              <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed pt-1 font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
