"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BaseHeaderProps {
  theme?: "vellum" | "navy";
}

export function BaseHeader({ theme = "vellum" }: BaseHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isVellum = theme === "vellum";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { title: "About", href: "#story" },
    { title: "System", href: "#designed" },
    { title: "Science", href: "#science" },
    { title: "Simulation", href: "#simulation" },
    { title: "Programmes", href: "#certification" },
    { title: "Advisory", href: "#coaching" },
    { title: "Prospectus", href: "#prospectus" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* End-to-End Global Navigation Bar with Frosted Glassmorphism */}
      <header
        id="globalnav"
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ease-out select-none ${
          isVellum
            ? "bg-white/85 supports-[backdrop-filter]:bg-white/75 backdrop-blur-xl border-b border-black/[0.08] text-[#152540]"
            : "bg-[#070F1C]/85 supports-[backdrop-filter]:bg-[#070F1C]/75 backdrop-blur-xl border-b border-white/[0.1] text-[#f5f5f7]"
        } ${scrolled ? "py-2.5 shadow-[0_2px_14px_rgba(0,0,0,0.05)]" : "py-3 md:py-3.5"}`}
      >
        {/* End-to-End Container spanning 100% full viewport width */}
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between gap-6">
          {/* Left: Brand Monogram + Serif Wordmark matching design & source code */}
          <a
            href="/"
            className="flex items-center gap-3 sm:gap-3.5 group flex-none"
            aria-label="Negotiation Architecture by Dr. Tarun Rochwani"
          >
            <Image
              src="/images/brand/na-monogram.png"
              alt="Negotiation Architecture Logo"
              width={70}
              height={44}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col justify-center">
              <span
                className={`text-[15px] sm:text-[16px] font-semibold tracking-[0.06em] uppercase transition-colors leading-tight ${
                  isVellum
                    ? "text-[#152540] group-hover:text-[#A8741F]"
                    : "text-white group-hover:text-[#D3A75E]"
                }`}
              >
                Negotiation Architecture
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-mono tracking-[0.22em] uppercase font-bold text-[#A8741F] leading-none mt-0.5">
                Dr. Tarun L. Rochwani, DBA
              </span>
            </div>
          </a>

          {/* Center: Apple SF Pro Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 py-1 whitespace-nowrap"
            aria-label="Global Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`text-[12px] xl:text-[12.5px] tracking-[-0.01em] font-normal transition-colors duration-200 relative py-1 group flex-none ${
                  isVellum
                    ? "text-[#152540]/85 hover:text-[#152540]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                <span>{link.title}</span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left ${
                    isVellum ? "bg-[#152540]" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right: Search Icon + Elegant Pill CTA Button */}
          <div className="flex items-center gap-4 sm:gap-5 flex-none">
            {/* Apple-style Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-1.5 opacity-80 hover:opacity-100 transition-opacity duration-200 focus:outline-hidden cursor-pointer ${
                isVellum ? "text-[#152540] hover:text-[#A8741F]" : "text-white hover:text-[#D3A75E]"
              }`}
              aria-label="Search site"
              title="Search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 stroke-current"
                strokeWidth="1.6"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11L14.5 14.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Apple-style Luxury Pill CTA Button */}
            <a
              href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
              className={`hidden sm:inline-flex items-center justify-center px-4.5 sm:px-5 py-1.5 rounded-full text-[12px] sm:text-[12.5px] font-sans font-medium tracking-tight transition-all duration-200 shadow-xs cursor-pointer ${
                isVellum
                  ? "bg-[#152540] text-white hover:bg-[#A8741F]"
                  : "bg-white text-[#070F1C] hover:bg-[#D3A75E] hover:text-[#070F1C]"
              }`}
            >
              Book a Session
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 focus:outline-hidden opacity-85 hover:opacity-100 transition-opacity cursor-pointer ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[1.5px] bg-current rounded-full transition-transform duration-250 ease-out origin-center ${
                    mobileMenuOpen ? "translate-y-[7.2px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-current rounded-full transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-current rounded-full transition-transform duration-250 ease-out origin-center ${
                    mobileMenuOpen ? "-translate-y-[7.2px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* End-to-End Expandable Search Bar Overlay */}
        {searchOpen && (
          <div
            className={`w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-3 border-t transition-all duration-200 animate-in fade-in slide-in-from-top-1 ${
              isVellum
                ? "bg-white/95 border-black/[0.06] text-[#152540]"
                : "bg-[#070F1C]/95 border-white/[0.08] text-[#f5f5f7]"
            }`}
          >
            <div className="w-full max-w-[800px] mx-auto flex items-center gap-3.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 stroke-current opacity-50 shrink-0"
                strokeWidth="1.6"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11L14.5 14.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search programmes, frameworks, case archives, or faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-[14px] font-sans outline-hidden placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[12.5px] opacity-60 hover:opacity-100 transition-opacity shrink-0 font-medium cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 top-[52px] z-[85] lg:hidden transition-all duration-300 animate-in fade-in ${
            isVellum
              ? "bg-white/98 supports-[backdrop-filter]:bg-white/92 backdrop-blur-2xl text-[#152540]"
              : "bg-[#070F1C]/98 supports-[backdrop-filter]:bg-[#070F1C]/92 backdrop-blur-2xl text-[#f5f5f7]"
          }`}
        >
          <div className="h-[calc(100vh-52px)] flex flex-col justify-between px-8 py-8 overflow-y-auto">
            {/* Mobile Nav Links with Elegant Serif Typography */}
            <nav className="flex flex-col gap-5 pt-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={`text-[17px] sm:text-[19px] font-medium tracking-tight transition-colors ${
                    isVellum ? "text-[#152540] hover:text-[#A8741F]" : "text-white hover:text-[#D3A75E]"
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  {link.title}
                </a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-4">
              <a
                href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-3 rounded-full text-center text-[14px] font-sans font-medium transition-all ${
                  isVellum
                    ? "bg-[#152540] text-white hover:bg-[#A8741F]"
                    : "bg-white text-[#070F1C] hover:bg-[#D3A75E]"
                }`}
              >
                Book a Session
              </a>
              <div className="text-[10.5px] font-mono tracking-widest text-center opacity-60 uppercase text-[#A8741F]">
                Negotiation Architecture &middot; Executive Suite
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
