"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BaseHeaderProps {
  theme?: "vellum" | "navy";
}

export function BaseHeader({ theme = "vellum" }: BaseHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  // Track window scroll to adapt header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About", href: "#story" },
    { title: "System", href: "#designed" },
    { title: "Science", href: "#science" },
    { title: "Assessment", href: "#assess" },
    { title: "Programmes", href: "#certification" },
    { title: "Advisory", href: "#coaching" },
    { title: "Simulation", href: "#simulation" },
    { title: "Prospectus", href: "#prospectus" },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 select-none ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-xl border-b border-stone-200/80 shadow-xs text-[#152540]"
          : "py-5 md:py-6 bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white"
      }`}
    >
      {/* End-to-End Container spanning 100% width edge to edge */}
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between gap-4 xl:gap-6">
        {/* Left: Brand Monogram + Title */}
        <a
          href="/"
          className="flex items-center gap-3 group flex-none"
          title="Negotiation Architecture by Dr. Tarun Rochwani"
        >
          <Image
            src="/images/brand/na-monogram.png"
            alt="Negotiation Architecture Logo"
            width={140}
            height={86}
            className={`h-9 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              scrolled
                ? "drop-shadow-xs"
                : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            }`}
            priority
          />
          <div className="flex flex-col">
            <span
              className={`font-serif font-bold text-sm sm:text-base lg:text-[16px] xl:text-[17px] leading-tight tracking-tight transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-[#152540]" : "text-white drop-shadow-sm"
              }`}
            >
              Negotiation Architecture
            </span>
            <span
              className={`text-[8.5px] sm:text-[9px] font-mono tracking-[0.22em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-[#A8741F]" : "text-[#D3A75E] drop-shadow-sm"
              }`}
            >
              Dr. Tarun L. Rochwani, DBA
            </span>
          </div>
        </a>

        {/* Center: End-to-End Clean Navigation Links (Single line, no wrap) */}
        <nav
          className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 py-1 whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`text-[10.5px] xl:text-[11.5px] font-sans uppercase tracking-[0.16em] xl:tracking-[0.2em] font-semibold whitespace-nowrap transition-all duration-200 relative py-1 group flex-none ${
                scrolled
                  ? "text-stone-700 hover:text-[#A8741F]"
                  : "text-white/85 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              }`}
            >
              <span className="whitespace-nowrap">{link.title}</span>
              <span
                className={`absolute bottom-0 left-0 w-full h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ${
                  scrolled ? "bg-[#A8741F]" : "bg-[#D3A75E]"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right: Direct Action CTA Button */}
        <div className="flex items-center gap-3 flex-none">
          <a
            href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
            className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-[10.5px] sm:text-[11px] font-sans font-bold tracking-[0.18em] uppercase rounded-none transition-all duration-300 shadow-sm ${
              scrolled
                ? "bg-[#152540] text-white hover:bg-[#A8741F]"
                : "border border-[#D3A75E] text-[#D3A75E] hover:bg-[#D3A75E] hover:text-[#0A1526] backdrop-blur-xs bg-black/25"
            }`}
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Horizontal Scrolling Bar (Transparent at top, glass when scrolled) */}
      <div
        className={`lg:hidden w-full overflow-x-auto scrollbar-none px-6 py-2.5 flex items-center gap-6 text-[10px] font-sans uppercase tracking-[0.16em] font-semibold whitespace-nowrap transition-colors duration-300 ${
          scrolled
            ? "border-t border-stone-200/80 bg-white/90 text-stone-700"
            : "border-t border-white/10 bg-black/40 backdrop-blur-md text-white/90"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:text-[#D3A75E] transition-colors flex-none py-0.5"
          >
            {link.title}
          </a>
        ))}
      </div>
    </header>
  );
}
