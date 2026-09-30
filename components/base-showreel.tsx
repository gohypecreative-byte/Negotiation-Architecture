"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface BaseShowreelProps {
  theme?: "vellum" | "navy";
}

export function BaseShowreel({ theme = "vellum" }: BaseShowreelProps) {
  const isVellum = theme === "vellum";
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight || 800;

      // Start expansion as section enters from bottom of screen (rect.top <= winH)
      // Maximize expansion when centered in viewport (rect.top <= winH * 0.25)
      const start = winH;
      const end = winH * 0.18;
      const rawProgress = (start - rect.top) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Smooth scroll-driven interpolation
  // Scale smoothly increases from 0.78 to 1.05 as you scroll into the section
  const scale = 0.78 + progress * 0.27;
  // Width increases from 74% to 98%
  const widthPercent = 74 + progress * 24;
  // Max width expands from 880px to 1420px
  const maxWidth = 880 + progress * 540;
  // Border radius smoothly tightens from 28px to 18px as it expands
  const borderRadius = 28 - progress * 10;
  // Ambient aura glow expands with the video
  const glowScale = 0.9 + progress * 0.35;
  const glowOpacity = 0.15 + progress * 0.25;

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className={`relative pt-6 md:pt-10 pb-6 md:pb-10 px-4 md:px-8 lg:px-12 overflow-hidden transition-colors duration-500 ${
        isVellum ? "bg-white border-b border-slate-200" : "bg-[#070F1C]"
      }`}
    >
      {/* Ambient gradient aura that expands dynamically with scroll */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] pointer-events-none blur-3xl transition-all duration-300 ease-out"
        style={{
          transform: `scale(${glowScale})`,
          opacity: glowOpacity,
          background: isVellum
            ? "radial-gradient(ellipse at center, #A8741F 0%, #152540 60%, transparent 80%)"
            : "radial-gradient(ellipse at center, #E67400 0%, #152540 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className={`text-xs uppercase font-mono tracking-[0.3em] font-semibold ${
              isVellum ? "text-[#A8741F]" : "text-[#E67400]"
            }`}
          >
            Executive Focus
          </span>
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase mt-2 ${
              isVellum ? "text-[#152540]" : "text-white"
            }`}
          >
            Discipline Over Improvisation
          </h2>
          <p
            className={`text-xs md:text-sm font-sans uppercase tracking-[0.2em] mt-3 max-w-lg mx-auto ${
              isVellum ? "text-[#6B7280]" : "text-white/60"
            }`}
          >
            Live Keynote Symposium &middot; London &middot; Dubai &middot; Geneva
          </p>
        </div>

        {/* Dynamic Expanding Video Container (Scroll-Driven Zoom) */}
        <div
          className="relative mx-auto transition-all duration-200 ease-out will-change-transform"
          style={{
            width: `${widthPercent}%`,
            maxWidth: `${maxWidth}px`,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className={`relative overflow-hidden shadow-2xl group aspect-[16/9] cursor-pointer border transition-all duration-300 ${
              isVellum
                ? "border-[#DFD7C7] bg-[#FBF8F2] shadow-xl hover:shadow-2xl"
                : "border-white/20 bg-black/40 shadow-2xl hover:border-white/40"
            }`}
            style={{
              borderRadius: `${borderRadius}px`,
            }}
          >
            {/* Poster Imagery */}
            <Image
              src="/images/gallery/dr-tarun-09.jpg"
              alt="Dr. Tarun Rochwani presenting keynote symposium"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />

            {/* Cinematic Gradient Masking */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none transition-opacity duration-300 group-hover:opacity-75" />

            {/* Center Play Button with Hover Zoom */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-115 shadow-2xl ${
                    isVellum
                      ? "bg-[#152540]/85 text-[#FBF8F2] border border-[#DFD7C7]"
                      : "bg-[#E67400]/90 text-white border border-white/40"
                  }`}
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xs uppercase font-sans tracking-[0.25em] text-white font-semibold drop-shadow-md">
                  Watch Methodology Reel
                </span>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2.5 shadow-lg">
                <p className="text-xs text-white font-sans font-semibold uppercase tracking-wider">
                  Live Keynote Symposium &middot; London
                </p>
                <p className="text-[11px] text-white/70">
                  &quot;The Architecture of Tactical Concessions&quot;
                </p>
              </div>

              <div className="hidden sm:block text-right">
                <span
                  className={`inline-block px-3.5 py-1.5 rounded-full text-white text-[11px] font-mono font-bold tracking-wider shadow-md ${
                    isVellum ? "bg-[#A8741F]" : "bg-[#E67400]"
                  }`}
                >
                  DOCTORAL RESEARCH &middot; LIVE DEALS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
