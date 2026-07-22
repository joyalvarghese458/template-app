import type { Metadata } from "next";
import Serenity from "./serenity";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/serenity");

export default function SerenityPage() {
  return <Serenity />;
}
