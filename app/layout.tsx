import type { Metadata } from "next";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Dr. Tarun L. Rochwani | Negotiation Architecture & Advisory",
  description:
    "Explore Negotiation Architecture by Dr. Tarun L. Rochwani: negotiation strategy, executive advisory, leadership coaching and programmes for better outcomes.",
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
