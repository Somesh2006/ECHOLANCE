"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { WORK_DATA } from "@/data/agency-data";
import { BrowserFrame } from "./browser-frame";
import {
  RestaurantMockup,
  FashionMockup,
  BusinessMockup,
  SaasMockup,
} from "./project-mockups";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { cn } from "@/utils/cn";

export function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  const getMockupComponent = (id: string) => {
    switch (id) {
      case "restaurant-website":
        return <RestaurantMockup />;
      case "fashion-ecommerce":
        return <FashionMockup />;
      case "business-website":
        return <BusinessMockup />;
      case "saas-dashboard":
        return <SaasMockup />;
      default:
        return <RestaurantMockup />;
    }
  };

  const getUrlPath = (id: string) => {
    switch (id) {
      case "restaurant-website":
        return "letoile-atelier.com";
      case "fashion-ecommerce":
        return "atelier-noir.store";
      case "business-website":
        return "vance-capital.com";
      case "saas-dashboard":
        return "app.synapse-ai.io";
      default:
        return "echolance.studio/concept";
    }
  };

  return (
    <section
      id="work"
      className="relative w-full py-28 sm:py-36 lg:py-48 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Visual Atmosphere Layer: Fine Grid + Giant "WORK" Watermark */}
      <SectionAtmosphere
        grid="fine"
        glow="dual"
        watermark="WORK"
        watermarkPosition="center"
      />

      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-16 sm:pb-24 border-b border-white/10 relative z-10">
          <div className="space-y-6 max-w-3xl">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: transitionEase }}
            >
              <SectionLabel number="03" label="SELECTED WORK" accent={true} />
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: transitionEase }}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.02]"
            >
              BUILT TO BE <br />
              <span className="text-white">REMEMBERED.</span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: transitionEase }}
              className="typography-body text-[rgba(255,255,255,0.65)] text-base sm:text-lg leading-relaxed max-w-xl"
            >
              A selection of digital experiences designed and developed with
              purpose.
            </motion.p>
          </div>

          {/* Project Index Indicator */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-white/40"
          >
            <span className="text-[#E5C07B] font-bold">04 SELECTED CONCEPTS</span>
            <span>//</span>
            <span>2025–2026</span>
          </motion.div>
        </div>

        {/* Large Project Showcase (Generous spacing between scenes) */}
        <div className="divide-y divide-white/10 relative z-10">
          {WORK_DATA.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: transitionEase,
              }}
              className="py-20 sm:py-28 lg:py-36 flex flex-col gap-10 lg:gap-14"
            >
              {/* Project Metadata Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-base sm:text-lg font-mono font-bold text-[#E5C07B]">
                    {project.number}
                  </span>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/75">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
                    2026 // ECHOLANCE CONCEPT
                  </span>
                </div>
              </div>

              {/* Large Browser Preview (70–90% content width focus) */}
              <div className="w-full">
                <BrowserFrame
                  urlPath={getUrlPath(project.id)}
                  projectNumber={project.number}
                >
                  {getMockupComponent(project.id)}
                </BrowserFrame>
              </div>

              {/* Project Description & Technical Stack Tags */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <p className="md:col-span-8 text-sm sm:text-base text-[rgba(255,255,255,0.65)] leading-relaxed max-w-2xl font-normal">
                  {project.description}
                </p>

                <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
