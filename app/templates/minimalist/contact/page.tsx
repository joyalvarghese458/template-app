import type { Metadata } from "next";
import {
  ClosingBanner,
  ContactSection,
  FaqSection,
  NotesSection,
  TestimonialBand,
} from "../blocks";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://myportfoliowebsite.com/templates/minimalist/contact",
  },
  title: "Minimalist - Contact",
};

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
