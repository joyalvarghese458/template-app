"use client";

import { useEffect, useRef, useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import type { Review } from "@/lib/types";

// ── Sub-components ──────────────────────────────────────────────────

function StarDisplay({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand text-sm" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "" : "opacity-25"}>★</span>
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1" role="group" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className={`text-2xl transition-all duration-100 hover:scale-125 ${
            star <= (hovered || value) ? "text-brand" : "text-ink/25"
          }`}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >★</button>
      ))}
    </div>
  );
}

function Avatar({ name, photoUrl }: { name: string; photoUrl: string | null }) {
  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={photoUrl} alt={`${name}'s photo`} className="w-10 h-10 rounded-full object-cover border border-ink/15 shrink-0" />
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center text-ink font-bold text-sm shrink-0">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ review, onClick }: { review: Review; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="shrink-0 w-72 bg-canvas-bg border border-ink/10 rounded-2xl p-5 select-none shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:border-brand/40 hover:shadow-[0_4px_20px_-8px_rgba(0,119,181,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={review.name} photoUrl={review.photo_url} />
        <div className="min-w-0">
          <p className="font-semibold text-ink text-sm truncate">{review.name}</p>
          <StarDisplay count={review.stars} />
        </div>
      </div>
      <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">{review.message}</p>
    </article>
  );
}

function SkeletonCard() {
  return <div className="shrink-0 w-72 h-44 bg-ink/5 rounded-2xl animate-pulse" />;
}

// ── Main component ──────────────────────────────────────────────────

const COPIES = 3; // 3 copies — start in the middle one for drag headroom in both directions

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [focusedReview, setFocusedReview] = useState<Review | null>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Carousel ────────────────────────────────────────────────────
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  // posRef: current translateX (px). Auto-scroll keeps it in [-2*sw, -sw).
  // Drag clamps to [-2*sw, 0] so there is always real content visible.
  const posRef = useRef(0);
  const swRef = useRef(0); // width of one review set
  const dragRef = useRef({ startX: 0, startPos: 0, dragging: false, moved: false });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/reviews");
        const data = await r.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch {
        // ignore
      }
      setIsLoading(false);
    })();
  }, []);

  const canScroll = reviews.length >= 3;
  // 3 identical copies so user can drag into adjacent copy without seeing empty space
  const loopReviews = canScroll ? Array.from({ length: COPIES }, () => reviews).flat() : reviews;

  useEffect(() => {
    if (!canScroll) return;
    cancelAnimationFrame(rafRef.current);

    const initFrame = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track || track.scrollWidth === 0) return;

      const sw = track.scrollWidth / COPIES;
      swRef.current = sw;
      // Start in the middle copy so the user has headroom to drag in either direction
      posRef.current = -sw;
      track.style.transform = `translateX(${-sw}px)`;

      const tick = () => {
        if (!pausedRef.current) {
          posRef.current -= 0.7;
          // Keep within the middle copy range: [-2*sw, -sw)
          if (posRef.current <= -sw * 2) posRef.current += sw;
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${posRef.current}px)`;
          }
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(initFrame);
      cancelAnimationFrame(rafRef.current);
    };
  }, [canScroll, reviews.length]);

  const scheduleResume = () => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => { pausedRef.current = false; }, 1500);
  };

  const closeFocusedReview = () => {
    setFocusedReview(null);
    scheduleResume();
  };

  // Shared position update for both mouse and touch drag
  const applyDrag = (clientX: number) => {
    const sw = swRef.current;
    if (!sw) return;
    const dx = clientX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    // Clamp to [-2*sw, 0]: always real content, no empty-space gap, no wrap jump
    const newPos = Math.max(-sw * 2, Math.min(0, dragRef.current.startPos + dx));
    posRef.current = newPos;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${newPos}px)`;
  };

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragRef.current = { startX: e.pageX, startPos: posRef.current, dragging: true, moved: false };
    pausedRef.current = true;
    clearTimeout(resumeTimerRef.current);
    if (outerRef.current) outerRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return;
    applyDrag(e.pageX);
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
    if (outerRef.current) outerRef.current.style.cursor = "";
    scheduleResume();
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    dragRef.current = { startX: t.pageX, startPos: posRef.current, dragging: true, moved: false };
    pausedRef.current = true;
    clearTimeout(resumeTimerRef.current);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return;
    applyDrag(e.touches[0].pageX);
  };
  const onTouchEnd = () => {
    dragRef.current.dragging = false;
    scheduleResume();
  };

  // Form handlers
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Please select an image file."); return; }
    if (file.size > 2 * 1024 * 1024) { setError("Photo must be under 2 MB."); return; }
    setError("");
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) { setError("Name and message are required."); return; }
    if (!stars) { setError("Please select a star rating."); return; }
    setIsSubmitting(true);
    setError("");
    try {
      let photoUrl: string | null = null;
      if (photoFile) photoUrl = await uploadToCloudinary(photoFile);
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), stars, photo_url: photoUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setReviews((prev) => [data as Review, ...prev]);
      setName(""); setMessage(""); setStars(0); setPhotoFile(null); setPhotoPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsFormOpen(false);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="bg-canvas-bg py-20 border-y border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
              What Clients Say
            </p>
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">
            Real reviews from{" "}
            <span className="italic text-brand">real clients</span>
          </h2>
          <p className="mt-2 text-xs text-ink-soft/60">Click any review to read in full · Drag to scroll manually</p>
        </div>

        {/* ── Carousel ───────────────────────────────────────────── */}
        <div
          ref={outerRef}
          className="overflow-hidden cursor-grab select-none"
          onMouseEnter={() => { pausedRef.current = true; clearTimeout(resumeTimerRef.current); }}
          onMouseLeave={() => {
            dragRef.current.dragging = false;
            if (outerRef.current) outerRef.current.style.cursor = "";
            scheduleResume();
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {isLoading ? (
            <div className="flex gap-5 pb-2">
              {Array.from({ length: 4 }, (_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-ink-soft py-8">No reviews yet — be the first to leave one!</p>
          ) : (
            <div ref={trackRef} className="flex gap-5 pb-2 w-max">
              {loopReviews.map((review, i) => (
                <ReviewCard
                  key={`${review.id}-${i}`}
                  review={review}
                  onClick={() => {
                    if (dragRef.current.moved) { dragRef.current.moved = false; return; }
                    setFocusedReview(focusedReview?.id === review.id ? null : review);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Leave a review ─────────────────────────────────────── */}
        <div className="mt-12 text-center">
          {success ? (
            <div className="inline-block bg-brand/10 border border-brand/30 text-brand-dark rounded-xl px-6 py-4 text-sm">
              ✦ Thank you! Your review is now live in the carousel.
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsFormOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink border border-ink/20 rounded-md hover:bg-ink/5 hover:border-ink/40 transition-all duration-200"
              >
                Leave a Review
                <svg className={`w-4 h-4 transition-transform duration-300 ${isFormOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFormOpen ? "max-h-[720px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}>
                <form onSubmit={handleSubmit} noValidate className="max-w-lg mx-auto bg-canvas-bg border border-ink/10 rounded-2xl p-6 text-left space-y-5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.6)]">
                  {error && <div className="bg-red-500/10 border border-red-500/30 text-red-700 rounded-lg px-4 py-3 text-sm">{error}</div>}
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Name <span className="text-red-600">*</span></label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full bg-canvas-bg border border-ink/20 rounded-lg px-4 py-2.5 text-ink placeholder-ink/40 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Message <span className="text-red-600">*</span></label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your experience…" required rows={3} className="w-full bg-canvas-bg border border-ink/20 rounded-lg px-4 py-2.5 text-ink placeholder-ink/40 text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Rating <span className="text-red-600">*</span></label>
                    <StarPicker value={stars} onChange={setStars} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">Profile photo <span className="text-ink/50 font-normal">(optional · max 2 MB)</span></label>
                    <div className="flex items-center gap-3 flex-wrap">
                      {photoPreview && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={photoPreview} alt="Preview" className="w-12 h-12 rounded-full object-cover border border-ink/15" />
                      )}
                      <label className="cursor-pointer">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-canvas-bg border border-ink/20 rounded-lg text-sm text-ink hover:bg-ink/5 transition-colors select-none">
                          {photoPreview ? "Change photo" : "Upload photo"}
                        </span>
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="sr-only" />
                      </label>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-md font-semibold text-canvas-bg bg-brand hover:bg-brand/90 text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0">
                    {isSubmitting ? "Submitting…" : "Submit Review"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Focused review overlay ─────────────────────────────────── */}
      {focusedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeFocusedReview}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          <article
            className="relative z-10 bg-canvas-bg border border-brand/30 rounded-2xl p-6 w-full max-w-sm shadow-[0_24px_64px_-12px_rgba(0,0,0,0.5)]"
            style={{ animation: "fadeInUp 0.25s ease-out both" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeFocusedReview}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-ink/40 hover:text-ink hover:bg-ink/5 transition-all"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3 mb-4 pr-8">
              <Avatar name={focusedReview.name} photoUrl={focusedReview.photo_url} />
              <div className="min-w-0">
                <p className="font-semibold text-ink">{focusedReview.name}</p>
                <StarDisplay count={focusedReview.stars} />
              </div>
            </div>
            <p className="text-ink-soft leading-relaxed text-sm sm:text-base">{focusedReview.message}</p>
          </article>
        </div>
      )}
    </section>
  );
}
