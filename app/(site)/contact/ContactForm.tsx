"use client";

import { useRef, useState } from "react";

const SERVICES = [
  "Purchase a Template",
  "Custom Portfolio Build",
  "Template Customisation",
  "General Inquiry",
  "Partnership / Collaboration",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    const data = Object.fromEntries(new FormData(formRef.current));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-canvas-bg rounded-2xl border border-ink/10 p-6 sm:p-8 shadow-sm shadow-ink/5">
      <h2 className="font-serif text-2xl sm:text-3xl text-ink tracking-tight mb-2">
        Send a <span className="italic text-brand">message</span>
      </h2>
      <p className="text-sm text-ink-soft mb-7 leading-relaxed">
        Fill out the form below and we&apos;ll get back to you within one business day.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="first_name" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              placeholder="John"
              required
              className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                         placeholder:text-ink/35 transition-all duration-200
                         hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Doe"
              required
              className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                         placeholder:text-ink/35 transition-all duration-200
                         hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
            />
          </div>
        </div>

        {/* Email + Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                         placeholder:text-ink/35 transition-all duration-200
                         hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
              Phone <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+971 5X XXX XXXX"
              className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                         placeholder:text-ink/35 transition-all duration-200
                         hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
            How can we help?
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              required
              defaultValue=""
              className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none appearance-none
                         transition-all duration-200 cursor-pointer
                         hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
            >
              <option value="" disabled>Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Brief description of your enquiry"
            required
            className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                       placeholder:text-ink/35 transition-all duration-200
                       hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-ink mb-1.5 tracking-wide">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project, goals, and any other details…"
            className="w-full px-4 py-3 text-sm text-ink bg-ink/[0.03] border border-ink/12 rounded-lg outline-none
                       placeholder:text-ink/35 resize-vertical leading-relaxed transition-all duration-200
                       hover:border-brand/40 focus:border-brand focus:bg-brand/[0.03] focus:ring-3 focus:ring-brand/10"
          />
        </div>

        {/* Submit */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-canvas-bg
                       bg-brand hover:bg-brand-light rounded-lg transition-all duration-200
                       hover:-translate-y-0.5 shadow-lg shadow-brand/20
                       disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 border-2 border-canvas-bg/40 border-t-canvas-bg rounded-full animate-spin shrink-0" />
                Sending…
              </>
            ) : status === "sent" ? (
              <>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                </svg>
              </>
            )}
          </button>
        </div>

        {status === "sent" && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
            <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-sm text-green-800 leading-relaxed">
              Thanks for reaching out! We&apos;ll reply to your email within one business day.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
            <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-sm text-red-700 leading-relaxed">
              Something went wrong. Please try again or{" "}
              <a href="https://wa.me/971568450406" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
                message us on WhatsApp
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
