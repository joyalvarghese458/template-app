"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Gallery() {
  return (
    <section id="shop" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#16161a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="In The Shop" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 40px", lineHeight: 1.1, textTransform: "uppercase" }}>
            Where the model meets the metal.
          </h2>
        </motion.div>

        <div className="redline-gallery-grid">
          {GALLERY.map((shot, i) => (
            <motion.figure
              key={shot.caption}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.07 }}
              className="redline-gallery-item"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 760px) 50vw, 280px"
                style={{ objectFit: "cover" }}
              />
              <figcaption className="redline-gallery-caption">{shot.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        .redline-gallery-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .redline-gallery-item {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          margin: 0;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .redline-gallery-item img {
          filter: grayscale(0.5) contrast(1.05);
          transition: filter 0.3s, transform 0.4s;
        }
        .redline-gallery-item:hover img {
          filter: grayscale(0) contrast(1.1);
          transform: scale(1.04);
        }
        .redline-gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 8px 12px;
          font-family: var(--font-display, sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #f2f2f0;
          background-image: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        @media (min-width: 700px) {
          .redline-gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
