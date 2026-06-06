"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SOCIALS = [
  { label: "Twitter / X", href: "https://x.com" },
  { label: "Instagram",   href: "https://instagram.com" },
  { label: "Dribbble",    href: "https://dribbble.com" },
  { label: "LinkedIn",    href: "https://linkedin.com" },
  { label: "Read.cv",     href: "https://read.cv" },
] as const;

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const { default: gsap } = await import("gsap");
      if (!marqueeRef.current) return;
      ctx = gsap.context(() => {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 35,
          ease: "none",
          repeat: -1,
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <footer
      id="contact"
      className="relative overflow-hidden pt-20 pb-10"
      style={{ backgroundColor: "hsl(28 6% 7%)", borderTop: "1px solid hsl(28 7% 10%)" }}
    >
      {/* Warm glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(226,185,106,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Marquee */}
      <div className="overflow-hidden mb-16">
        <div ref={marqueeRef} className="whitespace-nowrap inline-flex" aria-hidden="true">
          {Array.from({ length: 20 }, (_, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-normal italic mx-3 flex-shrink-0"
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                color: "hsl(28 7% 14%)",
                letterSpacing: "0.02em",
              }}
            >
              LET&apos;S COLLABORATE •{" "}
            </span>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center px-6 mb-20">
        <motion.p
          className="text-xs uppercase tracking-[0.35em] mb-5"
          style={{ color: "hsl(30 8% 38%)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Available for new projects
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-10"
          style={{
            fontFamily: "var(--font-serif, Georgia, serif)",
            color: "hsl(38 25% 93%)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Start a{" "}
          <em
            className="italic"
            style={{
              background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            project.
          </em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:hello@sofiachen.co"
            className="group relative inline-flex"
          >
            <span
              className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #E2B96A, #C07A2E)" }}
              aria-hidden="true"
            />
            <span
              className="relative z-10 inline-flex items-center gap-2 rounded-full text-sm px-8 py-4 border transition-colors duration-300"
              style={{
                borderColor: "hsl(28 7% 18%)",
                backgroundColor: "hsl(28 8% 5%)",
                color: "hsl(38 25% 90%)",
              }}
            >
              hello@sofiachen.co ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8"
        style={{ borderTop: "1px solid hsl(28 7% 12%)" }}
      >
        {/* Socials */}
        <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors duration-200"
              style={{ color: "hsl(30 8% 40%)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "hsl(38 25% 80%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "hsl(30 8% 40%)";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Copyright + availability */}
        <div className="flex items-center gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "#4ade80",
              animation: "ds-pulse 2s ease-in-out infinite",
            }}
          />
          <span className="text-xs" style={{ color: "hsl(30 8% 38%)" }}>
            © 2026 Sofia Chen — Open for work
          </span>
        </div>
      </div>
    </footer>
  );
}
