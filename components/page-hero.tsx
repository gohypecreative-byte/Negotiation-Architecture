"use client";

import React from "react";
import Link from "next/link";

/** Compact dark banner that sits under the fixed header on inner pages. */
export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="w-full bg-[#080E1B] text-white pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs tracking-[0.22em] uppercase">
          <Link href="/" className="text-slate-400 hover:text-[#C89B59] transition-colors">
            Home
          </Link>
          <span className="mx-3 text-slate-600">/</span>
          <span className="text-[#C89B59] font-semibold">{eyebrow}</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] max-w-4xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-slate-300">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
