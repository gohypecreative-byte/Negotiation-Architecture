"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollParallaxCanvas } from "./scroll-parallax-canvas";

export interface StageInfo {
  id: number;
  title: string;
  minProgress: number;
  maxProgress: number;
}

export const STAGES: StageInfo[] = [
  {
    id: 1,
    title: "COMPLEX SITUATION",
    minProgress: 0.0,
    maxProgress: 0.12,
  },
  {
    id: 2,
    title: "ANALYSIS",
    minProgress: 0.12,
    maxProgress: 0.31,
  },
  {
    id: 3,
    title: "STRATEGY",
    minProgress: 0.31,
    maxProgress: 0.54,
  },
  {
    id: 4,
    title: "STRUCTURE",
    minProgress: 0.54,
    maxProgress: 0.74,
  },
  {
    id: 5,
    title: "NEGOTIATION STRUCTURE",
    minProgress: 0.74,
    maxProgress: 0.9,
  },
  {
    id: 6,
    title: "NEGOTIATION",
    minProgress: 0.9,
    maxProgress: 1.0,
  },
];

interface BaseHeroBannerProps {
  theme?: "vellum" | "navy";
}

export function BaseHeroBanner({ theme = "vellum" }: BaseHeroBannerProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  const isVellum = theme === "vellum";

  // Active stage determination based on scroll video progress (Stages 1 through 6)
  const activeStage =
    STAGES.find(
      (s) => progress >= s.minProgress && progress < s.maxProgress
    ) || STAGES[STAGES.length - 1];

  // Track scroll progress through the hero track: ONLY runs on scroll, NOT automatically
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight || 800;
      const totalScrollable = containerRef.current.offsetHeight - winH;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const scrolled = -rect.top;
      const raw = scrolled / totalScrollable;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home-hero"
      className={`relative w-full select-none transition-colors duration-500 ${
        isVellum ? "bg-white text-[#152540]" : "bg-[#070F1C] text-white"
      }`}
      style={{ height: "300vh" }}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Full-Screen Video Canvas Sequence */}
        <div className="absolute inset-0 w-full h-full z-10">
          <ScrollParallaxCanvas
            progress={progress}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient vignette at top for header readability */}
          <div
            className={`absolute inset-x-0 top-0 h-32 pointer-events-none transition-opacity duration-300 ${
              isVellum
                ? "bg-gradient-to-b from-white/70 via-white/20 to-transparent"
                : "bg-gradient-to-b from-[#070F1C]/80 via-[#070F1C]/25 to-transparent"
            }`}
          />
        </div>

        {/* Top HUD: Stage Indicator */}
        <div className="relative z-20 pt-24 sm:pt-28 md:pt-32 px-6 flex flex-col items-center justify-center text-center pointer-events-none">

          <AnimatePresence mode="wait">
            <motion.h1
              key={activeStage.id}
              initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none m-0 select-none drop-shadow-sm font-bold ${
                isVellum ? "text-[#152540]" : "text-white"
              }`}
            >
              {activeStage.title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
