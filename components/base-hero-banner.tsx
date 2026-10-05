"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollParallaxCanvas } from "./scroll-parallax-canvas";

interface BaseHeroBannerProps {
  theme?: "vellum" | "navy";
}

export function BaseHeroBanner({ theme = "vellum" }: BaseHeroBannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} id="hero" className="sequence-hero" data-theme={theme} aria-label="Negotiation Architecture scroll animation">
      <div className="sequence-pin">
        <ScrollParallaxCanvas progress={scrollYProgress} />
      </div>
    </section>
  );
}
