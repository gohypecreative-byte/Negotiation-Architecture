import type { Metadata } from "next";
import { ArchitecturePage } from "@/components/architecture-page";
import "./system.css";

export const metadata: Metadata = {
  title: "The System — Negotiation Architecture",
  description: "Assess, Align, Architect, Activate, Accelerate. Five stages that take a negotiation from fragments to a designed outcome.",
};

export default function NegotiationArchitecturePage() {
  return <ArchitecturePage />;
}
