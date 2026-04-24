import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import type { Metadata } from "next";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — DevHubs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  return result.toString();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="container mx-auto px-4 py-24 mt-8 relative z-10 max-w-3xl">
        {/* Back */}
        <Link
          href="/blogs/page/1"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Cover image */}
        {post.coverImage && (
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 pb-8 border-b border-slate-800">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span>{post.author}</span>
        </div>

        {/* Content */}
        <article
          className="prose prose-invert prose-blue max-w-none
            prose-headings:font-bold prose-headings:text-white
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-code:text-cyan-300 prose-code:bg-slate-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-slate-800/80 prose-pre:border prose-pre:border-slate-700/50 prose-pre:rounded-xl
            prose-blockquote:border-blue-500 prose-blockquote:text-slate-400
            prose-strong:text-white prose-li:text-slate-300"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>

      <Footer />
    </div>
  );
}
