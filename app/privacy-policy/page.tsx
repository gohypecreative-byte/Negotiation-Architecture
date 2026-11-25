import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL, OFFICE_NAME } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy — Negotiation Architecture",
  description: "How Negotiation Architecture collects, uses, shares and protects personal data for enquiries, coaching, advisory and learning engagements.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" introduction="This policy explains what personal data we collect when you use this website or work with us, how we use and protect it, and the rights you have.">
    <section>
      <h2>1. Who we are</h2>
      <p>Negotiation Architecture® is operated by {OFFICE_NAME}, registered in India (“we”, “us”, “our”). We are responsible for the personal data described in this policy. We process personal data in line with India’s Digital Personal Data Protection Act, 2023 and, where they apply to you, other data protection laws such as the EU and UK General Data Protection Regulation (GDPR).</p>
    </section>
    <section>
      <h2>2. Personal data we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><strong>Enquiries:</strong> your name, email address, organisation, area of interest and the message you send through our contact form or by email.</li>
        <li><strong>Engagements:</strong> contact details, job title, information you share in coaching, advisory or programme sessions, preparation materials, notes and feedback.</li>
        <li><strong>Billing:</strong> billing name and address, company and tax details (such as GST number) and payment records. Card or bank details are handled by the payment provider and are not stored by us.</li>
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
      <p>We do not sell your personal data and we do not use it for automated decision-making. We will only send you news or marketing communications if you have asked to receive them, and you can opt out at any time.</p>
    </section>
    <section>
      <h2>4. Legal basis</h2>
      <p>We process personal data on the basis of your consent (for example, when you submit an enquiry), to take steps at your request before entering into a contract and to perform that contract, to comply with legal obligations, and for legitimate uses permitted by law, such as keeping the website secure. Where processing is based on consent, you may withdraw it at any time; this does not affect processing already carried out.</p>
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
        <li>Contracts, invoices and payment records are kept for as long as required by tax and accounting law (generally 8 years in India).</li>
      </ul>
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
      <p>To exercise any of these rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need to verify your identity, and we aim to respond within 30 days.</p>
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
      <p>This website does not set advertising, marketing or analytics cookies, and does not use tracking pixels. Our hosting provider may use strictly necessary technologies to deliver the website securely. You can block or delete cookies in your browser settings. If we introduce non-essential cookies, we will update this policy first and ask for your consent where required.</p>
    </section>
    <section>
      <h2>13. Changes to this policy</h2>
      <p>We may update this policy from time to time. The “Last updated” date above shows when it was last revised. Material changes will be highlighted on this page.</p>
    </section>
  </LegalPage>;
}
