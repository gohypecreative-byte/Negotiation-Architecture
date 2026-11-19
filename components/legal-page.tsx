import type { ReactNode } from "react";
import Link from "next/link";
import { SiteShell } from "./site-shell";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_ADDRESS } from "@/lib/contact";

export function LegalPage({ title, introduction, children }: { title: string; introduction: string; children: ReactNode }) {
  return <SiteShell>
    <article className="bg-white px-6 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-slate-200 pb-8 sm:pb-10">
          <Link href="/" className="text-sm font-medium text-[#A8741F] hover:underline">Negotiation Architecture</Link>
          <h1 className="mt-5 text-4xl sm:text-5xl text-[#111827]">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{introduction}</p>
        </header>
        <div className="mt-10 space-y-9 text-base leading-relaxed text-slate-600 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:text-[#111827] [&_p+p]:mt-4 [&_a]:text-[#A8741F] [&_a]:underline [&_a]:break-words">
          {children}
          <section>
            <h2>Contact</h2>
            <p>For questions about this page, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            <address className="mt-4 not-italic">{OFFICE_NAME}<br />{OFFICE_ADDRESS}</address>
          </section>
        </div>
      </div>
    </article>
  </SiteShell>;
}
