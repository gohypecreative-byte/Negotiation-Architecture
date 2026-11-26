"use client";

// Inner-page content, matched section by section to NegotiationArchitect_Version_13_SEO.html.
import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./editorial-pages.module.css";
import { useEnquiryForm } from "@/hooks/use-enquiry-form";
import { CONTACT_EMAIL } from "@/lib/contact";
import { source, programmeOffers, insightPreviews, scienceThemes, closingCta, stages as steps, examinComponents } from "@/lib/negotiation-content";

function SourceCopy({ items }: { items: { tag: string; text: string }[] }) {
  return <>{items.map((item) => item.tag === "h2" ? <h2 key={item.text}>{item.text}</h2> : item.tag === "h3" ? <h3 key={item.text}>{item.text}</h3> : <p key={item.text}>{item.text}</p>)}</>;
}

type EmbedProps = { embedded?: boolean };

/** Root wrapper; when embedded in the one-page home it gets an anchor id and an h2 title. */
function PageRoot({ id, embedded, children, className = "" }: { id: string; embedded?: boolean; children: ReactNode; className?: string }) {
  return <div id={embedded ? id : undefined} className={`${styles.page} ${embedded ? styles.embedded : ""} ${className}`}>{children}</div>;
}

function PageTitle({ embedded, children }: { embedded?: boolean; children: ReactNode }) {
  const Title = embedded ? "h2" : "h1";
  return <Title className={styles.pageTitle}>{children}</Title>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? styles.textLink : styles.button}>{children}{!secondary && <ArrowRight size={16} aria-hidden="true" />}</Link>;
}

function Closing({ eyebrow, title, text, secondary }: { eyebrow: string; title: string; text: string; secondary?: { href: string; label: string } }) {
  return <section className={styles.closing}><div className={`${styles.container} ${styles.closingInner}`}>
    <div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{text}</p></div>
    <div className={styles.actions}>
      <Action href={closingCta.href}>{closingCta.action}</Action>
      {secondary && <Action href={secondary.href} secondary>{secondary.label}</Action>}
    </div>
  </div></section>;
}

function ScienceContent() {
  return <>
    <section id="science" className={`${styles.container} ${styles.scienceSection}`}>
      <div className={styles.scienceOverview}>
        <header>
          <h2>Negotiation Science.</h2>
          <p className={styles.scienceSummary}>{source.architecture[18].text}</p>
        </header>
        <p className={styles.scienceContext}>{source.architecture[20].text}</p>
      </div>
      <div className={styles.scienceLens}>
        <div>
          <h3>Look beneath positions.<br />Understand what drives the exchange.</h3>
        </div>
        <div className={styles.scienceExplanation}>
          <p className={styles.scienceStatement}>{source.architecture[19].text}</p>
          <p>This perspective asks what each party values, what alternatives exist, how information is shared, where uncertainty sits and how decisions are influenced by relationships and context.</p>
        </div>
      </div>
      <div className={styles.scienceCards}>{scienceThemes.map(theme => <article key={theme.title}>
        
        <h3>{theme.title}</h3><p>{theme.description}</p>
      </article>)}</div>
      <div className={styles.scienceFooter}>
        <p>The objective is to replace assumptions with inquiry and reaction with deliberate judgement.</p>
        <div className={styles.actions}>
          <Action href="#framework">See how the science is applied</Action>
          <Action href="/insights" secondary>Explore insights</Action>
        </div>
      </div>
    </section>
    <section className={styles.doctoralSection}><div className={`${styles.container} ${styles.doctoralGrid}`}>
      <div><h2>{source.architecture[28].text}</h2></div>
      <article className={styles.researchPanel}><h3>{source.architecture[30].text}</h3><p>{source.architecture[31].text}</p><p className={styles.researchNote}>{source.architecture[32].text}</p></article>
    </div></section>
  </>;
}

const layers = [
  ["Mindset Foundations", "Composure, self-awareness and clear thinking under pressure."],
  ["Strategic Architecture", "Interests, alternatives, stakeholders, options and preparation."],
  ["Tactical Execution", "Language, influence, concessions and purposeful engagement."],
  ["Mastery", "Reflection, adaptability and capability built through practice."],
];

export function MethodologyContent({ embedded = false }: EmbedProps) {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <PageRoot id="negotiation-architecture" embedded={embedded} className={styles.methodology}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero} ${styles.methodHero}`}>
      <div>
        
        <PageTitle embedded={embedded}>{source.architecture[0].text}</PageTitle>
        <p className={styles.lead}>{source.architecture[1].text}</p>
        <p>Negotiation Architecture is a system for leading high-stakes conversations, navigating complexity, engineering optimal outcomes and shaping superior commercial agreements.</p>
        <div className={styles.actions}>
          <Action href="/advisory-programmes">Apply the system</Action>
          <Action href="#science" secondary>Explore Negotiation Science</Action>
        </div>
      </div>
    </section>
    <section id="framework" className={styles.tint}><div className={styles.container}>
      <div className={styles.sectionHeading}><div><h2>{source.architecture[3].text}</h2></div><p>{source.architecture[4].text}</p></div>
      <div className={styles.processLayout}>
      <div className={styles.stepNav} role="group" aria-label="Five-stage process">{steps.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="stage-detail" onClick={() => setActive(index)}>
        <span>{`0${index + 1}`}</span>{item.name}{item.examin && <em className={styles.stageFlag}>EXAMIN</em>}
      </button>)}</div>
      <div id="stage-detail" className={styles.processPanel} aria-live="polite" aria-atomic="true">
        <div className={styles.stepDetail}>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
          <p className={styles.result}>{step.result}</p>
        </div>
        <div className={styles.examin} hidden={!step.examin}>
          <div>
            <h3>EXAMIN <span className={styles.examinSub}>Examine the deal before negotiating its terms.</span></h3>
            <p>{source.architecture[7].text}</p>
          </div>
          <ul className={styles.examinList}>
            {examinComponents.map(([term, description]) => <li key={term}><strong>{term}</strong> <span>{description}</span></li>)}
          </ul>
        </div>
      </div>
      </div>
    </div></section>
    <section className={`${styles.container} ${styles.researchSection}`}>
      <div className={styles.sectionHeading}><div><h2>{source.architecture[8].text}</h2></div></div>
      <div className={styles.split}>
        {layers.map(([title, text]) => <article key={title} className={styles.prose}><h3>{title}</h3><p>{text}</p></article>)}
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
    <section className={styles.closing}><div className={`${styles.container} ${styles.closingInner}`}>
      <div><h2>Science informs the system. Practice tests it.</h2><p>Negotiation Architecture translates research-informed thinking into a structured approach to preparation, engagement and outcomes.</p></div>
      <div className={styles.actions}><Action href="#framework">Explore Negotiation Architecture</Action></div>
    </div></section>
  </PageRoot>;
}

const offerDetails = [
  { label: "Individual", action: "Enquire about advisory" },
  { label: "Learning pathway", action: "Enquire about programmes" },
  { label: "Organisations", action: "Discuss team development" },
];

export function ProgramsContent({ embedded = false }: EmbedProps) {
  return <PageRoot id="advisory-programmes" embedded={embedded}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}>
      <Eyebrow>Advisory and capability development</Eyebrow>
      <PageTitle embedded={embedded}>{source.programs[0].text}</PageTitle>
      <p className={styles.lead}>{source.programs[1].text}</p>
      <p>{source.programs[2].text}</p>
      <div className={styles.actions}>
        <Action href="/contact">Discuss an engagement</Action>
        <Action href="/negotiation-architecture" secondary>Explore the methodology</Action>
      </div>
    </section>
    <section id="learning-formats" className={styles.container}>
      <div className={styles.sectionHeading}><div><Eyebrow>Ways to engage</Eyebrow><h2>{source.programs[3].text}</h2></div><p>{source.programs[4].text}</p></div>
      <div className={styles.programGrid}>{programmeOffers.map((program, index) => <article key={program.title}><div className={styles.programCopy}>
        <Eyebrow>{offerDetails[index].label}</Eyebrow>
        <h2>{program.title}</h2><p>{program.description}</p>
        <Action href={`/contact?interest=${encodeURIComponent(program.title)}`} secondary>{offerDetails[index].action} →</Action>
      </div></article>)}</div>
    </section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><div><Eyebrow>Engagement approach</Eyebrow><h2>{source.programs[11].text}</h2></div><div className={styles.prose}><SourceCopy items={source.programs.slice(12, 15)} /></div></div></section>
    <Closing eyebrow="Begin a conversation" title={source.programs[15].text} text={source.programs[16].text} />
  </PageRoot>;
}

export function InsightsContent({ embedded = false }: EmbedProps) {
  return <PageRoot id="insights" embedded={embedded}>
    <section className={`${styles.container} ${styles.insightsHero}`}>
      <Eyebrow>Ideas to take forward</Eyebrow>
      <div className={styles.insightsIntro}><PageTitle embedded={embedded}>{source.insights[0].text}</PageTitle><p>{source.insights[1].text}</p><p>A practical space for examining how people prepare, make decisions, manage disagreement and create value through negotiation.</p></div>
    </section>
    <section aria-label="Insight topics" className={`${styles.container} ${styles.insightsSection}`}>
      <div className={styles.insightGrid}>
        {insightPreviews.map(item => <article key={item.title} className={styles.insightCard}>
          <Eyebrow>{item.category}</Eyebrow>
          <h2>{item.title}</h2>
          <p className={styles.insightDescription}>{item.description}</p>
        </article>)}
      </div>
    </section>
    <section className={styles.insightsClosing}><div className={`${styles.container} ${styles.split}`}>
      <div><Eyebrow>A note on the content</Eyebrow><h2>{source.insights[14].text}</h2></div>
      <div className={styles.prose}><SourceCopy items={source.insights.slice(15)} /><Action href="/contact" secondary>Suggest a topic or enquire →</Action></div>
    </div></section>
  </PageRoot>;
}

export function ContactContent({ embedded = false }: EmbedProps) {
  const { sending, status, submitEnquiry } = useEnquiryForm();
  const interestRef = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    const select = interestRef.current;
    if (select && interest && Array.from(select.options).some(option => option.value === interest)) {
      select.value = interest;
    }
  }, []);
  return <PageRoot id="contact" embedded={embedded}>
    <section className={`${styles.container} ${styles.contactHero}`}>
      <div className={styles.contactIntro}>
        <Eyebrow>Start a conversation</Eyebrow>
        <PageTitle embedded={embedded}>{source.contact[0].text}</PageTitle>
        <p className={styles.lead}>{source.contact[1].text}</p>
        <p>{source.contact[2].text}</p>
        <div className={styles.contactDetails}>
          <Eyebrow>Professional enquiries</Eyebrow>
          <h2>{source.contact[3].text}</h2>
          <p>{source.contact[4].text}</p>
          <p className={styles.email}><strong>Email</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </div>
      <form className={styles.form} onSubmit={submitEnquiry}>
        <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <h3>{source.contact[6].text}</h3>
        <div className={styles.formRow}>
          <label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={120} /></label>
          <label htmlFor="enquiry-organisation">Organisation<input id="enquiry-organisation" name="organisation" autoComplete="organization" maxLength={200} /></label>
        </div>
        <div className={styles.formRow}>
          <label htmlFor="enquiry-email">Email address<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label>
          <label htmlFor="enquiry-interest">Area of interest<select ref={interestRef} id="enquiry-interest" name="interest" defaultValue="Executive Coaching & Advisory">
            <option>Executive Coaching & Advisory</option>
            <option>Negotiation Programmes</option>
            <option>Corporate & Team Development</option>
            <option>Speaking & Keynotes</option>
            <option>Research & Collaboration</option>
            <option>Other enquiry</option>
          </select></label>
        </div>
        <label htmlFor="enquiry-message">How can we help?<textarea id="enquiry-message" name="message" rows={4} required maxLength={4000} /></label>
        <p>We use your details to respond to your enquiry and discuss relevant services. Please read our <Link href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>. Please do not include sensitive personal or confidential third-party deal information.</p>
        <button className={styles.button} type="submit" disabled={sending} aria-busy={sending}>{sending ? "Sending…" : "Send enquiry"} <ArrowRight size={16} aria-hidden="true" /></button>
        <p role="status" className={styles.status} hidden={!status}>{status}</p>
      </form>
    </section>
  </PageRoot>;
}
