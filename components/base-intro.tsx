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

function CountUpNumber({
  end,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix && <span>{prefix}</span>}
      {count}
      {suffix && <span className="text-[#A8741F] ml-0.5">{suffix}</span>}
    </span>
  );
}

export function BaseIntro({ theme = "vellum" }: BaseIntroProps) {
  const isVellum = theme === "vellum";
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const lastProgressRef = useRef<number>(-1);
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

        // Starts filling with a slight delay when text is well into the viewport
        const startY = windowH * 0.74;
        const endY = windowH * 0.25;

        const currentY = rect.top;
        const raw = (startY - currentY) / (startY - endY);
        const clamped = Math.max(0, Math.min(1, raw));

        // Skip state update if value hasn't meaningfully changed (prevents re-renders)
        if (
          Math.abs(clamped - lastProgressRef.current) > 0.008 ||
          (clamped === 0 && lastProgressRef.current !== 0) ||
          (clamped === 1 && lastProgressRef.current !== 1)
        ) {
          lastProgressRef.current = clamped;
          setScrollProgress(clamped);
        }
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

        {/* Architectural Track Record Ledger (Clean, Animated Count-Up) */}
        <div
          className={`mt-14 border-y transition-colors duration-500 ${
            isVellum
              ? "border-stone-300/80 bg-white"
              : "border-white/10 bg-[#070F1C]/60"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/90 dark:divide-white/10">
            {/* Metric 01 */}
            <div className="py-7 md:py-9 px-5 sm:px-6 lg:px-8 group transition-colors duration-300 hover:bg-stone-50/70">
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-none ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                <CountUpNumber end={25} suffix="+" />
              </div>
              <div
                className={`text-xs font-mono uppercase font-bold tracking-[0.16em] mt-3.5 ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                Years Practice
              </div>
              <p
                className={`text-xs font-sans leading-relaxed mt-1 ${
                  isVellum ? "text-stone-500" : "text-stone-400"
                }`}
              >
                Live corporate advisory
              </p>
            </div>

            {/* Metric 02 */}
            <div className="py-7 md:py-9 px-5 sm:px-6 lg:px-8 group transition-colors duration-300 hover:bg-stone-50/70">
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-none ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                <CountUpNumber end={26} />
              </div>
              <div
                className={`text-xs font-mono uppercase font-bold tracking-[0.16em] mt-3.5 ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                Countries Advised
              </div>
              <p
                className={`text-xs font-sans leading-relaxed mt-1 ${
                  isVellum ? "text-stone-500" : "text-stone-400"
                }`}
              >
                Cross-border jurisdictions
              </p>
            </div>

            {/* Metric 03 */}
            <div className="py-7 md:py-9 px-5 sm:px-6 lg:px-8 group transition-colors duration-300 hover:bg-stone-50/70">
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-none ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                <CountUpNumber end={10} prefix="$" suffix="B+" />
              </div>
              <div
                className={`text-xs font-mono uppercase font-bold tracking-[0.16em] mt-3.5 ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                Deals Structured
              </div>
              <p
                className={`text-xs font-sans leading-relaxed mt-1 ${
                  isVellum ? "text-stone-500" : "text-stone-400"
                }`}
              >
                M&amp;A &amp; sovereign disputes
              </p>
            </div>

            {/* Metric 04 */}
            <div className="py-7 md:py-9 px-5 sm:px-6 lg:px-8 group transition-colors duration-300 hover:bg-stone-50/70">
              <div
                className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-none ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                <CountUpNumber end={100} suffix="%" />
              </div>
              <div
                className={`text-xs font-mono uppercase font-bold tracking-[0.16em] mt-3.5 ${
                  isVellum ? "text-[#152540]" : "text-white"
                }`}
              >
                Privilege
              </div>
              <p
                className={`text-xs font-sans leading-relaxed mt-1 ${
                  isVellum ? "text-stone-500" : "text-stone-400"
                }`}
              >
                Strict non-disclosure standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
