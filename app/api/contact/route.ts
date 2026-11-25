import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length")) > 20000) {
    return Response.json({ error: "Enquiry is too long." }, { status: 413 });
  }
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 20000) return Response.json({ error: "Enquiry is too long." }, { status: 413 });
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("Invalid body");
  } catch {
    return Response.json({ error: "Invalid enquiry." }, { status: 400 });
  }
  if (data.website) return Response.json({ success: true });
  const limits = { name: 120, organisation: 200, email: 200, interest: 200, message: 4000 };
  const values: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = data[key];
    if (typeof value !== "string" || value.length > max || (key !== "organisation" && !value.trim())) {
      return Response.json({ error: "Please check your enquiry details." }, { status: 400 });
    }
    values[key] = value.trim();
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || /[\r\n]/.test(values.name + values.email + values.interest)) {
    return Response.json({ error: "Please enter a valid name and email address." }, { status: 400 });
  }
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return Response.json({ error: "Email is temporarily unavailable. Please email us directly." }, { status: 503 });
  }
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: SMTP_HOST, port, secure: port === 465, requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  });
  try {
    const result = await transport.sendMail({
      from: { name: "Negotiation Architecture Website", address: SMTP_USER },
      to: CONTACT_EMAIL,
      cc: "kshitijsharma1152004@gmail.com",
      replyTo: { name: values.name, address: values.email },
      subject: `Website enquiry — ${values.interest}`,
      text: `Name: ${values.name}\nOrganisation: ${values.organisation || "Not provided"}\nEmail: ${values.email}\nArea of interest: ${values.interest}\n\n${values.message}`,
      disableFileAccess: true, disableUrlAccess: true,
    });
    if (!result.accepted.length) throw new Error("Recipient rejected");
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "We couldn't send your enquiry. Please try again or email us directly." }, { status: 502 });
  } finally {
    transport.close();
  }
}
