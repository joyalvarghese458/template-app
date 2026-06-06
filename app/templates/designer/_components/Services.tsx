"use client";

import { motion, type Variants } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Brand Identity",
    description:
      "Logo systems, visual language, typography, colour, and guidelines that give your brand a distinct and lasting presence.",
    tags: ["Logo", "Visual System", "Brand Guide"],
  },
  {
    num: "02",
    title: "UI / UX Design",
    description:
      "Research-led product design for web and mobile — from flows and wireframes through to polished, production-ready screens.",
    tags: ["Web App", "Mobile", "Figma"],
  },
  {
    num: "03",
    title: "Creative Direction",
    description:
      "Shaping the visual and conceptual direction of campaigns, launches, and editorial projects from brief to final output.",
    tags: ["Campaign", "Editorial", "Art Direction"],
  },
  {
    num: "04",
    title: "Design Systems",
    description:
      "Scalable component libraries and documentation so your team ships consistent, high-quality product at speed.",
    tags: ["Tokens", "Components", "Docs"],
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

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6"
      style={{ backgroundColor: "hsl(28 6% 7%)", borderTop: "1px solid hsl(28 7% 10%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ backgroundColor: "#C07A2E" }} />
            <span className="text-xs uppercase tracking-[0.35em]" style={{ color: "hsl(30 8% 45%)" }}>
              What I Do
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-normal max-w-lg"
            style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              color: "hsl(38 25% 93%)",
            }}
          >
            Services &{" "}
            <em
              className="italic"
              style={{
                background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              expertise
            </em>
          </h2>
        </motion.div>

        {/* Service rows */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-px"
          style={{ backgroundColor: "hsl(28 7% 12%)" }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-10 px-6 md:px-8 py-8 transition-colors duration-200 cursor-default"
              style={{ backgroundColor: "hsl(28 6% 7%)" }}
              whileHover={{ backgroundColor: "hsl(28 6% 9%)" }}
            >
              {/* Number */}
              <span
                className="text-[11px] font-mono flex-shrink-0 w-8"
                style={{ color: "hsl(28 7% 32%)" }}
              >
                {s.num}
              </span>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-normal flex-shrink-0 w-52 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  color: "hsl(38 20% 80%)",
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "hsl(30 8% 48%)" }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 flex-shrink-0 md:justify-end">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] rounded-full px-2.5 py-1"
                    style={{
                      backgroundColor: "hsl(28 8% 5%)",
                      border: "1px solid hsl(28 7% 16%)",
                      color: "hsl(30 8% 42%)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span
                className="hidden md:block flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "hsl(28 7% 28%)" }}
              >
                →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
