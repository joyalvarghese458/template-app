import type { Metadata } from "next";
import {
  ClosingBanner,
  ContactSection,
  FaqSection,
  NotesSection,
  TestimonialBand,
} from "../blocks";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/minimalist/contact");

export default function MinimalistContactPage() {
  return (
    <>
      <ContactSection />
      <TestimonialBand />
      <NotesSection />
      <FaqSection />
      <ClosingBanner />
    </>
  );
}
