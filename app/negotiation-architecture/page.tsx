import type { Metadata } from "next";
import { MethodologyPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Negotiation Architecture",
  description:
    "Understand, Analyse, Design, Engage and Achieve. Explore the five connected stages, EXAMIN, four capability layers and the science behind Negotiation Architecture.",
};

export default function Page() {
  return <MethodologyPage />;
}
