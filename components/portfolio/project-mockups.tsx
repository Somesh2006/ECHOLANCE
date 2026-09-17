"use client";

import React from "react";
import {
  ShoppingBag,
  Cpu,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Activity,
  CheckCircle2,
  Lock,
  Globe,
  Compass,
} from "lucide-react";

// =========================================================================
// 01 — RESTAURANT WEBSITE MOCKUP (Gastronomy Atelier & Seasonal Omakase)
// =========================================================================
export function RestaurantMockup() {
  return (
    <div className="w-full p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[#0F0D0A] via-[#0A0907] to-[#070605] text-[#F5F5F5] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between select-none">
      {/* Mini Brand Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="space-y-0.5">
          <div className="text-base sm:text-lg font-semibold tracking-[0.25em] text-white uppercase">
            L&apos;ÉTOILE
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#E5C07B] uppercase">
            CULINARY ATELIER // EST. 2026
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-wider text-white/60">
          <span className="hover:text-white transition-colors">PHILOSOPHY</span>
          <span className="text-[#E5C07B] font-semibold">TASTING MENU</span>
          <span className="hover:text-white transition-colors">RESERVATIONS</span>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-[#E5C07B]/10 border border-[#E5C07B]/30 text-[#E5C07B] text-xs font-mono">
          PARIS · KYOTO
        </div>
      </div>

      {/* Hero Typography & Gastronomy Showcase */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B]">
            // SPRING OMAKASE TASTING
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white leading-[1.05]">
            Sensory Cuisine, <br />
            <span className="italic font-normal text-white/90">Rooted in Nature.</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-lg leading-relaxed">
            Nine distinct movements celebrating seasonal terroir, biodynamic
            foraging, and ancestral charcoal fire craft.
          </p>

          <div className="flex items-center gap-3 pt-3">
            <span className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider shadow-lg">
              TABLE RESERVATION →
            </span>
            <span className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono text-xs">
              TASTING $185
            </span>
          </div>
        </div>

        {/* Tasting Menu Specimen Card */}
        <div className="lg:col-span-5 rounded-2xl bg-white/[0.04] border border-white/10 p-6 space-y-4 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between text-[#E5C07B] text-[11px] pb-3 border-b border-white/10">
            <span>SELECTION DU CHEF</span>
            <span>9 COURSES</span>
          </div>
          <div className="space-y-2.5 text-white/80">
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span>01. Morel Mushroom &amp; Pine</span>
              <span className="text-white/40">Amuse</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span>02. A5 Miyazaki Wagyu</span>
              <span className="text-[#E5C07B]">Charcoal</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span>03. Wild Seabass &amp; Seaweed</span>
              <span className="text-white/40">Poached</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span>04. Burnt Honey &amp; Truffle</span>
              <span className="text-white/40">Dessert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
        <span>SOMMELIER PAIRINGS: GRAND CRU 2018</span>
        <span>MICHELIN GUIDE SELECTION CONCEPT</span>
      </div>
    </div>
  );
}

// =========================================================================
// 02 — FASHION E-COMMERCE MOCKUP (Atelier Monochrome Storefront)
// =========================================================================
export function FashionMockup() {
  return (
    <div className="w-full p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[#090A12] via-[#08090E] to-[#06070B] text-[#F5F5F5] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between select-none">
      {/* Brand Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="text-base sm:text-lg font-bold tracking-[0.3em] uppercase text-white">
          ATELIER NOIR
        </div>

        <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-widest text-white/70">
          <span className="text-white font-bold">COLLECTION</span>
          <span className="hover:text-white transition-colors">LOOKBOOK</span>
          <span className="hover:text-white transition-colors">ARCHIVE</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white">
          <ShoppingBag size={13} className="text-[#E5C07B]" />
          <span>BAG (02) — $1,530</span>
        </div>
      </div>

      {/* Product Grid Showcase */}
      <div className="my-auto py-10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B]">
            SPRING / SUMMER 2026 // LIMITED RUNWAY RELEASE
          </span>
          <span className="text-xs font-mono text-white/50 hidden sm:inline">
            3 OF 12 SILHOUETTES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 space-y-4 flex flex-col justify-between group/card hover:bg-white/[0.06] transition-all">
            <div className="h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-white/30 font-mono text-xs border border-white/5">
              [ SILHOUETTE 01 ]
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Oversized Wool Trench</div>
              <div className="text-xs font-mono text-white/60 mt-0.5">$890.00 USD</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/[0.05] border border-[#E5C07B]/40 p-6 space-y-4 flex flex-col justify-between shadow-xl">
            <div className="h-32 rounded-xl bg-gradient-to-br from-[#E5C07B]/15 to-transparent flex items-center justify-center text-[#E5C07B] font-mono text-xs border border-[#E5C07B]/20">
              [ RUNWAY FEATURE ]
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Architectural Blazer</div>
              <div className="text-xs font-mono text-[#E5C07B] mt-0.5">$640.00 USD</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 space-y-4 flex flex-col justify-between hidden sm:flex group/card hover:bg-white/[0.06] transition-all">
            <div className="h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-white/30 font-mono text-xs border border-white/5">
              [ SILHOUETTE 03 ]
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Pleated Silk Trouser</div>
              <div className="text-xs font-mono text-white/60 mt-0.5">$420.00 USD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Micro Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
        <span>HEADLESS SHOPIFY ENGINE // SUB-SECOND CART</span>
        <span>GLOBAL COMPLIMENTARY SHIPPING</span>
      </div>
    </div>
  );
}

// =========================================================================
// 03 — BUSINESS WEBSITE MOCKUP (Strategic Capital & Advisory Flagship)
// =========================================================================
export function BusinessMockup() {
  return (
    <div className="w-full p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[#090C14] via-[#080A0F] to-[#06070A] text-[#F5F5F5] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between select-none">
      {/* Corporate Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="space-y-0.5">
          <div className="text-base sm:text-lg font-semibold tracking-wider text-white">
            VANCE &amp; CO.
          </div>
          <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            STRATEGIC ADVISORY &amp; CAPITAL
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-wider text-white/60">
          <span className="text-white font-semibold">PRACTICE AREAS</span>
          <span className="hover:text-white transition-colors">TRANSACTIONS</span>
          <span className="hover:text-white transition-colors">GOVERNANCE</span>
        </div>

        <div className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider">
          EXECUTIVE PORTAL
        </div>
      </div>

      {/* Flagship Corporate Hero */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5C07B]">
            // INSTITUTIONAL CAPITAL ADVISORY
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Navigating Complex <br />
            <span className="text-white/80">Cross-Border Capital.</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-lg leading-relaxed">
            Providing senior-level counsel on transformative mergers, enterprise
            recapitalizations, and direct infrastructure investments.
          </p>
        </div>

        {/* Practice Pillars Card */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3 font-mono text-xs">
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-white font-medium">01. Cross-Border M&amp;A</span>
            <span className="text-[#E5C07B]">ADVISORY</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-white font-medium">02. Private Capital Markets</span>
            <span className="text-white/40">EQUITY</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <span className="text-white font-medium">03. Digital Transformation</span>
            <span className="text-white/40">SYSTEMS</span>
          </div>
        </div>
      </div>

      {/* Corporate Metadata */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
        <span>NEW YORK · LONDON · SINGAPORE · ZÜRICH</span>
        <span>MEMBER FINRA / SIPC // INSTITUTIONAL DESK</span>
      </div>
    </div>
  );
}

// =========================================================================
// 04 — SAAS DASHBOARD MOCKUP (Synapse AI Multi-Pane Workspace)
// =========================================================================
export function SaasMockup() {
  return (
    <div className="w-full p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-[#0B0D16] via-[#090A10] to-[#07080C] text-[#F5F5F5] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between select-none font-mono">
      {/* Dashboard Top Nav */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E5C07B]/10 border border-[#E5C07B]/30 flex items-center justify-center text-[#E5C07B]">
            <Cpu size={16} />
          </div>
          <div>
            <div className="text-xs font-bold tracking-wider text-white">SYNAPSE AI</div>
            <div className="text-[10px] text-white/40">PIPELINE CONTROL</div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-5 text-xs text-white/60">
          <span className="text-white font-semibold">MODELS</span>
          <span>DATASETS</span>
          <span>PIPELINES</span>
          <span>DEPLOYMENTS</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>RUNNING 8/8</span>
        </div>
      </div>

      {/* Multi-Pane Data Visualizer */}
      <div className="my-auto py-8 space-y-4">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[10px] text-white/40">LATENCY</div>
            <div className="text-lg font-bold text-emerald-400 mt-0.5">12ms</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[10px] text-white/40">THROUGHPUT</div>
            <div className="text-lg font-bold text-white mt-0.5">2.4 TB/s</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[10px] text-white/40">ACCURACY</div>
            <div className="text-lg font-bold text-[#E5C07B] mt-0.5">99.82%</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="text-[10px] text-white/40">ACTIVE SHARDS</div>
            <div className="text-lg font-bold text-white mt-0.5">128 Nodes</div>
          </div>
        </div>

        {/* Live Sparkline & Inference Stream */}
        <div className="rounded-2xl bg-black/50 border border-white/10 p-5 space-y-3">
          <div className="flex items-center justify-between text-[10px] text-white/50 pb-2 border-b border-white/5">
            <span>REAL-TIME INFERENCE STREAM // DISTRIBUTED</span>
            <span className="text-[#E5C07B]">CLUSTER: US-EAST-1</span>
          </div>

          <div className="flex items-end gap-1.5 h-16 pt-2">
            {[40, 65, 80, 50, 90, 75, 60, 85, 95, 70, 85, 100, 90, 80, 95, 88, 72, 98, 85, 90, 75, 85, 95, 90].map(
              (height, idx) => (
                <div
                  key={idx}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-sm ${
                    idx === 11 || idx === 17 || idx === 22
                      ? "bg-[#E5C07B]"
                      : "bg-white/20 hover:bg-white/40"
                  } transition-colors`}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
        <span>EDGE DISTRIBUTED WORKSPACES // REACT 19</span>
        <span>ZERO DOWNTIME FAILOVER // ACTIVE</span>
      </div>
    </div>
  );
}
