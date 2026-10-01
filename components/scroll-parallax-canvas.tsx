"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 600;

function getFrameUrl(index: number): string {
  const clamped = Math.min(Math.max(Math.round(index), 1), TOTAL_FRAMES);
  const pad = String(clamped).padStart(4, "0");
  return `/negotiation_parallax_frames_HQ/negotiation_parallax_frames/frame_${pad}.jpg`;
}

interface ScrollParallaxCanvasProps {
  progress: number;
  className?: string;
}

export function ScrollParallaxCanvas({
  progress,
  className = "",
}: ScrollParallaxCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const loadedIndicesRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Helper to draw a specific frame index to canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];

    // If target frame is still loading, find nearest loaded frame
    if (!img) {
      let nearest = 1;
      let minDiff = Infinity;
      for (const loadedIdx of loadedIndicesRef.current) {
        const diff = Math.abs(loadedIdx - frameIndex);
        if (diff < minDiff) {
          minDiff = diff;
          nearest = loadedIdx;
        }
      }
      img = imagesRef.current[nearest];
    }

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Map incoming scroll progress to target frame
  useEffect(() => {
    const target = Math.min(
      Math.max(Math.round(progress * (TOTAL_FRAMES - 1)) + 1, 1),
      TOTAL_FRAMES
    );
    targetFrameRef.current = target;
  }, [progress]);

  // Smooth inertial interpolation loop
  useEffect(() => {
    let animId: number;

    const tick = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        // Smooth inertia lerp
        currentFrameRef.current += diff * 0.16;
        const frameToRender = Math.round(currentFrameRef.current);
        drawFrame(frameToRender);
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  // Progressive preloader: Tier 1 (Immediate) -> Tier 2 (Keyframes) -> Tier 3 (Intermediate)
  useEffect(() => {
    let isCancelled = false;

    const loadSingleFrame = (idx: number): Promise<void> => {
      if (imagesRef.current[idx]) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(idx);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[idx] = img;
            loadedIndicesRef.current.add(idx);
            if (idx === 1) {
              setFirstFrameReady(true);
              drawFrame(1);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    // Tier 1: Immediately load frame 1, then the first 30 frames
    loadSingleFrame(1).then(async () => {
      if (isCancelled) return;
      const initialBatch: Promise<void>[] = [];
      for (let i = 2; i <= 30; i++) {
        initialBatch.push(loadSingleFrame(i));
      }
      await Promise.all(initialBatch);

      if (isCancelled) return;

      // Tier 2: Preload keyframes every 4th frame (32, 36, 40... 600)
      const keyframeBatch: Promise<void>[] = [];
      for (let i = 32; i <= TOTAL_FRAMES; i += 4) {
        keyframeBatch.push(loadSingleFrame(i));
      }
      await Promise.all(keyframeBatch);

      if (isCancelled) return;

      // Tier 3: Fill in all remaining intermediate frames in smaller chunks
      for (let i = 31; i <= TOTAL_FRAMES; i++) {
        if (isCancelled) break;
        if (!imagesRef.current[i]) {
          await loadSingleFrame(i);
        }
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Instant fallback poster for frame 0001 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/negotiation_parallax_frames_HQ/negotiation_parallax_frames/frame_0001.jpg"
        alt="Negotiation Architecture 3D Simulation Preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
          firstFrameReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* High-Performance 60fps Smooth Canvas */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full object-cover pointer-events-none block"
      />
    </div>
  );
}
