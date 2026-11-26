import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL, OFFICE_NAME } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy — Negotiation Architecture®",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy — Negotiation Architecture®", url: "/privacy-policy", description: "How NegoScience Leadership Consulting handles personal information, confidentiality and privacy rights." },
  description: "How Negotiation Architecture collects, uses, shares and protects personal data for enquiries, coaching, advisory and learning engagements.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" introduction="This policy explains what personal data we collect when you use this website or work with us, how we use and protect it, and the rights you have.">
    <section>
      <h2>1. Who we are</h2>
      <p>Negotiation Architecture® is operated by {OFFICE_NAME} (“we”, “us”, “our”). We are responsible for the personal data described in this policy. Applicable requirements include India’s Digital Personal Data Protection Act, 2023 and Rules, 2025 as their provisions come into force, and the Information Technology Act, 2000 and applicable rules. EU GDPR, UK GDPR, UAE and other mandatory data protection laws apply only where the relevant processing falls within their scope.</p>
    </section>
    <section>
      <h2>2. Personal data we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><strong>Enquiries:</strong> your name, email address, organisation, area of interest and the message you send through our contact form or by email.</li>
        <li><strong>Engagements:</strong> contact details, job title, information you share in coaching, advisory or programme sessions, preparation materials, notes and feedback.</li>
        <li><strong>Learning and certification:</strong> enrolment details, attendance, assessment and diagnostic responses, submitted work, results, feedback and credential records needed to administer your programme.</li>
        <li><strong>Acceptance records:</strong> where you accept an engagement, your identity, email, engagement reference, applicable terms and privacy versions, UTC timestamp, acceptance method and, for corporate signatories, authority to accept. IP or browser information is collected for this purpose only where justified and disclosed.</li>
        <li><strong>Billing:</strong> billing name and address, organisation and tax details where legally required and payment records. Card or bank details are handled by the payment provider and are not stored by us.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>When you visit the website, our hosting provider processes technical information such as your IP address, browser type, device information and the pages requested, so the site can be delivered and secured.</p>
      <p>Please do not send sensitive personal data (such as health, financial account or identity-document details) or confidential third-party deal information in an initial enquiry.</p>
    </section>
    <section>
      <h2>3. How we use your data</h2>
      <ul>
        <li>To respond to your enquiry and discuss the services you are interested in.</li>
        <li>To prepare proposals and to deliver, schedule and administer coaching, advisory and learning engagements.</li>
        <li>To issue invoices, receive payments and keep accounting and tax records.</li>
        <li>To operate, maintain and secure this website.</li>
        <li>To comply with legal and regulatory obligations and to establish, exercise or defend legal claims.</li>
      </ul>
      <p>We collect only information needed for the stated purposes. We use enrolment, assessment and certification data to deliver learning, evaluate work and administer credentials, and acceptance records to evidence the agreement and resolve queries. We do not sell your personal data and we do not use it for automated decision-making. We will only send you news or marketing communications if you have asked to receive them, and you can opt out at any time.</p>
    </section>
    <section>
      <h2>4. Legal basis</h2>
      <p>We use consent and other permitted grounds under applicable Indian law. Where EU or UK GDPR applies, relevant bases include steps at your request before entering into a contract, performance of that contract, legal obligations, consent for optional processing, and legitimate interests in responding to enquiries and securing the website where those interests do not override your rights. Acceptance of our terms is not blanket consent to personal-data processing. Where processing is based on consent, you may withdraw it at any time; this does not affect processing already carried out.</p>
    </section>
    <section>
      <h2>5. Who we share data with</h2>
      <p>We share personal data only where necessary, with:</p>
      <ul>
        <li>service providers who support our business, such as email, hosting, video-conferencing, scheduling and payment providers, under appropriate confidentiality and data protection terms;</li>
        <li>professional advisers such as accountants, auditors and lawyers;</li>
        <li>an organisation that sponsors your coaching or programme, limited to what has been agreed in advance (see the confidentiality section of our <Link href="/terms">Terms of Service</Link>);</li>
        <li>authorities, regulators or courts where we are required to do so by law.</li>
      </ul>
    </section>
    <section>
      <h2>6. International transfers</h2>
      <p>We work with clients in several countries, and some of our service providers may store or process data outside the country in which you are located. Where we transfer personal data internationally, we take reasonable steps to ensure it remains protected in line with this policy and applicable law.</p>
    </section>
    <section>
      <h2>7. How long we keep data</h2>
      <ul>
        <li>Enquiries that do not lead to an engagement are kept for up to 24 months, then deleted.</li>
        <li>Coaching and engagement notes are kept for the duration of the engagement and for up to 3 years afterwards, unless you ask us to delete them sooner.</li>
        <li>Contracts, invoices and payment records are kept for the period required by applicable tax and accounting law. The applicable period depends on the record and legal obligation.</li>
      </ul>
      <p>Acceptance records are retained for the relevant engagement and applicable legal or dispute-resolution requirements. We securely delete or anonymise personal data when it is no longer needed, subject to lawful retention requirements.</p>
    </section>
    <section>
      <h2>8. How we protect data</h2>
      <p>We use reasonable technical and organisational safeguards, including encrypted connections, access controls and reputable service providers, to protect personal data against loss, misuse and unauthorised access. No method of transmission or storage is completely secure. If a personal data breach occurs, we will act promptly and notify affected individuals and authorities where the law requires.</p>
    </section>
    <section>
      <h2>9. Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>access a summary of the personal data we hold about you;</li>
        <li>ask us to correct, complete or update inaccurate data;</li>
        <li>ask us to delete your data, subject to legal record-keeping obligations;</li>
        <li>withdraw consent, or object to or restrict certain processing;</li>
        <li>receive your data in a portable format, where applicable;</li>
        <li>nominate another person to exercise your rights in the event of death or incapacity;</li>
        <li>raise a grievance with us and, if unresolved, complain to the relevant data protection authority (in India, the Data Protection Board of India).</li>
      </ul>
      <p>To exercise any of these rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need to verify your identity, and we aim to respond within 30 days, or sooner where a mandatory deadline applies.</p>
    </section>
    <section>
      <h2>10. Grievances</h2>
      <p>Questions or complaints about how we handle personal data can be sent to our grievance contact at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject line “Privacy”. We will acknowledge your message and work to resolve it promptly.</p>
    </section>
    <section>
      <h2>11. Children</h2>
      <p>Our website and services are intended for adults and organisations. We do not knowingly collect personal data from anyone under 18.</p>
    </section>
    <section>
      <h2>12. Cookies</h2>
      <p>The current website application does not intentionally set advertising or analytics cookies or load tracking pixels. Hosting and security services may process technical request information needed to deliver the site. You can manage cookies through your browser settings. Before adding non-essential cookies, tracking or integrations, we will update the relevant notice and request consent where required.</p>
    </section>
    <section>
      <h2>13. Changes to this policy</h2>
      <p>We may update this policy from time to time. The “Last updated” date above shows when it was last revised. Material changes will be highlighted on this page.</p>
    </section>
    <section>
      <h2>14. AI assistance, recordings and transcription</h2>
      <p>Before using AI-assisted administration, analysis or note-taking with your personal or confidential information, we will explain the proposed use, provider and relevant safeguards. Optional AI processing requires separate permission where applicable, and reasonable alternatives will be offered where feasible. We do not authorise client data to be used to train AI models, and provider settings and contractual protections must be checked before use.</p>
      <p>Recording or transcription requires prior permission from all participants. Agreeing to an engagement does not itself permit recording, transcription or optional AI processing. These tools do not replace human judgement, and we do not use personal data for automated decision-making.</p>
    </section>
    <section>
      <h2>15. Personal and commercial confidentiality</h2>
      <p>We protect personal, corporate and commercially sensitive information shared with us, including confidential deal information. Access is limited to people who need it for the agreed purpose. Disclosure may occur with your authorisation, where legally required, or where permitted by law to address a serious risk of harm.</p>
      <p>We obtain appropriate authorisation before publishing client names, testimonials, identifiable case studies or recordings. Further confidentiality terms appear in our <Link href="/terms">Terms of Service</Link>.</p>
    </section>
  </LegalPage>;
}
