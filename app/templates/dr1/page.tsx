import { permanentRedirect } from "next/navigation";
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/dr1");

export default function LegacySwiftRedirectPage() {
  permanentRedirect("/templates/swift");
}
