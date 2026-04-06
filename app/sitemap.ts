import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://canadiancompliancebureau.com";

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
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
    {
      url: `${baseUrl}/resources/is-shill-bidding-illegal`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/how-to-report-auction-fraud`,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/auction-scam-red-flags`,
      lastModified: new Date("2026-01-10"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/ontario-consumer-protection-auctions`,
      lastModified: new Date("2025-11-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/how-auction-houses-manipulate-prices`,
      lastModified: new Date("2026-01-28"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/auction-house-refund-guide`,
      lastModified: new Date("2025-12-12"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/auction-fraud-canada-2026`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/documenting-auction-fraud`,
      lastModified: new Date("2025-10-18"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/consumer-complaint-guide-by-province`,
      lastModified: new Date("2025-09-15"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/auction-employee-misconduct-patterns`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
