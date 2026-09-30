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

    // Position Y relative to document
    let svgRect = svgEl.getBoundingClientRect();
    let positionY = svgRect.top + window.pageYOffset;

    const onResize = () => {
      svgRect = svgEl.getBoundingClientRect();
      positionY = svgRect.top + window.pageYOffset;
      try {
        const len = pathEl.getTotalLength();
        if (len > 0) pathLength = len;
      } catch {}
    };

    window.addEventListener("resize", onResize);

    // Codrops computeOffset function:
    // When element is entering bottom of viewport: positionY - scrollY = window.innerHeight -> offset = pathLength
    // When element is at top of viewport: positionY - scrollY = 0 -> offset = -pathLength / 2
    const computeOffset = () => {
      const viewportY = positionY - window.pageYOffset;
      const winH = window.innerHeight;
      if (reverse) {
        return map(viewportY, winH, 0, -pathLength * 0.5, pathLength * 0.9);
      }
      return map(viewportY, winH, 0, pathLength, -pathLength * 0.6);
    };

    // Interpolation state as in Codrops
    const startOffset = {
      value: computeOffset(),
      amt: 0.22,
    };
    startOffset.value = computeOffset();
    textPathEl.setAttribute("startOffset", `${startOffset.value}`);

    const scroll = {
      value: window.pageYOffset,
      amt: 0.17,
    };

    let entered = false;
    let isVisible = false;
    let rafId: number | null = null;

    // IntersectionObserver as in Codrops
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.intersectionRatio > 0;
        if (!isVisible) {
          entered = false;
          // update on exit to keep consistent
          update();
        }
      });
    });

    observer.observe(svgEl);

    // Codrops update loop
    const update = () => {
      const currentOffset = computeOffset();
      startOffset.value = !entered
        ? currentOffset
        : lerp(startOffset.value, currentOffset, startOffset.amt);
      textPathEl.setAttribute("startOffset", `${startOffset.value.toFixed(1)}`);

      // SVG Filter velocity mapping
      const currentScroll = window.pageYOffset;
      scroll.value = !entered
        ? currentScroll
        : lerp(scroll.value, currentScroll, scroll.amt);
      const distance = Math.abs(scroll.value - currentScroll);

      if (primitiveEl) {
        if (!isDistortion) {
          const dev = clamp(map(distance, 0, 400, minVal, maxVal), minVal, maxVal);
          primitiveEl.setAttribute("stdDeviation", dev.toFixed(2));
        } else {
          const scale = clamp(map(distance, 0, 200, minVal, maxVal), minVal, maxVal);
          if ((primitiveEl as any).scale?.baseVal !== undefined) {
            (primitiveEl as any).scale.baseVal = scale;
          } else {
            primitiveEl.setAttribute("scale", scale.toFixed(1));
          }
        }
      }

      if (!entered) {
        entered = true;
      }
    };

    const render = () => {
      if (isVisible) {
        update();
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", onResize);
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
