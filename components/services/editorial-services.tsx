"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const SERVICES_DATA = [
  {
    id: "design",
    number: "01",
    title: "WEB DESIGN",
    subtitle: "Identity & Editorial Art Direction",
    caption: "IDENTITY THAT INSPIRES",
    description:
      "Bespoke digital brand identities, responsive typographic systems, and editorial art direction crafted to make your business memorable.",
    deliverables: ["Art Direction", "Design Systems", "Kinetic Typography", "Micro-Interactions"],
    theme: "contour",
  },
  {
    id: "development",
    number: "02",
    title: "WEB DEVELOPMENT",
    subtitle: "Scalable Architecture & Custom Code",
    caption: "SCALABLE & MODERN",
    description:
      "Next.js 15 App Router architecture engineered with strict TypeScript, sub-second performance, and clean modular codebases.",
    deliverables: ["Next.js 15 / React", "TypeScript", "Edge Telemetry", "Clean Architecture"],
    theme: "matrix",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-COMMERCE",
    subtitle: "Headless Commerce & Instant Cart",
    caption: "SELL WITHOUT LIMITS",
    description:
      "High-conversion headless storefronts engineered with frictionless cart physics, custom checkouts, and global performance.",
    deliverables: ["Headless Storefronts", "Instant Cart Physics", "Global CDN", "Custom Checkouts"],
    theme: "modular",
  },
  {
    id: "landing",
    number: "04",
    title: "LANDING PAGES",
    subtitle: "High-Conversion Campaign Narratives",
    caption: "FOR BIGGER CAMPAIGNS",
    description:
      "High-impact single page narratives structured with strong kinetic hierarchy, persuasive pacing, and decisive conversion funnels.",
    deliverables: ["Campaign Pacing", "Visual Storytelling", "Conversion Funnels", "A/B Readiness"],
    theme: "radial",
  },
  {
    id: "uiux",
    number: "05",
    title: "UI / UX",
    subtitle: "Human-Centered Product Design",
    caption: "PEOPLE-CENTERED DESIGN",
    description:
      "Human-centered user experience blueprints, scalable design tokens, tactile interaction states, and multi-device ergonomics.",
    deliverables: ["User Research", "Wireframing", "Interaction Models", "Token Architecture"],
    theme: "interface",
  },
  {
    id: "maintenance",
    number: "06",
    title: "MAINTENANCE",
    subtitle: "Continuous Partnership & Optimization",
    caption: "BUILT TO LAST",
    description:
      "Continuous engineering partnership, security audits, framework upgrades, Core Web Vitals optimization, and 24/7 SLA.",
    deliverables: ["SLA Partnership", "Core Web Vitals", "Security Audits", "Framework Upgrades"],
    theme: "continuous",
  },
];

export function EditorialServices() {
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = SERVICES_DATA[activeIdx];

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080808] text-[#F5F2EA] select-none border-t border-[#F5F2EA]/10 overflow-hidden"
    >
      {/* Generative Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D8B36A]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <Container size="wide">
        <div className="relative z-10 space-y-12 sm:space-y-16">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-[#F5F2EA]/10 pb-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
                <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                  // OUR SERVICES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F2EA] font-sans uppercase leading-[1.05]">
                DIGITAL <br />
                SOLUTIONS <br />
                BUILT AROUND <br />
                <span className="font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_25px_rgba(216,179,106,0.3)]">
                  YOU.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-4 space-y-2.5">
              <p className="text-xs sm:text-sm text-[#A7A39A] font-sans leading-relaxed font-normal">
                An interactive typographic installation. Hover across our capabilities to witness how each discipline transforms the digital canvas.
              </p>
              <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#D8B36A] uppercase tracking-widest">
                <span>[ 06 DISCIPLINES ]</span>
                <span>•</span>
                <span>[ 100% BESPOKE ]</span>
              </div>
            </div>
          </div>

          {/* ==============================================================
              REFINED TYPOGRAPHIC INSTALLATION (TWO-COLUMN BALANCED STAGE)
          ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (7 Cols): Refined Typographic Service List */}
            <div className="lg:col-span-7 divide-y divide-[#F5F2EA]/10">
              {SERVICES_DATA.map((srv, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={srv.number}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "group cursor-pointer py-4 sm:py-5 transition-all duration-300 relative",
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
                    )}
                  >
                    {/* Active Left Indicator Line */}
                    <div
                      className={cn(
                        "absolute left-0 top-0 bottom-0 w-[2px] bg-[#D8B36A] shadow-[0_0_8px_#D8B36A] transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />

                    <div className="pl-4 sm:pl-5 space-y-2">
                      {/* Top Meta Line: Number + Subtitle */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-mono text-[#D8B36A] font-semibold tracking-widest">
                            [{srv.number}]
                          </span>
                          <span className="text-[11px] font-mono text-[#A7A39A] uppercase tracking-widest hidden sm:inline-block">
                            {srv.subtitle}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5F2EA] group-hover:text-[#D8B36A] transition-colors">
                          <span className="text-[10px] font-mono tracking-widest uppercase hidden md:inline-block">
                            {srv.caption}
                          </span>
                          <ArrowUpRight size={13} className={cn("transition-transform duration-300", isActive && "rotate-45 text-[#D8B36A]")} />
                        </div>
                      </div>

                      {/* Refined Service Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tight text-[#F5F2EA] uppercase leading-none group-hover:text-white transition-colors">
                        {srv.title}
                      </h3>

                      {/* Description & Deliverables */}
                      <div
                        className={cn(
                          "transition-all duration-400 overflow-hidden space-y-3 pt-1",
                          isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        )}
                      >
                        <p className="text-xs sm:text-sm text-[#A7A39A] font-sans max-w-lg leading-relaxed">
                          {srv.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {srv.deliverables.map((d) => (
                            <span
                              key={d}
                              className="px-2.5 py-0.5 rounded-full bg-[#D8B36A]/10 border border-[#D8B36A]/20 text-[10px] font-mono text-[#F0C978]"
                            >
                              • {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (5 Cols): Compact Generative Visual Artwork Stage */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-xl bg-[#0B0B0B] border border-[#F5F2EA]/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Subtle Texture */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#F5F2EA 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Top Telemetry Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#F5F2EA]/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] animate-pulse shadow-[0_0_6px_#D8B36A]" />
                    <span className="text-[10px] font-mono text-[#D8B36A] uppercase tracking-widest font-semibold">
                      ATELIER ENGINE // {activeService.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest">
                    {activeService.id.toUpperCase()}
                  </span>
                </div>

                {/* Center Dynamic Generative Artwork Canvas */}
                <div className="relative z-10 flex-1 flex items-center justify-center p-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, filter: "blur(3px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.04, filter: "blur(3px)" }}
                      transition={{ duration: 0.35, ease: transitionEase }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <ServiceGenerativeVisual type={activeService.theme} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Footer Info */}
                <div className="relative z-10 flex items-center justify-between border-t border-[#F5F2EA]/10 pt-3 text-[10px] font-mono uppercase tracking-widest text-[#A7A39A]">
                  <span>DISCIPLINE SPECIMEN</span>
                  <span className="text-[#F0C978]">{activeService.title}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

// Compact Hairline SVG Visual Artworks
function ServiceGenerativeVisual({ type }: { type: string }) {
  if (type === "contour") {
    return (
      <svg viewBox="0 0 240 240" className="w-44 h-44">
        <ellipse cx="120" cy="120" rx="100" ry="60" fill="none" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
        <ellipse cx="120" cy="120" rx="80" ry="48" fill="none" stroke="#D8B36A" strokeWidth="1" opacity="0.7" />
        <ellipse cx="120" cy="120" rx="60" ry="36" fill="none" stroke="#F0C978" strokeWidth="1.2" opacity="0.85" />
        <ellipse cx="120" cy="120" rx="40" ry="24" fill="none" stroke="#D8B36A" strokeWidth="1.4" opacity="0.9" />
        <circle cx="120" cy="120" r="3" fill="#F0C978" />
        <path d="M40 120 C70 90, 170 150, 200 120" stroke="#D8B36A" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    );
  }

  if (type === "matrix") {
    return (
      <svg viewBox="0 0 240 240" className="w-44 h-44">
        <defs>
          <pattern id="matrixGridSm" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(216,179,106,0.12)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="240" height="240" fill="url(#matrixGridSm)" />
        <polyline points="36,144 84,96 132,120 180,72 204,108" fill="none" stroke="#F0C978" strokeWidth="1.5" />
        <circle cx="36" cy="144" r="3" fill="#D8B36A" />
        <circle cx="84" cy="96" r="3" fill="#F0C978" />
        <circle cx="132" cy="120" r="3" fill="#D8B36A" />
        <circle cx="180" cy="72" r="4" fill="#F0C978" />
        <circle cx="204" cy="108" r="3" fill="#D8B36A" />
        <text x="40" y="195" fill="#A7A39A" fontSize="8" fontFamily="monospace" letterSpacing="1.5">
          TS / NEXT.JS // 0.12ms
        </text>
      </svg>
    );
  }

  if (type === "modular") {
    return (
      <svg viewBox="0 0 240 240" className="w-44 h-44">
        <path d="M120 56 L168 84 L120 112 L72 84 Z" fill="#D8B36A" fillOpacity="0.25" stroke="#D8B36A" strokeWidth="1.2" />
        <path d="M72 84 L120 112 L120 160 L72 132 Z" fill="#D8B36A" fillOpacity="0.12" stroke="#D8B36A" strokeWidth="1.2" />
        <path d="M168 84 L120 112 L120 160 L168 132 Z" fill="#D8B36A" fillOpacity="0.18" stroke="#D8B36A" strokeWidth="1.2" />
        <ellipse cx="120" cy="112" rx="80" ry="32" fill="none" stroke="#F0C978" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="200" cy="112" r="2.5" fill="#F0C978" />
      </svg>
    );
  }

  if (type === "radial") {
    return (
      <svg viewBox="0 0 240 240" className="w-44 h-44">
        <circle cx="120" cy="120" r="88" fill="none" stroke="rgba(216,179,106,0.15)" strokeWidth="0.8" />
        <circle cx="120" cy="120" r="64" fill="none" stroke="rgba(216,179,106,0.25)" strokeWidth="1" />
        <circle cx="120" cy="120" r="40" fill="none" stroke="#D8B36A" strokeWidth="1.2" />
        <circle cx="120" cy="120" r="16" fill="#F0C978" fillOpacity="0.25" stroke="#F0C978" strokeWidth="1.5" />
        <line x1="120" y1="16" x2="120" y2="224" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
        <line x1="16" y1="120" x2="224" y2="120" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
        <circle cx="120" cy="120" r="2.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (type === "interface") {
    return (
      <svg viewBox="0 0 240 240" className="w-44 h-44">
        <rect x="40" y="40" width="160" height="160" fill="none" stroke="rgba(216,179,106,0.18)" strokeWidth="0.8" />
        <rect x="64" y="64" width="112" height="112" fill="none" stroke="rgba(240,201,120,0.4)" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="40" cy="40" r="2.5" fill="#D8B36A" />
        <circle cx="200" cy="40" r="2.5" fill="#D8B36A" />
        <circle cx="40" cy="200" r="2.5" fill="#D8B36A" />
        <circle cx="200" cy="200" r="2.5" fill="#D8B36A" />
        <path d="M64 176 A 112 112 0 0 1 176 64" fill="none" stroke="#F0C978" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 240" className="w-44 h-44">
      <path
        d="M16 120 Q 68 64, 120 120 T 224 120"
        fill="none"
        stroke="#D8B36A"
        strokeWidth="2"
      />
      <path
        d="M16 120 Q 68 176, 120 120 T 224 120"
        fill="none"
        stroke="rgba(240,201,120,0.3)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="120" cy="120" r="4.5" fill="#F0C978" />
      <text x="76" y="195" fill="#A7A39A" fontSize="8" fontFamily="monospace" letterSpacing="1.5">
        24/7 SLA // 99.99% UP
      </text>
    </svg>
  );
}
