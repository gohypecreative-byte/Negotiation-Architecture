"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { ScrollParallaxCanvas } from "./scroll-parallax-canvas";

interface BaseHeroBannerProps {
  theme?: "vellum" | "navy";
}

function MobileHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let disposed = false;
    const update = () => {
      if (document.hidden || !visible || reducedMotion.matches) {
        video.pause();
        if (reducedMotion.matches) setShowControls(true);
      } else {
        video.muted = true;
        void video.play().catch(() => {
          if (!disposed) setShowControls(true);
        });
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    reducedMotion.addEventListener("change", update);
    update();
    return () => {
      disposed = true;
      video.pause();
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return <video
    ref={videoRef}
    className="mobile-hero-video"
    src="/negotiation-hero-mobile.mp4"
    poster="/Negotiation_Architecture_Hero_30FPS_WebP/frames/frame_0001.webp"
    width={960}
    height={540}
    muted
    playsInline
    loop
    preload="auto"
    controls={showControls}
    aria-label="Negotiation Architecture introduction"
  >Your browser does not support inline video. <a href="/negotiation-hero-mobile.mp4">Watch the introduction</a></video>;
}

export function BaseHeroBanner({ theme = "vellum" }: BaseHeroBannerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [mobile, setMobile] = useState<boolean | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section ref={containerRef} id="hero" className="sequence-hero" data-theme={theme} aria-label="Negotiation Architecture introduction">
      <div className="sequence-pin">
        {mobile === true ? <MobileHeroVideo /> : mobile === false ? <ScrollParallaxCanvas progress={scrollYProgress} /> : null}
      </div>
    </section>
  );
}
