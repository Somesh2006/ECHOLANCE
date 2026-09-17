"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, Testimonial } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-28 md:py-36 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="CLIENT ENDORSEMENTS"
          title="TRUSTED BY FOUNDERS"
          gradientText="AND EXECUTIVE LEADERS."
          subtitle="Read what creative directors and tech executives say about partnering with Echolance on high-stakes digital launches."
        />

        {/* Featured Minimal Testimonial Slider */}
        <div className="mt-16 max-w-4xl mx-auto font-mono">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-[#0e1018] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8"
            >
              <div className="flex items-center justify-between">
                <Quote className="w-10 h-10 text-echolance-gold/40" />
                <div className="flex items-center gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-echolance-gold fill-echolance-gold" />
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-2xl text-white font-medium leading-relaxed italic font-sans">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-echolance-gold/50">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans">
                      {currentTestimonial.role} •{" "}
                      <span className="text-echolance-gold font-mono font-medium">
                        {currentTestimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-echolance-emerald/10 border border-echolance-emerald/30 text-xs text-echolance-emerald font-bold w-fit">
                  <TrendingUp className="w-4 h-4" />
                  <span>{currentTestimonial.impactMetric}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-echolance-gold w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
