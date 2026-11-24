"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { source } from "@/lib/negotiation-content";
import styles from "./about-profile.module.css";

// Version 13 founder narrative: The founder → Professional experience → Academic inquiry → The work.
const about = source.about;

export function AboutProfile({ embedded = false }: { embedded?: boolean }) {
  const Title = embedded ? "h2" : "h1";
  return (
    <div id={embedded ? "about" : undefined} className={`${styles.page} ${embedded ? styles.embedded : ""}`}>
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.introduction}>
          <p className={styles.role}>The founder</p>
          <Title className={styles.pageTitle}>Dr. Tarun L. Rochwani<span className={styles.degree}>, DBA</span></Title>
          <p className={styles.lead}>{about[1].text}</p>
        </div>
        <figure className={styles.portrait}>
          <Image src="/website pictures formal and informal/2004f87a-a0bb-4ec7-81d7-04ad0daf9f54 (1).JPG" alt="Dr. Tarun Rochwani beside the waterfront" width={1086} height={1448} sizes="(max-width: 800px) 100vw, 45vw" preload={!embedded} className={styles.portraitImage} />
        </figure>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <p className={styles.role}>Professional experience</p>
          <h2>{about[2].text}</h2>
        </div>
        <div className={styles.prose}>
          {about.slice(3, 6).map(item => <p key={item.text}>{item.text}</p>)}
        </div>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <p className={styles.role}>Academic inquiry</p>
          <h2>{about[6].text}</h2>
        </div>
        <div className={styles.prose}>
          {about.slice(7, 10).map(item => <p key={item.text}>{item.text}</p>)}
          <h3>Academic &amp; Executive Education</h3>
          <p>{about[10].text}</p>
          <h3>AI &amp; Emerging Technologies</h3>
          <p>{about[11].text}</p>
          <p>{about[12].text}</p>
        </div>
      </section>

      <section className={`${styles.container} ${styles.story}`}>
        <div>
          <p className={styles.role}>The work</p>
          <h2>{about[13].text}</h2>
        </div>
        <div className={styles.prose}>
          <p>{about[14].text}</p>
          <div className={styles.actions}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C89B59] hover:bg-[#D9AB64] px-7 py-3 rounded-full transition-colors text-white font-sans font-medium text-sm">
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/negotiation-architecture" className={styles.textLink}>Explore Negotiation Architecture</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
