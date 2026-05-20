"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    title: "Select Your Template",
    desc: "Browse our curated collection and pick the design that fits your story.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Order via WhatsApp",
    desc: "Reach out on WhatsApp — we'll confirm details and lock in your slot.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Share Your Data",
    desc: "Send us your work, copy, and brand assets — we'll guide you through it.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: "Make Payment",
    desc: "Secure one-time payment — no subscriptions, no hidden fees.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
  },
  {
    title: "Go Live",
    desc: "We launch your portfolio — polished, fast, and ready to impress.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 bg-canvas-bg overflow-hidden border-t border-ink/5"
    >
      {/* Subtle dotted backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      {/* Ambient brand glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand) 0%, transparent 60%)",
          opacity: 0.06,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-4 mb-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
          <p className="text-ink-soft text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
            How It Works
          </p>
          <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
        </div>

        <h2
          className={`font-serif text-4xl sm:text-5xl text-ink text-center mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From browse to{" "}
          <span className="italic bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">
            live
          </span>{" "}
          in 5 steps
        </h2>

        <p
          className={`text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A simple, guided journey — no friction, no surprises.
        </p>

        {/* ── Desktop: horizontal route map ─────────────────────── */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Dashed connecting line behind the icons */}
            <div
              className={`absolute top-9 left-[10%] right-[10%] h-px transition-all duration-1000 delay-300 ${
                visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-brand) 50%, transparent 50%)",
                backgroundSize: "12px 1px",
                transformOrigin: "left center",
              }}
              aria-hidden="true"
            />

            <ol className="relative grid grid-cols-5 gap-4">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
                >
                  {/* Icon badge */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-full bg-brand/20 blur-xl scale-150" aria-hidden="true" />
                    <div className="relative w-[72px] h-[72px] rounded-full bg-canvas-bg border border-brand/30 flex items-center justify-center text-brand shadow-[0_8px_24px_-12px_rgba(37,99,235,0.5)] group-hover:scale-105 transition-transform">
                      <div className="w-7 h-7">{step.icon}</div>
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand text-canvas-bg text-[11px] font-bold flex items-center justify-center shadow-[0_4px_10px_-2px_rgba(37,99,235,0.6)]">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-ink mb-2 px-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed px-2">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Mobile/Tablet: vertical timeline ─────────────────── */}
        <ol className="lg:hidden relative space-y-8 max-w-xl mx-auto">
          {/* Vertical dashed line */}
          <div
            className={`absolute left-[27px] sm:left-[31px] top-4 bottom-4 w-px transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(to bottom, var(--color-brand) 50%, transparent 50%)",
              backgroundSize: "1px 10px",
              transformOrigin: "top center",
            }}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`relative flex gap-4 sm:gap-5 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: `${400 + i * 130}ms` }}
            >
              {/* Icon badge */}
              <div className="relative shrink-0">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-canvas-bg border border-brand/30 flex items-center justify-center text-brand shadow-[0_6px_18px_-10px_rgba(37,99,235,0.5)]">
                  <div className="w-6 h-6">{step.icon}</div>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand text-canvas-bg text-[10px] font-bold flex items-center justify-center shadow-[0_4px_10px_-2px_rgba(37,99,235,0.6)]">
                  {i + 1}
                </div>
              </div>

              <div className="pt-1 pb-2">
                <h3 className="font-serif text-lg sm:text-xl text-ink mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-ink-soft leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${400 + STEPS.length * 150}ms` }}
        >
          <a
            href="#templates"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-canvas-bg bg-brand rounded-full shadow-[0_10px_30px_-10px_var(--color-brand)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_var(--color-brand)] transition-all duration-200"
          >
            <span>Start with step 1</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
