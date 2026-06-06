"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
];

export default function Stats() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
          style={{ borderTop: "1px solid hsl(0 0% 12%)" }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="pt-12 md:pt-16 md:px-8 text-center md:text-left"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid hsl(0 0% 12%)"
                    : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-normal mb-3"
                style={{
                  fontFamily:
                    "var(--dp-font-display, var(--font-serif, serif))",
                  color: "hsl(0 0% 96%)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "hsl(0 0% 53%)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
