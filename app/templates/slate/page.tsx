import type { Metadata } from "next";
import SlateResume from "./slate-resume";

export const metadata: Metadata = {
  title: "Slate Template",
  description:
    "Slate is a premium mobile-first digital resume dashboard with an editorial hero, recruiter-friendly hierarchy, and polished resume cards.",
};

export default function SlateTemplatePage() {
  return <SlateResume />;
}
