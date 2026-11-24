import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Negotiation Architecture",
  description: "How enquiries and information shared through the Negotiation Architecture website are handled.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" introduction="This page explains how information is shared when you browse this website or contact Negotiation Architecture.">
    <section><h2>Information you choose to share</h2><p>Enquiry forms may ask for your name, email address, organisation, area of interest and message. Include only information needed to explain your enquiry. Please avoid sending sensitive personal information or confidential negotiation materials in an initial message.</p></section>
    <section><h2>How the forms work</h2><p>The contact and consultation forms prepare a draft in your email application. You review and send that email yourself. Completing a form does not automatically send an enquiry.</p><p>Your email application and email provider handle the draft and its delivery under their own settings and privacy policies.</p></section>
    <section><h2>Enquiries and correspondence</h2><p>Information you send in an email is available to the recipient so they can respond to your request, discuss relevant services and manage the resulting correspondence. Contact us if you want to clarify how information in your enquiry will be used before sharing further details.</p></section>
    <section><h2>Technical information and external services</h2><p>Serving a website involves technical information such as an IP address and browser request details. Hosting and delivery providers may process this information to deliver and secure the site. External websites and email services have their own privacy practices.</p></section>
    <section><h2>Your choices</h2><p>You can browse without submitting an enquiry. You can also contact us to ask about information you have shared, request a correction or deletion, or ask to stop receiving further correspondence. Any request will need to take account of applicable record-keeping obligations.</p></section>
    <section><h2>Updates</h2><p>This page may be updated when the website or the way enquiries are handled changes. Review it before sharing information if you have questions about the current process.</p></section>
  </LegalPage>;
}
