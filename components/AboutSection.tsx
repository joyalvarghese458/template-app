"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    icon: "✦",
    title: "Designed to Showcase You",
    desc: "Every template is crafted to put your best work, story, and personality front-and-center",
  },
  {
    icon: "✧",
    title: "Mobile-First, Lightning Fast",
    desc: "Portfolios that feel premium on every screen — optimised, accessible, and SEO-ready",
  },
  {
    icon: "✦",
    title: "1 Year Free Support",
    desc: "We stay with you long after launch. Tweaks, fixes, and guidance for a full year",
  },
];

export default function AboutSection() {
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
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 bg-brand"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-4 mb-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="h-px w-8 bg-canvas-bg/60" aria-hidden="true" />
          <p className="text-canvas-bg text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
            Who We Are
          </p>
          <span className="h-px w-8 bg-canvas-bg/60" aria-hidden="true" />
        </div>

        <h2
          className={`font-serif text-4xl sm:text-5xl text-canvas-bg mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Your work deserves a premium{" "}
          <span className="italic">presentation</span>
        </h2>

        <p
          className={`text-lg text-canvas-bg/85 max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
         A UAE-based creative studio designing modern portfolio websites for creators, freelancers, and brands who want to stand out online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`bg-canvas-bg border border-ink/10 rounded-2xl p-7 text-left shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="text-brand text-2xl mb-4">{icon}</div>
              <h3 className="font-serif text-xl text-ink mb-2">{title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
