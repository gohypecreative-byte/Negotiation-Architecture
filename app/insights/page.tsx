import type { Metadata } from "next";
import { InsightsPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Insights — Negotiation Architecture",
  description: "Perspectives on negotiation, behaviour and the choices that shape outcomes. Insights for the conversations ahead.",
};

export default function Page() {
  return <InsightsPage />;
}
