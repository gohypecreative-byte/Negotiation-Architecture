"use client";

import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import researchPresentation from "../public/website pictures formal and informal/present (1).jpg";
import { ArrowRight, Check, Mail } from "lucide-react";
import styles from "./editorial-pages.module.css";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_ADDRESS, enquiryEmailHref } from "@/lib/contact";

import { source, programmeOffers, insightTopics, insightPreviews, scienceThemes } from "@/lib/negotiation-content";

const email = CONTACT_EMAIL;

function SourceCopy({ items }: { items: { tag: string; text: string }[] }) {
  return <>{items.map((item) => item.tag === "h2" ? <h2 key={item.text}>{item.text}</h2> : item.tag === "h3" ? <h3 key={item.text}>{item.text}</h3> : <p key={item.text}>{item.text}</p>)}</>;
}

function ScienceContent({ standalone = false }: { standalone?: boolean }) {
  return <>
    <section id="science" className={`${styles.container} ${styles.scienceSection} ${standalone ? styles.scienceLanding : ""}`}>
      <div className={styles.scienceIntro}>
        <header>
          <p className={styles.eyebrow}>The intellectual foundation</p>
          {standalone ? <h1>{source.architecture[17].text}</h1> : <h2>{source.architecture[17].text}</h2>}
          <p className={styles.scienceSummary}>{source.architecture[18].text}</p>
          {standalone && <div className={styles.actions}><Action href="/methodology">Explore Negotiation Architecture</Action></div>}
        </header>
        {standalone ? <figure className={styles.researchPhoto}>
          <Image src={researchPresentation} alt="Dr. Tarun Rochwani presenting Mastering Negotiations on stage" sizes="(max-width: 900px) calc(100vw - 48px), (max-width: 1360px) 45vw, 588px" preload placeholder="blur" />
        </figure> : <div className={styles.scienceProse}>
          <p className={styles.scienceStatement}>{source.architecture[19].text}</p>
          <SourceCopy items={source.architecture.slice(20, 22)} />
        </div>}
      </div>
      {standalone && <div className={styles.researchExplanation}>
        <p className={styles.scienceStatement}>{source.architecture[19].text}</p>
        <div className={styles.scienceProse}><SourceCopy items={source.architecture.slice(20, 22)} /></div>
      </div>}
      <div className={styles.scienceCards}>{scienceThemes.map(theme => <article key={theme.title}>
        <p className={styles.eyebrow}>{theme.category}</p>
        <h3>{theme.title}</h3><p>{theme.description}</p>
      </article>)}</div>
    </section>
    <section className={styles.doctoralSection}><div className={`${styles.container} ${styles.doctoralGrid}`}>
      <div><p className={styles.eyebrow}>Doctoral research</p><h2>{source.architecture[28].text}</h2><p className={styles.doctoralSummary}>{source.architecture[29].text}</p></div>
      <article className={styles.researchPanel}><p className={styles.eyebrow}>Research focus</p><h3>{source.architecture[30].text}</h3><p>{source.architecture[31].text}</p><p className={styles.researchNote}>{source.architecture[32].text}</p></article>
    </div></section>
  </>;
}

function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? styles.textLink : styles.button}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
function Closing({ title, text, label }: { title: string; text: string; label?: string }) {
  return <section className={styles.closing}><div className={`${styles.container} ${styles.closingInner}`}><div>{label && <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#C89B59]">{label}</p>}<h2>{title}</h2><p>{text}</p></div><Action href="/contact">Start a Conversation</Action></div></section>;
}

const steps = [
  { name: "Understand", question: "Understand what is really happening.", text: "Start with the people and the situation. Separate stated positions from underlying interests. Define what a useful outcome means.", result: "The result: clarity before action." },
  { name: "Analyse", question: "Analyse interests, choices and the economics.", text: "Look beneath the surface. Weigh priorities, alternatives, influence and dependencies. Then establish what the deal is truly worth.", result: "The result: a sharper view of your choices and the value at stake." },
  { name: "Design", question: "Design your approach with intention.", text: "Shape objectives, options, sequence and trade-offs. Prepare for different responses. Stay open to new information.", result: "The result: a considered plan with room to adapt." },
  { name: "Engage", question: "Engage with clarity and awareness.", text: "Put preparation into practice. Listen closely. Ask purposeful questions. Respond to people and dynamics as they unfold.", result: "The result: a more deliberate, constructive exchange." },
  { name: "Achieve", question: "Achieve an outcome that works.", text: "Clarify what was agreed, who is responsible and what happens next. Reflect, so experience strengthens future capability.", result: "The result: clear commitments, follow-through and learning." },
];

export function MethodologyContent() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero} ${styles.methodHero}`}>
      <div><h1>{source.architecture[0].text}</h1><p className={styles.lead}>{source.architecture[1].text}</p><p>{source.architecture[2].text}</p><div className={styles.actions}><Action href="#framework">Explore the Framework</Action><Action href="/programs" secondary>Learn through practice</Action></div></div>

    </section>
    <section id="framework" className={styles.tint}><div className={styles.container}>
      <div className={styles.sectionHeading}><h2>{source.architecture[3].text}</h2><p>{source.architecture[4].text}</p></div>
      <div className={styles.stepNav} aria-label="Framework stages">{steps.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="stage-detail" onClick={() => setActive(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
      <div id="stage-detail" className={styles.stepDetail} aria-live="polite" aria-atomic="true"><div><h3>{step.question}</h3><p>{step.text}</p></div><p className={styles.result}>{step.result}</p></div>
      {active === 1 && <div className={styles.prose}>
        <h3>EXAMIN · Before you negotiate</h3>
        <p>Examine the deal for its economic potential and impact before negotiating its terms.</p>
        <ul className={styles.checklist}>
          <li><Check size={18} aria-hidden="true" />Identify the drivers of value.</li>
          <li><Check size={18} aria-hidden="true" />Quantify the opportunity, in economic terms.</li>
          <li><Check size={18} aria-hidden="true" />Test assumptions, costs, risks and trade-offs.</li>
        </ul>
      </div>}
    </div></section>
    <section className={`${styles.container} ${styles.researchSection}`}>
      <div className={styles.sectionHeading}><h2>Four layers.<br />Each supports the next.</h2></div>
      <div className={styles.split}>
        {[
          ["Mindset Foundations", "Composure, self-awareness and clear thinking under pressure."],
          ["Strategic Architecture", "Interests, alternatives, stakeholders, options and preparation."],
          ["Tactical Execution", "Language, influence, concessions and purposeful engagement."],
          ["Mastery", "Reflection, adaptability and capability built through practice."],
        ].map(([title, text], index) => <article key={title} className={styles.prose}><h3>{index + 1}. {title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <ScienceContent />
    <section aria-labelledby="contexts-heading" className={`${styles.container} ${styles.contextsSection}`}>
      <div className={styles.contextsHeading}>
        <h2 id="contexts-heading">{source.architecture[33].text}</h2>
        <p>{source.architecture[34].text}</p>
      </div>
      <div className={styles.contextsGrid}>
        {[35, 37, 39].map(index => <article key={index}>
          <h3>{source.architecture[index].text}</h3>
          <p>{source.architecture[index + 1].text}</p>
        </article>)}
      </div>
    </section>
    <Closing title={source.architecture[41].text} text={source.architecture[42].text} />
  </div>;
}

export function ProgramsContent() {
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><h1>{source.programs[0].text}</h1><div className={styles.heroBottom}><p className={styles.lead}>{source.programs[1].text}</p><Action href="/contact">Discuss an engagement</Action></div><p>{source.programs[2].text}</p></section>
    <section id="learning-formats" className={styles.container}><div className={styles.sectionHeading}><h2>{source.programs[3].text}</h2><p>{source.programs[4].text}</p></div><div className={styles.programGrid}>{programmeOffers.map(program => <article key={program.title}><div className={styles.programCopy}><h2>{program.title}</h2><p>{program.description}</p><Action href={`/contact?interest=${encodeURIComponent(program.title)}`} secondary>Start a conversation</Action></div></article>)}</div></section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><div><p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#A8741F]">Engagement approach</p><h2>{source.programs[11].text}</h2></div><div className={styles.prose}><SourceCopy items={source.programs.slice(12, 15)} /></div></div></section>
    <Closing label="Begin a conversation" title={source.programs[15].text} text={source.programs[16].text} />
  </div>;
}

export function ResearchContent() {
  return <div className={styles.page}>
    <ScienceContent standalone />
    <Closing title={source.architecture[41].text} text={source.architecture[42].text} />
  </div>;
}

export function InsightsContent() {
  const [filter, setFilter] = useState("All");
  const visible = insightPreviews.filter(item => filter === "All" || item.category === filter);
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.insightsHero}`}>
      <p className={styles.eyebrow}>Ideas to take forward</p>
      <div className={styles.insightsIntro}><h1>{source.insights[0].text}</h1><p>{source.insights[1].text}</p></div>
    </section>
    <section aria-label="Explore insight topics" className={`${styles.container} ${styles.insightsSection}`}>
      <div className={styles.insightsToolbar}>
        <div className={styles.topicFilters} role="group" aria-label="Filter insights">
          {["All", ...insightTopics].map(category => <button key={category} type="button" aria-controls="insight-topics" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category === "All" ? "All topics" : category}</button>)}
        </div>
        <p className={styles.topicCount} role="status">{visible.length} {visible.length === 1 ? "topic" : "topics"}</p>
      </div>
      <div id="insight-topics" className={styles.insightGrid}>
        {visible.map(item => <article key={item.title} className={styles.insightCard}>
          <p className={styles.eyebrow}>{item.category}</p>
          <h2>{item.title}</h2>
          <p className={styles.insightDescription}>{item.description}</p>
        </article>)}
      </div>
    </section>
    <section className={styles.insightsClosing}><div className={`${styles.container} ${styles.split}`}><h2>{source.insights[14].text}</h2><div className={styles.prose}><SourceCopy items={source.insights.slice(15)} /><Action href="/contact" secondary>Suggest a topic or enquire</Action></div></div></section>
  </div>;
}

export function ContactContent() {
  const [prepared, setPrepared] = useState(false);
  const interestRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    const select = interestRef.current;
    if (select && interest && Array.from(select.options).some(option => option.value === interest)) {
      select.value = interest;
    }
  }, []);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Enquiry: ${data.get("interest")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation") || "Not provided"}\n\n${data.get("message")}`;
    window.location.href = enquiryEmailHref(subject, body);
    setPrepared(true);
  }
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.contactHero}`}>
      <div className={styles.contactIntro}>
        <h1>Start a conversation</h1>
        <p className={styles.lead}>{source.contact[4].text}</p>

        <a href={`mailto:${email}`} className={styles.email}><Mail size={18} aria-hidden="true" /><span>{email}</span></a>
        <address className="mt-6 not-italic text-base leading-relaxed text-slate-600">
          <strong className="block font-medium text-[#111827]">{OFFICE_NAME}</strong>
          <span className="mt-2 block">{OFFICE_ADDRESS}</span>
        </address>
      </div>
      <form className={styles.form} onSubmit={prepareEmail}>
        <div className={styles.formIntro}><h2>Send an enquiry</h2></div>
        <div className={styles.formRow}><label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={120} /></label><label htmlFor="enquiry-email">Email address<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
        <label htmlFor="enquiry-organisation">Organisation <span>(optional)</span><input id="enquiry-organisation" name="organisation" autoComplete="organization" maxLength={200} /></label>
        <label htmlFor="enquiry-interest">Area of interest<select ref={interestRef} id="enquiry-interest" name="interest" defaultValue="Executive Coaching & Advisory"><option>Executive Coaching & Advisory</option><option>Corporate & Team Development</option><option>Negotiation Programmes</option><option>Speaking &amp; Keynotes</option><option>Research &amp; Collaboration</option><option>Other enquiry</option></select></label>
        <label htmlFor="enquiry-message">How can we help?<textarea id="enquiry-message" name="message" rows={4} required maxLength={4000} /></label>
        <button className={styles.button} type="submit">Send enquiry <ArrowRight size={16} aria-hidden="true" /></button>
        <p className={styles.formHint}>Review and send your message in your email app.</p>
        {prepared && <p role="status" className={styles.status}>{source.contact[7].text}</p>}
      </form>
    </section>
  </div>;
}
