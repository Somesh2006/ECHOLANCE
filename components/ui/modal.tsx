"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Website Design"]);
  const [budget, setBudget] = useState<string>("$10,000 - $25,000");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const availableServices = [
    "Website Design",
    "Web Development",
    "UI/UX Design",
    "E-Commerce",
    "Speed Optimization",
    "Ongoing Support",
  ];

  const budgetOptions = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000+",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#38BDF8", "#6366F1", "#8B5CF6", "#10B981"],
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-[#0e1018] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Ambient Background Glow inside Modal */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-echolance-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-echolance-violet/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-echolance-cyan" />
                  <span className="text-xs font-mono text-echolance-cyan uppercase tracking-wider">
                    Start Your Project
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Let’s build something extraordinary.
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Tell us about your brand goals. We respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      1. Which services do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-echolance-cyan/20 border-echolance-cyan text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
                            }`}
                          >
                            {service} {isSelected && "✓"}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      2. Estimated Investment Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setBudget(opt)}
                          className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-center border ${
                            budget === opt
                              ? "bg-echolance-indigo/20 border-echolance-indigo text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-echolance-cyan focus:ring-1 focus:ring-echolance-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-echolance-cyan focus:ring-1 focus:ring-echolance-cyan"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your current site, goals, timelines, or inspiration..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-echolance-cyan focus:ring-1 focus:ring-echolance-cyan resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Project Inquiry
                  </Button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-echolance-cyan/20 border border-echolance-cyan text-echolance-cyan mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-echolance-cyan font-medium">{formData.name || "friend"}</span>. Our lead strategist will review your requirements and get back to you at <span className="text-white font-medium">{formData.email || "your email"}</span> within 24 hours.
                </p>
                <Button
                  onClick={resetForm}
                  variant="glass"
                  className="mt-4"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Return to Website
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
