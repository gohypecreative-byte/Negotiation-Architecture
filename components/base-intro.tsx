"use client";

import React, { useEffect, useRef, useState } from "react";

interface BaseIntroProps {
  theme?: "vellum" | "navy";
}

const WORDS_DATA = [
  { text: "Negotiation", isGold: false, isItalic: false },
  { text: "Architecture", isGold: false, isItalic: false },
  { text: "is", isGold: false, isItalic: false },
  { text: "trusted", isGold: false, isItalic: false },
  { text: "by", isGold: false, isItalic: false },
  { text: "CEOs,", isGold: false, isItalic: false },
  { text: "founders,", isGold: false, isItalic: false },
  { text: "and", isGold: false, isItalic: false },
  { text: "sovereign", isGold: false, isItalic: false },
  { text: "boards", isGold: false, isItalic: false },
  { text: "to", isGold: false, isItalic: false },
  { text: "construct", isGold: false, isItalic: false },
  { text: "high-stakes", isGold: true, isItalic: false },
  { text: "outcomes", isGold: true, isItalic: false },
  { text: "where", isGold: false, isItalic: false },
  { text: "failure", isGold: false, isItalic: false },
  { text: "is", isGold: false, isItalic: false },
  { text: "not", isGold: false, isItalic: false },
  { text: "an", isGold: false, isItalic: false },
  { text: "option.", isGold: false, isItalic: false },
  { text: "We", isGold: false, isItalic: false },
  { text: "transform", isGold: false, isItalic: false },
  { text: "hostile", isGold: false, isItalic: false },
  { text: "conversations", isGold: false, isItalic: false },
  { text: "with", isGold: false, isItalic: false },
  { text: "structure,", isGold: false, isItalic: false },
  { text: "precision,", isGold: false, isItalic: false },
  { text: "and", isGold: false, isItalic: false },
  { text: "influence", isGold: false, isItalic: true },
  { text: "by", isGold: false, isItalic: true },
  { text: "design.", isGold: false, isItalic: true },
];

export function BaseIntro({ theme = "vellum" }: BaseIntroProps) {
  const isVellum = theme === "vellum";
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Starts filling when top of text enters around 80% of screen height
        // Fully fills when it reaches ~28% of screen height
        const startY = windowH * 0.82;
        const endY = windowH * 0.28;

        const currentY = rect.top;
        const raw = (startY - currentY) / (startY - endY);
        const clamped = Math.max(0, Math.min(1, raw));
        setScrollProgress(clamped);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const totalWords = WORDS_DATA.length;

  return (
    <section
      id="introduction"
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-16 border-b transition-colors duration-500 ${
        isVellum
          ? "bg-white text-[#152540] border-slate-200"
          : "bg-[#0A1526] text-white border-white/10"
      }`}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Top Eyebrow Pill */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className={`w-2 h-2 rounded-full ${
              isVellum ? "bg-[#A8741F]" : "bg-[#D3A75E]"
            }`}
          />
          <span
            className={`text-xs uppercase font-mono tracking-[0.25em] font-bold ${
              isVellum ? "text-[#A8741F]" : "text-[#D3A75E]"
            }`}
          >
            The Discipline &middot; Built From Live Deals
          </span>
        </div>

        {/* High-Impact Architectural Statement with Scroll-Driven Word Fill */}
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-5xl font-serif font-normal leading-[1.28] max-w-4xl tracking-tight"
        >
          {WORDS_DATA.map((w, i) => {
            const step = 1 / totalWords;
            const wordStart = i * step;
            const wordEnd = Math.min(1, wordStart + step * 1.5);
            const fillAmount = Math.max(
              0,
              Math.min(1, (scrollProgress - wordStart) / (wordEnd - wordStart))
            );

            return (
              <span
                key={i}
                className="relative inline-block mr-[0.28em] select-none"
              >
                {/* Ghost / Unfilled word */}
                <span
                  className={`${w.isItalic ? "italic font-serif" : ""} ${
                    isVellum ? "text-stone-300" : "text-white/20"
                  }`}
                >
                  {w.text}
                </span>

                {/* Filled foreground word on scroll */}
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 transition-opacity duration-75 ${
                    w.isItalic ? "italic font-serif" : ""
                  } ${
                    w.isGold
                      ? isVellum
                        ? "text-[#A8741F] underline decoration-2 underline-offset-8 decoration-[#A8741F]"
                        : "text-[#D3A75E] underline decoration-2 underline-offset-8 decoration-[#D3A75E]"
                      : isVellum
                      ? "text-[#152540]"
                      : "text-white"
                  }`}
                  style={{
                    opacity: fillAmount,
                  }}
                >
                  {w.text}
                </span>
              </span>
            );
          })}
        </h2>

        {/* Secondary Subtext */}
        <p
          className={`mt-6 text-sm md:text-base font-sans leading-relaxed max-w-2xl font-normal transition-opacity duration-500 ${
            scrollProgress > 0.4 ? "opacity-100" : "opacity-60"
          } ${isVellum ? "text-[#4B5563]" : "text-stone-300"}`}
        >
          Built from doctoral research on live corporate transactions—not classroom simulations.
          Stop improvising. Start architecting every pause, every currency, and every pivot.
        </p>

        {/* 4-Column Horizontal Track Record Strip (Clean cards) */}
        <div
          className={`mt-14 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${
            isVellum ? "border-slate-200" : "border-white/10"
          }`}
        >
          {/* Metric 1 */}
          <div
            className={`p-5 rounded-2xl border shadow-xs hover:shadow-md transition-shadow ${
              isVellum
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div
              className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              25+
            </div>
            <div
              className={`text-xs font-sans uppercase font-bold tracking-wider mt-2 ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              Years Practice
            </div>
            <div
              className={`text-[11px] font-sans mt-0.5 ${
                isVellum ? "text-[#6B7280]" : "text-stone-400"
              }`}
            >
              Live corporate advisory
            </div>
          </div>

          {/* Metric 2 */}
          <div
            className={`p-5 rounded-2xl border shadow-xs hover:shadow-md transition-shadow ${
              isVellum
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div
              className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold ${
                isVellum ? "text-[#A8741F]" : "text-[#D3A75E]"
              }`}
            >
              26
            </div>
            <div
              className={`text-xs font-sans uppercase font-bold tracking-wider mt-2 ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              Countries Advised
            </div>
            <div
              className={`text-[11px] font-sans mt-0.5 ${
                isVellum ? "text-[#6B7280]" : "text-stone-400"
              }`}
            >
              Cross-border jurisdictions
            </div>
          </div>

          {/* Metric 3 */}
          <div
            className={`p-5 rounded-2xl border shadow-xs hover:shadow-md transition-shadow ${
              isVellum
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div
              className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              $10B+
            </div>
            <div
              className={`text-xs font-sans uppercase font-bold tracking-wider mt-2 ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              Deals Structured
            </div>
            <div
              className={`text-[11px] font-sans mt-0.5 ${
                isVellum ? "text-[#6B7280]" : "text-stone-400"
              }`}
            >
              M&amp;A &amp; sovereign disputes
            </div>
          </div>

          {/* Metric 4 */}
          <div
            className={`p-5 rounded-2xl border shadow-xs hover:shadow-md transition-shadow ${
              isVellum
                ? "border-slate-200 bg-white"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div
              className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold ${
                isVellum ? "text-[#A8741F]" : "text-[#D3A75E]"
              }`}
            >
              100%
            </div>
            <div
              className={`text-xs font-sans uppercase font-bold tracking-wider mt-2 ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              Privilege
            </div>
            <div
              className={`text-[11px] font-sans mt-0.5 ${
                isVellum ? "text-[#6B7280]" : "text-stone-400"
              }`}
            >
              Strict non-disclosure standards
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
