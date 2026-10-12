"use client";

import React, { useState } from "react";
import {
  FileEdit,
  Sparkles,
  Plus,
  X,
  Send,
  CheckCircle2,
  Calendar,
  User,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { createBlogPostAction } from "@/actions/admin";
import { BlogPost } from "@/lib/data/foundation-data";

export default function BlogsDeskClient({
  initialBlogs,
}: {
  initialBlogs: BlogPost[];
}) {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal form states
  const [rawNotes, setRawNotes] = useState("");
  const [targetTone, setTargetTone] = useState<"institutional" | "urgent_call" | "scholarly">("institutional");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [generatedSummary, setGeneratedSummary] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [authorName, setAuthorName] = useState("Foundation Directorate");
  const [isAiDrafted, setIsAiDrafted] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);

  const handleGenerateDraft = async () => {
    if (!rawNotes.trim()) return;
    setIsDrafting(true);
    setDraftError(null);

    try {
      const res = await fetch("/api/ai/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "blog_post",
          rawNotes,
          targetTone,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setGeneratedTitle(data.title);
        setGeneratedSummary(data.summary);
        setGeneratedContent(data.contentMarkdown);
        setIsAiDrafted(true);
      } else {
        const errData = await res.json().catch(() => ({}));
        setDraftError(errData.error || "Draft generation request failed.");
      }
    } catch (err: any) {
      console.error("Draft generation failed:", err);
      setDraftError(err?.message || "An unexpected error occurred during AI drafting.");
    } finally {
      setIsDrafting(false);
    }
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!generatedTitle || !generatedContent) return;

    setIsSubmitting(true);
    try {
      const result = await createBlogPostAction({
        title: generatedTitle,
        summary: generatedSummary,
        contentMarkdown: generatedContent,
        authorName,
        isAiDrafted,
      });

      if (result.success && result.post) {
        setBlogs([result.post, ...blogs]);
        setIsModalOpen(false);
        setRawNotes("");
        setGeneratedTitle("");
        setGeneratedSummary("");
        setGeneratedContent("");
        setIsAiDrafted(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header with CTA to open Gemini Modal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Dispatches & Editorial Desk
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-0.5">
            Manage public dispatches integrated with Google Gemini 2.5 Flash
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs transition-all shadow-md"
        >
          <Sparkles className="w-4 h-4" />
          <span>New Dispatch with Gemini 2.5 Flash</span>
        </button>
      </div>

      {/* Blogs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-border rounded-2xl shadow-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                <span className="text-slate-muted font-medium">{blog.authorName}</span>
                {blog.isAiDrafted && (
                  <span className="px-2 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/30 flex items-center space-x-1 font-medium">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Gemini 2.5</span>
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg font-bold text-obsidian line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-xs text-slate-muted mt-2 line-clamp-3">
                {blog.summary}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-slate-muted">
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
              <a
                href={`/dispatches/${blog.slug}`}
                target="_blank"
                className="text-lion-gold-dark hover:underline flex items-center space-x-1 font-medium"
              >
                <span>View</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Gemini 2.5 Flash Drafting Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-sm">
          <div className="bg-white border border-border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-obsidian">
                    Gemini 2.5 Flash Editorial Assistant
                  </h3>
                  <p className="text-[11px] font-mono text-lion-gold-dark font-medium">
                    Institutional Fact Grounded &bull; @google/genai SDK
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-muted hover:text-obsidian"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Form for Raw Field Notes */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                  Target Tone
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["institutional", "scholarly", "urgent_call"] as const).map(
                    (tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setTargetTone(tone)}
                        className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                          targetTone === tone
                            ? "bg-lion-gold/15 border-lion-gold-dark text-lion-gold-dark font-semibold shadow-sm"
                            : "bg-porcelain border-border text-slate-muted hover:text-obsidian"
                        }`}
                      >
                        {tone.replace("_", " ")}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                  Raw Field Notes / Rough Bullet Points *
                </label>
                <textarea
                  rows={4}
                  value={rawNotes}
                  onChange={(e) => setRawNotes(e.target.value)}
                  placeholder="e.g. Conducted health inspection on 34 resident dogs in Zone Alpha and Beta. Rabies booster schedule verified. Mention Late Kiran Singh's ethological standards..."
                  className="w-full bg-porcelain border border-border rounded-xl p-3 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold focus:bg-white"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerateDraft}
                disabled={isDrafting || !rawNotes.trim()}
                className="w-full py-3 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs flex items-center justify-center space-x-2 transition-all disabled:opacity-40 shadow-sm"
              >
                {isDrafting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Synthesizing via Gemini 2.5 Flash...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Transform Field Notes into Dispatch</span>
                  </>
                )}
              </button>

              {draftError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-crimson-alert text-xs font-mono">
                  {draftError}
                </div>
              )}
            </div>

            {/* Generated Draft Review & Refinement */}
            {generatedTitle && (
              <form onSubmit={handlePublish} className="pt-4 border-t border-border space-y-4">
                <div className="flex items-center space-x-2 text-botanical-emerald text-xs font-mono font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Draft Generated Successfully</span>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                    Headline
                  </label>
                  <input
                    type="text"
                    required
                    value={generatedTitle}
                    onChange={(e) => setGeneratedTitle(e.target.value)}
                    className="w-full bg-porcelain border border-border rounded-xl px-3 py-2 text-xs text-obsidian focus:bg-white focus:border-lion-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                    Executive Summary
                  </label>
                  <input
                    type="text"
                    required
                    value={generatedSummary}
                    onChange={(e) => setGeneratedSummary(e.target.value)}
                    className="w-full bg-porcelain border border-border rounded-xl px-3 py-2 text-xs text-obsidian focus:bg-white focus:border-lion-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                    Formatted Markdown Content
                  </label>
                  <textarea
                    rows={8}
                    required
                    value={generatedContent}
                    onChange={(e) => setGeneratedContent(e.target.value)}
                    className="w-full bg-porcelain border border-border rounded-xl p-3 text-xs text-obsidian font-mono focus:bg-white focus:border-lion-gold"
                  />
                </div>

                <div className="flex items-center justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full border border-border text-xs font-mono text-slate-muted hover:text-obsidian"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-full bg-botanical-emerald hover:bg-emerald-800 text-white font-sans font-semibold text-xs flex items-center space-x-2 shadow-md disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Publishing..." : "Publish Dispatch to Registry"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
