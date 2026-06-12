"use client";

import { useState } from "react";

export function useResumeActions(fileName: string, resumeText: string) {
  const [shareLabel, setShareLabel] = useState("Share");

  function downloadResume() {
    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function shareResume() {
    const shareData = {
      title: "Crisp Resume",
      text: "Take a look at this Crisp resume template.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareLabel("Shared");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel("Link Copied");
      }
    } catch {
      setShareLabel("Share Unavailable");
    } finally {
      window.setTimeout(() => setShareLabel("Share"), 1800);
    }
  }

  function printResume() {
    window.print();
  }

  return {
    shareLabel,
    downloadResume,
    shareResume,
    printResume,
  };
}
