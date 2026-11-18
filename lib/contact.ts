export const CONTACT_EMAIL = "t@negotiationarchitecture.com";
export const OFFICE_NAME = "Negoscience Leadership Consulting";
export const OFFICE_ADDRESS = "RCS Building, Andheri West, Mumbai 400053";

export function enquiryEmailHref(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
