import type { Metadata } from "next";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Negotiation Architecture — Dr. Tarun Rochwani",
  description:
    "The Architecture of Better Outcomes. A research-led approach to negotiation, influence and decision-making for leaders, professionals and organisations.",
};

export const viewport = {
  themeColor: "#080E1B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111827] antialiased selection:bg-[#C89B59]/25 selection:text-slate-900">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
