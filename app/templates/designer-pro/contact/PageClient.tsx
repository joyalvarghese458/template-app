"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { useLenis } from "../_hooks/useLenis";
import styles from "../theme.module.css";

/* ─── Social platforms ─────────────────────────────────────────── */
const SOCIALS = [
  {
    name: "Twitter / X",
    handle: "@jamesarcher",
    href: "https://x.com",
    color: "#e7e7e7",
    description: "Thoughts on design, process & the internet",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@james.archer",
    href: "https://instagram.com",
    color: "#e1306c",
    description: "Behind the scenes, process shots & life",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    handle: "jamesarcher",
    href: "https://dribbble.com",
    color: "#ea4c89",
    description: "Design shots, explorations & experiments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "in/jamesarcher",
    href: "https://linkedin.com",
    color: "#0a66c2",
    description: "Professional background & career updates",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@jamesarcher",
    href: "https://github.com",
    color: "#f0f6fc",
    description: "Open source work, experiments & side projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Behance",
    handle: "jamesarcher",
    href: "https://behance.net",
    color: "#1769ff",
    description: "Full case studies and creative projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.752-4h4.395c-.088-1.86-1.236-2.18-2.131-2.18-.978 0-2.043.517-2.264 2.18zM7.648 13.018c.836-.338 1.302-1.044 1.302-2.018 0-1.91-1.464-2.5-3.288-2.5H0v8h5.818c2.15 0 3.638-.863 3.638-2.761 0-1.195-.656-1.9-1.808-2.221zM3.5 9.5h2.5c.834 0 1.5.4 1.5 1.213 0 .672-.5 1.287-1.5 1.287H3.5V9.5zm3.13 6h-3.13v-2.5h3.096c.927 0 1.404.438 1.404 1.25 0 .799-.468 1.25-1.37 1.25z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@jamesarcher",
    href: "https://youtube.com",
    color: "#ff0000",
    description: "Process videos, tutorials & creative vlogs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Read.cv",
    handle: "jamesarcher",
    href: "https://read.cv",
    color: "#a8a8a8",
    description: "Curriculum vitae and professional timeline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
];

/* ─── Stagger variants ─────────────────────────────────────────── */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function ContactPage() {
  useLenis();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@jamesarcher.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(137,170,204,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-10 text-xs uppercase tracking-[0.3em]"
            style={{ color: "hsl(0 0% 40%)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>James Archer</span>
            <span>/</span>
            <span style={{ color: "hsl(0 0% 60%)" }}>Contact</span>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10"
            style={{
              border: "1px solid hsl(0 0% 12%)",
              backgroundColor: "hsl(0 0% 6%)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                backgroundColor: "#4ade80",
                boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                animation: "dp-pulse-glow 2s ease-in-out infinite",
              }}
            />
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "hsl(0 0% 60%)" }}>
              Available for new projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[9vw] font-normal leading-[0.88] tracking-tight mb-10"
            style={{
              fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
              color: "hsl(0 0% 96%)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Let&apos;s{" "}
            <em
              className="italic block md:inline"
              style={{
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              connect.
            </em>
          </motion.h1>

          {/* Sub copy + email */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: "hsl(0 0% 50%)" }}>
              Open to freelance projects, full-time opportunities, and thoughtful collaborations. Whether you have a brief or just an idea — I&apos;d love to hear from you.
            </p>

            {/* Email copy button */}
            <button
              onClick={copyEmail}
              className="group relative inline-flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
              style={{
                border: "1px solid hsl(0 0% 14%)",
                backgroundColor: "hsl(0 0% 7%)",
              }}
            >
              <span
                className="text-lg md:text-xl font-light tracking-tight"
                style={{ color: "hsl(0 0% 90%)" }}
              >
                hello@jamesarcher.com
              </span>
              <span
                className="text-xs rounded-full px-3 py-1 transition-all duration-300"
                style={{
                  backgroundColor: copied ? "rgba(74,222,128,0.12)" : "hsl(0 0% 10%)",
                  color: copied ? "#4ade80" : "hsl(0 0% 50%)",
                  border: copied ? "1px solid rgba(74,222,128,0.2)" : "1px solid transparent",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </span>
              {/* Gradient border on hover */}
              <span
                className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(137,170,204,0.3), rgba(78,133,191,0.3))",
                  zIndex: -1,
                }}
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "hsl(0 0% 4%)" }}>
        <div
          className="max-w-[1200px] mx-auto px-6 h-px"
          style={{ backgroundColor: "hsl(0 0% 10%)" }}
        />
      </div>

      {/* ── Social grid ──────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section label */}
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px" style={{ backgroundColor: "hsl(0 0% 14%)" }} />
            <span className="text-xs uppercase tracking-[0.35em]" style={{ color: "hsl(0 0% 40%)" }}>
              Find me on
            </span>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SOCIALS.map((s) => (
              <SocialCard key={s.name} social={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process strip ──────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "hsl(0 0% 3%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "hsl(0 0% 9%)" }}>
          {[
            { step: "01", title: "Reach out", body: "Drop a message, share your idea, or just say hello — I reply to every message within 48 hours." },
            { step: "02", title: "Discovery call", body: "A quick 30-minute call to understand your goals, timeline and whether we're a good fit for each other." },
            { step: "03", title: "Proposal", body: "I put together a tailored scope, timeline and investment estimate — no hidden fees, no surprises." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              className="p-8 md:p-10"
              style={{ backgroundColor: "hsl(0 0% 4%)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] block mb-4" style={{ color: "hsl(0 0% 35%)" }}>
                {s.step}
              </span>
              <h3 className="text-xl font-normal mb-3" style={{ fontFamily: "var(--dp-font-display, var(--font-serif, serif))", color: "hsl(0 0% 90%)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Social card ──────────────────────────────────────────────── */
function SocialCard({ social }: { social: (typeof SOCIALS)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={item}
      className="group relative block rounded-2xl p-6 overflow-hidden transition-transform duration-300"
      style={{
        backgroundColor: "hsl(0 0% 7%)",
        border: "1px solid hsl(0 0% 10%)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Color splash on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${social.color}18 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
        style={{
          backgroundColor: hovered ? `${social.color}18` : "hsl(0 0% 10%)",
          color: hovered ? social.color : "hsl(0 0% 55%)",
          border: `1px solid ${hovered ? `${social.color}30` : "transparent"}`,
        }}
      >
        {social.icon}
      </div>

      {/* Platform name */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <span
          className="text-sm font-medium transition-colors duration-300"
          style={{ color: hovered ? "hsl(0 0% 96%)" : "hsl(0 0% 75%)" }}
        >
          {social.name}
        </span>
        {/* Arrow */}
        <span
          className="text-base flex-shrink-0 translate-y-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300 mt-0.5"
          style={{ color: "hsl(0 0% 35%)" }}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>

      {/* Handle */}
      <span
        className="text-xs block mb-3 font-mono transition-colors duration-300"
        style={{ color: hovered ? social.color : "hsl(0 0% 40%)" }}
      >
        {social.handle}
      </span>

      {/* Description */}
      <p className="text-[11px] leading-relaxed" style={{ color: "hsl(0 0% 38%)" }}>
        {social.description}
      </p>
    </motion.a>
  );
}
