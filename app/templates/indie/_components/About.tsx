"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROFILE, STATS } from "../_data/portfolio";
import { ease } from "../_utils/motion";

const vp = { once: true, margin: "-60px" } as const;

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ borderTop: "1px solid var(--i-border)" }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="indie-about-outer"
      >
        {/* ═══════════════════════════════════════════════════════════
            LEFT — sticky identity panel
            Stays fixed while the right column scrolls.
        ═══════════════════════════════════════════════════════════ */}
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.1, ease }}
          style={{
            position: "sticky",
            top: "6rem",
            paddingTop: "5rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Section index */}
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              color: "var(--i-accent)",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            04 / About
          </div>

          {/* Monogram */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "1px solid var(--i-accent)",
              background: "var(--i-accent-dim)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--i-font-display)",
                fontWeight: 300,
                color: "var(--i-accent)",
                letterSpacing: "-0.02em",
              }}
            >
              {PROFILE.initials}
            </span>
          </div>

          {/* Name + role */}
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--i-ink)",
              marginBottom: "0.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            {PROFILE.name}
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "var(--i-ink-muted)",
              lineHeight: 1.5,
              marginBottom: "1.5rem",
            }}
          >
            {PROFILE.role}
          </div>

          <div
            style={{
              width: "100%",
              height: 1,
              background: "var(--i-border)",
              marginBottom: "1.5rem",
            }}
          />

          {/* Meta */}
          {[
            { label: "Based in", value: PROFILE.location },
            { label: "Status", value: PROFILE.status },
          ].map(({ label, value }) => (
            <div key={label} style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--i-ink-faint)",
                  marginBottom: "0.2rem",
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--i-ink-muted)" }}>
                {value}
              </div>
            </div>
          ))}

          {/* Availability badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 0.75rem",
              borderRadius: "100px",
              border: "1px solid rgba(74,222,128,0.3)",
              background: "rgba(74,222,128,0.06)",
              marginTop: "0.5rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                flexShrink: 0,
              }}
            />
            <span
              style={{ fontSize: "0.65rem", color: "rgba(74,222,128,0.85)", letterSpacing: "0.06em" }}
            >
              {PROFILE.availability}
            </span>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Instagram", href: PROFILE.instagram },
              { label: "Vimeo", href: PROFILE.vimeo },
              { label: "LinkedIn", href: PROFILE.linkedin },
              { label: "Behance", href: PROFILE.behance },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: "0.72rem",
                  color: "var(--i-ink-faint)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--i-ink)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--i-ink-faint)")
                }
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 7L7 1M7 1H3M7 1v4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {label}
              </a>
            ))}
          </div>
        </motion.aside>

        {/* ═══════════════════════════════════════════════════════════
            RIGHT — scrolling narrative content
        ═══════════════════════════════════════════════════════════ */}
        <div style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1.1, ease }}
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              fontFamily: "var(--i-font-display)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 2.5rem",
              color: "var(--i-ink)",
            }}
          >
            The craft behind
            <br />
            <em>every single frame.</em>
          </motion.h2>

          {/* Studio image */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
            viewport={vp}
            transition={{ duration: 1.3, ease }}
            style={{
              borderRadius: "0.625rem",
              overflow: "hidden",
              border: "1px solid var(--i-border)",
              marginBottom: "3rem",
              position: "relative",
            }}
          >
            <img
              src={PROFILE.studioImage}
              alt="Creative studio environment"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(5,5,8,0.5) 100%)",
              }}
            />
          </motion.div>

          {/* Bio paragraphs */}
          {[PROFILE.bio1, PROFILE.bio2, PROFILE.bio3].map((bio, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.95, delay: i * 0.1, ease }}
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--i-ink-muted)",
                margin: "0 0 1.375rem",
                maxWidth: 580,
              }}
            >
              {bio}
            </motion.p>
          ))}

          {/* Philosophy quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 1.0, ease }}
            style={{
              margin: "2.5rem 0",
              padding: "1.5rem 1.75rem",
              borderLeft: "3px solid var(--i-accent)",
              background: "var(--i-accent-dim)",
              borderRadius: "0 0.5rem 0.5rem 0",
              border: "1px solid var(--i-accent-dim)",
              borderLeftColor: "var(--i-accent)",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontFamily: "var(--i-font-display)",
                fontStyle: "italic",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                lineHeight: 1.5,
                color: "var(--i-ink)",
                margin: "0 0 0.75rem",
              }}
            >
              &ldquo;{PROFILE.philosophy}&rdquo;
            </p>
            <cite
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--i-ink-faint)",
                fontStyle: "normal",
              }}
            >
              — {PROFILE.name}
            </cite>
          </motion.blockquote>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1.0, ease }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              border: "1px solid var(--i-border)",
              borderRadius: "0.5rem",
              overflow: "hidden",
              background: "var(--i-border)",
              marginBottom: "2.5rem",
            }}
            className="indie-stats-grid"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--i-elevated)",
                  padding: "1.5rem 1.25rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    fontFamily: "var(--i-font-display)",
                    fontWeight: 300,
                    color: "var(--i-ink)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    color: "var(--i-ink-muted)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, ease }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.875rem 2rem",
                borderRadius: "100px",
                border: "1px solid var(--i-accent)",
                color: "var(--i-accent)",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "all 0.35s ease",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--i-accent)";
                el.style.color = "#050508";
                el.style.boxShadow = "0 0 24px var(--i-accent-glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "var(--i-accent)";
                el.style.boxShadow = "none";
              }}
            >
              Start a project together
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .indie-about-outer {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .indie-about-outer aside {
            position: static !important;
            padding-top: 3rem !important;
            padding-bottom: 0 !important;
            border-bottom: 1px solid var(--i-border);
            margin-bottom: 0;
          }
          .indie-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
