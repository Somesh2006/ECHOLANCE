"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Heart, Globe, Mail, MapPin } from "lucide-react";

export function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050609] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-echolance-cyan via-echolance-indigo to-echolance-violet p-[1px]">
                <div className="w-full h-full bg-[#07080d] rounded-[11px] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-echolance-cyan to-echolance-violet font-black text-lg">
                    E
                  </span>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Echolance<span className="text-echolance-cyan">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern digital agency engineering bespoke websites, interactive user experiences, and high-conversion web architectures.
            </p>

            {/* Live Clock Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Globe className="w-3.5 h-3.5 text-echolance-cyan animate-pulse" />
              <span>Agency Time: {timeString || "15:45:00 UTC"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-echolance-cyan transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-echolance-cyan transition-colors">Selected Work</a></li>
              <li><a href="#why-us" className="hover:text-echolance-cyan transition-colors">Why Echolance</a></li>
              <li><a href="#process" className="hover:text-echolance-cyan transition-colors">Process</a></li>
              <li><a href="#testimonials" className="hover:text-echolance-cyan transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><span className="hover:text-white transition-colors">Bespoke Web Design</span></li>
              <li><span className="hover:text-white transition-colors">Next.js Development</span></li>
              <li><span className="hover:text-white transition-colors">Headless E-Commerce</span></li>
              <li><span className="hover:text-white transition-colors">UI/UX System Design</span></li>
              <li><span className="hover:text-white transition-colors">100 Lighthouse Speed</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-echolance-cyan" />
                <a href="mailto:hello@echolance.agency" className="hover:text-white transition-colors">
                  hello@echolance.agency
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-echolance-indigo" />
                <span>Global Remote Agency Hub</span>
              </div>
            </div>

            {/* Social Badges */}
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono">
                X/Twitter
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono">
                GitHub
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Echolance Agency. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-echolance-cyan" />
          </button>
        </div>

      </div>
    </footer>
  );
}
