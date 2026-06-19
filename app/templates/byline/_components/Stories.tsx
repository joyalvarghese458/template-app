"use client";

import { motion } from "framer-motion";
import { STORIES } from "../_data/portfolio";
import { fadeUp, clipTilt, VIEWPORT } from "../_utils/motion";
import { Kicker } from "./About";

export default function Stories() {
  return (
    <section id="stories" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ece4d3" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Kicker index="02" label="Selected Stories" />
          <h2
            style={{
              fontFamily: "var(--font-display, serif)",
              fontWeight: 700,
              fontSize: "clamp(26px, 4.5vw, 38px)",
              color: "#1a1714",
              margin: "0 0 36px",
              lineHeight: 1.15,
            }}
          >
            Reporting that moved the record.
          </h2>
        </motion.div>

        <div className="byline-stories-grid">
          {STORIES.map((story, i) => (
            <motion.article
              key={story.id}
              variants={clipTilt(i)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 2) * 0.08 }}
              whileHover={{ rotate: 0, y: -4 }}
              className="byline-clip-card"
            >
              <span aria-hidden="true" className="byline-clip-pin" />
              <div className="byline-clip-meta">
                <span className="byline-clip-outlet">{story.outlet}</span>
                <span className="byline-clip-date">{story.date}</span>
              </div>
              <h3 className="byline-clip-title">{story.title}</h3>
              <p className="byline-clip-desc">{story.description}</p>
              <div className="byline-clip-tags">
                {story.tags.map((t) => (
                  <span key={t} className="byline-clip-tag">{t}</span>
                ))}
              </div>
              <ul className="byline-clip-outcomes">
                {story.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .byline-stories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .byline-clip-card {
          position: relative;
          background-color: #f3efe6;
          border: 1px solid rgba(26,23,20,0.14);
          box-shadow: 0 6px 16px rgba(26,23,20,0.08);
          padding: 26px 22px 22px;
          transition: box-shadow 0.25s;
        }
        .byline-clip-card:hover { box-shadow: 0 10px 24px rgba(26,23,20,0.14); }
        .byline-clip-pin {
          position: absolute;
          top: -7px;
          left: 24px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #b3231a;
          box-shadow: 0 2px 3px rgba(0,0,0,0.25);
        }
        .byline-clip-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-type, monospace);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #5b554c;
          margin-bottom: 12px;
        }
        .byline-clip-outlet { color: #b3231a; text-transform: uppercase; }
        .byline-clip-title {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: 21px;
          color: #1a1714;
          margin: 0 0 10px;
          line-height: 1.25;
        }
        .byline-clip-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #3c372f;
          margin: 0 0 16px;
        }
        .byline-clip-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 16px; }
        .byline-clip-tag {
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          color: #5b554c;
          border: 1px solid rgba(26,23,20,0.2);
          border-radius: 2px;
          padding: 3px 8px;
        }
        .byline-clip-outcomes {
          list-style: none;
          margin: 0;
          padding-top: 14px;
          border-top: 1px dashed rgba(26,23,20,0.2);
          display: flex;
          flex-direction: column;
          gap: 7px;
          font-size: 13.5px;
          color: #3c372f;
        }
        .byline-clip-outcomes li { padding-left: 16px; position: relative; }
        .byline-clip-outcomes li::before { content: "▪"; position: absolute; left: 0; color: #6e7c4a; font-size: 10px; top: 2px; }
        @media (min-width: 700px) {
          .byline-stories-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 28px; }
        }
      `}</style>
    </section>
  );
}
