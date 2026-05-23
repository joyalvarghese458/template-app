"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { useReveal } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const SUMMARY = [
  { label: "Nickname", value: "John" },
  { label: "Nationality", value: "American" },
  { label: "Phone", value: "+1 970 555 0119" },
  { label: "DOB", value: "06 / 13 / 1994" },
  { label: "Languages", value: "English · Spanish" },
  { label: "Available", value: "Q3 — Q4 2026" },
];

const EDUCATION = [
  { school: "Harvard University", title: "MBA in CSE (2015 – 2016)" },
  { school: "Harvard University", title: "B.Sc. in CSE (2010 – 2014)" },
  { school: "Harvard University", title: "Secondary School (2002 – 2009)" },
];

const SKILLS = [
  { label: "Communication", pct: 95 },
  { label: "Problem Solving", pct: 70 },
  { label: "Web Application", pct: 90 },
  { label: "Algorithm & Data Structure", pct: 75 },
];

const MOMENTS_TABS = {
  travel: {
    copy: (
      <>
        Lorem ipsum dolor sit amet, <a href="#">consectetuer adipiscing elit</a>. Cum
        sociis natoque penatibus et magnis dis parturient montes,{" "}
        <strong>nascetur ridiculus</strong> mus. Donec quam felis, ultricies nec,{" "}
        <a href="#">pellentesque eu</a>, pretium quis, sem. Nulla consequat massa quis
        enim.
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80&auto=format&fit=crop",
    ],
  },
  creativity: {
    copy: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa deleniti adipisci
        culpa? Quos sit dolore magnam minima, optio nobis commodi!
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80&auto=format&fit=crop&hue=10",
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&q=80&auto=format&fit=crop",
    ],
  },
  moments: {
    copy: (
      <>
        Sunsets, late nights, found objects, and the occasional roadside diner. The
        moments that don&apos;t fit neatly in a portfolio but quietly shape the work.
      </>
    ),
    images: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521133573892-e44906baee46?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80&auto=format&fit=crop",
    ],
  },
};

export default function PureAbout() {
  return (
    <div className={theme.root}>
      <Nav current="about" />

      <Banner />
      <Intro />
      <Skills />
      <Moments />

      <Footer />
    </div>
  );
}

function Banner() {
  return (
    <section className={styles.banner}>
      <span className={styles.bannerGlow} aria-hidden="true" />
      <span className={`${styles.bannerOrb} ${styles.bannerOrb1}`} aria-hidden="true" />
      <span className={`${styles.bannerOrb} ${styles.bannerOrb2}`} aria-hidden="true" />

      <p className={styles.smallEyebrow}>HI, I AM</p>
      <h1 className={styles.bannerName}>Jonathon Deo</h1>
      <div className={styles.crumbs}>
        <Link href="/templates/pure">Home</Link>
        <span className={styles.crumbSep}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
        </span>
        <span>About</span>
      </div>
    </section>
  );
}

function Intro() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.intro}>
      <div
        className={styles.introInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div>
          <h2 className={styles.introHeadline}>
            I&apos;m currently working
            <br />
            as a. <em>freelancer</em>
          </h2>
          <div className={styles.introCols}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
            </p>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryFigure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pure-about.png"
              alt="Portrait"
            />
          </div>
          <h3 className={styles.summaryTitle}>In summary</h3>
          <div className={styles.summaryGrid}>
            {SUMMARY.map((s) => (
              <div key={s.label} className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{s.label}</span>
                <span className={styles.summaryValue}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.skills}>
      <div className={styles.skillsInner} ref={ref}>
        <div className={styles.skillsHead}>
          <h2 className={styles.skillsTitle}>
            I&apos;m great in what I do
            <br />
            and <em>I&apos;m loving it</em>
          </h2>
          <Link href="/templates/pure/contact" className={styles.skillsHire}>
            Hire Me
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </Link>
        </div>

        <div className={styles.skillsBody}>
          <div>
            <h3 className={styles.sectionH}>Education</h3>
            <div className={styles.eduList}>
              {EDUCATION.map((e, i) => (
                <div
                  key={i}
                  className={styles.eduItem}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.6s ${i * 0.12}s ease, transform 0.6s ${i * 0.12
                      }s cubic-bezier(0.22, 1, 0.36, 1)`,
                  }}
                >
                  <div className={styles.eduIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10L12 5 2 10l10 5 10-5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.eduMeta}>{e.school}</p>
                    <p className={styles.eduTitle}>{e.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.sectionH}>Skills</h3>
            {SKILLS.map((s, i) => (
              <div key={s.label} className={styles.skillRow}>
                <div className={styles.skillRowHead}>
                  <span className={styles.skillRowLabel}>{s.label}</span>
                  <span className={styles.skillRowPct}>{s.pct}%</span>
                </div>
                <div className={styles.skillRowBar}>
                  <span
                    className={`${styles.skillRowFill} ${visible ? styles.skillRowFillVisible : ""}`}
                    style={{
                      // @ts-expect-error custom property
                      "--fill": s.pct / 100,
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Moments() {
  const [tab, setTab] = useState<"travel" | "creativity" | "moments">("travel");
  const { ref, visible } = useReveal<HTMLDivElement>();
  const data = MOMENTS_TABS[tab];

  return (
    <section className={styles.moments}>
      <div
        className={styles.momentsInner}
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <div>
          <span className={theme.eyebrow}>
            How I Live
            <svg className={theme.eyebrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 8a4 4 0 0 0-8 0 4 4 0 0 0-8 0c0 6 8 12 8 12s8-6 8-12z" /></svg>
          </span>
          <h2 className={styles.momentsTitle}>
            Moments
            <br />
            of <em>my life</em>
          </h2>

          <div className={styles.momentsTabs}>
            {(["travel", "creativity", "moments"] as const).map((k) => (
              <button
                key={k}
                className={`${styles.momentsTab} ${tab === k ? styles.momentsTabActive : ""}`}
                onClick={() => setTab(k)}
              >
                {k}
              </button>
            ))}
          </div>

          <p className={styles.momentsCopy}>{data.copy}</p>
        </div>

        <div className={styles.momentsGrid} key={tab}>
          {data.images.map((src, i) => (
            <div key={src + i} className={styles.momentTile}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
