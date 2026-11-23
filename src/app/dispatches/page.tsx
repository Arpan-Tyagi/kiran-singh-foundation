import React from "react";
import { Metadata } from "next";
import { fetchBlogPosts } from "@/lib/supabase";
import BlogsHubClient from "@/components/blogs/BlogsHubClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Editorial Dispatches & Research Papers | Kiran Singh Foundation",
  description:
    "Institutional press, ethological science, student research working papers, and frontline animal rescue field reports.",
  alternates: {
    canonical: "https://kiransinghfoundation.org/blogs",
  },
};

export default async function DispatchesPage() {
  const posts = await fetchBlogPosts();

  return (
    <main className="min-h-screen bg-porcelain">
      <BlogsHubClient
        initialPosts={posts}
        defaultCategory="all"
        baseRoute="/dispatches"
      />
    </main>
  );
}
