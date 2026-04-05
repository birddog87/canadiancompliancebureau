import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getAllPosts } from "../../lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Analysis",
  description:
    "The latest news, analysis, and commentary on online auction compliance, consumer protection, and marketplace integrity in Canada.",
  openGraph: {
    type: "website",
    title: "News & Analysis | Canadian Compliance Bureau",
    description:
      "The latest news, analysis, and commentary on online auction compliance, consumer protection, and marketplace integrity in Canada.",
    url: "https://canadiancompliancebureau.com/blog",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a
                href="/"
                className="text-warm-400 no-underline hover:text-navy-600 transition-colors"
              >
                Home
              </a>
              <span>/</span>
              <span className="text-navy-600">News &amp; Analysis</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-3">
              News &amp; Analysis
            </h1>
            <p className="text-warm-500 text-[15px]">
              Commentary on auction compliance, enforcement actions, and
              consumer protection developments across Canada.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-warm-400 text-sm">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-warm-100 pb-8 last:border-0"
                >
                  <a
                    href={`/blog/${post.slug}`}
                    className="no-underline group"
                  >
                    <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-2">
                      {post.category}
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-navy-800 leading-snug mb-2 group-hover:text-navy-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-warm-500 text-[14.5px] leading-relaxed mb-2">
                      {post.description}
                    </p>
                    <p className="text-xs text-warm-400">
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
