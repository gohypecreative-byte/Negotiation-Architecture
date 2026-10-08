import type { Metadata } from "next";
import { InsightsPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Insights — Negotiation Architecture",
  description: "Articles and perspectives on negotiation, influence, strategy and decision-making.",
};

export default function Page() {
  return <InsightsPage />;
}
