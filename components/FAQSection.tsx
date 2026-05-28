"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

const FAQS: FAQItem[] = [
  {
    q: "How does the ordering process work?",
    a: "Simply click the Order button on any template, and you'll be connected to us on WhatsApp. Share your content and preferences — we handle the full setup and deliver your ready-to-publish portfolio within 2–3 business days.",
  },
  {
    q: "Is it really a one-time payment?",
    a: "Yes. No subscriptions, no hidden fees. You pay once and own the template forever — including any future updates we push to it.",
  },
  {
    q: "Do I need any coding skills?",
    a: "None at all. We take care of the entire setup and customisation. Just send us your content — text, images, links — and we build the rest.",
  },
  {
    q: "Can I preview a template before buying?",
    a: "Absolutely. Every template has a live preview so you can explore the full design, responsiveness, and interactions before making a decision.",
  },
  {
    q: "What's included in my purchase?",
    a: "You get the complete template, your content integrated into it, fully responsive design across all screens, and WhatsApp support throughout the process.",
  },
  {
    q: "How long does delivery take?",
    a: "Most portfolios are delivered within 2–3 business days after we receive your content. Complex or custom requests may take a little longer.",
  },
  {
    q: "Can I request a fully custom portfolio?",
    a: "Yes. If none of our templates match your vision, we build bespoke portfolios from scratch. Reach out on WhatsApp to discuss your requirements and get a quote.",
  },
  {
    q: "Which currencies do you accept?",
    a: "We accept payment in AED (UAE Dirhams). INR pricing is displayed for reference — confirm the exact payment method with us directly on WhatsApp.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Every order includes one round of revisions at no extra cost. Additional changes beyond that are priced based on the scope — just ask us.",
  },
  {
    q: "Are the templates mobile-friendly?",
    a: "Every template is fully responsive and carefully tested across mobile, tablet, and desktop screens before delivery.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ink/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-ink text-sm sm:text-base leading-snug group-hover:text-brand transition-colors duration-200">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-brand border-brand text-canvas-bg rotate-45"
              : "bg-transparent border-ink/20 text-ink/50 group-hover:border-brand/50 group-hover:text-brand"
          }`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-ink-soft text-sm sm:text-[15px] leading-relaxed pr-10">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section
      id="faq"
      className="bg-canvas-bg py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
              FAQ
            </p>
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight mb-4">
            Frequently asked{" "}
            <span className="italic text-brand">questions</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Everything you need to know before getting started. Still have questions?{" "}
            <a
              href="https://wa.me/971568450406"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-medium"
            >
              Ask us on WhatsApp.
            </a>
          </p>
        </div>

        {/* Accordion — single col on mobile, two cols on lg+ */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
          {/* Left column */}
          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {left.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="divide-y divide-ink/10 border-t border-ink/10 mt-0 lg:mt-0">
            {right.map((item, i) => {
              const globalIndex = half + i;
              return (
                <FAQItem
                  key={globalIndex}
                  item={item}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-brand/5 border border-brand/15 px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-ink mb-1">
              Still have questions?
            </h3>
            <p className="text-ink-soft text-sm">
              Our team replies within minutes on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/971568450406"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-brand/20"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.85L.057 23.5l5.797-1.522A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.44.904.919-3.355-.235-.378A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Chat with us
          </a>
        </div>
      </div>
    </section>
  );
}
