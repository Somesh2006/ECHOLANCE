"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CheckCircle2, Instagram, Linkedin, Globe } from "lucide-react";
import { CtaSweepingArc } from "@/components/ui/atmosphere-layers";

export function EditorialReachUs() {
  const formRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const transitionEase = [0.16, 1, 0.3, 1];

  const [showForm, setShowForm] = useState(false);
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

  const handleToggleForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="reach-us"
      className="relative w-full bg-[#080808] text-[#F5F2EA] select-none border-t border-[#F5F2EA]/10 overflow-hidden"
    >
      {/* Anchor for contact navigation */}
      <span id="contact" className="absolute top-0 opacity-0 pointer-events-none" />

      {/* Sweeping Gold Light Arc */}
      <CtaSweepingArc />

      {/* ==============================================================
          FINAL CLIMAX CTA (INTENTIONAL SCALE CONTRAST)
      ============================================================== */}
      <div className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden flex flex-col justify-center">
        
        {/* Atmospheric Core Gold Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.04, 0.08, 0.04],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D8B36A] blur-[180px] pointer-events-none"
        />

        <Container size="wide">
          <div className="space-y-10 sm:space-y-14 relative z-10">
            
            {/* Top Bar Label & Right Quote */}
            <div className="flex items-start justify-between border-b border-[#F5F2EA]/10 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]" />
                <span className="text-[11px] font-mono text-[#D8B36A] tracking-[0.25em] uppercase font-semibold">
                  // LET&apos;S WORK TOGETHER
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7A39A]">
                <span>GOOD IDEAS</span>
                <span>•</span>
                <span className="text-[#F5F2EA] font-semibold">GREAT</span>
                <span className="text-[#D8B36A] font-semibold">EXECUTION.</span>
              </div>
            </div>

            {/* Climax Headline */}
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F2EA] leading-[1.02] font-sans uppercase">
                READY TO BUILD <br />
                SOMETHING{" "}
                <span className="font-serif italic font-normal text-[#D8B36A] drop-shadow-[0_0_30px_rgba(216,179,106,0.35)]">
                  GREAT?
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#A7A39A] font-sans max-w-lg leading-relaxed font-normal">
                Have a project in mind? Let&apos;s turn it into something exceptional.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleToggleForm}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F5F2EA] text-[#080808] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-[#F0C978] hover:shadow-[0_0_24px_rgba(240,201,120,0.3)] active:scale-[0.98] cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* ==============================================================
          EXPANDABLE PROJECT INTAKE TERMINAL
      ============================================================== */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: transitionEase }}
            className="w-full py-12 sm:py-16 border-t border-[#F5F2EA]/10 bg-[#0B0B0B]"
          >
            <Container>
              <div className="max-w-xl mx-auto space-y-6">
                <div className="flex items-center justify-between border-b border-[#F5F2EA]/10 pb-3">
                  <span className="text-[11px] font-mono text-[#D8B36A] uppercase tracking-widest font-semibold">
                    PROJECT DISPATCH CONSOLE
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-[11px] font-mono text-[#A7A39A] hover:text-[#F5F2EA] cursor-pointer"
                  >
                    [ CLOSE ✕ ]
                  </button>
                </div>

                {isSubmitted ? (
                  <div className="py-8 space-y-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#D8B36A]/10 border border-[#D8B36A]/30 flex items-center justify-center text-[#D8B36A] mx-auto">
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className="text-xl font-semibold text-[#F5F2EA] font-sans">Inquiry Dispatched</h4>
                    <p className="text-xs text-[#A7A39A]">
                      Thank you, {formData.name || "friend"}. We will review your vision and reply to {formData.email || "your email"} within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-1 border-b border-[#F5F2EA]/15 pb-1.5 focus-within:border-[#D8B36A] transition-colors">
                      <label className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent text-[#F5F2EA] text-sm focus:outline-none placeholder:text-[#A7A39A]/30"
                      />
                    </div>

                    <div className="space-y-1 border-b border-[#F5F2EA]/15 pb-1.5 focus-within:border-[#D8B36A] transition-colors">
                      <label className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-[#F5F2EA] text-sm focus:outline-none placeholder:text-[#A7A39A]/30"
                      />
                    </div>

                    <div className="space-y-1 border-b border-[#F5F2EA]/15 pb-1.5 focus-within:border-[#D8B36A] transition-colors">
                      <label className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest block">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Atelier Noir"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent text-[#F5F2EA] text-sm focus:outline-none placeholder:text-[#A7A39A]/30"
                      />
                    </div>

                    <div className="space-y-1 border-b border-[#F5F2EA]/15 pb-1.5 focus-within:border-[#D8B36A] transition-colors">
                      <label className="text-[10px] font-mono text-[#A7A39A] uppercase tracking-widest block">
                        Message *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Tell us about your project vision..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent text-[#F5F2EA] text-sm focus:outline-none placeholder:text-[#A7A39A]/30 resize-none"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-full bg-[#F5F2EA] text-[#080808] font-bold text-xs uppercase tracking-wider hover:bg-[#F0C978] transition-colors cursor-pointer"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "DISPATCH INQUIRY →"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==============================================================
          QUIET MINIMAL STUDIO FOOTER
      ============================================================== */}
      <footer className="w-full py-8 sm:py-10 border-t border-[#F5F2EA]/10 bg-[#080808]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            {/* Left: Branding */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <a
                href="#home"
                className="text-[#F5F2EA] text-xs font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity font-sans"
              >
                ECHOLANCE
              </a>
              <span className="text-[#A7A39A] text-[10px] uppercase tracking-widest">
                A DIGITAL STUDIO
              </span>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[#A7A39A] text-[11px]">
              <a href="#home" className="hover:text-[#F5F2EA] transition-colors">HOME</a>
              <a href="#work" className="hover:text-[#F5F2EA] transition-colors">WORK</a>
              <a href="#services" className="hover:text-[#F5F2EA] transition-colors">SERVICES</a>
              <a href="#about" className="hover:text-[#F5F2EA] transition-colors">ABOUT</a>
              <a href="#contact" className="hover:text-[#F5F2EA] transition-colors">CONTACT</a>
            </div>

            {/* Right: Social Icons + Copyright */}
            <div className="flex items-center gap-4 text-[#A7A39A]">
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EA] transition-colors" aria-label="Instagram">
                  <Instagram size={14} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EA] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={14} />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F2EA] transition-colors" aria-label="Dribbble">
                  <Globe size={14} />
                </a>
              </div>
              <span className="text-[10px] text-[#A7A39A]">
                © 2026 Echolance.
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
}
