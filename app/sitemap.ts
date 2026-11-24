import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.beyondsands.in";
  const now = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    // Core & High-Priority AEO/GEO Landing Pages
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/rooms", priority: 0.95, changeFrequency: "weekly" },
    { path: "/one-day-picnic-kelva-beach", priority: 0.95, changeFrequency: "weekly" },
    { path: "/pure-veg-jain-dining", priority: 0.95, changeFrequency: "weekly" },
    { path: "/weddings-events-palghar", priority: 0.95, changeFrequency: "weekly" },
    { path: "/kelva-beach-location-guide", priority: 0.95, changeFrequency: "weekly" },

    // Blog Hub & Citation Magnet Articles
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog/best-pure-veg-resorts-kelva-beach", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog/kelva-beach-vs-alibaug-vs-dahanu-family-trip", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog/sheetla-devi-temple-kelva-guide", priority: 0.85, changeFrequency: "monthly" },

    // Supporting Core Pages
    { path: "/booking", priority: 0.9, changeFrequency: "daily" },
    { path: "/location", priority: 0.85, changeFrequency: "monthly" },
    { path: "/dining", priority: 0.85, changeFrequency: "monthly" },
    { path: "/reviews", priority: 0.85, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.75, changeFrequency: "weekly" },
    { path: "/offers", priority: 0.75, changeFrequency: "weekly" },
    { path: "/experiences", priority: 0.75, changeFrequency: "monthly" },
    { path: "/weddings-events", priority: 0.75, changeFrequency: "monthly" },

    // Policy & Legal
    { path: "/house-rules", priority: 0.6, changeFrequency: "monthly" },
    { path: "/cancellation", priority: 0.6, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
