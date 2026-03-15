import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE_URL = "https://amanrwt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts("blog").map((post) => ({
    url: `${BASE_URL}/blog/${(post as { slug: string }).slug}`,
    lastModified: new Date((post as { date: string }).date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPosts = getAllPosts("projects").map((post) => ({
    url: `${BASE_URL}/projects/${(post as { slug: string }).slug}`,
    lastModified: new Date((post as { date: string }).date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...blogPosts,
    ...projectPosts,
  ];
}
