"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf5ea" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="The Atelier" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Where the accords get built.
          </h2>
        </motion.div>

        <div className="sil-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="sil-gallery-item"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="sil-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .sil-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .sil-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 10px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(43,32,21,0.14);
        }
        .sil-gallery-item img { transition: transform 0.4s; }
        .sil-gallery-item:hover img { transform: scale(1.05); }
        .sil-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #faf5ea;
          background-image: linear-gradient(to top, rgba(43,32,21,0.85), transparent);
        }
        @media (min-width: 700px) {
          .sil-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
