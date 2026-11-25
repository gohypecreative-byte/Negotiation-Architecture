export const CONTACT_EMAIL = "t@negotiationarchitecture.com";
// Registered company details.
export const OFFICE_NAME = "NegoScience Leadership Consulting";
export const OFFICE_REGISTRATION = "Registered in Mumbai";
export const OFFICE_ADDRESS_LINES = ["RCS Building, Andheri West", "Mumbai 400053, India"];

export function enquiryEmailHref(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
