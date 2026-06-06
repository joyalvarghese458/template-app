"use client";

import { motion } from "framer-motion";

const ROLES = ["Brand Designer", "UI/UX Designer", "Creative Director"];

export default function Hero({ ready }: { ready: boolean }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
      style={{ backgroundColor: "hsl(28 8% 5%)" }}
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(28 7% 14% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(28 7% 14% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Warm glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(226,185,106,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
        {/* ── Left ── */}
        <div>
          {/* Availability */}
          {ready && (
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
              style={{
                border: "1px solid hsl(28 7% 14%)",
                backgroundColor: "hsl(28 6% 9%)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: "#4ade80",
                  boxShadow: "0 0 6px rgba(74,222,128,0.5)",
                  animation: "ds-pulse 2s ease-in-out infinite",
                }}
              />
              <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "hsl(30 8% 55%)" }}>
                Open for projects
              </span>
            </motion.div>
          )}

          {/* Name */}
          {ready && (
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[7vw] font-normal leading-[0.9] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                color: "hsl(38 25% 93%)",
              }}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Sofia{" "}
              <em
                className="italic block"
                style={{
                  background: "linear-gradient(135deg, #E2B96A 0%, #C07A2E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Chen.
              </em>
            </motion.h1>
          )}

          {/* Role */}
          {ready && (
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              {ROLES.map((r) => (
                <span
                  key={r}
                  className="text-xs uppercase tracking-[0.2em] rounded-full px-3 py-1.5"
                  style={{
                    border: "1px solid hsl(28 7% 18%)",
                    color: "hsl(30 8% 55%)",
                  }}
                >
                  {r}
                </span>
              ))}
            </motion.div>
          )}

          {/* Bio snippet */}
          {ready && (
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-md mb-10"
              style={{ color: "hsl(30 8% 55%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              I craft purposeful brand identities and digital experiences for forward-thinking companies. Based in Amsterdam, working worldwide.
            </motion.p>
          )}

          {/* CTAs */}
          {ready && (
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
            >
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
                  color: "#0d0a07",
                  fontWeight: 500,
                  boxShadow: "0 4px 24px rgba(226,185,106,0.2)",
                }}
              >
                View my work →
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid hsl(28 7% 18%)",
                  color: "hsl(38 25% 80%)",
                }}
              >
                Say hello ↗
              </button>
            </motion.div>
          )}
        </div>

        {/* ── Right: Portrait ── */}
        {ready && (
          <motion.div
            className="relative w-full mx-auto lg:mx-0"
            style={{ maxWidth: "420px" }}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                aspectRatio: "3/4",
                border: "1px solid hsl(28 7% 14%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=840&h=1120&q=80&auto=format&fit=crop&crop=face"
                alt="Sofia Chen"
                className="w-full h-full object-cover"
              />
              {/* Warm tint overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(13,10,7,0.5) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating stat card — top right */}
            <motion.div
              className="absolute -right-4 top-8 rounded-2xl p-4"
              style={{
                backgroundColor: "hsl(28 6% 9%)",
                border: "1px solid hsl(28 7% 14%)",
                minWidth: "120px",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p
                className="text-3xl font-light mb-0.5"
                style={{
                  color: "#E2B96A",
                  fontFamily: "var(--font-serif, Georgia, serif)",
                }}
              >
                7+
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "hsl(30 8% 45%)" }}>
                Years exp.
              </p>
            </motion.div>

            {/* Floating stat card — bottom left */}
            <motion.div
              className="absolute -left-4 bottom-12 rounded-2xl p-4"
              style={{
                backgroundColor: "hsl(28 6% 9%)",
                border: "1px solid hsl(28 7% 14%)",
                minWidth: "130px",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <p
                className="text-3xl font-light mb-0.5"
                style={{
                  color: "#E2B96A",
                  fontFamily: "var(--font-serif, Georgia, serif)",
                }}
              >
                60+
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "hsl(30 8% 45%)" }}>
                Projects done
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll hint */}
      {ready && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(30 8% 38%)" }}>
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, hsl(28 7% 18%), transparent)",
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
