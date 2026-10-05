"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  BookOpen,
  Building2,
  Wrench,
  Globe,
  Users,
  Lightbulb,
  Package,
  TrendingUp,
  Compass,
  Briefcase,
  Award,
  GraduationCap,
  Scale,
  Trophy,
  Mic,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Mail,
  Check,
  X,
  Menu,
} from "lucide-react";

// =========================================================================
// MODALS
// =========================================================================

function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg bg-[#0C1322] border border-[#C89B59]/30 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="text-[#C89B59] text-xs font-semibold tracking-[0.2em] uppercase">
                Direct Inquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                Book an Executive Consultation
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Engage directly with Dr. Tarun Rochwani for corporate strategy, advisory, or coaching.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B59] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B59] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Engagement Interest
                </label>
                <select className="w-full bg-[#131E33] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B59] transition-colors">
                  <option>Executive 1-on-1 Coaching</option>
                  <option>Corporate Team Training Program</option>
                  <option>Keynote Speaking Engagement</option>
                  <option>Strategic Transaction Shadow Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                  Brief Context / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your timing, objectives, or counterparty dynamics..."
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C89B59] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-semibold py-3.5 rounded-lg text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Confidential Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C89B59]/20 text-[#C89B59] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-white">Inquiry Received</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Thank you. Our practice office will review your requirements and respond within 24 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl aspect-video"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white/80 hover:text-white p-2 rounded-full bg-black/60 transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#080E1B] to-[#121E36] overflow-hidden">
          <Image
            src="/images/web/hero-portrait.png"
            alt="Dr. Tarun Rochwani"
            fill
            className="object-cover opacity-25 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#080E1B]/75 backdrop-blur-[2px] pointer-events-none" />
          <div className="w-20 h-20 rounded-full bg-[#C89B59]/20 border border-[#C89B59]/50 flex items-center justify-center mb-6 relative z-10">
            <Play className="w-8 h-8 text-[#C89B59] translate-x-0.5" />
          </div>
          <span className="text-[#C89B59] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Discipline Overview
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            The Architecture of Better Outcomes
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-8">
            An introduction to doctoral-grounded negotiation methodology, counterparty leverage construction, and executive decision-making.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-medium px-6 py-2.5 rounded-full text-sm transition-colors"
            >
              Explore Framework
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// =========================================================================
// SECTION 1: HEADER & NAVIGATION
// =========================================================================

function SiteHeader({ onOpenConsult }: { onOpenConsult: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Methodology", href: "#methodology" },
    { label: "Programs", href: "#programs" },
    { label: "Research", href: "#research" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#080E1B]/85 backdrop-blur-md border-b border-white/[0.08] transition-all">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Brand Monogram & Wordmark */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/brand/na-monogram-white.png"
                alt="NA Monogram"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-sans font-bold text-sm sm:text-[15px] tracking-[0.14em] uppercase leading-tight group-hover:text-[#C89B59] transition-colors">
                Negotiation
              </span>
              <span className="text-[#C89B59] font-sans font-bold text-xs sm:text-[13px] tracking-[0.14em] uppercase leading-tight">
                Architecture<sup className="text-[9px] font-normal">®</sup>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-sans font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#C89B59] transition-colors group"
              >
                {link.label}
                {link.label === "Home" && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B59]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsult}
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 hover:text-[#C89B59] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-[#080E1B] border-b border-white/10 px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-200 hover:text-[#C89B59] font-sans font-medium py-2 text-base border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsult();
                }}
                className="w-full mt-2 bg-[#C89B59] text-slate-950 font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// =========================================================================
// SECTION 2: HERO SECTION
// =========================================================================

function HeroSection({
  onOpenConsult,
  onOpenVideo,
}: {
  onOpenConsult: () => void;
  onOpenVideo: () => void;
}) {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#070D18] text-white overflow-hidden pt-20 min-h-[680px] sm:min-h-[740px] lg:h-[calc(100vw*821/1916+80px)] lg:max-h-[901px] flex items-center"
    >
      {/* Full Uncropped High-Definition Background Image positioned cleanly below the 80px fixed header */}
      <div className="absolute inset-0 top-20 z-0">
        <Image
          src="/images/web/hero-balcony.png"
          alt="Dr. Tarun Rochwani - Negotiation Architecture"
          fill
          sizes="100vw"
          className="object-cover object-top sm:object-center"
          priority
        />
        {/* Subtle, soft architectural gradient on the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#070D18]/70 via-40% to-transparent pointer-events-none" />

        {/* Seamless edge transitions */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#070D18]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#070D18] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container shifted down with clear spacing */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10 pt-8 sm:pt-12 lg:pt-10 pb-12 sm:pb-16 flex items-center">
        <div className="max-w-xl lg:max-w-[580px] xl:max-w-[620px] flex flex-col justify-center">
          {/* Eyebrow Categories */}
          <div className="flex items-center gap-2 flex-wrap mb-4 sm:mb-5">
            <span className="text-[#C89B59] font-sans font-semibold tracking-[0.2em] text-xs sm:text-[13px] uppercase">
              NEGOTIATION
            </span>
            <span className="text-[#C89B59]/40 font-mono text-xs">|</span>
            <span className="text-[#C89B59] font-sans font-semibold tracking-[0.2em] text-xs sm:text-[13px] uppercase">
              PERSUASION
            </span>
            <span className="text-[#C89B59]/40 font-mono text-xs">|</span>
            <span className="text-[#C89B59] font-sans font-semibold tracking-[0.2em] text-xs sm:text-[13px] uppercase">
              STRATEGY
            </span>
            <span className="text-[#C89B59]/40 font-mono text-xs">|</span>
            <span className="text-[#C89B59] font-sans font-semibold tracking-[0.2em] text-xs sm:text-[13px] uppercase">
              HUMAN BEHAVIOUR
            </span>
          </div>

          {/* Editorial Serif Display Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[68px] font-normal leading-[1.04] tracking-[-0.02em] text-white mb-5 sm:mb-6">
            The<br />
            Architecture<br />
            of <span className="text-[#C89B59]">Better</span><br />
            <span className="text-[#C89B59]">Outcomes</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-slate-200 font-sans text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg mb-8 font-normal drop-shadow-sm">
            A research-led approach to negotiation, influence and decision-making for leaders,
            professionals and organisations across industries and geographies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#methodology"
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore the Methodology</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenVideo}
              className="border border-white/20 hover:border-white/50 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white font-sans font-medium text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full transition-all flex items-center justify-center gap-3 group cursor-pointer shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C89B59] group-hover:text-slate-950 transition-colors">
                <Play className="w-2.5 h-2.5 fill-current translate-x-0.5" />
              </div>
              <span>Watch Introduction</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 3: KEY PILLARS RIBBON
// =========================================================================

function PillarsBar() {
  const pillars = [
    {
      title: "Research-Led Methodology",
      subtitle: "Grounded in negotiation science",
      icon: BookOpen,
    },
    {
      title: "Real-World Experience",
      subtitle: "From boardrooms to complex deals",
      icon: Building2,
    },
    {
      title: "Practical & Actionable",
      subtitle: "Tools you can use immediately",
      icon: Wrench,
    },
    {
      title: "Global Perspective",
      subtitle: "Relevant across industries and cultures",
      icon: Globe,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] border-y border-slate-200/90 py-7 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-4 sm:px-6 py-2 group hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#C89B59]/10 text-[#C89B59] flex items-center justify-center shrink-0 group-hover:bg-[#C89B59] group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-[15px] text-[#111827] leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 4: WHAT IS NEGOTIATION ARCHITECTURE
// =========================================================================

function WhatIsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section id="about" className="w-full bg-[#F9F8F5] py-20 sm:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-4">
              WHAT IS NEGOTIATION ARCHITECTURE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] text-[#111827] mb-6">
              A Structured Approach to Human Decisions
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8">
              Negotiation Architecture is a research-based framework that integrates strategy,
              human behaviour, influence and structured thinking to help individuals and
              organisations achieve better outcomes in complex interactions.
            </p>

            <div className="flex items-center gap-6 sm:gap-8 flex-wrap pt-2">
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3.5 rounded-full transition-all flex items-center gap-2 group shadow-sm hover:shadow-lg hover:shadow-[#C89B59]/20 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Dr. Tarun Rochwani Executive Signature */}
              <div className="flex items-center gap-4 pl-1 sm:pl-3 border-l border-slate-200/90 py-1">
                <div className="flex flex-col select-none">
                  <div className="relative inline-flex items-center">
                    <span className="font-signature text-3xl sm:text-[36px] text-[#1E293B] tracking-wide font-normal -rotate-2 transform leading-tight py-0.5 inline-block">
                      Dr. Tarun Rochwani
                    </span>
                    <svg
                      className="absolute -bottom-1 left-2 w-36 h-2 text-[#C89B59]/70 pointer-events-none"
                      viewBox="0 0 144 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5.5C35 2 85 1.5 142 5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.22em] uppercase font-sans font-semibold text-slate-400 pl-1 -mt-0.5">
                    Dr. Tarun L. Rochwani, DBA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stack Diagram with 6 Labels */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-[#080E1B] group">
              <Image
                src="/images/web/isometric-architecture.png"
                alt="Negotiation Architecture Multi-Tier Structure"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Top Left: Strategy */}
              <div className="absolute top-4 left-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg">
                <div className="font-sans font-semibold text-xs text-white">Strategy</div>
                <div className="font-sans text-[11px] text-[#C89B59]">The bigger picture</div>
              </div>

              {/* Middle Left: Behaviour */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg">
                <div className="font-sans font-semibold text-xs text-white">Behaviour</div>
                <div className="font-sans text-[11px] text-[#C89B59]">Understanding people</div>
              </div>

              {/* Bottom Left: Communication */}
              <div className="absolute bottom-4 left-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg">
                <div className="font-sans font-semibold text-xs text-white">Communication</div>
                <div className="font-sans text-[11px] text-[#C89B59]">Clarity and impact</div>
              </div>

              {/* Top Right: Leverage */}
              <div className="absolute top-4 right-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg text-right">
                <div className="font-sans font-semibold text-xs text-white">Leverage</div>
                <div className="font-sans text-[11px] text-[#C89B59]">Creating options</div>
              </div>

              {/* Middle Right: Relationships */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg text-right">
                <div className="font-sans font-semibold text-xs text-white">Relationships</div>
                <div className="font-sans text-[11px] text-[#C89B59]">Long-term value</div>
              </div>

              {/* Bottom Right: Outcomes */}
              <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg text-right">
                <div className="font-sans font-semibold text-xs text-white">Outcomes</div>
                <div className="font-sans text-[11px] text-[#C89B59]">Sustainable results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 5: THE METHODOLOGY (5-Step Framework)
// =========================================================================

function MethodologySection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Map the context, stakeholders and true interests.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Analyse",
      desc: "Identify leverage, risk and opportunities.",
      icon: TrendingUp,
    },
    {
      num: "03",
      title: "Design",
      desc: "Create strategic options and influence approach.",
      icon: LayersIcon,
    },
    {
      num: "04",
      title: "Engage",
      desc: "Execute with clarity, adaptability and trust.",
      icon: Users,
    },
    {
      num: "05",
      title: "Achieve",
      desc: "Deliver and sustain better outcomes.",
      icon: Award,
    },
  ];

  function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }

  return (
    <section id="methodology" className="w-full bg-[#070E1A] text-white py-24 sm:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[#C89B59] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-3 block">
            THE METHODOLOGY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight text-white mb-5">
            A Tested Framework for Real-World Impact
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            The Negotiation Architecture methodology integrates principles from negotiation
            science, behavioural insights and real-world experience into a structured, practical
            framework.
          </p>
          <button
            onClick={onOpenConsult}
            className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore the Framework</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5-Step Connected Progression */}
        <div className="relative mt-16">
          {/* Golden connecting line (hidden on small mobile) */}
          <div className="hidden lg:block absolute top-[36px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[#C89B59]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  {/* Number Badge with Golden Ring */}
                  <div className="relative w-[72px] h-[72px] rounded-full bg-[#0E1B2F] border-2 border-[#C89B59]/50 flex flex-col items-center justify-center mb-6 group-hover:border-[#C89B59] group-hover:scale-105 transition-all shadow-[0_0_20px_rgba(200,155,89,0.15)]">
                    <Icon className="w-4 h-4 text-[#C89B59] mb-0.5" />
                    <span className="font-mono text-xs font-bold text-white tracking-wider">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#C89B59] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 6: WHO IT IS FOR
// =========================================================================

function AudienceSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const audiences = [
    {
      id: "01",
      title: "Business Leaders",
      subtitle: "C-Suite, Managing Directors & Board Members",
      desc: "Navigating high-stakes enterprise strategy, M&A alignments, shareholder governance, and organizational transformation.",
      icon: Users,
    },
    {
      id: "02",
      title: "Entrepreneurs & Founders",
      subtitle: "Startup & Scale-up Leadership",
      desc: "Securing venture funding rounds, equity terms, strategic co-founder alignments, and critical tier-one partnerships.",
      icon: Lightbulb,
    },
    {
      id: "03",
      title: "Procurement & Supply Chain",
      subtitle: "Sourcing & Category Directors",
      desc: "Engineering structural supplier leverage, multi-year master service agreements, and defensible margin preservation.",
      icon: Package,
    },
    {
      id: "04",
      title: "Sales Leaders",
      subtitle: "Enterprise Account & Commercial Heads",
      desc: "Winning complex multi-stakeholder enterprise deals, defending pricing integrity, and aligning long-term value.",
      icon: TrendingUp,
    },
    {
      id: "05",
      title: "Project & Commercial Professionals",
      subtitle: "Contracts, Tenders & Delivery Managers",
      desc: "Administering major EPC contracts, mitigating scope variations, and defusing multimillion-dollar contractor disputes.",
      icon: Compass,
    },
    {
      id: "06",
      title: "Consultants & Advisors",
      subtitle: "Strategy & Transaction Partners",
      desc: "Structuring high-impact advisory mandates, strategic fees, board mediation, and complex cross-border restructuring.",
      icon: Briefcase,
    },
    {
      id: "07",
      title: "Coaches & Trainers",
      subtitle: "Executive Educators & Capability Builders",
      desc: "Embedding systematic behavioral frameworks, simulation labs, and sustainable negotiation muscle within teams.",
      icon: Award,
    },
    {
      id: "08",
      title: "Academics & Researchers",
      subtitle: "Scholars & Thought Leaders",
      desc: "Deepening theoretical rigor through empirical behavioral science, game theory, and modern deal architecture.",
      icon: GraduationCap,
    },
    {
      id: "09",
      title: "Negotiators Across Industries",
      subtitle: "Diplomats, Public Sector & Legal Counsel",
      desc: "Facilitating multi-party consensus, public policy pacts, dispute resolution, and high-scrutiny stakeholder accords.",
      icon: Scale,
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F5] py-20 sm:py-28 border-t border-b border-slate-200/70">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B59]/10 border border-[#C89B59]/25 text-[#A8741F] font-sans font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              <span>Target Profiles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-[1.15] tracking-tight">
              Designed for Professionals<br className="hidden sm:block" /> Across Industries
            </h2>
          </div>

          <div className="lg:max-w-md flex flex-col items-start lg:items-end">
            <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 lg:text-right">
              The principles and frameworks are engineered for high-stake environments across sectors, roles, and geographies — wherever decisions carry significant consequence.
            </p>
            <button
              onClick={onOpenConsult}
              className="group bg-[#070D18] hover:bg-[#C89B59] text-white hover:text-slate-950 font-sans font-medium text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#C89B59]/20"
            >
              <span>Explore Custom Alignment</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3x3 Premium Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 hover:border-[#C89B59]/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(200,155,89,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon & Numerical ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] group-hover:bg-[#C89B59]/15 border border-slate-200/60 group-hover:border-[#C89B59]/30 text-slate-700 group-hover:text-[#A8741F] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#A8741F] transition-colors tracking-wider">
                      {aud.id}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-slate-900 group-hover:text-[#A8741F] transition-colors leading-snug mb-1.5">
                    {aud.title}
                  </h3>
                  <div className="text-[12px] font-sans font-semibold tracking-wide text-slate-500 uppercase mb-3.5">
                    {aud.subtitle}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-slate-600 text-[13.5px] leading-relaxed mb-6">
                    {aud.desc}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-sans font-semibold text-slate-400 group-hover:text-[#A8741F] transition-colors">
                  <span className="tracking-wide">Applicable Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 7: PROFESSIONAL EXPERIENCE
// =========================================================================

function ExperienceSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const credentials = [
    {
      metric: "25+",
      label: "Years of Professional Experience",
      icon: Trophy,
    },
    {
      metric: "Global",
      label: "Exposure Across Industries",
      icon: Globe,
    },
    {
      metric: "Research-Based",
      label: "Negotiation Methodology",
      icon: BookOpen,
    },
    {
      metric: "Speaking",
      label: "at Leading Forums",
      icon: Mic,
    },
  ];

  return (
    <section className="w-full bg-[#080E1B] text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#C89B59] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-4 block">
              PROFESSIONAL EXPERIENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.1] text-white mb-6">
              Real-World Perspective.<br />
              Proven Credibility.
            </h2>
            <p className="font-sans text-slate-300 text-base sm:text-[17px] leading-relaxed mb-8">
              A unique combination of academic insight, real-world negotiation experience and
              research-led thinking.
            </p>
            <div>
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>About Dr. Tarun Rochwani</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Center Column: Portrait of Dr. Tarun Rochwani */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/web/standing-terrace.png"
                alt="Dr. Tarun Rochwani"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "73% 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

              {/* Executive Credential Badge at base of portrait */}
              <div className="absolute bottom-4 inset-x-4 bg-[#080E1B]/85 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <div className="font-serif text-white text-base font-normal leading-tight">
                    Dr. Tarun Rochwani
                  </div>
                  <div className="font-sans text-[#C89B59] text-[11px] font-medium tracking-wide">
                    Theorist & Strategic Advisor
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#C89B59]/20 flex items-center justify-center text-[#C89B59] shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Credential Callouts */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C89B59]/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-[#C89B59]/15 text-[#C89B59] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-white font-normal leading-none">
                      {cred.metric}
                    </div>
                    <div className="font-sans text-xs text-slate-400 mt-1 leading-tight">
                      {cred.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 8: PROGRAMS & COACHING
// =========================================================================

function ProgramsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const programs = [
    {
      title: "Executive Coaching",
      desc: "Personalised coaching for leaders and decision-makers.",
      image: "/images/web/coaching-advisory.png",
    },
    {
      title: "Corporate Programs",
      desc: "Customised programs for teams and organisations.",
      image: "/images/web/corporate-boardroom.png",
    },
    {
      title: "Workshops & Masterclasses",
      desc: "Interactive learning for practical impact.",
      image: "/images/web/masterclass-hall.png",
    },
  ];

  return (
    <section id="programs" className="w-full bg-[#F9F8F5] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-3 block">
              PROGRAMS & COACHING
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#111827] leading-tight">
              Build Your Negotiation Capability
            </h2>
          </div>

          <div className="lg:max-w-md flex flex-col items-start lg:items-end">
            <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 lg:text-right">
              Practical, structured and high-impact programs designed for individuals, teams and
              organisations.
            </p>
            <button
              onClick={onOpenConsult}
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#111827] mb-2 group-hover:text-[#A8741F] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>
                <button
                  onClick={onOpenConsult}
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 border border-slate-300 hover:border-[#C89B59] px-5 py-2.5 rounded-full text-xs font-semibold text-slate-800 hover:text-[#A8741F] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 9: RESEARCH & INSIGHTS
// =========================================================================

function ResearchSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const articles = [
    {
      title: "The Psychology of Concession",
      image: "/images/web/insight_2_hd.jpg",
    },
    {
      title: "Creating and Managing Leverage",
      image: "/images/web/insight_3_hd.jpg",
    },
    {
      title: "Negotiation in a Complex World",
      image: "/images/web/insight_1_hd.jpg",
    },
  ];

  return (
    <section id="research" className="w-full bg-[#070E1A] text-white py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#C89B59] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-4 block">
              RESEARCH & INSIGHTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-white mb-6">
              Advancing the Science of Negotiation
            </h2>
            <p className="font-sans text-slate-300 text-base leading-relaxed mb-8">
              Articles, research, frameworks and practical insights for better decision-making.
            </p>
            <div>
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Editorial Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="bg-[#0D182B] border border-white/10 rounded-xl overflow-hidden hover:border-[#C89B59]/60 transition-all group flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col grow justify-between">
                  <h4 className="font-serif text-lg text-white mb-4 group-hover:text-[#C89B59] transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <a
                    href="#insights"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C89B59] hover:text-[#D9AB64] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 10: SPEAKING & THOUGHT LEADERSHIP
// =========================================================================

function SpeakingSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section className="w-full bg-[#FFFFFF] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-4 block">
              SPEAKING & THOUGHT LEADERSHIP
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-[#111827] mb-6">
              Keynote Speaker<br />at Global Forums
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8">
              Sharing practical insights on negotiation, strategy, leadership and human behaviour
              at leading conferences and institutions worldwide.
            </p>
            <div>
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer shadow-sm"
              >
                <span>View Speaking Engagements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Stage Image with "NEGOTIATION STRATEGY By Tarun Rochwani" */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <Image
                src="/images/web/global-summit.png"
                alt="Dr. Tarun Rochwani Keynote Speaker at Global Forums"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 11: SELECTED ENGAGEMENTS LOGOS
// =========================================================================

function LogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] border-y border-slate-200/80 py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.25em] uppercase block mb-1">
              SELECTED ENGAGEMENTS
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#111827] font-normal">
              Academic Institutions, Global Enterprises & Executive Forums
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#C89B59] hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-[#A8741F] transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#C89B59] hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-[#A8741F] transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Brand Logos Carousel / Grid */}
        <div
          ref={scrollRef}
          className="flex items-center justify-between gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
        >
          {/* 1. Harvard Law School */}
          <div className="flex items-center gap-3 shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <div className="w-9 h-10 shrink-0 relative flex items-center justify-center">
              <svg className="w-9 h-10" viewBox="0 0 32 36" fill="none">
                <path d="M16 2L3 5.5V18C3 27 16 34 16 34C16 34 29 27 29 18V5.5L16 2Z" fill="#A51C30" />
                <rect x="7" y="8" width="8" height="6" rx="0.5" fill="white" />
                <rect x="17" y="8" width="8" height="6" rx="0.5" fill="white" />
                <rect x="12" y="16" width="8" height="6" rx="0.5" fill="white" />
                <text x="11" y="12.5" fontSize="3.8" fontFamily="serif" fontWeight="bold" fill="#A51C30" textAnchor="middle">VE</text>
                <text x="21" y="12.5" fontSize="3.8" fontFamily="serif" fontWeight="bold" fill="#A51C30" textAnchor="middle">RI</text>
                <text x="16" y="20.5" fontSize="3.8" fontFamily="serif" fontWeight="bold" fill="#A51C30" textAnchor="middle">TAS</text>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-sm tracking-wider text-slate-900 group-hover:text-[#A51C30] transition-colors">
                HARVARD
              </span>
              <span className="font-serif text-[10px] tracking-widest text-slate-500 font-semibold">
                LAW SCHOOL
              </span>
            </div>
          </div>

          {/* 2. Middle East Procuretech */}
          <div className="flex items-center gap-3 shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-[#003366] flex items-center justify-center text-white font-sans font-black text-xs shrink-0 shadow-sm">
              ME
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-semibold text-xs text-[#003366] tracking-tight">
                Middle East
              </span>
              <span className="font-sans font-black text-base text-[#002244] tracking-tight">
                Procuretech
              </span>
              <span className="font-sans text-[8px] tracking-widest text-slate-400 uppercase mt-0.5 font-medium">
                Summit & Awards
              </span>
            </div>
          </div>

          {/* 3. ivalua */}
          <div className="flex items-center shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-black text-2xl text-[#002855] tracking-tight lowercase">
                <span className="text-[#00B4D8]">i</span>valua
              </span>
              <svg className="w-16 h-2 -mt-0.5" viewBox="0 0 64 8" fill="none">
                <path d="M2 2C22 7 42 7 62 2" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* 4. hellmann Worldwide Logistics */}
          <div className="flex flex-col shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <div className="flex items-center leading-none">
              <span className="font-sans font-black text-2xl text-[#E30613] tracking-tighter lowercase">
                hellmann
              </span>
              <span className="text-[#E30613] text-[10px] font-bold ml-0.5 -mt-2">®</span>
            </div>
            <span className="font-sans text-[8px] font-bold text-slate-600 tracking-[0.2em] uppercase mt-1">
              WORLDWIDE LOGISTICS
            </span>
          </div>

          {/* 5. Procol */}
          <div className="flex items-center gap-2.5 shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 28 28" fill="none">
              <circle cx="7" cy="7" r="3.5" fill="#3B82F6" />
              <circle cx="21" cy="7" r="3.5" fill="#10B981" />
              <circle cx="14" cy="21" r="4" fill="#6366F1" />
              <line x1="7" y1="7" x2="14" y2="21" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="21" y1="7" x2="14" y2="21" stroke="#CBD5E1" strokeWidth="2" />
            </svg>
            <span className="font-sans font-extrabold text-xl text-slate-900 tracking-tight">
              Procol
            </span>
          </div>

          {/* 6. Promena */}
          <div className="flex items-center gap-2.5 shrink-0 py-2 px-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50/70 transition-all group cursor-default">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="#F58220" strokeWidth="2.5" />
              <circle cx="14" cy="14" r="5.5" stroke="#F58220" strokeWidth="2.5" />
              <circle cx="14" cy="14" r="2" fill="#F58220" />
            </svg>
            <span className="font-sans font-bold text-xl text-slate-900 tracking-tight">
              Promena
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 12: CLIENT FEEDBACK (Testimonials)
// =========================================================================

function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote:
        "Practical, insightful and immediately applicable. A unique blend of theory and real-world experience.",
      author: "Global Procurement Leader",
    },
    {
      quote:
        "Exceptionally structured and research-driven. One of the most valuable negotiation programs I have attended.",
      author: "Corporate Executive",
    },
    {
      quote:
        "Brings complex concepts to life with clarity and real-world examples. Highly recommended.",
      author: "Business Leader",
    },
  ];

  return (
    <section className="w-full bg-[#F9F8F5] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-14">
          <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-3 block">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111827] leading-tight">
            Trusted by Leaders and Organisations
          </h2>
        </div>

        {/* 3 Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#C89B59] hover:shadow-md transition-all"
            >
              <div>
                <span className="font-serif text-4xl text-[#C89B59] leading-none mb-4 block">
                  “
                </span>
                <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {t.quote}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="font-sans font-semibold text-xs text-slate-900 uppercase tracking-wider block">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2 rounded-full transition-all ${
                activeIdx === i ? "w-6 bg-[#C89B59]" : "w-2 bg-slate-300"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 13: CALL TO ACTION BANNER (Ready to Design Better Outcomes?)
// =========================================================================

function OutcomeCtaSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section className="w-full bg-[#070D18] text-white py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#080E1B] via-[#0E1A2F] to-[#12223F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-10">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 leading-tight">
                Ready to Design<br />Better Outcomes?
              </h2>
              <p className="font-sans text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
                Explore how Negotiation Architecture can support your personal and organisational
                goals.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsult}
                  className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#contact"
                  className="border border-white/20 hover:border-white/50 bg-white/5 text-white font-sans font-medium text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Architectural Graphic */}
            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[340px]">
              <Image
                src="/images/web/keynote-speaking.png"
                alt="Negotiation Architecture Practice"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080E1B] via-[#080E1B]/50 to-transparent lg:block hidden pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B] via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 14: LATEST INSIGHTS
// =========================================================================

function LatestInsightsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const articles = [
    {
      title: "Negotiation in a Complex and Uncertain World",
      date: "12 Sep 2024",
      image: "/images/web/insight_1_hd.jpg",
    },
    {
      title: "The Role of Behaviour in Negotiation Outcomes",
      date: "05 Sep 2024",
      image: "/images/web/insight_2_hd.jpg",
    },
    {
      title: "Building Long-Term Value Through Strategic Negotiation",
      date: "28 Aug 2024",
      image: "/images/web/insight_3_hd.jpg",
    },
  ];

  return (
    <section id="insights" className="w-full bg-[#FAF9F6] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-3 block">
              LATEST INSIGHTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#111827] leading-tight">
              Articles, Ideas and Perspectives
            </h2>
          </div>

          <div className="lg:max-w-md flex flex-col items-start lg:items-end">
            <p className="font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4 lg:text-right">
              Explore the latest articles on negotiation, influence, strategy and decision-making.
            </p>
            <button
              onClick={onOpenConsult}
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col grow justify-between">
                <div>
                  <span className="font-mono text-xs text-slate-400 block mb-2">
                    {art.date}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#111827] mb-4 group-hover:text-[#A8741F] transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#A8741F] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 15: A GLOBAL PERSPECTIVE
// =========================================================================

function GlobalPerspectiveSection() {
  const stats = [
    { value: "25+", label: "Countries", icon: Globe },
    { value: "100+", label: "Organizations", icon: Building2 },
    { value: "5000+", label: "Professionals Trained", icon: Users },
  ];

  return (
    <section className="w-full bg-[#060B14] text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        {/* Header */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-white mb-3 leading-tight">
          A Global Perspective
        </h2>
        <p className="font-sans text-slate-400 text-sm sm:text-base mb-12">
          Relevant across industries, cultures and geographies.
        </p>

        {/* World Map Display */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-14 shadow-2xl bg-[#091120]">
          <Image
            src="/images/web/global-world-map.jpg"
            alt="Global Footprint World Map"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
          />
          {/* Subtle perimeter vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/60 via-transparent to-[#060B14]/40 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

          {/* Golden Pulse Node Markers on Major Global Hubs */}
          <div className="absolute top-[37%] left-[23%]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#C89B59] animate-ping opacity-75" />
            <div className="w-2 h-2 rounded-full bg-[#C89B59] absolute inset-[3px] border border-white shadow-sm" />
          </div>

          <div className="absolute top-[28%] left-[48%]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#C89B59] animate-ping opacity-75 delay-300" />
            <div className="w-2 h-2 rounded-full bg-[#C89B59] absolute inset-[3px] border border-white shadow-sm" />
          </div>

          <div className="absolute top-[43%] left-[61%]">
            <div className="w-4 h-4 rounded-full bg-[#C89B59] animate-ping opacity-90 delay-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C89B59] absolute inset-[3px] border border-white shadow-sm" />
          </div>

          <div className="absolute top-[56%] left-[76%]">
            <div className="w-3.5 h-3.5 rounded-full bg-[#C89B59] animate-ping opacity-75 delay-700" />
            <div className="w-2 h-2 rounded-full bg-[#C89B59] absolute inset-[3px] border border-white shadow-sm" />
          </div>
        </div>

        {/* 3 Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="flex flex-col items-center pt-4 sm:pt-0">
                <Icon className="w-5 h-5 text-[#C89B59] mb-2" />
                <span className="font-serif text-4xl sm:text-5xl text-white font-normal leading-none mb-1">
                  {st.value}
                </span>
                <span className="font-sans text-xs text-slate-400 uppercase tracking-wider">
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 16: FREQUENTLY ASKED QUESTIONS
// =========================================================================

function FaqSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Negotiation Architecture?",
      a: "Negotiation Architecture is a proprietary, research-grounded discipline developed by Dr. Tarun Rochwani that bridges behavioral economics, tactical game theory, cognitive science, and empirical dealmaking into an engineered framework for high-stakes decision-makers.",
    },
    {
      q: "Who can benefit from these programs?",
      a: "Senior executives, corporate deal teams, procurement and supply chain heads, investment principals, commercial advisors, and founders whose conversational outcomes carry substantial enterprise consequence.",
    },
    {
      q: "Are the programs industry-specific?",
      a: "The core methodology applies across sectors. For institutional clients, simulations and modules are customized to your specific vertical—whether technology, energy, supply chain, financial services, or sovereign advisory.",
    },
    {
      q: "Do you offer personalised coaching?",
      a: "Yes. Dr. Tarun Rochwani provides private, 1-on-1 strategic advisory and real-time shadow deal preparation for CEOs, boardroom directors, and lead negotiators facing active high-value discussions.",
    },
    {
      q: "Can the methodology be applied globally?",
      a: "Yes. The architecture explicitly integrates cross-cultural behavioral dynamics and multi-jurisdictional bargaining norms, proven across engagements in North America, Europe, the Middle East, and Asia.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-3 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#111827] leading-tight mb-5">
              Common Questions
            </h2>
            <p className="font-sans text-slate-600 text-base leading-relaxed mb-8">
              Find answers to common questions about the methodology, programs and possible
              engagement formats.
            </p>
            <div>
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer py-1"
                  >
                    <span className="font-sans font-semibold text-base sm:text-[17px] text-slate-900 group-hover:text-[#A8741F] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 group-hover:border-[#A8741F] group-hover:text-[#A8741F] transition-colors shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-sm sm:text-[15px] text-slate-600 mt-3 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 17: START A CONVERSATION
// =========================================================================

function ContactSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section id="contact" className="w-full bg-[#F7F6F2] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#A8741F] font-sans font-semibold text-xs tracking-[0.22em] uppercase mb-4 block">
              LET&apos;S CONNECT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-tight text-[#111827] mb-6">
              Start a Conversation
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8">
              Discuss your goals and explore how Negotiation Architecture can support you or your
              organisation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsult}
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 font-sans font-medium text-sm px-7 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsult}
                className="border border-slate-300 hover:border-slate-800 bg-white text-slate-800 font-sans font-medium text-sm px-7 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Marina Photo with Dr. Tarun */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl group">
              <Image
                src="/images/web/seated-executive.png"
                alt="Dr. Tarun Rochwani - Negotiation Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 18: FOOTER
// =========================================================================

function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="w-full bg-[#050A14] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3.5 group mb-4">
              <Image
                src="/images/brand/na-monogram-white.png"
                alt="NA Monogram"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-sans font-bold text-sm tracking-[0.14em] uppercase">
                  Negotiation
                </span>
                <span className="text-[#C89B59] font-sans font-bold text-xs tracking-[0.14em] uppercase">
                  Architecture<sup className="text-[9px] font-normal">®</sup>
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-slate-400 tracking-wider uppercase mt-2">
              Negotiation | Persuasion | Strategy | Human Behaviour
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-slate-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-slate-400">
              <li>
                <a href="#hero" className="hover:text-[#C89B59] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C89B59] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#C89B59] transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#C89B59] transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C89B59] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-slate-300 mb-2">
              Subscribe for Insights
            </h4>
            <p className="font-sans text-xs text-slate-400 mb-4">
              Get the latest articles and updates.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
              className="flex items-center gap-2 mb-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-[#0E1626] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C89B59] grow"
              />
              <button
                type="submit"
                className="bg-[#C89B59] hover:bg-[#D9AB64] text-slate-950 p-2.5 rounded-lg shrink-0 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <span className="text-xs text-[#C89B59] block -mt-4 mb-4">
                Thank you for subscribing!
              </span>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C89B59] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C89B59] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C89B59] transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C89B59] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <div>© 2026 Negotiation Architecture. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =========================================================================
// MAIN HOME PAGE EXPORT
// =========================================================================

export function NegotiationHome() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080E1B] text-[#111827]">
      {/* 1. Header */}
      <SiteHeader onOpenConsult={() => setConsultOpen(true)} />

      {/* 2. Hero */}
      <HeroSection
        onOpenConsult={() => setConsultOpen(true)}
        onOpenVideo={() => setVideoOpen(true)}
      />

      {/* 3. 4 Pillars Bar */}
      <PillarsBar />

      {/* 4. What is Negotiation Architecture */}
      <WhatIsSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 5. The Methodology (5 Steps) */}
      <MethodologySection onOpenConsult={() => setConsultOpen(true)} />

      {/* 6. Who It Is For (9 Categories) */}
      <AudienceSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 7. Professional Experience */}
      <ExperienceSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 8. Programs & Coaching (3 Cards) */}
      <ProgramsSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 9. Research & Insights (3 Cards) */}
      <ResearchSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 10. Speaking & Thought Leadership */}
      <SpeakingSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 11. Selected Engagements Logos */}
      <LogosSection />

      {/* 12. Client Feedback (Testimonials) */}
      <TestimonialsSection />

      {/* 13. Outcome CTA Banner */}
      <OutcomeCtaSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 14. Latest Insights */}
      <LatestInsightsSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 15. A Global Perspective */}
      <GlobalPerspectiveSection />

      {/* 16. Frequently Asked Questions */}
      <FaqSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 17. Start a Conversation */}
      <ContactSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 18. Footer */}
      <SiteFooter />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}
