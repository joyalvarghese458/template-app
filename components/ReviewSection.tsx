"use client";

import { useEffect, useRef, useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import type { Review } from "@/lib/types";

// ── Sub-components ──────────────────────────────────────────────────

function StarDisplay({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-sm" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
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
            star <= (hovered || value) ? "text-yellow-400" : "text-gray-500"
          }`}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function Avatar({ name, photoUrl }: { name: string; photoUrl: string | null }) {
  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={`${name}'s photo`}
        className="w-10 h-10 rounded-full object-cover border border-white/20 shrink-0"
      />
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-brand/40 border border-brand/30 flex items-center justify-center text-white font-bold text-sm shrink-0">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="shrink-0 w-72 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 select-none">
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={review.name} photoUrl={review.photo_url} />
        <div className="min-w-0">
          <p className="font-semibold text-white text-sm truncate">{review.name}</p>
          <StarDisplay count={review.stars} />
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
        {review.message}
      </p>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div className="shrink-0 w-72 h-44 bg-white/10 rounded-2xl animate-pulse" />
  );
}

// ── Main component ──────────────────────────────────────────────────

export default function ReviewSection() {
  // ── Carousel state
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // ── Form toggle state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  // ── Form field state
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  // Duplicate reviews for seamless loop; only animate with 3+ reviews
  const canScroll = reviews.length >= 3;
  const loopReviews = canScroll ? [...reviews, ...reviews] : reviews;
  // 5s per card so speed is consistent regardless of count
  const scrollDuration = `${reviews.length * 5}s`;

  // ── Photo selection
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError("Photo must be under 2 MB.");
      return;
    }

    setError("");
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  // ── Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Name and message are required.");
      return;
    }
    if (!stars) {
      setError("Please select a star rating.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      let photoUrl: string | null = null;
      if (photoFile) {
        photoUrl = await uploadToCloudinary(photoFile);
      }

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
          stars,
          photo_url: photoUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      // Prepend the new review to the carousel immediately
      setReviews((prev) => [data as Review, ...prev]);

      // Reset form
      setName("");
      setMessage("");
      setStars(0);
      setPhotoFile(null);
      setPhotoPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsFormOpen(false);
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0a0a1a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ──────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="text-brand-light text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            What Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Real Reviews from Real Clients
          </h2>
        </div>

        {/* ── Carousel ────────────────────────────────────────────── */}
        <div className="overflow-hidden">
          {isLoading ? (
            <div className="flex gap-5 pb-2">
              {Array.from({ length: 4 }, (_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              No reviews yet — be the first to leave one!
            </p>
          ) : (
            <div
              className={`flex gap-5 pb-2 ${canScroll ? "cursor-pointer select-none" : ""}`}
              style={
                canScroll
                  ? {
                      animation: `infinite-scroll ${scrollDuration} linear infinite`,
                      animationPlayState: isPaused || isLocked ? "paused" : "running",
                    }
                  : {}
              }
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => canScroll && setIsLocked((v) => !v)}
            >
              {loopReviews.map((review, i) => (
                <ReviewCard key={`${review.id}-${i}`} review={review} />
              ))}
            </div>
          )}
        </div>

        {/* ── Leave a review ──────────────────────────────────────── */}
        <div className="mt-12 text-center">
          {success ? (
            <div className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl px-6 py-4 text-sm">
              🎉 Thank you! Your review is now live in the carousel.
            </div>
          ) : (
            <>
              {/* Toggle button */}
              <button
                onClick={() => setIsFormOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Leave a Review ✍️
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isFormOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Collapsible form */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isFormOpen
                    ? "max-h-[720px] opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-5"
                >
                  {/* Error banner */}
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/30 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your experience…"
                      required
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand/60 focus:ring-1 focus:ring-brand/30 transition-colors resize-none"
                    />
                  </div>

                  {/* Star rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Rating <span className="text-red-400">*</span>
                    </label>
                    <StarPicker value={stars} onChange={setStars} />
                  </div>

                  {/* Photo upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Profile photo{" "}
                      <span className="text-gray-500 font-normal">
                        (optional · max 2 MB)
                      </span>
                    </label>
                    <div className="flex items-center gap-3 flex-wrap">
                      {photoPreview && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-12 h-12 rounded-full object-cover border border-white/20"
                        />
                      )}
                      <label className="cursor-pointer">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 hover:bg-white/20 transition-colors select-none">
                          📷{" "}
                          {photoPreview ? "Change photo" : "Upload photo"}
                        </span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #818cf8)",
                    }}
                  >
                    {isSubmitting ? "Submitting…" : "Submit Review"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
