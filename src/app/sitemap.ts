import type { MetadataRoute } from "next";
import { siteOrigin } from "./site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteOrigin,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteOrigin}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteOrigin}/politique-confidentialite`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
