"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover (mouse/trackpad)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouch(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".interactive-target");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleElementHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer Champagne Gold Halo */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-[#D8B36A]/40 bg-[#D8B36A]/5 backdrop-blur-[0.5px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 44 : isClicking ? 20 : 28,
          height: isHovered ? 44 : isClicking ? 20 : 28,
          borderColor: isHovered ? "rgba(240, 201, 120, 0.7)" : "rgba(216, 179, 106, 0.35)",
          backgroundColor: isHovered ? "rgba(216, 179, 106, 0.12)" : "rgba(216, 179, 106, 0.03)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-[#F0C978] shadow-[0_0_8px_rgba(240,201,120,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : isClicking ? 3 : 4,
          height: isHovered ? 6 : isClicking ? 3 : 4,
          scale: isClicking ? 0.7 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
    </div>
  );
}
