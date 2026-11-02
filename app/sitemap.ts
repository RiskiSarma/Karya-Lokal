import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${siteUrl}${p}`;
  return [
    { url: u("/"), alternates: { languages: { id: u("/"), en: u("/en") } } },
    { url: u("/en") },
    { url: u("/blog") },
    ...posts.map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.date })),
  ];
}
