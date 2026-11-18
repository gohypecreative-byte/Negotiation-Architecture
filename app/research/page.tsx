import type { Metadata } from "next";
import { ResearchPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Research — Negotiation Architecture",
  description:
    "Doctoral inquiry into negotiation outcomes, trust, information sharing and conflict resolution. Grounded in research and made useful in practice.",
};

export default function Page() {
  return <ResearchPage />;
}
