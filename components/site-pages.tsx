"use client";

import { SiteShell } from "./site-shell";
import { AboutProfile } from "./about-profile";
import { MethodologyContent, ProgramsContent, ResearchContent, InsightsContent, ContactContent } from "./editorial-pages";

export function AboutPage() {
  return <SiteShell><AboutProfile /></SiteShell>;
}
export function MethodologyPage() {
  return <SiteShell><MethodologyContent /></SiteShell>;
}
export function ProgramsPage() {
  return <SiteShell><ProgramsContent /></SiteShell>;
}
export function ResearchPage() {
  return <SiteShell><ResearchContent /></SiteShell>;
}
export function InsightsPage() {
  return <SiteShell><InsightsContent /></SiteShell>;
}
export function ContactPage() {
  return <SiteShell><ContactContent /></SiteShell>;
}
