"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import StickyContentWrapper, { StickyContentItem } from "@/components/ui/sticky-content-wrapper";

interface FlagshipProps {
  theme?: "vellum" | "navy";
}

// -------------------------------------------------------------
// 1. START HERE QUICK-LADDER
// -------------------------------------------------------------
export function StartHereSection({ theme = "vellum" }: FlagshipProps) {
  const isVellum = theme === "vellum";

  const pathways: StickyContentItem[] = [
    {
      num: "01",
      category: "Diagnostic",
      heading: "Enter the Simulation",
      paragraph:
        "Test your tactical instincts in the Foundation Dynamics laboratory under clinical pressure.",
      duration: "60 Seconds",
      list: [
        "Live high-stakes supplier price demand scenario",
        "Instant archetype diagnostic classification report",
        "Pre-briefing baseline prior to executive advisory counsel",
      ],
      link: {
        href: "#simulation",
        text: "Enter Pathway",
      },
      image: "/images/gallery/dr-tarun-01.jpg",
      alt: "Diagnostic Assessment - Dr. Tarun Rochwani",
    },
    {
      num: "02",
      category: "Blueprint",
      heading: "Read the Prospectus",
      paragraph:
        "Examine the doctoral research foundations, 24 curriculum modules, and deal frameworks.",
      duration: "10 Minutes",
      list: [
        "Doctoral empirical research foundations & behavioral economics",
        "24 institutional curriculum modules and case archives",
        "Multi-stakeholder negotiation governance architecture",
      ],
      link: {
        href: "#prospectus",
        text: "Enter Pathway",
      },
      image: "/images/gallery/dr-tarun-02.jpg",
      alt: "Architectural Blueprint Prospectus",
    },
    {
      num: "03",
      category: "Simulation",
      heading: "Join a Masterclass",
      paragraph:
        "Participate in an intensive clinical laboratory with senior cross-industry dealmakers.",
      duration: "One Evening",
      list: [
        "Real-time live multi-party transaction simulations",
        "Tactical debriefing and counterparty response analytics",
        "Executive cohort of cross-border enterprise dealmakers",
      ],
      link: {
        href: "#simulation",
        text: "Enter Pathway",
      },
      image: "/images/gallery/dr-tarun-03.jpg",
      alt: "Clinical Negotiation Simulation Lab",
    },
    {
      num: "04",
      category: "Advisory",
      heading: "Speak with Faculty",
      paragraph:
        "Private, confidential strategic briefing on active corporate transactions or training.",
      duration: "30 Minutes",
      list: [
        "Strict NDA transaction architecture and strategic counsel",
        "Counterparty psychological profiling & game theory strategy",
        "Bespoke executive & institutional retained counsel",
      ],
      link: {
        href: "#contact",
        text: "Enter Pathway",
      },
      image: "/images/gallery/dr-tarun-08.jpg",
      alt: "Executive Faculty Advisory Briefing",
    },
  ];

  return (
    <section
      id="start-here"
      className="relative w-full bg-[#070B12] text-white border-b border-white/10"
    >
      {/* ARCHITECTURAL SECTION HEADING */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-14 md:pt-20 pb-6 border-b border-white/10">
        {/* Eyebrow Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D3A75E] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.26em] uppercase font-bold text-white">
              Start Here &middot; Direct Pathways
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 font-semibold">
            Zero Sales Pressure &middot; Direct Access
          </span>
        </div>

        {/* Authoritative Primary Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight uppercase text-white leading-[1.05] mt-2">
          Four Modes of Engagement.
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-sans text-white/60 leading-relaxed mt-2 max-w-2xl">
          Calibrated to your immediate transaction priorities. Advance through the pathways below to select your entry point.
        </p>
      </div>

      {/* GSAP PINNED SPLIT-SCREEN EXPERIENCE */}
      <StickyContentWrapper
        items={pathways}
        bgColor="#070B12"
      />
    </section>
  );
}

// -------------------------------------------------------------
// 2. RECOGNITION: THE COST OF IMPROVISATION
// -------------------------------------------------------------
export function RecognitionSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1300px] mx-auto relative z-20" id="recognition">
      <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
        <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#A8741F]"></span>
          Recognition
        </span>
        <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
          Sheet 01 · The Cost of Improvisation
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#152540] leading-tight max-w-4xl">
        Capable professionals lose negotiations for predictable reasons.
      </h2>
      <p className="mt-6 text-base md:text-lg text-stone-600 max-w-3xl leading-relaxed">
        Negotiation failure is rarely a knowledge problem. It is a design problem — and design
        problems repeat until the system changes.
      </p>
      <p className="mt-4 text-lg md:text-xl font-serif italic text-[#A8741F]">
        Every conversation is a design opportunity. Learn to lead it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
        <div className="bg-white p-8 md:p-10 border border-stone-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-[#A8741F] mb-4">
            Improvisation
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-[#152540] mb-3">
            Preparation without architecture
          </h3>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed">
            Content is over-prepared while the psychological and strategic structure of the
            conversation is left to instinct. The outcome is hoped for, not designed.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 border border-stone-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-[#A8741F] mb-4">
            Physiology
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-[#152540] mb-3">
            The adrenaline response
          </h3>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed">
            Pressure, silence and aggression trigger a stress response that produces expensive
            concessions. Composure is a trainable architecture, not a personality trait.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 border border-stone-200/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <span className="block text-[10px] font-bold tracking-[0.28em] uppercase text-[#A8741F] mb-4">
            Single-Issue Thinking
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-[#152540] mb-3">
            Deals collapse on one number
          </h3>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed">
            Price dominates because it is visible. Negotiations stall or die on a single variable
            while the value that could unlock them stays undiscovered.
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 md:p-10 bg-white border-l-4 border-[#A8741F] border-stone-200 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-serif italic text-lg md:text-xl text-[#152540] max-w-2xl">
          Structure is what separates a designed negotiation from an improvised one. Which pattern
          is costing you? Sixty seconds will tell you.
        </p>
        <a
          href="#assess"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#152540] text-white text-xs font-bold tracking-[0.18em] uppercase rounded-none hover:bg-[#070F1C] transition-colors"
        >
          Take the Readiness Assessment
        </a>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 3. READINESS ASSESSMENT: 5-SITUATION DIAGNOSTIC QUIZ
// -------------------------------------------------------------
const QUESTIONS = [
  {
    q: "A counterpart opens with a number far worse than you expected. Your instinct?",
    o: [
      { text: "Counter hard — match aggression with aggression.", type: "A" },
      { text: "Find middle ground quickly so the tone stays positive.", type: "B" },
      { text: "Say little; take it away and respond by email.", type: "C" },
      { text: "Pause, then ask what's behind the number before responding at all.", type: "D" },
    ],
  },
  {
    q: "Midway through, they go silent after your proposal. Twenty seconds pass. You…",
    o: [
      { text: "Restate your case more forcefully — silence means doubt.", type: "A" },
      { text: "Soften the offer slightly to restart the conversation.", type: "B" },
      { text: "Suggest a break; the tension is unproductive.", type: "C" },
      { text: "Hold the silence. It's their move, and silence is information.", type: "D" },
    ],
  },
  {
    q: "They say: 'Take it or leave it — I need an answer today.'",
    o: [
      { text: "Call the bluff and threaten to walk.", type: "A" },
      { text: "Accept if it's roughly acceptable — deadlines are deadlines.", type: "B" },
      { text: "Ask for more time and hope the pressure fades.", type: "C" },
      { text: "Test whether the deadline is real: 'Help me understand what happens tomorrow.'", type: "D" },
    ],
  },
  {
    q: "The deal is stuck on price. Nothing moves. You…",
    o: [
      { text: "Squeeze harder — someone has to give.", type: "A" },
      { text: "Split the difference; fairness closes deals.", type: "B" },
      { text: "Park it and revisit next quarter.", type: "C" },
      { text: "Widen the table: payment terms, scope, timing, risk — trade across variables.", type: "D" },
    ],
  },
  {
    q: "After a strong meeting, the prospect goes quiet for two weeks. You…",
    o: [
      { text: "Send a sharper email: 'We need a decision.'", type: "A" },
      { text: "Send a friendly check-in and wait patiently.", type: "B" },
      { text: "Assume it's dead and move on.", type: "C" },
      { text: "Re-engage with a designed next step: a small commitment that restarts momentum.", type: "D" },
    ],
  },
];

const PROFILES: Record<string, { title: string; desc: string; rx: string }> = {
  A: {
    title: "The Assertor",
    desc: "You bring force to the table — useful energy, but force triggers counter-force. Your deals win points and lose relationships, and manufactured pressure often reads to you as real leverage.",
    rx: "Your highest-leverage development: Quiet Control and EQ Duality — keeping the strength, adding the read.",
  },
  B: {
    title: "The Accommodator",
    desc: "You protect relationships — and pay for them. Concessions come too early and too cheaply, and 'fair' splits systematically favour the better-anchored party.",
    rx: "Your highest-leverage development: the Negotiation Triangle and concession design — warmth with a spine.",
  },
  C: {
    title: "The Avoider",
    desc: "You step back from tension — and deals decide themselves without you. Delay feels safe but silently transfers control to the other side of the table.",
    rx: "Your highest-leverage development: Preparation Architecture and Momentum Architecture — structure that makes engagement safe.",
  },
  D: {
    title: "The Architect",
    desc: "Your instinct is architectural. Your system isn't yet. You already reach for structure under pressure — pausing, diagnosing, widening the table — but instinct alone breaks down under real stakes, unfamiliar counterparts, or a deal you can't afford to lose.",
    rx: "Your highest-leverage development: the full Predictable Outcomes Canvas and live-deal laboratories — turning a good instinct into a repeatable system.",
  },
};

export function ReadinessAssessment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  // Compute live scores based on history
  const scores = React.useMemo(() => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((ans) => {
      if (counts[ans] !== undefined) counts[ans]++;
    });
    return counts;
  }, [answers]);

  const handleSelect = (type: string) => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (currentIndex + 1 < QUESTIONS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentIndex(0);
    setCompleted(false);
  };

  const dominantType = Object.keys(scores).reduce(
    (a, b) => ((scores[a] || 0) > (scores[b] || 0) ? a : b),
    "D"
  );
  const profile = PROFILES[dominantType] || PROFILES.D;
  const totalQuestions = QUESTIONS.length;
  const getPct = (type: string) =>
    Math.round(((scores[type] || 0) / Math.max(1, answers.length || totalQuestions)) * 100);

  return (
    <section
      className="py-20 md:py-28 px-6 md:px-12 bg-[#F7F4EE] border-y border-stone-200 relative z-20"
      id="assess"
    >
      <div className="max-w-3xl mx-auto">
        {/* Clean, Simple Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#A8741F] font-bold block mb-2">
            Diagnostic Assessment · 5 Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540]">
            The Negotiation Readiness Assessment
          </h2>
          <p className="mt-3 text-stone-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Choose what you would actually do under pressure — not what theory advises. Your pattern profile appears instantly.
          </p>
        </div>

        {/* Minimalist Centered Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 md:p-12 shadow-sm">
          {!completed ? (
            <div>
              {/* Card Header: Progress Step & Dots */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-stone-100">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A8741F]">
                  Situation {currentIndex + 1} of {totalQuestions}
                </span>
                <div className="flex items-center gap-1.5">
                  {QUESTIONS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-6 bg-[#A8741F]"
                          : idx < currentIndex
                          ? "w-2 bg-[#152540]"
                          : "w-2 bg-stone-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Scenario Question */}
              <h3 className="font-serif text-xl sm:text-2xl md:text-[26px] text-[#152540] font-normal leading-snug mb-8">
                {QUESTIONS[currentIndex].q}
              </h3>

              {/* Four Clean Option Buttons */}
              <div className="space-y-3">
                {QUESTIONS[currentIndex].o.map((opt, i) => {
                  const letter = ["A", "B", "C", "D"][i];
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.type)}
                      className="group w-full text-left p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-[#152540] hover:border-[#152540] transition-all duration-200 flex items-center gap-4 cursor-pointer"
                    >
                      <span className="w-7 h-7 rounded-full border border-stone-300 font-mono text-xs font-semibold text-stone-500 flex items-center justify-center flex-none group-hover:border-white/40 group-hover:text-white transition-colors">
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base font-sans text-stone-800 group-hover:text-white leading-relaxed transition-colors">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                {currentIndex > 0 ? (
                  <button
                    onClick={handleBack}
                    className="hover:text-[#152540] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>←</span> Previous question
                  </button>
                ) : (
                  <span>First instinct is usually the most accurate</span>
                )}
                <span className="font-mono text-[10.5px]">
                  {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
                </span>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#A8741F] font-bold block mb-1">
                Your Dominant Pattern
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#152540] mb-4">
                {profile.title}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {profile.desc}
              </p>

              {/* 4-Bar Spectrum */}
              <div className="space-y-3.5 my-8 p-5 sm:p-6 bg-stone-50 rounded-xl border border-stone-200">
                {(["A", "B", "C", "D"] as const).map((k) => {
                  const label =
                    k === "A"
                      ? "Assertor"
                      : k === "B"
                      ? "Accommodator"
                      : k === "C"
                      ? "Avoider"
                      : "Architect";
                  const pct = getPct(k);
                  const isTop = k === dominantType;
                  return (
                    <div key={k}>
                      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-1">
                        <span className={isTop ? "text-[#152540] font-bold" : "text-stone-500"}>
                          {label}
                        </span>
                        <span className={isTop ? "text-[#A8741F] font-bold font-mono" : "text-stone-500 font-mono"}>
                          {pct}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-700 ${
                            isTop ? "bg-[#A8741F]" : "bg-[#152540]"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recommendation */}
              <div className="p-4 sm:p-5 rounded-lg bg-[#152540] text-white text-xs sm:text-sm leading-relaxed mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D3A75E] font-bold block mb-1">
                  Strategic Prescription
                </span>
                {profile.rx}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:t@negotiationarchitecture.com?subject=Readiness%20Assessment%20Debrief"
                  className="px-6 py-3.5 bg-[#152540] text-white text-xs font-bold tracking-[0.16em] uppercase rounded-none hover:bg-[#A8741F] transition-colors"
                >
                  Discuss with Faculty
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 border border-stone-300 text-stone-700 text-xs font-bold tracking-[0.16em] uppercase rounded-none hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 4. TRANSFORMATION: WHAT YOU BECOME
// -------------------------------------------------------------
export function TransformationSection() {
  const shifts = [
    {
      before: "You hope for a good result",
      after: "You design the outcome before the conversation begins",
    },
    {
      before: "Pressure triggers concessions",
      after: "Pressure triggers your practiced pause",
    },
    {
      before: "Deals live or die on price",
      after: "You unbundle deals into value no one else saw",
    },
    {
      before: "Strong meetings go silent",
      after: "You engineer momentum and commitment at every step",
    },
    {
      before: "Every negotiation starts from zero",
      after: "Every negotiation compounds into expertise",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1300px] mx-auto relative z-20" id="transformation">
      <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
        <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#A8741F]"></span>
          Aspiration
        </span>
        <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
          Sheet 03 · What You Become
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] leading-tight max-w-4xl">
        The science explains why it works.
        <br />
        The transformation is what you become.
      </h2>
      <p className="mt-4 text-lg md:text-xl font-serif italic text-[#A8741F]">
        From reactive to strategic. From instinct to intelligence.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12 items-start">
        <div className="lg:col-span-7 divide-y divide-stone-200 border-y border-stone-200">
          {shifts.map((s, idx) => (
            <div key={idx} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <span className="sm:col-span-5 text-sm md:text-base text-stone-400">{s.before}</span>
              <span className="hidden sm:block sm:col-span-1 text-center text-[#A8741F] font-bold">→</span>
              <span className="sm:col-span-6 text-sm md:text-base font-semibold text-[#152540]">
                {s.after}
              </span>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-stone-200 rounded-2xl shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#152540] mb-6">
            Graduates learn to
          </h3>
          <ul className="space-y-4 text-sm md:text-base text-stone-600">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Think strategically under sustained commercial pressure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Negotiate with calm, grounded authority and posture</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Influence decisions ethically — agreement that feels like their own idea</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Resolve conflict constructively and preserve relationships through breakdown</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Lead difficult conversations others avoid</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#A8741F] mt-2 flex-none"></span>
              <span>Become the trusted negotiation leader in their organisation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 5. NEGOTIATION, DESIGNED (THE FIVE STAGES)
// -------------------------------------------------------------
export function FiveStagesSection() {
  const stages = [
    {
      no: "01",
      name: "Assess",
      headline: "Understand the situation.",
      desc: "Before any position is taken, the situation is read as it is: the issues in play, the history, the constraints, and what is actually at stake for each side.",
    },
    {
      no: "02",
      name: "Align",
      headline: "Understand people, interests and objectives.",
      desc: "Positions are what people say. Interests are why. Each party's objectives, pressures and decision-makers are mapped until the pieces face the same way.",
    },
    {
      no: "03",
      name: "Architect",
      headline: "Design the negotiation.",
      desc: "Sequence, leverage, options, anchors and concessions are structured into a plan that carries load — the outcome designed before entering the room.",
    },
    {
      no: "04",
      name: "Activate",
      headline: "Execute with precision.",
      desc: "Language, composure and counter-tactics at the table. The structure is live, and every move made in the room is one that was chosen rather than provoked.",
    },
    {
      no: "05",
      name: "Accelerate",
      headline: "Improve outcomes and compound capability.",
      desc: "Every negotiation is reviewed against its design. What worked is kept; what did not is corrected — so the next one starts from further ahead.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0F1C33] text-white relative z-20" id="designed">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end border-b border-white/10 pb-3 mb-10">
          <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#D3A75E] flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#D3A75E]"></span>
            The System
          </span>
          <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-white/50">
            Sheet 04 · Negotiation, Designed
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6">
          Negotiation, designed.
        </h2>
        <p className="text-white/70 max-w-2xl text-base md:text-lg mb-14 leading-relaxed">
          Every negotiation that goes well was built before it began. Five stages take a situation
          from fragments to a designed outcome.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((st) => (
            <div
              key={st.no}
              className="bg-white/[0.04] p-6 md:p-8 rounded-xl border border-white/10 hover:border-[#D3A75E]/60 transition-colors group"
            >
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D3A75E]">
                {st.no}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-2 mb-2 group-hover:text-[#D3A75E] transition-colors">
                {st.name}
              </h3>
              <div className="text-xs font-semibold text-white/90 mb-3 italic font-serif">
                {st.headline}
              </div>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center border-t border-white/10 pt-10">
          <p className="text-white/80 font-serif italic text-lg md:text-xl mb-6">
            The same five stages are taught, practised and assessed at every certification level —{" "}
            <span className="text-[#D3A75E]">and applied directly in 1:1 advisory work.</span>
          </p>
          <a
            href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#152540] text-xs font-bold tracking-[0.18em] uppercase hover:bg-[#F3EBDE] transition-colors"
          >
            Book a 1:1 Strategy Session
          </a>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 6. ORIGIN STORY: THE CRISIS THAT BUILT A DISCIPLINE
// -------------------------------------------------------------
export function OriginStorySection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F3EBDE]/40 border-y border-stone-200 relative z-20" id="story">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end border-b border-stone-300 pb-3 mb-10">
          <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#A8741F]"></span>
            Trust
          </span>
          <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-500">
            Sheet 04 · The Origin
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] mb-6">
              The Crisis That Built a Discipline
            </h2>
            <blockquote className="border-l-2 border-[#A8741F] pl-6 text-xl md:text-2xl font-serif italic text-[#152540] my-8 leading-snug">
              &ldquo;Some people spend a lifetime learning how to negotiate with others. My journey began
              by learning how to negotiate with uncertainty.&rdquo;
              <cite className="block text-xs font-sans not-italic font-bold tracking-widest uppercase text-stone-500 mt-3">
                Dr. Tarun L. Rochwani · Founder
              </cite>
            </blockquote>

            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
              In 2006, I found myself working in one of the world&apos;s most ambitious real estate development
              environments. Landmark towers, luxury hotels, palaces, vast mixed-use masterplans. Behind
              every completed structure stood hundreds of organisations and thousands of interlocking contracts.
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6">
              Then on 15 September 2008, Lehman Brothers collapsed. Within days, capital froze, projects halted,
              and carefully planned careers evaporated. Intelligent people stopped collaborating. Capable leaders
              struggled.
            </p>
            <p className="text-base md:text-lg text-stone-700 leading-relaxed mb-8">
              That moment triggered a twenty-year obsession across 26 countries: why do negotiations fail precisely
              when they matter most? The answer wasn&apos;t commercial. It was human. It led to doctoral research
              validating that conflict-resolution capability — not aggressive positioning — is the single greatest
              predictor of durable outcome.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-stone-200">
              <div className="p-3 bg-white border border-stone-200 rounded-lg">
                <span className="block text-[10px] font-bold text-[#A8741F] uppercase">Experience</span>
                <span className="text-xs text-stone-600 mt-1 block">26 Countries</span>
              </div>
              <div className="p-3 bg-white border border-stone-200 rounded-lg">
                <span className="block text-[10px] font-bold text-[#A8741F] uppercase">Research</span>
                <span className="text-xs text-stone-600 mt-1 block">Defended DBA</span>
              </div>
              <div className="p-3 bg-white border border-stone-200 rounded-lg">
                <span className="block text-[10px] font-bold text-[#A8741F] uppercase">Practice</span>
                <span className="text-xs text-stone-600 mt-1 block">Live Deals</span>
              </div>
              <div className="p-3 bg-white border border-stone-200 rounded-lg">
                <span className="block text-[10px] font-bold text-[#A8741F] uppercase">Teaching</span>
                <span className="text-xs text-stone-600 mt-1 block">3-Tier Cert</span>
              </div>
              <div className="p-3 bg-white border border-stone-200 rounded-lg col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-bold text-[#A8741F] uppercase">Mastery</span>
                <span className="text-xs text-stone-600 mt-1 block">Org Scaling</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="photo-tint relative aspect-[4/5] rounded-2xl overflow-hidden border border-stone-300 shadow-md">
              <Image
                src="/images/gallery/dr-tarun-03.jpg"
                alt="Dr. Tarun L. Rochwani presenting negotiation frameworks"
                fill
                className="object-cover object-center"
              />
              <div className="absolute z-10 bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-mono">
                Dr. Tarun L. Rochwani, DBA · Founder & Strategist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 7. THE SCIENCE: RESOLUTION PREMIUM & AUDITABLE RIGOUR
// -------------------------------------------------------------
export function TheScienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1300px] mx-auto relative z-20" id="science">
      <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
        <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#A8741F]"></span>
          The Science
        </span>
        <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
          Sheet 05 · Evidence Over Assertion
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] mb-4">
        Research-anchored. Auditable. Citable.
      </h2>
      <p className="text-stone-600 max-w-3xl text-base md:text-lg mb-12">
        Most negotiation training rests on tactics and anecdote — engaging, but not auditable.
        Negotiation Architecture is built to the opposite standard: every framework is anchored in
        defended doctoral research, published academic literature, or documented executive practice.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-7 bg-[#0F1C33] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="text-5xl md:text-7xl font-serif font-bold text-[#D3A75E] tracking-tight">
            β = 0.484
          </div>
          <h3 className="font-serif text-2xl font-bold mt-4 mb-3 text-white">
            The Resolution Premium
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
            Within the context studied, conflict-resolution capability — not tactical advantage — was
            the dominant predictor of negotiation outcome. In high-stakes, relationship-bound deals,
            durable value is created by negotiators trained to resolve rather than merely to win.
          </p>
          <div className="text-xs text-white/50 font-mono tracking-wider border-t border-white/10 pt-4">
            Doctoral Research (DBA) · PLS-SEM Analysis · Cross-Border Dealings
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 border border-stone-200 rounded-xl shadow-sm">
            <b className="font-serif text-lg text-[#152540] block mb-1">Scientific Rigour</b>
            <p className="text-xs text-stone-600">Methods that survive academic and faculty due diligence</p>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-xl shadow-sm">
            <b className="font-serif text-lg text-[#152540] block mb-1">Ethical Influence</b>
            <p className="text-xs text-stone-600">Agreement designed intentionally, never extracted</p>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-xl shadow-sm">
            <b className="font-serif text-lg text-[#152540] block mb-1">Experiential Labs</b>
            <p className="text-xs text-stone-600">Observed behaviour trained, not slides covered</p>
          </div>
          <div className="bg-white p-6 border border-stone-200 rounded-xl shadow-sm">
            <b className="font-serif text-lg text-[#152540] block mb-1">Measured Growth</b>
            <p className="text-xs text-stone-600">Six competency domains, evaluated and certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 8. DISTINCTION: CONVENTIONAL TRAINING VS NEGOTIATION ARCHITECTURE
// -------------------------------------------------------------
export function DistinctionSection() {
  const rows = [
    {
      conventional: "Tactics taught from a stage",
      architecture: "A four-layer system in which each layer carries the one above it",
    },
    {
      conventional: "Anecdote, personal style and war stories",
      architecture: "Defended doctoral research, published literature and documented practice",
    },
    {
      conventional: "A one-off workshop",
      architecture: "A three-level certification pathway gated by live assessed capstones",
    },
    {
      conventional: "Content covered, attendance recorded",
      architecture: "Behaviour trained, observed and scored against six competency domains",
    },
    {
      conventional: "Preparation as reviewing the file",
      architecture: "Preparation as designed architecture — issues, leverage, sequence, scenarios",
    },
    {
      conventional: "Win the exchange",
      architecture: "Resolve the conflict — the proven dominant predictor of durable outcome",
    },
    {
      conventional: "Ends when the room empties",
      architecture: "A 90-day reinforcement arc, alumni ecosystem and annual recertification",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-y border-stone-200 relative z-20" id="distinction">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
          <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#A8741F]"></span>
            Distinction
          </span>
          <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
            Sheet 07 · What Makes This Different
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] mb-4">
          Most negotiation training teaches moves.
          <br />
          This builds a structure.
        </h2>
        <p className="text-stone-600 max-w-3xl text-base md:text-lg mb-12">
          The difference is not the content. It is what the content is built on, how it is assessed,
          and whether any of it survives contact with a real deal.
        </p>

        <div className="border-t border-stone-300 divide-y divide-stone-200">
          <div className="py-4 grid grid-cols-1 md:grid-cols-12 gap-4 font-bold text-xs uppercase tracking-wider">
            <div className="md:col-span-5 text-stone-400">Conventional Training</div>
            <div className="md:col-span-7 text-[#A8741F]">Negotiation Architecture</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5 text-sm md:text-base text-stone-500 font-sans">
                {r.conventional}
              </div>
              <div className="md:col-span-7 text-sm md:text-base text-[#152540] font-semibold flex items-center gap-3">
                <span className="w-2 h-[1px] bg-[#A8741F] flex-none hidden md:block"></span>
                <span>{r.architecture}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 9. INTERACTIVE SIMULATION LAB: THE PRICE DEMAND
// -------------------------------------------------------------
export function SimulationLabSection() {
  const [selectedMove, setSelectedMove] = useState<string | null>("d");

  const moves: Record<
    string,
    {
      num: string;
      label: string;
      dialogue: string;
      verdict: string;
      verdictType: "costly" | "partial" | "architect";
      title: string;
      consequence: string;
      mechanisms: string[];
    }
  > = {
    a: {
      num: "01",
      label: "Push Back Immediately",
      dialogue:
        "“Twelve per cent is impossible. We need to talk about eight at most.”",
      verdict: "Costly Move",
      verdictType: "costly",
      title: "Force Meets Force (The Counter-Anchor Trap)",
      consequence:
        "An immediate counter concedes the core premise: you have just accepted that an increase is warranted and are now merely bargaining over its size. Aggression triggers reflexive defensiveness and surrenders strategic silence.",
      mechanisms: [
        "Premise Concession",
        "Loss of Frame Control",
        "Adrenaline Escalation",
      ],
    },
    b: {
      num: "02",
      label: "Protect Relationship",
      dialogue:
        "“I understand costs are rising. Let me see what I can get approved.”",
      verdict: "Costly Move",
      verdictType: "costly",
      title: "The Accommodation Trap (Unilateral Softening)",
      consequence:
        "Empathy without structural discipline is a concession pattern. Promising to 'see what I can get approved' legitimises the supplier's unsubstantiated demand before auditing a single cost driver.",
      mechanisms: [
        "Premature Validation",
        "Asymmetric Softening",
        "Unilateral Concession",
      ],
    },
    c: {
      num: "03",
      label: "Buy Time",
      dialogue: "“Let me take this away and come back to you.”",
      verdict: "Partial Move",
      verdictType: "partial",
      title: "Time Without Architecture (Static Delay)",
      consequence:
        "Pausing is better than reacting emotionally, but retreating without a diagnostic question allows the counterparty's 12% anchor to solidify within their leadership while yielding zero structural leverage.",
      mechanisms: [
        "Unleveraged Pause",
        "Anchor Solidification",
        "Surrendered Momentum",
      ],
    },
    d: {
      num: "04",
      label: "Pause, Then Open the Number",
      dialogue:
        "“Twelve per cent. Help me understand what's driving that number — walk me through the cost lines that moved.”",
      verdict: "The Architect's Move",
      verdictType: "architect",
      title: "Engineered Silence & Burden Reversal",
      consequence:
        "The calculated 4-second silence dissipates room adrenaline. Repeating 'Twelve per cent' mirrors their anchor neutrally without accepting it. The diagnostic question immediately reverses the burden of proof, unbundling an arbitrary demand into verifiable variables.",
      mechanisms: [
        "Tactical Silence",
        "Neutral Mirroring",
        "Burden Reversal",
        "Variable Unbundling",
      ],
    },
  };

  const active = selectedMove ? moves[selectedMove] : moves.d;

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white border-y border-stone-200 relative z-20"
      id="simulation"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Clean Architectural Eyebrow & Headline */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#A8741F]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#A8741F]">
              Diagnostic Simulation &middot; Sheet 09
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-black tracking-tight leading-[1.1] mb-3">
            How would you negotiate this?
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            One clinical transaction from the Foundation Dynamics laboratory. Select a tactical response to inspect how the architecture unbundles counterparty leverage.
          </p>
        </div>

        {/* Unified 2-Column Architectural Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: The Case Dossier (Clean, structured, editorial) */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Case Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-stone-500">
                  Case 01 &middot; Live Transaction
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-black text-white">
                  Active Scenario
                </span>
              </div>

              {/* The Ultimatum */}
              <div className="mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-400 block mb-2 font-semibold">
                  The Counterparty Demand:
                </span>
                <blockquote className="font-serif italic text-xl sm:text-2xl text-black leading-snug border-l-2 border-black pl-4 py-1">
                  &ldquo;Our costs have gone up. The price increases by twelve per cent from next month &mdash; I&apos;m afraid that&apos;s simply the situation.&rdquo;
                </blockquote>
              </div>

              {/* Context Description */}
              <p className="text-sm text-stone-600 leading-relaxed font-sans mb-8">
                Your key supplier, three years into a critical partnership, delivers this ultimatum at the opening of your quarterly review. The room goes silent.
              </p>
            </div>

            {/* Structured Telemetry Ledger */}
            <div className="pt-6 border-t border-stone-200 space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-stone-500 uppercase tracking-wider">
                  Counterparty Anchor
                </span>
                <span className="text-black font-bold tracking-widest">
                  +12.0% Fixed
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-stone-500 uppercase tracking-wider">
                  Room Dynamic
                </span>
                <span className="text-stone-800">High Pressure Silence</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-stone-500 uppercase tracking-wider">
                  Tactical Objective
                </span>
                <span className="text-[#A8741F] font-bold">
                  Reverse Burden of Proof
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Tactical Moves (2x2 Grid) + Instant Diagnostic Report */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {/* 4 Moves in a Clean 2x2 Grid */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-stone-500 font-bold block mb-3">
                Select Your Tactical Move:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(moves).map(([key, item]) => {
                  const isSelected = selectedMove === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedMove(key)}
                      className={`text-left p-4 border transition-all duration-150 flex flex-col justify-between ${
                        isSelected
                          ? "bg-black text-white border-black shadow-sm"
                          : "bg-white text-black border-stone-200 hover:border-black"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2 w-full">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isSelected ? "text-[#D3A75E]" : "text-stone-400"
                          }`}
                        >
                          {item.num}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                            isSelected ? "text-stone-300" : "text-stone-500"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-[13px] font-serif italic leading-snug line-clamp-2 ${
                          isSelected ? "text-white" : "text-stone-700"
                        }`}
                      >
                        {item.dialogue}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Result Dossier */}
            <div className="p-6 sm:p-7 border border-stone-200 bg-stone-50/70 border-l-4 border-l-black">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-[0.2em] ${
                    active.verdictType === "architect"
                      ? "text-[#A8741F]"
                      : "text-stone-600"
                  }`}
                >
                  {active.verdictType === "architect" ? "★ " : "• "}
                  {active.verdict}
                </span>
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-stone-400">
                  Diagnostic Analysis
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-black mb-2">
                {active.title}
              </h4>

              <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed mb-5">
                {active.consequence}
              </p>

              {/* Tactical Mechanisms */}
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 block mb-2 font-semibold">
                  Mechanisms Activated:
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.mechanisms.map((m, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 bg-white border border-stone-300 text-stone-800 font-mono uppercase tracking-wider"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 10. PATHWAYS: THREE WAYS IN
// -------------------------------------------------------------
export function PathwaysSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1300px] mx-auto relative z-20" id="coaching">
      <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
        <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#A8741F]"></span>
          Three Ways In
        </span>
        <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
          Sheet 09A · Choose Your Pathway
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] mb-4">
        Work directly with Dr. Tarun. Or learn the system.
      </h2>
      <p className="text-stone-600 max-w-3xl text-base md:text-lg mb-12">
        One is a private strategy engagement on a deal you are preparing for right now. The other is a
        structured pathway to designing every conversation you will ever have.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 md:p-10 border-2 border-[#A8741F] rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#A8741F] block mb-2">
              Direct Advisory
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#152540] mb-3">
              Work directly with Dr. Tarun
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              A private strategy session on a negotiation that matters — the structure, the leverage,
              the psychological counter-tactics, designed with you before entering the room.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-stone-600 mb-8">
              <li>• Critical corporate & M&A transactions</li>
              <li>• High-stakes founder investment rounds</li>
              <li>• Hostile deadlocks & multi-jurisdiction claims</li>
              <li>• Executives who require mastery, not a course</li>
            </ul>
          </div>
          <a
            href="mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session%20%E2%80%94%20request"
            className="w-full py-4 bg-[#152540] text-white text-center text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#070F1C] transition-colors"
          >
            Book a 1:1 Strategy Session
          </a>
        </div>

        <div className="bg-white p-8 md:p-10 border border-stone-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 block mb-2">
              Negotiation Mastery
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#152540] mb-3">
              Learn the system
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Three certification levels, each gated by a live, assessed capstone — from structured
              negotiator to complete negotiation architect.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-stone-600 mb-8">
              <li>• Level I: Foundation Dynamics</li>
              <li>• Level II: Strategic Negotiation Architect</li>
              <li>• Level III: Advanced Negotiation Architect</li>
            </ul>
          </div>
          <a
            href="#certification"
            className="w-full py-4 border border-[#152540] text-[#152540] text-center text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#152540] hover:text-white transition-colors"
          >
            Explore Certifications
          </a>
        </div>

        <div className="bg-white p-8 md:p-10 border border-stone-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400 block mb-2">
              For Organisations
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#152540] mb-3">
              Build team capability
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Executive education, in-house programmes, leadership development, advisory and speaking —
              a common architecture across commercial teams.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-stone-600 mb-8">
              <li>• Corporate cohort certifications</li>
              <li>• Deal-specific advisory for leadership teams</li>
              <li>• Keynotes and executive symposiums</li>
            </ul>
          </div>
          <a
            href="mailto:t@negotiationarchitecture.com?subject=Corporate%20enquiry%20%E2%80%94%20Negotiation%20Architecture"
            className="w-full py-4 border border-[#152540] text-[#152540] text-center text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#152540] hover:text-white transition-colors"
          >
            Corporate Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 11. CERTIFICATION CURRICULUM: 3 LEVELS & 24 MODULES
// -------------------------------------------------------------
export function CertificationCurriculumSection() {
  const [openLevel, setOpenLevel] = useState<number | null>(1);

  const level1Modules = [
    { code: "F1", title: "The Architecture Mindset", desc: "From reactive bargaining to designed outcomes; personal losing-pattern audit." },
    { code: "F2", title: "Composure Under Pressure", desc: "Quiet Control — a practiced pause between stimulus and response." },
    { code: "F3", title: "Preparation Architecture I", desc: "The Negotiation Triangle: aspiration, reservation price, alternatives, intelligence." },
    { code: "F4", title: "Interests & the Value Map", desc: "Beneath positions to interests; distributive, integrative and congruent issues." },
    { code: "F5", title: "Language of the Table", desc: "Framing, Directional Questioning, strategic silence, Emotional Signal Naming." },
    { code: "F6", title: "Openings & Anchors", desc: "First-move design: anchoring, opening posture, counter-anchoring." },
    { code: "F7", title: "Concessions & Commitment", desc: "Trade, never give; concession patterns and genuine commitment." },
    { code: "F8", title: "Foundation Dynamics Capstone", desc: "Assessed full-cycle simulation, written canvas and knowledge assessment." },
  ];

  const level2Modules = [
    { code: "P1", title: "Behavioural Intelligence", desc: "EQ Duality in full: reading cues in real time, empathy and strategy together." },
    { code: "P2", title: "Trust & Authority Architecture", desc: "The Trust Audit: psychological safety with strength." },
    { code: "P3", title: "The Predictable Outcomes Canvas", desc: "Full-depth pre-negotiation engineering on live deals." },
    { code: "P4", title: "Tactics & Counter-Tactics", desc: "Neutralising pressure; the Pre-Emptive Disclosure Protocol." },
    { code: "P5", title: "Multi-Issue Value Creation", desc: "Deal Unbundling: deadlocks into multi-variable agreements." },
    { code: "P6", title: "Momentum Architecture", desc: "Anti-stall systems, the commitment ladder, decision velocity." },
    { code: "P7", title: "Closing Architecture", desc: "Commitment engineering and implementation design." },
    { code: "P8", title: "Strategic Negotiation Architect Capstone", desc: "The live deal: strategised, executed, debriefed, defended." },
  ];

  const level3Modules = [
    { code: "M1", title: "Multi-Party & Coalition Negotiation", desc: "Sequencing influence across rooms that disagree." },
    { code: "M2", title: "Cross-Cultural & Global Negotiation", desc: "Culture as context, not script." },
    { code: "M3", title: "Crisis & Dispute Resolution", desc: "The Resolution Premium: preserving value through breach." },
    { code: "M4", title: "Internal Negotiation Architecture", desc: "Mandates, internal coalitions, the two-table reality." },
    { code: "M5", title: "Negotiation Leadership", desc: "Team roles, deal governance, negotiation culture." },
    { code: "M6", title: "Deal & Ecosystem Architecture", desc: "Multi-party and partnership-level deal design." },
    { code: "M7", title: "Teaching, Coaching & Debrief Discipline", desc: "The facilitation practicum." },
    { code: "M8", title: "Master Capstone", desc: "Combined-complexity simulation and faculty panel defence." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-y border-stone-200 relative z-20" id="certification">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-end border-b border-stone-200 pb-3 mb-10">
          <span className="text-[10.5px] font-bold tracking-[0.3em] uppercase text-[#A8741F] flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#A8741F]"></span>
            Commitment
          </span>
          <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-stone-400">
            Sheet 10 · The Certification Pathway
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#152540] mb-4">
          Three credentials. One ascending identity.
        </h2>
        <p className="text-stone-600 max-w-3xl text-base md:text-lg mb-12">
          Each level carries its own assessment gate: a live, observed capstone scored against
          competency descriptors. Never self-paced. Never waived.
        </p>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#FBF8F2] p-8 border-t-4 border-[#A8741F] border-stone-200 rounded-b-xl shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#A8741F] uppercase block mb-1">
                Level I
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#152540] mb-2">Foundation Dynamics</h3>
              <p className="text-xs font-serif italic text-stone-500 mb-4">
                Reactive negotiator → <b>structured negotiator</b>
              </p>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 mb-6">
                <li>• Complete 2-party negotiation architecture</li>
                <li>• 8 modules: mindset, composure, anchoring, concessions</li>
                <li>• Assessed capstone simulation & canvas</li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-stone-500 uppercase">
              24 instructional + 16 practice hours
            </div>
          </div>

          <div className="bg-[#FBF8F2] p-8 border-t-4 border-[#152540] border-stone-200 rounded-b-xl shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#152540] uppercase block mb-1">
                Level II
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#152540] mb-2">Strategic Negotiation Architect</h3>
              <p className="text-xs font-serif italic text-stone-500 mb-4">
                Structured negotiator → <b>strategic negotiation designer</b>
              </p>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 mb-6">
                <li>• Behavioural intelligence & Predictable Outcomes Canvas</li>
                <li>• Counter-tactics, multi-issue value creation, momentum</li>
                <li>• Live-deal capstone defended before faculty</li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-stone-500 uppercase">
              32 instructional + 24 practice hours
            </div>
          </div>

          <div className="bg-[#FBF8F2] p-8 border-t-4 border-[#A8741F] border-stone-200 rounded-b-xl shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#A8741F] uppercase block mb-1">
                Level III
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#152540] mb-2">Advanced Negotiation Architect</h3>
              <p className="text-xs font-serif italic text-stone-500 mb-4">
                Strategic negotiator → <b>organisational capability builder</b>
              </p>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 mb-6">
                <li>• Multi-party, cross-cultural & crisis negotiation</li>
                <li>• Team capability & ecosystem deal design</li>
                <li>• Facilitation practicum for trainer status</li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-stone-500 uppercase">
              40 instructional + 32 practice hours
            </div>
          </div>
        </div>

        {/* 24-Module Accordion */}
        <div className="border border-stone-200 rounded-2xl overflow-hidden bg-[#FBF8F2]">
          <div className="border-b border-stone-200">
            <button
              onClick={() => setOpenLevel(openLevel === 1 ? null : 1)}
              className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#A8741F] block mb-1">
                  Level I Curriculum
                </span>
                <span className="font-serif text-xl font-bold text-[#152540]">
                  Foundation Dynamics — Eight Modules
                </span>
              </div>
              <span className="text-2xl font-bold text-stone-400">{openLevel === 1 ? "−" : "+"}</span>
            </button>
            {openLevel === 1 && (
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50/50">
                {level1Modules.map((m) => (
                  <div key={m.code} className="bg-white p-4 border border-stone-200 rounded-lg">
                    <span className="text-xs font-bold text-[#A8741F] block mb-1">{m.code}</span>
                    <b className="text-sm text-[#152540] block mb-1">{m.title}</b>
                    <p className="text-xs text-stone-600 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-stone-200">
            <button
              onClick={() => setOpenLevel(openLevel === 2 ? null : 2)}
              className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#152540] block mb-1">
                  Level II Curriculum
                </span>
                <span className="font-serif text-xl font-bold text-[#152540]">
                  Strategic Negotiation Architect — Eight Modules
                </span>
              </div>
              <span className="text-2xl font-bold text-stone-400">{openLevel === 2 ? "−" : "+"}</span>
            </button>
            {openLevel === 2 && (
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50/50">
                {level2Modules.map((m) => (
                  <div key={m.code} className="bg-white p-4 border border-stone-200 rounded-lg">
                    <span className="text-xs font-bold text-[#152540] block mb-1">{m.code}</span>
                    <b className="text-sm text-[#152540] block mb-1">{m.title}</b>
                    <p className="text-xs text-stone-600 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setOpenLevel(openLevel === 3 ? null : 3)}
              className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#A8741F] block mb-1">
                  Level III Curriculum
                </span>
                <span className="font-serif text-xl font-bold text-[#152540]">
                  Advanced Negotiation Architect — Eight Modules
                </span>
              </div>
              <span className="text-2xl font-bold text-stone-400">{openLevel === 3 ? "−" : "+"}</span>
            </button>
            {openLevel === 3 && (
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50/50">
                {level3Modules.map((m) => (
                  <div key={m.code} className="bg-white p-4 border border-stone-200 rounded-lg">
                    <span className="text-xs font-bold text-[#A8741F] block mb-1">{m.code}</span>
                    <b className="text-sm text-[#152540] block mb-1">{m.title}</b>
                    <p className="text-xs text-stone-600 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 12. PROSPECTUS CALLOUT SECTION
// -------------------------------------------------------------
export function ProspectusSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#152540] text-white relative z-20" id="prospectus">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-8">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D3A75E] block mb-2">
            Prospectus
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            The Certification Prospectus
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            The complete guide to the Negotiation Architecture pathway: curriculum maps for all three
            levels, delivery formats and schedules, assessment standards, and the certification
            process — in one document.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <a
            href="mailto:t@negotiationarchitecture.com?subject=Prospectus%20Request%20%E2%80%94%20Negotiation%20Architecture"
            className="w-full py-4 bg-white text-[#152540] text-center text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#F3EBDE] transition-colors"
          >
            Request Full Prospectus
          </a>
          <a
            href="mailto:t@negotiationarchitecture.com?subject=Question%20about%20the%20prospectus"
            className="w-full py-4 border border-white/40 text-white text-center text-xs font-bold tracking-[0.16em] uppercase hover:bg-white/10 transition-colors"
          >
            Ask the Faculty a Question
          </a>
          <p className="text-xs text-white/50 text-center">
            Questions are answered directly by Dr. Tarun within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 13. COMPREHENSIVE INSTITUTIONAL FOOTER
// -------------------------------------------------------------
export function InstitutionalFooter({ theme = "vellum" }: FlagshipProps) {
  const isVellum = theme === "vellum";

  return (
    <footer
      id="contact"
      className={`relative border-t py-20 px-6 md:px-16 transition-colors duration-500 z-20 ${
        isVellum ? "border-stone-200 bg-[#FBF8F2]" : "border-white/10 bg-[#070F1C] text-white"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Brand Monogram */}
        <div className="flex flex-col items-center justify-center mb-16">
          <Image
            src="/images/brand/na-monogram.png"
            alt="Negotiation Architecture by Dr. Tarun Rochwani"
            width={240}
            height={150}
            className="h-20 w-auto object-contain hover:scale-105 transition-transform"
          />
          <div className="text-xs font-serif font-bold tracking-[0.3em] uppercase text-[#A8741F] mt-4">
            Structure · Precision · Influence by Design
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs">
          <div>
            <h4 className="font-bold tracking-widest uppercase text-[#A8741F] mb-4">The System</h4>
            <ul className="space-y-2 text-stone-600">
              <li><a href="#science" className="hover:text-[#A8741F]">The Science</a></li>
              <li><a href="#story" className="hover:text-[#A8741F]">The Origin Story</a></li>
              <li><a href="#designed" className="hover:text-[#A8741F]">Five Stages</a></li>
              <li><a href="#distinction" className="hover:text-[#A8741F]">What Makes It Different</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-widest uppercase text-[#A8741F] mb-4">Programmes</h4>
            <ul className="space-y-2 text-stone-600">
              <li><a href="#certification" className="hover:text-[#A8741F]">Certification Pathway</a></li>
              <li><a href="#certification" className="hover:text-[#A8741F]">Foundation Dynamics</a></li>
              <li><a href="#certification" className="hover:text-[#A8741F]">Strategic Architect</a></li>
              <li><a href="#certification" className="hover:text-[#A8741F]">Advanced Architect</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-widest uppercase text-[#A8741F] mb-4">Organisations</h4>
            <ul className="space-y-2 text-stone-600">
              <li><a href="#coaching" className="hover:text-[#A8741F]">Corporate Solutions</a></li>
              <li><a href="#coaching" className="hover:text-[#A8741F]">Industries Served</a></li>
              <li><a href="mailto:t@negotiationarchitecture.com?subject=Keynote%20or%20advisory%20enquiry" className="hover:text-[#A8741F]">Keynotes & Advisory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-widest uppercase text-[#A8741F] mb-4">Engage</h4>
            <ul className="space-y-2 text-stone-600">
              <li><a href="#assess" className="hover:text-[#A8741F]">Readiness Assessment</a></li>
              <li><a href="#prospectus" className="hover:text-[#A8741F]">Download Prospectus</a></li>
              <li><a href="#simulation" className="hover:text-[#A8741F]">Simulation Lab</a></li>
              <li><a href="mailto:t@negotiationarchitecture.com" className="hover:text-[#A8741F]">Speak with Faculty</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold tracking-widest uppercase text-[#A8741F] mb-4">Direct Contact</h4>
            <p className="text-stone-600 leading-relaxed mb-3">
              One inbox. Answered directly by Dr. Tarun Rochwani.
            </p>
            <a
              href="mailto:t@negotiationarchitecture.com"
              className="font-serif text-base font-semibold text-[#152540] hover:text-[#A8741F] transition-colors block"
            >
              t@negotiationarchitecture.com
            </a>
            <span className="text-[11px] text-stone-400 mt-2 block">
              Dubai & Mumbai · Response within 1 business day
            </span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Negotiation Architecture by Dr. Tarun L. Rochwani. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Research-informed</span>
            <span>·</span>
            <span>Commercially practised</span>
            <span>·</span>
            <span>Institutionally defensible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
