"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1613" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Behind The Pass" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            Where the menu actually happens.
          </h2>
        </motion.div>

        <div className="umami-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className={`umami-gallery-item ${i === 0 ? "umami-gallery-item-wide" : ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="umami-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .umami-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .umami-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(245,236,224,0.1);
        }
        .umami-gallery-item img { transition: transform 0.4s; }
        .umami-gallery-item:hover img { transform: scale(1.05); }
        .umami-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #f5ece0;
          background-image: linear-gradient(to top, rgba(21,17,15,0.88), transparent);
        }
        @media (min-width: 540px) {
          .umami-gallery-item-wide { grid-column: span 2; aspect-ratio: 16 / 7; }
        }
        @media (min-width: 700px) {
          .umami-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
          .umami-gallery-item-wide { grid-column: span 2; aspect-ratio: 4 / 3; }
        }
      `}</style>
    </section>
  );
}
