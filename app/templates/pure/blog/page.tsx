"use client";

import Link from "next/link";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { useReveal } from "../_components/hooks";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

const FEATURED = {
  tag: "Featured",
  title: "How to design a user-centric mobile application?",
  excerpt:
    "A lightweight, opinionated playbook for shipping mobile experiences that users actually return to — built from five years of client work across fintech, health, and consumer apps.",
  read: "10 mins read",
  date: "Jul 10, 2022",
  img: "https://images.unsplash.com/photo-1611532736417-1e3c87ac8c64?w=1400&q=80&auto=format&fit=crop",
};

const POSTS = [
  {
    day: "09",
    date: "Jul 2022",
    tag: "Process",
    title: "From sketch to ship — a lightweight design workflow",
    read: "7 mins read",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=80&auto=format&fit=crop",
  },
  {
    day: "06",
    date: "Jul 2022",
    tag: "Mobile",
    title: "Designing dashboards that don't overwhelm",
    read: "8 mins read",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  },
  {
    day: "28",
    date: "Jun 2022",
    tag: "Identity",
    title: "Why your brand needs a typography system",
    read: "6 mins read",
    img: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=900&q=80&auto=format&fit=crop",
  },
  {
    day: "21",
    date: "Jun 2022",
    tag: "Motion",
    title: "Micro-interactions that feel premium, not gimmicky",
    read: "5 mins read",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80&auto=format&fit=crop",
  },
  {
    day: "14",
    date: "Jun 2022",
    tag: "Web",
    title: "Color systems for accessible-but-bold portfolios",
    read: "9 mins read",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80&auto=format&fit=crop",
  },
  {
    day: "07",
    date: "Jun 2022",
    tag: "Career",
    title: "Pricing freelance design without the awkwardness",
    read: "11 mins read",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop",
  },
];

export default function PureBlog() {
  return (
    <div className={theme.root}>
      <Nav current="blog" />

      <section className={styles.banner}>
        <span className={styles.bannerGlow} aria-hidden="true" />
        <h1 className={styles.bannerTitle}>Blog</h1>
        <div className={styles.crumbs}>
          <Link href="/templates/pure">Home</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          <span>Blog</span>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredInner}>
          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FEATURED.img} alt={FEATURED.title} />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.featuredTag}>{FEATURED.tag}</span>
              <h2 className={styles.featuredTitle}>{FEATURED.title}</h2>
              <p className={styles.featuredExcerpt}>{FEATURED.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>
                  <strong>{FEATURED.date}</strong>
                </span>
                <span>·</span>
                <span>{FEATURED.read}</span>
              </div>
              <Link href="/templates/pure/blog" className={styles.featuredCta}>
                Read article
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.posts}>
        <div className={styles.postsInner}>
          {POSTS.map((p, i) => (
            <PostCard key={p.title} post={p} index={i} />
          ))}
        </div>
      </section>

      <Footer
        ctaTitle="Have a project?"
        ctaLabel="Let's Talk"
      />
    </div>
  );
}

function PostCard({
  post,
  index,
}: {
  post: (typeof POSTS)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      href="/templates/pure/blog"
      ref={ref}
      className={`${styles.post} ${visible ? styles.postVisible : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className={styles.postImage}>
        <div className={styles.postDate}>
          <strong>{post.day}</strong>
          <span>{post.date}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt={post.title} />
      </div>
      <div className={styles.postBody}>
        <span className={styles.postTag}>{post.tag}</span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.postFoot}>
          <span className={styles.postRead}>{post.read}</span>
          <span className={styles.postArrow}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
