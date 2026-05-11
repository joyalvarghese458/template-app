"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    emoji: "🚀",
    title: "Fast & Secure",
    desc: "Blazing fast, mobile-optimised websites built with modern tech",
  },
  {
    emoji: "🤝",
    title: "1 Year Free Support",
    desc: "We stay with you after launch. Free support for 1 year (conditions apply)",
  },
  {
    emoji: "💛",
    title: "Your Fulfilment is Our Happiness",
    desc: "We don't stop until you love what we built. Your smile is our success",
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
      ref={sectionRef}
      className="relative py-24 px-4"
      style={{
        // background-attachment:fixed is the CSS parallax trick
        backgroundImage:
          "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        {/* Badge */}
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Who We Are
        </p>

        {/* Headline */}
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A Startup Built on Passion
        </h2>

        {/* Subheadline */}
        <p
          className={`text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We are a UAE-based web development team turning ideas into stunning,
          fast websites
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ emoji, title, desc }, i) => (
            <div
              key={title}
              className={`bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-left transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
