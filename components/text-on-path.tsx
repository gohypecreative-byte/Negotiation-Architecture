"use client";

import React, { useEffect, useRef, useId } from "react";

// Math utilities directly from Codrops mathUtils.js
const map = (x: number, a: number, b: number, c: number, d: number) =>
  ((x - a) * (d - c)) / (b - a) + c;

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const clamp = (val: number, min: number, max: number) =>
  Math.max(Math.min(val, max), min);

interface AnimatedSvgTextPathProps {
  d: string;
  text: string;
  filterType?: "blur" | "blur2" | "distortion" | "distortion2" | "none";
  viewBox?: string;
  className?: string;
  textClassName?: string;
  textColor?: string;
  fontSize?: number | string;
  letterSpacing?: string;
  reverse?: boolean;
  repeatCount?: number;
  separator?: string;
}

export function AnimatedSvgTextPath({
  d,
  text,
  filterType = "blur",
  viewBox = "0 0 1000 200",
  className = "",
  textClassName = "",
  textColor,
  fontSize = 42,
  letterSpacing = "0.04em",
  reverse = false,
  repeatCount = 1,
  separator = "   ·   ",
}: AnimatedSvgTextPathProps) {
  const uniqueId = useId().replace(/:/g, "_");
  const pathId = `curve_${uniqueId}`;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);

  const displayText =
    repeatCount > 1
      ? Array(repeatCount).fill(text).join(separator)
      : text;

  useEffect(() => {
    const svgEl = svgRef.current;
    const pathEl = pathRef.current;
    const textPathEl = textPathRef.current;
    const textEl = textRef.current;

    if (!svgEl || !pathEl || !textPathEl || !textEl) return;

    // Check if Firefox (as in Codrops: Firefox does not handle dynamic SVG filters smoothly)
    const isFirefox =
      typeof navigator !== "undefined" &&
      navigator.userAgent.toLowerCase().includes("firefox");
    if (isFirefox) {
      textEl.removeAttribute("filter");
    }

    // Filter primitive mapping from Codrops
    let primitiveEl: Element | null = null;
    let isDistortion = false;
    let minVal = 0;
    let maxVal = 10;

    if (!isFirefox && filterType !== "none") {
      if (filterType === "blur") {
        primitiveEl =
          document.querySelector("#blur feGaussianBlur") ||
          document.getElementById("blur-primitive");
        minVal = 0;
        maxVal = 10;
      } else if (filterType === "blur2") {
        primitiveEl =
          document.querySelector("#blur2 feGaussianBlur") ||
          document.getElementById("blur2-primitive");
        minVal = 0;
        maxVal = 25;
      } else if (filterType === "distortion") {
        primitiveEl =
          document.querySelector("#distortionFilter feDisplacementMap") ||
          document.getElementById("distortion-primitive");
        isDistortion = true;
        minVal = 0;
        maxVal = 100;
      } else if (filterType === "distortion2") {
        primitiveEl =
          document.querySelector("#distortionFilter2 feDisplacementMap") ||
          document.getElementById("distortion2-primitive");
        isDistortion = true;
        minVal = 0;
        maxVal = 50;
      }
    }

    // Path total length from Codrops
    let pathLength = pathEl.getTotalLength();
    if (!pathLength || pathLength <= 0) {
      pathLength = 1100;
    }

    const onResize = () => {
      try {
        const len = pathEl.getTotalLength();
        if (len > 0) pathLength = len;
      } catch {}
      onScroll();
    };

    window.addEventListener("resize", onResize, { passive: true });

    // Dynamic computeTarget using live bounding client rect
    const computeTarget = () => {
      const viewportY = svgEl.getBoundingClientRect().top;
      const winH = window.innerHeight || 800;
      const startThreshold = winH * 1.1;
      const endThreshold = -winH * 0.4;
      if (reverse) {
        return map(viewportY, startThreshold, endThreshold, -pathLength * 0.25, pathLength * 0.85);
      }
      return map(viewportY, startThreshold, endThreshold, pathLength * 0.85, -pathLength * 0.35);
    };

    let targetOffset = computeTarget();
    let currentOffset = targetOffset;
    textPathEl.setAttribute("startOffset", `${currentOffset.toFixed(1)}`);

    let isVisible = false;
    let isTicking = false;
    let rafId: number | null = null;
    let lastScrollY = window.pageYOffset;

    const tick = () => {
      const diff = targetOffset - currentOffset;
      if (Math.abs(diff) > 0.15) {
        // High-fidelity smooth interpolation: responsive with natural momentum glide
        currentOffset += diff * 0.16;
        textPathEl.setAttribute("startOffset", `${currentOffset.toFixed(1)}`);

        // Handle SVG filter if enabled
        if (primitiveEl) {
          const currentScroll = window.pageYOffset;
          const scrollDiff = Math.abs(currentScroll - lastScrollY);
          lastScrollY = currentScroll;
          if (!isDistortion) {
            const dev = clamp(map(scrollDiff, 0, 40, minVal, maxVal), minVal, maxVal);
            primitiveEl.setAttribute("stdDeviation", dev.toFixed(1));
          }
        }

        rafId = requestAnimationFrame(tick);
      } else {
        currentOffset = targetOffset;
        textPathEl.setAttribute("startOffset", `${currentOffset.toFixed(1)}`);
        if (primitiveEl && !isDistortion) {
          primitiveEl.setAttribute("stdDeviation", "0");
        }
        isTicking = false;
      }
    };

    const onScroll = () => {
      if (!isVisible) return;
      targetOffset = computeTarget();
      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    // IntersectionObserver so off-screen curves consume 0% CPU
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            targetOffset = computeTarget();
            if (!isTicking) {
              isTicking = true;
              rafId = requestAnimationFrame(tick);
            }
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(svgEl);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial positioning
    targetOffset = computeTarget();
    currentOffset = targetOffset;
    textPathEl.setAttribute("startOffset", `${currentOffset.toFixed(1)}`);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [filterType, reverse, repeatCount]);

  const filterUrl =
    filterType === "none"
      ? undefined
      : filterType === "blur"
      ? "url(#blur)"
      : filterType === "blur2"
      ? "url(#blur2)"
      : filterType === "distortion"
      ? "url(#distortionFilter)"
      : "url(#distortionFilter2)";

  return (
    <svg
      ref={svgRef}
      className={`svgtext ${className}`}
      data-filter-type={
        filterType === "blur" || filterType === "blur2"
          ? "blur"
          : filterType.startsWith("distortion")
          ? "distortion"
          : undefined
      }
      width="120%"
      preserveAspectRatio="xMidYMid meet"
      viewBox={viewBox}
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        contain: "paint",
      }}
    >
      <path ref={pathRef} id={pathId} d={d} fill="none" />
      <text
        ref={textRef}
        filter={filterUrl}
        xmlSpace="preserve"
        className={textClassName}
        style={{
          fill: textColor || undefined,
          fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          letterSpacing,
        }}
      >
        <textPath ref={textPathRef} href={`#${pathId}`}>
          {displayText}
        </textPath>
      </text>
    </svg>
  );
}
