"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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
    maxProgress: 0.90,
  },
  {
    id: 6,
    title: "NEGOTIATION",
    minProgress: 0.90,
    maxProgress: 1.0,
  },
];

interface BaseHeroBannerProps {
  theme?: "vellum" | "navy";
}

export function BaseHeroBanner({ theme = "vellum" }: BaseHeroBannerProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const slotRef = useRef<HTMLSpanElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [videoIntroExpanded, setVideoIntroExpanded] = useState(false);
  const [metrics, setMetrics] = useState({
    slotX: 0,
    slotY: 0,
    slotW: 240,
    slotH: 140,
    targetW: 1920,
    targetH: 1080,
    deltaX: 0,
    deltaY: 0,
    initialScale: 0.20,
  });

  // Calculate layout geometry for GPU-accelerated expansion to true 100% full screen
  const updateMetrics = useCallback(() => {
    if (!slotRef.current || !stickyRef.current) return;
    const slotRect = slotRef.current.getBoundingClientRect();
    const stickyRect = stickyRef.current.getBoundingClientRect();

    if (stickyRect.width === 0 || stickyRect.height === 0) return;

    // Target dimensions at full expansion: 100% of viewport (edge-to-edge, no navbar, no borders)
    const targetW = stickyRect.width;
    const targetH = stickyRect.height;

    // Center coordinates measured pixel-perfectly relative to sticky viewport container
    const slotCenterX = slotRect.left - stickyRect.left + slotRect.width / 2;
    const slotCenterY = slotRect.top - stickyRect.top + slotRect.height / 2;
    const targetCenterX = targetW / 2.02;
    const targetCenterY = targetH / 2.02;

    const deltaX = slotCenterX - targetCenterX;
    const deltaY = slotCenterY - targetCenterY;
    const initialScale = Math.max(slotRect.width / targetW, 0.10);

    setMetrics({
      slotX: slotRect.left - stickyRect.left,
      slotY: slotRect.top - stickyRect.top,
      slotW: slotRect.width,
      slotH: slotRect.height,
      targetW,
      targetH,
      deltaX,
      deltaY,
      initialScale,
    });
  }, []);

  // Track scroll progress through the hero section
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight || 800;
      const totalScrollable = containerRef.current.offsetHeight - winH;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      // Progress goes 0 -> 1 as user scrolls through the hero track
      const scrolled = -rect.top;
      const raw = scrolled / totalScrollable;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      updateMetrics();
      onScroll();
    });

    updateMetrics();
    handleScroll();

    // Small timeout to ensure font measurement has settled
    const timer = setTimeout(updateMetrics, 200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [updateMetrics]);

  // Recalculate metrics on font load or orientation change
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateMetrics);
    }
  }, [updateMetrics]);

  // Initial preloader intro: text slides from bottom, video expands out from text
  useEffect(() => {
    const videoTimer = setTimeout(() => {
      setVideoIntroExpanded(true);
    }, 420);

    const metricsTimer = setTimeout(() => {
      updateMetrics();
    }, 1150);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(metricsTimer);
    };
  }, [updateMetrics]);

  // Two-phase timeline:
  // Phase 1 (0 -> 0.28): Card expands from text slot to 100% full screen (holding frame 1)
  // Phase 2 (0.28 -> 1.0): 3D animation plays from frame 1 to 600 in full screen!
  const EXPANSION_THRESHOLD = 0.28;

  const expansionProgress = Math.min(progress / EXPANSION_THRESHOLD, 1);
  const easedExpansion =
    expansionProgress < 0.5
      ? 2 * expansionProgress * expansionProgress
      : 1 - Math.pow(-2 * expansionProgress + 2, 2) / 2;

  // Video frame progress: starts from 0 when it hits full screen
  const videoScrubProgress =
    progress < EXPANSION_THRESHOLD
      ? 0
      : Math.min((progress - EXPANSION_THRESHOLD) / (1 - EXPANSION_THRESHOLD), 1);

  // GPU Transform parameters
  const currentTranslateX = (1 - easedExpansion) * metrics.deltaX;
  const currentTranslateY = (1 - easedExpansion) * metrics.deltaY;
  const currentScale =
    metrics.initialScale + (1 - metrics.initialScale) * easedExpansion;
  const currentRotate = (1 - easedExpansion) * 8.2; // 8.2 deg tilted inline, 0 deg when full screen
  const currentBorderRadius = (1 - easedExpansion) * 14; // 14px when inline, 0px when full screen
  const isFullyExpanded = expansionProgress >= 0.96;

  // Intro bloom calculation: expands outward from between the words
  const isVideoExpanded = videoIntroExpanded || progress > 0;
  const introScaleMultiplier = isVideoExpanded ? 1 : 0;

  // Text dims as video expands to full screen
  const textDimOpacity = Math.max(1 - easedExpansion * 1.6, 0);

  // Active stage determination based on video scrubbing progress (Stages 1 through 6)
  const activeStage =
    STAGES.find(
      (s) =>
        videoScrubProgress >= s.minProgress && videoScrubProgress < s.maxProgress
    ) || STAGES[STAGES.length - 1];

  // Stage HUD opacity: fades in as video container nears full screen (0.85 -> 1.0)
  const hudOpacity = Math.max((expansionProgress - 0.85) / 0.15, 0);

  const fontStyle: React.CSSProperties = {
    fontFamily:
      'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: "-0.02em",
  };

  return (
    <section
      ref={containerRef}
      id="home-hero"
      className="relative w-full bg-white text-black select-none"
      style={{ height: "360vh" }}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 pt-20 md:pt-24 pb-8 md:pb-12 bg-white"
      >
        {/* Subtle architectural ambient backdrop */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(0,0,0,0.02)_0%,transparent_75%)]" />

        {/* 
          EXACTLY 2 LINES OF ON-BRAND NEGOTIATION ARCHITECTURE TYPOGRAPHY
          Line 1: EXTRAORDINARY OUTCOMES...
          Line 2: NEGOTIATION [INLINE VIDEO SLOT] ARCHITECTURE
        */}
        <div
          className="relative z-10 w-full max-w-[1550px] mx-auto my-auto px-2 sm:px-4 py-2 flex flex-col items-center justify-center text-center transition-opacity duration-300"
          style={{ opacity: textDimOpacity }}
        >
          {/* LINE 1 (Centered, strictly 1 line, refined font-weight, pitch black, preloader slide up) */}
          <div className="w-full whitespace-nowrap flex items-center justify-center text-center overflow-hidden py-1">
            <motion.h1
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08,
              }}
              style={fontStyle}
              className="text-[clamp(1.65rem,4.8vw,6.5rem)] font-bold uppercase m-0 text-black leading-[0.9] whitespace-nowrap flex items-center justify-center text-center"
            >
              <span className="tracking-tight pr-2 sm:pr-4 md:pr-6">
                EXTRAORDINARY
              </span>
              <span
                className="tracking-tight inline-block italic px-2"
                style={{
                  transform: "skewX(-9deg)",
                  WebkitTransform: "skewX(-9deg)",
                }}
              >
                OUTCOMES...
              </span>
            </motion.h1>
          </div>

          {/* LINE 2 (Centered, strictly 1 line, refined font-weight, pitch black) */}
          <div className="w-full whitespace-nowrap flex items-center justify-center text-center mt-2 sm:mt-3 md:mt-4">
            <h1
              style={fontStyle}
              className="text-[clamp(1.45rem,4.1vw,5.5rem)] font-bold uppercase m-0 text-black leading-[0.9] whitespace-nowrap flex items-center justify-center text-center"
            >
              {/* NEGOTIATION (Slanted Italic, slides up from bottom) */}
              <span className="inline-block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.16,
                  }}
                  className="tracking-tight inline-block italic pr-1 sm:pr-2 pl-1"
                  style={{
                    transform: "skewX(-9deg)",
                    WebkitTransform: "skewX(-9deg)",
                  }}
                >
                  NEGOTIATION
                </motion.span>
              </span>

              {/* Physical Inline Placeholder Slot for the Video - Static un-transformed resting layout */}
              <span
                ref={slotRef}
                className="inline-block relative align-middle mx-2 sm:mx-3 md:mx-4 w-[clamp(85px,11vw,175px)] aspect-[16/10] rounded-lg flex-none pointer-events-none opacity-0"
                aria-hidden="true"
              />

              {/* ARCHITECTURE (Upright Brutalist, slides up from bottom) */}
              <span className="inline-block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.22,
                  }}
                  className="tracking-tight inline-block"
                >
                  ARCHITECTURE
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        {/* BOTTOM METADATA: DR. TARUN ROCHWANI & DOCTORAL RESEARCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: Math.max(1 - easedExpansion * 2, 0), y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.45,
          }}
          className="relative z-10 w-full flex items-center justify-between transition-opacity duration-300 pointer-events-none"
          style={{ opacity: Math.max(1 - easedExpansion * 2, 0) }}
        >
          <span className="text-xs sm:text-sm md:text-[15px] font-mono uppercase tracking-[0.22em] text-black font-bold">
            Dr. Tarun Rochwani
          </span>
          <span className="text-xs sm:text-sm md:text-[15px] font-mono uppercase tracking-[0.22em] text-black font-semibold">
            Doctoral Research &middot; Live Deals
          </span>
        </motion.div>

        {/* 
          DYNAMIC 6-STAGE BLACK TEXT OVERLAY
          Clean, minimal architectural title displayed at the top:
          Stage 01: COMPLEX SITUATION
          Stage 02: ANALYSE
          Stage 03: STRATEGY
          Stage 04: STRUCTURE
          Stage 05: NEGOTIATION STRUCTURE
          Stage 06: NEGOTIATION
        */}
        <div
          className="absolute top-20 sm:top-24 md:top-28 inset-x-0 mx-auto z-[75] flex items-center justify-center text-center pointer-events-none transition-all duration-300 px-4"
          style={{
            opacity: hudOpacity,
            transform: `translateY(${(1 - hudOpacity) * -12}px)`,
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.h2
              key={activeStage.id}
              initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal text-black leading-none m-0 select-none drop-shadow-sm"
            >
              {activeStage.title}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* 
          EXPANDING FRAME SEQUENCE CONTAINER
          Starts directly inside the Line 2 gap, blooms outward on initial entrance,
          and expands smoothly to true 100% full screen on scroll, scrubbing all 600 frames.
          z-[70] ensures it sits cleanly above navbar (z-50) and covers entire viewport
        */}
        <div
          className={`absolute top-1/2 left-1/2 z-[70] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] will-change-transform group transition-[border,box-shadow,opacity] duration-300 ${
            isFullyExpanded
              ? "border-none shadow-none"
              : "border border-black/15"
          }`}
          style={{
            width: `${metrics.targetW}px`,
            height: `${metrics.targetH}px`,
            marginLeft: `-${metrics.targetW / 2}px`,
            marginTop: `-${metrics.targetH / 2}px`,
            transform: `translate3d(${currentTranslateX}px, ${currentTranslateY}px, 0) scale(${currentScale * introScaleMultiplier}) rotate(${currentRotate}deg)`,
            transformOrigin: "center center",
            borderRadius: `${currentBorderRadius}px`,
            transition:
              progress === 0
                ? "transform 0.72s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease"
                : undefined,
            opacity: isVideoExpanded ? 1 : 0,
          }}
        >
          <ScrollParallaxCanvas progress={videoScrubProgress} />
        </div>
      </div>
    </section>
  );
}
