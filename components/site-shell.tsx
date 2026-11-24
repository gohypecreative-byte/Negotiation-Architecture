"use client";

import React from "react";
import { SiteFooter, SiteHeader } from "./negotiation-home";

/** Shared chrome for inner pages: fixed header and footer. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080E1B] text-[#111827]">
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
