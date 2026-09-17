"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
  isBright: boolean;
  blur: number;
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    const isMobile = window.innerWidth < 768;
    const particleCount = prefersReducedMotion ? 40 : isMobile ? 120 : 380;

    const goldPalette = [
      "rgba(216, 179, 106, ", // Champagne gold #D8B36A
      "rgba(240, 201, 120, ", // Bright gold #F0C978
      "rgba(245, 242, 234, ", // Ivory white #F5F2EA
      "rgba(180, 140, 75, ",  // Deep antique gold
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        // Distribute some in clusters along gentle curved diagonal bands
        const inCluster = Math.random() > 0.4;
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (inCluster) {
          // Subtle clustering along orbital paths
          const band = Math.random();
          y = (band * height + (Math.random() - 0.5) * 150 + height) % height;
          x = (x + Math.sin(y * 0.003) * 120 + width) % width;
        }

        const isBright = Math.random() < 0.08;
        const isBlurry = Math.random() < 0.12;

        const size = isBright
          ? 1.8 + Math.random() * 1.8
          : isBlurry
          ? 3.5 + Math.random() * 4.5
          : 0.6 + Math.random() * 1.4;

        const baseAlpha = isBright
          ? 0.5 + Math.random() * 0.45
          : isBlurry
          ? 0.06 + Math.random() * 0.12
          : 0.12 + Math.random() * 0.4;

        const paletteColor =
          goldPalette[Math.floor(Math.random() * goldPalette.length)];

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: 0.015 + Math.random() * 0.03,
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.18 + 0.06, // Gentle slow drift to right
          vy: (Math.random() - 0.5) * 0.12 - 0.08, // Gentle upward drift
          color: paletteColor,
          isBright,
          blur: isBlurry ? 4 : isBright ? 2 : 0,
        });
      }
    };

    initParticles();

    let time = 0;

    const render = () => {
      time += 0.008;

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render dust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Ambient slow natural flow with wave modulation
          p.x += p.vx + Math.sin(time + p.baseY * 0.004) * 0.12;
          p.y += p.vy + Math.cos(time + p.baseX * 0.004) * 0.08;

          // Twinkle pulse
          p.twinklePhase += p.twinkleSpeed;
          p.alpha =
            p.baseAlpha + Math.sin(p.twinklePhase) * (p.baseAlpha * 0.35);

          // Cursor interaction: gentle repel & highlight
          if (mouse.x > -500) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius) * 0.8;
              const angle = Math.atan2(dy, dx);
              p.x -= Math.cos(angle) * force * 3;
              p.y -= Math.sin(angle) * force * 3;
              // Slightly brighten particle near cursor
              p.alpha = Math.min(1, p.alpha + force * 0.4);
            }
          }

          // Screen wrap
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }

        // Draw particle
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra halo for bright glittering crystals
        if (p.isBright && p.alpha > 0.4) {
          const glowGrad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 4
          );
          glowGrad.addColorStop(0, `rgba(240, 201, 120, ${p.alpha * 0.35})`);
          glowGrad.addColorStop(1, "rgba(240, 201, 120, 0)");
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Very subtle cursor golden light field
      if (mouse.x > -500 && !prefersReducedMotion) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        cursorGlow.addColorStop(0, "rgba(216, 179, 106, 0.04)");
        cursorGlow.addColorStop(0.5, "rgba(216, 179, 106, 0.015)");
        cursorGlow.addColorStop(1, "rgba(8, 8, 8, 0)");
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-90"
      />
    </div>
  );
}

