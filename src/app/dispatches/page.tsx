import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, Sparkles, ArrowUpRight, User } from "lucide-react";
import { fetchBlogPosts } from "@/lib/supabase";

export const revalidate = 60;

export default async function DispatchesPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-16 bg-porcelain">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Institutional Press & Archives</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Editorial <span className="italic text-lion-gold font-light">Dispatches</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase font-semibold">
          Ethological Research &bull; Scholar Field Reports &bull; Community Chronicles
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Thought leadership grounded in Late Kiran Singh ji’s ethological science, student incubation milestones,
          and frontline animal rescue reports.
        </p>
      </div>

      {/* Dispatches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/dispatches/${post.slug}`}
            className="block bg-white border border-border rounded-2xl p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 group"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Cover Image */}
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5 border border-border bg-slate-50">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {post.isAiDrafted && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono flex items-center space-x-1.5 shadow-sm font-medium">
                      <Sparkles className="w-3 h-3 text-lion-gold" />
                      <span>Gemini 2.5 Structured</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3 text-xs font-mono text-slate mb-2">
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.authorName}</span>
                  </span>
                  <span>&bull;</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-obsidian leading-snug group-hover:text-lion-gold-dark transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mt-3 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-lion-gold-dark font-medium">
                <span>Read Full Dispatch</span>
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-obsidian" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
