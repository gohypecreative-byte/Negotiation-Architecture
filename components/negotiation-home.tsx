"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_ADDRESS, enquiryEmailHref } from "@/lib/contact";
import contactPortraitPhoto from "../public/web-image/8253e3b9-d903-499a-8011-4716bd34e5b7.jpg";
import boardroomPortraitPhoto from "../public/web-image/image.png";
import heroPhoto from "../public/website pictures formal and informal/IMG_7043.jpeg";
import seatedPortraitPhoto from "../public/images/gallery/dr-tarun-03.jpg";
import procuretechPhoto from "../public/images/gallery/dr-tarun-02.jpg";
import masterclassPhoto from "../public/website pictures formal and informal/present (1).jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BaseHeroBanner } from "./base-hero-banner";
import { GlobalMap } from "./global-map";
import { CountUp } from "./count-up";
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
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    setSubmitted(false);
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => panelRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        tabIndex={-1}
        onKeyDown={(event) => {
          if (event.key === "Escape") onClose();
          if (event.key !== "Tab") return;
          const elements = panelRef.current?.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href]');
          if (!elements?.length) return;
          const first = elements[0];
          const last = elements[elements.length - 1];
          if (event.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
            event.preventDefault(); last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault(); first.focus();
          }
        }}
        className="relative w-full max-w-lg max-h-[calc(100dvh-24px)] flex flex-col overflow-hidden bg-[#0C1322] border border-[#C89B59]/30 rounded-2xl text-white shadow-2xl outline-none"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center bg-[#0C1322] text-slate-300 hover:text-white rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div data-lenis-prevent className="overflow-y-auto overscroll-contain p-5 pt-6 sm:p-8">
        {!submitted ? (
          <>
            <div className="mb-5">
              <h3 id="consultation-title" className="pr-10 font-serif text-2xl sm:text-3xl text-white mt-1">
                Book a Consultation
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Engage directly with Dr. Tarun Rochwani for corporate strategy, advisory, or coaching.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                window.location.href = enquiryEmailHref(
                  `Consultation enquiry: ${data.get("interest")}`,
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message") || ""}`,
                );
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="consult-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="consult-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg min-w-0 px-3 py-2.5 text-base text-white focus:outline-none focus:border-[#C89B59] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="consult-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Corporate Email
                </label>
                <input
                  type="email"
                  id="consult-email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="name@organization.com"
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg min-w-0 px-3 py-2.5 text-base text-white focus:outline-none focus:border-[#C89B59] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="consult-interest" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Engagement Interest
                </label>
                <select id="consult-interest" name="interest" className="w-full bg-[#131E33] border border-white/10 rounded-lg min-w-0 px-3 py-2.5 text-base text-white focus:outline-none focus:border-[#C89B59] transition-colors">
                  <option>Executive Coaching & Advisory</option>
                  <option>Corporate & Team Development</option>
                  <option>Negotiation Programmes</option>
                  <option>Keynote Speaking Engagement</option>
                  <option>Strategic Transaction Shadow Advisory</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  How can we help? (optional)
                </label>
                <textarea
                  rows={3}
                  id="consult-message"
                  name="message"
                  placeholder="Briefly describe your goals and timing."
                  className="w-full bg-[#131E33] border border-white/10 rounded-lg min-w-0 px-3 py-2.5 text-base text-white focus:outline-none focus:border-[#C89B59] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#C89B59] hover:bg-[#D9AB64] py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-white font-sans font-medium text-sm tracking-normal"
              >
                <span>Prepare Enquiry Email</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs leading-relaxed text-slate-400">Review and send your enquiry in your email app to <a className="underline break-words" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C89B59]/20 text-[#C89B59] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 id="consultation-title" className="font-serif text-2xl text-white">Send Your Enquiry</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Review and send the draft in your email app. If it did not open, email <a className="underline break-words" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.
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
        </div>
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
            src={heroPhoto}
            alt="Dr. Tarun Rochwani"
            fill
            className="editorial-photo object-cover opacity-25 pointer-events-none"
          />
          <div className="absolute inset-0 bg-[#080E1B]/75 backdrop-blur-[2px] pointer-events-none" />
          <div className="w-20 h-20 rounded-full bg-[#C89B59]/20 border border-[#C89B59]/50 flex items-center justify-center mb-6 relative z-10">
            <Play className="w-8 h-8 text-[#C89B59] translate-x-0.5" />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            The Architecture of Better Outcomes
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mb-8">
            An introduction to doctoral-grounded negotiation methodology, counterparty leverage construction, and executive decision-making.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="bg-[#C89B59] hover:bg-[#D9AB64] px-6 py-2.5 rounded-full transition-colors text-white font-sans font-medium text-sm tracking-normal"
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
          className="max-w-[1400px] mx-auto px-4 sm:px-10 h-20 flex items-center justify-between gap-3"
        >
          {/* Brand Monogram & Wordmark */}
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3.5 group" onClick={() => setMobileOpen(false)}>
            <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
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
          <div className="flex shrink-0 items-center gap-4">
            <button
              onClick={onOpenConsult}
              className="bg-[#C89B59] hover:bg-[#D9AB64] px-5 sm:px-6 py-2.5 rounded-full transition-all hidden lg:flex whitespace-nowrap items-center gap-2 shadow-sm hover:shadow-md cursor-pointer text-white font-sans font-medium text-sm tracking-normal"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center text-white hover:text-[#C89B59] transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-20 z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain bg-[#080E1B] border-b border-white/10 px-6 py-6 lg:hidden"
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
      title: "Research-informed",
      subtitle: "Grounded in doctoral inquiry",
      icon: BookOpen,
    },
    {
      title: "Human-centred",
      subtitle: "People, interests and relationships",
      icon: Building2,
    },
    {
      title: "Practical by design",
      subtitle: "Preparation, application and reflection",
      icon: Wrench,
    },
    {
      title: "Global Perspective",
      subtitle: "Relevant across industries and cultures",
      icon: Globe,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-4 sm:py-7 relative z-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y divide-slate-200/70 sm:divide-y-0 sm:gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-0 sm:px-6 py-4 sm:py-2 group sm:hover:bg-slate-50/80 sm:rounded-lg transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#C89B59]/10 text-[#C89B59] flex items-center justify-center shrink-0 group-hover:bg-[#C89B59] group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-sans font-semibold text-base sm:text-[15px] text-[#111827] leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs max-sm:text-sm text-slate-600 mt-1 leading-relaxed sm:leading-tight">
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
  title,
  lede,
  dark = false,
  className = "",
}: {
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
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
      className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-colors cursor-pointer text-white font-sans font-medium text-sm tracking-normal"
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
    <section id="about" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionIntro
              title="Better Outcomes Begin with Better Understanding"
              lede="No one should rely on instinct alone when a conversation could shape their future."
            />
            <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-slate-600">
              Negotiation is part of everyday life. It shapes leadership, business, partnerships, teams, careers and relationships.
            </p>
            <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-slate-600">
              Negotiation Architecture brings preparation, strategic thinking and behavioural awareness into one connected approach.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-colors cursor-pointer text-white font-sans font-medium text-sm tracking-normal">
                <span>Meet the founder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="font-sans text-sm">
                <span className="block font-semibold text-[#111827]">Dr. Tarun L. Rochwani, DBA</span>
                <span className="block text-slate-500">Founder, Negotiation Architecture</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[440px] aspect-[956/1280] rounded-2xl overflow-hidden bg-[#080E1B]">
              <Image
                src={boardroomPortraitPhoto}
                alt="Dr. Tarun Rochwani standing in a boardroom overlooking the city"
                fill
                sizes="(max-width: 640px) calc(100vw - 48px), 440px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Rigour", title: "Think clearly", description: "Question assumptions. Prepare carefully. Understand what is at stake." },
            { label: "Intention", title: "Act deliberately", description: "Choose with purpose. Do not simply react to pressure." },
            { label: "Durable value", title: "Build what lasts", description: "Seek outcomes that people understand, accept and sustain." },
          ].map((principle) => (
            <article key={principle.label} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{principle.label}</p>
              <h3 className="mt-5 font-serif text-2xl text-[#111827]">{principle.title}</h3>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-slate-600">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 5: THE METHODOLOGY (5-Step Framework)
// =========================================================================

export function MethodologySection({ onOpenConsult }: { onOpenConsult: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const details = [
    { title: "Understand what is really happening.", text: "Start with the people and the situation. Separate stated positions from underlying interests. Define what a useful outcome means.", outcome: "The result: clarity before action." },
    { title: "Analyse interests, choices and the economics.", text: "Look beneath the surface. Weigh priorities, alternatives, influence and dependencies. Then establish what the deal is truly worth.", outcome: "The result: a sharper view of your choices and the value at stake." },
    { title: "Design your approach with intention.", text: "Shape objectives, options, sequence and trade-offs. Prepare for different responses. Stay open to new information.", outcome: "The result: a considered plan with room to adapt." },
    { title: "Engage with clarity and awareness.", text: "Put preparation into practice. Listen closely. Ask purposeful questions. Respond to people and dynamics as they unfold.", outcome: "The result: a more deliberate, constructive exchange." },
    { title: "Achieve an outcome that works.", text: "Clarify what was agreed, who is responsible and what happens next. Reflect, so experience strengthens future capability.", outcome: "The result: clear commitments, follow-through and learning." },
  ];
  const steps = [
    { num: "01", title: "Understand", desc: "Understand the people and situation. Separate stated positions from underlying interests." },
    { num: "02", title: "Analyse", desc: "Weigh priorities and alternatives. Use EXAMIN to identify value, quantify opportunity and test risks." },
    { num: "03", title: "Design", desc: "Shape objectives, options and trade-offs. Prepare a considered plan with room to adapt." },
    { num: "04", title: "Engage", desc: "Listen closely, ask purposeful questions and respond with clarity and awareness." },
    { num: "05", title: "Achieve", desc: "Clarify commitments and next steps. Reflect so experience strengthens future capability." },
  ];

  return (
    <section id="methodology" className="methodology-section w-full bg-white py-12 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-8">
          <SectionIntro
            title={<>A Deliberate Process.<br />Room for Human Judgement.</>}
            lede="Five connected stages. Structure without making negotiation mechanical."
          />
          <div className="shrink-0">
            <TextLink href="/methodology">Explore the full methodology</TextLink>
          </div>
        </div>

        <div className="mt-7 grid items-stretch gap-5 sm:gap-8 sm:mt-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <ol aria-label="Choose a methodology stage" className="methodology-stages grid grid-cols-2 gap-2 sm:gap-1 sm:grid-cols-3 lg:grid-cols-1">
          {steps.map((step, index) => (
            <li key={step.num}>
              <button type="button" onClick={() => setActiveStep(index)} aria-label={`Stage ${step.num}: ${step.title}`} aria-pressed={activeStep === index} aria-controls="methodology-detail" className={`flex w-full cursor-pointer items-center gap-4 border-l-2 px-4 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8741F] ${activeStep === index ? "border-[#C89B59] text-[#111827]" : "border-transparent text-slate-500 hover:text-[#111827]"}`}>
              <span className="font-sans text-xs tabular-nums text-[#A8741F]">
                {step.num}
              </span>
              <span className="font-sans text-lg sm:text-xl font-medium">{step.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <div id="methodology-detail" className="flex min-w-0 flex-col justify-center border-t border-slate-200 pt-5 sm:pt-8 lg:border-t-0 lg:border-l lg:py-6 lg:pl-12">
          <div aria-live="polite" aria-atomic="true">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#A8741F] sm:hidden">{steps[activeStep].title}</p>
            <h3 className="max-w-2xl font-serif text-2xl sm:text-3xl leading-tight text-[#111827]">{details[activeStep].title}</h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600">{details[activeStep].text}</p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#A8741F]">{details[activeStep].outcome}</p>
          </div>
          {activeStep === 1 && (
            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">EXAMIN · Before you negotiate</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">Examine the deal for its economic potential and impact before negotiating its terms.</p>
              <ul className="mt-5 grid gap-5 sm:grid-cols-3">
                {[
                  ["Identify", "The drivers of value."],
                  ["Quantify", "The opportunity, in economic terms."],
                  ["Test", "Assumptions, costs, risks and trade-offs."],
                ].map(([title, text]) => (
                  <li key={title} className="font-sans text-sm leading-relaxed"><strong className="block text-[#111827]">{title}</strong><span className="text-slate-600">{text}</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
        <section aria-labelledby="capability-heading" className="mt-16 border-t border-slate-200 pt-12 sm:mt-20 sm:pt-16">
          <h3 id="capability-heading" className="max-w-3xl font-serif text-3xl sm:text-4xl leading-tight text-[#111827]">
            Four layers. Each supports the next.
          </h3>
          <ol className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Mindset Foundations", text: "Composure, self-awareness and clear thinking under pressure." },
              { title: "Strategic Architecture", text: "Interests, alternatives, stakeholders, options and preparation." },
              { title: "Tactical Execution", text: "Language, influence, concessions and purposeful engagement." },
              { title: "Mastery", text: "Reflection, adaptability and capability built through practice." },
            ].map((layer, index) => (
              <li key={layer.title} className="border-t border-[#C89B59]/60 pt-5">
                <p className="font-sans text-xs font-semibold tracking-[0.14em] text-[#A8741F]">LAYER 0{index + 1}</p>
                <h4 className="mt-4 font-serif text-xl text-[#111827]">{layer.title}</h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-slate-600">{layer.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}

// =========================================================================
// SECTION 6: WHO IT IS FOR
// =========================================================================

export function AudienceSection() {
  const audiences = [
    {
      title: "Leadership & teams",
      desc: "Navigate competing priorities. Influence decisions. Build alignment.",
      icon: Users,
    },
    {
      title: "Business & professional life",
      desc: "Prepare for agreements, partnerships, stakeholder conversations and difficult discussions.",
      icon: Briefcase,
    },
    {
      title: "Everyday relationships",
      desc: "Express interests. Manage disagreement. Find constructive ways forward.",
      icon: Globe,
    },
  ];

  return (
    <section id="applications" aria-labelledby="applications-heading" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
          <div className="max-w-2xl">
            <h2 id="applications-heading" className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] text-[#111827]">
              One Discipline.<br />Many Human Contexts.
            </h2>
            <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-slate-600">
              The principles travel across roles, industries and relationships.
            </p>
          </div>
          <p className="max-w-sm font-sans text-sm sm:text-base leading-relaxed text-slate-500">
            Negotiation shapes commercial deals. It also shapes leadership, collaboration and change.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:mt-12">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <li key={aud.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C89B59]/10 text-[#A8741F]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#111827] leading-snug">{aud.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600">{aud.desc}</p>
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
  return (
    <section id="founder" className="w-full bg-[#080E1B] text-white py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.1] text-white mb-6">
              Dr. Tarun L. Rochwani, DBA
            </h2>
            <p className="font-sans text-white text-xl leading-relaxed mb-5">
              Bringing structure to complex negotiations. Keeping people at the centre.
            </p>
            <div className="space-y-4 mb-7 font-sans text-slate-300 text-base leading-relaxed">
              <p>More than 25 years leading and steering multidisciplinary teams across procurement, supply chain, construction, real estate and facilities management.</p>
              <p>Direct oversight of multi-billion-dollar (USD) portfolios across 26 countries and five continents.</p>
              <p>Doctoral research into negotiation outcomes at Clermont Business School.</p>
            </div>
            <div>
              <Link
                href="/about"
                className="bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer text-white font-sans font-medium text-sm tracking-normal"
              >
                <span>Discover the founder’s story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Center Column: Portrait of Dr. Tarun Rochwani */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={seatedPortraitPhoto}
                alt="Seated portrait of Dr. Tarun Rochwani"
                fill
                sizes="(max-width: 480px) calc(100vw - 48px), 420px"
                className="editorial-photo object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 35%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-2xl pointer-events-none" />

            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
          <div>
            <h3 className="font-sans text-sm font-medium text-[#C89B59]">Academic & Executive Education</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-slate-300">Harvard University · Stanford University · INSEAD</p>
          </div>
          <div>
            <h3 className="font-sans text-sm font-medium text-[#C89B59]">AI & Emerging Technologies</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-slate-300">Indian Institute of Technology Madras (IIT Madras)</p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-slate-400">Agentic AI & Autonomous Systems</p>
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
      title: "Executive Coaching & Advisory",
      desc: "Focused support to prepare for important conversations and strengthen personal capability.",
    },
    {
      title: "Corporate & Team Development",
      desc: "Workshops and tailored learning that strengthen how teams prepare, communicate and decide.",
    },
    {
      title: "Negotiation Programmes",
      desc: "Structured learning in strategic judgement, behavioural awareness and practical skill.",
    },
  ];

  return (
    <section id="programs" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            title={<>Learn the System.<br />Apply It to What Matters.</>}
            lede="From a single conversation to an entire team. Practical support for the situations that matter."
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

export function ResearchSection() {
  return (
    <section id="research" className="w-full bg-[#070E1A] text-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div>
            <SectionIntro
              dark
              title="Grounded in Inquiry. Made Useful in Practice."
              lede="Negotiation Architecture draws on doctoral research, established scholarship and professional experience."
            />
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-300">
              Themes include the psychology of concessions, the sources of leverage and the challenge of aligning multiple interests.
            </p>
            <div className="mt-7">
              <TextLink dark href="/research">Explore the research</TextLink>
            </div>
          </div>
          <aside aria-labelledby="research-focus-heading" className="rounded-2xl border border-white/15 p-7 sm:p-9">
            <h3 id="research-focus-heading" className="font-serif text-2xl sm:text-3xl leading-tight text-white">
              What helps people move from disagreement towards collaboration?
            </h3>
            <p className="mt-5 font-sans text-base leading-relaxed text-slate-300">
              Doctoral research examined negotiation outcomes in UAE supply chain relationships and facilities management. It explores trust, information sharing and conflict resolution.
            </p>
            <p className="mt-6 border-t border-white/15 pt-5 font-sans text-sm leading-relaxed text-slate-400">
              Doctoral study, Clermont Business School. Methodology and findings appear on the Research page.
            </p>
          </aside>
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
    <section className="w-full bg-[#FFFFFF] py-20 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
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
                className="bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer shadow-sm text-white font-sans font-medium text-sm tracking-normal"
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
                src={masterclassPhoto}
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
    <section className="w-full bg-white py-12 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        <div className="mb-7 sm:mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#111827] leading-tight">
            Trusted by Leaders and Organisations
          </h2>
        </div>

        {/* 3 Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
              <blockquote>
                <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {t.quote}
                </p>
              </blockquote>
              <div className="mt-6">
                <span className="font-sans font-medium text-sm text-slate-500 block">
                  {t.author}
                </span>
              </div>
            </div>
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
    <section className="outcome-banner w-full bg-[#070D18] text-white py-10 sm:py-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#080E1B] via-[#0E1A2F] to-[#12223F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-5 sm:p-12 lg:p-16 z-10">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 leading-tight">
                Prepare with Intention.<br />Engage with Clarity.
              </h2>
              <p className="font-sans text-slate-300 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
                Building your capability, preparing for a conversation or strengthening a team?
                Begin with the situation that matters.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenConsult}
                  className="bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-all flex items-center justify-center min-h-12 gap-2 cursor-pointer shadow-md text-white font-sans font-medium text-sm tracking-normal"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-white/50 bg-white/5 text-white font-sans font-medium text-sm px-6 py-3 rounded-full transition-all flex items-center justify-center min-h-12 gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Speaking photo, used only in this banner. */}
            <div className="lg:col-span-5 relative lg:h-full lg:min-h-[340px]">
              <Image
                src={procuretechPhoto}
                sizes="(max-width: 1024px) 100vw, 560px"
                alt="Dr. Tarun Rochwani speaking at Procuretech"
                className="editorial-photo block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover object-center"
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

export function LatestInsightsSection() {
  const articles = [
    {
      title: "Negotiation in a Complex and Uncertain World",
      description: "Separate what is known from what is assumed. Prepare for more than one path.",
      date: "Strategy",
    },
    {
      title: "The Role of Behaviour in Negotiation Outcomes",
      description: "How listening, emotional awareness and the questions we ask can change a conversation.",
      date: "Behaviour",
    },
    {
      title: "Building Durable Value Through Negotiation",
      description: "Look beyond the immediate agreement to the relationships and commitments that follow.",
      date: "Long-term value",
    },
  ];

  return (
    <section id="insights" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionIntro
            title="Insights for the Conversations Ahead"
            lede="Perspectives on negotiation, behaviour and the choices that shape outcomes."
          />
          <div className="shrink-0">
            <TextLink href="/insights">All insights</TextLink>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article key={art.title} className="group flex flex-col">

              <span className="mt-5 font-sans text-xs tracking-wider uppercase text-slate-500">
                {art.date}
              </span>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl text-[#111827] leading-snug group-hover:text-[#A8741F] transition-colors">
                {art.title}
              </h3>
              <p className="mt-3 mb-5 font-sans text-sm sm:text-base leading-relaxed text-slate-600">{art.description}</p>
              <div className="mt-auto">
                <TextLink href="/insights">Read more</TextLink>
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
    { value: "26", label: "Countries", icon: Globe },
    { value: "5", label: "Continents", icon: Building2 },
    { value: "25+", label: "Years of experience", icon: Users },
  ];

  return (
    <section className="global-perspective w-full bg-white text-[#111827] py-12 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] leading-[1.1]">
          A Global Perspective
        </h2>
        <div className="mt-6 sm:mt-12">
          <GlobalMap />
        </div>

        <dl className="mt-5 sm:mt-10 grid grid-cols-3 gap-0 sm:gap-5 max-w-5xl mx-auto text-center sm:text-left divide-x divide-slate-200 sm:divide-x-0 border-t border-slate-200 pt-5 sm:border-t-0 sm:pt-0">
          {stats.map((st) => {
            const Icon = st.icon;
            const [number] = st.value.split("+");
            return (
              <div key={st.label} className="min-w-0 flex flex-col px-2 py-1 sm:block sm:px-7 sm:py-6">
                <dt className="flex justify-center sm:justify-start items-center gap-2.5 font-sans text-sm font-medium text-slate-600">
                  <Icon aria-hidden="true" className="hidden sm:block h-4 w-4 shrink-0 text-[#3779B5]" strokeWidth={1.8} />
                  {st.label}
                </dt>
                <dd className="-order-1 mb-2 sm:mb-0 sm:mt-4 flex justify-center sm:justify-start items-baseline gap-1 font-sans text-3xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-none text-[#183F6C]">
                  <CountUp value={Number(number.replaceAll(",", ""))} /><span className="text-3xl font-normal text-[#3779B5]">{st.value.endsWith("+") ? "+" : ""}</span>
                </dd>
              </div>
            );
          })}
        </dl>
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
      a: "Negotiation Architecture brings preparation, strategic thinking and behavioural awareness into one connected approach. It helps people think clearly, act deliberately and seek outcomes that others understand, accept and sustain.",
    },
    {
      q: "Who can benefit from these programs?",
      a: "Leaders and teams navigating competing priorities, professionals preparing for agreements and partnerships, and people seeking constructive ways through everyday disagreement. The principles travel across roles, industries and relationships.",
    },
    {
      q: "How is negotiation capability developed?",
      a: "Four layers support each other: Mindset Foundations builds composure and self-awareness; Strategic Architecture develops preparation, interests and options; Tactical Execution focuses on language and influence; Mastery grows through reflection, adaptability and practice.",
    },
    {
      q: "Do you offer personalised coaching?",
      a: "Executive Coaching & Advisory offers focused support to prepare for important conversations and strengthen personal capability. Negotiation programmes and tailored team workshops provide further ways to learn and apply the approach.",
    },
    {
      q: "Can the methodology be applied globally?",
      a: "The principles apply across roles, industries and relationships, with room for human judgement in each situation. The founder brings experience overseeing portfolios across 26 countries and five continents.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
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
                className="bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-all inline-flex items-center gap-2 group cursor-pointer text-white font-sans font-medium text-sm tracking-normal"
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
    <section id="contact" className="w-full bg-white py-20 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionIntro
              title="Start a Conversation"
              lede="Building your own capability, preparing for a conversation or strengthening a team? Begin with the situation that matters."
            />
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryButton onClick={onOpenConsult}>Book a Consultation</PrimaryButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[440px] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={contactPortraitPhoto}
                alt="Dr. Tarun Rochwani standing in front of an abstract painting"
                sizes="(max-width: 488px) calc(100vw - 48px), 440px"
                className="editorial-photo block w-full h-auto"
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
    <footer className="w-full bg-[#050A14] text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-5 sm:gap-x-10 gap-y-7 sm:gap-y-8 py-8 sm:py-12">
          {/* Brand */}
          <div className="col-span-2 min-w-0 lg:col-span-4">
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
            <p className="mt-4 max-w-[340px] font-sans text-sm leading-6 text-slate-300">
              A research-informed approach to negotiation, influence and better decisions.
            </p>
            <address className="mt-4 max-w-[340px] border-t border-white/10 pt-4 not-italic font-sans text-sm leading-relaxed">
              <span className="block font-medium text-white">{OFFICE_NAME}</span>
              <span className="mt-2 block sm:max-w-[250px] leading-6 text-slate-400">{OFFICE_ADDRESS}</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-flex max-w-full items-center gap-2 text-[#D9AB64] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B59]">
                <span className="break-all">{CONTACT_EMAIL}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>
            </address>
            <div className="mt-4 flex items-center gap-2">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-[#C89B59] hover:text-[#C89B59]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="min-w-0 lg:col-span-2">
            <h4 className="font-sans font-semibold text-sm text-[#C89B59] mb-3 sm:mb-5">
              Explore
            </h4>
            <ul className="space-y-1 sm:space-y-3 text-sm font-sans text-slate-400">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 sm:min-h-0 items-center hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:col-span-2">
            <h4 className="font-sans font-semibold text-sm text-[#C89B59] mb-3 sm:mb-5">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-3 text-sm font-sans text-slate-400">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 sm:min-h-0 items-center hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 min-w-0 lg:col-span-4">
            <h4 className="font-sans font-semibold text-sm text-[#C89B59] mb-3 sm:mb-5">
              Subscribe for Insights
            </h4>
            <p className="font-sans text-sm leading-relaxed text-slate-400">
              Articles on negotiation, influence and strategy, sent occasionally. No noise.
            </p>
            {subscribed ? (
              <p className="mt-5 flex items-center gap-2 font-sans text-sm text-[#C89B59]">
                <Check className="h-4 w-4" />
                Send the subscription request in your email app.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    window.location.href = enquiryEmailHref("Insights subscription request", `Please subscribe me to insights.\nEmail: ${email}`);
                    setSubscribed(true);
                  }
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
                  className="min-w-0 w-full grow rounded-full border border-white/10 bg-[#0E1626] px-5 py-3 font-sans text-base sm:text-sm text-white placeholder-slate-500 focus:border-[#C89B59] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C89B59] px-6 py-3 transition-colors hover:bg-[#D9AB64] cursor-pointer text-white font-sans font-medium text-sm tracking-normal"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="mt-3 break-words font-sans text-xs leading-relaxed text-slate-400">Requests open in your email app for you to review and send to {CONTACT_EMAIL}.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-sm text-slate-400 text-center sm:text-left">
          <p>© {year} Negotiation Architecture. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-1">
            <Link href="/privacy-policy" className="inline-flex min-h-11 sm:min-h-0 items-center text-slate-300 hover:text-[#C89B59] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B59]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 sm:min-h-0 items-center text-slate-300 hover:text-[#C89B59] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B59]">
              Terms
            </Link>
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

      {/* 6. Where It Applies (3 Contexts) */}
      <AudienceSection />

      {/* 7. Professional Experience */}
      <ExperienceSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 8. Programs & Coaching (3 Cards) */}
      <ProgramsSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 9. Research & Insights (3 Cards) */}
      <ResearchSection />

      {/* 10. Speaking & Thought Leadership */}
      <SpeakingSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 12. Client Feedback (Testimonials) */}
      <TestimonialsSection />

      {/* 13. Outcome CTA Banner */}
      <OutcomeCtaSection onOpenConsult={() => setConsultOpen(true)} />

      {/* 14. Latest Insights */}
      <LatestInsightsSection />

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
