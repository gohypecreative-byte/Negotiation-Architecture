import type { Metadata } from "next";
import { MethodologyPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Methodology — Negotiation Architecture",
  description:
    "Understand, Analyse, Design, Engage and Achieve. Explore the five connected stages, EXAMIN and four layers of negotiation capability.",
};

export default function Page() {
  return <MethodologyPage />;
}
