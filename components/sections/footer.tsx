"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "SERVICES", href: "#services" },
    { name: "PROCESS", href: "#process" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#cta" },
  ];

  const socialLinks = [
    { name: "X / Twitter", href: "https://twitter.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <footer className="py-16 md:py-24 relative z-10 exhibition-grid border-t border-white/10 bg-[#07080c] text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Identity */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="inline-block font-bold text-lg tracking-[0.25em] text-white uppercase">
              ECHOLANCE
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Modern web design &amp; engineering studio crafting bespoke digital platforms that move businesses forward.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
              NAVIGATION
            </span>
            <div className="flex flex-wrap md:flex-col gap-4 md:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
              CONNECT
            </span>
            <div className="flex flex-wrap md:flex-col gap-4 md:gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-amber-400 transition-colors tracking-wider group"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>© 2026 ECHOLANCE AGENCY // ALL RIGHTS RESERVED</span>
          <span className="text-amber-400/80">DESIGNED &amp; BUILT WITH NEXT.JS &amp; GSAP</span>
        </div>

      </div>
    </footer>
  );
}
