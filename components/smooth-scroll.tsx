"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // One smoothing layer drives both the page and the scroll-linked frames.
    // Lenis also observes reduced-motion preferences, including live changes.
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: true,
      syncTouchLerp: 0.1,
      touchMultiplier: 1,
      allowNestedScroll: true,
      anchors: {
        offset: -80,
        duration: 1.25,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      },
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
