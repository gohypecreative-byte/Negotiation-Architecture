"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BaseHeaderProps {
  theme?: "vellum" | "navy";
}

export function BaseHeader({ theme = "vellum" }: BaseHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About", href: "#story" },
    { title: "System", href: "#designed" },
    { title: "Science", href: "#science" },
    { title: "Simulation", href: "#simulation" },
    { title: "Programmes", href: "#certification" },
    { title: "Advisory", href: "#coaching" },
    { title: "Prospectus", href: "#prospectus" },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-300 ease-out select-none bg-white border-b border-black/10 ${
        scrolled ? "py-2.5 md:py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : "py-3 md:py-3.5"
      }`}
    >
      {/* End-to-End Container spanning 100% width edge to edge */}
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between gap-4 xl:gap-8">
        {/* Left: Brand Monogram + Bold Romans-style Title */}
        <a
          href="/"
          className="flex items-center gap-3 sm:gap-3.5 group flex-none"
          title="Negotiation Architecture by Dr. Tarun Rochwani"
        >
          <Image
            src="/images/brand/na-monogram.png"
            alt="Negotiation Architecture Logo"
            width={140}
            height={86}
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-headline text-[16px] sm:text-[18px] md:text-[20px] uppercase text-black leading-none tracking-normal transition-colors group-hover:text-[#A8741F]">
              Negotiation Architecture
            </span>
            <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.24em] uppercase font-bold text-[#A8741F] mt-1 leading-none">
              Dr. Tarun L. Rochwani, DBA
            </span>
          </div>
        </a>

        {/* Center: Bold Condensed Romans-style Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-9 py-1 whitespace-nowrap"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="font-headline text-[14px] xl:text-[15.5px] 2xl:text-[16.5px] uppercase tracking-wide text-black hover:text-[#A8741F] whitespace-nowrap transition-colors duration-200 relative py-1 group flex-none"
            >
              <span>{link.title}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left bg-[#A8741F]" />
            </a>
          ))}
        </nav>

        {/* Right: Direct Action CTA Button */}
        <div className="flex items-center gap-3 flex-none">
          <a
            href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-headline uppercase tracking-wider bg-black text-white hover:bg-[#A8741F] border border-black hover:border-[#A8741F] transition-all duration-200 shadow-xs"
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Mobile/Tablet Horizontal Scrolling Bar */}
      <div className="lg:hidden w-full overflow-x-auto scrollbar-none px-6 py-2 flex items-center gap-5 text-[12px] font-headline uppercase tracking-wider border-t border-black/10 bg-white text-black whitespace-nowrap">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:text-[#A8741F] transition-colors flex-none py-1"
          >
            {link.title}
          </a>
        ))}
      </div>
    </header>
  );
}
