import type { Metadata } from "next";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/smooth-scroll";

// SEO metadata from NegotiationArchitect_Version_13_SEO.html.
const SITE_URL = "https://negotiationarchitect.com";
const OG_IMAGE = { url: `${SITE_URL}/assets/images/og-negotiation-architecture.jpg`, alt: "Negotiation Architecture by Dr. Tarun L. Rochwani" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Tarun L. Rochwani | Negotiation Architecture & Advisory",
  description:
    "Explore Negotiation Architecture by Dr. Tarun L. Rochwani: negotiation strategy, executive advisory, leadership coaching and programmes for better outcomes.",
  authors: [{ name: "Dr. Tarun L. Rochwani" }],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: "Dr. Tarun L. Rochwani | Negotiation Architecture",
    description: "Negotiation is more than a conversation. It is a system. Discover the methodology, advisory and programmes.",
    images: [OG_IMAGE],
    siteName: "NegotiationArchitect.com",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Tarun L. Rochwani | Negotiation Architecture",
    description: "A structured approach to negotiation, leadership, decision-making and durable outcomes.",
    images: [OG_IMAGE],
  },
};

export const viewport = {
  themeColor: "#080E1B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "NegotiationArchitect.com",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Dr. Tarun L. Rochwani",
      honorificSuffix: "DBA",
      url: `${SITE_URL}/`,
      jobTitle: "Negotiation Advisor and Leadership Consultant",
      description: "Founder of Negotiation Architecture, bringing leadership experience and doctoral research to negotiation strategy, advisory, coaching and capability development.",
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "NegoScience Leadership Consulting",
      url: "https://negotiationarchitecture.com/",
      description: "Negotiation advisory, leadership consulting, executive coaching and negotiation capability programmes.",
      founder: { "@id": `${SITE_URL}/#person` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "RCS Building, Andheri West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400053",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Middle East" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="bg-white text-[#111827] antialiased selection:bg-[#C89B59]/25 selection:text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
