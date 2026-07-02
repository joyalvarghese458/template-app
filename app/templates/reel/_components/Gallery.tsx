"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0806" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Behind The Scenes" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Where the takes get made.
          </h2>
        </motion.div>

        <div className="rl-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className={`rl-gallery-item ${i === GALLERY.length - 1 ? "rl-gallery-item-wide" : ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="rl-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .rl-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .rl-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 10px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(201,161,90,0.2);
        }
        .rl-gallery-item img { transition: transform 0.4s; }
        .rl-gallery-item:hover img { transform: scale(1.05); }
        .rl-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #f3ece1;
          background-image: linear-gradient(to top, rgba(10,8,6,0.9), transparent);
        }
        .rl-gallery-item-wide { grid-column: 1 / -1; aspect-ratio: 16 / 7; }
        @media (min-width: 700px) {
          .rl-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
