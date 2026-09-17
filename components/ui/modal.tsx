"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Design"]);
  const [budget, setBudget] = useState<string>("$10k - $25k");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const availableServices = [
    "Web Design",
    "Web Development",
    "E-Commerce",
    "Landing Pages",
    "UI/UX Design",
    "Maintenance",
  ];

  const budgetOptions = [
    "< $5k",
    "$5k - $10k",
    "$10k - $25k",
    "$25k - $50k+",
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
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#FBBF24", "#38BDF8", "#2DD4BF", "#F43F5E"],
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-[#0e1018] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden font-mono"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close inquiry modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-400 uppercase tracking-wider font-bold">
                    START YOUR PROJECT
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 uppercase tracking-tight font-sans">
                  Let’s build something rememberable.
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-sans">
                  Tell us about your brand requirements. We respond within 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      1. PROJECT TYPE
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                              isSelected
                                ? "bg-amber-400/20 border-amber-400 text-white shadow-[0_0_15px_rgba(251,191,36,0.2)]"
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
                      2. BUDGET RANGE
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setBudget(opt)}
                          className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-center border ${
                            budget === opt
                              ? "bg-amber-400/20 border-amber-400 text-white shadow-[0_0_15px_rgba(251,191,36,0.2)]"
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
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
                      placeholder="e.g. Maison Lumiere"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project goals, timelines, or reference links..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <span>SEND INQUIRY →</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400 text-amber-400 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase font-sans">
                  INQUIRY RECEIVED!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto font-sans">
                  Thank you, <span className="text-amber-400 font-medium">{formData.name || "friend"}</span>. Our lead strategist will review your requirements for <span className="text-white font-medium">{formData.brand || "your brand"}</span> and respond at <span className="text-white font-medium">{formData.email || "your email"}</span> within 4 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 font-mono text-xs tracking-widest inline-flex items-center gap-2 transition-colors"
                >
                  <span>RETURN TO WEBSITE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
