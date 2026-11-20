"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import manifest from "@/public/hero-scroll-v1/manifest.json";

const frameUrl = (frame: number) => `/hero-scroll-v1/${frame}.webp`;
const clamp = (value: number) => Math.min(manifest.frameCount, Math.max(1, value));

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
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    // Compressed frames are cheap to retain. Only nearby frames occupy decoded memory.
    const blobs = new Map<number, Blob>();
    const cache = new Map<number, ImageBitmap>();
    const fetching = new Set<number>();
    const decoding = new Set<number>();
    const failed = new Set<number>();
    const controller = new AbortController();
    let disposed = false;
    let visible = true;
    let target = 1;
    let drawn = 0;
    let direction = 1;
    let raf = 0;
    const active = () => !disposed && visible && !document.hidden;

    function wantedFrames() {
      const wanted = [target];
      if (reducedMotion.matches || connection?.saveData) return wanted;
      for (let distance = 1; distance <= 8; distance++) {
        wanted.push(clamp(target + distance * direction), clamp(target - distance * direction));
      }
      return [...new Set(wanted)];
    }

    function schedule() {
      if (!raf && active()) raf = requestAnimationFrame(tick);
    }

    async function fetchFrame(frame: number) {
      fetching.add(frame);
      try {
        // Reuse the browser's disk cache across reloads and return visits.
        // The versioned URL changes whenever the sequence is replaced.
        const response = await fetch(frameUrl(frame), {
          signal: controller.signal,
          cache: "force-cache",
        });
        if (!response.ok) throw new Error(`Frame ${frame}: ${response.status}`);
        const blob = await response.blob();
        if (!disposed) blobs.set(frame, blob);
      } catch {
        if (!disposed) failed.add(frame);
      } finally {
        fetching.delete(frame);
        schedule();
      }
    }

    async function decodeFrame(frame: number) {
      decoding.add(frame);
      try {
        const image = await createImageBitmap(blobs.get(frame)!);
        if (disposed) { image.close(); return; }
        cache.set(frame, image);
        // At 960 x 540, 32 decoded frames use at most ~64 MiB.
        while (cache.size > 32) {
          let furthest = frame;
          for (const key of cache.keys()) {
            if (Math.abs(key - target) > Math.abs(furthest - target)) furthest = key;
          }
          cache.get(furthest)?.close();
          cache.delete(furthest);
        }
      } catch {
        failed.add(frame);
      } finally {
        decoding.delete(frame);
        schedule();
      }
    }

    function tick() {
      raf = 0;
      if (!active() || !canvas || !context) return;
      const wanted = wantedFrames();
      // Target and nearby frames always precede speculative downloads.
      const downloads = [...wanted];
      if (!reducedMotion.matches && !connection?.saveData) {
        // A sparse overview makes large scroll jumps useful before full loading.
        for (let frame = 1; frame <= manifest.frameCount; frame += 16) downloads.push(frame);
        for (let frame = 1; frame <= manifest.frameCount; frame++) downloads.push(frame);
      }
      for (const frame of downloads) {
        if (fetching.size >= 3) break;
        if (!blobs.has(frame) && !fetching.has(frame) && !failed.has(frame)) void fetchFrame(frame);
      }
      // Decode nearby frames first, then a compressed fallback for fast jumps.
      let fallback = target;
      let distance = Infinity;
      for (const frame of blobs.keys()) {
        if (!failed.has(frame) && Math.abs(frame - target) < distance) {
          fallback = frame;
          distance = Math.abs(frame - target);
        }
      }
      for (const frame of [...wanted, fallback]) {
        if (decoding.size >= 2) break;
        if (blobs.has(frame) && !cache.has(frame) && !decoding.has(frame) && !failed.has(frame)) void decodeFrame(frame);
      }
      let nearest = 0;
      for (const frame of cache.keys()) {
        if (!nearest || Math.abs(frame - target) < Math.abs(nearest - target)) nearest = frame;
      }
      // Never replace a good visible frame with a worse late-arriving result.
      if (!nearest || nearest === drawn || (drawn && Math.abs(nearest - target) > Math.abs(drawn - target))) return;
      context.drawImage(cache.get(nearest)!, 0, 0);
      canvas.style.opacity = "1";
      drawn = nearest;
    }

    function update(value: number) {
      const next = reducedMotion.matches || connection?.saveData ? 1 : clamp(1 + Math.round(value * (manifest.frameCount - 1)));
      if (next !== target) direction = next > target ? 1 : -1;
      target = next;
      schedule();
    }
    const onPreferenceChange = () => update(progress.get());
    const unsubscribe = progress.on("change", update);
    reducedMotion.addEventListener("change", onPreferenceChange);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) update(progress.get());
    });
    observer.observe(canvas);
    const onVisibilityChange = () => { if (!document.hidden) update(progress.get()); };
    document.addEventListener("visibilitychange", onVisibilityChange);
    update(progress.get());
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      controller.abort();
      unsubscribe();
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(raf);
      cache.forEach(image => image.close());
      blobs.clear();
    };
  }, [progress]);

  return (
    <div className={`sequence-visual ${className}`}>
      {/* The poster remains visible while loading or if decoding is unsupported. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={frameUrl(1)} alt="Negotiation Architecture" fetchPriority="high" width={manifest.width} height={manifest.height} />
      <canvas ref={canvasRef} width={manifest.width} height={manifest.height} aria-hidden="true" style={{ opacity: 0 }} />
    </div>
  );
}
