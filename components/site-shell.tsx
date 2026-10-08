"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { ConsultationModal, SiteFooter, SiteHeader } from "./negotiation-home";

const OpenConsultContext = createContext<() => void>(() => {});

/** Returns a function that opens the "Book a Consultation" modal. */
export function useOpenConsult() {
  return useContext(OpenConsultContext);
}

/**
 * Shared chrome for inner pages: fixed header, footer and the consultation
 * modal, with the open handler available to any descendant via useOpenConsult.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [consultOpen, setConsultOpen] = useState(false);
  const openConsult = useCallback(() => setConsultOpen(true), []);

  return (
    <OpenConsultContext.Provider value={openConsult}>
      <div className="min-h-screen bg-[#080E1B] text-[#111827]">
        <SiteHeader onOpenConsult={openConsult} />
        <main>{children}</main>
        <SiteFooter />
        <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
      </div>
    </OpenConsultContext.Provider>
  );
}
