"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export function CtaBanner({ onOpenModal }: CtaBannerProps) {
  return (
    <section className="py-24 md:py-36 relative z-10 exhibition-grid border-t border-white/10 bg-gradient-to-b from-[#090a0d] to-[#0d0f17]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        
        {/* Micro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-300">
            START YOUR PROJECT
          </span>
        </motion.div>

        {/* Headline Stacked */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase font-sans leading-[0.95]"
        >
          YOUR WEBSITE <br />
          SHOULD FEEL <br />
          <span className="text-amber-300 font-serif italic tracking-normal normal-case">
            different.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-xl text-slate-300 font-sans max-w-xl mx-auto leading-relaxed"
        >
          &quot;Let&apos;s build something people remember.&quot;
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4 flex justify-center"
        >
          <MagneticWrapper strength={25}>
            <button
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-sm tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.3)] cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </MagneticWrapper>
        </motion.div>

        {/* Direct Contact Email */}
        <div className="pt-6">
          <a
            href="mailto:hello@echolance.agency"
            className="text-xs font-mono text-slate-500 hover:text-amber-400 transition-colors tracking-widest uppercase"
          >
            OR EMAIL DIRECTLY: HELLO@ECHOLANCE.AGENCY
          </a>
        </div>

      </div>
    </section>
  );
}
