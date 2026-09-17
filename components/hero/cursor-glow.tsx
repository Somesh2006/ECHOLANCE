"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    setMounted(true);
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted || isTouch || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
      style={{
        left: mouseX,
        top: mouseY,
        width: 480,
        height: 480,
        background:
          "radial-gradient(circle, rgba(229, 192, 123, 0.07) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
