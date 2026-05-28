"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PLANS = [
  {
    id: "digital-resume",
    name: "Digital Resume",
    tagline: "Digital Resume",
    priceAED: 49,
    priceINR: 999,
    description:
      "ATS-friendly digital resume designed to help professionals stand out and apply smarter.",
    includes: [
      "Professionally designed digital resume",
      "ATS-friendly resume formatting",
      "Mobile responsive layout",
      "Personal branding section",
      "Skills & experience highlights",
      "Downloadable PDF resume",
      "LinkedIn & portfolio integration",
      "Contact & WhatsApp integration",
      "Fast loading performance",
      "Delivery in 1–3 days",
      "1 revision round",
    ],
    bestFor:
      "Students, fresh graduates, professionals, UAE job seekers, freelancers, and career switchers.",
    popular: false,
  },
  {
    id: "career-portfolio",
    name: "Career Portfolio",
    tagline: "Career Portfolio",
    priceAED: 99,
    priceINR: 2499,
    description:
      "Perfect for students, job seekers, and professionals building a strong online presence.",
    includes: [
      "Professionally designed portfolio website",
      "Resume integrated into website",
      "Mobile responsive design",
      "Contact & WhatsApp integration",
      "Basic SEO setup",
      "Fast loading performance",
      "Delivery in 2–4 days",
      "1 revision round",
    ],
    bestFor:
      "Students, developers, marketers, architects, designers, and UAE job seekers.",
    popular: true,
  },
  {
    id: "creator-portfolio",
    name: "Creator Portfolio",
    tagline: "Creator Portfolio",
    priceAED: 149,
    priceINR: 3999,
    description:
      "Built for creators, photographers, influencers, videographers, and personal brands.",
    includes: [
      "Everything in Career",
      "Social media integrations",
      "Gallery & showcase sections",
      "Animated premium UI",
      "Custom branding sections",
      "Collaboration/contact forms",
      "Instagram & YouTube linking",
      "Enhanced mobile experience",
      "2 revision rounds",
    ],
    bestFor:
      "Content creators, photographers, artists, influencers, and creatives.",
    popular: false,
  },
  {
    id: "business-portfolio",
    name: "Business Portfolio",
    tagline: "Business Portfolio",
    priceAED: 1599,
    priceINR: 39999,
    description:
      "Designed for freelancers, agencies, consultants, startups, and growing businesses.",
    includes: [
      "Everything in Creator",
      "Multi-page business website",
      "Services & pricing sections",
      "Lead generation forms",
      "Testimonial & case study sections",
      "Advanced SEO structure",
      "Premium animations & interactions",
      "Priority support",
      "Custom domain setup support",
      "3 revision rounds",
    ],
    bestFor:
      "Freelancers, agencies, consultants, coaches, and service businesses.",
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function detectCurrency(): "AED" | "INR" {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Kolkata") return "INR";
    if (tz === "Asia/Dubai") return "AED";
  } catch { }
  return "AED";
}

export default function PricingContent() {
  const [currency, setCurrency] = useState<"AED" | "INR">("AED");

  useEffect(() => {
    setCurrency(detectCurrency());
  }, []);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function formatPrice(aed: number, inr: number) {
    if (currency === "AED") {
      return { symbol: "AED", value: aed.toLocaleString() };
    }
    return { symbol: "₹", value: inr.toLocaleString("en-IN") };
  }

  function toggleExpand(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
      {/* ── Hero header ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-8 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(160deg, #e8f4ff 0%, #ffffff 55%, #f0f7ff 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 -z-10 blur-3xl" style={{ background: "#0077B5" }} aria-hidden="true" />
        <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full opacity-10 -z-10 blur-3xl" style={{ background: "#0077B5" }} aria-hidden="true" />

        <p className="text-brand text-xs font-semibold tracking-widest uppercase mb-2">Pricing Plans</p>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-ink tracking-[-0.02em] leading-[1.1] mb-3 max-w-2xl mx-auto">
          Invest in your <span className="text-brand italic">online presence</span>
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-lg mx-auto leading-relaxed mb-6">
          One-time payment. No subscriptions. Choose the package that matches your goals and launch in days.
        </p>

        {/* Currency toggle */}
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-full border border-black/10 bg-white shadow-sm p-1 gap-1">
            {(["AED", "INR"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${currency === c ? "bg-brand text-white shadow" : "text-ink-soft hover:text-ink"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing cards ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch mt-4">
          {PLANS.map((plan) => {
            const { symbol, value } = formatPrice(plan.priceAED, plan.priceINR);
            const isExpanded = !!expanded[plan.id];

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border transition-shadow duration-300 ${plan.popular
                  ? "border-brand shadow-[0_8px_40px_-8px_rgba(0,119,181,0.35)] bg-white"
                  : "border-black/8 shadow-sm bg-white hover:shadow-md"
                  }`}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-brand text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* ── Inner content — flex-1 so Best For can mt-auto to card bottom */}
                <div className="flex flex-col flex-1 px-5 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-9">

                  {/* Plan name */}
                  <p className="text-[10px] font-semibold tracking-widest text-brand uppercase mb-1">
                    {plan.tagline}
                  </p>
                  <h2 className="font-serif font-bold text-xl text-ink leading-tight mb-3">
                    {plan.name}
                  </h2>

                  {/* Price */}
                  <p className="text-xs text-ink-soft mb-0.5">Starting from</p>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-sm font-semibold text-ink-soft">{symbol}</span>
                    <span className="font-serif font-bold text-4xl text-ink tracking-tight">{value}</span>
                  </div>

                  {/* Description */}
                  <p className="min-h-[5.25rem] text-sm text-ink-soft leading-relaxed mb-5">
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 mb-4 ${plan.popular
                      ? "bg-brand text-white shadow-[0_6px_24px_-6px_rgba(0,119,181,0.6)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_-6px_rgba(0,119,181,0.7)]"
                      : "bg-ink text-white hover:bg-ink/80 hover:-translate-y-0.5"
                      }`}
                  >
                    Get Started
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                    </svg>
                  </Link>

                  {/* Mobile: Show more / Show less toggle */}
                  <button
                    onClick={() => toggleExpand(plan.id)}
                    className="sm:hidden w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-ink-soft hover:text-ink transition-colors duration-150"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Expandable details — always visible on sm+, collapsible on mobile */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out sm:overflow-visible sm:max-h-none sm:opacity-100 ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 sm:opacity-100"
                      }`}
                  >
                    <div className="border-t border-black/6 my-4" />

                    {/* Includes */}
                    <p className="text-[10px] font-bold tracking-widest uppercase text-ink-soft mb-2.5">
                      Includes
                    </p>
                    <ul className="flex flex-col gap-2">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="text-sm text-ink-soft leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For — mt-auto pins to card bottom on desktop */}
                  <div
                    className={`mt-auto pt-4 border-t border-black/6 transition-all duration-300 sm:block ${isExpanded ? "block" : "hidden sm:block"
                      }`}
                  >
                    <p className="text-[10px] font-bold tracking-widest uppercase text-ink-soft mb-2">
                      Best For
                    </p>
                    <p className="text-sm text-ink-soft leading-relaxed">{plan.bestFor}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-ink-soft">
          {[
            { label: "One-time payment", svg: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
            { label: "Fast delivery", svg: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></> },
            { label: "Revision rounds included", svg: <><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></> },
            { label: "WhatsApp support", svg: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
          ].map(({ label, svg }) => (
            <div key={label} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {svg}
              </svg>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
