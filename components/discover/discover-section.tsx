"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { SERVICES_DATA, WORK_DATA, ServiceItem } from "@/data/agency-data";
import { ServicePreview } from "@/components/services/service-preview";
import { BrowserFrame } from "@/components/portfolio/browser-frame";
import {
  RestaurantMockup,
  FashionMockup,
  BusinessMockup,
} from "@/components/portfolio/project-mockups";
import { BuildStagePreview } from "@/components/build-experience/build-stage-preview";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

// 5 Process Stages
const PROCESS_STAGES = [
  { id: "idea", number: "01", title: "IDEA" },
  { id: "structure", number: "02", title: "STRUCTURE" },
  { id: "design", number: "03", title: "DESIGN" },
  { id: "build", number: "04", title: "BUILD" },
  { id: "live", number: "05", title: "LIVE" },
];

export function DiscoverSection() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  // Active States
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  const activeProject = WORK_DATA[activeProjectIndex] || WORK_DATA[0];
  const activeProcessStage = PROCESS_STAGES[activeProcessIndex];

  const getMockupComponent = (id: string) => {
    switch (id) {
      case "restaurant-website":
        return <RestaurantMockup />;
      case "fashion-ecommerce":
        return <FashionMockup />;
      case "business-website":
        return <BusinessMockup />;
      default:
        return <RestaurantMockup />;
    }
  };

  const getProjectUrl = (id: string) => {
    switch (id) {
      case "restaurant-website":
        return "letoile-atelier.com";
      case "fashion-ecommerce":
        return "atelier-noir.store";
      case "business-website":
        return "vance-advisory.com";
      default:
        return "echolance.studio/concept";
    }
  };

  return (
    <section
      id="discover"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="fine"
        glow="dual"
        watermark="DISCOVER"
        watermarkPosition="center"
      />

      <Container size="wide">
        {/* ==============================================
            01. SECTION INTRO (Editorial & Confident)
        ============================================== */}
        <div className="space-y-6 max-w-4xl pb-16 sm:pb-20 border-b border-white/10 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
          >
            <SectionLabel number="02" label="DISCOVER" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.02]"
          >
            DIGITAL WORK, <br />
            <span className="text-white">BUILT DIFFERENT.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.65)] leading-relaxed max-w-2xl font-normal"
          >
            We design and build modern digital experiences that look distinctive,
            feel effortless and give businesses a stronger digital presence.
          </motion.p>
        </div>

        {/* ==============================================
            02. EDITORIAL SERVICES ROSTER
        ============================================== */}
        <div className="py-16 sm:py-24 border-b border-white/10 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B] block mb-1">
                DISCIPLINES
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                WHAT WE BUILD
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40">
              EXPLORE CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Large Editorial Rows */}
            <div className="lg:col-span-6 flex flex-col divide-y divide-white/10 border-y border-white/10" role="tablist">
              {SERVICES_DATA.map((service) => {
                const isActive = activeService.id === service.id;

                return (
                  <div key={service.id} className="flex flex-col">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                      onClick={() => setActiveService(service)}
                      onMouseEnter={() => setActiveService(service)}
                      onFocus={() => setActiveService(service)}
                      className={cn(
                        "group w-full py-5 sm:py-6 text-left transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none rounded-xl px-3 sm:px-4",
                        isActive
                          ? "bg-white/[0.04] opacity-100"
                          : "opacity-45 hover:opacity-85 hover:bg-white/[0.01]"
                      )}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={cn(
                            "text-xs font-mono tracking-widest transition-colors duration-300",
                            isActive ? "text-[#E5C07B] font-bold" : "text-white/40"
                          )}
                        >
                          {service.number}
                        </span>

                        <div className="space-y-0.5">
                          <h4
                            className={cn(
                              "text-xl sm:text-2xl font-semibold tracking-tight transition-all duration-300",
                              isActive
                                ? "text-white font-bold translate-x-1"
                                : "text-white/80 group-hover:text-white"
                            )}
                          >
                            {service.title}
                          </h4>
                          <p
                            className={cn(
                              "text-xs text-white/50 transition-opacity duration-300",
                              isActive ? "opacity-100" : "opacity-0 sm:opacity-50"
                            )}
                          >
                            {service.category}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0",
                          isActive
                            ? "border-[#E5C07B]/40 bg-[#E5C07B]/10 text-[#E5C07B] -translate-y-0.5"
                            : "border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white"
                        )}
                      >
                        <ArrowUpRight size={15} />
                      </div>
                    </button>

                    {/* Mobile Only: Inline preview */}
                    {isActive && (
                      <div className="lg:hidden py-3 px-1">
                        <ServicePreview activeService={activeService} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Live Interactive Sandbox Preview */}
            <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-32">
              <ServicePreview activeService={activeService} />
            </div>
          </div>
        </div>

        {/* ==============================================
            03. SELECTED WORK (Dominant 3-Project Showcase)
        ============================================== */}
        <div className="py-16 sm:py-24 border-b border-white/10 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B] block mb-1">
                PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                SELECTED WORK
              </h3>
              <p className="text-xs sm:text-sm text-white/50 mt-1 font-normal">
                A few digital directions we&apos;ve explored.
              </p>
            </div>
            <span className="text-xs font-mono text-white/40">
              03 SELECTED CONCEPTS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT: Dominant Large Project Preview */}
            <div className="lg:col-span-8 w-full order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 0.98, y: 10 }
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.98, y: -10 }
                  }
                  transition={{ duration: 0.35, ease: transitionEase }}
                  className="w-full"
                >
                  <BrowserFrame
                    urlPath={getProjectUrl(activeProject.id)}
                    projectNumber={activeProject.number}
                  >
                    {getMockupComponent(activeProject.id)}
                  </BrowserFrame>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: Interactive Project Selector List */}
            <div className="lg:col-span-4 flex flex-col space-y-3 order-1 lg:order-2">
              {WORK_DATA.map((project, idx) => {
                const isActive = activeProjectIndex === idx;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveProjectIndex(idx)}
                    onMouseEnter={() => setActiveProjectIndex(idx)}
                    className={cn(
                      "group w-full p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer focus:outline-none",
                      isActive
                        ? "bg-[#0D0F16] border-[#E5C07B]/40 shadow-xl shadow-black/60 opacity-100"
                        : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-50 hover:opacity-90"
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={cn(
                          "text-xs font-mono tracking-widest font-bold",
                          isActive ? "text-[#E5C07B]" : "text-white/40"
                        )}
                      >
                        {project.number} // CONCEPT
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border transition-colors",
                          isActive
                            ? "border-[#E5C07B]/40 bg-[#E5C07B]/10 text-[#E5C07B]"
                            : "border-white/10 text-white/40"
                        )}
                      >
                        {isActive ? "VIEWING" : "SELECT"}
                      </span>
                    </div>

                    <h4
                      className={cn(
                        "text-lg sm:text-xl font-bold tracking-tight transition-colors",
                        isActive ? "text-white" : "text-white/80"
                      )}
                    >
                      {project.title}
                    </h4>

                    <p className="text-xs text-white/50 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==============================================
            04. FROM IDEA TO SOMETHING REAL
        ============================================== */}
        <div className="pt-16 sm:pt-24 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B] block mb-1">
                PROCESS STORY
              </span>
              <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                FROM IDEA TO SOMETHING REAL.
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40">
              IDEA → STRUCTURE → DESIGN → BUILD → LIVE
            </span>
          </div>

          {/* 5-Step Process Timeline Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-8">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeProcessIndex === idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveProcessIndex(idx)}
                  className={cn(
                    "p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer focus:outline-none",
                    isActive
                      ? "bg-[#0D0F16] border-[#E5C07B]/40 shadow-lg shadow-black/60 opacity-100"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-50 hover:opacity-90"
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={cn(
                        "text-[11px] font-mono tracking-wider",
                        isActive ? "text-[#E5C07B] font-bold" : "text-white/40"
                      )}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-colors",
                        isActive ? "bg-[#E5C07B] animate-pulse" : "bg-white/20"
                      )}
                    />
                  </div>

                  <span
                    className={cn(
                      "text-xs sm:text-sm font-bold tracking-tight uppercase",
                      isActive ? "text-white" : "text-white/75"
                    )}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Transforming Browser Preview */}
          <div className="w-full">
            <BrowserFrame
              urlPath={`echolance.studio/evolution/${activeProcessStage.id}`}
              projectNumber={activeProcessStage.number}
            >
              <BuildStagePreview stageId={activeProcessStage.id} />
            </BrowserFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
