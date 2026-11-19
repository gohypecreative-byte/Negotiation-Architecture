import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms ? Negotiation Architecture",
  description: "Terms for using the Negotiation Architecture website and making enquiries about its services.",
};

export default function TermsPage() {
  return <LegalPage title="Terms" introduction="These terms describe the intended use of this website and how to enquire about Negotiation Architecture?s services.">
    <section><h2>Website information</h2><p>This website introduces negotiation frameworks, research perspectives, coaching and learning services. Its content provides general educational information and does not replace advice tailored to your circumstances.</p></section>
    <section><h2>Enquiries and bookings</h2><p>Sending an enquiry or selecting ?Book a Consultation? does not confirm an appointment or create a paid engagement. Availability, scope, fees, scheduling and any cancellation terms must be agreed separately before services begin.</p></section>
    <section><h2>Using the content</h2><p>You may read the website and share links to its public pages. Please contact us before reproducing its text, photographs, branding or learning materials for commercial use. Third-party material remains subject to its respective owner?s rights.</p></section>
    <section><h2>Responsible use</h2><p>Do not misuse the forms, send unlawful or harmful material, attempt unauthorised access or interfere with the website?s operation. When making an enquiry, provide accurate contact details and share only material you are authorised to disclose.</p></section>
    <section><h2>Availability and outcomes</h2><p>Website information and service availability may change. Please confirm details relevant to your enquiry directly. Negotiation outcomes depend on the circumstances and participants; the website does not promise a particular outcome.</p></section>
    <section><h2>External links and updates</h2><p>Links to external websites are provided for convenience. Those websites operate under their own terms and privacy policies. These website terms may be revised as the site changes; separate written service agreements continue to govern any agreed engagement.</p></section>
  </LegalPage>;
}
