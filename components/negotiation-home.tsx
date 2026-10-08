"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BaseHeroBanner } from "./base-hero-banner";
import { GlobalMap } from "./global-map";
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
  Plus,
  Minus,
  Check,
  X,
  Menu,
} from "lucide-react";

// =========================================================================
// MODALS
// =========================================================================

export function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
    </motion.div>
      )}
    </AnimatePresence>
  );
}

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
            src="/website pictures formal and informal/IMG_7043.jpeg"
            alt="Dr. Tarun Rochwani"
            fill
            className="editorial-photo object-cover opacity-25 pointer-events-none"
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
    </motion.div>
      )}
    </AnimatePresence>
  );
}

// =========================================================================
// SECTION 1: HEADER & NAVIGATION
// =========================================================================

export function SiteHeader({ onOpenConsult }: { onOpenConsult: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [withinHeroSequence, setWithinHeroSequence] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    let frame = 0;
    const updateVisibility = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      // Match the sequence's start/start → end/end scroll range.
      setWithinHeroSequence(bounds.top < -24 && bounds.bottom > window.innerHeight + 1);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateVisibility);
    };
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(hero);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const hidden = withinHeroSequence && !mobileOpen;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Methodology", href: "/methodology" },
    { label: "Programs", href: "/programs" },
    { label: "Research", href: "/research" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header inert={hidden} data-hidden={hidden} className="site-header fixed top-0 left-0 w-full z-50 bg-[#080E1B]/85 backdrop-blur-md border-b border-white/[0.08]">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[1400px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between"
        >
          {/* Brand Monogram & Wordmark */}
          <Link href="/" className="flex items-center gap-3.5 group">
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
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-sans font-medium text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#C89B59] transition-colors group"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B59] origin-left transition-transform duration-300 ease-out ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsult}
              className="bg-[#C89B59] hover:bg-[#D9AB64] text-white font-sans font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
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
        </motion.div>
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-200 hover:text-[#C89B59] font-sans font-medium py-2 text-base border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsult();
                }}
                className="w-full mt-2 bg-[#C89B59] text-white font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2"
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

// =========================================================================
// SECTION 3: KEY PILLARS RIBBON
// =========================================================================

export function PillarsBar() {
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
                className="flex items-center gap-4 px-4 sm:px-6 py-2 group hover:bg-slate-50/80 rounded-lg transition-colors">
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
// SHARED SECTION PRIMITIVES
// =========================================================================

export function SectionIntro({
  eyebrow,
  title,
  lede,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <span
        className={`block mb-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase ${
          dark ? "text-[#C89B59]" : "text-[#A8741F]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-4xl sm:text-5xl font-normal leading-[1.1] ${
          dark ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 font-sans text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] text-white font-sans font-medium text-sm px-7 py-3 rounded-full transition-colors cursor-pointer"
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

export function TextLink({
  onClick,
  href,
  dark = false,
  children,
}: {
  onClick?: () => void;
  href?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  const cls = `inline-flex items-center gap-1.5 font-sans text-sm font-semibold transition-colors cursor-pointer ${
    dark ? "text-[#C89B59] hover:text-[#D9AB64]" : "text-[#A8741F] hover:text-[#8F6218]"
  }`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        <span>{children}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

// =========================================================================
// SECTION 4: WHAT IS NEGOTIATION ARCHITECTURE (ABOUT)
// =========================================================================

export function WhatIsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section id="about" className="w-full bg-[#F9F8F5] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionIntro
              eyebrow="What is Negotiation Architecture"
              title="A Structured Approach to Human Decisions"
              lede="Negotiation Architecture is a research-based framework that integrates strategy, human behaviour, influence and structured thinking to help individuals and organisations achieve better outcomes in complex interactions."
            />
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryButton onClick={onOpenConsult}>Learn More</PrimaryButton>
              <div className="font-sans text-sm">
                <span className="block font-semibold text-[#111827]">Dr. Tarun L. Rochwani, DBA</span>
                <span className="block text-slate-500">Founder, Negotiation Architecture</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#080E1B]">
              <Image
                src="/website pictures formal and informal/unnamed.jpg"
                alt="Dr. Tarun Rochwani presenting Negotiation Strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="editorial-photo object-cover object-center"
              />
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

export function MethodologySection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const steps = [
    { num: "01", title: "Understand", desc: "Map the context, stakeholders and true interests." },
    { num: "02", title: "Analyse", desc: "Identify leverage, risk and opportunities." },
    { num: "03", title: "Design", desc: "Create strategic options and an influence approach." },
    { num: "04", title: "Engage", desc: "Execute with clarity, adaptability and trust." },
    { num: "05", title: "Achieve", desc: "Deliver and sustain better outcomes." },
  ];

  return (
    <section id="methodology" className="w-full bg-white border-y border-slate-200 py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            eyebrow="The Methodology"
            title="A Tested Framework for Real-World Impact"
            lede="Principles from negotiation science, behavioural insight and real-world experience, brought together in one structured, practical framework."
          />
          <div className="shrink-0">
            <PrimaryButton onClick={onOpenConsult}>Explore the Framework</PrimaryButton>
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-10">
          {steps.map((step) => (
            <li key={step.num} className="border-l-2 border-[#C89B59] pl-5">
              <span className="block font-sans text-xs font-semibold tracking-[0.2em] text-[#A8741F]">
                STEP {step.num}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-[#111827]">{step.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 6: WHO IT IS FOR
// =========================================================================

export function AudienceSection({ onOpenConsult }: { onOpenConsult: () => void }) {
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
    <section className="w-full bg-[#F9F8F5] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            eyebrow="Who It Is For"
            title="Designed for Professionals Across Industries"
            lede="The principles and frameworks are built for high-stakes environments across sectors, roles and geographies, wherever decisions carry significant consequence."
          />
          <div className="shrink-0">
            <PrimaryButton onClick={onOpenConsult}>Explore Custom Alignment</PrimaryButton>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <li
                key={aud.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition-colors hover:border-[#C89B59]/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C89B59]/10 text-[#A8741F]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#111827] leading-snug">{aud.title}</h3>
                <p className="mt-1 font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#A8741F]">
                  {aud.subtitle}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-slate-600">{aud.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 7: PROFESSIONAL EXPERIENCE
// =========================================================================

export function ExperienceSection({ onOpenConsult }: { onOpenConsult: () => void }) {
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
                src="/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG"
                alt="Dr. Tarun Rochwani beside the waterfront"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="editorial-photo object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 35%" }}
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#C89B59]/40 transition-colors">
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

export function ProgramsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const programs = [
    {
      title: "Executive Coaching",
      desc: "Personalised, one-to-one coaching for leaders and decision-makers facing high-stakes negotiations.",
      image: "/website pictures formal and informal/7e8a09bf-3dc9-4a13-a50d-6531d9f916e2 (1).JPG",
      photoAlt: "Seated portrait of Dr. Tarun Rochwani",
    },
    {
      title: "Corporate Programs",
      desc: "Customised programs that build a shared negotiation capability across teams and organisations.",
      image: "/website pictures formal and informal/6647413d-63d3-4bbe-8f51-8cea8c306a97 (1).JPG",
      photoAlt: "Dr. Tarun Rochwani presenting at Procuretech",
    },
    {
      title: "Workshops & Masterclasses",
      desc: "Interactive, case-based sessions designed for immediate practical impact.",
      image: "/website pictures formal and informal/present (1).jpg",
      photoAlt: "Dr. Tarun Rochwani presenting Mastering Negotiations",
    },
  ];

  return (
    <section id="programs" className="w-full bg-[#F9F8F5] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            eyebrow="Programs & Coaching"
            title="Build Your Negotiation Capability"
            lede="Practical, structured and high-impact programs for individuals, teams and organisations."
          />
          <div className="shrink-0">
            <PrimaryButton onClick={onOpenConsult}>View All Programs</PrimaryButton>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <article
              key={prog.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#C89B59]/60 transition-colors flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-100">
                <Image
                  src={prog.image}
                  alt={prog.photoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="editorial-photo object-cover object-center"
                />
              </div>
              <div className="p-7 flex flex-col grow">
                <h3 className="font-serif text-2xl text-[#111827]">{prog.title}</h3>
                <p className="mt-2 mb-6 font-sans text-sm text-slate-600 leading-relaxed grow">
                  {prog.desc}
                </p>
                <div>
                  <TextLink onClick={onOpenConsult}>Learn more</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 9: RESEARCH & INSIGHTS
// =========================================================================

export function ResearchSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const themes = [
    {
      title: "The Psychology of Concession",
      desc: "Why people give ground, and how to structure concessions so they build value rather than erode it.",
    },
    {
      title: "Creating and Managing Leverage",
      desc: "Where leverage really comes from, and how to design it before the conversation begins.",
    },
    {
      title: "Negotiation in a Complex World",
      desc: "Multi-party, cross-border and long-horizon deals, and the frameworks that keep them coherent.",
    },
  ];

  return (
    <section id="research" className="w-full bg-[#070E1A] text-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              dark
              eyebrow="Research"
              title="Advancing the Science of Negotiation"
              lede="Articles, research and frameworks that turn evidence into better decisions."
            />
            <div className="mt-8">
              <PrimaryButton onClick={onOpenConsult}>Explore the Research</PrimaryButton>
            </div>
          </div>

          <ul className="lg:col-span-7 divide-y divide-white/10 border-t border-white/10">
            {themes.map((t) => (
              <li key={t.title} className="py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                <div className="grow">
                  <h3 className="font-serif text-2xl text-white">{t.title}</h3>
                  <p className="mt-2 font-sans text-sm sm:text-[15px] text-slate-400 leading-relaxed max-w-xl">
                    {t.desc}
                  </p>
                </div>
                <div className="shrink-0 sm:pt-2">
                  <TextLink dark href="/insights">
                    Read
                  </TextLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 10: SPEAKING & THOUGHT LEADERSHIP
// =========================================================================

export function SpeakingSection({ onOpenConsult }: { onOpenConsult: () => void }) {
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
                src="/website pictures formal and informal/present (1).jpg"
                alt="Dr. Tarun Rochwani presenting Mastering Negotiations"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="editorial-photo object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 12: CLIENT FEEDBACK (Testimonials)
// =========================================================================

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance the highlighted testimonial
  useEffect(() => {
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % 3), 5000);
    return () => clearInterval(id);
  }, []);

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
              className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#C89B59] hover:shadow-md transition-all">
              {activeIdx === idx && (
                <motion.span
                  layoutId="testimonial-ring"
                  aria-hidden
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="pointer-events-none absolute -inset-px rounded-2xl ring-2 ring-[#C89B59]"
                />
              )}
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

export function OutcomeCtaSection({ onOpenConsult }: { onOpenConsult: () => void }) {
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
                  className="bg-[#C89B59] hover:bg-[#D9AB64] text-white font-sans font-medium text-sm px-7 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-white/50 bg-white/5 text-white font-sans font-medium text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Graphic */}
            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[340px]">
              <Image
                src="/website pictures formal and informal/6647413d-63d3-4bbe-8f51-8cea8c306a97 (1).JPG"
                alt="Dr. Tarun Rochwani speaking at Procuretech"
                fill
                className="editorial-photo object-cover object-center"
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

export function LatestInsightsSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const articles = [
    {
      title: "Negotiation in a Complex and Uncertain World",
      date: "12 Sep 2024",
      image: "/website pictures formal and informal/Presentation (1).jpg",
      photoAlt: "Dr. Tarun Rochwani presenting a negotiation balance scorecard",
    },
    {
      title: "The Role of Behaviour in Negotiation Outcomes",
      date: "05 Sep 2024",
      image: "/website pictures formal and informal/IMG_3560.jpeg",
      photoAlt: "Dr. Tarun Rochwani at the Program on Negotiation event",
    },
    {
      title: "Building Long-Term Value Through Strategic Negotiation",
      date: "28 Aug 2024",
      image: "/website pictures formal and informal/6647413d-63d3-4bbe-8f51-8cea8c306a97 (1).JPG",
      photoAlt: "Dr. Tarun Rochwani discussing negotiation preparation on stage",
    },
  ];

  return (
    <section id="insights" className="w-full bg-[#FAF9F6] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            eyebrow="Latest Insights"
            title="Articles, Ideas and Perspectives"
            lede="The latest thinking on negotiation, influence, strategy and decision-making."
          />
          <div className="shrink-0">
            <PrimaryButton onClick={onOpenConsult}>View All Articles</PrimaryButton>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article key={art.title} className="group flex flex-col">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={art.image}
                  alt={art.photoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="editorial-photo object-cover"
                />
              </div>
              <span className="mt-5 font-sans text-xs tracking-wider uppercase text-slate-500">
                {art.date}
              </span>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl text-[#111827] leading-snug group-hover:text-[#A8741F] transition-colors">
                {art.title}
              </h3>
              <div className="mt-3">
                <TextLink onClick={onOpenConsult}>Read article</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 15: A GLOBAL PERSPECTIVE
// =========================================================================

export function GlobalPerspectiveSection() {
  const stats = [
    { value: "25+", label: "Countries", icon: Globe },
    { value: "100+", label: "Organizations", icon: Building2 },
    { value: "5000+", label: "Professionals Trained", icon: Users },
  ];

  return (
    <section className="w-full bg-[#060B14] text-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <span className="block mb-3 font-sans font-semibold text-xs tracking-[0.22em] uppercase text-[#C89B59]">
          Global Reach
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-[1.1]">
          A Global Perspective
        </h2>
        <p className="mt-4 mb-12 font-sans text-slate-400 text-base">
          Relevant across industries, cultures and geographies.
        </p>

        <GlobalMap />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <div key={st.label} className="flex flex-col items-center pt-4 sm:pt-0">
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

export function FaqSection({ onOpenConsult }: { onOpenConsult: () => void }) {
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
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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

export function ContactSection({ onOpenConsult }: { onOpenConsult: () => void }) {
  return (
    <section id="contact" className="w-full bg-[#F7F6F2] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionIntro
              eyebrow="Contact"
              title="Start a Conversation"
              lede="Discuss your goals and explore how Negotiation Architecture can support you or your organisation."
            />
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryButton onClick={onOpenConsult}>Book a Consultation</PrimaryButton>
              <TextLink onClick={onOpenConsult}>Or send a message</TextLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/website pictures formal and informal/7e8a09bf-3dc9-4a13-a50d-6531d9f916e2 (1).JPG"
                alt="Seated portrait of Dr. Tarun Rochwani"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="editorial-photo object-cover object-center"
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

const FOOTER_SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Methodology", href: "/methodology" },
    { label: "Programs", href: "/programs" },
  ],
  resources: [
    { label: "Research", href: "/research" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050A14] text-white border-t border-[#C89B59]/30">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 py-16 sm:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <Image
                src="/images/brand/na-monogram-white.png"
                alt="NA Monogram"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-white font-sans font-bold text-sm tracking-[0.14em] uppercase group-hover:text-[#C89B59] transition-colors">
                  Negotiation
                </span>
                <span className="text-[#C89B59] font-sans font-bold text-xs tracking-[0.14em] uppercase">
                  Architecture<sup className="text-[9px] font-normal">®</sup>
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-slate-400">
              A research-led framework for negotiation, influence and decision-making, built for
              leaders, professionals and organisations facing complex, high-stakes interactions.
            </p>
            <p className="mt-4 font-sans text-xs tracking-[0.18em] uppercase text-slate-500">
              Negotiation · Persuasion · Strategy · Human Behaviour
            </p>
            <div className="mt-6 flex items-center gap-3">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-[#C89B59] hover:text-[#C89B59]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-[#C89B59] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-sans text-slate-400">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-[#C89B59] mb-5">
              Resources
            </h4>
            <ul className="space-y-3 text-sm font-sans text-slate-400">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-[#C89B59] mb-5">
              Subscribe for Insights
            </h4>
            <p className="font-sans text-sm leading-relaxed text-slate-400">
              Articles on negotiation, influence and strategy, sent occasionally. No noise.
            </p>
            {subscribed ? (
              <p className="mt-5 flex items-center gap-2 font-sans text-sm text-[#C89B59]">
                <Check className="h-4 w-4" />
                Thank you. You are on the list.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="mt-5 flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="grow rounded-full border border-white/10 bg-[#0E1626] px-5 py-3 font-sans text-sm text-white placeholder-slate-500 focus:border-[#C89B59] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C89B59] px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-[#D9AB64] cursor-pointer"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500">
          <p>© {year} Negotiation Architecture. All rights reserved.</p>
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
      <BaseHeroBanner />

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
