"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";
import { Lock, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface BrowserFrameProps {
  children: React.ReactNode;
  urlPath?: string;
  projectNumber?: string;
  className?: string;
}

export function BrowserFrame({
  children,
  urlPath = "echolance.concept",
  projectNumber = "01",
  className,
}: BrowserFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle pointer parallax response (X: ±6px, Y: ±4px)
  const mouseX = useSpring(0, { stiffness: 90, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 90, damping: 20 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // ±6px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;  // ±4px
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative w-full rounded-2xl sm:rounded-3xl bg-[#0B0D14] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500",
        "hover:border-white/25 hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,1)]",
        className
      )}
    >
      {/* Browser Chrome Header Bar */}
      <div className="relative z-20 px-4 py-3 sm:px-6 sm:py-4 bg-[#0D0F18] border-b border-white/10 flex items-center justify-between select-none">
        {/* Left: Window Traffic Controls */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-rose-500/70 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-amber-500/70 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-emerald-500/70 transition-colors" />
          <span className="ml-3 text-[11px] font-mono tracking-widest text-white/40 uppercase hidden sm:inline-block">
            ECHOLANCE
          </span>
        </div>

        {/* Center: Address Bar Simulation */}
        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/5 text-[11px] font-mono text-white/60 max-w-[220px] sm:max-w-sm truncate">
          <Lock size={11} className="text-[#E5C07B] shrink-0" />
          <span className="text-white/30">https://</span>
          <span className="text-white/85 font-medium">{urlPath}</span>
        </div>

        {/* Right: Selected Concept Badge */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
            {projectNumber} // CONCEPT
          </span>
        </div>
      </div>

      {/* Main Large Viewport Content (with subtle pointer shift) */}
      <motion.div
        style={
          shouldReduceMotion || isTouch ? undefined : { x: mouseX, y: mouseY }
        }
        className="relative z-10 w-full overflow-hidden bg-[#08090D] transition-transform duration-300 ease-out"
      >
        {children}

        {/* Floating Hover Label (Desktop) */}
        {!shouldReduceMotion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.9,
              y: isHovered ? 0 : 8,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex absolute bottom-8 right-8 z-30 pointer-events-none items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider shadow-2xl"
          >
            <span>VIEW CONCEPT</span>
            <ArrowUpRight size={14} className="text-black" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
