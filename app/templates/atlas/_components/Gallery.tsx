"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#111a2c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Behind The Engagements" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Where the strategy actually happens.
          </h2>
        </motion.div>

        <div className="atlas-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="atlas-gallery-item"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="atlas-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .atlas-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .atlas-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(243,239,228,0.1);
        }
        .atlas-gallery-item img { transition: transform 0.4s; }
        .atlas-gallery-item:hover img { transform: scale(1.05); }
        .atlas-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #f3efe4;
          background-image: linear-gradient(to top, rgba(10,15,28,0.85), transparent);
        }
        @media (min-width: 700px) {
          .atlas-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
