import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/brand-lab"],
    },
    sitemap: "https://www.myportfoliowebsite.com/sitemap.xml",
  };
}
