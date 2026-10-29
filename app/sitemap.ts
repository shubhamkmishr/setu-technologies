import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");
  if (!siteUrl) return [];

  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}