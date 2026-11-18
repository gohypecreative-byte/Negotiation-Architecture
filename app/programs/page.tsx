import type { Metadata } from "next";
import { ProgramsPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Programs — Negotiation Architecture",
  description:
    "Executive Coaching & Advisory, Negotiation Programmes, and Corporate & Team Development. Learn the system and apply it to what matters.",
};

export default function Page() {
  return <ProgramsPage />;
}
