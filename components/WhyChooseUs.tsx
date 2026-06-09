"use client";

import { useEffect, useRef, useState } from "react";

const ROWS: { others: string; us: string }[] = [
  {
    others: "Generic templates that look like everyone else's",
    us: "Premium, unique designs crafted for individuality",
  },
  {
    others: "Complex customization requiring coding knowledge",
    us: "We handle all customization for you professionally",
  },
  {
    others: "No support after purchase, you're on your own",
    us: "Dedicated support and revisions included",
  },
  {
    others: "Slow loading times and poor performance",
    us: "Optimized for speed and perfect performance scores",
  },
];

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-ink-soft/70 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export default function WhyChooseUs() {
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
      className="relative py-24 px-4 bg-canvas-bg overflow-hidden"
    >
      {/* Soft ambient glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand) 0%, transparent 60%)",
          opacity: 0.08,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-4 mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
          <p className="text-ink-soft text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
            Why Choose Us
          </p>
          <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
        </div>

        <h2
          className={`font-serif text-4xl sm:text-5xl text-ink text-center mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          What sets us{" "}
          <span className="italic bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">
            apart
          </span>
        </h2>

        <p
          className={`text-base sm:text-lg text-ink-soft text-center max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          A side-by-side look at how we compare to typical template providers.
        </p>

        {/* Column headers */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="hidden md:flex items-center gap-3 px-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
              Others
            </span>
            <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
          </div>
          <div className="hidden md:flex items-center gap-3 px-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-brand-dark">
              Us
            </span>
            <span className="h-px flex-1 bg-brand/30" aria-hidden="true" />
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-4">
          {ROWS.map((row, i) => (
            <div
              key={row.us}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Mobile label: Others */}
              <div
                className={`md:hidden flex items-center gap-3 transition-all duration-700 ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${400 + i * 120}ms` }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-soft">
                  Others
                </span>
                <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
              </div>

              {/* Others card */}
              <div
                className={`flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-brand/[0.06] border border-ink/5 transition-all duration-700 ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${420 + i * 120}ms` }}
              >
                <XIcon />
                <span className="text-sm sm:text-base text-ink-soft leading-snug">
                  {row.others}
                </span>
              </div>

              {/* Mobile label: Us */}
              <div
                className={`md:hidden flex items-center gap-3 mt-2 transition-all duration-700 ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${440 + i * 120}ms` }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-dark">
                  Us
                </span>
                <span className="h-px flex-1 bg-brand/30" aria-hidden="true" />
              </div>

              {/* Us card */}
              <div
                className={`group flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-canvas-bg border border-brand/30 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_-12px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:border-brand/60 transition-all duration-500 ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${460 + i * 120}ms` }}
              >
                <CheckIcon />
                <span className="text-sm sm:text-base font-medium text-ink leading-snug">
                  {row.us}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
