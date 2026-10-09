"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import manifest from "@/public/Parallax_HQ_1920x1080_409_Frames/manifest.json";

const frameUrl = (frame: number) =>
  `/Parallax_HQ_1920x1080_409_Frames/frame_${String(frame).padStart(4, "0")}.webp`;

// Decode frames close to their on-screen size (16:9 cover), never above the 1920px source.
const decodeWidth = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const coverWidth = Math.max(window.innerWidth, (window.innerHeight * 16) / 9) * dpr;
  return Math.min(manifest.width, Math.max(960, Math.ceil(coverWidth / 64) * 64));
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
        // Full-width 1920px bitmaps are ~8MB each, so hold fewer of them.
        const maxCached = image.width >= 1600 ? 24 : 36;
        while (cache.size > maxCached) {
          const furthest = [...cache.keys()].sort((a, b) => Math.abs(b - target) - Math.abs(a - target))[0];
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
      if (!reducedMotion.matches) {
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
      const next = reducedMotion.matches ? 1 : 1 + Math.round(Math.min(1, Math.max(0, value)) * (manifest.frameCount - 1));
      direction = next >= target ? 1 : -1;
      target = next;
      scheduleDraw();
      pump();
    }
    const onPreferenceChange = () => update(progress.get());
    const unsubscribe = progress.on("change", update);
    reducedMotion.addEventListener("change", onPreferenceChange);
    update(progress.get());
    return () => {
      disposed = true;
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
      <img src={frameUrl(1)} alt="A negotiation map connecting people, needs, interests, risks and options" fetchPriority="high" width={1920} height={1080} />
      <canvas ref={canvasRef} aria-hidden="true" style={{ opacity: 0 }} />
    </div>
  );
}
