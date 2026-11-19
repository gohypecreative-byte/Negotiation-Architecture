"use client";

import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Check, Mail, BookOpen, Compass, Users, Lightbulb } from "lucide-react";
import styles from "./editorial-pages.module.css";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_ADDRESS, enquiryEmailHref } from "@/lib/contact";

const email = CONTACT_EMAIL;

function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? styles.textLink : styles.button}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
function Closing({ title, text }: { title: string; text: string }) {
  return <section className={styles.closing}><div className={`${styles.container} ${styles.closingInner}`}><div><h2>{title}</h2><p>{text}</p></div><Action href="/contact">Start a Conversation</Action></div></section>;
}

const steps = [
  { name: "Understand", question: "Understand what is really happening.", text: "Start with the people and the situation. Separate stated positions from underlying interests. Define what a useful outcome means.", tasks: ["Map the stakeholders and their priorities", "Clarify your interests and constraints", "Define what a successful outcome means"], result: "The result: clarity before action." },
  { name: "Analyse", question: "Analyse interests, choices and the economics.", text: "Look beneath the surface. Weigh priorities, alternatives, influence and dependencies. Then establish what the deal is truly worth.", tasks: ["Assess alternatives to an agreement", "Identify risks and information gaps", "Explore sources of mutual value"], result: "The result: a sharper view of your choices and the value at stake." },
  { name: "Design", question: "Design your approach with intention.", text: "Shape objectives, options, sequence and trade-offs. Prepare for different responses. Stay open to new information.", tasks: ["Develop a range of possible agreements", "Plan offers and conditional concessions", "Choose the sequence of engagement"], result: "The result: a considered plan with room to adapt." },
  { name: "Engage", question: "Engage with clarity and awareness.", text: "Put preparation into practice. Listen closely. Ask purposeful questions. Respond to people and dynamics as they unfold.", tasks: ["Ask questions that uncover priorities", "Communicate proposals with clarity", "Manage tension while maintaining trust"], result: "The result: a more deliberate, constructive exchange." },
  { name: "Achieve", question: "Achieve an outcome that works.", text: "Clarify what was agreed, who is responsible and what happens next. Reflect, so experience strengthens future capability.", tasks: ["Confirm responsibilities and next steps", "Address implementation risks", "Review outcomes and lessons"], result: "The result: clear commitments, follow-through and learning." },
];

export function MethodologyContent() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero} ${styles.methodHero}`}>
      <div><h1>A deliberate process.<br /><span>Room for human judgement.</span></h1><p className={styles.lead}>Five connected stages. Structure without making negotiation mechanical.</p><div className={styles.actions}><Action href="#framework">Explore the Framework</Action><Action href="/programs" secondary>Learn through practice</Action></div></div>

    </section>
    <section id="framework" className={styles.tint}><div className={styles.container}>
      <div className={styles.sectionHeading}><h2>From preparation<br />to progress.</h2><p>Select a stage to explore its purpose and the work involved.</p></div>
      <div className={styles.stepNav} aria-label="Framework stages">{steps.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="stage-detail" onClick={() => setActive(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
      <div id="stage-detail" className={styles.stepDetail} aria-live="polite" aria-atomic="true"><div><h3>{step.question}</h3><p>{step.text}</p><p className={styles.result}>{step.result}</p></div><ul className={styles.checklist}>{step.tasks.map(task => <li key={task}><Check size={18} aria-hidden="true" />{task}</li>)}</ul></div>
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
    <section className={`${styles.container} ${styles.splitSection} ${styles.methodPractice}`}><div className={styles.prose}><h2>Structure that leaves<br />room for judgement.</h2><p>Negotiation rarely follows a straight line. New information may take you back to analysis. A change in priorities may call for a different design.</p><p>The framework gives you a way to revisit decisions deliberately, while staying responsive to the people and circumstances in front of you.</p><Action href="/research" secondary>Explore the thinking behind it</Action></div></section>
    <Closing title="Bring the framework to your next negotiation." text="Explore a coaching or learning format suited to your goals." />
  </div>;
}

const programs = [
  { name: "Executive Coaching & Advisory", audience: "For individuals and leaders", text: "Focused support to prepare for important conversations and strengthen personal capability.", points: ["Work through a specific negotiation", "Explore your approach and assumptions", "Develop a practical preparation plan"], detail: "Discuss your context, priorities and the decisions ahead. The scope and format can then be shaped around your needs.", interest: "Executive Coaching & Advisory" },
  { name: "Corporate & Team Development", audience: "For teams and organisations", text: "Workshops and tailored learning that strengthen how teams prepare, communicate and decide.", points: ["Create a common preparation language", "Apply concepts to business scenarios", "Connect learning to team priorities"], detail: "Begin with the challenges your team faces and the capabilities you want to develop. Program scope can be discussed around those goals.", interest: "Corporate & Team Development" },
  { name: "Negotiation Programmes", audience: "For groups learning through practice", text: "Structured learning in strategic judgement, behavioural awareness and practical skill.", points: ["Examine negotiation scenarios", "Practise structured decision-making", "Reflect on choices and alternatives"], detail: "Discuss the audience, topic and learning objectives to identify an appropriate session format.", interest: "Negotiation Programmes" },
];

export function ProgramsContent() {
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><h1>Learn the system.<br /><span>Apply it to what matters.</span></h1><div className={styles.heroBottom}><p className={styles.lead}>From a single conversation to an entire team. Practical support for the situations that matter.</p><Action href="#learning-formats">Explore Programs</Action></div></section>
    <section id="learning-formats" className={`${styles.container} ${styles.programGrid}`}>{programs.map(program => <article key={program.name}><div className={styles.programCopy}><h2>{program.name}</h2><p>{program.text}</p><Action href={`/contact?interest=${encodeURIComponent(program.interest)}`} secondary>Discuss this program</Action></div></article>)}</section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><div><h2>Start with your context.</h2><p className={styles.lead}>The right learning format begins with the work you need to do.</p></div><div className={styles.prose}><h3>A conversation about your goals</h3><p>Tell us who the learning is for, the situations they encounter and the capabilities you want to strengthen.</p><h3>A format that fits</h3><p>Explore the balance of individual preparation, group discussion and practical application that suits your needs.</p><Action href="/contact">Find the Right Program</Action></div></div></section>
  </div>;
}

const themes = [
  { icon: Users, title: "The psychology of concession", question: "What makes people willing to move?", text: "Explore how expectations, perceptions of fairness and the timing of concessions shape a negotiation.", prompts: ["How do people interpret a concession?", "When can reciprocity support progress?", "How can a trade-off be made explicit?"] },
  { icon: Compass, title: "Creating and managing leverage", question: "Where does negotiating power come from?", text: "Consider the role of alternatives, information and interdependence before and during an exchange.", prompts: ["Which alternatives are genuinely available?", "Where do the parties depend on each other?", "What information could change the decision?"] },
  { icon: Lightbulb, title: "Negotiation in a complex world", question: "How do multiple interests become an agreement?", text: "Examine the challenges of negotiations that span parties, cultures and long-term commitments.", prompts: ["Whose interests are not yet represented?", "How does the sequence affect the outcome?", "What will implementation require?"] },
];

export function ResearchContent() {
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><div><h1>Grounded in inquiry.<br /><span>Made useful in practice.</span></h1><p className={styles.lead}>Negotiation Architecture draws on doctoral research, established scholarship and professional experience.</p><div className={styles.actions}><Action href="#research-themes">Explore the Themes</Action></div></div></section>
    <section id="research-themes" className={`${styles.container} ${styles.researchSection}`}><div className={styles.sectionHeading}><h2>Questions behind<br />the practice.</h2><p>Themes include the psychology of concessions, the sources of leverage and the challenge of aligning multiple interests.</p></div><div className={styles.themeGrid}>{themes.map(({ icon: Icon, ...theme }) => <article key={theme.title}><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><h3>{theme.title}</h3><p className={styles.question}>{theme.question}</p><p>{theme.text}</p><details className={styles.details}><summary>Questions to explore</summary><ul>{theme.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul></details></article>)}</div></section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><h2>Turning inquiry<br />into useful practice.</h2><div className={styles.prose}><p>A research-led approach asks us to examine assumptions and remain open to new information. It connects the questions we ask with the choices we make.</p><p>The five-stage methodology gives these ideas a practical structure for preparation, engagement and reflection.</p><Action href="/methodology" secondary>See the methodology</Action><Action href="/insights" secondary>Browse insights</Action></div></div></section>
    <section className={`${styles.container} ${styles.splitSection}`}>
      <h2>What helps people move from disagreement towards collaboration?</h2>
      <div className={styles.prose}>
        <p>Doctoral research examined negotiation outcomes in UAE supply chain relationships and facilities management. It explores trust, information sharing and conflict resolution.</p>
        <p>Doctoral study, Clermont Business School.</p>
        <Action href="/contact?interest=Research%20collaboration" secondary>Discuss the research</Action>
      </div>
    </section>
    <Closing title="Have a question worth exploring?" text="Start a conversation about research, speaking or applying the framework." />
  </div>;
}

const insights = [
  { id: "uncertainty", category: "Strategy", title: "Negotiation in a complex and uncertain world", intro: "Separate what is known from what is assumed. Prepare for more than one path.", paragraphs: ["Before entering a negotiation, list the decisions that depend on information you do not yet have. This helps turn uncertainty into questions you can investigate.", "Prepare more than one workable option. As circumstances change, revisit your assumptions and consider how those changes affect the interests on each side."], takeaway: "What new information would make you change your approach?" },
  { id: "behaviour", category: "Behaviour", title: "The role of behaviour in negotiation outcomes", intro: "How listening, emotional awareness and the questions we ask can change a conversation.", paragraphs: ["Notice how you respond when a proposal is challenged. Taking time to clarify the concern can reveal whether the disagreement is about substance, timing or how the proposal was understood.", "Use questions to understand the other party’s priorities. Summarising what you have heard gives them a chance to correct assumptions before those assumptions shape a decision."], takeaway: "Which question could help you understand the concern behind a position?" },
  { id: "value", category: "Long-term value", title: "Building durable value through negotiation", intro: "Look beyond the immediate agreement to the relationships and commitments that follow.", paragraphs: ["Consider the different things each party values. Timing, certainty, flexibility and ongoing support may create room for an agreement that a price-only discussion overlooks.", "Before closing, clarify responsibilities and how changes will be handled. An agreement is more useful when the people implementing it understand what they have committed to."], takeaway: "What needs to be clear today for the agreement to work tomorrow?" },
];

export function InsightsContent() {
  const [filter, setFilter] = useState("All");
  const visible = insights.filter(item => filter === "All" || item.category === filter);
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><h1>Insights for<br /><span>the conversations ahead.</span></h1><p className={styles.lead}>Perspectives on negotiation, behaviour and the choices that shape outcomes.</p></section>
    <section className={`${styles.container} ${styles.insightsSection}`}><div className={styles.filters} aria-label="Filter insights">{["All", "Strategy", "Behaviour", "Long-term value"].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><div className={styles.readingList}>{visible.map(item => <article key={item.id} className={styles.reading}><div><h2>{item.title}</h2><p>{item.intro}</p><details className={styles.details}><summary>Read this perspective</summary><div className={styles.readingBody}>{item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className={styles.takeaway}><BookOpen size={18} aria-hidden="true" />{item.takeaway}</p></div></details></div></article>)}</div></section>
    <Closing title="Put the ideas into practice." text="Explore how coaching or a team program could support your next negotiation." />
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
        <h1>Prepare with intention.<br /><span>Engage with clarity.</span></h1>
        <p className={styles.lead}>Building your own capability, preparing for a conversation or strengthening a team? Begin with the situation that matters.</p>

        <a href={`mailto:${email}`} className={styles.email}><Mail size={18} aria-hidden="true" />{email}</a>
        <address className="mt-6 not-italic text-base leading-relaxed text-slate-600">
          <strong className="block font-medium text-[#111827]">{OFFICE_NAME}</strong>
          <span className="mt-2 block">{OFFICE_ADDRESS}</span>
        </address>
      </div>
      <form className={styles.form} onSubmit={prepareEmail}>
        <div className={styles.formIntro}><h2>What do you have in mind?</h2><p>Share a little about your goals and how we can help.</p></div>
        <div className={styles.formRow}><label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={120} /></label><label htmlFor="enquiry-email">Email address<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
        <label htmlFor="enquiry-organisation">Organisation <span>(optional)</span><input id="enquiry-organisation" name="organisation" autoComplete="organization" maxLength={200} /></label>
        <label htmlFor="enquiry-interest">I’m interested in<select ref={interestRef} id="enquiry-interest" name="interest" defaultValue="A conversation about my goals"><option>A conversation about my goals</option><option>Executive Coaching & Advisory</option><option>Corporate & Team Development</option><option>Negotiation Programmes</option><option>Speaking and advisory</option><option>Research collaboration</option></select></label>
        <label htmlFor="enquiry-message">What would you like to discuss?<textarea id="enquiry-message" name="message" rows={5} required maxLength={4000} placeholder="Your situation, goals and any timing to keep in mind…" /></label>
        <button className={styles.button} type="submit">Prepare Email <ArrowRight size={16} aria-hidden="true" /></button>
        <p className={styles.formHint}>Review and send your message in your email app.</p>
        {prepared && <p role="status" className={styles.status}>Your email draft is ready to open. If your email app did not launch, you can email {email} directly.</p>}
      </form>
    </section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><h2>Before we connect.</h2><div className={styles.faq}>{[{ q: "Which program is right for me?", a: "Start with your goals. Executive Coaching & Advisory supports important conversations, Negotiation Programmes offer structured learning, and Corporate & Team Development strengthens shared capability. You can discuss the options before choosing a format." }, { q: "Can we discuss a specific negotiation?", a: "Yes. Describe the general situation and what you hope to achieve in your initial enquiry. Detailed context can be discussed in a follow-up conversation." }, { q: "Can you tailor learning for our team?", a: "Corporate & Team Development can be discussed around the team’s roles, challenges and learning priorities. Include your audience and objectives in your enquiry." }].map(item => <details className={styles.details} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
  </div>;
}
