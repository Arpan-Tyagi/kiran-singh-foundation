"use server";

import { cookies } from "next/headers";
import {
  createBlogPostRecord,
  createEventRecord,
  updateApplicationStatus,
} from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createBlogPostAction(formData: {
  title: string;
  summary: string;
  contentMarkdown: string;
  authorName?: string;
  coverImageUrl?: string;
  isAiDrafted?: boolean;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("ksf-admin-session")?.value;
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  const baseSlug =
    formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "dispatch";
  const slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;

  const created = await createBlogPostRecord({
    slug,
    title: formData.title,
    summary: formData.summary,
    contentMarkdown: formData.contentMarkdown,
    authorName: formData.authorName || "Foundation Directorate",
    coverImageUrl: formData.coverImageUrl || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    isAiDrafted: !!formData.isAiDrafted,
    publishedAt: new Date().toISOString(),
    isPublished: true,
  });

  revalidatePath("/dispatches");
  revalidatePath("/admin/blogs");
  return { success: true, post: created };
}

export async function createEventAction(formData: {
  title: string;
  category: "medical_camp" | "personality_workshop" | "community_drive" | "memorial_gathering";
  description: string;
  location: string;
  scheduledAt: string;
  capacity?: number;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("ksf-admin-session")?.value;
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  const baseSlug =
    formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "event";
  const slug = `${baseSlug}-${Date.now().toString().slice(-4)}`;

  const whatsappRsvpLink = `https://wa.me/919840012345?text=${encodeURIComponent(`RSVP for ${formData.title}`)}`;

  const created = await createEventRecord({
    slug,
    title: formData.title,
    category: formData.category,
    description: formData.description,
    location: formData.location,
    scheduledAt: formData.scheduledAt,
    capacity: formData.capacity || 100,
    isPublished: true,
    whatsappRsvpLink,
  });

  revalidatePath("/events");
  revalidatePath("/admin/events");
  return { success: true, event: created };
}

export async function updateApplicationStatusAction(id: string, status: "pending" | "triaged" | "in_progress" | "resolved") {
  const cookieStore = await cookies();
  const session = cookieStore.get("ksf-admin-session")?.value;
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  const success = await updateApplicationStatus(id, status);
  revalidatePath("/admin/applications");
  return { success };
}

export async function authenticateDirectorateSession(
  secretOrPassphrase?: string,
  role: string = "super_admin"
): Promise<{ success: boolean; error?: string }> {
  try {
    const validSecret = process.env.ADMIN_PORTAL_SECRET || "KSF@Directorate2026!";
    if (!secretOrPassphrase || secretOrPassphrase.trim() !== validSecret.trim()) {
      return { success: false, error: "Invalid directorate authorization key or passphrase." };
    }

    const cookieStore = await cookies();
    cookieStore.set({
      name: "ksf-admin-session",
      value: role,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 86400,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error?.message || "Failed to establish directorate session." };
  }
}

export async function signOutDirectorateSession(): Promise<{ success: boolean }> {
  try {
    const cookieStore = await cookies();
    cookieStore.set({
      name: "ksf-admin-session",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });
    cookieStore.delete("ksf-admin-session");
    return { success: true };
  } catch {
    return { success: false };
  }
}

