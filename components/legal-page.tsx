import type { ReactNode } from "react";
import { SiteShell } from "./site-shell";
import styles from "./legal-page.module.css";
import { CONTACT_EMAIL, OFFICE_NAME, OFFICE_REGISTRATION, OFFICE_ADDRESS_LINES } from "@/lib/contact";

/** Date shown on every policy page; update it whenever a policy changes. */
export const POLICIES_UPDATED = "25 November 2026";

export function LegalPage({ title, introduction, children }: { title: string; introduction: string; children: ReactNode }) {
  return <SiteShell>
    <header className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Legal &amp; policies</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{introduction}</p>
        <p className={styles.updated}>Last updated: {POLICIES_UPDATED}</p>
      </div>
    </header>
    <article className={styles.body}>
      <div className={`${styles.inner} ${styles.content}`}>
        {children}
        <section>
          <h2>Contact</h2>
          <p>Negotiation Architecture® is operated by {OFFICE_NAME}. For questions about this page, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <address>{OFFICE_NAME}<br />{OFFICE_REGISTRATION}<br />{OFFICE_ADDRESS_LINES.map(line => <span key={line}>{line}<br /></span>)}</address>
        </section>
      </div>
    </article>
  </SiteShell>;
}
