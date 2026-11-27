import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import founderPortrait from "@/public/web-image/WhatsApp Image 2026-11-26 at 6.48.44 PM.jpeg";

export const metadata: Metadata = {
  title: "The Founder — Negotiation Architecture",
  description: "Meet Dr. Tarun L. Rochwani, DBA. More than 25 years of leadership across 26 countries and five continents, connecting negotiation research with practice.",
};

// Same layout tokens as the home page sections.
const container = "max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12";
const eyebrow = "mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#A8741F]";
const h2 = "font-serif text-4xl sm:text-5xl font-normal leading-[1.1] text-[#111827]";
const body = "font-sans text-base sm:text-lg leading-relaxed text-slate-600";
const button =
  "group inline-flex items-center gap-2 rounded-full bg-[#C89B59] px-7 py-3.5 font-sans text-sm font-medium text-white shadow-sm transition-all hover:bg-[#D9AB64] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8741F]";

const facts = [
  ["25+", "Years of leadership"],
  ["26", "Countries"],
  ["5", "Continents"],
];

export default function FounderPage() {
  return (
    <SiteShell>
      <div className="bg-white text-[#111827]">
        {/* Hero */}
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className={`${container} grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-7">
              <p className={eyebrow}>The founder</p>
              <h1 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Dr. Tarun L. Rochwani<span className="text-2xl text-slate-500 sm:text-3xl">, DBA</span>
              </h1>
              <p className={`${body} mt-6 max-w-xl`}>
                Bringing structure to complex negotiations. Keeping people at the centre.
              </p>
              <div className="mt-8">
                <Link href="/contact" className={button}>
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                {facts.map(([value, label]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <dt className="font-sans text-sm text-slate-500">{label}</dt>
                    <dd className="order-first font-serif text-4xl text-[#111827]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex lg:col-span-5 lg:justify-end">
              <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl bg-[#080E1B] lg:mx-0">
                <Image
                  src={founderPortrait}
                  alt="Dr. Tarun L. Rochwani in a black suit against a marble background"
                  sizes="(max-width: 388px) calc(100vw - 48px), 340px"
                  preload
                  // Preserve the small source JPEG without another lossy encode.
                  unoptimized
                  className="h-auto w-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 54% 53%, transparent 30%, rgba(8, 14, 27, 0.08) 65%, rgba(8, 14, 27, 0.18) 100%)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional experience */}
        <section className="border-t border-slate-100 py-20 sm:py-24">
          <div className={`${container} grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <p className={eyebrow}>Professional experience</p>
              <h2 className={h2}>Leadership shaped by complex operating environments.</h2>
            </div>
            <div className={`${body} space-y-5 lg:pt-10`}>
              <p className="text-[#111827]">
                More than 25 years leading and steering multidisciplinary teams across procurement, supply chain,
                construction, real estate and facilities management.
              </p>
              <p>
                Direct oversight of multi-billion-dirham (AED) / multi-million-dollar (USD) portfolios across 26
                countries and five continents.
              </p>
              <p>
                The experience of leading across functions, stakeholders and geographies informs a practical view of
                negotiation: outcomes depend on preparation, commercial understanding, human behaviour and the ability
                to work through complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Academic inquiry */}
        <section className="bg-[#f8f9fa] py-20 sm:py-24">
          <div className={`${container} grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <p className={eyebrow}>Academic inquiry</p>
              <h2 className={h2}>Research that connects negotiation theory with practice.</h2>
            </div>
            <div className={`${body} space-y-5 lg:pt-10`}>
              <p className="text-[#111827]">Doctoral research into negotiation outcomes at Clermont Business School.</p>
              <p>
                The doctoral study examined negotiation outcomes in the supply chain function of a facilities management
                company in the UAE, with attention to trust, information sharing, conflict resolution and supply chain
                performance.
              </p>
              <p>
                The purpose is not to treat negotiation as a collection of tricks, but to understand the conditions that
                help people move from discord towards collaboration.
              </p>
            </div>
          </div>
          <div className={`${container} mt-14 grid grid-cols-1 gap-6 md:grid-cols-2`}>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">
                Academic &amp; Executive Education
              </p>
              <h3 className="mt-5 font-serif text-2xl text-[#111827]">Harvard University · Stanford University · INSEAD</h3>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">
                AI &amp; Emerging Technologies
              </p>
              <h3 className="mt-5 font-serif text-2xl text-[#111827]">
                Indian Institute of Technology Madras (IIT Madras Pravartak)
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600 sm:text-base">
                Agentic AI &amp; Autonomous Systems
              </p>
            </article>
          </div>
        </section>

        {/* The work */}
        <section className="relative overflow-hidden bg-[#080E1B] py-24 text-white sm:py-32">
          {/* Soft gold glow + hairline grid for depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(200,155,89,0.18),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />
          <div className={`${container} relative flex flex-col items-center text-center`}>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B59]">The work</p>
            <span aria-hidden="true" className="mt-5 h-px w-12 bg-[#C89B59]/60" />
            <h2 className="mt-8 max-w-4xl font-serif text-4xl font-light leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Building a more deliberate approach to{" "}
              <span className="text-[#C89B59]">consequential conversations.</span>
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-lg">
              Negotiation Architecture brings together the intellectual foundations, structured methodology and
              practical development of negotiation capability.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link href="/negotiation-architecture" className={button}>
                Explore Negotiation Architecture
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:border-[#C89B59] hover:text-[#C89B59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C89B59]"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
