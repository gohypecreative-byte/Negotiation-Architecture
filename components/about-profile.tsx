"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./about-profile.module.css";

// About copy from Negotiation_Architecture_Website_Final_Pravartak.html#about.

export function AboutProfile({ embedded = false }: { embedded?: boolean }) {
  const Title = embedded ? "h2" : "h1";
  return (
    <div id={embedded ? "about" : undefined} className={`${styles.page} ${embedded ? styles.embedded : ""}`}>
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.introduction}>
          <p className={styles.role}>About Negotiation Architecture</p>
          <Title className={styles.pageTitle}>Advancing the science and practice of negotiation.</Title>
          <p className={styles.lead}>A negotiation science, professional education and executive advisory platform dedicated to advancing how individuals and organisations negotiate, influence decisions, resolve conflicts and create economic value.</p>
        </div>
        <figure className={styles.portrait}>
          <Image src="/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG" alt="Dr. Tarun Rochwani beside the waterfront" width={1086} height={1448} sizes="(max-width: 800px) 100vw, 45vw" preload={!embedded} className={styles.portraitImage} />
        </figure>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <p className={styles.role}>Our philosophy</p>
          <h2>Beyond instinct. Towards deliberate design.</h2>
        </div>
        <div className={styles.prose}>
          <p>Grounded in academic research, applied psychology, human behaviour and commercial economics, Negotiation Architecture brings a structured and deliberate approach to negotiations.</p>
          <p>Our philosophy moves beyond conventional bargaining towards a deeper understanding of interests, relationships, opportunities and value creation.</p>
        </div>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <p className={styles.role}>Our purpose</p>
          <h2>Clarity, confidence and commercial intelligence.</h2>
        </div>
        <div className={styles.prose}>
          <p>Through executive coaching, professional development programmes and strategic advisory, Negotiation Architecture seeks to empower individuals and organisations to navigate complexity.</p>
          <h3>Executive coaching</h3>
          <p>Develop judgement and confidence in consequential conversations.</p>
          <h3>Professional education</h3>
          <p>Build negotiation capability through structured learning.</p>
          <h3>Strategic advisory</h3>
          <p>Apply negotiation thinking to complex commercial decisions.</p>
        </div>
      </section>

      <section className={styles.conviction} aria-labelledby="about-conviction">
        <div className={`${styles.container} ${styles.convictionInner}`}>
          <h2 id="about-conviction" className={styles.convictionStatement}>
            Better agreements are designed, not left to instinct or chance.
          </h2>
          <div className={styles.convictionActions}>
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3.5 rounded-full transition-colors text-white font-sans font-medium text-sm shadow-sm">
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/founder" className={styles.convictionLink}>
              Meet the founder
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
