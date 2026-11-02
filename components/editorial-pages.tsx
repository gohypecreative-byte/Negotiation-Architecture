"use client";

import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, BookOpen, Compass, Users, Lightbulb } from "lucide-react";
import styles from "./editorial-pages.module.css";

const photos = {
  session: "/website pictures formal and informal/present (1).jpg",
  stage: "/website pictures formal and informal/6647413d-63d3-4bbe-8f51-8cea8c306a97 (1).JPG",
  portrait: "/website pictures formal and informal/7e8a09bf-3dc9-4a13-a50d-6531d9f916e2 (1).JPG",
  presentation: "/website pictures formal and informal/Presentation (1).jpg",
};
const email = "t@negotiationarchitecture.com";

function Action({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? styles.textLink : styles.button}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}
function Photo({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <figure className={styles.photo}><Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw" preload={priority} /></figure>;
}
function Closing({ title, text }: { title: string; text: string }) {
  return <section className={styles.closing}><div className={`${styles.container} ${styles.closingInner}`}><div><h2>{title}</h2><p>{text}</p></div><Action href="/contact">Start a Conversation</Action></div></section>;
}

const steps = [
  { name: "Understand", question: "What is really at stake?", text: "Start with the situation and the people involved. Separate stated positions from underlying interests before deciding what a good outcome looks like.", tasks: ["Map the stakeholders and their priorities", "Clarify your interests and constraints", "Define what a successful outcome means"], result: "A clear view of the negotiation ahead." },
  { name: "Analyse", question: "Where do you have room to move?", text: "Examine alternatives, dependencies and uncertainty. Understand the sources of leverage on both sides and the assumptions that still need testing.", tasks: ["Assess alternatives to an agreement", "Identify risks and information gaps", "Explore sources of mutual value"], result: "An informed position and realistic options." },
  { name: "Design", question: "How could an agreement work?", text: "Build options before committing to a single proposal. Consider the sequence of discussions and the trade-offs that could help the parties move forward.", tasks: ["Develop a range of possible agreements", "Plan offers and conditional concessions", "Choose the sequence of engagement"], result: "A practical strategy for the conversation." },
  { name: "Engage", question: "How will you move the conversation forward?", text: "Bring the preparation into the room. Listen carefully, test assumptions and adapt your approach as new information emerges.", tasks: ["Ask questions that uncover priorities", "Communicate proposals with clarity", "Manage tension while maintaining trust"], result: "A more purposeful and constructive dialogue." },
  { name: "Achieve", question: "How will the outcome last?", text: "Turn agreement into clear commitments. Make implementation part of the negotiation and review what can be learned for the next one.", tasks: ["Confirm responsibilities and next steps", "Address implementation risks", "Review outcomes and lessons"], result: "An agreement that can be put into practice." },
];

export function MethodologyContent() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.methodHero}`}>
      <div><h1>Better decisions.<br /><span>A deliberate process.</span></h1><p className={styles.lead}>Five connected stages bring structure to the complexity of negotiation, from understanding the situation to making an agreement work.</p><div className={styles.actions}><Action href="#framework">Explore the Framework</Action><Action href="/programs" secondary>Learn through practice</Action></div></div>
      <Photo src={photos.presentation} alt="Dr. Tarun Rochwani presenting a negotiation framework" priority />
    </section>
    <section id="framework" className={styles.tint}><div className={styles.container}>
      <div className={styles.sectionHeading}><h2>From preparation<br />to progress.</h2><p>Select a stage to explore its purpose and the work involved.</p></div>
      <div className={styles.stepNav} aria-label="Framework stages">{steps.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} aria-controls="stage-detail" onClick={() => setActive(index)}><span>0{index + 1}</span>{item.name}</button>)}</div>
      <div id="stage-detail" className={styles.stepDetail} aria-live="polite" aria-atomic="true"><div><h3>{step.question}</h3><p>{step.text}</p><p className={styles.result}>{step.result}</p></div><ul className={styles.checklist}>{step.tasks.map(task => <li key={task}><Check size={18} aria-hidden="true" />{task}</li>)}</ul></div>
    </div></section>
    <section className={`${styles.container} ${styles.splitSection} ${styles.methodPractice}`}><Photo src={photos.session} alt="Dr. Tarun Rochwani leading a session on negotiation strategy" /><div className={styles.prose}><h2>Structure that leaves<br />room for judgement.</h2><p>Negotiation rarely follows a straight line. New information may take you back to analysis. A change in priorities may call for a different design.</p><p>The framework gives you a way to revisit decisions deliberately, while staying responsive to the people and circumstances in front of you.</p><Action href="/research" secondary>Explore the thinking behind it</Action></div></section>
    <Closing title="Bring the framework to your next negotiation." text="Explore a coaching or learning format suited to your goals." />
  </div>;
}

const programs = [
  { name: "Executive Coaching", audience: "For individuals and leaders", image: photos.portrait, alt: "Seated portrait of Dr. Tarun Rochwani", text: "A focused space to prepare for the conversations that matter to you.", points: ["Work through a specific negotiation", "Explore your approach and assumptions", "Develop a practical preparation plan"], detail: "Discuss your context, priorities and the decisions ahead. The scope and format can then be shaped around your needs.", interest: "Executive coaching" },
  { name: "Corporate Programs", audience: "For teams and organisations", image: photos.stage, alt: "Dr. Tarun Rochwani speaking at Procuretech", text: "Build a shared approach to negotiation across roles and functions.", points: ["Create a common preparation language", "Apply concepts to business scenarios", "Connect learning to team priorities"], detail: "Begin with the challenges your team faces and the capabilities you want to develop. Program scope can be discussed around those goals.", interest: "Corporate programs" },
  { name: "Workshops & Masterclasses", audience: "For groups learning through practice", image: photos.session, alt: "Dr. Tarun Rochwani presenting a negotiation workshop", text: "Explore negotiation through discussion, cases and practical application.", points: ["Examine negotiation scenarios", "Practise structured decision-making", "Reflect on choices and alternatives"], detail: "Discuss the audience, topic and learning objectives to identify an appropriate session format.", interest: "Workshops and masterclasses" },
];

export function ProgramsContent() {
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><h1>Build the skills.<br /><span>Change the conversation.</span></h1><div className={styles.heroBottom}><p className={styles.lead}>Practical learning for the negotiations you face. Choose individual coaching, a team program or a focused workshop.</p><Action href="#learning-formats">Explore Programs</Action></div></section>
    <section id="learning-formats" className={`${styles.container} ${styles.programGrid}`}>{programs.map(program => <article key={program.name}><Photo src={program.image} alt={program.alt} /><div className={styles.programCopy}><h2>{program.name}</h2><p>{program.text}</p><Action href={`/contact?interest=${encodeURIComponent(program.interest)}`} secondary>Discuss this program</Action></div></article>)}</section>
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
    <section className={`${styles.container} ${styles.hero}`}><div><h1>Look deeper.<br /><span>Negotiate better.</span></h1><p className={styles.lead}>Research themes that connect human behaviour, strategic thinking and the practical work of reaching agreement.</p><div className={styles.actions}><Action href="#research-themes">Explore the Themes</Action></div></div><Photo src={photos.presentation} alt="Dr. Tarun Rochwani presenting a negotiation framework" priority /></section>
    <section id="research-themes" className={`${styles.container} ${styles.researchSection}`}><div className={styles.sectionHeading}><h2>Questions behind<br />the practice.</h2><p>Three areas of inquiry that inform the Negotiation Architecture approach.</p></div><div className={styles.themeGrid}>{themes.map(({ icon: Icon, ...theme }) => <article key={theme.title}><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><h3>{theme.title}</h3><p className={styles.question}>{theme.question}</p><p>{theme.text}</p><details className={styles.details}><summary>Questions to explore</summary><ul>{theme.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul></details></article>)}</div></section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><h2>Turning inquiry<br />into useful practice.</h2><div className={styles.prose}><p>A research-led approach asks us to examine assumptions and remain open to new information. It connects the questions we ask with the choices we make.</p><p>The five-stage methodology gives these ideas a practical structure for preparation, engagement and reflection.</p><Action href="/methodology" secondary>See the methodology</Action><Action href="/insights" secondary>Browse insights</Action></div></div></section>
    <Closing title="Have a question worth exploring?" text="Start a conversation about research, speaking or applying the framework." />
  </div>;
}

const insights = [
  { id: "uncertainty", category: "Strategy", title: "Negotiation in a complex and uncertain world", image: photos.presentation, alt: "A presentation on negotiation frameworks", intro: "A useful starting point is to distinguish what you know from what you are assuming.", paragraphs: ["Before entering a negotiation, list the decisions that depend on information you do not yet have. This helps turn uncertainty into questions you can investigate.", "Prepare more than one workable option. As circumstances change, revisit your assumptions and consider how those changes affect the interests on each side."], takeaway: "What new information would make you change your approach?" },
  { id: "behaviour", category: "Behaviour", title: "The role of behaviour in negotiation outcomes", image: photos.session, alt: "A session on negotiation strategy", intro: "The way a conversation unfolds can matter as much as the proposal on the table.", paragraphs: ["Notice how you respond when a proposal is challenged. Taking time to clarify the concern can reveal whether the disagreement is about substance, timing or how the proposal was understood.", "Use questions to understand the other party’s priorities. Summarising what you have heard gives them a chance to correct assumptions before those assumptions shape a decision."], takeaway: "Which question could help you understand the concern behind a position?" },
  { id: "value", category: "Strategy", title: "Building long-term value through strategic negotiation", image: photos.stage, alt: "Dr. Tarun Rochwani discussing negotiation on stage", intro: "Look beyond the immediate agreement to the relationship and commitments that follow.", paragraphs: ["Consider the different things each party values. Timing, certainty, flexibility and ongoing support may create room for an agreement that a price-only discussion overlooks.", "Before closing, clarify responsibilities and how changes will be handled. An agreement is more useful when the people implementing it understand what they have committed to."], takeaway: "What needs to be clear today for the agreement to work tomorrow?" },
];

export function InsightsContent() {
  const [filter, setFilter] = useState("All");
  const visible = insights.filter(item => filter === "All" || item.category === filter);
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.hero} ${styles.wideHero}`}><h1>A fresh perspective<br /><span>on the next conversation.</span></h1><p className={styles.lead}>Explore practical ideas on strategy, behaviour and creating value. Each reading note ends with a question to take into your own preparation.</p></section>
    <section className={`${styles.container} ${styles.insightsSection}`}><div className={styles.filters} aria-label="Filter insights">{["All", "Strategy", "Behaviour"].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><div className={styles.readingList}>{visible.map(item => <article key={item.id} className={styles.reading}><Photo src={item.image} alt={item.alt} /><div><h2>{item.title}</h2><p>{item.intro}</p><details className={styles.details}><summary>Read this perspective</summary><div className={styles.readingBody}>{item.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className={styles.takeaway}><BookOpen size={18} aria-hidden="true" />{item.takeaway}</p></div></details></div></article>)}</div></section>
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
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <div className={styles.page}>
    <section className={`${styles.container} ${styles.contactHero}`}>
      <div className={styles.contactIntro}>
        <h1>Let?s talk.</h1>
        <p className={styles.lead}>Your next negotiation. Your team?s development. A new perspective. Start a conversation with Dr. Tarun Rochwani.</p>
        <div className={styles.contactPortrait}><Photo src={photos.portrait} alt="Dr. Tarun Rochwani seated in a lounge" priority /></div>
        <a href={`mailto:${email}`} className={styles.email}><Mail size={18} aria-hidden="true" />{email}</a>
      </div>
      <form className={styles.form} onSubmit={prepareEmail}>
        <div className={styles.formIntro}><h2>What do you have in mind?</h2><p>Share a little about your goals and how we can help.</p></div>
        <div className={styles.formRow}><label htmlFor="enquiry-name">Your name<input id="enquiry-name" name="name" autoComplete="name" required maxLength={120} /></label><label htmlFor="enquiry-email">Email address<input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label></div>
        <label htmlFor="enquiry-organisation">Organisation <span>(optional)</span><input id="enquiry-organisation" name="organisation" autoComplete="organization" maxLength={200} /></label>
        <label htmlFor="enquiry-interest">I’m interested in<select ref={interestRef} id="enquiry-interest" name="interest" defaultValue="A conversation about my goals"><option>A conversation about my goals</option><option>Executive coaching</option><option>Corporate programs</option><option>Workshops and masterclasses</option><option>Speaking and advisory</option><option>Research collaboration</option></select></label>
        <label htmlFor="enquiry-message">What would you like to discuss?<textarea id="enquiry-message" name="message" rows={5} required maxLength={4000} placeholder="Your situation, goals and any timing to keep in mind…" /></label>
        <button className={styles.button} type="submit">Prepare Email <ArrowRight size={16} aria-hidden="true" /></button>
        <p className={styles.formHint}>Review and send your message in your email app.</p>
        {prepared && <p role="status" className={styles.status}>Your email draft is ready to open. If your email app did not launch, you can email {email} directly.</p>}
      </form>
    </section>
    <section className={styles.tint}><div className={`${styles.container} ${styles.split}`}><h2>Before we connect.</h2><div className={styles.faq}>{[{ q: "Which program is right for me?", a: "Start with your goals. Individual coaching focuses on your own challenges, while corporate programs and workshops support shared learning. You can discuss the options before choosing a format." }, { q: "Can we discuss a specific negotiation?", a: "Yes. Describe the general situation and what you hope to achieve in your initial enquiry. Detailed context can be discussed in a follow-up conversation." }, { q: "Can you tailor learning for our team?", a: "Corporate programs can be discussed around the team’s roles, challenges and learning priorities. Include your audience and objectives in your enquiry." }].map(item => <details className={styles.details} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
  </div>;
}
