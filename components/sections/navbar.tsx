"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["work", "services", "process", "about"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const navLinks = [
    { num: "01", name: "WORK", href: "#work", id: "work" },
    { num: "02", name: "SERVICES", href: "#services", id: "services" },
    { num: "03", name: "PROCESS", href: "#process", id: "process" },
    { num: "04", name: "ABOUT", href: "#about", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#090a0d]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 z-50">
          <span className="font-bold text-sm tracking-[0.25em] text-white font-mono group-hover:text-amber-200 transition-colors uppercase">
            ECHOLANCE
          </span>
          <span className="text-[10px] font-mono text-amber-400/80 px-1.5 py-0.5 rounded border border-amber-400/20 bg-amber-400/5 hidden sm:inline-block">
            STUDIO
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group relative flex items-center gap-1.5 text-xs tracking-widest transition-colors py-1 ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                  {link.num}
                </span>
                <span className="font-mono">{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-400/80 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <MagneticWrapper strength={20}>
            <button
              onClick={onOpenModal}
              className="group relative inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white border border-white/20 hover:border-amber-400/50 px-5 py-2.5 rounded-full bg-white/5 hover:bg-amber-400/10 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </MagneticWrapper>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden z-50 p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Navigation Fullscreen Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#090a0d] z-40 flex flex-col justify-between p-8 md:hidden pt-28 border-b border-white/10">
            <div className="space-y-6">
              <span className="text-[11px] font-mono text-slate-500 tracking-widest uppercase block">
                NAVIGATION
              </span>
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-light text-white hover:text-amber-300 transition-colors py-2 border-b border-white/5"
                  >
                    <span className="text-xs font-mono text-amber-400">{link.num}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-4 text-xs font-mono tracking-widest text-black font-bold bg-amber-400 hover:bg-amber-300 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2">
                <span>ECHOLANCE STUDIO</span>
                <span>2026 EDITION</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
