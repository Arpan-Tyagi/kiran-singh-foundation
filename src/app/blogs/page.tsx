import React from "react";
import { Metadata } from "next";
import { fetchBlogPosts } from "@/lib/supabase";
import BlogsHubClient from "@/components/blogs/BlogsHubClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs & Research Papers | Kiran Singh Foundation Institutional Press",
  description:
    "Explore peer-reviewed student research papers, scholar monographs, doctoral ethological science from Late Kiran Singh ji, and frontline street dog medical field protocols.",
  alternates: {
    canonical: "https://kiransinghfoundation.org/blogs",
  },
  openGraph: {
    title: "Foundation Blogs & Research Papers | Kiran Singh Foundation",
    description:
      "Peer-reviewed student research papers, scholar monographs, doctoral felid ethology, and frontline animal rescue field dispatches.",
    url: "https://kiransinghfoundation.org/blogs",
    type: "website",
    images: [
      {
        url: "/images/dispatches/felid-ethology-archive.jpg",
        alt: "Kiran Singh Foundation Blogs & Research Archives",
      },
    ],
  },
};

interface Props {
  searchParams: Promise<{
    category?: string;
    tab?: string;
  }>;
}

export default async function BlogsPage({ searchParams }: Props) {
  const posts = await fetchBlogPosts();
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams.category || resolvedParams.tab || "all";

  return (
    <main className="min-h-screen bg-porcelain">
      <BlogsHubClient
        initialPosts={posts}
        defaultCategory={initialCategory}
        baseRoute="/blogs"
      />
    </main>
  );
}
