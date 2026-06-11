import type { Metadata } from "next";
import SlateResume from "./slate-resume";

export const metadata: Metadata = {
  title: "Slate Template",
  description:
    "Slate is a professional mobile-first ATS-style resume template with clean recruiter hierarchy, focused sections, and polished digital presentation.",
};

export default function SlateTemplatePage() {
  return <SlateResume />;
}
