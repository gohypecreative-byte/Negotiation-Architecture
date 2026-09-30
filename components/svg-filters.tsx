"use client";

import React from "react";

export function SvgFilters() {
  return (
    <svg
      className="hidden pointer-events-none fixed top-0 left-0 w-0 h-0 overflow-hidden"
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0 }}
    >
      <defs>
        <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur
            id="blur-primitive"
            stdDeviation="0"
            result="blur"
            data-min-deviation="0"
            data-max-deviation="10"
          />
          <feMerge>
            <feMergeNode in="blur" />
          </feMerge>
        </filter>

        <filter id="blur2" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur
            id="blur2-primitive"
            in="SourceAlpha"
            stdDeviation="0"
            result="glow"
            data-min-deviation="0"
            data-max-deviation="30"
          />
          <feColorMatrix
            result="bluralpha"
            type="matrix"
            values="0 -1 0 0 0 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1.8 0 "
          />
          <feOffset in="bluralpha" dx="0" dy="0" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="distortionFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.03"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="noise"
          />
          <feDisplacementMap
            id="distortion-primitive"
            in="SourceGraphic"
            in2="noise"
            scale="0"
            data-min-scale="0"
            data-max-scale="100"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="userSpaceOnUse"
          />
        </filter>

        <filter id="distortionFilter2">
          <feGaussianBlur stdDeviation="10" result="glow" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0 0.1"
            numOctaves="2"
            seed="2"
            stitchTiles="noStitch"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
            result="noise"
          />
          <feDisplacementMap
            id="distortion2-primitive"
            in="SourceGraphic"
            in2="noise"
            scale="0"
            data-min-scale="0"
            data-max-scale="50"
            xChannelSelector="R"
            yChannelSelector="B"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
            filterUnits="userSpaceOnUse"
            result="displacement"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="displacement" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
