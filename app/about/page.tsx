import type { Metadata } from "next";
import { AboutPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "About — Negotiation Architecture",
  description:
    "Dr. Tarun L. Rochwani, founder of Negotiation Architecture: a research-led framework for better outcomes in complex negotiations.",
};

export default function Page() {
  return <AboutPage />;
}
