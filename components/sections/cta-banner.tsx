"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export function CtaBanner({ onOpenModal }: CtaBannerProps) {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c0f1a] via-[#101426] to-[#07080d] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden text-center">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-echolance-cyan/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-echolance-violet/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-echolance-cyan uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let’s Collaborate</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Have an ambitious vision?{" "}
              <span className="text-gradient-cyan block mt-1 sm:inline">
                Let’s build it together.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed"
            >
              Whether you are launching a new digital product or elevating your brand website, our senior engineering team is ready.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={onOpenModal}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                glow
              >
                Start Your Project
              </Button>

              <a href="mailto:hello@echolance.agency">
                <Button
                  variant="glass"
                  size="lg"
                  icon={<Mail className="w-4 h-4 text-echolance-cyan" />}
                >
                  Email Us Directly
                </Button>
              </a>
            </motion.div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 border-t border-white/5 mt-8">
              <span>⚡ Average response time: &lt; 4 hours</span>
              <span>🔒 Confidential NDA protected</span>
              <span>✨ Free proposal & scoping</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
