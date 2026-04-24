import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");
export const POSTS_PER_PAGE = 2;

export type BlogPost = {
  slug: string;
  title: string;
  titleTh: string;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  excerptTh: string;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};

function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((name) => fs.statSync(path.join(BLOGS_DIR, name)).isDirectory());
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllSlugs();
  return slugs
    .map((slug) => {
      const filePath = path.join(BLOGS_DIR, slug, "index.md");
      if (!fs.existsSync(filePath)) return null;
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        titleTh: data.titleTh ?? "",
        date: data.date ?? "",
        author: data.author ?? "",
        coverImage: data.coverImage ?? "",
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? "",
        excerptTh: data.excerptTh ?? "",
      } satisfies BlogPost;
    })
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as BlogPost[];
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOGS_DIR, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    titleTh: data.titleTh ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    coverImage: data.coverImage ?? "",
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    excerptTh: data.excerptTh ?? "",
    content,
  };
}

export function getTotalPages(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): BlogPost[] {
  const all = getAllPosts();
  const start = (page - 1) * POSTS_PER_PAGE;
  return all.slice(start, start + POSTS_PER_PAGE);
}
