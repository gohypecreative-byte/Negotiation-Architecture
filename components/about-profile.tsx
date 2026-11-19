"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, MessagesSquare } from "lucide-react";
import { useOpenConsult } from "./site-shell";
import { PrimaryButton } from "./negotiation-home";
import { CountUp } from "./count-up";
import styles from "./about-profile.module.css";

const perspectives = [
  { icon: BookOpen, title: "Research-informed", text: "Grounded in doctoral inquiry, established scholarship and professional experience." },
  { icon: Compass, title: "Human-centred", text: "Strategy that accounts for people, interests and relationships. Think clearly, act deliberately and build outcomes that last." },
  { icon: MessagesSquare, title: "Practical by design", text: "Preparation, application and reflection. Never theory alone." },
];

export function AboutProfile() {
  const openConsult = useOpenConsult();
  return (
    <div className={styles.page}>
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.introduction}>
          <h1>Dr. Tarun L. Rochwani<span className={styles.degree}>, DBA</span></h1>
          <p className={styles.role}>Founder, Negotiation Architecture</p>
          <p className={styles.lead}>Bringing structure to complex negotiations.<br className={styles.desktopBreak} /> Keeping people at the centre.</p>
          <p className={styles.summary}>More than 25 years leading and steering multidisciplinary teams across procurement, supply chain, construction, real estate and facilities management.</p>
          <div className={styles.actions}>
            <PrimaryButton onClick={openConsult}>Book a Consultation</PrimaryButton>
            <a href="#about-approach" className={styles.textLink}>Explore the approach <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <Image src="/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG" alt="Dr. Tarun Rochwani beside the waterfront" width={1086} height={1448} sizes="(max-width: 800px) 100vw, 45vw" preload className={styles.portraitImage} />
        </figure>
      </section>

      <section id="about-approach" className={`${styles.container} ${styles.story}`}>
        <div>
          <h2>Better outcomes begin<br />with better understanding.</h2>
          <div className={styles.experience}>
            <strong><CountUp value={25} /><span>+</span></strong>
            <span>Years of professional<br />experience</span>
          </div>
        </div>
        <div className={styles.prose}>
          <p>Negotiation is part of everyday life. It shapes leadership, business, partnerships, teams, careers and relationships.</p>
          <p>Negotiation Architecture brings preparation, strategic thinking and behavioural awareness into one connected approach. No one should rely on instinct alone when a conversation could shape their future.</p>
          <p>Dr. Rochwani brings direct oversight of multi-billion-dollar (USD) portfolios across 26 countries and five continents.</p>
          <p>Doctoral research into negotiation outcomes at Clermont Business School examined UAE supply chain relationships and facilities management, exploring trust, information sharing and conflict resolution.</p>
          <Link href="/methodology" className={styles.textLink}>Discover the methodology <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.perspectives}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <h2>Research meets<br />the real world.</h2>
            <p>A perspective shaped by academic inquiry, professional experience and the work of helping others develop.</p>
          </div>
          <div className={styles.perspectiveGrid}>
            {perspectives.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.teaching}`}>

        <div className={styles.teachingCopy}>
          <h2>Ideas that travel<br />beyond the room.</h2>
          <p>Through speaking, coaching and practical learning, Dr. Rochwani shares approaches to negotiation, strategy and leadership that people can take into their next conversation.</p>
          <p>For leaders, founders and teams, the focus is the same: clearer preparation, more considered choices and stronger professional relationships.</p>
          <Link href="/programs" className={styles.textLink}>Explore programs and coaching <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div><h2>Academic &amp;<br />Executive Education</h2></div>
        <div className={styles.prose}>
          <p>Harvard University · Stanford University · INSEAD</p>
          <h3>AI &amp; Emerging Technologies</h3>
          <p>Indian Institute of Technology Madras (IIT Madras)</p>
          <p>Agentic AI &amp; Autonomous Systems</p>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={`${styles.container} ${styles.contactInner}`}>
          <div>
            <h2>Prepare with intention.<br />Engage with clarity.</h2>
            <p>Building your own capability, preparing for a conversation or strengthening a team? Begin with the situation that matters.</p>
          </div>
          <PrimaryButton onClick={openConsult}>Book a Consultation</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
