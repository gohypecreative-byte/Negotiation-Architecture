"use client";

import { useRef, useState, type FormEvent } from "react";

export function useEnquiryForm() {
  const pending = useRef(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    pending.current = true;
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your enquiry. Please try again.");
      }
      setStatus("Thank you. Your enquiry has been sent. We will be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your enquiry. Please try again.");
    } finally {
      pending.current = false;
      setSending(false);
    }
  }

  return { sending, status, submitEnquiry };
}
