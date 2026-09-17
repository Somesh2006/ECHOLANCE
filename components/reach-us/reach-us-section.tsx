"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionAtmosphere } from "@/components/ui/atmosphere-layers";
import { MagneticWrapper } from "@/components/motion/magnetic-wrapper";
import { NAV_LINKS } from "@/data/agency-data";
import { CheckCircle2, Send, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

const PROJECT_TYPES = [
  "WEB DESIGN",
  "WEB DEVELOPMENT",
  "E-COMMERCE",
  "LANDING PAGE",
  "UI/UX",
  "OTHER",
];

export function ReachUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  // Subtle cursor light follower
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 });
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "WEB DESIGN",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Clean UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const headlineLines = [
    { text: "YOUR WEBSITE", delay: 0.1 },
    { text: "SHOULD FEEL", delay: 0.2 },
    { text: "DIFFERENT.", delay: 0.3, isAccent: true },
  ];

  return (
    <section
      ref={sectionRef}
      id="reach-us"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
      className="relative w-full pt-28 sm:pt-36 lg:pt-44 pb-12 bg-[#090A0D] text-[#F5F5F5] border-t border-white/10 overflow-hidden select-none"
    >
      {/* Target anchor for existing #contact links */}
      <span id="contact" className="absolute top-0 opacity-0 pointer-events-none" />

      {/* Visual Atmosphere Layer */}
      <SectionAtmosphere
        grid="coarse"
        glow="dual"
        watermark="NEXT"
        watermarkPosition="center"
      />

      {/* Cursor Follower Light (Desktop Only) */}
      {!shouldReduceMotion && isHoveringSection && (
        <motion.div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block z-0"
          style={{
            left: mouseX,
            top: mouseY,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(229, 192, 123, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      )}

      <Container>
        {/* ==============================================
            01. DRAMATIC CLIMAX CTA
        ============================================== */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-10 relative z-10 pb-16 sm:pb-24 border-b border-white/10">
          {/* Label Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: transitionEase }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C07B] animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
              READY WHEN YOU ARE.
            </span>
          </motion.div>

          {/* Large Dominant Display Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-white leading-[0.98] flex flex-col items-center">
            {headlineLines.map((line) => (
              <span key={line.text} className="overflow-hidden inline-block">
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 40, filter: "blur(10px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: shouldReduceMotion ? 0 : line.delay,
                    ease: transitionEase,
                  }}
                  className={cn(
                    "inline-block",
                    line.isAccent
                      ? "text-[#E5C07B] drop-shadow-[0_0_35px_rgba(229,192,123,0.25)]"
                      : "text-white"
                  )}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.35, ease: transitionEase }}
            className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.65)] max-w-xl leading-relaxed font-normal"
          >
            Have an idea, a business or a website that needs a new direction?
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.45, ease: transitionEase }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <MagneticWrapper strength={0.25}>
              <button
                type="button"
                onClick={handleScrollToForm}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98] shadow-2xl shadow-black/80 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">
                  →
                </span>
              </button>
            </MagneticWrapper>

            <MagneticWrapper strength={0.2}>
              <a
                href="mailto:contact@echolance.studio?subject=New%20Project%20Inquiry"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300"
              >
                <span>LET&apos;S TALK</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">
                  →
                </span>
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>

        {/* ==============================================
            02. COMPACT PROJECT INQUIRY FORM
        ============================================== */}
        <div ref={formRef} className="py-16 sm:py-24 max-w-2xl mx-auto relative z-10">
          <div className="space-y-2 mb-8 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B]">
              PROJECT INQUIRY
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Tell us about your project.
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0F14] border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E5C07B]/10 border border-[#E5C07B]/30 flex items-center justify-center text-[#E5C07B]">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-white/60 max-w-md">
                    Thank you, {formData.name || "friend"}. We will review your project details and follow up directly at {formData.email || "your email"}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "WEB DESIGN",
                        message: "",
                      });
                    }}
                    className="mt-4 text-xs font-mono text-[#E5C07B] hover:underline"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-white/60 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E5C07B] focus:outline-none text-white text-sm placeholder:text-white/25 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-white/60 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E5C07B] focus:outline-none text-white text-sm placeholder:text-white/25 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company / Brand */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-white/60 block">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E5C07B] focus:outline-none text-white text-sm placeholder:text-white/25 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-white/60 block">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, projectType: type })
                            }
                            className={cn(
                              "px-3 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all border cursor-pointer",
                              isSelected
                                ? "bg-[#E5C07B] text-black font-semibold border-[#E5C07B]"
                                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/25"
                            )}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-white/60 block">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the timeline, requirements or ideas..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E5C07B] focus:outline-none text-white text-sm placeholder:text-white/25 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all hover:bg-zinc-200 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">
                        SENDING...
                      </span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ==============================================
            03. MINIMAL QUIET FOOTER
        ============================================== */}
        <div className="pt-16 border-t border-white/10 space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <div className="space-y-1">
              <a
                href="#home"
                className="text-white text-base font-semibold tracking-[0.25em] uppercase hover:opacity-80 transition-opacity"
              >
                ECHOLANCE
              </a>
              <p className="text-xs text-white/50 font-sans">
                Modern digital design &amp; development.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-5 text-xs font-mono text-white/60">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#E5C07B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/40">
            <span>© 2026 ECHOLANCE</span>
            <span>BESPOKE DIGITAL STUDIO</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
