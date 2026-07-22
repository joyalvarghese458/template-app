import type { Metadata } from "next";
import SlateResume from "./slate-resume";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/slate");

export default function SlateTemplatePage() {
  return <SlateResume />;
}
