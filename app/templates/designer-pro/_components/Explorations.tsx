"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=750&q=80&auto=format&fit=crop",
    label: "Experiment 01",
  },
  {
    aspect: "aspect-square",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&q=80&auto=format&fit=crop",
    label: "Motion Study",
  },
  {
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&q=80&auto=format&fit=crop",
    label: "Type Play",
  },
  {
    aspect: "aspect-square",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&q=80&auto=format&fit=crop",
    label: "Grid Systems",
  },
  {
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=750&q=80&auto=format&fit=crop",
    label: "Arc Study",
  },
  {
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=800&q=80&auto=format&fit=crop",
    label: "Texture Lab",
  },
];

export default function Explorations() {
  return (
    <section
      className="overflow-hidden"
      style={{
        backgroundColor: "hsl(0 0% 4%)",
        padding: "6rem 0",
      }}
    >
      {/* ── Header ── */}
      <div className="text-center px-6">
        {/* Eyebrow pill */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{
            border: "1px solid hsl(0 0% 12%)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "hsl(0 0% 53%)" }}
          >
            Explorations
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl font-normal leading-tight"
          style={{
            color: "hsl(0 0% 96%)",
            fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        >
          Visual{" "}
          <em
            className="italic"
            style={{
              fontFamily: "var(--dp-font-display, var(--font-serif, serif))",
              background: "linear-gradient(90deg, #89AACC, #4E85BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            playground
          </em>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-sm md:text-base max-w-sm mx-auto text-center mt-4"
          style={{ color: "hsl(0 0% 53%)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
        >
          A curated set of experimental work and creative explorations.
        </motion.p>

        {/* Dribbble button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-sm transition-all duration-300"
            style={{
              border: "1px solid hsl(0 0% 12%)",
              padding: "10px 20px",
              color: "hsl(0 0% 53%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "hsl(0 0% 96%)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "hsl(0 0% 53%)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(0 0% 12%)";
            }}
          >
            View on Dribbble <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>

      {/* ── Gallery grid ── */}
      <div className="max-w-[1100px] mx-auto px-6 mt-16 md:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${card.aspect}`}
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Permanent bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
              >
                <span
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {card.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
