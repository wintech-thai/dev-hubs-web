import { MetadataRoute } from "next";
import { getAllPosts, getTotalPages } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev-hubs.com";

  const staticRoutes = ["/", "/services", "/events", "/privacy"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  // Blog listing pages — static links for SEO
  const totalPages = getTotalPages();
  const paginationEntries: MetadataRoute.Sitemap = Array.from(
    { length: totalPages },
    (_, i) => ({
      url: `${baseUrl}/blogs/page/${i + 1}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  // Individual blog posts
  const posts = getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...paginationEntries, ...postEntries];
}
