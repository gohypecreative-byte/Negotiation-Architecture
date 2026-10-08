import type { Metadata } from "next";
import { ProgramsPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Programs — Negotiation Architecture",
  description:
    "Executive coaching, corporate programs and masterclasses that build lasting negotiation capability.",
};

export default function Page() {
  return <ProgramsPage />;
}
