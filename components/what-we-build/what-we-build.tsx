"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { CategoryPreview } from "./category-preview";
import { cn } from "@/utils/cn";

export interface BuildCategory {
  number: string;
  id: string;
  title: string;
  subtitle: string;
}

const CATEGORIES: BuildCategory[] = [
  {
    number: "01",
    id: "websites",
    title: "WEBSITES",
    subtitle: "Custom agency flagships, brand platforms, and modern web applications.",
  },
  {
    number: "02",
    id: "ecommerce",
    title: "E-COMMERCE",
    subtitle: "Headless storefronts engineered for fast browsing, instant cart, and checkout.",
  },
  {
    number: "03",
    id: "landing-pages",
    title: "LANDING PAGES",
    subtitle: "High-impact single-page experiences built to capture focus and drive action.",
  },
  {
    number: "04",
    id: "dashboards",
    title: "DASHBOARDS",
    subtitle: "Dark-mode analytics canvases, multi-pane workspaces, and live telemetry.",
  },
  {
    number: "05",
    id: "digital-products",
    title: "DIGITAL PRODUCTS",
    subtitle: "Interactive design systems, customer portals, and tailored software interfaces.",
  },
];

export function WhatWeBuild() {
  const [activeCategory, setActiveCategory] = useState<BuildCategory>(CATEGORIES[0]);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="what-we-build"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden"
    >
      {/* Background Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="gold"
        watermark="STUDIO"
        watermarkPosition="top-left"
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
            <SectionLabel number="04" label="WHAT WE BUILD" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            FROM AN IDEA <br />
            <span className="text-white">TO SOMETHING REAL.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="typography-body text-[rgba(255,255,255,0.65)] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Websites and digital products designed around the people, goals and
            ideas behind them.
          </motion.p>
        </div>

        {/* Main Content Grid: Large Editorial List + Live Sandbox Preview */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Category List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory.id === cat.id;

              return (
                <div key={cat.id} className="flex flex-col">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => setActiveCategory(cat)}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onFocus={() => setActiveCategory(cat)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveCategory(cat);
                      }
                    }}
                    className={cn(
                      "group w-full py-6 sm:py-9 text-left transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E5C07B]/50 rounded-lg px-2 sm:px-4",
                      isActive
                        ? "bg-white/[0.03] opacity-100"
                        : "opacity-45 hover:opacity-85 hover:bg-white/[0.01]"
                    )}
                  >
                    {/* Number & Oversized Category Title */}
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span
                        className={cn(
                          "text-xs sm:text-sm font-mono tracking-widest transition-colors duration-300",
                          isActive ? "text-[#E5C07B] font-bold" : "text-white/40"
                        )}
                      >
                        {cat.number}
                      </span>

                      <div className="space-y-1">
                        <h3
                          className={cn(
                            "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight transition-all duration-300",
                            isActive
                              ? "text-white translate-x-1"
                              : "text-white/80 group-hover:text-white"
                          )}
                        >
                          {cat.title}
                        </h3>
                        <p
                          className={cn(
                            "text-xs sm:text-sm text-white/50 transition-opacity duration-300 max-w-md",
                            isActive ? "opacity-100" : "opacity-0 sm:opacity-50"
                          )}
                        >
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0",
                        isActive
                          ? "border-[#E5C07B]/40 bg-[#E5C07B]/10 text-[#E5C07B] translate-x-1 -translate-y-0.5"
                          : "border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white"
                      )}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </button>

                  {/* Mobile Only: Inline Category Sandbox */}
                  {isActive && (
                    <div className="lg:hidden py-4 px-2">
                      <CategoryPreview categoryId={activeCategory.id} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Desktop): Sticky Visual Sandbox */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
            <CategoryPreview categoryId={activeCategory.id} />
          </div>
        </div>
      </Container>
    </section>
  );
}
