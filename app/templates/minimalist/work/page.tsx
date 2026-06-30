import type { Metadata } from "next";
import {
  CaseStudyStrip,
  ClosingBanner,
  NotesSection,
  ProcessSection,
  WorkCollectionsSection,
} from "../blocks";

export const metadata: Metadata = {
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
