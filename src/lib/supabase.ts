// Kiran Singh Foundation - Supabase Client & Data Access Layer
// Configured with Row Level Security (RLS) support, snake_case <-> camelCase mappers, and robust local fallback.

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  SCHOLARS_COHORT,
  RESCUED_DOGS_ROSTER,
  MEMORIAL_RECORDS,
  FOUNDATION_EVENTS,
  FOUNDATION_BLOGS,
  StudentScholar,
  RescuedDog,
  MemorialRecord,
  FoundationEvent,
  BlogPost,
} from "./data/foundation-data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export interface SupportApplication {
  id: string;
  applicant_name: string;
  contact_email: string | null;
  contact_phone: string;
  category: "volunteer_onboarding" | "student_application" | "emergency_distress";
  priority: "standard" | "urgent" | "critical_emergency";
  subject: string;
  message_details: string;
  location_data?: string;
  status: "pending" | "triaged" | "in_progress" | "resolved";
  created_at: string;
}

// In-memory stores for fallback and local execution
let memoryApplications: SupportApplication[] = [
  {
    id: "app-init-01",
    applicant_name: "Ramesh Krishnan",
    contact_email: "ramesh.k@example.com",
    contact_phone: "+91 98401 99882",
    category: "emergency_distress",
    priority: "critical_emergency",
    subject: "Injured Street Canine near Allahpur Overbridge",
    message_details: "Canine struck by two-wheeler, limping severely, deep laceration on right flank. Safe on side path.",
    location_data: "Allahpur Overbridge Pillar 12, Prayagraj",
    status: "triaged",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "app-init-02",
    applicant_name: "Dr. Shalini V.",
    contact_email: "shalini.vet@example.com",
    contact_phone: "+91 94440 12837",
    category: "volunteer_onboarding",
    priority: "standard",
    subject: "Volunteer Veterinary Surgical Support",
    message_details: "Certified small animal surgeon offering weekend pro bono sterilization and wound debridement sessions.",
    location_data: "Civil Lines, Prayagraj",
    status: "pending",
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "app-init-03",
    applicant_name: "S. Priya",
    contact_email: "priya.stu@example.com",
    contact_phone: "+91 97909 33211",
    category: "student_application",
    priority: "urgent",
    subject: "Scholarship & Pro Bono Internship Application",
    message_details: "Second-year B.Sc. Biotechnology student seeking sponsorship and soft skills placement under the 40 scholars cohort.",
    location_data: "George Town, Prayagraj",
    status: "pending",
    created_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
];

let memoryBlogs: BlogPost[] = [...FOUNDATION_BLOGS];
let memoryEvents: FoundationEvent[] = [...FOUNDATION_EVENTS];

export function getSupabaseClient(): SupabaseClient | null {
  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes("placeholder") ||
    supabaseAnonKey.includes("placeholder")
  ) {
    return null;
  }
  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.warn("Failed to create Supabase client:", err);
    return null;
  }
}

export function getSupabaseAdminClient(): SupabaseClient | null {
  if (
    !supabaseUrl ||
    supabaseUrl.includes("placeholder")
  ) {
    return null;
  }
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;
  if (!serviceRoleKey || serviceRoleKey.includes("placeholder")) {
    return null;
  }
  try {
    return createClient(supabaseUrl, serviceRoleKey);
  } catch (err) {
    console.warn("Failed to create Supabase admin client:", err);
    return null;
  }
}

/**
 * DB Row <-> TypeScript Model Mappers
 * Resolves impedance mismatch between PostgreSQL snake_case and application camelCase models.
 */

function mapDbStudentToStudent(row: any): StudentScholar {
  const scholarId = row.scholar_id || row.scholarId;
  const canonical = SCHOLARS_COHORT.find((s) => s.scholarId === scholarId);
  return {
    id: row.id || canonical?.id || scholarId,
    scholarId,
    fullName: canonical?.fullName || row.full_name || row.fullName,
    teamNumber: row.team_number || row.teamNumber || canonical?.teamNumber,
    teamName: row.team_name || row.teamName || canonical?.teamName,
    teamRole: row.team_role || row.teamRole || canonical?.teamRole,
    teamRank: row.team_rank || row.teamRank || canonical?.teamRank,
    isVacant: row.is_vacant ?? row.isVacant ?? canonical?.isVacant,
    photoUrl: row.photo_url || row.photoUrl || canonical?.photoUrl,
    academicDiscipline: canonical?.academicDiscipline || row.academic_discipline || row.academicDiscipline,
    institution: canonical?.institution || row.institution,
    cohortYear: canonical?.cohortYear || row.cohort_year || row.cohortYear || 2026,
    softSkillsTrack: canonical?.softSkillsTrack || row.soft_skills_track || row.softSkillsTrack || [],
    internshipStatus: canonical?.internshipStatus || row.internship_status || row.internshipStatus || "upcoming",
    internshipTerm: canonical?.internshipTerm || row.internship_term || row.internshipTerm || "",
    internshipPlacement: canonical?.internshipPlacement || row.internship_placement || row.internshipPlacement || "",
    expensesAndStipendCovered: row.expenses_and_stipend_covered ?? row.expensesAndStipendCovered ?? true,
    attendanceRate: Number(row.attendance_rate || row.attendanceRate || canonical?.attendanceRate || 100),
    emergencyContactPhone: row.emergency_contact_phone || row.emergencyContactPhone || canonical?.emergencyContactPhone || "",
    notes: canonical?.notes || row.notes || "",
  };
}

function mapDbDogToDog(row: any): RescuedDog {
  const tagNumber = row.tag_number || row.tagNumber;
  const canonical = RESCUED_DOGS_ROSTER.find((d) => d.tagNumber === tagNumber);
  return {
    id: row.id || canonical?.id || tagNumber,
    tagNumber,
    name: canonical?.name || row.name,
    breedMix: canonical?.breedMix || row.breed_mix || row.breedMix || "Indian Pariah Dog (Desi)",
    estimatedAge: canonical?.estimatedAge || row.estimated_age || row.estimatedAge,
    gender: canonical?.gender || row.gender || "Male",
    rescueLocation: canonical?.rescueLocation || row.rescue_location || row.rescueLocation,
    rescueDate: canonical?.rescueDate || row.rescue_date || row.rescueDate,
    zoneIdentifier: canonical?.zoneIdentifier || row.zone_identifier || row.zoneIdentifier,
    isVaccinatedRabies: row.is_vaccinated_rabies ?? row.isVaccinatedRabies ?? canonical?.isVaccinatedRabies ?? true,
    rabiesVaccinationDate: canonical?.rabiesVaccinationDate || row.rabies_vaccination_date || row.rabiesVaccinationDate,
    boosterDueDate: canonical?.boosterDueDate || row.booster_due_date || row.boosterDueDate,
    isSterilized: row.is_sterilized ?? row.isSterilized ?? canonical?.isSterilized ?? true,
    dietaryNeeds: canonical?.dietaryNeeds || row.dietary_needs || row.dietaryNeeds,
    medicalNotes: canonical?.medicalNotes || row.medical_notes || row.medicalNotes || "",
    photoUrl: row.photo_url || row.photoUrl || canonical?.photoUrl || "/images/dogs/branto.jpg",
  };
}

function mapDbMemorialToMemorial(row: any): MemorialRecord {
  return {
    id: row.id,
    title: row.title,
    period: row.period,
    institution: row.institution,
    researchDiscipline: row.research_discipline || row.researchDiscipline,
    detailedNarrative: row.detailed_narrative || row.detailedNarrative,
    advisoryAlignment: row.advisory_alignment || row.advisoryAlignment,
    citations: row.citations || [],
    archivalDocumentRef: row.archival_document_ref || row.archivalDocumentRef,
    displayOrder: row.display_order ?? row.displayOrder ?? 1,
  };
}

function mapDbEventToEvent(row: any): FoundationEvent {
  const canonical = FOUNDATION_EVENTS.find((e) => e.slug === row.slug || e.id === row.id);
  return {
    id: row.id || canonical?.id,
    slug: row.slug || canonical?.slug,
    title: row.title || canonical?.title,
    category: row.category || canonical?.category || "personality_workshop",
    description: row.description || canonical?.description,
    location: row.location || canonical?.location,
    scheduledAt: row.scheduled_at || row.scheduledAt || canonical?.scheduledAt,
    capacity: row.capacity || canonical?.capacity || 100,
    isPublished: row.is_published ?? row.isPublished ?? canonical?.isPublished ?? true,
    whatsappRsvpLink: row.whatsapp_rsvp_link || row.whatsappRsvpLink || canonical?.whatsappRsvpLink || "",
    status: row.status || canonical?.status || (new Date(row.scheduled_at || row.scheduledAt || canonical?.scheduledAt) < new Date() ? "concluded" : "upcoming"),
    edition: row.edition || canonical?.edition,
    monthYear: row.month_year || canonical?.monthYear,
    syllabusCovered: row.syllabus_covered || canonical?.syllabusCovered || [],
    highlights: row.highlights || canonical?.highlights || [],
    keyAttendees: row.key_attendees || canonical?.keyAttendees || [],
    galleryImages: row.gallery_images || canonical?.galleryImages || [],
    certificateType: row.certificate_type || canonical?.certificateType,
    researchThemes: row.research_themes || canonical?.researchThemes || [],
    stipendDistributed: row.stipend_distributed ?? canonical?.stipendDistributed ?? true,
  };
}

function mapDbBlogPostToBlogPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    contentMarkdown: row.content_markdown || row.contentMarkdown,
    authorName: row.author_name || row.authorName || "Kiran Singh Foundation Directorate",
    coverImageUrl: row.cover_image_url || row.coverImageUrl || "/images/dispatches/felid-ethology-archive.jpg",
    isAiDrafted: row.is_ai_drafted ?? row.isAiDrafted ?? false,
    publishedAt: row.published_at || row.publishedAt || new Date().toISOString(),
    isPublished: row.is_published ?? row.isPublished ?? true,
  };
}

/**
 * Data Access Functions with seamless Live DB + local fallback architecture.
 */

export async function fetchMemorialRecords(): Promise<MemorialRecord[]> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("memorial_records")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map(mapDbMemorialToMemorial);
      }
    } catch (e) {
      console.warn("fetchMemorialRecords db error:", e);
    }
  }
  return MEMORIAL_RECORDS;
}

export async function fetchStudents(): Promise<StudentScholar[]> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("public_students")
        .select("*")
        .order("scholar_id", { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map(mapDbStudentToStudent);
      }
    } catch (e) {
      console.warn("fetchStudents db error:", e);
    }
  }
  return SCHOLARS_COHORT;
}

export async function fetchStudentsAdmin(): Promise<StudentScholar[]> {
  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("students")
        .select("*")
        .order("scholar_id", { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map(mapDbStudentToStudent);
      }
    } catch (e) {
      console.warn("fetchStudentsAdmin db error:", e);
    }
  }
  return SCHOLARS_COHORT;
}

export async function fetchDogs(): Promise<RescuedDog[]> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("dogs")
        .select("*")
        .order("tag_number", { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map(mapDbDogToDog);
      }
    } catch (e) {
      console.warn("fetchDogs db error:", e);
    }
  }
  return RESCUED_DOGS_ROSTER;
}

export async function fetchEvents(): Promise<FoundationEvent[]> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("events")
        .select("*")
        .eq("is_published", true)
        .order("scheduled_at", { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map(mapDbEventToEvent);
      }
    } catch (e) {
      console.warn("fetchEvents db error:", e);
    }
  }
  return memoryEvents;
}

export async function fetchEventBySlug(slug: string): Promise<FoundationEvent | null> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("events")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (!error && data) {
        return mapDbEventToEvent(data);
      }
    } catch (e) {
      console.warn("fetchEventBySlug db error:", e);
    }
  }
  const matched = FOUNDATION_EVENTS.find((e) => e.slug === slug && e.isPublished);
  return matched || null;
}

export async function fetchAllEventsAdmin(): Promise<FoundationEvent[]> {
  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("events")
        .select("*")
        .order("scheduled_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(mapDbEventToEvent);
      }
    } catch (e) {
      console.warn("fetchAllEventsAdmin db error:", e);
    }
  }
  return memoryEvents;
}

export async function createEventRecord(event: Omit<FoundationEvent, "id">): Promise<FoundationEvent> {
  const newEvent: FoundationEvent = {
    ...event,
    id: `evt-${Date.now()}`,
  };

  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const dbPayload = {
        slug: event.slug,
        title: event.title,
        category: event.category,
        description: event.description,
        location: event.location,
        scheduled_at: event.scheduledAt,
        capacity: event.capacity,
        is_published: event.isPublished,
        whatsapp_rsvp_link: event.whatsappRsvpLink,
      };

      const { data, error } = await client
        .from("events")
        .insert([dbPayload])
        .select()
        .single();

      if (!error && data) {
        const mapped = mapDbEventToEvent(data);
        memoryEvents.unshift(mapped);
        return mapped;
      }
    } catch (e) {
      console.warn("createEventRecord db insert error, using local memory:", e);
    }
  }

  memoryEvents.unshift(newEvent);
  return newEvent;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(mapDbBlogPostToBlogPost);
      }
    } catch (e) {
      console.warn("fetchBlogPosts db error:", e);
    }
  }
  return memoryBlogs;
}

export async function fetchAllBlogPostsAdmin(): Promise<BlogPost[]> {
  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(mapDbBlogPostToBlogPost);
      }
    } catch (e) {
      console.warn("fetchAllBlogPostsAdmin db error:", e);
    }
  }
  return memoryBlogs;
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      if (!error && data) {
        return mapDbBlogPostToBlogPost(data);
      }
    } catch (e) {
      console.warn("fetchBlogPostBySlug db error:", e);
    }
  }

  const posts = await fetchBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function createBlogPostRecord(post: Omit<BlogPost, "id">): Promise<BlogPost> {
  const newPost: BlogPost = {
    ...post,
    id: `blog-${Date.now()}`,
  };

  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const dbPayload = {
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        content_markdown: post.contentMarkdown,
        author_name: post.authorName,
        cover_image_url: post.coverImageUrl,
        is_ai_drafted: post.isAiDrafted,
        is_published: post.isPublished,
        published_at: post.publishedAt,
      };

      const { data, error } = await client
        .from("blog_posts")
        .insert([dbPayload])
        .select()
        .single();

      if (!error && data) {
        const mapped = mapDbBlogPostToBlogPost(data);
        memoryBlogs.unshift(mapped);
        return mapped;
      }
    } catch (e) {
      console.warn("createBlogPostRecord db insert error, using local memory:", e);
    }
  }

  memoryBlogs.unshift(newPost);
  return newPost;
}

export async function submitSupportApplication(
  application: Omit<SupportApplication, "id" | "status" | "created_at">
): Promise<SupportApplication> {
  const client = getSupabaseClient();
  const generatedId = crypto.randomUUID();
  const newEntry: SupportApplication = {
    ...application,
    id: generatedId,
    status: "pending",
    created_at: new Date().toISOString(),
  };

  if (client) {
    try {
      const { error } = await client
        .from("support_applications")
        .insert([newEntry]);
      if (!error) {
        memoryApplications.unshift(newEntry);
        return newEntry;
      }
      console.warn("Supabase insert error, falling back to local memory store:", error);
    } catch (e) {
      console.warn("Supabase insert error, falling back to local memory store:", e);
    }
  }

  memoryApplications.unshift(newEntry);
  return newEntry;
}

export async function fetchSupportApplications(): Promise<SupportApplication[]> {
  const client = getSupabaseAdminClient() || getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("support_applications")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data as SupportApplication[];
      }
    } catch (e) {
      console.warn("Supabase select error:", e);
    }
  }
  return memoryApplications;
}

export async function updateApplicationStatus(
  id: string,
  newStatus: SupportApplication["status"]
): Promise<boolean> {
  const client = getSupabaseAdminClient() || getSupabaseClient();
  let dbSuccess = false;
  if (client) {
    try {
      const { error } = await client
        .from("support_applications")
        .update({ status: newStatus })
        .eq("id", id);
      if (!error) {
        dbSuccess = true;
      } else {
        console.warn("Supabase updateApplicationStatus error:", error);
      }
    } catch (e) {
      console.warn("Supabase updateApplicationStatus error:", e);
    }
  }

  const found = memoryApplications.find((a) => a.id === id);
  if (found) {
    found.status = newStatus;
    return true;
  }
  return dbSuccess;
}
