import type { MetadataRoute } from "next";
import { ghazalMasriPortfolio } from "@/portfolio/clients/ghazal-masri";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = ghazalMasriPortfolio.metadata.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl,
  };
}
