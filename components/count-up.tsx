"use client";

import { useEffect, useRef } from "react";

const formatNumber = new Intl.NumberFormat("en-US");

export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined = undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      element.textContent = formatNumber.format(value);
    };
    const onPreferenceChange = () => {
      if (preference.matches) finish();
    };

    if (preference.matches || !("IntersectionObserver" in window)) {
      finish();
      return;
    }

    element.textContent = "0";
    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer?.disconnect();
      let started: number | undefined;
      const tick = (now: number) => {
        started ??= now;
        const progress = Math.min((now - started) / 1600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = formatNumber.format(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(element);
    preference.addEventListener("change", onPreferenceChange);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [value]);

  return (
    <>
      <span className="sr-only">{formatNumber.format(value)}</span>
      <span ref={ref} aria-hidden="true">{formatNumber.format(value)}</span>
    </>
  );
}

