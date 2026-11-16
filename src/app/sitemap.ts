import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thewellbeingmatters.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/podcast`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
