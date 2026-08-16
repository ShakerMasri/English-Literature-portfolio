import type { MetadataRoute } from "next";
import { ghazalMasriPortfolio } from "@/portfolio/clients/ghazal-masri";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ghazalMasriPortfolio.metadata.siteUrl,
    },
  ];
}
