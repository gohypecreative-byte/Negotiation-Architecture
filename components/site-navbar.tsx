"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export const sessionHref = "mailto:t@negotiationarchitecture.com?subject=1%3A1%20Strategy%20Session&body=Name%3A%0ARole%20and%20organisation%3A%0ANegotiation%20you%20are%20preparing%20for%3A%0ATime%20zone%3A";
const links = [
  { label: "About", href: "/#about-tarun" },
  { label: "Negotiation Architecture", href: "/negotiation-architecture" },
  { label: "Programmes", href: "mailto:t@negotiationarchitecture.com?subject=Certification%20programmes%20enquiry" },
  { label: "Coaching", href: "mailto:t@negotiationarchitecture.com?subject=Private%20coaching%20enquiry" },
  { label: "For organisations", href: "mailto:t@negotiationarchitecture.com?subject=Corporate%20enquiry" },
  { label: "Insights", href: "/#recognition" },
];

export function SiteNavbar() {
  const [mobile, setMobile] = useState(false);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1320px)");
    const resize = () => { if (desktop.matches) setMobile(false); };
    desktop.addEventListener("change", resize);
    return () => desktop.removeEventListener("change", resize);
  }, []);

  return <header className="site-header">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="nav-shell">
      <Link href="/#top" className="brand" aria-label="Negotiation Architecture home">
        <span>Negotiation Architecture<span className="brand-reg">®</span></span>
      </Link>
      <nav className="desktop-links" aria-label="Primary">
        {links.map(link => <Link key={link.label} href={link.href} aria-current={pathname === link.href ? "page" : undefined} title={link.href.startsWith("mailto:") ? `Email about ${link.label.toLowerCase()}` : undefined}>{link.label}</Link>)}
      </nav>
      <motion.a href={sessionHref} className="session-button desktop-session" whileTap={reduce ? {} : { scale: .98 }}>Book a session</motion.a>
      <Sheet open={mobile} onOpenChange={setMobile}>
        <SheetTrigger className="mobile-trigger" aria-label="Open navigation"><Menu size={24} strokeWidth={1.3} /></SheetTrigger>
        <SheetContent className="mobile-sheet" side="right">
          <SheetTitle className="mobile-title">Negotiation Architecture</SheetTitle>
          <SheetDescription>Structure. Precision. Influence by Design.</SheetDescription>
          <nav aria-label="Mobile" className="mobile-links">
            {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setMobile(false)}>{link.label}</Link>)}
          </nav>
          <a href={sessionHref} className="session-button" onClick={() => setMobile(false)}>Book a session</a>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}
