"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

type Hub = {
  id: string;
  region: string;
  cities: string;
  note: string;
  /** Percent offsets inside the map frame. */
  top: number;
  left: number;
};

const HUBS: Hub[] = [
  {
    id: "na",
    region: "North America",
    cities: "New York · Toronto · San Francisco",
    note: "Board-level deal advisory, M&A alignment and enterprise sales programs.",
    top: 37,
    left: 23,
  },
  {
    id: "eu",
    region: "Europe",
    cities: "London · Zurich · Amsterdam",
    note: "Executive coaching, procurement capability and cross-border partnerships.",
    top: 28,
    left: 48,
  },
  {
    id: "me",
    region: "Middle East",
    cities: "Dubai · Riyadh · Doha",
    note: "Major EPC contracts, sovereign and family-office mandates, dispute resolution.",
    top: 43,
    left: 61,
  },
  {
    id: "sa",
    region: "South Asia",
    cities: "Mumbai · Bengaluru · Delhi",
    note: "Founder and scale-up negotiations, supplier leverage and masterclasses.",
    top: 50,
    left: 68,
  },
  {
    id: "apac",
    region: "Asia-Pacific",
    cities: "Singapore · Hong Kong · Sydney",
    note: "Regional commercial leadership programs and multi-party consensus work.",
    top: 56,
    left: 76,
  },
];

const MAX_TILT = 3;

/**
 * Interactive world map: hover, focus or tap a hub to read where and how the
 * work happens (only while hovering or focused), and the frame tilts gently
 * toward the pointer. Honours reduced-motion preferences.
 */
export function GlobalMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      reduceMotion.current = mq.matches;
      if (mq.matches) setTilt({ x: 0, y: 0 });
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion.current || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * MAX_TILT * 2, y: px * MAX_TILT * 2 });
  }, []);

  const resetTilt = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  const shownId = activeId;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="[perspective:1400px]">
        <div
          ref={frameRef}
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            resetTilt();
            setActiveId(null);
          }}
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#091120] shadow-2xl transition-transform duration-300 ease-out will-change-transform"
        >
          <Image
            src="/images/web/global-world-map.jpg"
            alt="World map highlighting regions where Negotiation Architecture has worked"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14]/55 via-transparent to-[#060B14]/25 pointer-events-none" />

          {/* Hub markers */}
          {HUBS.map((hub) => {
            const isShown = hub.id === shownId;
            const dimmed = shownId !== null && !isShown;
            const flipX = hub.left > 60;
            const flipY = hub.top < 30;
            return (
              <div
                key={hub.id}
                className="absolute"
                style={{ top: `${hub.top}%`, left: `${hub.left}%` }}
              >
                <button
                  type="button"
                  aria-label={`${hub.region}: ${hub.cities}`}
                  onMouseEnter={() => setActiveId(hub.id)}
                  onFocus={() => setActiveId(hub.id)}
                  onBlur={() => setActiveId(null)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`relative -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full outline-none cursor-pointer transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-[#C89B59] ${
                    dimmed ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-[#C89B59]/60 ${
                      isShown ? "animate-ping" : "scale-0"
                    }`}
                  />
                  <span
                    className={`absolute inset-1 rounded-full border border-[#C89B59]/70 transition-transform duration-300 ${
                      isShown ? "scale-125" : "scale-100"
                    }`}
                  />
                  <span
                    className={`relative h-2.5 w-2.5 rounded-full border border-white shadow transition-colors duration-300 ${
                      isShown ? "bg-white" : "bg-[#C89B59]"
                    }`}
                  />
                </button>

                {/* Detail card */}
                <div
                  role="tooltip"
                  className={`absolute z-10 w-60 rounded-xl border border-[#C89B59]/35 bg-[#0B1322]/95 backdrop-blur-sm px-4 py-3.5 text-left shadow-xl transition-all duration-200 ${
                    isShown ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-1"
                  } ${flipX ? "right-5" : "left-5"} ${flipY ? "top-5" : "bottom-5"}`}
                >
                  <div className="flex items-center gap-2 text-[#C89B59]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase">
                      {hub.region}
                    </span>
                  </div>
                  <p className="mt-1.5 font-serif text-base text-white leading-snug">{hub.cities}</p>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-slate-300">{hub.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
