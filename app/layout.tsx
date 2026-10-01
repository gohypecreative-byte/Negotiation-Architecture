import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const antonFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
});

const sansFont = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

import { SmoothScrollProvider } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Negotiation Architecture — Dr. Tarun Rochwani",
  description:
    "A discipline of constructed outcomes for leaders whose conversations carry consequence.",
};

export const viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} ${antonFont.variable}`}>
      <body className="bg-white text-[#152540] antialiased selection:bg-[#E67400]/20 selection:text-[#152540]">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
