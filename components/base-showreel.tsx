"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Hls from "hls.js";

interface BaseShowreelProps {
  theme?: "vellum" | "navy";
}

export function BaseShowreel({ theme = "vellum" }: BaseShowreelProps) {
  const isVellum = theme === "vellum";
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const video = videoRef.current;
    if (!video) return;

    const videoSrc =
      "https://stream.mux.com/WMeTm00eoM2sKOeyvwdKXE01AvzZT1swHe6cpxCpDQ3HI.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hlsRef.current = hls;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.play().catch(() => {});
    }
  }, [isPlaying]);

  return (
    <section
      id="showreel"
      className={`relative pt-16 md:pt-24 pb-0 px-0 transition-colors duration-500 border-b overflow-hidden ${
        isVellum
          ? "bg-white text-[#152540] border-slate-200/80"
          : "bg-[#070F1C] text-white border-white/10"
      }`}
    >
      {/* Section Heading Header */}
      <div className="text-center max-w-3xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border transition-colors ${
            isVellum
              ? "bg-slate-50 border-slate-200/90 text-slate-600"
              : "bg-white/5 border-white/10 text-white/70"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isVellum ? "bg-[#A8741F]" : "bg-[#D3A75E]"
            }`}
          />
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-medium">
            Executive Keynote Reel
          </span>
        </div>

        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.08] ${
            isVellum ? "text-[#152540]" : "text-white"
          }`}
        >
          Discipline Over Improvisation
        </h2>

        <p
          className={`text-xs md:text-sm font-sans uppercase tracking-[0.18em] mt-3.5 max-w-xl mx-auto ${
            isVellum ? "text-slate-500" : "text-white/60"
          }`}
        >
          Live Keynote Symposium &middot; London &middot; Dubai &middot; Geneva
        </p>
      </div>

      {/* Video Container (Edge-to-Edge Full Width, 0px Radius / No Roundness, No Floating Badges) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] max-h-[82vh] overflow-hidden bg-slate-950 border-y border-slate-200/80 group">
        {isPlaying ? (
          <div className="relative w-full h-full bg-black">
            <video
              ref={videoRef}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/70 hover:bg-black text-white text-xs font-sans tracking-wide uppercase backdrop-blur-md border border-white/20 transition-colors"
            >
              Close Video &times;
            </button>
          </div>
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer select-none"
          >
            {/* Poster Image */}
            <Image
              src="/images/gallery/dr-tarun-09.jpg"
              alt="Dr. Tarun Rochwani presenting keynote symposium"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="100vw"
              priority
            />

            {/* Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35 transition-opacity duration-300 group-hover:opacity-75" />

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3.5">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 ${
                    isVellum
                      ? "bg-white text-[#152540] group-hover:bg-[#A8741F] group-hover:text-white"
                      : "bg-[#E67400] text-white group-hover:bg-white group-hover:text-[#152540]"
                  }`}
                >
                  <svg
                    className="w-7 h-7 md:w-9 md:h-9 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xs uppercase font-sans tracking-[0.24em] text-white font-semibold drop-shadow-md">
                  Watch Methodology Reel &middot; 3:45 MIN
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
