import type { Metadata } from "next";
import { MethodologyPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Methodology — Negotiation Architecture",
  description:
    "The five-stage Negotiation Architecture framework: Understand, Analyse, Design, Engage and Achieve.",
};

export default function Page() {
  return <MethodologyPage />;
}
