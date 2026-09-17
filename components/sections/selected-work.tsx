"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { MagneticWrapper } from "../ui/magnetic-wrapper";

interface SelectedWorkProps {
  onOpenModal: () => void;
}

interface ConceptProject {
  id: string;
  num: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
}

const PROJECTS: ConceptProject[] = [
  {
    id: "restaurant-website",
    num: "01",
    title: "Maison Lumière Gastronomy",
    category: "Restaurant Website",
    year: "2026",
    description: "A spatial culinary web experience featuring interactive menu degustation and table reservation systems.",
    tags: ["Next.js", "GSAP ScrollTrigger", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    accent: "#E5C07B",
  },
  {
    id: "fashion-ecommerce",
    num: "02",
    title: "Atelier Noir Collection",
    category: "Fashion E-Commerce",
    year: "2026",
    description: "High-editorial fashion storefront with fluid lookbook transitions and instant checkout funnel.",
    tags: ["Shopify Headless", "React 19", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    accent: "#F43F5E",
  },
  {
    id: "business-website",
    num: "03",
    title: "Veloce Global Portal",
    category: "Business Website",
    year: "2025",
    description: "Corporate digital portal showcasing luxury mobility, multi-language architecture, and technical SEO schema.",
    tags: ["Next.js", "TypeScript", "Three.js"],
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    accent: "#38BDF8",
  },
  {
    id: "saas-dashboard",
    num: "04",
    title: "Synthetix AI Workspace",
    category: "SaaS Dashboard",
    year: "2025",
    description: "High-contrast obsidian workspace for real-time AI data analytics, canvas rendering, and dark mode UI.",
    tags: ["TypeScript", "Canvas API", "Dark Mode UI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    accent: "#2DD4BF",
  },
];

export function SelectedWork({ onOpenModal }: SelectedWorkProps) {
  return (
    <section id="work" className="py-24 md:py-36 relative z-10 exhibition-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-amber-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED CONCEPTS</span>
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-sans">
              FEATURED WORK.
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm leading-relaxed">
            Curated concept platforms demonstrating our design craftsmanship, engineering precision, and motion physics.
          </p>
        </div>

        {/* Visually Dominant Projects List */}
        <div className="space-y-20">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#0b0d15] border border-white/10 p-6 md:p-10 hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundColor: project.accent }}
              />

              {/* Large Visual Preview Container */}
              <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 relative aspect-[16/10] bg-[#07080b]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-transparent to-transparent opacity-60" />
                
                <span className="absolute top-4 left-4 text-xs font-mono font-bold text-white px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  {project.num} // CONCEPT
                </span>
              </div>

              {/* Project Meta Information */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: project.accent }}
                  />
                  <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                    {project.category} • {project.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Study Trigger */}
                <div className="pt-3">
                  <MagneticWrapper strength={15}>
                    <button
                      onClick={onOpenModal}
                      className="group/btn inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-amber-300 transition-colors py-2 border-b border-white/20 hover:border-amber-300"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-amber-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </button>
                  </MagneticWrapper>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
