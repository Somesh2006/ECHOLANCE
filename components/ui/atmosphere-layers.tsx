"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

// 01 — Subtle Noise / Film Grain Overlay (Global fixed texture)
export function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none select-none opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}

// 02 — Atmospheric Darkness Gradient with Faint Gold Radial Illumination
export function DarkAtmosphere({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-0 overflow-hidden select-none",
        className
      )}
      aria-hidden="true"
    >
      {/* Base radial gold haze */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#D8B36A]/[0.025] rounded-full blur-[160px]" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#D8B36A]/[0.018] rounded-full blur-[180px]" />
    </div>
  );
}

// 03 — Architectural Grid with Edge Vignette Mask
interface ArchitecturalGridProps {
  variant?: "architectural" | "fine" | "coarse" | "drafting";
  opacity?: number;
  className?: string;
}

export function ArchitecturalGrid({
  variant = "architectural",
  opacity = 0.2,
  className,
}: ArchitecturalGridProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-0 overflow-hidden select-none drafting-grid-dark",
        className
      )}
      style={{
        opacity,
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 95%)",
      }}
      aria-hidden="true"
    />
  );
}

// 04 — Organic Topographical Contour Mesh
export function OrganicContourMesh({
  color = "rgba(216, 179, 106, 0.04)",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-30",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C300 100, 600 400, 1100 250 C1300 200, 1500 350, 1600 300"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path
          d="M-100 400 C400 300, 700 600, 1200 450 C1400 400, 1600 500, 1700 450"
          stroke={color}
          strokeWidth="1"
        />
        <path
          d="M-100 600 C500 500, 800 800, 1300 650 C1500 600, 1700 700, 1800 650"
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  );
}

// 05 — Backwards compatibility wrappers
export function FloatingAtmosphereParticles() {
  return null;
}

export function EditorialGrid() {
  return <ArchitecturalGrid />;
}

export function SectionTransitionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5F2EA]/10 to-transparent", className)} />
  );
}

export function SectionWatermark({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <span className="text-[12vw] font-bold text-[#F5F2EA]/[0.015] tracking-tighter uppercase whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

// 06 — Section Transition Wave Bridge
export function SectionTransitionBridge({
  direction = "down",
  theme = "dark-to-cream",
}: {
  direction?: "down" | "up";
  theme?: "dark-to-cream" | "cream-to-dark" | "dark-to-dark";
}) {
  const gradientStyles = {
    "dark-to-cream": "bg-gradient-to-b from-[#090A0D] via-[#090A0D]/60 to-transparent",
    "cream-to-dark": "bg-gradient-to-b from-[#F4F1EA] via-[#F4F1EA]/60 to-transparent",
    "dark-to-dark": "bg-gradient-to-b from-[#0B0D12] via-[#0B0D12]/60 to-transparent",
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 h-24 sm:h-36 pointer-events-none z-20 overflow-hidden",
        direction === "down" ? "top-0" : "bottom-0",
        gradientStyles[theme]
      )}
      aria-hidden="true"
    />
  );
}

// 07 — Hero Sweeping Light Trail
export function HeroLightArc({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden z-0 select-none", className)}>
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B36A" stopOpacity="0" />
            <stop offset="35%" stopColor="#D8B36A" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#F0C978" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#D8B36A" stopOpacity="0" />
          </linearGradient>
          <filter id="heroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M-100 850 C300 700, 800 450, 1400 120"
          stroke="url(#heroGoldGrad)"
          strokeWidth="3"
          filter="url(#heroGoldGlow)"
          opacity="0.6"
        />

        <motion.path
          d="M-100 850 C300 700, 800 450, 1400 120"
          stroke="url(#heroGoldGrad)"
          strokeWidth="1.2"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0.2, pathOffset: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  pathOffset: [0, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <path
          d="M-50 890 C350 740, 850 490, 1450 160"
          stroke="rgba(216, 179, 106, 0.15)"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
      </svg>
    </div>
  );
}

// 08 — Manifesto / What We Do Sweeping Orbital Ellipse
export function ManifestoOrbitalArc({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden z-0 select-none", className)}>
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="manifestoArcGrad" x1="0%" y1="80%" x2="100%" y2="20%">
            <stop offset="0%" stopColor="#D8B36A" stopOpacity="0.05" />
            <stop offset="45%" stopColor="#D8B36A" stopOpacity="0.6" />
            <stop offset="65%" stopColor="#F0C978" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D8B36A" stopOpacity="0.05" />
          </linearGradient>
          <filter id="manifestoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M-200 480 C250 420, 650 250, 1050 220 C1300 200, 1450 350, 1380 500 C1300 660, 950 700, 600 680 C200 660, -100 800, -200 850"
          stroke="url(#manifestoArcGrad)"
          strokeWidth="2.5"
          filter="url(#manifestoGlow)"
          opacity="0.5"
        />

        <motion.path
          d="M-200 480 C250 420, 650 250, 1050 220 C1300 200, 1450 350, 1380 500 C1300 660, 950 700, 600 680 C200 660, -100 800, -200 850"
          stroke="url(#manifestoArcGrad)"
          strokeWidth="1.2"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0.3, pathOffset: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  pathOffset: [0, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <circle
          cx="1080"
          cy="380"
          r="160"
          stroke="rgba(216, 179, 106, 0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="1080"
          cy="380"
          r="260"
          stroke="rgba(216, 179, 106, 0.06)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

// 09 — Process Continuous Glowing Wave Path
export function ProcessFlowingTrack({ activeStage = 0 }: { activeStage?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      <svg
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="processTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B36A" stopOpacity="0.2" />
            <stop offset="33%" stopColor="#F0C978" stopOpacity="0.8" />
            <stop offset="66%" stopColor="#D8B36A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F0C978" stopOpacity="0.3" />
          </linearGradient>
          <filter id="processGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M 60 150 C 200 90, 380 90, 480 150 C 580 210, 760 210, 880 150 C 980 90, 1100 110, 1140 150"
          stroke="url(#processTrackGrad)"
          strokeWidth="3.5"
          filter="url(#processGlow)"
          opacity="0.4"
        />

        <path
          d="M 60 150 C 200 90, 380 90, 480 150 C 580 210, 760 210, 880 150 C 980 90, 1100 110, 1140 150"
          stroke="url(#processTrackGrad)"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {!shouldReduceMotion && (
          <motion.path
            d="M 60 150 C 200 90, 380 90, 480 150 C 580 210, 760 210, 880 150 C 980 90, 1100 110, 1140 150"
            stroke="#F0C978"
            strokeWidth="3"
            strokeDasharray="40 300"
            initial={{ strokeDashoffset: 340 }}
            animate={{ strokeDashoffset: -340 }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </svg>
    </div>
  );
}

// 10 — Final CTA Monumental Sweeping Arc
export function CtaSweepingArc({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden z-0 select-none", className)}>
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ctaGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B36A" stopOpacity="0.05" />
            <stop offset="40%" stopColor="#D8B36A" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#F0C978" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D8B36A" stopOpacity="0.1" />
          </linearGradient>
          <filter id="ctaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M-100 680 C400 650, 750 480, 1100 220 C1250 110, 1380 40, 1500 0"
          stroke="url(#ctaGoldGrad)"
          strokeWidth="3.5"
          filter="url(#ctaGlow)"
          opacity="0.65"
        />

        <motion.path
          d="M-100 680 C400 650, 750 480, 1100 220 C1250 110, 1380 40, 1500 0"
          stroke="url(#ctaGoldGrad)"
          strokeWidth="1.5"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0.35, pathOffset: 0 }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  pathOffset: [0, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
}

// 11 — Backwards compatibility SectionAtmosphere wrapper
export interface SectionAtmosphereProps {
  grid?: "architectural" | "fine" | "coarse" | "drafting" | "none";
  glow?: "gold" | "neutral" | "dual" | "cool" | "climax" | "none";
  watermark?: string;
  watermarkPosition?: "top-left" | "top-right" | "center" | "bottom-right" | "bottom-left" | string;
  formVariant?: "arc-right" | "arc-left" | "dual-lines" | "concentric" | "none" | string;
  bgGradient?: "manifesto" | "work" | "services" | "process" | "about" | "reach-us" | "default" | string;
  contour?: boolean;
  className?: string;
}

export function SectionAtmosphere(props: SectionAtmosphereProps) {
  return <DarkAtmosphere className={props.className} />;
}

export function EditorialColorWash() {
  return null;
}



