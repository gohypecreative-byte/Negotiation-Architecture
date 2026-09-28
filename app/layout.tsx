import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./landing.css";
import { cn } from "@/lib/utils";

const archivo = Archivo({subsets:['latin'],variable:'--font-body'});

const display = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Negotiation Architecture ? Dr. Tarun Rochwani",
  description: "Private advisory and coaching for leaders whose conversations carry consequence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", display.variable, geistMono.variable, "font-sans", archivo.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
