"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section id="behind-the-numbers" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f1e8d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Behind The Numbers" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Where the work actually happens.
          </h2>
        </motion.div>

        <div className="ledger-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="ledger-gallery-item"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="ledger-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .ledger-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .ledger-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(22,41,31,0.14);
        }
        .ledger-gallery-item img {
          filter: sepia(0.18) saturate(0.92);
          transition: filter 0.3s, transform 0.4s;
        }
        .ledger-gallery-item:hover img {
          filter: sepia(0) saturate(1.05);
          transform: scale(1.04);
        }
        .ledger-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-family: var(--font-body, sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          color: #fffdf7;
          background-image: linear-gradient(to top, rgba(22,41,31,0.75), transparent);
        }
        @media (min-width: 700px) {
          .ledger-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
