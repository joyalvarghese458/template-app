"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Automotive Motion",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&q=80&auto=format&fit=crop",
    span: "md:col-span-7",
  },
  {
    id: 2,
    title: "Urban Architecture",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&q=80&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    id: 3,
    title: "Human Perspective",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&q=80&auto=format&fit=crop",
    span: "md:col-span-5",
  },
  {
    id: 4,
    title: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&q=80&auto=format&fit=crop",
    span: "md:col-span-7",
  },
];

export default function Works() {
  return (
    <section
      id="work"
      className="py-12 md:py-16"
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
                Selected Work
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
              Featured{" "}
              <em
                className="italic"
                style={{
                  fontFamily:
                    "var(--dp-font-display, var(--font-serif, serif))",
                }}
              >
                projects
              </em>
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: "hsl(0 0% 53%)" }}
            >
              A selection of projects I&#39;ve worked on, from concept to
              launch.
            </p>
          </div>
          <Link
            href="/templates/designer-pro/work"
            className="hidden md:inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "hsl(0 0% 12%)",
              color: "hsl(0 0% 96%)",
            }}
          >
            View all work <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl ${project.span}`}
              style={{
                aspectRatio: i % 2 === 0 ? "16 / 10" : "4 / 3",
                backgroundColor: "hsl(0 0% 8%)",
                border: "1px solid hsl(0 0% 12%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link
                href="/templates/designer-pro/work"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label={`View ${project.title}`}
              />
              {/* Background image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Halftone overlay */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: "rgba(5,5,5,0.75)" }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  View —{" "}
                  <em
                    style={{
                      fontFamily:
                        "var(--dp-font-display, var(--font-serif, serif))",
                    }}
                  >
                    {project.title}
                  </em>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
