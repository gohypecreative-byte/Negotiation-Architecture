"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BaseHeader } from "@/components/base-header";
import { BaseHeroBanner } from "@/components/base-hero-banner";
import { BaseIntro } from "@/components/base-intro";
import { BaseShowreel } from "@/components/base-showreel";
import { AnimatedSvgTextPath } from "@/components/text-on-path";
import { SvgFilters } from "@/components/svg-filters";
import {
  StartHereSection,
  RecognitionSection,
  ReadinessAssessment,
  TransformationSection,
  FiveStagesSection,
  OriginStorySection,
  TheScienceSection,
  DistinctionSection,
  SimulationLabSection,
  PathwaysSection,
  CertificationCurriculumSection,
  ProspectusSection,
  InstitutionalFooter,
} from "@/components/na-flagship-sections";

function ScrollComeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`transition-transform duration-500 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}

export function CodropsHome() {
  const [theme, setTheme] = useState<"vellum" | "navy">("vellum");

  const isVellum = theme === "vellum";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isVellum ? "bg-white text-[#152540]" : "navy-bg text-white"
      }`}
    >
      {/* SVG Motion Blur & Distortion Filters */}
      <SvgFilters />

      {/* Base Structures Fixed Header with Hamburger & Nav Panel */}
      <BaseHeader theme={theme} />

      {/* Base Structures Full-Screen Hero Banner */}
      <BaseHeroBanner theme={theme} />

      {/* Start Here Quick Ladder */}
      <StartHereSection theme={theme} />

      {/* Base Structures Blueprint Intro Section */}
      <BaseIntro theme={theme} />

      {/* SVG Text Path 1 & 2 (Kinetic Motion along Curves directly from Codrops) */}
      <div className="relative py-6 overflow-hidden">
        <AnimatedSvgTextPath
          d="M 0 100 Q 250 200 500 100 Q 750 0 1000 100"
          text="STOP IMPROVISING. EVERY HIGH-STAKES CONVERSATION IS AN ARCHITECTURAL OPPORTUNITY."
          filterType="blur"
          viewBox="0 0 1000 200"
          fontSize={40}
          textColor={isVellum ? "#152540" : "#ffffff"}
        />
        <AnimatedSvgTextPath
          d="M 0 100 Q 250 0 500 100 Q 750 200 1000 100"
          text="WHEN THE ROOM GOES SILENT, THE UNPREPARED HEAR PANIC. THE ARCHITECT EXERCISES LEVERAGE."
          filterType="blur2"
          viewBox="0 0 1000 200"
          fontSize={36}
          reverse={true}
          textColor={isVellum ? "#9B6817" : "#E67400"}
          className="mt-2 md:mt-4"
        />
      </div>

      {/* Base Structures Executive Spotlight / Showreel Section */}
      <BaseShowreel theme={theme} />

      {/* Recognition Section */}
      <RecognitionSection />

      {/* Readiness Assessment Diagnostic Quiz */}
      <ReadinessAssessment />

      {/* Staggered Grid 1: Core Tenets (Scrolls Up Smoothly into View) */}
      <div className="codrops-grid max-w-[1300px] mx-auto mt-0 md:mt-2 mb-14 md:mb-20 px-6 md:px-12 relative z-20" id="discipline">
        <ScrollComeUp delay={0} className="codrops-grid__item">
          <span className="codrops-grid__item-number">01</span>
          <div className="codrops-grid__item-img-wrap relative w-full aspect-[4/5] min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden my-4 border border-slate-200/90 shadow-md group">
            <Image
              src="/images/gallery/dr-tarun-01.jpg"
              alt="The Adrenaline Paradox"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="codrops-grid__item-img object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <h3 className="codrops-grid__item-title font-sans font-bold text-xl md:text-2xl uppercase">
            The Adrenaline Paradox
          </h3>
          <p className="codrops-grid__item-description">
            Pressure triggers an unmanaged physiological response that produces expensive
            concessions. In our practice, composure is not an innate trait—it is an engineered
            architecture of timed pauses and structured silence.
          </p>
        </ScrollComeUp>

        <ScrollComeUp delay={140} className="codrops-grid__item">
          <span className="codrops-grid__item-number">02</span>
          <div className="codrops-grid__item-img-wrap relative w-full aspect-[4/5] min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden my-4 border border-slate-200/90 shadow-md group">
            <Image
              src="/images/gallery/dr-tarun-02.jpg"
              alt="Strategic Asymmetry"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="codrops-grid__item-img object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="codrops-grid__item-title font-sans font-bold text-xl md:text-2xl uppercase">
            Strategic Asymmetry
          </h3>
          <p className="codrops-grid__item-description">
            The amateur prepares arguments; the master prepares the opponent&apos;s options. When you
            control the structure of their choices, agreement is not extracted—it is discovered by
            them voluntarily.
          </p>
        </ScrollComeUp>
      </div>

      {/* SVG Text Path 3 & 4 (Kinetic Distortion Curves directly from Codrops) */}
      <div className="relative py-6 overflow-hidden">
        <AnimatedSvgTextPath
          d="M 0 50 Q 100 0 200 100 Q 300 200 650 50 C 750 0 750 150 1000 50"
          text="PREPARATION WITHOUT ARCHITECTURE IS MERELY REHEARSED HOPE."
          filterType="distortion"
          viewBox="0 0 1000 200"
          fontSize={40}
          textColor={isVellum ? "#9B6817" : "#E67400"}
        />
        <AnimatedSvgTextPath
          d="M 0 200 Q 150 300 300 200 Q 700 0 1000 150"
          text="PRESSURE TRIGGERS CONCESSIONS ONLY WHEN STRUCTURE IS ABSENT."
          filterType="distortion2"
          viewBox="0 0 1000 300"
          fontSize={36}
          reverse={true}
          textColor={isVellum ? "#152540" : "#ffffff"}
          className="mt-2 md:mt-4"
        />
      </div>

      {/* The Five Stages of Negotiation Architecture */}
      <FiveStagesSection />

      {/* Origin Story: The Crisis That Built a Discipline */}
      <OriginStorySection />

      {/* The Science & Resolution Premium */}
      <TheScienceSection />

      {/* Distinction: Conventional Training vs Negotiation Architecture */}
      <DistinctionSection />

      {/* Interactive Simulation Lab */}
      <SimulationLabSection />

      {/* Staggered Grid 2: Advanced Strategy (Scrolls Up Smoothly into View) */}
      <div className="codrops-grid max-w-[1300px] mx-auto mt-0 md:mt-2 mb-8 md:mb-12 px-6 md:px-12 relative z-20" id="advisory">
        <ScrollComeUp delay={0} className="codrops-grid__item">
          <span className="codrops-grid__item-number">03</span>
          <div className="codrops-grid__item-img-wrap relative w-full aspect-[4/5] min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden my-4 border border-slate-200/90 shadow-md group">
            <Image
              src="/images/gallery/dr-tarun-05.jpeg"
              alt="Shadow Advisory"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="codrops-grid__item-img object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="codrops-grid__item-title font-sans font-bold text-xl md:text-2xl uppercase">
            Shadow Advisory
          </h3>
          <p className="codrops-grid__item-description">
            Discreet strategic counsel for CEOs, founders, and sovereign boards facing critical
            transactions, hostile takeovers, and multi-jurisdictional disputes where failure is not an
            option.
          </p>
        </ScrollComeUp>

        <ScrollComeUp delay={140} className="codrops-grid__item">
          <span className="codrops-grid__item-number">04</span>
          <div className="codrops-grid__item-img-wrap relative w-full aspect-[4/5] min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden my-4 border border-slate-200/90 shadow-md group">
            <Image
              src="/images/gallery/dr-tarun-06.jpeg"
              alt="Pre-Roundtable War-Gaming"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="codrops-grid__item-img object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="codrops-grid__item-title font-sans font-bold text-xl md:text-2xl uppercase">
            Pre-Roundtable War-Gaming
          </h3>
          <p className="codrops-grid__item-description">
            We replicate counterparty tactics, artificial urgency, and aggressive maneuvers in
            controlled simulations before entering the room. Every pivot is rehearsed and mastered.
          </p>
        </ScrollComeUp>
      </div>

      {/* Transformation: What You Become */}
      <TransformationSection />

      {/* Three Ways In Pathways */}
      <PathwaysSection />

      {/* Certification Curriculum & 24 Modules */}
      <CertificationCurriculumSection />

      {/* SVG Text Path 5 (Codrops Arch Curve) */}
      <div className="relative py-6 overflow-hidden">
        <AnimatedSvgTextPath
          d="M 0 0 Q 200 150 500 150 Q 850 150 1000 0"
          text="EVERY NEGOTIATION IS DESIGNED. THE QUESTION IS — WHO DESIGNED YOURS?"
          filterType="blur2"
          viewBox="0 0 1000 200"
          fontSize={38}
          textColor={isVellum ? "#8A5A12" : "#E67400"}
        />
      </div>

      {/* Prospectus Section */}
      <ProspectusSection />

      {/* Comprehensive Institutional Footer */}
      <InstitutionalFooter theme={theme} />
    </div>
  );
}
