import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://canadiancompliancebureau.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resources/employee-self-dealing`,
      lastModified: new Date("2025-03-14"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/bidder-rights`,
      lastModified: new Date("2025-01-22"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/compliance-report-2025`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
