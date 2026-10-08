import type { Metadata } from "next";
import { ContactPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Contact — Negotiation Architecture",
  description: "Book a consultation or get in touch with Negotiation Architecture.",
};

export default function Page() {
  return <ContactPage />;
}
