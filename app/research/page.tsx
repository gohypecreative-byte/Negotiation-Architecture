import type { Metadata } from "next";
import { ResearchPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Research — Negotiation Architecture",
  description:
    "Research themes, frameworks and evidence that inform how Negotiation Architecture is taught and applied.",
};

export default function Page() {
  return <ResearchPage />;
}
