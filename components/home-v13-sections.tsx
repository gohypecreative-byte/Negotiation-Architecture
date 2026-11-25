"use client";

// One-page home: the V13 About, Negotiation Architecture, Advisory & Programmes,
// Insights and Contact content, in the home page's card-and-photo design.
import { useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe, Users } from "lucide-react";
import { source, programmeOffers, insightPreviews, scienceThemes, closingCta } from "@/lib/negotiation-content";
import { useEnquiryForm } from "@/hooks/use-enquiry-form";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_ADDRESS_LINES } from "@/lib/contact";
import { SectionIntro, TextLink } from "./negotiation-home";
const founderPhoto = "/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG";
import programmesPhoto from "../public/web-image/8253e3b9-d903-499a-8011-4716bd34e5b7.jpg";
import speakingPhoto from "../public/images/gallery/dr-tarun-02.jpg";

const { about, architecture: na, programs, insights, contact } = source;

// ---------------------------------------------------------------- primitives

const container = "max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12";

function Eyebrow({ dark = false, children }: { dark?: boolean; children: ReactNode }) {
  return <p className={`mb-4 font-sans text-sm font-semibold uppercase tracking-wider ${dark ? "text-[#C89B59]" : "text-[#A8741F]"}`}>{children}</p>;
}

function Body({ dark = false, children }: { dark?: boolean; children: ReactNode }) {
  return <p className={`mt-5 font-sans text-base sm:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{children}</p>;
}

function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-colors text-white font-sans font-medium text-sm">
      <span>{children}</span>
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
}

function Photo({ src, alt, className = "aspect-[4/5]", position = "50% 30%" }: { src: StaticImageData | string; alt: string; className?: string; position?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) calc(100vw - 48px), 560px" placeholder={typeof src === "string" ? "empty" : "blur"} className="editorial-photo object-cover" style={{ objectPosition: position }} />
    </div>
  );
}

// ---------------------------------------------------------------- About

export function AboutSections() {
  return (
    <div id="about" className="scroll-mt-20">
      <section className="w-full bg-white py-20 sm:py-28 border-t border-slate-200">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
          <div className="lg:col-span-7">
            <Eyebrow>The founder</Eyebrow>
            <SectionIntro title={about[0].text} lede={about[1].text} />
            <div className="mt-10 border-t border-slate-200 pt-8">
              <Eyebrow>Professional experience</Eyebrow>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-[#111827]">{about[2].text}</h3>
              {about.slice(3, 6).map(item => <Body key={item.text}>{item.text}</Body>)}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo src={founderPhoto} alt="Dr. Tarun Rochwani beside the waterfront" />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#080E1B] text-white py-20 sm:py-24">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16`}>
          <div>
            <Eyebrow dark>Academic inquiry</Eyebrow>
            <SectionIntro dark title={about[6].text} />
          </div>
          <div>
            {about.slice(7, 10).map(item => <Body dark key={item.text}>{item.text}</Body>)}
          </div>
        </div>
        <div className={`${container} mt-12`}>
          <div className="grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
            <div>
              <h3 className="font-sans text-sm font-medium text-[#C89B59]">Academic &amp; Executive Education</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-300">{about[10].text}</p>
            </div>
            <div>
              <h3 className="font-sans text-sm font-medium text-[#C89B59]">AI &amp; Emerging Technologies</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-300">{about[11].text}</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-slate-400">{about[12].text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 sm:py-24">
        <div className={`${container} flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8`}>
          <div>
            <Eyebrow>The work</Eyebrow>
            <SectionIntro title={about[13].text} lede={about[14].text} />
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <TextLink href="/negotiation-architecture">Explore Negotiation Architecture</TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------- Negotiation Architecture

const stages = [
  { name: "Understand", title: "Understand what is really happening.", text: "Start with the people and the situation. Separate stated positions from underlying interests. Define what a useful outcome means.", result: "The result: clarity before action." },
  { name: "Analyse", title: "Analyse interests, choices and the economics.", text: "Look beneath the surface. Weigh priorities, alternatives, influence and dependencies. Then establish what the deal is truly worth.", result: "The result: a sharper view of your choices and the value at stake.", examin: true },
  { name: "Design", title: "Design your approach with intention.", text: "Shape objectives, options, sequence and trade-offs. Prepare for different responses. Stay open to new information.", result: "The result: a considered plan with room to adapt." },
  { name: "Engage", title: "Engage with clarity and awareness.", text: "Put preparation into practice. Listen closely. Ask purposeful questions. Respond to people and dynamics as they unfold.", result: "The result: a more deliberate, constructive exchange." },
  { name: "Achieve", title: "Achieve an outcome that works.", text: "Clarify what was agreed, who is responsible and what happens next. Reflect, so experience strengthens future capability.", result: "The result: clear commitments, follow-through and learning." },
];

const layers = [
  ["Mindset Foundations", "Composure, self-awareness and clear thinking under pressure."],
  ["Strategic Architecture", "Interests, alternatives, stakeholders, options and preparation."],
  ["Tactical Execution", "Language, influence, concessions and purposeful engagement."],
  ["Mastery", "Reflection, adaptability and capability built through practice."],
];

function ProcessSection() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <section id="framework" className="w-full bg-white py-16 sm:py-28 scroll-mt-20">
      <div className={container}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-8">
          <div>
            <Eyebrow>The five-stage process</Eyebrow>
            <SectionIntro title={na[3].text} lede={na[4].text} />
          </div>
        </div>

        <div className="mt-8 grid items-stretch gap-5 sm:gap-8 sm:mt-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <ol aria-label="Choose a stage" className="grid grid-cols-2 gap-2 sm:gap-1 sm:grid-cols-3 lg:grid-cols-1">
            {stages.map((item, index) => (
              <li key={item.name}>
                <button type="button" onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="stage-panel" className={`flex w-full cursor-pointer items-center gap-4 border-l-2 px-4 py-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8741F] ${active === index ? "border-[#C89B59] text-[#111827]" : "border-transparent text-slate-500 hover:text-[#111827]"}`}>
                  <span className="font-sans text-xs tabular-nums text-[#A8741F]">{`0${index + 1}`}</span>
                  <span className="font-sans text-lg sm:text-xl font-medium">{item.name}</span>
                  {item.examin && <span className="ml-auto rounded-full border border-[#C89B59]/60 px-2.5 py-0.5 font-sans text-[10px] font-semibold tracking-[0.1em] text-[#A8741F]">EXAMIN</span>}
                </button>
              </li>
            ))}
          </ol>
          <div id="stage-panel" className="flex min-w-0 flex-col justify-center border-t border-slate-200 pt-5 sm:pt-8 lg:border-t-0 lg:border-l lg:py-6 lg:pl-12" aria-live="polite">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{`Stage 0${active + 1} / 05`}</p>
            <h3 className="mt-4 max-w-2xl font-serif text-2xl sm:text-3xl leading-tight text-[#111827]">{stage.title}</h3>
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-600">{stage.text}</p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#A8741F]">{stage.result}</p>
            <div hidden={!stage.examin} className="mt-7 border-t border-slate-200 pt-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">EXAMIN · Before you negotiate</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">{na[7].text}</p>
              <ul className="mt-5 grid gap-5 sm:grid-cols-3">
                {[["Identify", "The drivers of value."], ["Quantify", "The opportunity, in economic terms."], ["Test", "Assumptions, costs, risks and trade-offs."]].map(([title, text]) => (
                  <li key={title} className="font-sans text-sm leading-relaxed"><strong className="block text-[#111827]">{title}</strong><span className="text-slate-600">{text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-12 sm:mt-20 sm:pt-16">
          <Eyebrow>Capability architecture</Eyebrow>
          <h3 className="max-w-3xl font-serif text-3xl sm:text-4xl leading-tight text-[#111827]">{na[8].text}</h3>
          <ol className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {layers.map(([title, text], index) => (
              <li key={title} className="border-t border-[#C89B59]/60 pt-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#A8741F]">{`Layer 0${index + 1}`}</p>
                <h4 className="mt-4 font-serif text-xl text-[#111827]">{title}</h4>
                <p className="mt-2 font-sans text-base leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  return (
    <section id="science" className="w-full bg-[#070E1A] text-white py-20 sm:py-28 scroll-mt-20">
      <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
        <div>
          <Eyebrow dark>The intellectual foundation</Eyebrow>
          <SectionIntro dark title={na[17].text} lede={na[18].text} />
        </div>
        <div className="lg:pt-10">
          <p className="font-sans text-lg leading-relaxed text-white">{na[19].text}</p>
          <Body dark>{na[20].text}</Body>
          <Body dark>{na[21].text}</Body>
        </div>
      </div>
      <div className={`${container} mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8`}>
        {scienceThemes.map(theme => (
          <article key={theme.title} className="rounded-2xl border border-white/15 p-6 sm:p-8">
            <Eyebrow dark>{theme.category}</Eyebrow>
            <h3 className="font-serif text-2xl text-white">{theme.title}</h3>
            <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-slate-300">{theme.description}</p>
          </article>
        ))}
      </div>
      <div className={`${container} mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-white/15 pt-14`}>
        <div>
          <Eyebrow dark>Doctoral research</Eyebrow>
          <SectionIntro dark title={na[28].text} lede={na[29].text} />
        </div>
        <aside className="rounded-2xl border border-white/15 p-7 sm:p-9">
          <Eyebrow dark>Research focus</Eyebrow>
          <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-white">{na[30].text}</h3>
          <p className="mt-5 font-sans text-base leading-relaxed text-slate-300">{na[31].text}</p>
          <p className="mt-6 border-t border-white/15 pt-5 font-sans text-sm leading-relaxed text-slate-400">{na[32].text}</p>
        </aside>
      </div>
    </section>
  );
}

function ContextsSection() {
  const icons = [Users, Briefcase, Globe];
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className={container}>
        <Eyebrow>Where it applies</Eyebrow>
        <SectionIntro title={na[33].text} lede={na[34].text} />
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:mt-12">
          {[35, 37, 39].map((index, position) => {
            const Icon = icons[position];
            return (
              <li key={index} className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C89B59]/10 text-[#A8741F]"><Icon aria-hidden="true" className="h-5 w-5" /></div>
                <h3 className="mt-6 font-serif text-2xl text-[#111827] leading-snug">{na[index].text}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600">{na[index + 1].text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function CtaBanner({ eyebrow, title, text, secondary, photo }: { eyebrow: string; title: string; text: string; secondary?: { href: string; label: string }; photo?: { src: StaticImageData; alt: string } }) {
  // Without a photo: a compact single-row band (text left, actions right).
  if (!photo) {
    return (
      <section className="w-full bg-[#080E1B] text-white py-12 sm:py-14">
        <div className={`${container} flex flex-col items-center text-center`}>
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#C89B59]">{eyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white">{title}</h2>
            <p className="mt-3 font-sans text-base leading-relaxed text-slate-300">{text}</p>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <ButtonLink href={closingCta.href}>{closingCta.action}</ButtonLink>
            {secondary && <TextLink dark href={secondary.href}>{secondary.label}</TextLink>}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full bg-[#070D18] text-white py-10 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-[#080E1B] via-[#0E1A2F] to-[#12223F]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className={`${photo ? "lg:col-span-7" : "lg:col-span-12"} p-6 sm:p-12 lg:p-16`}>
              <Eyebrow dark>{eyebrow}</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">{title}</h2>
              <p className="mt-4 mb-8 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-slate-300">{text}</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <ButtonLink href={closingCta.href}>{closingCta.action}</ButtonLink>
                {secondary && <TextLink dark href={secondary.href}>{secondary.label}</TextLink>}
              </div>
            </div>
            {photo && (
              <div className="lg:col-span-5 relative lg:h-full lg:min-h-[340px]">
                <Image src={photo.src} alt={photo.alt} sizes="(max-width: 1024px) 100vw, 560px" placeholder="blur" className="editorial-photo block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:object-cover" />
                <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#080E1B] via-[#080E1B]/50 to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArchitectureSections() {
  return (
    <div id="negotiation-architecture" className="scroll-mt-20">
      <section className="w-full bg-white py-20 sm:py-28 border-t border-slate-200">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
          <div>
            <Eyebrow>The proprietary methodology</Eyebrow>
            <SectionIntro title={na[0].text} lede={na[1].text} />
          </div>
          <div className="lg:pt-10">
            <p className="font-sans text-base sm:text-lg leading-relaxed text-slate-600">{na[2].text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/advisory-programmes">Apply the system</ButtonLink>
              <TextLink href="#science">Read the science behind it</TextLink>
            </div>
          </div>
        </div>
      </section>
      <ProcessSection />
      <ScienceSection />
      <ContextsSection />
      <CtaBanner eyebrow="Your next conversation" title={closingCta.title} text={closingCta.text} secondary={{ href: "/advisory-programmes", label: "Explore advisory & programmes" }} photo={{ src: speakingPhoto, alt: "Dr. Tarun Rochwani speaking at Procuretech" }} />
    </div>
  );
}

// ---------------------------------------------------------------- Advisory & Programmes

const offerDetails = [
  { label: "Individual", action: "Enquire about advisory" },
  { label: "Learning pathway", action: "Enquire about programmes" },
  { label: "Organisations", action: "Discuss team development" },
];

export function ProgrammesSections() {
  return (
    <div id="advisory-programmes" className="scroll-mt-20">
      <section className="w-full bg-white py-20 sm:py-28 border-t border-slate-200">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
          <div className="lg:col-span-6">
            <Eyebrow>Advisory and capability development</Eyebrow>
            <SectionIntro title={programs[0].text} lede={programs[1].text} />
            <Body>{programs[2].text}</Body>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/contact">Discuss an engagement</ButtonLink>
              <TextLink href="#negotiation-architecture">Explore the methodology</TextLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Photo src={programmesPhoto} alt="Dr. Tarun Rochwani standing in front of an abstract painting" className="aspect-[2/3] max-w-[460px] lg:ml-auto" position="50% 40%" />
          </div>
        </div>

        <div className={`${container} mt-20`}>
          <Eyebrow>Ways to engage</Eyebrow>
          <SectionIntro title={programs[3].text} lede={programs[4].text} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmeOffers.map((offer, index) => (
              <article key={offer.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:border-[#C89B59]/60 transition-colors">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{offerDetails[index].label}</p>
                <h3 className="mt-4 font-serif text-2xl text-[#111827]">{offer.title}</h3>
                <p className="mt-3 mb-6 grow font-sans text-sm sm:text-base leading-relaxed text-slate-600">{offer.description}</p>
                <div><TextLink href={`/contact?interest=${encodeURIComponent(offer.title)}`}>{offerDetails[index].action}</TextLink></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-20 sm:py-24">
        <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16`}>
          <div>
            <Eyebrow>Engagement approach</Eyebrow>
            <SectionIntro title={programs[11].text} />
          </div>
          <div>
            {programs.slice(12, 15).map(item => <Body key={item.text}>{item.text}</Body>)}
          </div>
        </div>
      </section>

      <CtaBanner eyebrow="Begin a conversation" title={programs[15].text} text={programs[16].text} />
    </div>
  );
}

// ---------------------------------------------------------------- Insights

export function InsightsSections() {
  return (
    <section id="insights" className="w-full bg-white py-20 sm:py-28 border-t border-slate-200 scroll-mt-20">
      <div className={container}>
        <Eyebrow>Ideas to take forward</Eyebrow>
        <SectionIntro title={insights[0].text} lede={insights[1].text} />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightPreviews.map(item => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#A8741F]">{item.category}</p>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl leading-snug text-[#111827]">{item.title}</h3>
              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 rounded-2xl bg-slate-50 p-7 sm:p-10">
          <div>
            <Eyebrow>A note on the content</Eyebrow>
            <h3 className="font-serif text-3xl leading-tight text-[#111827]">{insights[14].text}</h3>
          </div>
          <div>
            <p className="font-sans text-base leading-relaxed text-slate-600">{insights[15].text}</p>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate-600">{insights[16].text}</p>
            <div className="mt-6"><TextLink href="/contact">Suggest a topic or enquire</TextLink></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------- Contact

const field = "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 font-sans text-base text-[#111827] focus:outline-2 focus:outline-offset-1 focus:outline-[#A8741F]";
const labelCls = "block font-sans text-sm text-slate-700";

export function ContactSections() {
  const { sending, status, submitEnquiry } = useEnquiryForm();
  return (
    <section id="contact" className="w-full bg-white py-20 sm:py-28 border-t border-slate-200 scroll-mt-20">
      <div className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`}>
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <SectionIntro title={contact[0].text} lede={contact[1].text} />
          <Body>{contact[2].text}</Body>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <Eyebrow>Professional enquiries</Eyebrow>
            <h3 className="font-serif text-2xl leading-tight text-[#111827]">{contact[3].text}</h3>
            <p className="mt-3 font-sans text-base leading-relaxed text-slate-600">{contact[4].text}</p>
            <dl className="mt-6 space-y-4 font-sans text-base">
              <div>
                <dt className="text-sm text-slate-500">Email</dt>
                <dd><a href={`mailto:${CONTACT_EMAIL}`} className="text-[#A8741F] hover:text-[#8F6218] break-all">{CONTACT_EMAIL}</a></dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">India Office</dt>
                <dd className="text-slate-700">{OFFICE_NAME}, {OFFICE_ADDRESS_LINES.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div>
            <form onSubmit={submitEnquiry} className="grid gap-5">
              <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#111827]">{contact[6].text}</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelCls}>Your name<input name="name" autoComplete="name" required maxLength={120} className={field} /></label>
                <label className={labelCls}>Organisation<input name="organisation" autoComplete="organization" maxLength={200} className={field} /></label>
                <label className={labelCls}>Email address<input name="email" type="email" autoComplete="email" required maxLength={200} className={field} /></label>
                <label className={labelCls}>Area of interest
                  <select name="interest" defaultValue="Executive Coaching & Advisory" className={field}>
                    <option>Executive Coaching & Advisory</option>
                    <option>Negotiation Programmes</option>
                    <option>Corporate & Team Development</option>
                    <option>Speaking & Keynotes</option>
                    <option>Research & Collaboration</option>
                    <option>Other enquiry</option>
                  </select>
                </label>
              </div>
              <label className={labelCls}>How can we help?<textarea name="message" rows={4} required maxLength={4000} className={field} /></label>
              <div>
                <button type="submit" disabled={sending} aria-busy={sending} className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-colors cursor-pointer text-white font-sans font-medium text-sm">
                  <span>{sending ? "Sending?" : "Send enquiry"}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <p role="status" hidden={!status} className="font-sans text-sm text-[#111827]">
                {status}
              </p>
            </form>
        </div>
      </div>
    </section>
  );
}
