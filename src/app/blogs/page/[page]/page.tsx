import { getAllPosts, getTotalPages, getPostsForPage, POSTS_PER_PAGE } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/modules/home/components/nav-bar";
import Footer from "@/modules/home/components/footer";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ page: string }> };

export async function generateStaticParams() {
  const total = getTotalPages();
  return Array.from({ length: total }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `DevHubs Blog — Page ${page}`,
    description: "DevSecOps, Kubernetes, Cloud Native articles from DevHubs",
  };
}

export default async function BlogListPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);
  const totalPages = getTotalPages();

  if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) notFound();

  const posts = getPostsForPage(pageNum);
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-slate-950">
      <div className="fixed top-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <Navbar />

      <main className="container mx-auto px-4 py-24 mt-8 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dev<span className="text-blue-400"> Hub</span>
            <br />
            Blog
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Insights on DevSecOps, Kubernetes, Cloud Native, and enterprise infrastructure
          </p>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{allPosts.length}</div>
              <div className="text-slate-400 text-sm mt-1">Articles</div>
            </div>
            <div className="w-px h-10 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{totalPages}</div>
              <div className="text-slate-400 text-sm mt-1">Pages</div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6 mb-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Cover image */}
                {post.coverImage && (
                  <div className="md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
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

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-slate-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Static pagination */}
        <div className="flex items-center justify-center gap-2">
          {pageNum > 1 ? (
            <Link
              href={`/blogs/page/${pageNum - 1}`}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-blue-500/40 text-slate-300 hover:text-white rounded-lg text-sm transition-all"
            >
              <ArrowLeft size={14} /> Previous
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/20 border border-slate-700/20 text-slate-600 rounded-lg text-sm cursor-not-allowed">
              <ArrowLeft size={14} /> Previous
            </span>
          )}

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blogs/page/${p}`}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                  p === pageNum
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 text-slate-400 hover:text-white"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>

          {pageNum < totalPages ? (
            <Link
              href={`/blogs/page/${pageNum + 1}`}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-blue-500/40 text-slate-300 hover:text-white rounded-lg text-sm transition-all"
            >
              Next <ArrowRight size={14} />
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/20 border border-slate-700/20 text-slate-600 rounded-lg text-sm cursor-not-allowed">
              Next <ArrowRight size={14} />
            </span>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
