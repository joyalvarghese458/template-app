"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1610" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Field Notebook" />
          <h2 className="lithos-h2-static">What the outcrop looked like.</h2>
        </motion.div>

        <div className="lithos-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className={`lithos-gallery-item ${i === 0 ? "lithos-gallery-item-wide" : ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="lithos-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .lithos-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .lithos-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(255,255,255,0.09);
        }
        .lithos-gallery-item-wide { grid-column: span 2; aspect-ratio: 16 / 9; }
        .lithos-gallery-item img {
          filter: saturate(0.85) contrast(1.02);
          transition: filter 0.3s, transform 0.4s;
        }
        .lithos-gallery-item:hover img {
          filter: saturate(1.1) contrast(1.06);
          transform: scale(1.04);
        }
        .lithos-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #f4ece1;
          background-image: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        @media (min-width: 700px) {
          .lithos-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
          .lithos-gallery-item-wide { grid-column: span 2; }
        }
      `}</style>
    </section>
  );
}
