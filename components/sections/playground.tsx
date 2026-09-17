"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { LayoutGrid, ShoppingBag, BarChart3, Smartphone, Sparkles, ArrowRight, Zap } from "lucide-react";

export function DigitalPlayground() {
  const [activeTab, setActiveTab] = useState<"landing" | "ecommerce" | "dashboard" | "mobile">("landing");

  const playgroundTabs = [
    { id: "landing", label: "01 LANDING PAGE", icon: <Sparkles className="w-4 h-4" /> },
    { id: "ecommerce", label: "02 E-COMMERCE", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "dashboard", label: "03 DASHBOARD", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "mobile", label: "04 MOBILE EXP", icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <section className="py-28 md:py-36 relative z-10 border-t border-b border-white/5 bg-[#08090e]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="04 — DIGITAL PLAYGROUND"
          title="SEE HOW INTERFACES"
          gradientText="TRANSFORM IN REAL TIME."
          subtitle="Click through our interactive UI playground to see how we craft custom digital products across different business formats."
        />

        {/* Playground Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 font-mono">
          {playgroundTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold transition-all border ${
                  isActive
                    ? "bg-echolance-gold text-slate-950 border-echolance-gold shadow-[0_0_25px_rgba(229,192,123,0.3)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Transforming Live Showcase Viewport */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-[#0b0d16] border border-white/15 p-4 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden backdrop-blur-xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-echolance-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-echolance-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeTab === "landing" && (
                <motion.div
                  key="landing-view"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 font-mono relative z-10"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="text-echolance-gold font-bold">TYPE: HIGH-CONVERSION LANDING PAGE</span>
                    <span className="text-slate-400">STATUS: +210% LEADS</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 font-sans">
                    <span className="text-xs font-mono text-echolance-gold uppercase tracking-wider block">
                      • SAAS LAUNCH CAMPAIGN
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold text-white uppercase font-mono tracking-tight">
                      Turn Visitors Into Loyal Customers
                    </h3>
                    <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                      Custom landing page architecture built with micro-interactions, AAA typography hierarchy, and sub-second loading.
                    </p>
                    <div className="pt-2 flex items-center gap-3 font-mono text-xs">
                      <div className="px-5 py-2.5 rounded-lg bg-echolance-gold text-slate-950 font-bold">
                        GET STARTED
                      </div>
                      <div className="px-5 py-2.5 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                        SEE DEMO
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "ecommerce" && (
                <motion.div
                  key="ecommerce-view"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 font-mono relative z-10"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="text-echolance-cyan font-bold">TYPE: HEADLESS E-COMMERCE STOREFRONT</span>
                    <span className="text-slate-400">STATUS: $18M REVENUE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded bg-echolance-gold/20 flex items-center justify-center text-echolance-gold">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <h4 className="text-white font-bold text-base uppercase">Instant Catalog Filter</h4>
                      <p className="text-xs text-slate-400 font-sans">0.3s catalog filtering across 10,000+ SKU inventory.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded bg-echolance-cyan/20 flex items-center justify-center text-echolance-cyan">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h4 className="text-white font-bold text-base uppercase">Zero-Lag Checkout</h4>
                      <p className="text-xs text-slate-400 font-sans">Stripe & Apple Pay integration with +48% conversion lift.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "dashboard" && (
                <motion.div
                  key="dashboard-view"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 font-mono relative z-10"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="text-purple-400 font-bold">TYPE: ENTERPRISE BUSINESS DASHBOARD</span>
                    <span className="text-slate-400">STATUS: 100K ACTIVE USERS</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                    <div className="flex justify-between items-center text-xs text-slate-300">
                      <span>Real-Time Telemetry Data</span>
                      <span className="text-echolance-emerald">60 FPS REALTIME</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 items-end h-24 pt-2">
                      <div className="h-2/5 bg-echolance-gold/30 rounded" />
                      <div className="h-4/5 bg-echolance-cyan/50 rounded" />
                      <div className="h-3/5 bg-purple-500/40 rounded" />
                      <div className="h-full bg-echolance-emerald rounded" />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "mobile" && (
                <motion.div
                  key="mobile-view"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 font-mono relative z-10"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                    <span className="text-echolance-emerald font-bold">TYPE: MOBILE NATIVE WEB APP</span>
                    <span className="text-slate-400">STATUS: ADAPTIVE TOUCH</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto space-y-3">
                    <div className="w-full h-3 rounded bg-white/10" />
                    <div className="w-3/4 h-3 rounded bg-echolance-gold/40" />
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      Touch Gestures & Haptic Feedback Enabled
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
