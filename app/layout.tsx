import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Geist_Mono, Alex_Brush } from "next/font/google";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const signatureFont = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

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
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} ${signatureFont.variable}`}>
      <body className="bg-white text-[#111827] antialiased selection:bg-[#C89B59]/25 selection:text-slate-900">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
