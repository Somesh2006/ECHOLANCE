"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/agency-data";
import { ServicePreview } from "./service-preview";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { cn } from "@/utils/cn";

export function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background Atmosphere Layer */}
      <SectionAtmosphere
        grid="fine"
        glow="gold"
        watermark="SERVICES"
        watermarkPosition="top-right"
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
            <SectionLabel number="02" label="WHAT WE DO / DIGITAL SERVICES" accent={true} />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            DIGITAL WORK, <br />
            <span className="text-white">BUILT DIFFERENT.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
            className="typography-body text-[rgba(255,255,255,0.65)] text-sm sm:text-base leading-relaxed max-w-xl"
          >
            From strategy and design to development and launch, we build
            digital experiences that are made to look distinctive, feel
            effortless and work properly.
          </motion.p>
        </div>

        {/* Main Interactive Grid: Editorial Roster + Live Sandbox */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Service Roster */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10 border-y border-white/10" role="tablist">
            {SERVICES_DATA.map((service) => {
              const isActive = activeService.id === service.id;

              return (
                <div key={service.id} className="flex flex-col">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-preview-${service.id}`}
                    tabIndex={0}
                    onClick={() => setActiveService(service)}
                    onMouseEnter={() => setActiveService(service)}
                    onFocus={() => setActiveService(service)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveService(service);
                      }
                    }}
                    className={cn(
                      "group w-full py-6 sm:py-8 text-left transition-all duration-400 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E5C07B]/50 rounded-xl px-3 sm:px-5",
                      isActive
                        ? "bg-white/[0.04] opacity-100 shadow-lg shadow-black/40"
                        : "opacity-40 hover:opacity-85 hover:bg-white/[0.01]"
                    )}
                  >
                    {/* Left: Number, Title & Category */}
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span
                        className={cn(
                          "text-xs sm:text-sm font-mono tracking-widest transition-colors duration-300",
                          isActive ? "text-[#E5C07B] font-bold" : "text-white/40"
                        )}
                      >
                        {service.number}
                      </span>

                      <div className="space-y-1">
                        <h3
                          className={cn(
                            "text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-300",
                            isActive
                              ? "text-white translate-x-1"
                              : "text-white/80 group-hover:text-white"
                          )}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={cn(
                            "text-xs sm:text-sm text-white/50 transition-opacity duration-300 max-w-md",
                            isActive ? "opacity-100" : "opacity-0 sm:opacity-50"
                          )}
                        >
                          {service.category}
                        </p>
                      </div>
                    </div>

                    {/* Right: Interactive Arrow Indicator */}
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "hidden sm:inline-block text-[11px] font-mono tracking-widest transition-all duration-300 uppercase",
                          isActive ? "text-[#E5C07B] opacity-100" : "opacity-0"
                        )}
                      >
                        ACTIVE
                      </span>
                      <div
                        className={cn(
                          "w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0",
                          isActive
                            ? "border-[#E5C07B]/40 bg-[#E5C07B]/10 text-[#E5C07B] translate-x-1 -translate-y-0.5"
                            : "border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white"
                        )}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </button>

                  {/* Mobile Only: Inline Sandbox Preview directly below active service row */}
                  {isActive && (
                    <div className="lg:hidden py-4 px-1" id={`service-preview-${service.id}`}>
                      <ServicePreview activeService={activeService} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Desktop): Sticky Live Visual Sandbox */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
            <ServicePreview activeService={activeService} />
          </div>
        </div>
      </Container>
    </section>
  );
}
