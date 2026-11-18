import type { Metadata } from "next";
import { AboutPage } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "About — Negotiation Architecture",
  description:
    "Dr. Tarun L. Rochwani, DBA: more than 25 years of experience, oversight across 26 countries and doctoral research into negotiation outcomes.",
};

export default function Page() {
  return <AboutPage />;
}
