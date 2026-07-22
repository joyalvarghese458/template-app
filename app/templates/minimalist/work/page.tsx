import type { Metadata } from "next";
import {
  CaseStudyStrip,
  ClosingBanner,
  NotesSection,
  ProcessSection,
  WorkCollectionsSection,
} from "../blocks";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/minimalist/work");

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
