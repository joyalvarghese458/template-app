import type { Metadata } from "next";
import PageClient from "./PageClient";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/designer-pro/work");

export default function Page() {
  return <PageClient />;
}