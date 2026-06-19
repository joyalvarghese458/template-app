"use client";

import { motion } from "framer-motion";
import { SERVICES } from "../_data/portfolio";
import { slideAlt, slideUp, VIEWPORT } from "../_utils/motion";
import { Eyebrow } from "./About";

const ICONS: Record<string, React.ReactNode> = {
  document: (
    <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M14 3v4h4 M9 12h6 M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  chat: (
    <path d="M4 5h16v10H9l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  trend: (
    <path d="M3 17l5-5 4 4 7-8 M14 8h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M15 9l-2 6-6 2 2-6 6-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L3.3 9.2l6.1-.6L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
  grid: (
    <path d="M4 4h7v7H4V4z M13 4h7v7h-7V4z M4 13h7v7H4v-7z M13 13h7v7h-7v-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  ),
};

export default function Services() {
  return (
    <section id="services" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Eyebrow label="Services" />
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: "14px 0 40px", lineHeight: 1.18 }}>
            How we get you to an offer.
          </h2>
        </motion.div>

        <div className="ascend-services-grid">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={slideAlt(i, 32)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              whileHover={{ y: -5 }}
              className="ascend-service-card"
            >
              <span className="ascend-service-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  {ICONS[service.icon]}
                </svg>
              </span>
              <h3 className="ascend-service-title">{service.title}</h3>
              <p className="ascend-service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ascend-services-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .ascend-service-card {
          border-radius: 18px;
          border: 1px solid rgba(28,21,48,0.08);
          background-color: #faf8ff;
          padding: 24px;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .ascend-service-card:hover { box-shadow: 0 16px 32px rgba(28,21,48,0.1); border-color: rgba(124,92,255,0.25); }
        .ascend-service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(120deg, rgba(255,122,89,0.15), rgba(124,92,255,0.15));
          color: #7c5cff;
          margin-bottom: 16px;
        }
        .ascend-service-title { font-size: 16.5px; font-weight: 800; color: #1c1530; margin: 0 0 8px; }
        .ascend-service-desc { font-size: 13.5px; line-height: 1.65; color: #6b6280; margin: 0; }
        @media (min-width: 700px) {
          .ascend-services-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
        }
        @media (min-width: 1000px) {
          .ascend-services-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
