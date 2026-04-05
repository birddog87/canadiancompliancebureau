import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { getPostBySlug, getAllSlugs } from "../../../lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://canadiancompliancebureau.com/blog/${slug}`,
      publishedTime: `${post.date}T00:00:00Z`,
      authors: ["CCB Research Division"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://canadiancompliancebureau.com/blog/${slug}`,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="font-serif text-xl font-semibold text-navy-700 mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-2">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p key={i} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }} />
      );
    }
    i++;
  }

  return elements;
}

function inlineMarkdown(text: string): string {
  return text
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-navy-600 underline hover:text-navy-800">$1</a>'
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "CCB Research Division",
      url: "https://canadiancompliancebureau.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Canadian Compliance Bureau",
      url: "https://canadiancompliancebureau.com",
    },
    description: post.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://canadiancompliancebureau.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
              <a
                href="/blog"
                className="text-warm-400 no-underline hover:text-navy-600 transition-colors"
              >
                News &amp; Analysis
              </a>
              <span>/</span>
              <span className="text-navy-600">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-3">
              {post.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-warm-500 text-sm">
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; CCB Research Division
            </p>
          </header>

          <div className="prose prose-warm max-w-none text-warm-700 leading-relaxed space-y-6">
            {renderMarkdown(post.content)}
          </div>

          <div className="mt-16 pt-8 border-t border-warm-200 flex items-center justify-between">
            <a
              href="/blog"
              className="text-sm text-warm-400 no-underline hover:text-navy-600 transition-colors"
            >
              &larr; All Posts
            </a>
            <a
              href="/#complaint"
              className="text-sm font-semibold text-red-600 no-underline hover:text-red-700 transition-colors"
            >
              File a Complaint &rarr;
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
