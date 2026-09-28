"use client";

import { motion, useReducedMotion } from "motion/react";

const routes = [
  "M 45 82 C 110 82 115 175 205 167 C 315 157 205 22 160 80 C 100 156 344 200 400 128 C 430 96 445 108 474 108",
  "M 45 125 C 130 200 278 24 302 81 C 340 175 123 178 196 92 C 268 8 321 144 400 116 C 430 104 448 108 474 108",
  "M 45 171 C 122 129 140 37 215 43 C 321 52 265 212 207 173 C 132 121 322 51 400 97 C 436 118 446 108 474 108",
];

export function TransformationIllustration() {
  const reduce = useReducedMotion();
  return (
    <figure className="transformation-visual" aria-label="From reactive to strategic: tangled paths meet a deliberate pause, then become clear routes to composure, value and commitment.">
      <div className="transformation-visual-labels" aria-hidden="true"><span>Reactive · Led by instinct</span><span>Strategic · Led by design</span></div>
      <motion.svg viewBox="0 0 1000 220" fill="none" aria-hidden="true" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .5 }}>
        {routes.map((d, index) => <motion.path key={d} d={d} stroke="var(--navy)" strokeOpacity={.22 + index * .12} strokeWidth="1.5" strokeLinecap="round"
          variants={{ hidden: { pathLength: reduce ? 1 : 0 }, visible: { pathLength: 1 } }} transition={{ duration: reduce ? 0 : 1.5, delay: reduce ? 0 : index * .15 }} />)}
        {[45, 108, 171].map((y, index) => <motion.g key={y}
          variants={{ hidden: { opacity: reduce ? 1 : 0 }, visible: { opacity: 1 } }} transition={{ duration: reduce ? 0 : .6, delay: reduce ? 0 : 1.2 + index * .2 }}>
          <path d={`M 526 108 H 610 Q 645 108 645 ${y === 108 ? 108 : y < 108 ? 78 : 138} V ${y} H 845`} stroke="var(--brass)" strokeWidth="1.5" />
          <circle cx="845" cy={y} r="4" fill="var(--brass)" />
          <text x="866" y={y + 4} fill="var(--navy)" fontSize="13" fontFamily="var(--font-body), sans-serif">{["Composure", "Value", "Commitment"][index]}</text>
        </motion.g>)}
        <circle cx="500" cy="108" r="26" fill="var(--paper)" stroke="var(--brass)" strokeWidth="1.5" />
        <path d="M 495 100 V 116 M 505 100 V 116" stroke="var(--gold-deep)" strokeWidth="2" strokeLinecap="round" />
        <text x="500" y="157" textAnchor="middle" fill="var(--gold-deep)" fontSize="10" letterSpacing="1.6" fontFamily="var(--font-body), sans-serif">THE PRACTICED PAUSE</text>
        {[82, 125, 171].map(y => <circle key={y} cx="45" cy={y} r="3" fill="var(--navy)" opacity=".45" />)}
      </motion.svg>
      <figcaption className="transformation-visual-caption">A practiced pause. Composure, value and commitment.</figcaption>
    </figure>
  );
}
