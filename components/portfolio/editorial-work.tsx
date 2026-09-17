"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ArrowUpRight } from "lucide-react";

const EXHIBITS = [
  {
    number: "01",
    tag: "01 // FLOWING CURVES",
    category: "HOSPITALITY & GASTRONOMY",
    title: "L'ÉTOILE ATELIER",
    subtitle: "Sensory Dining & Seasonal Omakase Flagship",
    description:
      "An atmospheric digital experience with fluid kinetic typography, seasonal tasting menus, and bespoke reservation mechanics.",
    tags: ["Fine Dining", "Custom Reservation", "Kinetic Motion"],
    atmosphere: "warm-champagne",
    metrics: "4.9★ RATING // 98/100 SPEED",
  },
  {
    number: "02",
    tag: "02 // PARAMETRIC SILHOUETTE",
    category: "HAUTE COUTURE",
    title: "ATELIER NOIR",
    subtitle: "Monochrome Runway Flagship & Headless Storefront",
    description:
      "A high-contrast digital flagship centered on architectural layout grids, rapid catalog navigation, and headless cart physics.",
    tags: ["Headless Cart", "Parametric Grid", "Next.js 15"],
    atmosphere: "monochrome-light",
    metrics: "0.28s CHECKOUT // ZERO LATENCY",
  },
  {
    number: "03",
    tag: "03 // ARCHITECTURAL DRAFTING",
    category: "STRATEGIC ADVISORY",
    title: "VANCE & CO.",
    subtitle: "Sovereign Market Governance & Capital Allocation",
    description:
      "A structured corporate advisory platform communicating institutional authority, deal archives, and strategic market insights.",
    tags: ["Private Equity", "Deal Matrix", "TypeScript"],
    atmosphere: "drafting-lines",
    metrics: "$2.4B DEALS ARCHIVED // SECURE",
  },
  {
    number: "04",
    tag: "04 // TELEMETRY INTERFACE",
    category: "CLOUD INFRASTRUCTURE",
    title: "KROMA SYSTEMS",
    subtitle: "Modular Cloud Infrastructure & Scalable Token Architecture",
    description:
      "A high-performance enterprise interface engineered with sub-second data streaming and unified design token libraries.",
    tags: ["Design System", "Edge Telemetry", "Modular Tokens"],
    atmosphere: "telemetry-matrix",
    metrics: "100k+ OPS/SEC // 99.999% SLA",
  },
];

export function EditorialWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#080808] text-[#F5F2EA] select-none border-t border-[#F5F2EA]/10 overflow-hidden"
    >
      {/* Generative Ambient Gold Glow */}
      <div className="absolute top-1/4 right-1/10 w-[500px] h-[500px] bg-[#D8B36A]/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[450px] h-[450px] bg-[#D8B36A]/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <Container size="wide">
        {/* Exhibition Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-14 border-b border-[#F5F2EA]/10">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
              <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                // SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F2EA] font-sans uppercase leading-[1.05]">
              CRAFTED FOR{" "}
              <span className="font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_25px_rgba(216,179,106,0.3)]">
                IMPACT.
              </span>
            </h2>
          </div>

          <div className="space-y-1.5 max-w-xs">
            <p className="text-xs text-[#A7A39A] font-sans leading-relaxed font-normal">
              Each project is an individual digital atmosphere engineered with distinctive motion physics and edge speed.
            </p>
            <span className="text-[10px] font-mono text-[#D8B36A] uppercase tracking-widest block">
              [ 04 EXHIBITIONS ]
            </span>
          </div>
        </div>

        {/* 4 Distinct Exhibition Experiences */}
        <div className="space-y-10 sm:space-y-14 pt-10 sm:pt-14">
          {EXHIBITS.map((exhibit, idx) => (
            <ExhibitCard
              key={exhibit.number}
              exhibit={exhibit}
              index={idx}
              shouldReduceMotion={shouldReduceMotion}
              transitionEase={transitionEase}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ExhibitCard({
  exhibit,
  index,
  shouldReduceMotion,
  transitionEase,
}: {
  exhibit: (typeof EXHIBITS)[0];
  index: number;
  shouldReduceMotion: boolean | null;
  transitionEase: number[];
}) {
  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.06, ease: transitionEase }}
      className="group cursor-pointer relative p-6 sm:p-8 lg:p-10 rounded-xl bg-[#0B0B0B] border border-[#F5F2EA]/10 hover:border-[#D8B36A]/40 transition-all duration-400 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(216,179,106,0.06)]"
    >
      {/* Delicate Gold Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8B36A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Atmospheric Background Specimen */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none overflow-hidden flex items-center justify-end pr-6">
        <ProjectBackdropVisual atmosphere={exhibit.atmosphere} />
      </div>

      <div className="relative z-10 space-y-6 max-w-2xl">
        {/* Top Meta Line */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#F5F2EA]/[0.04] border border-[#F5F2EA]/10 text-[10px] font-mono text-[#D8B36A] tracking-widest uppercase">
              {exhibit.tag}
            </span>
            <span className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest hidden sm:inline-block">
              {exhibit.category}
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#D8B36A] uppercase tracking-widest">
            {exhibit.metrics}
          </span>
        </div>

        {/* Refined Title, Subtitle, Description */}
        <div className="space-y-2.5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F2EA] tracking-tight font-sans uppercase leading-none group-hover:text-white transition-colors">
            {exhibit.title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-[#D8B36A] font-serif italic font-normal leading-snug">
            {exhibit.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#A7A39A] font-sans max-w-lg leading-relaxed font-normal">
            {exhibit.description}
          </p>
        </div>

        {/* Bottom Tags & Explore Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F5F2EA]/10">
          <div className="flex flex-wrap gap-1.5">
            {exhibit.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full bg-[#F5F2EA]/[0.03] border border-[#F5F2EA]/10 text-[10px] font-mono text-[#A7A39A] group-hover:border-[#D8B36A]/30 group-hover:text-[#F5F2EA] transition-colors"
              >
                • {t}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F5F2EA] group-hover:text-[#D8B36A] group-hover:translate-x-1 transition-all">
            <span>EXPLORE EXHIBIT</span>
            <ArrowUpRight size={13} className="text-[#D8B36A]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// Compact SVG Artworks per Exhibition
function ProjectBackdropVisual({ atmosphere }: { atmosphere: string }) {
  if (atmosphere === "warm-champagne") {
    return (
      <svg viewBox="0 0 300 300" className="w-64 h-64">
        <circle cx="150" cy="150" r="120" fill="none" stroke="#D8B36A" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="150" cy="150" r="80" fill="none" stroke="#F0C978" strokeWidth="1.2" />
        <path d="M40 150 Q 150 60, 260 150 T 150 240" fill="none" stroke="#D8B36A" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="5" fill="#F0C978" />
      </svg>
    );
  }

  if (atmosphere === "monochrome-light") {
    return (
      <svg viewBox="0 0 300 300" className="w-64 h-64">
        <line x1="40" y1="40" x2="260" y2="260" stroke="#F5F2EA" strokeWidth="0.8" />
        <line x1="260" y1="40" x2="40" y2="260" stroke="#F5F2EA" strokeWidth="0.8" />
        <rect x="75" y="75" width="150" height="150" fill="none" stroke="#D8B36A" strokeWidth="1.2" />
        <circle cx="150" cy="150" r="40" fill="none" stroke="#F0C978" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    );
  }

  if (atmosphere === "drafting-lines") {
    return (
      <svg viewBox="0 0 300 300" className="w-64 h-64">
        <rect x="30" y="30" width="240" height="240" fill="none" stroke="#D8B36A" strokeWidth="0.8" />
        <line x1="30" y1="90" x2="270" y2="90" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="30" y1="150" x2="270" y2="150" stroke="#D8B36A" strokeWidth="1" />
        <line x1="30" y1="210" x2="270" y2="210" stroke="#D8B36A" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="150" cy="150" r="50" fill="none" stroke="#F0C978" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 300 300" className="w-64 h-64">
      <circle cx="150" cy="150" r="110" fill="none" stroke="#D8B36A" strokeWidth="0.8" />
      <polygon points="150,60 225,200 75,200" fill="none" stroke="#F0C978" strokeWidth="1.2" />
      <circle cx="150" cy="60" r="3" fill="#D8B36A" />
      <circle cx="225" cy="200" r="3" fill="#D8B36A" />
      <circle cx="75" cy="200" r="3" fill="#D8B36A" />
    </svg>
  );
}
