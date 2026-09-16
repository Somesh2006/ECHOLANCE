"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/agency-data";
import { SectionHeading } from "../ui/section-heading";
import { ExternalLink, ArrowUpRight, Trophy, Zap, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface SelectedWorkProps {
  onOpenModal: () => void;
}

export function SelectedWork({ onOpenModal }: SelectedWorkProps) {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Architecture & Design", "Automotive & EV", "SaaS & AI Tooling", "E-Commerce"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 relative z-10 border-t border-white/5 bg-[#07080d]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            badge="Selected Works"
            title="Digital experiences that"
            gradientText="command market attention."
            subtitle="Explore how we helped industry leaders transform their online presence and achieve measurable business results."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                  filter === cat
                    ? "bg-echolance-cyan text-slate-950 font-bold border-echolance-cyan shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Showcase */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group rounded-3xl bg-[#0b0d15] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl glass-panel-hover overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Project Info & Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-echolance-cyan">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-echolance-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Result Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-echolance-cyan/10 via-echolance-indigo/10 to-transparent border border-echolance-cyan/30 flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-echolance-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-echolance-cyan block">
                      Empirical Result
                    </span>
                    <span className="text-xs font-bold text-white">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats Breakdown */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/5">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <span className="block text-lg font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-500">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    onClick={onOpenModal}
                    variant="outline"
                    size="sm"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>

              {/* Right Column: Large Interactive Browser Showcase Mockup */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-[#07080d] border border-white/10 overflow-hidden shadow-2xl group-hover:border-echolance-cyan/40 transition-all duration-500">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0f111a] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                      {project.client.toLowerCase().replace(/\s+/g, "")}.com
                    </span>
                    <span className="text-[10px] font-mono text-echolance-cyan">
                      60 FPS
                    </span>
                  </div>

                  {/* Browser Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1200px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Hover Badge */}
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-[#07080d]/80 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span>View Live Experience</span>
                      <ExternalLink className="w-3.5 h-3.5 text-echolance-cyan" />
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Custom Case Studies */}
        <div className="mt-16 text-center">
          <Button
            onClick={onOpenModal}
            variant="glass"
            size="lg"
            icon={<Sparkles className="w-4 h-4 text-echolance-cyan" />}
          >
            Want to see more case studies? Schedule a Private Review
          </Button>
        </div>

      </div>
    </section>
  );
}
