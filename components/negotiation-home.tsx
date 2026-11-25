"use client";

import { source, stages, examinComponents } from "@/lib/negotiation-content";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_REGISTRATION, OFFICE_ADDRESS_LINES } from "@/lib/contact";
import boardroomPortraitPhoto from "../public/web-image/image.png";
import seatedPortraitPhoto from "../public/images/gallery/dr-tarun-03.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BaseHeroBanner } from "./base-hero-banner";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Mail, MapPin, Menu, Users, Wrench, X } from "lucide-react";

// =========================================================================
// SECTION 1: HEADER & NAVIGATION
// =========================================================================

// Single source of truth for site navigation — used by the header (desktop +
// mobile) and the footer so the menus can never drift apart.
const NAV_LINKS = [
  { label: "Home", href: "/", group: "explore" },
  { label: "About", href: "/about", group: "explore" },
  { label: "Methodology", href: "/negotiation-architecture", group: "explore" },
  { label: "Programmes & Advisory", href: "/advisory-programmes", group: "engage" },
  { label: "The Founder", href: "/founder", group: "explore" },
  { label: "Contact", href: "/contact", group: "engage" },
] as const;

const TAGLINE = "Structure · Precision · Influence by Design";

export function SiteHeader() {
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

  const navLinks = NAV_LINKS;
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:text-[#111827]">Skip to content</a>
      <header inert={hidden} data-hidden={hidden} className="site-header fixed top-0 left-0 w-full z-50 bg-[#080E1B] border-b border-white/[0.08]">
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
              <small className="mt-1 whitespace-nowrap font-sans text-[9px] sm:text-[10px] tracking-[0.06em] sm:tracking-[0.08em] text-slate-400">{TAGLINE}</small>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-sans font-medium text-slate-200">
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
            <Link
              href="/contact"
              className="bg-[#C89B59] hover:bg-[#D9AB64] px-5 sm:px-6 py-2.5 rounded-full transition-all hidden xl:flex whitespace-nowrap items-center gap-2 shadow-sm hover:shadow-md text-white font-sans font-medium text-sm tracking-normal"
            >
              <span>Start a conversation</span>
            </Link>

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
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full mt-2 bg-[#C89B59] text-white font-medium py-3 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <span>Start a conversation</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
// HOME SECTIONS — Version 13 approved copy (lib/source-content.json)
// =========================================================================

const home = source.home;

/** V13 trust strip shown directly below the hero. */
export function PillarsBar() {
  const pillars = [
    {
      title: "Research-informed",
      subtitle: "Grounded in doctoral inquiry.",
      icon: BookOpen,
    },
    {
      title: "Human-centred",
      subtitle: "Strategy that accounts for people, interests and relationships.",
      icon: Users,
    },
    {
      title: "Practical by design",
      subtitle: "Preparation, application and reflection. Never theory alone.",
      icon: Wrench,
    },
  ];

  return (
    <section className="relative z-20 w-full bg-white py-4 sm:py-7">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="grid grid-cols-1 divide-y divide-slate-200/70 md:grid-cols-3 md:gap-6 md:divide-y-0 lg:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
            <div
              key={item.title}
              className="flex min-w-0 items-start gap-3.5 py-5 md:px-4 md:py-3 lg:px-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C89B59]/10 text-[#C89B59]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
              <h4 className="font-sans text-base font-semibold leading-snug text-[#111827]">
                {item.title}
              </h4>
              <p className="mt-1 font-sans text-sm leading-relaxed text-slate-600">
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


export function WhatIsSection() {
  return (
    <section id="why" className="w-full bg-white py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#A8741F]">Why Negotiation Architecture</p>
            <SectionIntro title={home[4].text} lede={home[5].text} />
            <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-slate-600">{home[6].text}</p>
            <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-slate-600">{home[7].text}</p>
            <div className="mt-7"><TextLink href="/negotiation-architecture#science">Explore the science behind negotiation</TextLink></div>
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
          {[[8, "Rigour"], [10, "Intention"], [12, "Durable value"]].map(([index, label]) => (
            <article key={label} className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{label}</p>
              <h3 className="mt-5 font-serif text-2xl text-[#111827]">{home[index as number].text}</h3>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-slate-600">{home[(index as number) + 1].text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The five connected stages, in the site's original process-section design. */
export function StructureTeaserSection() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <section id="framework" className="w-full scroll-mt-20 border-t border-slate-200 bg-white py-16 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#A8741F]">The system</p>
            <SectionIntro title={home[14].text} lede={home[15].text} />
          </div>
          <div className="shrink-0"><TextLink href="/negotiation-architecture">Explore the full architecture</TextLink></div>
        </div>

        <div className="mt-8 grid items-stretch gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <ol aria-label="Choose a stage" className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-1 lg:grid-cols-1">
            {stages.map((item, index) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  aria-controls="home-stage-panel"
                  className={`flex w-full cursor-pointer items-center gap-4 border-l-2 px-4 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8741F] ${active === index ? "border-[#C89B59] text-[#111827]" : "border-transparent text-slate-500 hover:text-[#111827]"}`}
                >
                  <span className="font-sans text-xs tabular-nums text-[#A8741F]">{`0${index + 1}`}</span>
                  <span className="font-sans text-lg font-medium sm:text-xl">{item.name}</span>
                  {item.examin && <span className="ml-auto rounded-full border border-[#C89B59]/60 px-2.5 py-0.5 font-sans text-[10px] font-semibold tracking-[0.1em] text-[#A8741F]">EXAMIN</span>}
                </button>
              </li>
            ))}
          </ol>
          <div id="home-stage-panel" aria-live="polite" className="flex min-w-0 flex-col justify-center border-t border-slate-200 pt-5 sm:pt-8 lg:border-t-0 lg:border-l lg:py-6 lg:pl-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{`Stage 0${active + 1} / 05`}</p>
            <h3 className="mt-4 max-w-2xl font-serif text-2xl leading-tight text-[#111827] sm:text-3xl">{stage.title}</h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600">{stage.text}</p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#A8741F]">{stage.result}</p>
            <div hidden={!stage.examin} className="mt-7 border-t border-slate-200 pt-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">EXAMIN · Examine the deal before negotiating its terms</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">{source.architecture[7].text}</p>
              <ul className="mt-5 grid gap-5 sm:grid-cols-3">
                {examinComponents.map(([term, text]) => (
                  <li key={term} className="font-sans text-sm leading-relaxed"><strong className="block text-[#111827]">{term}</strong><span className="text-slate-600">{text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ENGAGE_OFFERS = [
  { tag: "Individual", title: "Executive Coaching & Advisory", text: "Focused support to prepare for important conversations and strengthen personal capability.", link: "Explore advisory" },
  { tag: "Learning pathway", title: "Negotiation Programmes", text: "Structured learning in strategic judgement, behavioural awareness and practical skill.", link: "Explore programmes" },
  { tag: "Organisations", title: "Corporate & Team Development", text: "Workshops and tailored learning that strengthen how teams prepare, communicate and decide.", link: "Explore team learning" },
];

export function AdvisoryIntroSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#A8741F]">Ways to engage</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-tight text-[#111827]">
            {home[17].text}
          </h2>
        </div>
        <div className="lg:pt-10">
          <p className="font-sans text-slate-600 text-base sm:text-[17px] leading-relaxed mb-8">{home[18].text}</p>
          <Link
            href="/advisory-programmes"
            className="bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3.5 rounded-full transition-all inline-flex items-center gap-2 group shadow-sm text-white font-sans font-medium text-sm tracking-normal"
          >
            <span>Explore advisory &amp; programmes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {ENGAGE_OFFERS.map((offer) => (
          <article key={offer.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 transition-colors hover:border-[#C89B59]/60">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{offer.tag}</p>
            <h3 className="mt-5 font-serif text-2xl text-[#111827]">{offer.title}</h3>
            <p className="mt-3 mb-6 grow font-sans text-sm sm:text-base leading-relaxed text-slate-600">{offer.text}</p>
            <TextLink href="/advisory-programmes">{offer.link}</TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PerspectiveSection() {
  return (
    <section id="founder" className="w-full bg-[#F6F2EA] text-[#111827] py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#A8741F]">The founder</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.1] text-[#111827] mb-6">
              {home[20].text}
            </h2>
            <div className="space-y-4 mb-7 font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>{home[21].text}</p>
              <p>{home[22].text}</p>
            </div>
            <div>
              <TextLink href="/founder">About the founder</TextLink>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-[#E4DFD5] shadow-xl">
              <Image
                src={seatedPortraitPhoto}
                alt="Seated portrait of Dr. Tarun Rochwani"
                fill
                sizes="(max-width: 480px) calc(100vw - 48px), 420px"
                className="editorial-photo object-cover"
                style={{ objectPosition: "50% 35%" }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
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

const FOOTER_LINKS = {
  explore: NAV_LINKS.filter((link) => link.group === "explore"),
  engage: NAV_LINKS.filter((link) => link.group === "engage"),
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const footerHeading = "mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#C89B59] sm:mb-5";
const footerLink = "inline-flex min-h-11 items-center transition-colors hover:text-white sm:min-h-0";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#050A14] text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-x-10 sm:py-20 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 min-w-0 lg:col-span-5 lg:pr-12">
            <Link href="/" className="group inline-flex items-center gap-3.5">
              <Image src="/images/brand/na-monogram-white.png" alt="NA Monogram" width={36} height={36} className="object-contain" />
              <span className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:text-[#C89B59]">
                Negotiation <span className="text-[#C89B59]">Architecture</span><sup className="text-[9px] font-normal">®</sup>
              </span>
            </Link>
            <p className="mt-6 max-w-sm font-serif text-xl leading-snug text-white">Advancing the science and practice of negotiation.</p>
            <p className="mt-3 font-sans text-xs uppercase tracking-[0.14em] text-slate-500">Structure · Precision · Influence by Design</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#C89B59]/60 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-[#C89B59] hover:bg-[#C89B59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B59]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <nav aria-label="Explore" className="min-w-0 lg:col-span-2">
            <h4 className={footerHeading}>Explore</h4>
            <ul className="space-y-1 font-sans text-sm text-slate-400 sm:space-y-3">
              {FOOTER_LINKS.explore.map((link) => <li key={link.href}><Link href={link.href} className={footerLink}>{link.label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Engage" className="min-w-0 lg:col-span-2">
            <h4 className={footerHeading}>Engage</h4>
            <ul className="space-y-1 font-sans text-sm text-slate-400 sm:space-y-3">
              {FOOTER_LINKS.engage.map((link) => <li key={link.href}><Link href={link.href} className={footerLink}>{link.label}</Link></li>)}
            </ul>
          </nav>

          <div className="col-span-2 min-w-0 sm:col-span-1 lg:col-span-3">
            <h4 className={footerHeading}>Contact</h4>
            <ul className="space-y-3 font-sans text-sm text-slate-400">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${footerLink} gap-2.5 break-all`}>
                  <Mail className="h-4 w-4 shrink-0 text-[#C89B59]" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#C89B59]" aria-hidden="true" />
                Mumbai, India
              </li>
            </ul>
            <address className="mt-6 border-t border-white/10 pt-5 font-sans text-sm not-italic leading-relaxed text-slate-400">
              <strong className="block font-medium text-slate-200">{OFFICE_NAME}</strong>
              {OFFICE_REGISTRATION}
              {OFFICE_ADDRESS_LINES.map(line => <span key={line} className="block">{line}</span>)}
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center font-sans text-sm text-slate-500 sm:flex-row sm:text-left">
          <span>© {year} Negotiation Architecture. All rights reserved.</span>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6">
            {FOOTER_LINKS.legal.map((link) => <Link key={link.href} href={link.href} className={footerLink}>{link.label}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}

// =========================================================================
// MAIN HOME PAGE EXPORT
// =========================================================================

export function NegotiationHome() {
  return (
    <div className="min-h-screen bg-[#080E1B] text-[#111827]">
      <SiteHeader />
      <main id="main">
        <h1 className="sr-only">{home[0].text}</h1>
        <BaseHeroBanner />
        <PillarsBar />
        <WhatIsSection />
        <StructureTeaserSection />
        <AdvisoryIntroSection />
        <PerspectiveSection />
      </main>
      <SiteFooter />
    </div>
  );
}
