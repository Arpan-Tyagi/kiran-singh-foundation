import React from "react";
import { Metadata } from "next";
import { fetchBlogPosts } from "@/lib/supabase";
import BlogsHubClient from "@/components/blogs/BlogsHubClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Student Research Papers & Monographs | Kiran Singh Foundation",
  description:
    "Peer-reviewed academic research working papers, policy reform blueprints, and special monographs authored by Kiran Singh Foundation scholars.",
  alternates: {
    canonical: "https://kiransinghfoundation.org/blogs?category=student_research",
  },
};

export default async function ResearchPage() {
  const posts = await fetchBlogPosts();

  return (
    <main className="min-h-screen bg-porcelain">
      <BlogsHubClient
        initialPosts={posts}
        defaultCategory="student_research"
        baseRoute="/blogs"
      />
    </main>
  );
}
