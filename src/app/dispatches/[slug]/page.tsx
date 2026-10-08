import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Calendar, Sparkles, Share2, Phone } from "lucide-react";
import { Metadata } from "next";
import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/supabase";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Dispatch Not Found | Kiran Singh Foundation",
    };
  }
  return {
    title: `${post.title} | Kiran Singh Foundation Directorate Press`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImageUrl],
    },
  };
}

export default async function DispatchDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const shareText = `Read "${post.title}" on the Kiran Singh Foundation Institutional Press:`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${post.title}`)}`;

  return (
    <article className="py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/dispatches"
          className="inline-flex items-center space-x-2 text-xs font-mono text-parchment-dim hover:text-lion-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Dispatches</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-parchment-dim">
          <span className="flex items-center space-x-1.5">
            <User className="w-3.5 h-3.5 text-lion-gold" />
            <span>{post.authorName}</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-parchment-dim" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </span>
          {post.isAiDrafted && (
            <span className="px-2.5 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold border border-lion-gold/30 flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Gemini 2.5 Structured</span>
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-parchment leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-parchment-muted leading-relaxed font-sans italic border-l-2 border-lion-gold pl-4 py-1">
          {post.summary}
        </p>
      </div>

      {/* Cover Image */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </div>

      {/* Article Body Content */}
      <div className="bezel-card">
        <div className="bezel-card-inner p-8 md:p-12 space-y-6 text-sm sm:text-base text-parchment-muted leading-relaxed font-sans">
          {/* Render markdown split by paragraphs */}
          {post.contentMarkdown.split("\n\n").map((chunk, idx) => {
            if (chunk.startsWith("# ")) {
              return null; // Skip main title as already displayed
            }
            if (chunk.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="font-serif text-xl sm:text-2xl font-bold text-parchment pt-4 text-left"
                >
                  {chunk.replace("### ", "")}
                </h3>
              );
            }
            if (chunk.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl sm:text-3xl font-bold text-parchment pt-6 text-left"
                >
                  {chunk.replace("## ", "")}
                </h2>
              );
            }
            if (chunk.startsWith("- ")) {
              const items = chunk.split("\n- ");
              return (
                <ul key={idx} className="space-y-2 pl-4">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="list-disc list-inside text-parchment-muted">
                      {item.replace(/^- /, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (chunk.startsWith("1. ")) {
              const items = chunk.split(/\n\d+\.\s/);
              return (
                <ol key={idx} className="space-y-2 pl-4 list-decimal list-inside text-parchment-muted">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item.replace(/^\d+\.\s/, "")}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {chunk}
              </p>
            );
          })}
        </div>
      </div>

      {/* Footer / Share Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-slate-charcoal border border-parchment/10 text-xs font-mono">
        <span className="text-parchment-dim">
          Kiran Singh Foundation Directorate Press Registry &bull; ISSN Applied
        </span>
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Share via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
