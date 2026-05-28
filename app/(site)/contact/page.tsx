import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the My Portfolio team. Ask about templates, custom portfolio builds, or anything else — we reply within one business day.",
};

/* ── Contact info ─────────────────────────────────────── */
const INFO = [
  {
    key: "location",
    label: "Location",
    value: "Dubai, UAE",
    href: "https://maps.google.com/?q=Dubai,UAE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: "email",
    label: "Email",
    value: "info@myportfoliowebsite.com",
    href: "mailto:info@myportfoliowebsite.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "+971 56 845 0406",
    href: "https://wa.me/971568450406",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

/* ── Reasons ──────────────────────────────────────────── */
const REASONS = [
  {
    title: "Fast replies",
    body: "We respond to every enquiry within one business day — most within hours.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Custom builds welcome",
    body: "Need something beyond our template library? We build bespoke portfolios from scratch.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp support",
    body: "Prefer to chat? Reach us on WhatsApp for the fastest response and real-time help.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="bg-canvas-bg min-h-screen">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-10 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-ink/8">
          {/* Soft radial glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand/8 blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
              <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
                Get In Touch
              </p>
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-[3.5rem] text-ink tracking-tight leading-[1.1] mb-4">
              Let&apos;s work{" "}
              <span className="italic text-brand">together</span>
            </h1>
            <p className="text-sm sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
              Have a project in mind or want to discuss a template? We&apos;d love to hear from you.
              Reach out and we&apos;ll reply within one business day.
            </p>
          </div>
        </section>

        {/* ── Info cards ─────────────────────────────────────────── */}
        <section className="py-7 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-ink/8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            {INFO.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.key === "location" || item.key === "whatsapp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-4 sm:p-5 rounded-xl border border-ink/10 bg-canvas-bg
                           shadow-sm shadow-ink/5
                           hover:border-brand/30 hover:shadow-md hover:shadow-brand/8
                           transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-brand
                             bg-brand/10 group-hover:bg-brand group-hover:text-canvas-bg transition-all duration-300"
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-soft mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-ink truncate">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Main: sidebar + form ───────────────────────────────── */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-16 items-start">

            {/* Left: sidebar ─────────────────────────────────────── */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-5 bg-brand/60" aria-hidden="true" />
                <p className="text-brand text-[10px] font-semibold uppercase tracking-[0.28em]">
                  Why reach out
                </p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink tracking-tight leading-tight mb-3">
                We&apos;re here to{" "}
                <span className="italic text-brand">help</span>
              </h2>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                Whether you&apos;re after a template, a fully custom portfolio, or just have a
                question — our team is happy to help you find the right solution.
              </p>

              {/* Reasons list */}
              <ul className="space-y-4 mb-6">
                {REASONS.map((r) => (
                  <li key={r.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-brand shrink-0 mt-0.5">
                      {r.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink mb-0.5">{r.title}</p>
                      <p className="text-sm text-ink-soft leading-relaxed">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-green-200 bg-green-50 mb-6">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-green-800">Available for new projects</span>
              </div>

              {/* Social / contact links */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-soft mb-2.5">
                  Reach us directly
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/971568450406"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-xl border border-ink/10 flex items-center justify-center text-ink-soft
                               hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/myportfoliowebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl border border-ink/10 flex items-center justify-center text-ink-soft
                               hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:info@myportfoliowebsite.com"
                    aria-label="Email"
                    className="w-10 h-10 rounded-xl border border-ink/10 flex items-center justify-center text-ink-soft
                               hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form ────────────────────────────────────────── */}
            <ContactForm />
          </div>
        </section>

        {/* ── WhatsApp CTA ───────────────────────────────────────── */}
        <section className="pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl bg-brand/5 border border-brand/15 px-5 py-7 sm:px-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink mb-1.5">
                  Prefer to chat <span className="italic text-brand">instantly?</span>
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Message us on WhatsApp — we typically reply within minutes during business hours.
                </p>
              </div>
              <a
                href="https://wa.me/971568450406"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold
                           text-canvas-bg bg-brand hover:bg-brand-light rounded-lg
                           transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
