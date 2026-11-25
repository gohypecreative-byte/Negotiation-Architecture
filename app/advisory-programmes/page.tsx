import type { Metadata } from "next";
import { ProgramsPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Advisory & Programmes — Negotiation Architecture",
  description:
    "Apply negotiation thinking to what matters. Executive Coaching & Advisory, Negotiation Programmes and Corporate & Team Development.",
};

export default function Page() {
  return <ProgramsPage />;
}
