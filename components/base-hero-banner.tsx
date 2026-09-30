"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  image: string;
  title: string;
}

const slides: SlideData[] = [
  {
    id: 0,
    image: "/images/gallery/dr-tarun-09.jpg",
    title: "Keynote Symposium on Power & Influence",
  },
  {
    id: 1,
    image: "/images/gallery/dr-tarun-08.jpg",
    title: "Deadlock Dissolution & Hostile Negotiations",
  },
  {
    id: 2,
    image: "/images/gallery/dr-tarun-05.jpeg",
    title: "Discreet Strategic Counsel",
  },
  {
    id: 3,
    image: "/images/gallery/dr-tarun-06.jpeg",
    title: "Pre-Roundtable Simulation & Counterparty Modeling",
  },
  {
    id: 4,
    image: "/images/gallery/dr-tarun-01.jpg",
    title: "Structure. Precision. Influence by Design.",
  },
];

const tickerWords = [
  "OUTCOMES",
  "LEVERAGE",
  "STRUCTURES",
  "RESOLUTIONS",
  "INFLUENCE",
];

interface BaseHeroBannerProps {
  theme?: "vellum" | "navy";
}

export function BaseHeroBanner({ theme = "vellum" }: BaseHeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-advance carousel smoothly in background
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Word rotator every 2.6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % tickerWords.length);
        setIsFading(false);
      }, 300);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home-hero"
      className="relative w-full overflow-hidden select-none bg-[#070F1C]"
      style={{ height: "100vh", minHeight: "680px" }}
    >
      {/* Background Slides Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center scale-100 transition-transform duration-[7000ms] ease-out hover:scale-105"
                sizes="100vw"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Bottom Content Area: Massive Grotesque Headline + Rotating Ticker */}
      <div className="absolute inset-x-0 bottom-0 z-30 pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-16 pointer-events-none">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col">
            {/* Line 1: EXTRAORDINARY */}
            <h1 className="text-[clamp(3.2rem,10vw,9.5rem)] font-extrabold uppercase tracking-tight text-white leading-[0.88] font-sans drop-shadow-2xl m-0">
              EXTRAORDINARY
            </h1>

            {/* Line 2: ROTATING WORD TICKER */}
            <div className="relative h-[clamp(3.2rem,10vw,9.5rem)] overflow-hidden mt-1 md:mt-2">
              <span
                className={`block text-[clamp(3.2rem,10vw,9.5rem)] font-extrabold uppercase tracking-tight text-[#E67400] leading-[0.88] font-sans drop-shadow-2xl transition-all duration-300 transform ${
                  isFading
                    ? "-translate-y-8 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {tickerWords[tickerIndex]}
              </span>
            </div>

            {/* Authoritative Subtitle */}
            <p className="mt-4 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] text-white/80 max-w-xl">
              Negotiation Architecture · Dr. Tarun Rochwani · Doctoral Research on Live Deals
            </p>
          </div>
        </div>
      </div>

      {/* Down Chevron / Scroll Guide */}
      <a
        href="#introduction"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-white/60 group-hover:text-white">
          Explore
        </span>
        <svg
          className="w-4 h-4 animate-bounce text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
