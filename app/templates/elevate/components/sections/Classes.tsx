"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { classMedia, classTabs, type ClassTabId } from "../../data/media";
import RevealBlock from "../common/RevealBlock";
import SectionLabel from "../common/SectionLabel";
import PhotoCarousel from "../media/PhotoCarousel";
import VideoCard from "../media/VideoCard";
import styles from "../../styles.module.css";

export default function Classes() {
  const [activeTab, setActiveTab] = useState<ClassTabId>("all");

  const filteredItems = useMemo(() => {
    if (activeTab === "all") {
      return classMedia;
    }

    return classMedia.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="classes" className={styles.section}>
      <div className={styles.sectionInner}>
        <RevealBlock className={styles.sectionHeader}>
          <SectionLabel>Classes</SectionLabel>
          <h2 className={styles.sectionHeading}>Classes In Action</h2>
        </RevealBlock>

        <div className={styles.tabBar} role="tablist" aria-label="Class filters">
          {classTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.tabButtonActive : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div key={activeTab} className={styles.mediaGrid}>
          {filteredItems.map((item, index) => (
            <RevealBlock
              key={item.id}
              className={`${styles.mediaGridItem} ${
                "featured" in item && item.featured ? styles.mediaGridItemTall : ""
              } ${styles.mediaGridAnimate}`}
              delay={(index % 4 === 0 ? 0 : ((index % 4) * 100)) as 0 | 100 | 200 | 300}
            >
              {item.type === "carousel" ? (
                <PhotoCarousel
                  images={[...item.images]}
                  title={item.title}
                  duration={item.duration}
                />
              ) : null}

              {item.type === "video" ? (
                <VideoCard
                  title={item.title}
                  duration={item.duration}
                  thumbnail={item.thumbnail}
                  embedUrl={item.embedUrl}
                />
              ) : null}

              {item.type === "image" ? (
                <div className={styles.mediaCard}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 50vw, 33vw"
                    className={styles.mediaImage}
                  />
                  <div className={styles.mediaOverlay} />
                  <span className={styles.mediaBadge}>{item.title}</span>
                  <span className={styles.mediaDuration}>{item.duration}</span>
                </div>
              ) : null}
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
