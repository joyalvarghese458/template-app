import type { Metadata } from "next";
import {
  CaseStudyStrip,
  ClosingBanner,
  NotesSection,
  ProcessSection,
  WorkCollectionsSection,
} from "../blocks";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/minimalist/work",
  },
  title: "Minimalist - Work",
};

export default function MinimalistWorkPage() {
  return (
    <>
      <CaseStudyStrip />
      <WorkCollectionsSection />
      <ProcessSection />
      <NotesSection />
      <ClosingBanner />
    </>
  );
}
