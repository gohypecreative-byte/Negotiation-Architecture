import type { Metadata } from "next";
import { ContactPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Contact — Negotiation Architecture",
  description: "Prepare with intention. Engage with clarity. Start a conversation about your capability, an important negotiation or strengthening your team.",
};

export default function Page() {
  return <ContactPage />;
}
