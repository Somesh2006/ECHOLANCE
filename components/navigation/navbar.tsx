"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/data/agency-data";
import { cn } from "@/utils/cn";

interface NavbarProps {
  onStartProject?: () => void;
  className?: string;
}

export function Navbar({ onStartProject, className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll listener for sticky glass styling & active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Section Scroll Spy
      const sections = ["contact", "reach-us", "about", "services", "work", "home"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sectionId === "reach-us" ? "contact" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: transitionEase, delay: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "bg-[#090A0D]/80 backdrop-blur-xl border-b border-white/10 py-3.5 sm:py-4 lg:py-4 px-5 sm:px-8 lg:px-12 shadow-2xl shadow-black/80"
            : "bg-transparent py-5 sm:py-6 lg:py-7 px-5 sm:px-8 lg:px-12",
          className
        )}
      >
        <div className="w-full flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <a
            href="#home"
            className="text-[#F5F2EA] text-sm sm:text-base lg:text-lg font-bold tracking-[0.22em] uppercase transition-opacity hover:opacity-80 select-none flex items-center gap-2.5 font-sans"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B36A] shadow-[0_0_8px_#D8B36A]" />
            <span className="inline-block">ECHOLANCE</span>
          </a>

          {/* Right: Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
              {NAV_LINKS.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-200 py-1",
                      isActive
                        ? "text-[#F5F2EA] font-semibold"
                        : "text-[#A7A39A] hover:text-[#F5F2EA]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D8B36A] shadow-[0_0_6px_#D8B36A]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA: Tactile Glass / Gold CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onStartProject) {
                  e.preventDefault();
                  onStartProject();
                }
              }}
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5F2EA]/[0.06] hover:bg-[#F5F2EA]/[0.12] backdrop-blur-md border border-[#F5F2EA]/15 text-[#F5F2EA] text-[11px] font-mono tracking-wider transition-all duration-300 hover:border-[#D8B36A]/40 active:scale-[0.98]"
            >
              <span>START A PROJECT</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block text-[#D8B36A]">
                →
              </span>
            </a>
          </div>

          {/* Mobile Circular Menu Button (< lg) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 active:scale-95"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: transitionEase }}
            className="lg:hidden fixed inset-0 z-40 bg-[#090A0D]/98 backdrop-blur-2xl px-6 pt-28 pb-12 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6 pt-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E5C07B]">
                // NAVIGATION
              </span>

              <nav className="flex flex-col space-y-5">
                {NAV_LINKS.map((item, idx) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = activeSection === targetId;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + idx * 0.08,
                        ease: transitionEase,
                      }}
                      className={cn(
                        "text-2xl sm:text-3xl font-semibold tracking-tight flex items-center justify-between py-2.5 border-b border-white/5 transition-colors",
                        isActive ? "text-[#E5C07B]" : "text-white/90 hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />}
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight size={20} className={isActive ? "text-[#E5C07B]" : "text-white/40"} />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45, ease: transitionEase }}
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onStartProject) {
                    e.preventDefault();
                    onStartProject();
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white text-black font-semibold text-sm tracking-wider active:scale-[0.98] transition-all"
              >
                <span>START A PROJECT</span>
                <span>→</span>
              </a>

              <p className="text-center text-xs text-white/40 font-mono tracking-wider">
                ECHOLANCE // DIGITAL STUDIO
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
