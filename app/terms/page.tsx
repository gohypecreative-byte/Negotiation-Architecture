import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { OFFICE_NAME } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service — Negotiation Architecture",
  description: "Terms governing use of the Negotiation Architecture website and the provision of coaching, advisory and learning services.",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Service" introduction="These terms govern your use of this website and, together with any proposal or engagement agreement, the coaching, advisory and learning services we provide.">
    <section>
      <h2>1. About these terms</h2>
      <p>This website and the Negotiation Architecture® services are provided by {OFFICE_NAME}, registered in Mumbai (“we”, “us”, “our”). By using this website or booking our services, you (“you”, “client”) agree to these terms. If you are booking on behalf of an organisation, you confirm that you are authorised to accept these terms for it.</p>
      <p>Where a written proposal, engagement letter or agreement is signed for a specific engagement, its terms take priority over these terms if there is any conflict.</p>
    </section>
    <section>
      <h2>2. Our services</h2>
      <p>We provide executive coaching and advisory, negotiation programmes, corporate and team development, speaking engagements and related services. The scope, format, number of sessions, deliverables, fees and schedule of each engagement are set out in a proposal or engagement agreement.</p>
      <p>Services may be delivered in person or online. We may make reasonable changes to how a service is delivered, provided the agreed scope and quality are maintained.</p>
    </section>
    <section>
      <h2>3. Enquiries and bookings</h2>
      <p>Submitting an enquiry does not create a contract or confirm an appointment. A booking is confirmed only when we confirm it in writing and, where applicable, the required payment has been received.</p>
    </section>
    <section>
      <h2>4. Fees and payment</h2>
      <ul>
        <li>Fees are as stated in the proposal or engagement agreement. Unless stated otherwise, fees exclude applicable taxes such as GST or VAT, which will be added to invoices.</li>
        <li>Individual coaching and open programmes are payable in advance unless otherwise agreed in writing.</li>
        <li>Corporate engagements are invoiced as set out in the agreement. Invoices are payable within 14 days of the invoice date unless another period is agreed.</li>
        <li>Agreed travel, accommodation and venue costs for in-person delivery are charged at cost in addition to fees.</li>
        <li>We may pause or suspend services while any invoice remains overdue.</li>
      </ul>
    </section>
    <section>
      <h2>5. Cancellations, rescheduling and refunds</h2>
      <p>The following applies unless your proposal or engagement agreement sets different terms. The terms that apply will always be confirmed in writing before you pay.</p>
      <h3>One-to-one sessions and packages</h3>
      <ul>
        <li>You may reschedule or cancel a session free of charge with at least 48 hours’ notice. Sessions cancelled with less notice, and missed sessions, are treated as delivered.</li>
        <li>A package cancelled before the first session is refunded in full, less any non-refundable third-party costs. Once a package has started, fees are non-refundable; unused sessions may be used within the validity period stated in your proposal.</li>
      </ul>
      <h3>Programmes and workshops</h3>
      <ul>
        <li>30 days or more before the start date: full refund, less a 10% administration fee.</li>
        <li>14 to 29 days before: 50% refund. Less than 14 days before, or non-attendance: no refund.</li>
        <li>You may transfer your place to a colleague at no charge.</li>
      </ul>
      <h3>Corporate and speaking engagements</h3>
      <p>Cancellation terms are set out in the relevant agreement. Non-refundable travel and venue costs already incurred are payable in all cases.</p>
      <h3>If we cancel</h3>
      <p>If we need to cancel or reschedule, we will offer a new date or, if that does not suit you, a full refund for the affected service. Approved refunds are made to the original payment method within 14 business days. Nothing in this section limits your statutory consumer rights.</p>
    </section>
    <section>
      <h2>6. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information and attend sessions on time and prepared.</li>
        <li>Share only information you are authorised to disclose, and do not share confidential third-party information without permission.</li>
        <li>Remain responsible for your own decisions, actions and results, including any negotiation strategy you choose to apply.</li>
        <li>Seek independent legal, financial, tax or other professional advice where your situation requires it.</li>
      </ul>
    </section>
    <section>
      <h2>7. Nature of the services and no guarantee</h2>
      <p>Our services are educational, developmental and advisory in nature. They do not constitute legal, financial, investment, tax, medical or psychological advice, and we do not act as your lawyer, agent or representative in any negotiation. Coaching is not counselling or therapy.</p>
      <p>Negotiation outcomes depend on many factors outside our control, so we do not guarantee any particular result. Examples, case studies and references to experience or research are illustrative only, and references to institutions describe the founder’s education and do not imply their endorsement.</p>
    </section>
    <section>
      <h2>8. Confidentiality</h2>
      <p>Everything you share in a coaching or advisory engagement is treated as confidential, and this continues after the engagement ends.</p>
      <ul>
        <li><strong>Sponsored engagements:</strong> where an organisation pays for your coaching, it receives only the information agreed by everyone at the start, such as attendance and broad development themes. Session content remains confidential.</li>
        <li><strong>Limits:</strong> confidentiality may be set aside only with your consent, where disclosure is required by law, or where there is a serious risk of harm. Where lawful and safe, we will tell you first.</li>
        <li><strong>Recordings:</strong> sessions are never recorded without the prior agreement of everyone taking part.</li>
        <li><strong>Group programmes:</strong> participants must keep confidential anything personal or commercially sensitive shared by others.</li>
      </ul>
    </section>
    <section>
      <h2>9. Intellectual property</h2>
      <p>All content, frameworks, methodologies (including the Negotiation Architecture® system and EXAMIN) and materials we provide remain our property or that of our licensors. Negotiation Architecture® is a registered trade mark. You receive a personal, non-transferable licence to use materials for your own learning, or for your organisation’s internal use where agreed.</p>
      <p>Without our written permission, you may not copy, distribute or sell our materials, use them to train or coach others, record sessions, or use our content to train artificial intelligence systems. You keep ownership of the materials you provide to us, and we use them only to deliver the agreed services.</p>
    </section>
    <section>
      <h2>10. Use of this website</h2>
      <p>You may browse this website and share links to its public pages. You must not misuse it, including by attempting unauthorised access, interfering with its operation, sending unlawful or harmful material, or scraping or copying its content for commercial purposes. Website content is general information and may change without notice.</p>
    </section>
    <section>
      <h2>11. Limitation of liability</h2>
      <p>To the extent permitted by law:</p>
      <ul>
        <li>we are not liable for any indirect or consequential loss, or for loss of profit, revenue, business, contracts or opportunity, arising from the services or this website;</li>
        <li>our total liability for any engagement is limited to the fees paid for that engagement.</li>
      </ul>
      <p>Nothing in these terms limits liability that cannot be limited by law, including liability for fraud or for death or personal injury caused by negligence.</p>
    </section>
    <section>
      <h2>12. Termination</h2>
      <p>Either party may end an engagement by written notice if the other materially breaches these terms and does not remedy the breach within 14 days of being asked to do so. Fees for services already delivered remain payable. Sections on confidentiality, intellectual property and liability continue after an engagement ends.</p>
    </section>
    <section>
      <h2>13. Events beyond our control</h2>
      <p>Neither party is liable for delay or failure caused by events beyond its reasonable control, such as illness, natural disasters, travel disruption, government action or failure of communication networks. Affected sessions will be rescheduled where possible.</p>
    </section>
    <section>
      <h2>14. Third-party links</h2>
      <p>Links to other websites are provided for convenience only. We are not responsible for their content, terms or privacy practices.</p>
    </section>
    <section>
      <h2>15. Governing law and disputes</h2>
      <p>These terms are governed by the laws of India. Both parties will first try to resolve any dispute in good faith through discussion. If it cannot be resolved, the courts of Mumbai, Maharashtra, will have exclusive jurisdiction, unless the engagement agreement specifies otherwise.</p>
    </section>
    <section>
      <h2>16. Changes to these terms</h2>
      <p>We may update these terms from time to time. The version published on this page when you book a service applies to that booking.</p>
    </section>
  </LegalPage>;
}
