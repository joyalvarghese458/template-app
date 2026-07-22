"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import Cursor from "./_components/Cursor";
import {
  useReveal,
  useCounter,
  useScrollProgress,
  useMouseParallax,
  useSmoothScroll,
  useDragScroll,
} from "./_components/hooks";
import theme from "./_components/theme.module.css";
import styles from "./styles.module.css";

// =====================================================
// EDITABLE CONTENT — swap text/images here
// =====================================================

const PHOTOGRAPHER = {
  name: "Aryan Kapoor",
  tagline1: "Capturing",
  tagline2: "Timeless",
  tagline3: "Moments.",
  intro:
    "An award-winning fine art photographer based in Mumbai, working across five continents. Specialising in weddings, wildlife, fashion, and editorial storytelling.",
  heroImg:
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=2400&q=85&auto=format&fit=crop",
};

const CATEGORIES = [
  {
    slug: "weddings",
    label: "Weddings",
    count: "480+",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "wildlife",
    label: "Wildlife",
    count: "1200+",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "fashion",
    label: "Fashion",
    count: "320+",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "portraits",
    label: "Portraits",
    count: "890+",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "travel",
    label: "Travel",
    count: "560+",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "commercial",
    label: "Commercial",
    count: "140+",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
  },
];

const SHOWCASE = [
  {
    id: "01",
    title: "Where Light Meets Vow",
    category: "Wedding",
    year: "2025",
    location: "Udaipur, India",
    desc: "A palace wedding captured across two golden days. Every frame breathes the weight and warmth of a love story 400 years in the making.",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Predators of the Maasai",
    category: "Wildlife",
    year: "2025",
    location: "Maasai Mara, Kenya",
    desc: "Six weeks in the Kenyan savannah following lion prides, cheetahs, and the annual migration. A testament to patience and proximity.",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Avant / Garde",
    category: "Fashion",
    year: "2024",
    location: "Milan, Italy",
    desc: "An editorial series for a couture house that asked one question: what does silence look like when it wears velvet?",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Wild & Untamed",
    category: "Wildlife",
    year: "2025",
    location: "Serengeti, Tanzania",
    desc: "Fourteen weeks tracking the great migration across the Serengeti plains. Every frame earned through stillness, patience, and an intimate knowledge of the land.",
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Form Follows Fashion",
    category: "Fashion",
    year: "2026",
    location: "Paris, France",
    desc: "A ten-day editorial campaign shot across Parisian rooftops and grand interiors — commissioned by three independent maisons for their Spring lookbooks.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80&auto=format&fit=crop",
  },
];

const STORIES = [
  {
    title: "The Wedding Chapter",
    body: "From quiet preparations before dawn to the last dance under stars — we document every unrepeatable second of your most important day.",
    tag: "Weddings",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Wild & Untamed",
    body: "Months in remote wilderness, waiting for the perfect split-second. Wildlife photography that earns every frame through silence, skill, and stamina.",
    tag: "Wildlife",
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Form Follows Fashion",
    body: "Collaborating with designers, stylists, and art directors to produce editorial imagery that stops the scroll and starts a conversation.",
    tag: "Fashion",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop",
  },
];

const STRIP_IMAGES = [
  "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=700&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=700&q=80&auto=format&fit=crop",
];

const MASONRY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&auto=format&fit=crop", aspect: "tall" },
  { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80&auto=format&fit=crop", aspect: "wide" },
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop", aspect: "square" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80&auto=format&fit=crop", aspect: "wide" },
  { url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&q=80&auto=format&fit=crop", aspect: "tall" },
  { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80&auto=format&fit=crop", aspect: "square" },
  { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop", aspect: "wide" },
  { url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80&auto=format&fit=crop", aspect: "square" },
  { url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80&auto=format&fit=crop", aspect: "tall" },
];

const STATS = [
  { value: 1500, suffix: "+", label: "Sessions Shot" },
  { value: 48, suffix: "", label: "Countries Visited" },
  { value: 8, suffix: " Yrs", label: "In Practice" },
  { value: 42, suffix: "+", label: "Awards Won" },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Aryan was the most effortless creative experience of our brand launch. The images stopped our entire marketing team in their tracks.",
    name: "Priya Sharma",
    title: "Creative Director, Asha Couture",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "Our wedding album feels like a film. Every image tells a story that neither of us could have framed. We keep going back to it years later.",
    name: "Rohan & Meera Nair",
    title: "Wedding Clients",
    location: "Kochi",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "The wildlife series exceeded every expectation. These images hung at our Nairobi gallery for three months and sold out on opening night.",
    name: "James Oduya",
    title: "Director, Savannah Collective",
    location: "Nairobi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "The portraits he made of our family are the most treasured objects we own. You can feel the emotion — not just see it.",
    name: "The Mehta Family",
    title: "Portrait Session",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&q=80&auto=format&fit=crop&crop=face",
  },
];

const INSTAGRAM = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80&auto=format&fit=crop",
];

// =====================================================

export default function GalleryPlusHome() {
  useSmoothScroll();
  const progress = useScrollProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={theme.root}>
      {/* Progress bar */}
      <div
        className={theme.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="home" />

      <Hero />
      <Marquee />
      <Intro />
      <Categories />
      <Showcase />
      <StickyStories />
      <HorizontalStrip />
      <Masonry />
      <Stats />
      <Testimonials />
      <InstagramGrid />
      <CtaBooking />

      {/* Floating WhatsApp button */}
      {mounted && <WhatsAppButton />}

      <Footer />
    </div>
  );
}

// =====================================================
// HERO — fullscreen cinematic opener
// =====================================================

function Hero() {
  const mouse = useMouseParallax();
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={styles.hero}>
      {/* Background image with parallax */}
      <div
        className={styles.heroBg}
        style={{
          transform: `scale(1.08) translate(${mouse.x * -12}px, ${mouse.y * -8}px)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTOGRAPHER.heroImg}
          alt=""
          className={`${styles.heroBgImg} ${loaded ? styles.heroBgLoaded : ""}`}
          onLoad={() => setLoaded(true)}
        />
        <div className={styles.heroBgOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className={styles.heroEyebrowLine} />
          <span>Fine Art Photography · 2018 —</span>
        </div>

        <h1 className={styles.heroHeadline}>
          <span className={styles.heroLine}>
            <span className={styles.heroLineInner}>{PHOTOGRAPHER.tagline1}</span>
          </span>
          <span className={styles.heroLine}>
            <span
              className={`${styles.heroLineInner} ${styles.heroItalic}`}
              style={{ animationDelay: "0.18s" }}
            >
              {PHOTOGRAPHER.tagline2}
            </span>
          </span>
          <span className={styles.heroLine}>
            <span
              className={styles.heroLineInner}
              style={{ animationDelay: "0.36s" }}
            >
              {PHOTOGRAPHER.tagline3}
            </span>
          </span>
        </h1>

        <p className={styles.heroIntro}>{PHOTOGRAPHER.intro}</p>

        <div className={styles.heroActions}>
          <Link href="/templates/gallery-plus/works" className={styles.heroCta}>
            Explore Portfolio
          </Link>
          <Link href="/templates/gallery-plus/contact" className={styles.heroCtaGhost}>
            Book a Session
          </Link>
        </div>
      </div>

      <div className={styles.heroMeta}>
        <div className={styles.heroMetaItem}>
          <span className={styles.heroMetaLabel}>Available For</span>
          <span className={styles.heroMetaValue}>Bookings · Q3 2026</span>
        </div>
        <div className={styles.heroMetaDivider} />
        <div className={styles.heroMetaItem}>
          <span className={styles.heroMetaLabel}>Based In</span>
          <span className={styles.heroMetaValue}>Mumbai, India</span>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollHintLine} />
        <span className={styles.scrollHintText}>SCROLL</span>
      </div>
    </section>
  );
}

// =====================================================
// MARQUEE
// =====================================================

function Marquee() {
  const text =
    "WEDDINGS · WILDLIFE · FASHION · PORTRAITS · TRAVEL · EVENTS · COMMERCIAL · CINEMATIC · STREET PHOTOGRAPHY · ";
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}

// =====================================================
// INTRO — statement block
// =====================================================

function Intro() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.intro} ref={ref}>
      <div className={styles.introInner}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          About the Work
        </p>
        <p
          className={`${styles.introCopy} ${visible ? styles.introCopyVisible : ""}`}
        >
          Every photograph is an act of{" "}
          <em className={styles.accentItalic}>belief</em> — that this exact
          configuration of light, emotion and time will never exist again.{" "}
          <em className={styles.accentItalic}>We document it forever.</em>
        </p>
      </div>
    </section>
  );
}

// =====================================================
// CATEGORIES — horizontal scroll card deck
// =====================================================

function Categories() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.categories}>
      <div className={styles.categoriesHead} ref={ref}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Disciplines
        </p>
        <div className={styles.categoriesHeadRight}>
          <h2 className={styles.sectionTitle}>
            Every genre, <em className={styles.accentItalic}>mastered.</em>
          </h2>
          <Link href="/templates/gallery-plus/works" className={styles.seeAllLink}>
            View all work →
          </Link>
        </div>
      </div>

      <div className={`${styles.categoriesGrid} ${visible ? styles.categoriesGridVisible : ""}`}>
        {CATEGORIES.map((cat, i) => (
          <CategoryCard key={cat.slug} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof CATEGORIES)[number];
  index: number;
}) {
  return (
    <Link
      href="/templates/gallery-plus/works"
      className={styles.catCard}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.catCardImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cat.img} alt={cat.label} loading="lazy" />
        <div className={styles.catCardOverlay} />
      </div>
      <div className={styles.catCardInfo}>
        <span className={styles.catCardCount}>{cat.count}</span>
        <span className={styles.catCardLabel}>{cat.label}</span>
        <span className={styles.catCardArrow}>→</span>
      </div>
    </Link>
  );
}

// =====================================================
// SHOWCASE — three large cinematic pieces
// =====================================================

function Showcase() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.showcase} id="work">
      <div className={styles.showcaseHead} ref={ref}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Selected Work
        </p>
        <h2 className={`${styles.sectionTitle} ${styles.showcaseTitle} ${visible ? styles.showcaseTitleVisible : ""}`}>
          Recent <em className={styles.accentItalic}>commissions.</em>
        </h2>
      </div>

      <div className={styles.showcaseList}>
        {SHOWCASE.map((item, i) => (
          <ShowcaseItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseItem({
  item,
  index,
}: {
  item: (typeof SHOWCASE)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.08);
  const isOdd = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`${styles.showcaseItem} ${isOdd ? styles.showcaseItemReverse : ""} ${visible ? styles.showcaseItemVisible : ""}`}
    >
      <div className={styles.showcaseImgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.img} alt={item.title} loading="lazy" className={styles.showcaseImg} />
        <div className={styles.showcaseImgOverlay} />
        <div className={styles.showcaseImgBadge}>
          <span>{item.id}</span>
        </div>
      </div>

      <div className={styles.showcaseMeta}>
        <p className={styles.showcaseCat}>{item.category} · {item.year}</p>
        <h3 className={styles.showcaseItemTitle}>{item.title}</h3>
        <p className={styles.showcaseLocation}>
          <span className={styles.showcaseLocationDot} />
          {item.location}
        </p>
        <p className={styles.showcaseDesc}>{item.desc}</p>
        <Link href="/templates/gallery-plus/works" className={styles.showcaseCta}>
          <span>View project</span>
          <span className={styles.showcaseCtaArrow}>↗</span>
        </Link>
      </div>
    </div>
  );
}

// =====================================================
// STICKY STORIES — image pins as text scrolls
// =====================================================

function StickyStories() {
  return (
    <section className={styles.storiesSection}>
      <div className={styles.storiesHead}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          The Process
        </p>
        <h2 className={styles.sectionTitle}>
          Three chapters,{" "}
          <em className={styles.accentItalic}>one lens.</em>
        </h2>
      </div>

      {STORIES.map((story, i) => (
        <StoryRow key={i} story={story} index={i} />
      ))}
    </section>
  );
}

function StoryRow({
  story,
  index,
}: {
  story: (typeof STORIES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.08);
  const isReverse = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`${styles.storyRow} ${isReverse ? styles.storyRowReverse : ""} ${visible ? styles.storyRowVisible : ""}`}
    >
      {/* Image */}
      <div className={styles.storyImgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={story.img}
          alt={story.title}
          loading="lazy"
          className={styles.storyImg}
        />
        <div className={styles.storyImgOverlay} />
        <span className={styles.storyImgTag}>{story.tag}</span>
      </div>

      {/* Text */}
      <div className={styles.storyText}>
        <p className={styles.storyNum}>0{index + 1}</p>
        <h3 className={styles.storyTitle}>{story.title}</h3>
        <p className={styles.storyBody}>{story.body}</p>
        <Link href="/templates/gallery-plus/works" className={styles.storyCta}>
          Explore {story.tag} →
        </Link>
      </div>
    </div>
  );
}

// =====================================================
// HORIZONTAL STRIP — drag to scroll gallery
// =====================================================

function HorizontalStrip() {
  const { ref, dragging, onMouseDown, onMouseMove, onMouseUp } =
    useDragScroll<HTMLDivElement>();
  const { ref: titleRef, visible } = useReveal<HTMLDivElement>();

  return (
    <section className={styles.strip}>
      <div className={styles.stripHead} ref={titleRef}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          From The Archives
        </p>
        <p className={`${styles.stripHint} ${visible ? styles.stripHintVisible : ""}`}>
          ← drag to explore →
        </p>
      </div>

      <div
        ref={ref}
        className={`${styles.stripTrack} ${dragging ? styles.stripDragging : ""}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {STRIP_IMAGES.map((url, i) => (
          <div
            key={i}
            className={`${styles.stripItem} ${i % 3 === 1 ? styles.stripItemTall : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="" loading="lazy" draggable={false} />
          </div>
        ))}
      </div>
    </section>
  );
}

// =====================================================
// MASONRY GALLERY
// =====================================================

function Masonry() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.masonry}>
      <div className={styles.masonryHead} ref={ref}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Gallery Preview
        </p>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.revealFade : ""}`}>
          A taste of{" "}
          <em className={styles.accentItalic}>the archive.</em>
        </h2>
      </div>

      <div className={styles.masonryGrid}>
        {MASONRY_IMAGES.map((img, i) => (
          <MasonryItem key={i} img={img} index={i} />
        ))}
      </div>
    </section>
  );
}

function MasonryItem({
  img,
  index,
}: {
  img: (typeof MASONRY_IMAGES)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);
  return (
    <div
      ref={ref}
      className={`${styles.masonryItem} ${styles[`masonryItem_${img.aspect}`]} ${visible ? styles.masonryItemVisible : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.url} alt="" loading="lazy" />
      <div className={styles.masonryOverlay} />
    </div>
  );
}

// =====================================================
// STATS — animated counters
// =====================================================

function Stats() {
  return (
    <section className={styles.stats}>
      <p className={`${styles.sectionTag} ${styles.statsTag}`}>
        <span className={styles.sectionTagDot} />
        By The Numbers
      </p>
      <div className={styles.statsGrid}>
        {STATS.map((s, i) => (
          <StatBlock key={i} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function StatBlock({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const { ref, count } = useCounter(stat.value);
  return (
    <div
      className={styles.statBlock}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p className={styles.statValue} ref={ref as React.Ref<HTMLParagraphElement>}>
        {count}
        {stat.suffix}
      </p>
      <p className={styles.statLabel}>{stat.label}</p>
    </div>
  );
}

// =====================================================
// TESTIMONIALS — auto-advancing fade slider
// =====================================================

function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.testimonials} ref={ref}>
      <p className={styles.sectionTag}>
        <span className={styles.sectionTagDot} />
        Client Stories
      </p>

      <div className={`${styles.testSlider} ${visible ? styles.testSliderVisible : ""}`}>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className={`${styles.testSlide} ${i === active ? styles.testSlideActive : ""}`}
            aria-hidden={i !== active}
          >
            <p className={styles.testQuoteMark}>&ldquo;</p>
            <p className={styles.testQuote}>{t.quote}</p>
            <div className={styles.testAuthor}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.avatar} alt={t.name} className={styles.testAvatar} />
              <div>
                <p className={styles.testName}>{t.name}</p>
                <p className={styles.testTitle}>
                  {t.title} · {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.testDots} role="tablist" aria-label="Testimonial navigation">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonial ${i + 1}`}
            className={`${styles.testDot} ${i === active ? styles.testDotActive : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}

// =====================================================
// INSTAGRAM PREVIEW
// =====================================================

function InstagramGrid() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.instagram} ref={ref}>
      <div className={styles.instagramHead}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Follow Along
        </p>
        <h2 className={styles.sectionTitle}>
          @galleryplus{" "}
          <em className={styles.accentItalic}>on Instagram</em>
        </h2>
        <a href="#" target="_blank" rel="noopener noreferrer" className={styles.seeAllLink}>
          Open Instagram ↗
        </a>
      </div>

      <div className={`${styles.instagramGrid} ${visible ? styles.instagramGridVisible : ""}`}>
        {INSTAGRAM.map((url, i) => (
          <a
            key={i}
            href="#"
            className={styles.instagramItem}
            style={{ animationDelay: `${i * 0.07}s` }}
            aria-label={`Instagram post ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="" loading="lazy" />
            <div className={styles.instagramOverlay}>
              <span className={styles.instagramIcon}>♡</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// =====================================================
// CTA BOOKING
// =====================================================

function CtaBooking() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBg} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=2000&q=80&auto=format&fit=crop"
          alt=""
        />
        <div className={styles.ctaBgOverlay} />
      </div>

      <div
        className={`${styles.ctaContent} ${visible ? styles.ctaContentVisible : ""}`}
        ref={ref}
      >
        <p className={styles.sectionTag} style={{ justifyContent: "center" }}>
          <span className={styles.sectionTagDot} />
          Start Here
        </p>
        <h2 className={styles.ctaHeadline}>
          Let&apos;s create something{" "}
          <em className={styles.accentItalic}>unforgettable.</em>
        </h2>
        <p className={styles.ctaCopy}>
          Limited sessions available. Reach out to discuss your vision and
          check availability for your date.
        </p>
        <div className={styles.ctaActions}>
          <Link href="/templates/gallery-plus/contact" className={styles.ctaBtn}>
            Book a Session
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20photography%20session"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaWa}
          >
            <span className={styles.ctaWaIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// FLOATING WHATSAPP BUTTON
// =====================================================

function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(id);
  }, []);

  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20a%20photography%20session"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.waFloat} ${show ? styles.waFloatVisible : ""}`}
      aria-label="Book via WhatsApp"
    >
      <span className={styles.waFloatRing} aria-hidden="true" />
      <svg
        className={styles.waFloatIcon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className={styles.waFloatLabel}>Book via WhatsApp</span>
    </a>
  );
}
