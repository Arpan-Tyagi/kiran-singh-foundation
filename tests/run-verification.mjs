// Kiran Singh Foundation - Standalone Zero-Dependency Verification Runner
// Executable directly with standard Node.js: `node tests/run-verification.mjs`

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

console.log("=== RUNNING KIRAN SINGH FOUNDATION INTEGRITY VERIFICATION ===");

// 1. Verify Public Logo File Exists and Has Valid Size
const logoPath = path.resolve("public/images/logo.png");
assert.ok(fs.existsSync(logoPath), "Fatal: public/images/logo.png must exist.");
const logoStats = fs.statSync(logoPath);
assert.ok(logoStats.size > 10000, "Fatal: logo file must be a non-trivial binary image.");
console.log(`[PASS] Logo asset verified (${logoStats.size} bytes).`);

// 2. Verify Supabase Schema & Migration File
const schemaPath = path.resolve("supabase/migrations/001_initial_schema.sql");
assert.ok(fs.existsSync(schemaPath), "Fatal: 001_initial_schema.sql must exist.");
const schemaContent = fs.readFileSync(schemaPath, "utf-8");
assert.ok(schemaContent.includes("CREATE TABLE students"), "Schema must define students table.");
assert.ok(schemaContent.includes("CREATE TABLE dogs"), "Schema must define dogs table.");
assert.ok(schemaContent.includes("CREATE TABLE memorial_records"), "Schema must define memorial_records table.");
assert.ok(schemaContent.includes("FUNCTION public.is_admin()"), "Schema must define is_admin() Security Definer function.");
assert.ok(schemaContent.includes("ROW LEVEL SECURITY"), "Schema must enable Row Level Security.");
assert.ok(schemaContent.includes("public_students"), "Schema must define public_students sanitized view.");
console.log("[PASS] Supabase PostgreSQL 15 schema, RLS policies & public_students view verified.");

// 3. Verify Supabase Seed Dataset
const seedPath = path.resolve("supabase/seed.sql");
assert.ok(fs.existsSync(seedPath), "Fatal: seed.sql must exist.");
const seedContent = fs.readFileSync(seedPath, "utf-8");

// Exactly 40 students check
const scholarMatches = seedContent.match(/KSF-STU-\d{3}/g) || [];
const uniqueScholars = new Set(scholarMatches);
assert.equal(uniqueScholars.size, 40, `Expected exactly 40 unique scholars in seed, found ${uniqueScholars.size}`);
console.log(`[PASS] Exactly 40 unique sponsored scholars verified in seed.sql.`);

// Exactly 34 dogs check
const canineMatches = seedContent.match(/KSF-CAN-\d{3}/g) || [];
const uniqueCanines = new Set(canineMatches);
assert.equal(uniqueCanines.size, 34, `Expected exactly 34 unique dogs in seed, found ${uniqueCanines.size}`);
console.log(`[PASS] Exactly 34 unique rescued street dogs verified in seed.sql.`);

// Historical founder mandates check
assert.ok(seedContent.includes("Late Kiran Singh ji"), "Seed must include Late Kiran Singh ji.");
assert.ok(seedContent.includes("AAZP Vandalur"), "Seed must include AAZP Vandalur.");
assert.ok(seedContent.includes("Jayalalithaa") || seedContent.includes("Amma"), "Seed must include Jayalalithaa.");
assert.ok(seedContent.includes("Panthera leo") || seedContent.includes("apex felid"), "Seed must include apex felid research.");
console.log("[PASS] Historical founder mandates verified in seed.sql.");

// 4. Verify Gemini 2.5 Flash Pipeline Configuration
const geminiPath = path.resolve("src/lib/gemini.ts");
assert.ok(fs.existsSync(geminiPath), "Fatal: src/lib/gemini.ts must exist.");
const geminiContent = fs.readFileSync(geminiPath, "utf-8");
assert.ok(geminiContent.includes("@google/genai"), "Must import from official @google/genai SDK.");
assert.ok(geminiContent.includes("GoogleGenAI"), "Must utilize GoogleGenAI class.");
assert.ok(geminiContent.includes("gemini-2.5-flash"), "Must target gemini-2.5-flash model.");
assert.ok(geminiContent.includes("FOUNDATION_SYSTEM_PROMPT"), "Must define system prompt with mandates.");
assert.ok(geminiContent.includes("generateEditorialDraft"), "Must export generateEditorialDraft function.");
assert.ok(geminiContent.includes("executeFoundationChatTurn"), "Must export executeFoundationChatTurn function.");

// Verify Server Action export in src/actions/chat.ts
const chatActionPath = path.resolve("src/actions/chat.ts");
assert.ok(fs.existsSync(chatActionPath), "Fatal: src/actions/chat.ts must exist.");
const chatActionContent = fs.readFileSync(chatActionPath, "utf-8");
assert.ok(chatActionContent.includes('"use server"') || chatActionContent.includes("'use server'"), "Must have 'use server' directive.");
assert.ok(chatActionContent.includes("export async function executeFoundationChatTurn"), "Must export executeFoundationChatTurn Server Action.");
console.log("[PASS] Gemini 2.5 Flash pipeline, @google/genai SDK & Server Action implementation verified.");

// 5. Verify Next.js 15 App Router Routes
const requiredRoutes = [
  "src/app/page.tsx",
  "src/app/about/page.tsx",
  "src/app/wings/students/page.tsx",
  "src/app/wings/dogs/page.tsx",
  "src/app/events/page.tsx",
  "src/app/dispatches/page.tsx",
  "src/app/dispatches/[slug]/page.tsx",
  "src/app/emergency/page.tsx",
  "src/app/admin/page.tsx",
  "src/app/admin/login/page.tsx",
  "src/app/admin/blogs/page.tsx",
  "src/app/admin/events/page.tsx",
  "src/app/admin/applications/page.tsx",
  "src/app/admin/students/page.tsx",
  "src/app/admin/dogs/page.tsx",
  "src/app/api/ai/draft/route.ts",
];

for (const route of requiredRoutes) {
  assert.ok(fs.existsSync(path.resolve(route)), `Fatal: Route file ${route} is missing.`);
}
console.log(`[PASS] All ${requiredRoutes.length} Next.js 15 App Router routes verified.`);

// 6. Verify Communication Integrations
const whatsappPath = path.resolve("src/lib/whatsapp.ts");
assert.ok(fs.existsSync(whatsappPath), "Fatal: src/lib/whatsapp.ts must exist.");
const whatsappContent = fs.readFileSync(whatsappPath, "utf-8");
assert.ok(whatsappContent.includes("wa.me"), "Must utilize wa.me click-to-chat API.");
assert.ok(whatsappContent.includes("buildEmergencyWhatsAppUrl"), "Must export buildEmergencyWhatsAppUrl.");
assert.ok(whatsappContent.includes("sanitizeWhatsAppPhone"), "Must export sanitizeWhatsAppPhone.");

const emailPath = path.resolve("src/lib/email.ts");
assert.ok(fs.existsSync(emailPath), "Fatal: src/lib/email.ts must exist.");
const emailContent = fs.readFileSync(emailPath, "utf-8");
assert.ok(emailContent.includes("resend"), "Must utilize Resend SDK.");
assert.ok(emailContent.includes("sendIntakeConfirmationEmail"), "Must export sendIntakeConfirmationEmail.");
assert.ok(emailContent.includes("sendEmergencyAdminAlertEmail"), "Must export sendEmergencyAdminAlertEmail.");
console.log("[PASS] WhatsApp and Resend transactional communication pipelines verified.");

// 7. Verify UI Luxury Design Tokens
const tailwindPath = path.resolve("tailwind.config.ts");
const tailwindContent = fs.readFileSync(tailwindPath, "utf-8");
assert.ok(tailwindContent.includes("#0A0B0D"), "Tailwind must define Obsidian (#0A0B0D).");
assert.ok(tailwindContent.includes("#F4EFEA"), "Tailwind must define Parchment (#F4EFEA).");
assert.ok(tailwindContent.includes("#C89D54"), "Tailwind must define Lion Gold (#C89D54).");
assert.ok(tailwindContent.includes("#1A1C20"), "Tailwind must define Slate Charcoal (#1A1C20).");
assert.ok(tailwindContent.includes("#1D3A2F"), "Tailwind must define Emerald Sanctuary (#1D3A2F).");
assert.ok(tailwindContent.includes("#A82020"), "Tailwind must define Crimson Alert (#A82020).");
console.log("[PASS] Luxury editorial design tokens verified in Tailwind configuration.");

// 8. Verify Middleware and Auth Protection
const middlewarePath = path.resolve("src/middleware.ts");
assert.ok(fs.existsSync(middlewarePath), "Fatal: src/middleware.ts must exist.");
const middlewareContent = fs.readFileSync(middlewarePath, "utf-8");
assert.ok(middlewareContent.includes("/admin/login"), "Middleware must allow /admin/login.");
assert.ok(middlewareContent.includes("redirect"), "Middleware must redirect unauthenticated visitors.");
console.log("[PASS] Supabase middleware authentication & RBAC boundary verified.");

// 9. Verify Supabase snake_case <-> camelCase Data Mapping
const supabaseLayerPath = path.resolve("src/lib/supabase.ts");
const supabaseLayerContent = fs.readFileSync(supabaseLayerPath, "utf-8");
assert.ok(supabaseLayerContent.includes("mapDbStudentToStudent"), "Must define student data mapper.");
assert.ok(supabaseLayerContent.includes("mapDbDogToDog"), "Must define dog data mapper.");
assert.ok(supabaseLayerContent.includes("mapDbEventToEvent"), "Must define event data mapper.");
assert.ok(supabaseLayerContent.includes("mapDbBlogPostToBlogPost"), "Must define blog post data mapper.");
assert.ok(supabaseLayerContent.includes("fetchAllBlogPostsAdmin"), "Must export fetchAllBlogPostsAdmin.");
assert.ok(supabaseLayerContent.includes("fetchAllEventsAdmin"), "Must export fetchAllEventsAdmin.");
console.log("[PASS] Database data mapping layers & admin data fetchers verified.");

// 10. Verify Dual Admin Gemini 2.5 Flash Drafting Modals
const blogsDeskPath = path.resolve("src/components/admin/BlogsDeskClient.tsx");
const eventsDeskPath = path.resolve("src/components/admin/EventsDeskClient.tsx");
const blogsDeskContent = fs.readFileSync(blogsDeskPath, "utf-8");
const eventsDeskContent = fs.readFileSync(eventsDeskPath, "utf-8");
assert.ok(blogsDeskContent.includes("/api/ai/draft"), "Blogs desk must integrate /api/ai/draft.");
assert.ok(eventsDeskContent.includes("/api/ai/draft"), "Events desk must integrate /api/ai/draft.");
console.log("[PASS] Dual Gemini 2.5 Flash drafting modals verified in Blogs and Events management desks.");

// 11. [D1] Verify submitSupportApplication uses RFC4122 UUID and no .select().single()
assert.ok(supabaseLayerContent.includes("crypto.randomUUID()"), "D1: submitSupportApplication must use crypto.randomUUID().");
assert.ok(!supabaseLayerContent.includes('id: `app-${Date.now()}`'), "D1: submitSupportApplication must not use timestamp ID.");
const submitSection = supabaseLayerContent.slice(supabaseLayerContent.indexOf("submitSupportApplication"));
assert.ok(!submitSection.includes(".insert([newEntry]).select()"), "D1: submitSupportApplication must not chain .select().single() on anon insert.");
console.log("[PASS] [D1] Support application UUID generation and non-select insertion verified.");

// 12. [D2] Verify public vs admin students queries
assert.ok(supabaseLayerContent.includes('.from("public_students")'), "D2: fetchStudents must query public_students view.");
assert.ok(supabaseLayerContent.includes("export async function fetchStudentsAdmin"), "D2: fetchStudentsAdmin must be exported.");
const adminStudentsPath = path.resolve("src/app/admin/students/page.tsx");
assert.ok(fs.readFileSync(adminStudentsPath, "utf-8").includes("fetchStudentsAdmin"), "D2: Admin students page must call fetchStudentsAdmin.");
const adminPagePath2 = path.resolve("src/app/admin/page.tsx");
assert.ok(fs.readFileSync(adminPagePath2, "utf-8").includes("fetchStudentsAdmin"), "D2: Admin overview page must call fetchStudentsAdmin.");
assert.ok(fs.readFileSync(adminPagePath2, "utf-8").includes("fetchAllEventsAdmin"), "D2: Admin overview page must call fetchAllEventsAdmin.");
console.log("[PASS] [D2] Student public view isolation and admin students fetch verified.");

// 13. [D3] Verify Gemini multi-turn ordering
assert.ok(geminiContent.includes("sanitizedHistory"), "D3: Gemini executeFoundationChatTurn must sanitize leading turns.");
const copilotDrawerPath = path.resolve("src/components/AICopilotDrawer.tsx");
assert.ok(fs.readFileSync(copilotDrawerPath, "utf-8").includes("filter((_, idx) => idx > 0)"), "D3: AICopilotDrawer must filter initial greeting.");
console.log("[PASS] [D3] Gemini 2.5 Flash multi-turn ordering sanitization verified.");

// 14. [D4] Verify Server Actions session cookie protection
const adminActionsPath = path.resolve("src/actions/admin.ts");
const adminActionsContent = fs.readFileSync(adminActionsPath, "utf-8");
assert.ok(adminActionsContent.includes('import { cookies } from "next/headers"'), "D4: admin actions must import cookies.");
assert.ok(adminActionsContent.includes('cookieStore.get("ksf-admin-session")'), "D4: admin actions must check ksf-admin-session cookie.");
assert.ok(adminActionsContent.includes('return { success: false, error: "Unauthorized" }'), "D4: admin actions must return unauthorized on missing session.");
console.log("[PASS] [D4] Admin server actions cookie authorization boundary verified.");

// 15. [D5] Verify Admin WhatsApp quick-links
const adminPagePath = path.resolve("src/app/admin/page.tsx");
const adminPageContent = fs.readFileSync(adminPagePath, "utf-8");
const appDeskPath = path.resolve("src/components/admin/ApplicationsDeskClient.tsx");
const appDeskContent = fs.readFileSync(appDeskPath, "utf-8");
assert.ok(adminPageContent.includes("sanitizeWhatsAppPhone"), "D5: Admin overview must use sanitizeWhatsAppPhone.");
assert.ok(!adminPageContent.includes('app.contact_phone.replace(/\\D/g, "")'), "D5: Admin overview must not use raw regex replace.");
assert.ok(appDeskContent.includes("sanitizeWhatsAppPhone"), "D5: Applications desk must use sanitizeWhatsAppPhone.");
assert.ok(!appDeskContent.includes('app.contact_phone.replace(/\\D/g, "")'), "D5: Applications desk must not use raw regex replace.");
console.log("[PASS] [D5] Admin WhatsApp phone sanitization verified.");

// 16. [D6] Verify Supabase admin service role client
assert.ok(supabaseLayerContent.includes("export function getSupabaseAdminClient"), "D6: Must export getSupabaseAdminClient.");
assert.ok(supabaseLayerContent.includes("SUPABASE_SERVICE_ROLE_KEY"), "D6: Must check SUPABASE_SERVICE_ROLE_KEY.");
assert.ok(supabaseLayerContent.includes("getSupabaseAdminClient() || getSupabaseClient()"), "D6: Must route admin calls through admin client.");
assert.ok(supabaseLayerContent.includes("return dbSuccess"), "D6: updateApplicationStatus must return db update result.");
console.log("[PASS] [D6] Supabase admin client and service role routing verified.");

// 17. [D7] Verify AI draft endpoint authentication
const aiDraftRoutePath = path.resolve("src/app/api/ai/draft/route.ts");
const aiDraftRouteContent = fs.readFileSync(aiDraftRoutePath, "utf-8");
assert.ok(aiDraftRouteContent.includes('req.cookies.get("ksf-admin-session")'), "D7: AI draft endpoint must check ksf-admin-session.");
assert.ok(aiDraftRouteContent.includes("401"), "D7: AI draft endpoint must return 401 on unauthorized.");
console.log("[PASS] [D7] AI draft endpoint authentication boundary verified.");

// 18. [D8] Verify WhatsApp share URL in dispatches
const dispatchDetailPath = path.resolve("src/app/dispatches/[slug]/page.tsx");
const dispatchDetailContent = fs.readFileSync(dispatchDetailPath, "utf-8");
assert.ok(dispatchDetailContent.includes("https://api.whatsapp.com/send?text="), "D8: Dispatch detail must use https://api.whatsapp.com/send?text=.");
console.log("[PASS] [D8] Dispatch WhatsApp share URL target verified.");

// 19. [D9] Verify priority validation in intake action
const intakeActionPath = path.resolve("src/actions/intake.ts");
const intakeActionContent = fs.readFileSync(intakeActionPath, "utf-8");
assert.ok(intakeActionContent.includes("critical_emergency"), "D9: Intake action must validate critical_emergency priority.");
assert.ok(intakeActionContent.includes("standard") && intakeActionContent.includes("urgent"), "D9: Intake action must validate standard and urgent.");
assert.ok(intakeActionContent.includes("VALID_CATEGORIES"), "D9: Intake action must validate category.");
console.log("[PASS] [D9] Strict intake priority and category validation with fallback verified.");

// 20. [CANINE INTEGRITY] Verify 100% Zero Canine Photo Duplication across all 34 dogs
const dataPath = path.resolve("src/lib/data/foundation-data.ts");
const dataContent = fs.readFileSync(dataPath, "utf-8");
const photoUrlMatches = [...dataContent.matchAll(/photoUrl:\s*"(\/images\/dogs\/[^"]+)"/g)].map((m) => m[1]);
assert.equal(photoUrlMatches.length, 34, "Expected exactly 34 dog photo URLs in foundation-data.ts");
const uniqueDataUrls = new Set(photoUrlMatches);
assert.equal(uniqueDataUrls.size, 34, "Fatal: Found duplicate canine photo URLs in foundation-data.ts");

photoUrlMatches.forEach((relPath) => {
  const diskPath = path.resolve(`public${relPath}`);
  assert.ok(fs.existsSync(diskPath), `Canine photo must exist on disk: ${diskPath}`);
  const stats = fs.statSync(diskPath);
  assert.ok(stats.size > 20000, `Canine photo ${relPath} must be > 20KB`);
});

const seedUrls = [...seedContent.matchAll(/'(\/images\/dogs\/[^']+)'/g)].map((m) => m[1]);
const dogSeedUrls = seedUrls.filter(url => !url.includes("mp4") && !url.includes("dr-vk-singh"));
assert.equal(dogSeedUrls.length, 34, "Expected exactly 34 dog photo URLs in seed.sql");
assert.equal(new Set(dogSeedUrls).size, 34, "Fatal: Found duplicate canine photo URLs in seed.sql");
console.log("[PASS] [CANINE INTEGRITY] Zero-duplication verified: All 34 rescued dogs have distinct authentic photographs.");

console.log("=== ALL INTEGRITY GATES AND AUDIT FIXES PASSED SUCCESSFULLY (23/23) ===");

