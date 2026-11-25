import type { Metadata } from "next";
import { AboutPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "About — Negotiation Architecture",
  description:
    "A negotiation science, professional education and executive advisory platform dedicated to advancing how individuals and organisations negotiate, influence decisions, resolve conflicts and create economic value.",
};

export default function Page() {
  return <AboutPage />;
}
