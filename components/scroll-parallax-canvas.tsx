"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import manifest from "@/public/Negotiation_Architecture_Hero_30FPS_WebP/manifest.json";

const frameUrl = (frame: number) =>
  `/Negotiation_Architecture_Hero_30FPS_WebP/frames/frame_${String(frame).padStart(4, "0")}.webp`;

// Decode frames close to their on-screen size, never above the source width.
const decodeWidth = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const fittedWidth = Math.min(window.innerWidth, window.innerHeight * manifest.width / manifest.height) * dpr;
  return Math.min(960, manifest.width, Math.max(640, Math.ceil(fittedWidth / 64) * 64));
};

export function ScrollParallaxCanvas({ progress, className = "" }: {
  progress: MotionValue<number>;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cache = new Map<number, ImageBitmap>();
    const pending = new Set<number>();
    const failed = new Set<number>();
    const controller = new AbortController();
    let disposed = false;
    let target = 1;
    let drawn = 0;
    let direction = 1;
    let raf = 0;
    let idleTimer = 0;
    let loopRaf = 0;
    let loopStart = 0;
    let loopEnd = 0;
    let loopEpoch: number | null = null;
    let visible = true;
    // Two seconds of source footage, eased forward and back over 4.8 seconds.
    const loopSpan = 60;
    const loopDuration = 4800;

    function stopLoop() {
      window.clearTimeout(idleTimer);
      cancelAnimationFrame(loopRaf);
      loopRaf = 0;
      loopStart = 0;
      loopEpoch = null;
    }

    function animateLoop(now: number) {
      if (disposed || !visible || document.hidden || reducedMotion.matches) return;
      // Wait for the whole short segment so idle playback never skips unloaded frames.
      const frames = Array.from({ length: Math.abs(loopEnd - loopStart) + 1 }, (_, i) => Math.min(loopStart, loopEnd) + i);
      if (frames.some(frame => failed.has(frame))) {
        stopLoop();
        return;
      }
      const ready = frames.every(frame => cache.has(frame));
      if (ready) {
        if (loopEpoch === null) loopEpoch = now;
        // Forward then backward with eased turnarounds, avoiding a hard loop cut.
        const phase = ((now - loopEpoch) % loopDuration) / loopDuration;
        const position = (1 - Math.cos(phase * Math.PI * 2)) / 2;
        const next = Math.round(loopStart + position * (loopEnd - loopStart));
        direction = next >= target ? 1 : -1;
        target = next;
        scheduleDraw();
      }
      loopRaf = requestAnimationFrame(animateLoop);
    }

    function queueLoop() {
      stopLoop();
      if (!visible || document.hidden || reducedMotion.matches) return;
      idleTimer = window.setTimeout(() => {
        // At the end of the film, loop backwards from the current frame instead.
        loopStart = target;
        loopEnd = target + loopSpan <= manifest.frameCount
          ? target + loopSpan
          : Math.max(1, target - loopSpan);
        pump();
        loopRaf = requestAnimationFrame(animateLoop);
      }, 180);
    }

    function draw() {
      raf = 0;
      if (disposed || !canvas || !context) return;
      const nearest = [...cache.keys()].sort((a, b) => Math.abs(a - target) - Math.abs(b - target))[0];
      if (nearest === undefined || nearest === drawn) return;
      const image = cache.get(nearest)!;
      if (canvas.width !== image.width || canvas.height !== image.height) {
        canvas.width = image.width;
        canvas.height = image.height;
      }
      context.drawImage(image, 0, 0);
      canvas.style.opacity = "1";
      drawn = nearest;
    }

    function scheduleDraw() {
      if (!raf && !disposed) raf = requestAnimationFrame(draw);
    }

    async function load(frame: number) {
      pending.add(frame);
      try {
        const response = await fetch(frameUrl(frame), { signal: controller.signal });
        if (!response.ok) throw new Error(`Frame ${frame}: ${response.status}`);
        const image = await createImageBitmap(await response.blob(), {
          resizeWidth: decodeWidth(),
          resizeQuality: "high",
        });
        if (disposed) { image.close(); return; }
        cache.set(frame, image);
        // Keep decoded memory bounded, even after scrolling through the entire sequence.
        // 64 frames at a maximum 960px decode width use about 127 MiB.
        // Mobile frames decode smaller; protect the active loop from stale requests.
        const maxCached = 64;
        while (cache.size > maxCached) {
          const candidates = [...cache.keys()].filter(frame => !loopStart || frame < Math.min(loopStart, loopEnd) || frame > Math.max(loopStart, loopEnd));
          const furthest = candidates.sort((a, b) => Math.abs(b - target) - Math.abs(a - target))[0];
          if (furthest === undefined) break;
          cache.get(furthest)?.close();
          cache.delete(furthest);
        }
        scheduleDraw();
      } catch {
        if (!disposed) failed.add(frame);
      } finally {
        pending.delete(frame);
        if (!disposed) pump();
      }
    }

    function pump() {
      const wanted = [target];
      if (loopStart) {
        for (let frame = Math.min(loopStart, loopEnd); frame <= Math.max(loopStart, loopEnd); frame++) wanted.push(frame);
      }
      if (!loopStart && !reducedMotion.matches) {
        for (let distance = 1; distance <= 12; distance++) {
          wanted.push(target + distance * direction, target - distance * direction);
        }
      }
      for (const frame of wanted) {
        if (pending.size >= 4) break;
        if (frame < 1 || frame > manifest.frameCount || cache.has(frame) || pending.has(frame) || failed.has(frame)) continue;
        void load(frame);
      }
    }

    function update(value: number) {
      stopLoop();
      const next = reducedMotion.matches ? 1 : 1 + Math.round(Math.min(1, Math.max(0, value)) * (manifest.frameCount - 1));
      direction = next >= target ? 1 : -1;
      target = next;
      scheduleDraw();
      pump();
      queueLoop();
    }
    const onPreferenceChange = () => update(progress.get());
    const unsubscribe = progress.on("change", update);
    reducedMotion.addEventListener("change", onPreferenceChange);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) queueLoop();
      else stopLoop();
    });
    observer.observe(canvas);
    const onVisibilityChange = () => {
      if (document.hidden) stopLoop();
      else queueLoop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    update(progress.get());
    return () => {
      disposed = true;
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      controller.abort();
      unsubscribe();
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(raf);
      cache.forEach((image) => image.close());
    };
  }, [progress]);

  return (
    <div className={`sequence-visual ${className}`}>
      {/* The poster remains visible if loading fails or JavaScript is unavailable. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={frameUrl(1)} alt="Negotiation Architecture" fetchPriority="high" width={manifest.width} height={manifest.height} />
      <canvas ref={canvasRef} aria-hidden="true" style={{ opacity: 0 }} />
    </div>
  );
}
