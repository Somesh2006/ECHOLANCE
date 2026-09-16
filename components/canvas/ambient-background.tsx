"use client";

import React, { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  pulsePhase: number;
  speed: number;
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

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      velX: 0,
      velY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize Blobs (Soft Gradient Orbs)
    const blobColors = [
      "rgba(56, 189, 248, 0.12)",   // Electric Cyan
      "rgba(99, 102, 241, 0.14)",   // Indigo
      "rgba(139, 92, 246, 0.10)",   // Violet
      "rgba(244, 63, 94, 0.06)",    // Soft Rose Accent
      "rgba(16, 185, 129, 0.07)",   // Emerald Accent
    ];

    const blobs: Blob[] = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      radius: Math.min(width, height) * (0.35 + Math.random() * 0.25),
      color: blobColors[i % blobColors.length],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      pulsePhase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.003,
    }));

    // Floating particles (dust/light trails)
    const particleCount = prefersReducedMotion ? 12 : 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 2,
      speedY: 0.15 + Math.random() * 0.35,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: 0.1 + Math.random() * 0.4,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;

      // Smooth mouse interpolation (LERP)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      mouse.velX = (mouse.targetX - mouse.x) * 0.01;
      mouse.velY = (mouse.targetY - mouse.y) * 0.01;

      // Clear Canvas
      ctx.fillStyle = "#07080d";
      ctx.fillRect(0, 0, width, height);

      // Render Gradient Orbs with Blend Modes
      ctx.globalCompositeOperation = "screen";

      blobs.forEach((blob, idx) => {
        if (!prefersReducedMotion) {
          blob.pulsePhase += blob.speed;
          
          // Wander target
          blob.x += blob.vx + Math.sin(time + idx) * 0.4;
          blob.y += blob.vy + Math.cos(time + idx * 0.7) * 0.4;

          // Gentle mouse attraction
          const dx = mouse.x - blob.x;
          const dy = mouse.y - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 600) {
            blob.x += (dx / dist) * 0.3;
            blob.y += (dy / dist) * 0.3;
          }

          // Screen wrap
          if (blob.x < -blob.radius) blob.x = width + blob.radius;
          if (blob.x > width + blob.radius) blob.x = -blob.radius;
          if (blob.y < -blob.radius) blob.y = height + blob.radius;
          if (blob.y > height + blob.radius) blob.y = -blob.radius;
        }

        const currentRadius = blob.radius * (1 + Math.sin(blob.pulsePhase) * 0.08);

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          currentRadius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.6, blob.color.replace(/[\d\.]+\)$/, "0.03)"));
        gradient.addColorStop(1, "rgba(7, 8, 13, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mouse interactive light orb
      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      mouseGrad.addColorStop(0, "rgba(56, 189, 248, 0.08)");
      mouseGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.04)");
      mouseGrad.addColorStop(1, "rgba(7, 8, 13, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 350, 0, Math.PI * 2);
      ctx.fill();

      // Reset Composite Operation
      ctx.globalCompositeOperation = "source-over";

      // Draw subtle tech grid lines overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
      ctx.lineWidth = 1;
      const gridSize = 64;
      const gridOffsetY = (time * 10) % gridSize;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = gridOffsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.y -= p.speedY;
          p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.2;
          if (p.y < 0) {
            p.y = height;
            p.x = Math.random() * width;
          }
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-90 transition-opacity duration-1000"
      />
      {/* Noise Texture Overlay for High-End Film/Agency Depth */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />
      {/* Top subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#07080d]/80 pointer-events-none" />
    </div>
  );
}
