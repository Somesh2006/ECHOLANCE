"use client";

import React, { useState } from "react";
import { AmbientBackground } from "@/components/canvas/ambient-background";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustIntro } from "@/components/sections/trust-intro";
import { Services } from "@/components/sections/services";
import { SelectedWork } from "@/components/sections/selected-work";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Footer } from "@/components/sections/footer";
import { ProjectModal } from "@/components/ui/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="relative min-h-screen bg-[#07080d] text-slate-100 overflow-x-hidden">
      {/* Premium Animated Canvas Background */}
      <AmbientBackground />

      {/* Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Trust & Stats Intro */}
      <TrustIntro />

      {/* Interactive Services Section */}
      <Services onOpenModal={handleOpenModal} />

      {/* Selected Work Portfolio Section */}
      <SelectedWork onOpenModal={handleOpenModal} />

      {/* Why Echolance Differentiators */}
      <WhyUs onOpenModal={handleOpenModal} />

      {/* 5-Stage Process Workflow */}
      <Process onOpenModal={handleOpenModal} />

      {/* Client Endorsements / Testimonials */}
      <Testimonials />

      {/* Closing CTA Section */}
      <CtaBanner onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Interactive Inquiry Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
