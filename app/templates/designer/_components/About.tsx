"use client";

import { motion, type Variants } from "framer-motion";

const SKILLS = ["Figma", "After Effects", "Illustrator", "Photoshop", "Framer", "Principle", "Webflow", "Cinema 4D"];

const STATS = [
  { value: "60+", label: "Projects" },
  { value: "7+",  label: "Years" },
  { value: "98%", label: "Happy clients" },
];

const TESTIMONIALS = [
  {
    quote: "Sofia has an exceptional ability to translate complex briefs into elegant, memorable design. The rebrand exceeded every expectation.",
    author: "Mia Laurent",
    role: "CEO, Luminary Studios",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote: "Working with Sofia was a masterclass in design thinking. She brought clarity and craftsmanship to a product that desperately needed both.",
    author: "James Park",
    role: "CPO, Fintech Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote: "The campaign visuals were stunning — on-brand, on-time, and way beyond what we imagined. Sofia is our go-to creative partner.",
    author: "Clara Müller",
    role: "Marketing Director, Apex Motors",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <>
      {/* ── About ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-32 px-6"
        style={{ backgroundColor: "hsl(28 8% 5%)", borderTop: "1px solid hsl(28 7% 10%)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left — portrait + stats */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85 }}
            >
              <div
                className="relative overflow-hidden rounded-3xl mb-8"
                style={{
                  aspectRatio: "4/5",
                  border: "1px solid hsl(28 7% 14%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&q=80&auto=format&fit=crop&crop=face"
                  alt="Sofia Chen"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(13,10,7,0.6) 0%, transparent 60%)",
                  }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-6 left-6">
                  <p
                    className="text-lg font-normal"
                    style={{
                      fontFamily: "var(--font-serif, Georgia, serif)",
                      color: "hsl(38 25% 93%)",
                    }}
                  >
                    Sofia Chen
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "hsl(30 8% 55%)" }}>
                    Brand & UI Designer
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div
                className="grid grid-cols-3 divide-x rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid hsl(28 7% 14%)",
                  backgroundColor: "hsl(28 6% 9%)",
                }}
              >
                {STATS.map((s) => (
                  <div key={s.label} className="p-5 text-center">
                    <p
                      className="text-2xl font-light mb-1"
                      style={{
                        color: "#E2B96A",
                        fontFamily: "var(--font-serif, Georgia, serif)",
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "hsl(30 8% 45%)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — bio + skills */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px" style={{ backgroundColor: "#C07A2E" }} />
                <span className="text-xs uppercase tracking-[0.35em]" style={{ color: "hsl(30 8% 45%)" }}>
                  About Me
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-normal mb-8 leading-tight"
                style={{
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  color: "hsl(38 25% 93%)",
                }}
              >
                Designing with{" "}
                <em
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  purpose.
                </em>
              </h2>

              <div className="space-y-4 mb-10">
                {[
                  "I'm a brand and UI/UX designer with 7 years of experience working with startups, agencies, and global brands. I'm based in Amsterdam and take on select international projects each year.",
                  "My work sits at the intersection of strategy and craft. I believe the best design isn't just beautiful — it solves real problems, communicates clearly, and ages well.",
                  "When I'm not designing, I'm writing about the process, teaching workshops, or hunting for the perfect espresso.",
                ].map((p, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "hsl(30 8% 50%)" }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Skills */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] mb-4" style={{ color: "hsl(28 7% 35%)" }}>
                  Tools &amp; Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs rounded-full px-3 py-1.5"
                      style={{
                        backgroundColor: "hsl(28 6% 9%)",
                        border: "1px solid hsl(28 7% 14%)",
                        color: "hsl(30 8% 60%)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm rounded-full px-5 py-2.5 border transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid hsl(28 7% 18%)",
                    color: "hsl(38 25% 75%)",
                  }}
                >
                  Download CV ↓
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "hsl(28 6% 7%)", borderTop: "1px solid hsl(28 7% 10%)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: "#C07A2E" }} />
              <span className="text-xs uppercase tracking-[0.35em]" style={{ color: "hsl(30 8% 45%)" }}>
                Kind Words
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-normal"
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                color: "hsl(38 25% 93%)",
              }}
            >
              What clients{" "}
              <em
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                say.
              </em>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl p-7 flex flex-col justify-between"
                style={{
                  backgroundColor: "hsl(28 8% 5%)",
                  border: "1px solid hsl(28 7% 12%)",
                }}
              >
                {/* Quote mark */}
                <span
                  className="text-5xl font-serif leading-none mb-4 block"
                  style={{ color: "hsl(28 7% 22%)" }}
                >
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "hsl(30 8% 55%)" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    style={{ border: "1px solid hsl(28 7% 18%)" }}
                  />
                  <div>
                    <p className="text-xs font-medium" style={{ color: "hsl(38 20% 78%)" }}>
                      {t.author}
                    </p>
                    <p className="text-[10px]" style={{ color: "hsl(30 8% 40%)" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
