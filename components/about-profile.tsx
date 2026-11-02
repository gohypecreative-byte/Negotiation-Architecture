"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, MessagesSquare } from "lucide-react";
import { useOpenConsult } from "./site-shell";
import { PrimaryButton } from "./negotiation-home";
import { CountUp } from "./count-up";
import styles from "./about-profile.module.css";

const perspectives = [
  { icon: BookOpen, title: "Grounded in research", text: "Negotiation science and human behaviour provide the foundation. Research becomes useful when it helps people understand what is happening across the table." },
  { icon: Compass, title: "Shaped by practice", text: "Commercial decisions bring competing priorities, uncertainty and real consequences. The framework brings structure to these situations without losing sight of the people involved." },
  { icon: MessagesSquare, title: "Built to be shared", text: "Coaching, workshops and speaking turn ideas into practical skills. The aim is to help people prepare more thoughtfully and engage with greater confidence." },
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
          <p className={styles.summary}>A theorist and strategic advisor connecting research, human behaviour and real-world experience to help people make better decisions.</p>
          <div className={styles.actions}>
            <PrimaryButton onClick={openConsult}>Book a Consultation</PrimaryButton>
            <a href="#about-approach" className={styles.textLink}>Explore the approach <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <Image src="/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG" alt="Dr. Tarun Rochwani beside the waterfront" fill sizes="(max-width: 800px) 100vw, 45vw" preload className={styles.portraitImage} />
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
          <p>Negotiation is part of how we lead, build partnerships and resolve differences. It asks us to understand interests, navigate uncertainty and find a way forward together.</p>
          <p>Dr. Tarun L. Rochwani founded Negotiation Architecture to bring a structured approach to these human decisions. His work connects strategy and behavioural insight with the practical realities of professional life.</p>
          <p>The framework brings preparation, analysis, design and engagement into one connected process, helping individuals and organisations move towards better outcomes.</p>
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
        <figure className={styles.teachingPhoto}>
          <Image src="/website pictures formal and informal/present (1).jpg" alt="Dr. Tarun Rochwani presenting a session on negotiation strategy" fill sizes="(max-width: 800px) 100vw, 55vw" className={styles.sessionImage} />
        </figure>
        <div className={styles.teachingCopy}>
          <h2>Ideas that travel<br />beyond the room.</h2>
          <p>Through speaking, coaching and practical learning, Dr. Rochwani shares approaches to negotiation, strategy and leadership that people can take into their next conversation.</p>
          <p>For leaders, founders and teams, the focus is the same: clearer preparation, more considered choices and stronger professional relationships.</p>
          <Link href="/programs" className={styles.textLink}>Explore programs and coaching <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`${styles.container} ${styles.contactInner}`}>
          <div>
            <h2>Let’s start with<br />your next conversation.</h2>
            <p>Explore advisory, coaching or a learning experience for your team.</p>
          </div>
          <PrimaryButton onClick={openConsult}>Book a Consultation</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
