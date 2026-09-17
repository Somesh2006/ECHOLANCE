"use client";

import React from "react";
import { GrainOverlay } from "@/components/ui/atmosphere-layers";
import { AmbientBackground } from "@/components/canvas/ambient-background";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CinematicHero } from "@/components/sections/cinematic-hero";
import { ManifestoSection } from "@/components/manifesto/manifesto-section";
import { EditorialWork } from "@/components/portfolio/editorial-work";
import { EditorialServices } from "@/components/services/editorial-services";
import { EditorialProcess } from "@/components/process/editorial-process";
import { EditorialAbout } from "@/components/about/editorial-about";
import { EditorialReachUs } from "@/components/reach-us/editorial-reach-us";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#080808] text-[#F5F2EA] overflow-x-hidden font-sans">
      {/* 00 — Bespoke Desktop Custom Cursor with Champagne Aura */}
      <CustomCursor />

      {/* Global Grain / Film Texture Overlay */}
      <GrainOverlay />

      {/* Global Gold Dust & Interactive Glitter Canvas */}
      <AmbientBackground />

      {/* 01 — HOME: Approved Cinematic Hero (100% Video Preserved) */}
      <CinematicHero />

      {/* 02 — WHAT WE DO: Kinetic Typography & Orbital Arc */}
      <ManifestoSection />

      {/* 03 — SELECTED WORK: Luxury Gold Edge Exhibits & Atmosphere Backdrops */}
      <EditorialWork />

      {/* 04 — SERVICES: Interactive Typographic Installation & Live Generative Stage */}
      <EditorialServices />

      {/* 05 — PROCESS: Continuous Flowing Gold Path & Dynamic Stage Transformation */}
      <EditorialProcess />

      {/* 06 — ABOUT: Dark Editorial Poster & Typographic Rotating Compass */}
      <EditorialAbout />

      {/* 07 — REACH US: Dramatic Final Climax CTA, Dispatch Terminal & Studio Footer */}
      <EditorialReachUs />
    </main>
  );
}
