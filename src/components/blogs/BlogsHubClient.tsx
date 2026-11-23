"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Newspaper,
  Search,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Clock,
  User,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  X,
  Sparkles,
} from "lucide-react";
import type { BlogPost } from "@/lib/data/foundation-data";

interface Props {
  initialPosts: BlogPost[];
  defaultCategory?: string;
  baseRoute?: string; // "/blogs" or "/dispatches"
}

type CategoryFilter = "all" | "student_research" | "scholar_monograph" | "editorial_dispatch" | "canine_welfare";

export default function BlogsHubClient({
  initialPosts,
  defaultCategory = "all",
  baseRoute = "/blogs",
}: Props) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    (defaultCategory as CategoryFilter) || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Publications", count: initialPosts.length, icon: BookOpen },
    {
      id: "student_research",
      label: "Student Research Papers",
      count: initialPosts.filter((p) => p.category === "student_research").length,
      icon: GraduationCap,
    },
    {
      id: "scholar_monograph",
      label: "Scholar Monographs",
      count: initialPosts.filter((p) => p.category === "scholar_monograph").length,
      icon: FileText,
    },
    {
      id: "editorial_dispatch",
      label: "Directorate Dispatches",
      count: initialPosts.filter((p) => p.category === "editorial_dispatch").length,
      icon: Newspaper,
    },
    {
      id: "canine_welfare",
      label: "Canine Welfare & Science",
      count: initialPosts.filter((p) => p.category === "canine_welfare").length,
      icon: HeartPulse,
    },
  ];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "student_research" && post.category !== "student_research") {
          return false;
        }
        if (selectedCategory === "scholar_monograph" && post.category !== "scholar_monograph") {
          return false;
        }
        if (selectedCategory === "editorial_dispatch" && post.category !== "editorial_dispatch") {
          return false;
        }
        if (selectedCategory === "canine_welfare" && post.category !== "canine_welfare") {
          return false;
        }
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inTitle = post.title.toLowerCase().includes(q);
      const inSummary = post.summary.toLowerCase().includes(q);
      const inAuthor = post.authorName.toLowerCase().includes(q);
      const inBadge = post.badge?.toLowerCase().includes(q);
      const inDocRef = post.documentRef?.toLowerCase().includes(q);
      return inTitle || inSummary || inAuthor || inBadge || inDocRef;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Featured Spotlight Post (first research paper or first post)
  const spotlightPost = initialPosts[0];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12 bg-porcelain">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Directorate Press &amp; Research Archives</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Foundation <span className="italic text-lion-gold-dark font-light">Blogs &amp; Research</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold-dark tracking-widest uppercase font-semibold">
          Ethological Science &bull; Student Research Working Papers &bull; Decision Monographs &bull; Field Triage
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Groundbreaking scholarship, student research decrees, ethological science from Late Kiran Singh ji&apos;s
          doctoral lineage, and frontline community reports.
        </p>
      </div>

      {/* Search & Category Filter Control Hub */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, author, topic decree (e.g. 096, 093, Vanya, NEP, Crisis, Privacy)..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-border text-obsidian text-sm font-sans focus:outline-none focus:ring-2 focus:ring-lion-gold/50 focus:border-lion-gold transition-all shadow-elevation-1 placeholder:text-slate/60"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate hover:text-obsidian p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-mono">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-all flex items-center space-x-2 border shrink-0 ${
                  isActive
                    ? "bg-obsidian text-white border-obsidian shadow-sm font-semibold"
                    : "bg-white text-slate hover:text-obsidian hover:bg-slate-50 border-border"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-lion-gold" : "text-slate"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicator */}
      {(selectedCategory !== "all" || searchQuery) && (
        <div className="flex items-center justify-between text-xs font-mono text-slate border-b border-border pb-3 max-w-5xl mx-auto">
          <div>
            Showing <strong className="text-obsidian">{filteredPosts.length}</strong> publication
            {filteredPosts.length === 1 ? "" : "s"}
            {selectedCategory !== "all" && (
              <span>
                {" "}
                in <span className="text-lion-gold-dark font-semibold">{selectedCategory.replace(/_/g, " ")}</span>
              </span>
            )}
            {searchQuery && (
              <span>
                {" "}
                matching &quot;<span className="text-obsidian font-semibold">{searchQuery}</span>&quot;
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-lion-gold-dark hover:underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Spotlight Publication Banner (Shown only on initial unfiltered view) */}
      {selectedCategory === "all" && !searchQuery && spotlightPost && (
        <div className="max-w-5xl mx-auto">
          <Link
            href={`${baseRoute}/${spotlightPost.slug}`}
            className="group block relative overflow-hidden rounded-3xl bg-white border border-border shadow-elevation-card hover:border-lion-gold/60 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 items-center">
              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-border bg-slate-50">
                <Image
                  src={spotlightPost.coverImageUrl}
                  alt={spotlightPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-obsidian/90 backdrop-blur-md border border-lion-gold/50 text-lion-gold text-[10px] font-mono flex items-center space-x-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 text-lion-gold" />
                  <span>Featured Research Paper</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate">
                  {spotlightPost.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/40 font-semibold text-[10px]">
                      {spotlightPost.badge}
                    </span>
                  )}
                  <span className="flex items-center space-x-1 text-[11px]">
                    <User className="w-3.5 h-3.5 text-lion-gold-dark" />
                    <span>{spotlightPost.authorName}</span>
                  </span>
                  <span>&bull;</span>
                  {spotlightPost.readTime && (
                    <span className="flex items-center space-x-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate" />
                      <span>{spotlightPost.readTime}</span>
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-obsidian leading-snug group-hover:text-lion-gold-dark transition-colors">
                  {spotlightPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans line-clamp-3">
                  {spotlightPost.summary}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-lion-gold-dark font-semibold">
                  <span>Read Unabridged Manuscript</span>
                  <div className="w-6 h-6 rounded-full bg-lion-gold/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Main Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredPosts.map((post) => {
          const isResearch = post.category === "student_research" || post.category === "scholar_monograph";
          return (
            <Link
              key={post.id}
              href={`${baseRoute}/${post.slug}`}
              className="block bg-white border border-border rounded-2xl p-5 sm:p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden mb-4 border border-border bg-slate-50">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {post.badge && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono flex items-center space-x-1 shadow-sm font-semibold">
                      <span className="text-lion-gold-dark font-bold">§</span>
                      <span>{post.badge}</span>
                    </div>
                  )}
                  {post.category && (
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-obsidian/90 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-wider font-medium">
                      {post.category === "student_research"
                        ? "Research Paper"
                        : post.category === "scholar_monograph"
                        ? "Monograph"
                        : post.category === "canine_welfare"
                        ? "Canine Welfare"
                        : "Dispatch"}
                    </div>
                  )}
                </div>

                {/* Metadata Row */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate mb-2">
                  <span className="truncate max-w-[180px] flex items-center space-x-1 text-slate font-medium">
                    <User className="w-3 h-3 text-lion-gold-dark shrink-0" />
                    <span className="truncate">{post.authorName}</span>
                  </span>
                  {post.readTime && (
                    <span className="flex items-center space-x-1 shrink-0 text-slate-muted">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-obsidian leading-snug group-hover:text-lion-gold-dark transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate leading-relaxed font-sans mt-2.5 line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Bottom Action Strip */}
              <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs font-mono text-lion-gold-dark font-medium">
                <span className="flex items-center space-x-1">
                  <span>{isResearch ? "Read Academic Paper" : "Read Full Article"}</span>
                </span>
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-lion-gold/15 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 text-obsidian" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Empty Search State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-border shadow-elevation-1 max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-lion-gold/10 text-lion-gold-dark mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">No Publications Found</h3>
          <p className="text-xs sm:text-sm text-slate font-sans max-w-sm mx-auto">
            No blogs or research papers matched your search for &quot;{searchQuery}&quot;. Try adjusting your keywords or clearing filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-full bg-obsidian text-white text-xs font-mono font-semibold hover:bg-obsidian/90 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Institutional Research & Dispatches Disclaimer Footer */}
      <div className="p-6 rounded-2xl bg-white border border-border text-center space-y-2 max-w-4xl mx-auto shadow-sm">
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-lion-gold-dark font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory Research &amp; Press Registry &bull; ISSN Protocol Applied</span>
        </div>
        <p className="text-xs text-slate font-sans max-w-2xl mx-auto leading-relaxed">
          All published student research papers and monographs undergo psychometric vetting, independent plagiarism
          audit, and evaluation before formal ratifying defense panels at Kiran Singh Foundation.
        </p>
      </div>
    </div>
  );
}
