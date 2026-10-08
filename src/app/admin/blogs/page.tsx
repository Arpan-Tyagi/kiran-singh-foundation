import React from "react";
import { fetchAllBlogPostsAdmin } from "@/lib/supabase";
import BlogsDeskClient from "@/components/admin/BlogsDeskClient";

export const revalidate = 0;

export default async function AdminBlogsPage() {
  const blogs = await fetchAllBlogPostsAdmin();

  return <BlogsDeskClient initialBlogs={blogs} />;
}
