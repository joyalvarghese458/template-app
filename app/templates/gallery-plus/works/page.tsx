"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import Cursor from "../_components/Cursor";
import { useReveal, useScrollProgress, useSmoothScroll } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

// =====================================================
// EDITABLE CONTENT — swap categories/images here
// =====================================================

const CATEGORIES = [
  "All",
  "Weddings",
  "Wildlife",
  "Fashion",
  "Portraits",
  "Travel",
  "Events",
  "Commercial",
  "Cinematic",
  "Street",
] as const;

type Category = (typeof CATEGORIES)[number];

interface GalleryImage {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  year: string;
  img: string;
  aspect: "tall" | "wide" | "square";
}

const GALLERY: GalleryImage[] = [
  { id: "w01", title: "First Light", category: "Weddings", location: "Udaipur", year: "2025", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80&auto=format&fit=crop", aspect: "tall" },
  { id: "w02", title: "Golden Hour Vows", category: "Weddings", location: "Goa", year: "2025", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "w03", title: "The Palace Kiss", category: "Weddings", location: "Jaipur", year: "2024", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop", aspect: "square" },
  { id: "w04", title: "Rain Dance", category: "Weddings", location: "Kerala", year: "2024", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop", aspect: "tall" },

  { id: "wl01", title: "The Chase", category: "Wildlife", location: "Maasai Mara, Kenya", year: "2025", img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "wl02", title: "Silverback", category: "Wildlife", location: "Bwindi, Uganda", year: "2025", img: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=900&q=80&auto=format&fit=crop", aspect: "tall" },
  { id: "wl03", title: "Midnight Herd", category: "Wildlife", location: "Amboseli, Kenya", year: "2024", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80&auto=format&fit=crop", aspect: "square" },

  { id: "f01", title: "Noir Couture", category: "Fashion", location: "Milan, Italy", year: "2025", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop", aspect: "tall" },
  { id: "f02", title: "White Noise", category: "Fashion", location: "Paris, France", year: "2024", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "f03", title: "Desert Mirage", category: "Fashion", location: "Dubai", year: "2024", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80&auto=format&fit=crop", aspect: "square" },

  { id: "p01", title: "Old Wisdom", category: "Portraits", location: "Varanasi", year: "2025", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format&fit=crop", aspect: "tall" },
  { id: "p02", title: "Introspect", category: "Portraits", location: "Mumbai", year: "2025", img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "p03", title: "Young Light", category: "Portraits", location: "Rajasthan", year: "2024", img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=900&q=80&auto=format&fit=crop", aspect: "square" },

  { id: "t01", title: "Himalayan Dawn", category: "Travel", location: "Ladakh, India", year: "2025", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "t02", title: "Sacred Valley", category: "Travel", location: "Cusco, Peru", year: "2024", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop", aspect: "tall" },
  { id: "t03", title: "Monsoon Streets", category: "Travel", location: "Tokyo, Japan", year: "2024", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80&auto=format&fit=crop", aspect: "square" },

  { id: "e01", title: "Tech Summit", category: "Events", location: "Bangalore", year: "2025", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "e02", title: "Opening Night", category: "Events", location: "Mumbai", year: "2024", img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=900&q=80&auto=format&fit=crop", aspect: "tall" },

  { id: "c01", title: "Liquid Gold", category: "Commercial", location: "Mumbai Studio", year: "2025", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop", aspect: "square" },
  { id: "c02", title: "Brand DNA", category: "Commercial", location: "Delhi", year: "2025", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80&auto=format&fit=crop", aspect: "wide" },

  { id: "ci01", title: "Dusk Protocol", category: "Cinematic", location: "Mumbai", year: "2025", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
  { id: "ci02", title: "Smoke & Mirror", category: "Cinematic", location: "Delhi", year: "2024", img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=900&q=80&auto=format&fit=crop", aspect: "tall" },

  { id: "s01", title: "Rush Hour", category: "Street", location: "Mumbai", year: "2025", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80&auto=format&fit=crop", aspect: "square" },
  { id: "s02", title: "Chai Break", category: "Street", location: "Kolkata", year: "2024", img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=900&q=80&auto=format&fit=crop", aspect: "wide" },
];

const CATEGORY_HEROES: Record<string, string> = {
  All: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=2000&q=80&auto=format&fit=crop",
  Weddings: "https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=80&auto=format&fit=crop",
  Wildlife: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=2000&q=80&auto=format&fit=crop",
  Fashion: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=80&auto=format&fit=crop",
  Portraits: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=2000&q=80&auto=format&fit=crop",
  Travel: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&q=80&auto=format&fit=crop",
  Events: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2000&q=80&auto=format&fit=crop",
  Commercial: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2000&q=80&auto=format&fit=crop",
  Cinematic: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=2000&q=80&auto=format&fit=crop",
  Street: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2000&q=80&auto=format&fit=crop",
};

// =====================================================

export default function WorksPage() {
  useSmoothScroll();
  const progress = useScrollProgress();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [filterKey, setFilterKey] = useState(0);

  const filtered =
    activeCategory === "All"
      ? GALLERY
      : GALLERY.filter((img) => img.category === activeCategory);

  const handleFilter = (cat: Category) => {
    setActiveCategory(cat);
    setFilterKey((k) => k + 1);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalIdx === null) return;
      if (e.key === "Escape") setModalIdx(null);
      if (e.key === "ArrowRight") setModalIdx((i) => (i! + 1) % filtered.length);
      if (e.key === "ArrowLeft") setModalIdx((i) => (i! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalIdx, filtered.length]);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalIdx]);

  return (
    <div className={theme.root}>
      <div
        className={theme.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <Cursor />
      <div className={theme.vignette} aria-hidden="true" />
      <div className={theme.grain} aria-hidden="true" />

      <Nav current="works" />

      <WorksHero category={activeCategory} />

      <CategoryFilter
        activeCategory={activeCategory}
        onSelect={handleFilter}
        count={filtered.length}
      />

      <GalleryGrid
        images={filtered}
        filterKey={filterKey}
        onImageClick={(i) => setModalIdx(i)}
      />

      <BeforeAfter />

      {/* Fullscreen modal */}
      {modalIdx !== null && (
        <Modal
          images={filtered}
          index={modalIdx}
          onClose={() => setModalIdx(null)}
          onNext={() => setModalIdx((i) => (i! + 1) % filtered.length)}
          onPrev={() => setModalIdx((i) => (i! - 1 + filtered.length) % filtered.length)}
        />
      )}

      <Footer />
    </div>
  );
}

// =====================================================
// WORKS HERO
// =====================================================

function WorksHero({ category }: { category: Category }) {
  const heroImg = CATEGORY_HEROES[category] || CATEGORY_HEROES["All"];
  const [prevImg, setPrevImg] = useState(heroImg);
  const [currentImg, setCurrentImg] = useState(heroImg);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (heroImg === currentImg) return;
    setPrevImg(currentImg);
    setTransitioning(true);
    const id = setTimeout(() => {
      setCurrentImg(heroImg);
      setTransitioning(false);
    }, 500);
    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroImg]);

  return (
    <header className={styles.pageHero}>
      {/* Background crossfade */}
      <div className={styles.pageHeroBg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={prevImg} alt="" className={styles.pageHeroBgImg} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentImg}
          alt=""
          className={`${styles.pageHeroBgImg} ${styles.pageHeroBgTop} ${!transitioning ? styles.pageHeroBgVisible : ""}`}
        />
        <div className={styles.pageHeroBgOverlay} />
      </div>

      <div className={styles.pageHeroContent}>
        <p className={styles.pageHeroEyebrow}>
          <span className={styles.pageHeroEyebrowLine} />
          Portfolio Archive
        </p>
        <h1 className={styles.pageHeroTitle}>
          <span className={styles.pageHeroTitleLine}>
            <span className={styles.pageHeroTitleInner}>Selected</span>
          </span>
          <span className={styles.pageHeroTitleLine}>
            <span
              className={`${styles.pageHeroTitleInner} ${styles.pageHeroTitleItalic}`}
              style={{ animationDelay: "0.15s" }}
            >
              {category === "All" ? "Works." : `${category}.`}
            </span>
          </span>
        </h1>
        <p className={styles.pageHeroSub}>
          {category === "All"
            ? "An evolving record of commissions across all disciplines. Click any image to explore."
            : `${GALLERY.filter((i) => i.category === category).length} photographs from the ${category.toLowerCase()} archive.`}
        </p>
      </div>
    </header>
  );
}

// =====================================================
// CATEGORY FILTER BAR
// =====================================================

function CategoryFilter({
  activeCategory,
  onSelect,
  count,
}: {
  activeCategory: Category;
  onSelect: (c: Category) => void;
  count: number;
}) {
  return (
    <div className={styles.filterBar} role="navigation" aria-label="Filter by category">
      <div className={styles.filterInner}>
        <div className={styles.filterList}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.filterCount}>
          <span className={styles.filterCountNum}>{String(count).padStart(2, "0")}</span>
          <span className={styles.filterCountLabel}>images</span>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// GALLERY GRID
// =====================================================

function GalleryGrid({
  images,
  filterKey,
  onImageClick,
}: {
  images: GalleryImage[];
  filterKey: number;
  onImageClick: (index: number) => void;
}) {
  return (
    <section className={styles.gallery} key={filterKey} aria-label="Photography gallery">
      <div className={styles.galleryGrid}>
        {images.map((img, i) => (
          <GalleryCard
            key={img.id}
            img={img}
            index={i}
            onClick={() => onImageClick(i)}
          />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({
  img,
  index,
  onClick,
}: {
  img: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.05);

  return (
    <div
      ref={ref}
      className={`${styles.galleryCard} ${styles[`galleryCard_${img.aspect}`]} ${visible ? styles.galleryCardVisible : ""}`}
      style={{ transitionDelay: `${(index % 4) * 0.07}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${img.title} — ${img.category}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      data-cursor="expand"
    >
      <div className={styles.galleryCardInner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.img} alt={img.title} loading="lazy" className={styles.galleryCardImg} />
        <div className={styles.galleryCardOverlay} />
        <div className={styles.galleryCardInfo}>
          <span className={styles.galleryCardCat}>{img.category}</span>
          <h3 className={styles.galleryCardTitle}>{img.title}</h3>
          <p className={styles.galleryCardMeta}>{img.location} · {img.year}</p>
        </div>
        <div className={styles.galleryCardExpand} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// FULLSCREEN MODAL
// =====================================================

function Modal({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const img = images[index];

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label={`${img.title} fullscreen view`}
    >
      {/* Backdrop */}
      <div className={styles.modalBackdrop} onClick={onClose} aria-hidden="true" />

      {/* Image */}
      <div className={styles.modalImgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={img.id}
          src={img.img.replace("w=900", "w=1600")}
          alt={img.title}
          className={styles.modalImg}
        />
      </div>

      {/* Info panel */}
      <div className={styles.modalInfo}>
        <div>
          <p className={styles.modalCat}>{img.category}</p>
          <h2 className={styles.modalTitle}>{img.title}</h2>
          <p className={styles.modalMeta}>{img.location} · {img.year}</p>
        </div>
        <p className={styles.modalCounter}>
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
      </div>

      {/* Controls */}
      <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <button className={`${styles.modalArrow} ${styles.modalArrowPrev}`} onClick={onPrev} aria-label="Previous image">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className={`${styles.modalArrow} ${styles.modalArrowNext}`} onClick={onNext} aria-label="Next image">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

// =====================================================
// BEFORE / AFTER COMPARISON
// =====================================================

function BeforeAfter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <section className={styles.ba} ref={ref}>
      <div className={styles.baHead}>
        <p className={styles.sectionTag}>
          <span className={styles.sectionTagDot} />
          Before &amp; After
        </p>
        <h2 className={`${styles.sectionTitle} ${visible ? styles.baHeadVisible : ""}`}>
          The edit <em className={styles.accentItalic}>makes the image.</em>
        </h2>
        <p className={styles.baSub}>
          Drag the handle to reveal how professional post-processing transforms a raw capture.
        </p>
      </div>

      <div
        className={styles.baContainer}
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After (full) */}
        <div className={styles.baAfter}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=80&auto=format&fit=crop"
            alt="After editing"
          />
        </div>

        {/* Before (clipped) */}
        <div
          className={styles.baBefore}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=40&auto=format&fit=crop&sat=-100"
            alt="Before editing"
          />
          <div className={styles.baBeforeLabel}>BEFORE</div>
        </div>

        <div className={styles.baAfterLabel} aria-hidden="true">AFTER</div>

        {/* Drag handle */}
        <div
          className={styles.baHandle}
          style={{ left: `${sliderPos}%` }}
          aria-hidden="true"
        >
          <div className={styles.baHandleLine} />
          <div className={styles.baHandleKnob}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
