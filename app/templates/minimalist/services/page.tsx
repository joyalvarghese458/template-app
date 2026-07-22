import type { Metadata } from "next";
import {
  ClosingBanner,
  FaqSection,
  NotesSection,
  ProcessSection,
  ServicesSection,
} from "../blocks";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/minimalist/services");

export default function MinimalistServicesPage() {
  return (
    <>
      <ServicesSection />
      <ProcessSection />
      <NotesSection />
      <FaqSection />
      <ClosingBanner />
    </>
  );
}
