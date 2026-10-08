"use client";

import React from "react";
import { SiteShell, useOpenConsult } from "./site-shell";
import { PageHero } from "./page-hero";
import {
  AudienceSection,
  ContactSection,
  ExperienceSection,
  FaqSection,
  GlobalPerspectiveSection,
  LatestInsightsSection,
  MethodologySection,
  OutcomeCtaSection,
  ProgramsSection,
  ResearchSection,
  SpeakingSection,
  TestimonialsSection,
  WhatIsSection,
} from "./negotiation-home";

// Each inner page is the shared shell around a small composition of the
// existing home-page sections. The body components live inside the shell so
// they can reach the consultation modal through useOpenConsult().

function AboutBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Dr. Tarun L. Rochwani"
        lede="Theorist, strategic advisor and founder of Negotiation Architecture, a research-led framework for better outcomes in complex negotiations."
      />
      <WhatIsSection onOpenConsult={open} />
      <ExperienceSection onOpenConsult={open} />
      <GlobalPerspectiveSection />
      <TestimonialsSection />
      <OutcomeCtaSection onOpenConsult={open} />
    </>
  );
}

function MethodologyBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="A Framework Built for Real Decisions"
        lede="Five connected stages that take a negotiation from first understanding to sustained outcomes."
      />
      <MethodologySection onOpenConsult={open} />
      <AudienceSection onOpenConsult={open} />
      <FaqSection onOpenConsult={open} />
      <OutcomeCtaSection onOpenConsult={open} />
    </>
  );
}

function ProgramsBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Coaching, Programs and Masterclasses"
        lede="Structured, practical learning for individuals, teams and organisations that negotiate for a living."
      />
      <ProgramsSection onOpenConsult={open} />
      <AudienceSection onOpenConsult={open} />
      <SpeakingSection onOpenConsult={open} />
      <OutcomeCtaSection onOpenConsult={open} />
    </>
  );
}

function ResearchBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="The Science Behind the Practice"
        lede="Research themes, frameworks and evidence that inform how Negotiation Architecture is taught and applied."
      />
      <ResearchSection onOpenConsult={open} />
      <LatestInsightsSection onOpenConsult={open} />
      <OutcomeCtaSection onOpenConsult={open} />
    </>
  );
}

function InsightsBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Articles, Ideas and Perspectives"
        lede="The latest thinking on negotiation, influence, strategy and decision-making."
      />
      <LatestInsightsSection onOpenConsult={open} />
      <ResearchSection onOpenConsult={open} />
      <OutcomeCtaSection onOpenConsult={open} />
    </>
  );
}

function ContactBody() {
  const open = useOpenConsult();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a Conversation"
        lede="Tell us about the negotiation ahead of you and we will suggest the right place to begin."
      />
      <ContactSection onOpenConsult={open} />
      <FaqSection onOpenConsult={open} />
    </>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <AboutBody />
    </SiteShell>
  );
}

export function MethodologyPage() {
  return (
    <SiteShell>
      <MethodologyBody />
    </SiteShell>
  );
}

export function ProgramsPage() {
  return (
    <SiteShell>
      <ProgramsBody />
    </SiteShell>
  );
}

export function ResearchPage() {
  return (
    <SiteShell>
      <ResearchBody />
    </SiteShell>
  );
}

export function InsightsPage() {
  return (
    <SiteShell>
      <InsightsBody />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <ContactBody />
    </SiteShell>
  );
}
