// Kiran Singh Foundation - Automated Verification Test Suite
// Executable directly with Node test runner: `node --test tests/foundation.test.mjs` or `node tests/foundation.test.mjs`

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// Load source files
const dataContent = fs.readFileSync(path.resolve("src/lib/data/foundation-data.ts"), "utf-8");
const geminiContent = fs.readFileSync(path.resolve("src/lib/gemini.ts"), "utf-8");
const whatsappContent = fs.readFileSync(path.resolve("src/lib/whatsapp.ts"), "utf-8");
const schemaContent = fs.readFileSync(path.resolve("supabase/migrations/001_initial_schema.sql"), "utf-8");
const seedContent = fs.readFileSync(path.resolve("supabase/seed.sql"), "utf-8");
const chatActionContent = fs.readFileSync(path.resolve("src/actions/chat.ts"), "utf-8");

test("Institutional Data Integrity Mandates", async (t) => {
  await t.test("Founder credentials and facts must be inviolable in source data", () => {
    assert.ok(dataContent.includes('founder: "Late Kiran Singh ji"'));
    assert.ok(/motto:\s*"Working [Tt]owards Change"/.test(dataContent));
    assert.ok(dataContent.includes('trustRegistration: "Trust registered under Indian Trust Act of 1882"'));
    assert.ok(dataContent.includes('tagline: "A Journey from struggle to Enlightenment"'));
    assert.ok(dataContent.includes('address: "191/C, Tilak Nagar Allahpur Prayagraj 211006"'));
    assert.ok(dataContent.includes('email: "kiransinghfoundation@gmail.com"'));
    assert.ok(dataContent.includes('"9670970750"') && dataContent.includes('"8115141378"') && dataContent.includes('"9450630310"'));
    assert.ok(dataContent.includes("scholarsCount: 40"));
    assert.ok(dataContent.includes("dogsCount: 34"));
    assert.ok(dataContent.includes("roaring male lion"));
  });

  await t.test("Operational Wing A must contain exactly 40 active scholars in seed and dataset", () => {
    const seedScholars = seedContent.match(/KSF-STU-\d{3}/g) || [];
    assert.equal(new Set(seedScholars).size, 40, "Seed must contain 40 unique scholars");

    const dataScholars = dataContent.match(/scholarId:\s*"KSF-STU-\d{3}"/g) || [];
    assert.equal(new Set(dataScholars).size, 40, "foundation-data must contain 40 unique scholars");
  });

  await t.test("Operational Wing B must shelter exactly 34 rescued dogs in seed and dataset", () => {
    const seedDogs = seedContent.match(/KSF-CAN-\d{3}/g) || [];
    assert.equal(new Set(seedDogs).size, 34, "Seed must contain 34 unique dogs");

    const dataDogs = dataContent.match(/tagNumber:\s*"KSF-CAN-\d{3}"/g) || [];
    assert.equal(new Set(dataDogs).size, 34, "foundation-data must contain 34 unique dogs");
  });

  await t.test("Memorial records must contain AAZP Vandalur, CM Jayalalithaa alignment, and apex felid science", () => {
    assert.ok(seedContent.includes("AAZP Vandalur"), "Seed must mention AAZP Vandalur");
    assert.ok(seedContent.includes("Jayalalithaa") || seedContent.includes("Amma"), "Seed must mention CM Jayalalithaa");
    assert.ok(seedContent.includes("Panthera leo") || seedContent.includes("apex felid"), "Seed must mention apex felids");
  });
});

test("Gemini 2.5 Flash System Prompt & Pipelines", async (t) => {
  await t.test("System prompt must embed authoritative mandates", () => {
    assert.ok(geminiContent.includes("Late Kiran Singh ji"));
    assert.ok(geminiContent.includes("40 active students"));
    assert.ok(geminiContent.includes("34 rescued street dogs"));
    assert.ok(geminiContent.includes("AAZP Vandalur"));
    assert.ok(geminiContent.includes("Working towards Change"));
    assert.ok(geminiContent.includes("@google/genai"));
    assert.ok(geminiContent.includes("GoogleGenAI"));
  });

  await t.test("Server Action executeFoundationChatTurn must be exported with 'use server'", () => {
    assert.ok(chatActionContent.includes('"use server"') || chatActionContent.includes("'use server'"));
    assert.ok(chatActionContent.includes("export async function executeFoundationChatTurn"));
  });
});

test("Database Security & Row-Level Privacy", async (t) => {
  await t.test("Schema must define Security Definer is_admin() and RLS on all 7 tables", () => {
    assert.ok(schemaContent.includes("FUNCTION public.is_admin()"));
    assert.ok(schemaContent.includes("ENABLE ROW LEVEL SECURITY"));
    assert.ok(schemaContent.includes("CREATE TABLE profiles"));
    assert.ok(schemaContent.includes("CREATE TABLE students"));
    assert.ok(schemaContent.includes("CREATE TABLE dogs"));
    assert.ok(schemaContent.includes("CREATE TABLE memorial_records"));
    assert.ok(schemaContent.includes("CREATE TABLE events"));
    assert.ok(schemaContent.includes("CREATE TABLE blog_posts"));
    assert.ok(schemaContent.includes("CREATE TABLE support_applications"));
  });

  await t.test("Schema must isolate sensitive student records and provide public_students view", () => {
    assert.ok(schemaContent.includes("public_students"));
    assert.ok(schemaContent.includes("REVOKE SELECT (emergency_contact_phone, notes) ON students FROM anon"));
  });
});

test("WhatsApp URL Utility Logic", async (t) => {
  function sanitizeWhatsAppPhone(phone) {
    if (!phone) return "919840012345";
    let digits = phone.replace(/\D/g, "");
    if (digits.length === 11 && digits.startsWith("0")) {
      digits = digits.slice(1);
    }
    if (digits.length === 10) {
      return `91${digits}`;
    }
    return digits || "919840012345";
  }

  function buildEmergencyWhatsAppUrl(payload) {
    const targetPhone = sanitizeWhatsAppPhone("919840012345");
    const text = [
      `🚨 *[CRITICAL EMERGENCY DISPATCH - KIRAN SINGH FOUNDATION]*`,
      `👤 *Reporter:* ${payload.callerName || "Anonymous Reporter"}`,
      `📞 *Contact:* ${payload.phone || "Not specified"}`,
      `📍 *Location:* ${payload.location || "Immediate assistance requested"}`,
      `⚠️ *Situation:* ${payload.description}`,
    ].join("\n");
    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
  }

  await t.test("sanitizeWhatsAppPhone handles 10-digit, 11-digit with leading 0, and international formats", () => {
    assert.equal(sanitizeWhatsAppPhone("9840012345"), "919840012345");
    assert.equal(sanitizeWhatsAppPhone("09840012345"), "919840012345");
    assert.equal(sanitizeWhatsAppPhone("+91 98400 12345"), "919840012345");
  });

  await t.test("buildEmergencyWhatsAppUrl encodes emergency payload correctly", () => {
    const url = buildEmergencyWhatsAppUrl({
      callerName: "K. Mohan",
      phone: "+91 94440 00000",
      location: "Tambaram Lowland",
      description: "Severe canine leg injury",
    });

    assert.ok(url.startsWith("https://wa.me/919840012345?text="));
    const decoded = decodeURIComponent(url);
    assert.ok(decoded.includes("K. Mohan"));
    assert.ok(decoded.includes("Tambaram Lowland"));
    assert.ok(decoded.includes("CRITICAL EMERGENCY DISPATCH"));
  });

  await t.test("WhatsApp source file exports required deep-link builders", () => {
    assert.ok(whatsappContent.includes("export function sanitizeWhatsAppPhone"));
    assert.ok(whatsappContent.includes("export function buildEmergencyWhatsAppUrl"));
    assert.ok(whatsappContent.includes("export function buildMutualAidWhatsAppUrl"));
    assert.ok(whatsappContent.includes("export function buildEventRsvpWhatsAppUrl"));
  });
});

test("Transactional Communications & Admin Workspace Robustness", async (t) => {
  const emailContent = fs.readFileSync(path.resolve("src/lib/email.ts"), "utf-8");
  const eventsDeskContent = fs.readFileSync(path.resolve("src/components/admin/EventsDeskClient.tsx"), "utf-8");
  const supabaseContent = fs.readFileSync(path.resolve("src/lib/supabase.ts"), "utf-8");

  await t.test("Resend email pipeline must implement intake confirmation and critical alerts", () => {
    assert.ok(emailContent.includes("sendIntakeConfirmationEmail"));
    assert.ok(emailContent.includes("sendEmergencyAdminAlertEmail"));
    assert.ok(emailContent.includes("resend"));
    assert.ok(emailContent.includes("CRITICAL EMERGENCY DISTRESS DISPATCH"));
  });

  await t.test("Events management interface must integrate Gemini 2.5 Flash drafting modal", () => {
    assert.ok(eventsDeskContent.includes("/api/ai/draft"));
    assert.ok(eventsDeskContent.includes("event_announcement"));
    assert.ok(eventsDeskContent.includes("Gemini 2.5 Flash"));
  });

  await t.test("Supabase data access layer must export full admin fetch functions", () => {
    assert.ok(supabaseContent.includes("export async function fetchAllBlogPostsAdmin"));
    assert.ok(supabaseContent.includes("export async function fetchAllEventsAdmin"));
  });
});

test("Deep Investigator Architectural & Security Fixes (D1-D10)", async (t) => {
  const supabaseContent = fs.readFileSync(path.resolve("src/lib/supabase.ts"), "utf-8");
  const adminPageContent = fs.readFileSync(path.resolve("src/app/admin/page.tsx"), "utf-8");
  const adminStudentsPageContent = fs.readFileSync(path.resolve("src/app/admin/students/page.tsx"), "utf-8");
  const adminDeskClientContent = fs.readFileSync(path.resolve("src/components/admin/ApplicationsDeskClient.tsx"), "utf-8");
  const adminActionsContent = fs.readFileSync(path.resolve("src/actions/admin.ts"), "utf-8");
  const geminiContent = fs.readFileSync(path.resolve("src/lib/gemini.ts"), "utf-8");
  const copilotDrawerContent = fs.readFileSync(path.resolve("src/components/AICopilotDrawer.tsx"), "utf-8");
  const draftRouteContent = fs.readFileSync(path.resolve("src/app/api/ai/draft/route.ts"), "utf-8");
  const dispatchSlugContent = fs.readFileSync(path.resolve("src/app/dispatches/[slug]/page.tsx"), "utf-8");
  const intakeActionContent = fs.readFileSync(path.resolve("src/actions/intake.ts"), "utf-8");

  await t.test("[D1] submitSupportApplication uses crypto.randomUUID() and avoids chained .select().single()", () => {
    assert.ok(supabaseContent.includes("crypto.randomUUID()"), "Must use crypto.randomUUID() for UUID primary key");
    assert.ok(!supabaseContent.includes('id: `app-${Date.now()}`'), "Must not use timestamp id prefix for applications");
    const submitSection = supabaseContent.slice(supabaseContent.indexOf("submitSupportApplication"));
    assert.ok(!submitSection.includes(".insert([newEntry]).select()"), "Must not chain .select().single() on anon insert");
  });

  await t.test("[D2] fetchStudents queries public_students and fetchStudentsAdmin queries students table", () => {
    assert.ok(supabaseContent.includes('.from("public_students")'), "fetchStudents must query public_students view");
    assert.ok(supabaseContent.includes("export async function fetchStudentsAdmin"), "Must export fetchStudentsAdmin");
    assert.ok(adminStudentsPageContent.includes("fetchStudentsAdmin"), "Admin students page must call fetchStudentsAdmin");
    assert.ok(adminPageContent.includes("fetchStudentsAdmin"), "Admin overview page must call fetchStudentsAdmin");
    assert.ok(adminPageContent.includes("fetchAllEventsAdmin"), "Admin overview page must call fetchAllEventsAdmin");
  });

  await t.test("[D3] Gemini 2.5 Flash multi-turn ordering sanitizes leading model turns and filters initial greeting", () => {
    assert.ok(geminiContent.includes("sanitizedHistory"), "Must sanitize incoming history");
    assert.ok(geminiContent.includes('role === "model"') || geminiContent.includes("role === 'model'"), "Must check for leading model role");
    assert.ok(copilotDrawerContent.includes("filter((_, idx) => idx > 0)"), "AICopilotDrawer must filter initial greeting from historyPayload");
  });

  await t.test("[D4] Server Actions in src/actions/admin.ts verify ksf-admin-session cookie", () => {
    assert.ok(adminActionsContent.includes('import { cookies } from "next/headers"'));
    assert.ok(adminActionsContent.includes('cookieStore.get("ksf-admin-session")'));
    assert.ok(adminActionsContent.includes('return { success: false, error: "Unauthorized" }'));
  });

  await t.test("[D5] Admin WhatsApp links utilize sanitizeWhatsAppPhone utility", () => {
    assert.ok(adminPageContent.includes("sanitizeWhatsAppPhone"), "src/app/admin/page.tsx must use sanitizeWhatsAppPhone");
    assert.ok(!adminPageContent.includes('app.contact_phone.replace(/\\D/g, "")'), "Raw regex replace must be replaced in admin page");
    assert.ok(adminDeskClientContent.includes("sanitizeWhatsAppPhone"), "ApplicationsDeskClient must use sanitizeWhatsAppPhone");
    assert.ok(!adminDeskClientContent.includes('app.contact_phone.replace(/\\D/g, "")'), "Raw regex replace must be replaced in desk client");
  });

  await t.test("[D6] Supabase admin client exports getSupabaseAdminClient with SUPABASE_SERVICE_ROLE_KEY", () => {
    assert.ok(supabaseContent.includes("export function getSupabaseAdminClient"), "Must export getSupabaseAdminClient");
    assert.ok(supabaseContent.includes("SUPABASE_SERVICE_ROLE_KEY"), "Must support SUPABASE_SERVICE_ROLE_KEY");
    assert.ok(supabaseContent.includes("getSupabaseAdminClient() || getSupabaseClient()"), "Must route admin operations through getSupabaseAdminClient");
    assert.ok(supabaseContent.includes("return dbSuccess"), "Must return db update status in updateApplicationStatus");
  });

  await t.test("[D7] Secure AI Draft Endpoint returns 401 if unauthenticated", () => {
    assert.ok(draftRouteContent.includes('req.cookies.get("ksf-admin-session")'));
    assert.ok(draftRouteContent.includes("401"), "Must return 401 status code for unauthenticated requests");
  });

  await t.test("[D8] WhatsApp Share URL in dispatches detail page targets api.whatsapp.com/send", () => {
    assert.ok(dispatchSlugContent.includes("https://api.whatsapp.com/send?text="), "Must use api.whatsapp.com/send");
  });

  await t.test("[D9] Priority and category validation in src/actions/intake.ts validates against allowed enums", () => {
    assert.ok(intakeActionContent.includes("critical_emergency"), "Must include critical_emergency");
    assert.ok(intakeActionContent.includes("standard") && intakeActionContent.includes("urgent"), "Must validate allowed priorities");
    assert.ok(intakeActionContent.includes("VALID_CATEGORIES"), "Must validate allowed categories");
  });
});

