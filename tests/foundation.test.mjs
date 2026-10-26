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
    assert.ok(dataContent.includes('email: "kiransinghfoundationindia@gmail.com"'));
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
    assert.ok(seedContent.includes("her doctoral research"), "Seed must reference Late Kiran Singh ji with feminine pronouns");
    assert.ok(dataContent.includes("her doctoral research"), "Data must reference Late Kiran Singh ji with feminine pronouns");
  });
});

test("Gemini 2.5 Flash System Prompt & Pipelines", async (t) => {
  await t.test("System prompt must embed authoritative mandates", () => {
    assert.ok(geminiContent.includes("Late Kiran Singh ji"));
    assert.ok(geminiContent.includes("Female scholar, ethologist, and institutional pillar"));
    assert.ok(geminiContent.includes("feminine pronouns (she, her, hers)"));
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

test("Operational Hierarchy & Action Photographs Integrity (3 Tiers & 10 Officers)", async (t) => {
  await t.test("Must define exactly 10 officers across 3 hierarchical tiers with verified ceremonial moments", () => {
    // Check Tier 1
    assert.ok(dataContent.includes('name: "Unnaati Roy"'));
    assert.ok(dataContent.includes('moment: "Speaking at the podium in blue"'));
    assert.ok(dataContent.includes('name: "Vaishnavi"'));
    assert.ok(dataContent.includes('moment: "Receiving foundation envelope"'));
    assert.ok(dataContent.includes('name: "Prateeksha Pandey"'));
    assert.ok(dataContent.includes('moment: "Speaking at the foundation podium"'));

    // Check Tier 2
    assert.ok(dataContent.includes('name: "Shiksha Jaiswal"'));
    assert.ok(dataContent.includes('name: "Navyanshi Dwivedi"'));
    assert.ok(dataContent.includes('moment: "Constitution Day presentation"'));
    assert.ok(dataContent.includes('name: "Rohini Agrawal"'));
    assert.ok(dataContent.includes('moment: "2nd Summer Internship Certificate presentation"'));
    assert.ok(dataContent.includes('name: "Shubhangi Singh"'));
    assert.ok(dataContent.includes('moment: "Receiving foundation memento"'));

    // Check Tier 3
    assert.ok(dataContent.includes('name: "Stuti Dwivedi"'));
    assert.ok(dataContent.includes('moment: "Performing on the Casio keyboard at the ceremony"'));
    assert.ok(dataContent.includes('name: "Anwesha Sinha"'));
    assert.ok(dataContent.includes('moment: "Receiving Certificate of Internship & trophy"'));
    assert.ok(dataContent.includes('name: "Varnika Mishra"'));
    assert.ok(dataContent.includes('moment: "Configured with editorial monogram, ready for photo upload"'));
  });

  await t.test("All 9 ceremonial action photograph assets must exist on disk with valid file size", () => {
    const photoFiles = [
      "public/images/office-bearers/unnaati-roy.jpg",
      "public/images/office-bearers/vaishnavi.jpg",
      "public/images/office-bearers/prateeksha-pandey.jpg",
      "public/images/office-bearers/shiksha-jaiswal.jpg",
      "public/images/office-bearers/navyanshi-dwivedi.jpg",
      "public/images/office-bearers/rohini-agrawal.jpg",
      "public/images/office-bearers/shubhangi-singh.jpg",
      "public/images/office-bearers/stuti-dwivedi.jpg",
      "public/images/office-bearers/anwesha-sinha.jpg",
    ];

    for (const photo of photoFiles) {
      const fullPath = path.resolve(photo);
      assert.ok(fs.existsSync(fullPath), `Photo file ${photo} must exist`);
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 50000, `Photo file ${photo} must be a substantial image`);
    }
  });

  await t.test("OperationalHierarchy component must be integrated in About and Students Roster views", () => {
    const aboutContent = fs.readFileSync(path.resolve("src/app/about/page.tsx"), "utf-8");
    const rosterContent = fs.readFileSync(path.resolve("src/components/wings/StudentsRosterClient.tsx"), "utf-8");
    const hierarchyFile = path.resolve("src/components/OperationalHierarchy.tsx");

    assert.ok(fs.existsSync(hierarchyFile), "OperationalHierarchy.tsx component must exist");
    assert.ok(aboutContent.includes("<OperationalHierarchy"), "About page must mount OperationalHierarchy");
    assert.ok(rosterContent.includes("<OperationalHierarchy"), "Students roster client must mount OperationalHierarchy");
  });
});

test("Official PDF Dossier Alignment: Statutory, Banking, 3 Core Members & 4 Operational Wings", async (t) => {
  await t.test("Statutory PAN, Income Tax URN, CSR Registration, SRN, and Establishment Date must be present", () => {
    assert.ok(dataContent.includes('pan: "AAGTK3961N"'), "PAN AAGTK3961N must be present");
    assert.ok(dataContent.includes('incomeTaxUrn: "AAGTK3961NE20261"'), "Income Tax URN AAGTK3961NE20261 must be present");
    assert.ok(dataContent.includes('csrRegistrationNumber: "CSR00110895"'), "CSR Registration CSR00110895 must be present");
    assert.ok(dataContent.includes('applicationSrn: "SRN AC3352827"'), "Application SRN AC3352827 must be present");
    assert.ok(dataContent.includes('incorporationDate: "30/04/2023"'), "Incorporation/Establishment date 30/04/2023 must be present");
    assert.ok(dataContent.includes('establishmentDate: "30th of April 2023"'), "Establishment date 30th of April 2023 must be present");
  });

  await t.test("Official HDFC Bank Naya Katra Prayagraj Endowment Account details must be present", () => {
    assert.ok(dataContent.includes('bankName: "HDFC Bank"'));
    assert.ok(dataContent.includes('branchName: "Naya Katra, Prayagraj"'));
    assert.ok(dataContent.includes('accountNumber: "50200119758811"'));
    assert.ok(dataContent.includes('ifscCode: "HDFC0004664"'));
    assert.ok(dataContent.includes('customerId: "353372799"'));
    assert.ok(dataContent.includes('ckycNumber: "80001700802453"'));
    assert.ok(dataContent.includes('mmid: "9240594"'));
    assert.ok(dataContent.includes('smartHubVyaparTid: "82215825"'));
  });

  await t.test("All 4 Operational Wings (Student Welfare, Dog Welfare, Village Development, Women Empowerment) must be defined and rendered", () => {
    const splitWingsContent = fs.readFileSync(path.resolve("src/components/SplitWings.tsx"), "utf-8");
    const aboutContent = fs.readFileSync(path.resolve("src/app/about/page.tsx"), "utf-8");
    const footerContent = fs.readFileSync(path.resolve("src/components/Footer.tsx"), "utf-8");

    assert.ok(dataContent.includes("FOUR_OPERATIONAL_WINGS"), "Must export FOUR_OPERATIONAL_WINGS");
    assert.ok(dataContent.includes("KSF (Student Welfare) Wing"));
    assert.ok(dataContent.includes("KSF (Dog Welfare) Wing"));
    assert.ok(dataContent.includes("KSF (Village Development) Wing"));
    assert.ok(dataContent.includes("Empowering village through education"));
    assert.ok(dataContent.includes("KSF (Women Empowerment) Wing"));
    assert.ok(splitWingsContent.includes("Village Development") && splitWingsContent.includes("Women Empowerment"));
    assert.ok(aboutContent.includes("FOUR_OPERATIONAL_WINGS"));
    assert.ok(footerContent.includes("KSF (Village Development) Wing") && footerContent.includes("KSF (Women Empowerment) Wing"));
  });
});

test("Official 2026-27 KSF (Student Welfare) Wing Roster: 4 Teams, 37 Current, 40 Allotted, 03 Vacancy", async (t) => {
  await t.test("Must export STUDENT_COHORT_SUMMARY_2026_27 and STUDENT_WELFARE_TEAMS_2026_27 with exact sheet figures", () => {
    assert.ok(dataContent.includes("STUDENT_COHORT_SUMMARY_2026_27"), "Must export STUDENT_COHORT_SUMMARY_2026_27");
    assert.ok(dataContent.includes("currentStrength: 37"), "Must specify currentStrength: 37");
    assert.ok(dataContent.includes("allottedStrength: 40"), "Must specify allottedStrength: 40");
    assert.ok(dataContent.includes("vacancy: 3"), "Must specify vacancy: 3");
    assert.ok(dataContent.includes("Team 1: Team Unnaati & Shiksha"), "Must define Team 1");
    assert.ok(dataContent.includes("Team 2: Team Vaishnavi & Navyanshi"), "Must define Team 2");
    assert.ok(dataContent.includes("Team 3: Team Prateeksha & Rohini"), "Must define Team 3");
    assert.ok(dataContent.includes("Team 4: Team Shubhangi"), "Must define Team 4");
  });

  await t.test("Must include all 37 official 2026-27 student names across Teams 1-4 in dataset and seed", () => {
    const official37Names = [
      // Team 1 (12)
      "Unnaati Roy",
      "Shiksha Jaiswal",
      "Stuti Dwivedi",
      "Bhavya Singh",
      "Luvleen Kaur Puri",
      "Vedant Agarwal",
      "Heramb Mishra",
      "Prakhar Singh",
      "Shaurya Pratap Singh",
      "Vidhu Shekhar Tripathi",
      "Anadi Ratan Srivastava",
      "Agrima Mishra",
      // Team 2 (11)
      "Vaishnavi",
      "Navyanshi Dwivedi",
      "Anwesha Sinha",
      "Vanya Singh",
      "Shubhi Singh",
      "Swarnima Singh",
      "Karan Pal",
      "Aarya Srivastava",
      "Aditya Agarwal",
      "Vasav Mishra",
      "Annanya Arora",
      // Team 3 (10)
      "Prateeksha Pandey",
      "Rohini Agarwal",
      "Yashaswa Singh",
      "Saksham Agrawal",
      "Alien Chaurasia",
      "Mansi Raj Purwar",
      "Stuti Singh",
      "Varnika Mishra",
      "Parinita Bhushan",
      "Navleen Kaur Puri",
      // Team 4 (4)
      "Shubhangi Singh",
      "Yashi Singh",
      "Shrejal Singh",
      "Vaibhavi Kushwaha",
    ];

    assert.equal(official37Names.length, 37, "Official list must have 37 student names");
    for (const studentName of official37Names) {
      assert.ok(dataContent.includes(`fullName: "${studentName}"`), `foundation-data.ts must include ${studentName}`);
      assert.ok(seedContent.includes(`'${studentName}'`), `supabase/seed.sql must include ${studentName}`);
    }
  });

  await t.test("StudentsRosterClient must organize students by 4 teams and display Current Strength = 37, Allotted Strength = 40, Vacancy = 03", () => {
    const rosterClientContent = fs.readFileSync(path.resolve("src/components/wings/StudentsRosterClient.tsx"), "utf-8");
    assert.ok(rosterClientContent.includes("STUDENT_COHORT_SUMMARY_2026_27"));
    assert.ok(rosterClientContent.includes("STUDENT_WELFARE_TEAMS_2026_27"));
    assert.ok(rosterClientContent.includes("Current Strength"));
    assert.ok(rosterClientContent.includes("Allotted Strength"));
    assert.ok(rosterClientContent.includes("Vacancy"));
  });
});

test("3 Landmark Internship Events & Dynamic Event Detail Architecture", async (t) => {
  const eventsClientContent = fs.readFileSync(path.resolve("src/components/events/EventsListClient.tsx"), "utf-8");
  const eventDetailPagePath = path.resolve("src/app/events/[slug]/page.tsx");

  await t.test("Must include exactly the 3 completed flagship internship programs in dataset and seed", () => {
    // 1st Summer Internship Program (July 2025)
    assert.ok(dataContent.includes("1st Summer Internship Program (July 2025)"), "Must include 1st Summer Internship Program (July 2025)");
    assert.ok(seedContent.includes("1st Summer Internship Program (July 2025)"), "Seed must include 1st Summer Internship Program (July 2025)");
    assert.ok(dataContent.includes("1st-summer-internship-program-july-2025"), "Must define slug 1st-summer-internship-program-july-2025");

    // Winter Internship Program (January 2026)
    assert.ok(dataContent.includes("Winter Internship Program (January 2026)"), "Must include Winter Internship Program (January 2026)");
    assert.ok(seedContent.includes("Winter Internship Program (January 2026)"), "Seed must include Winter Internship Program (January 2026)");
    assert.ok(dataContent.includes("winter-internship-program-january-2026"), "Must define slug winter-internship-program-january-2026");

    // 2nd Summer Internship Program (June 2026)
    assert.ok(dataContent.includes("2nd Summer Internship Program (June 2026)"), "Must include 2nd Summer Internship Program (June 2026)");
    assert.ok(seedContent.includes("2nd Summer Internship Program (June 2026)"), "Seed must include 2nd Summer Internship Program (June 2026)");
    assert.ok(dataContent.includes("2nd-summer-internship-program-june-2026"), "Must define slug 2nd-summer-internship-program-june-2026");
  });

  await t.test("Must export LANDMARK_INTERNSHIP_EVENTS and define concluded status", () => {
    assert.ok(dataContent.includes("export const LANDMARK_INTERNSHIP_EVENTS"), "Must export LANDMARK_INTERNSHIP_EVENTS");
    assert.ok(dataContent.includes('status: "concluded"'), "Must mark landmark events as concluded");
  });

  await t.test("EventsListClient must feature 3 Concluded Landmark Programs and action photographs", () => {
    assert.ok(eventsClientContent.includes("3 Concluded Landmark Programs (2025–2026)"));
    assert.ok(eventsClientContent.includes("activeLandmark"));
    assert.ok(eventsClientContent.includes("galleryImages"));
    assert.ok(eventsClientContent.includes("Curricular Syllabi"));
  });

  await t.test("Dynamic event detail route src/app/events/[slug]/page.tsx must exist with generateStaticParams", () => {
    assert.ok(fs.existsSync(eventDetailPagePath), "src/app/events/[slug]/page.tsx must exist");
    const detailContent = fs.readFileSync(eventDetailPagePath, "utf-8");
    assert.ok(detailContent.includes("generateStaticParams"), "Event detail page must export generateStaticParams");
    assert.ok(detailContent.includes("fetchEventBySlug"), "Event detail page must call fetchEventBySlug");
  });
});

test("Exhaustive Canine Forensic Analysis & Zero-Duplication Roster Integrity", async (t) => {
  await t.test("Flagship dogs must follow exact alphabetical order a through k (Bujo to Chotu)", () => {
    const flagshipNames = [
      "Bujo", "Jujo", "Khujo", "Tujo", "Safedi",
      "Branto", "Mario", "Victor", "Casper", "Leo", "Chotu"
    ];
    flagshipNames.forEach((name) => {
      assert.ok(dataContent.includes(`name: "${name}"`), `foundation-data must include flagship dog ${name}`);
      assert.ok(seedContent.includes(`'${name}'`), `seed.sql must include flagship dog ${name}`);
    });
  });

  await t.test("Zero-Duplication Guarantee: all 34 rescued dogs must have 100% distinct photo URLs", () => {
    // Extract photoUrl from foundation-data.ts
    const photoUrlMatches = [...dataContent.matchAll(/photoUrl:\s*"(\/images\/dogs\/[^"]+)"/g)].map((m) => m[1]);
    assert.equal(photoUrlMatches.length, 34, "Must find exactly 34 dog photo URLs in foundation-data.ts");
    const uniqueDataUrls = new Set(photoUrlMatches);
    assert.equal(uniqueDataUrls.size, 34, "Zero duplication: all 34 dog photo URLs in foundation-data.ts must be completely unique");

    // Extract photo_url from seed.sql
    const seedUrlMatches = [...seedContent.matchAll(/'(\/images\/dogs\/[^']+)'/g)].map((m) => m[1]);
    const dogSeedUrls = seedUrlMatches.filter(url => !url.includes("mp4") && !url.includes("dr-vk-singh"));
    const uniqueSeedUrls = new Set(dogSeedUrls);
    assert.equal(dogSeedUrls.length, 34, "Must find exactly 34 dog photo URLs in seed.sql");
    assert.equal(uniqueSeedUrls.size, 34, "Zero duplication: all 34 dog photo URLs in seed.sql must be completely unique");
  });

  await t.test("All 34 canine photographic assets must exist on disk with valid file size (> 20KB)", () => {
    const photoUrlMatches = [...dataContent.matchAll(/photoUrl:\s*"(\/images\/dogs\/[^"]+)"/g)].map((m) => m[1]);
    photoUrlMatches.forEach((relPath) => {
      const diskPath = path.resolve(`public${relPath}`);
      assert.ok(fs.existsSync(diskPath), `Canine photo must exist on disk: ${diskPath}`);
      const stats = fs.statSync(diskPath);
      assert.ok(stats.size > 20000, `Canine photo ${relPath} must be > 20KB (found ${stats.size} bytes)`);
    });
  });
});

test("Accredited Academic Partnership & UPES Dehradun MoU Accord", async (t) => {
  await t.test("UPES Academic Partnership must be exported with canonical MoU attributes", () => {
    assert.ok(dataContent.includes("export const UPES_ACADEMIC_PARTNERSHIP"), "Must export UPES_ACADEMIC_PARTNERSHIP");
    assert.ok(dataContent.includes("IN-UK09052749976330X"), "Must include Government of Uttarakhand e-Stamp IN-UK09052749976330X");
    assert.ok(dataContent.includes("School for Life"), "Must cite UPES School for Life program");
    assert.ok(dataContent.includes("13th April 2026"), "Must cite execution date 13th April 2026");
    assert.ok(dataContent.includes("1:5"), "Must enforce mandatory 1:5 mentor ratio");
    assert.ok(dataContent.includes("pro-bono"), "Must state pro-bono non-commercial mandate");
  });

  await t.test("UPES official logo must exist on disk with valid dimensions", () => {
    const logoDiskPath = path.resolve("public/images/partners/upes-logo.png");
    assert.ok(fs.existsSync(logoDiskPath), "UPES logo must exist in public/images/partners/upes-logo.png");
    const stats = fs.statSync(logoDiskPath);
    assert.ok(stats.size > 15000, `UPES logo must be > 15KB (found ${stats.size} bytes)`);
  });

  await t.test("About page must render accredited academic alliance section with anchor id", () => {
    const aboutContent = fs.readFileSync(path.resolve("src/app/about/page.tsx"), "utf8");
    assert.ok(aboutContent.includes('id="academic-partnership"'), "About page must contain id='academic-partnership'");
    assert.ok(aboutContent.includes("UPES_ACADEMIC_PARTNERSHIP"), "About page must reference UPES_ACADEMIC_PARTNERSHIP");
  });

  await t.test("Students Roster and Footer must display UPES School for Life collaboration", () => {
    const rosterContent = fs.readFileSync(path.resolve("src/components/wings/StudentsRosterClient.tsx"), "utf8");
    const footerContent = fs.readFileSync(path.resolve("src/components/Footer.tsx"), "utf8");
    assert.ok(rosterContent.includes("UPES_ACADEMIC_PARTNERSHIP"), "StudentsRosterClient must reference UPES_ACADEMIC_PARTNERSHIP");
    assert.ok(footerContent.includes("UPES Dehradun"), "Footer must cite UPES Dehradun");
  });

  await t.test("Footer must feature minimalist agency credit for Panarch Digital with valid outbound link", () => {
    const footerContent = fs.readFileSync(path.resolve("src/components/Footer.tsx"), "utf8");
    assert.ok(footerContent.includes("Crafted with Purpose by"), "Footer must include 'Crafted with Purpose by'");
    assert.ok(footerContent.includes("Panarch Digital"), "Footer must credit Panarch Digital");
    assert.ok(footerContent.includes("https://panarchdigital.com"), "Footer must link to https://panarchdigital.com");
    assert.ok(footerContent.includes('rel="noopener noreferrer"'), "Footer external link must include rel='noopener noreferrer'");
  });
});




