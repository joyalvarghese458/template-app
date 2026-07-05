"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#071c27" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Field Log" />
          <h2 className="marea-h2-static">What the dive log looked like.</h2>
        </motion.div>

        <div className="marea-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className={`marea-gallery-item ${i === GALLERY.length - 1 ? "marea-gallery-item-wide" : ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover", objectPosition: shot.position ?? "center" }}
              />
              <figcaption className="marea-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .marea-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .marea-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(255,255,255,0.09);
        }
        .marea-gallery-item-wide { grid-column: 1 / -1; aspect-ratio: 16 / 9; }
        .marea-gallery-item img {
          filter: saturate(0.92) contrast(1.02);
          transition: filter 0.3s, transform 0.4s;
        }
        .marea-gallery-item:hover img {
          filter: saturate(1.12) contrast(1.06);
          transform: scale(1.04);
        }
        .marea-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-size: 11.5px;
          font-weight: 500;
          color: #eaf6f5;
          background-image: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        @media (min-width: 700px) {
          .marea-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
