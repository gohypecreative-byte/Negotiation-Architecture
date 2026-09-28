"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteNavbar, sessionHref } from "./site-navbar";
import { ReadinessAssessment } from "./readiness-assessment";
import { TransformationIllustration } from "./transformation-illustration";

const highlights = [
  "Structure. Precision. Influence by Design.",
  "Research-informed",
  "Evidence-based",
  "Measured outcomes",
  "Three certification levels",
  "Live assessed capstones",
  "Twenty-six countries",
  "Two and a half decades of practice",
];

export function LandingPage() {
  const reduce = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <SiteNavbar />
      <main id="main" tabIndex={-1}>
        <section className="landing-hero" id="top" aria-labelledby="hero-title">
          <Image
            className="hero-background"
            src="/images/negotiation-boardroom.webp"
            alt=""
            fill
            preload
            unoptimized
            sizes="100vw"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-inner">
            <motion.div
              className="landing-hero-copy"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >
              <div className="hero-eyebrow">Private advisory &amp; executive coaching</div>
              <h1 id="hero-title">Design the outcome.<br /><em>Lead the room.</em></h1>
              <p className="hero-description">
                The conversations that matter deserve more than instinct.
                Enter your next negotiation with clarity, composure, and a plan.
              </p>
              <div className="hero-actions">
                <motion.a href={sessionHref} className="session-button" whileHover={reduce ? {} : { y: -2 }} whileTap={reduce ? {} : { scale: .98 }}>
                  Book a strategy session<ArrowUpRight size={17} />
                </motion.a>
                <a href="#practice" className="hero-secondary">
                  Explore the approach<ArrowRight size={16} />
                </a>
              </div>
              <p className="hero-author">With Dr. Tarun Rochwani</p>
            </motion.div>

          </div>
          <div className="hero-credentials" role="group" aria-label="Professional credentials">
            <div className="credential-grid">
              {[
                { value: "25+", label: "Years of practice", description: "Two and a half decades of executive negotiation, across procurement, real estate and construction" },
                { value: "26", label: "Countries", description: "The environments kept changing. The pattern did not." },
                { value: "DBA", label: "Research foundation", description: "Defended doctoral research on negotiation outcomes — evidence, not anecdote" },
                { value: "Live", label: "Assessed capability", description: "Every capstone observed and scored against six competency domains. Never self-paced, never waived." },
              ].map(credential => (
                <div className="credential" key={credential.label}>
                  <div className="credential-value">{credential.value}</div>
                  <h2>{credential.label}</h2>
                  <p>{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="brand-ticker" aria-label="The Negotiation Architecture approach">
          <div className="ticker-window">
            <div className="ticker-track">
              {[0, 1].map(copy => (
                <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {highlights.map((text, index) => (
                    <span className="ticker-item" key={text}>
                      {index === 0 ? <em>{text}</em> : <span>{text}</span>}
                      <span className="ticker-star" aria-hidden="true">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="practice-section" id="practice" aria-labelledby="practice-title">
          <div className="practice-shell">
            <div className="practice-heading">
              <span className="practice-eyebrow">The practice</span>
              <p>Built in the room. Grounded in research.</p>
            </div>
            <div className="practice-grid">
              <figure className="practice-visual">
                <Image
                  src="/images/negotiation-boardroom.webp"
                  alt="A sunlit boardroom overlooking Dubai, with a notebook ready at the negotiation table"
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  className="practice-image"
                />
                <figcaption className="practice-image-caption">
                  <span className="practice-caption-label">The observation that started it all</span>
                  <blockquote>“The people who did well had designed the conversation <em>before it began.</em>”</blockquote>
                  <span className="practice-caption-author">Dr. Tarun L. Rochwani, DBA</span>
                </figcaption>
              </figure>
              <div className="practice-story" id="about-tarun">
                <span className="practice-eyebrow">Experience, made into a discipline</span>
                <h2 id="practice-title">A lifetime at the table.<br /><em>A different way to lead.</em></h2>
                <div className="practice-bio">
                  <span className="practice-monogram" aria-hidden="true">TR</span>
                  <div><h3>Dr. Tarun L. Rochwani</h3><p>Doctor of Business Administration</p></div>
                </div>
                <div className="practice-prose">
                  <p>Two and a half decades on the commercial side of large, complicated builds — hundreds of interlocking contracts across twenty-six countries, where one upstream decision runs through a decade of delivery and cannot be quietly corrected later.</p>
                  <p>Most of that time was spent in the rooms where value is created or quietly lost: supplier negotiations, contract structuring, claims and escalations, board-level commitments made under time pressure.</p>
                  <p>The pattern had little to do with talent. The people who did well had designed the conversation before it began. <strong>Everyone else improvised.</strong></p>
                  <p>A doctorate then tested that observation rather than asserting it. What came out of both is the system I teach and apply.</p>
                </div>
                <a className="practice-about-link" href="mailto:t@negotiationarchitecture.com?subject=About%20Dr.%20Tarun">About Dr. Tarun <ArrowUpRight size={17} /></a>
              </div>
            </div>
            <div className="practice-method" id="methodology">
              <div className="practice-method-title">
                <span className="practice-eyebrow">The methodology</span>
                <h3>Negotiation Architecture<sup>®</sup></h3>
                <p>Structure. Precision. Influence by Design.</p>
              </div>
              <div className="practice-method-copy">
                <p>A structured approach to preparing, leading and concluding high-stakes conversations.</p>
                <p className="practice-method-manifesto">Stop improvising. <em>Start architecting.</em></p>
                <Link className="session-button" href="/negotiation-architecture">See how it works <ArrowUpRight size={17} /></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="start-section" aria-labelledby="start-title">
          <div className="start-shell">
            <div className="start-intro">
              <span className="practice-eyebrow">Your next step</span>
              <h2 id="start-title">Start here.</h2>
            </div>
            <nav className="start-options" aria-label="Ways to get started">
              {[
                { title: "Take the Assessment", duration: "Sixty seconds", subject: "Negotiation assessment enquiry" },
                { title: "Read the Prospectus", duration: "Ten minutes", subject: "Request the programme prospectus" },
                { title: "Join a Masterclass", duration: "One evening", subject: "Join a negotiation masterclass" },
                { title: "Speak with the Faculty", duration: "Thirty minutes", subject: "Arrange a faculty conversation" },
              ].map(option => (
                <a
                  className="start-option"
                  key={option.title}
                  href={option.title === "Take the Assessment" ? "#assessment" : `mailto:t@negotiationarchitecture.com?subject=${encodeURIComponent(option.subject)}`}
                  aria-label={`${option.title} — ${option.duration}.${option.title === "Take the Assessment" ? "" : " Enquire by email."}`}
                >
                  <span className="start-option-time">{option.duration}</span>
                  <span className="start-option-bottom">
                    <span className="start-option-title">{option.title}</span>
                    <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>
        <section className="recognition-section" id="recognition" aria-labelledby="recognition-title">
          <div className="recognition-shell">
            <div className="recognition-labels">
              <span className="practice-eyebrow">Recognition</span>
              <span className="recognition-sheet">Sheet 01 · The cost of improvisation</span>
            </div>
            <div className="recognition-intro">
              <h2 id="recognition-title">Capable professionals lose negotiations for <em>predictable reasons.</em></h2>
              <div className="recognition-context">
                <p>Negotiation failure is rarely a knowledge problem. It is a design problem — and design problems repeat until the system changes.</p>
                <p className="recognition-principle"><em>Every conversation is a design opportunity. <strong>Learn to lead it.</strong></em></p>
              </div>
            </div>
            <div className="recognition-photo">
              <Image
                src="/images/recognition-negotiation.webp"
                alt="Four professionals listening and discussing a proposal around a negotiation table"
                width={1800}
                height={607}
                sizes="(max-width: 700px) 100vw, (max-width: 1440px) 92vw, 1280px"
              />
            </div>
            <div className="recognition-patterns">
              {[
                {
                  category: "Improvisation",
                  title: "Preparation without architecture",
                  description: "Content is over-prepared while the psychological and strategic structure of the conversation is left to instinct. The outcome is hoped for, not designed.",
                },
                {
                  category: "Physiology",
                  title: "The adrenaline response",
                  description: "Pressure, silence and aggression trigger a stress response that produces expensive concessions. Composure is a trainable architecture, not a personality trait.",
                },
                {
                  category: "Single-issue thinking",
                  title: "Deals collapse on one number",
                  description: "Price dominates because it is visible. Negotiations stall or die on a single variable while the value that could unlock them stays undiscovered.",
                },
              ].map(pattern => (
                <article className="recognition-pattern" key={pattern.category}>
                  <span className="recognition-category">{pattern.category}</span>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.description}</p>
                </article>
              ))}
            </div>
            <div className="recognition-next">
              <p>Structure is what separates a designed negotiation from an improvised one. <em>Which pattern is costing you? Sixty seconds will tell you.</em></p>
              <a
                className="recognition-assessment"
                href="#assessment"
              >
                Take the Readiness Assessment <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <ReadinessAssessment />
        <section className="aspiration-section" id="aspiration" aria-labelledby="aspiration-title">
          <div className="recognition-shell">
            <div className="recognition-labels">
              <span className="practice-eyebrow">Aspiration</span>
              <span className="recognition-sheet">Sheet 03 · What you become</span>
            </div>
            <div className="aspiration-heading">
              <h2 id="aspiration-title">The science explains why it works.<br /><em>The transformation is what you become.</em></h2>
              <p>From reactive to strategic.<br />From instinct to intelligence.</p>
            </div>
            <TransformationIllustration />
            <div className="aspiration-layout">
              <ul className="transformation-list">
                {[
                  ["You hope for a good result", "You design the outcome before the conversation begins"],
                  ["Pressure triggers concessions", "Pressure triggers your practiced pause"],
                  ["Deals live or die on price", "You unbundle deals into value no one else saw"],
                  ["Strong meetings go silent", "You engineer momentum and commitment at every step"],
                  ["Every negotiation starts from zero", "Every negotiation compounds into expertise"],
                ].map(([before, after]) => <li key={before}><span>{before}</span><ArrowRight size={17} aria-hidden="true" /><strong>{after}</strong></li>)}
              </ul>
              <div className="graduate-outcomes">
                <h3>Graduates learn to</h3>
                <ul>{[
                  "Think strategically under sustained pressure",
                  "Negotiate with calm, grounded confidence",
                  "Influence decisions ethically — agreement that feels like the other party’s own idea",
                  "Resolve conflict constructively and preserve relationships through breakdown",
                  "Lead difficult conversations others avoid",
                  "Become the trusted negotiation leader in their organisation",
                ].map(outcome => <li key={outcome}>{outcome}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
