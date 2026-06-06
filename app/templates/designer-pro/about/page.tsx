"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { useLenis } from "../_hooks/useLenis";
import styles from "../theme.module.css";

/* ─── Data ──────────────────────────────────────────────────────── */

const EDUCATION = [
  {
    degree: "MFA in Graphic Design",
    school: "Royal College of Art",
    location: "London, UK",
    year: "2019 – 2021",
    note: "Specialisation in Motion & Digital Experience",
  },
  {
    degree: "BA (Hons) Visual Communication",
    school: "Central Saint Martins",
    location: "London, UK",
    year: "2016 – 2019",
    note: "First-Class Honours · Dean's Award for Innovation",
  },
  {
    degree: "Summer Intensive — Interaction Design",
    school: "Copenhagen Institute of Interaction Design",
    location: "Copenhagen, DK",
    year: "2018",
    note: "Prototyping & research-led design methods",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Designer & Creative Lead",
    company: "Phantom Studio",
    type: "Full-time",
    period: "2023 – Present",
    bullets: [
      "Lead a cross-disciplinary team of 6 across brand, motion, and digital",
      "Shipped end-to-end identity systems for 12+ global clients",
      "Established design ops workflows that cut delivery time by 30%",
    ],
  },
  {
    role: "Motion Designer",
    company: "BUCK",
    type: "Full-time",
    period: "2021 – 2023",
    bullets: [
      "Directed motion for broadcast campaigns reaching 50M+ viewers",
      "Collaborated with strategy to evolve creative direction",
      "Mentored 3 junior designers through structured reviews",
    ],
  },
  {
    role: "Designer",
    company: "Koto Studio",
    type: "Full-time",
    period: "2019 – 2021",
    bullets: [
      "Contributed to brand identities for Airbnb, Monzo, and Headspace",
      "Designed type-led systems that scaled across print and digital",
    ],
  },
  {
    role: "Design Intern",
    company: "Pentagram",
    type: "Internship",
    period: "Summer 2018",
    bullets: [
      "Assisted partner-level projects in editorial and wayfinding design",
      "Produced presentation-ready assets for client review cycles",
    ],
  },
];

const SKILLS = [
  {
    category: "Design",
    items: ["Brand Identity", "Motion Design", "UI / UX", "Typography", "Art Direction", "Editorial"],
  },
  {
    category: "Tools",
    items: ["Figma", "After Effects", "Cinema 4D", "Photoshop", "Illustrator", "DaVinci Resolve"],
  },
  {
    category: "Code",
    items: ["HTML / CSS", "JavaScript", "React", "Next.js", "Framer", "GSAP"],
  },
  {
    category: "Process",
    items: ["Design Systems", "Design Ops", "Sprint Facilitation", "Client Workshops", "Prototyping"],
  },
];

const AWARDS = [
  { title: "D&AD Yellow Pencil", category: "Motion Craft", year: "2024" },
  { title: "Awwwards Site of the Year", category: "Portfolio", year: "2023" },
  { title: "Communication Arts Award", category: "Brand Identity", year: "2023" },
  { title: "Cannes Lions Bronze", category: "Design", year: "2022" },
  { title: "The FWA FOTD", category: "Digital Experience", year: "2022" },
];

/* ─── Animation variants ────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

/* ─── Section label component ───────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-6 h-px flex-shrink-0" style={{ backgroundColor: "hsl(0 0% 14%)" }} />
      <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "hsl(0 0% 38%)" }}>
        {children}
      </span>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
export default function AboutPage() {
  useLenis();

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── Hero / Intro ──────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 px-6 overflow-hidden"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 35% at 50% 0%, rgba(137,170,204,0.06) 0%, transparent 70%)",
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
            <Link href="/templates/designer-pro" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "hsl(0 0% 60%)" }}>About</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
            {/* Left — text */}
            <div>
              <motion.h1
                className="text-6xl md:text-8xl font-normal leading-[0.88] tracking-tight mb-10"
                style={{
                  fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
                  color: "hsl(0 0% 96%)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Designer,{" "}
                <em
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #89AACC, #4E85BF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  thinker
                </em>
                ,<br />
                maker.
              </motion.h1>

              <motion.div
                className="space-y-4 max-w-lg"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <p className="text-base leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>
                  I&apos;m James Archer — a London-based creative designer with 7+ years crafting brand identities, motion systems, and digital experiences for studios, agencies, and global brands.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                  I believe great design lives at the intersection of rigour and instinct. I&apos;m drawn to problems that demand both conceptual depth and obsessive craft — from the logic of a type system to the timing of a single frame.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                  Outside of client work I&apos;m building side projects, writing about design process, and occasionally teaching.
                </p>
              </motion.div>

              {/* CTA row */}
              <motion.div
                className="flex items-center gap-4 mt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38 }}
              >
                <Link
                  href="/templates/designer-pro/contact"
                  className="inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #89AACC, #4E85BF)",
                    color: "#fff",
                  }}
                >
                  Get in touch ↗
                </Link>
                <Link
                  href="/templates/designer-pro/work"
                  className="inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: "hsl(0 0% 14%)",
                    color: "hsl(0 0% 65%)",
                  }}
                >
                  View work →
                </Link>
              </motion.div>
            </div>

            {/* Right — portrait + quick stats */}
            <motion.div
              className="lg:w-[280px] flex-shrink-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {/* Portrait */}
              <div
                className="relative w-full rounded-2xl overflow-hidden mb-6"
                style={{
                  aspectRatio: "3/4",
                  border: "1px solid hsl(0 0% 10%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=560&h=750&q=80&auto=format&fit=crop&crop=face"
                  alt="James Archer"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Quick facts */}
              <div
                className="rounded-2xl divide-y p-1"
                style={{
                  border: "1px solid hsl(0 0% 10%)",
                  backgroundColor: "hsl(0 0% 6%)",
                }}
              >
                {[
                  { label: "Based in", value: "London, UK" },
                  { label: "Experience", value: "7+ years" },
                  { label: "Availability", value: "Open to work" },
                  { label: "Languages", value: "EN · FR · ES" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-center px-4 py-3" style={{ borderColor: "hsl(0 0% 10%)" }}>
                    <span className="text-xs" style={{ color: "hsl(0 0% 40%)" }}>{f.label}</span>
                    <span className="text-xs font-medium" style={{ color: f.label === "Availability" ? "#4ade80" : "hsl(0 0% 70%)" }}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "hsl(0 0% 4%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Work Experience</SectionLabel>
            </motion.div>

            <div className="space-y-1">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group rounded-2xl p-6 md:p-8 transition-colors duration-300 cursor-default"
                  style={{ border: "1px solid transparent" }}
                  whileHover={{
                    backgroundColor: "hsl(0 0% 7%)",
                    borderColor: "hsl(0 0% 10%)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3
                          className="text-lg font-normal"
                          style={{
                            color: "hsl(0 0% 90%)",
                            fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] rounded-full px-2.5 py-0.5"
                          style={{
                            backgroundColor: "hsl(0 0% 10%)",
                            color: "hsl(0 0% 45%)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs flex-shrink-0 font-mono"
                      style={{ color: "hsl(0 0% 35%)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(0 0% 25%)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "hsl(0 0% 3%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Education</SectionLabel>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "hsl(0 0% 9%)" }}>
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-7 md:p-8"
                  style={{ backgroundColor: "hsl(0 0% 3%)" }}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] block mb-5" style={{ color: "hsl(0 0% 32%)" }}>
                    {edu.year}
                  </span>
                  <h3
                    className="text-base font-normal mb-1 leading-snug"
                    style={{
                      color: "hsl(0 0% 88%)",
                      fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: "hsl(0 0% 55%)" }}>{edu.school}</p>
                  <p className="text-xs mb-4" style={{ color: "hsl(0 0% 38%)" }}>{edu.location}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(0 0% 38%)" }}>
                    {edu.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "hsl(0 0% 4%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Skills &amp; Tools</SectionLabel>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS.map((group, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <p
                    className="text-[10px] uppercase tracking-[0.35em] mb-5"
                    style={{ color: "hsl(0 0% 38%)" }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs rounded-full px-3 py-1.5"
                        style={{
                          backgroundColor: "hsl(0 0% 8%)",
                          border: "1px solid hsl(0 0% 12%)",
                          color: "hsl(0 0% 65%)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Awards ───────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "hsl(0 0% 3%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Recognition</SectionLabel>
            </motion.div>

            <div className="space-y-px" style={{ backgroundColor: "hsl(0 0% 9%)" }}>
              {AWARDS.map((award, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5"
                  style={{ backgroundColor: "hsl(0 0% 3%)" }}
                  whileHover={{
                    backgroundColor: "hsl(0 0% 5%)",
                    transition: { duration: 0.15 },
                  }}
                >
                  <div className="flex items-center gap-4 flex-wrap">
                    <span
                      className="text-[10px] font-mono w-6 flex-shrink-0"
                      style={{ color: "hsl(0 0% 30%)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-base font-normal"
                      style={{
                        color: "hsl(0 0% 85%)",
                        fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
                      }}
                    >
                      {award.title}
                    </h3>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] rounded-full px-2.5 py-0.5"
                      style={{ backgroundColor: "hsl(0 0% 9%)", color: "hsl(0 0% 42%)" }}
                    >
                      {award.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono ml-10 sm:ml-0" style={{ color: "hsl(0 0% 32%)" }}>
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: "hsl(0 0% 4%)", borderTop: "1px solid hsl(0 0% 9%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: "hsl(0 0% 35%)" }}>
            Open to opportunities
          </p>
          <h2
            className="text-4xl md:text-6xl font-normal mb-8"
            style={{
              fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
              color: "hsl(0 0% 90%)",
            }}
          >
            Let&apos;s build something{" "}
            <em
              className="italic"
              style={{
                background: "linear-gradient(90deg, #89AACC, #4E85BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              great.
            </em>
          </h2>
          <Link
            href="/templates/designer-pro/contact"
            className="inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #89AACC, #4E85BF)",
              color: "#fff",
            }}
          >
            Say hello ↗
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
