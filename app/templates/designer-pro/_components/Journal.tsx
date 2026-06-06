"use client";

import { motion } from "framer-motion";

const ENTRIES = [
  {
    id: 1,
    title: "The Future of Interaction Design",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&q=80&auto=format&fit=crop",
    readTime: "5 min read",
    date: "Jan 2026",
  },
  {
    id: 2,
    title: "Building Motion Systems That Scale",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=80&h=80&q=80&auto=format&fit=crop",
    readTime: "8 min read",
    date: "Dec 2025",
  },
  {
    id: 3,
    title: "Dark UI: When Less Light Means More Depth",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&q=80&auto=format&fit=crop",
    readTime: "6 min read",
    date: "Nov 2025",
  },
  {
    id: 4,
    title: "GSAP vs Framer Motion: A Creator's Take",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=80&h=80&q=80&auto=format&fit=crop",
    readTime: "4 min read",
    date: "Oct 2025",
  },
];

export default function Journal() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: "hsl(0 0% 12%)" }}
              />
              <span
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: "hsl(0 0% 53%)" }}
              >
                Journal
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-normal"
              style={{
                color: "hsl(0 0% 96%)",
                fontFamily:
                  "var(--dp-font-display, var(--font-serif, serif))",
              }}
            >
              Recent{" "}
              <em
                className="italic"
                style={{
                  fontFamily:
                    "var(--dp-font-display, var(--font-serif, serif))",
                }}
              >
                thoughts
              </em>
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "hsl(0 0% 53%)" }}
            >
              Ideas, explorations, and reflections on design and creativity.
            </p>
          </div>
          <button
            className="hidden md:inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "hsl(0 0% 12%)",
              color: "hsl(0 0% 96%)",
            }}
          >
            View all <span aria-hidden="true">→</span>
          </button>
        </motion.div>

        {/* Journal entries */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={entry.id}
              className="flex items-center gap-4 sm:gap-6 p-4 rounded-[40px] sm:rounded-full cursor-pointer border transition-colors duration-300"
              style={{
                backgroundColor: "rgba(20,20,20,0.3)",
                borderColor: "hsl(0 0% 12%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                backgroundColor: "rgba(20,20,20,0.8)",
              }}
            >
              <img
                src={entry.image}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm sm:text-base font-medium truncate"
                  style={{ color: "hsl(0 0% 96%)" }}
                >
                  {entry.title}
                </h3>
              </div>
              <div
                className="hidden sm:flex items-center gap-4 flex-shrink-0 text-xs"
                style={{ color: "hsl(0 0% 53%)" }}
              >
                <span>{entry.readTime}</span>
                <span>{entry.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
