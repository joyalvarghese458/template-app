"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

import styles from "../../styles.module.css";

type VideoCardProps = {
  title: string;
  duration: string;
  thumbnail: string;
  embedUrl: string;
};

export default function VideoCard({
  title,
  duration,
  thumbnail,
  embedUrl,
}: VideoCardProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const onClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        dialog.close();
      }
    };

    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button type="button" className={styles.mediaCard} onClick={openModal}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 767px) 50vw, 33vw"
          className={styles.mediaImage}
        />
        <div className={styles.mediaOverlay} />
        <span className={styles.mediaBadge}>{title}</span>
        <span className={styles.mediaDuration}>{duration}</span>
        <span className={styles.playButton} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 6.5v11l9-5.5-9-5.5Z" />
          </svg>
        </span>
      </button>

      <dialog ref={dialogRef} className={styles.videoDialog} aria-labelledby={titleId}>
        <button
          type="button"
          className={styles.dialogClose}
          onClick={closeModal}
          aria-label="Close video"
        >
          ×
        </button>
        <div className={styles.videoDialogBody}>
          <h3 id={titleId} className={styles.dialogTitle}>
            {title}
          </h3>
          <div className={styles.videoFrame}>
            <iframe
              src={`${embedUrl}?autoplay=1&rel=0`}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
