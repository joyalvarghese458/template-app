import type { Metadata } from "next";
import PageClient from "./PageClient";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/profile-one");

export default function Page() {
  return <PageClient />;
}