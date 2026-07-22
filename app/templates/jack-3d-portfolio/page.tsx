import JackPortfolio from './JackPortfolio';
import { metadataForRoute } from "@/app/seo";

export const metadata = metadataForRoute("/templates/jack-3d-portfolio");

export default function Page() {
    return <JackPortfolio />;
}