import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Scholar Testimonials & Designing Committee / Team Posters Verification", async (t) => {
  const dataPath = path.resolve("src/lib/data/foundation-data.ts");
  const dataContent = fs.readFileSync(dataPath, "utf8");

  await t.test("Must export OFFICIAL_SCHOLAR_TESTIMONIALS_2026 with all 4 verified testimonials", () => {
    assert.ok(
      dataContent.includes("export const OFFICIAL_SCHOLAR_TESTIMONIALS_2026"),
      "Must export OFFICIAL_SCHOLAR_TESTIMONIALS_2026"
    );
    assert.ok(dataContent.includes("KSF/DISC/2026/099"), "Must include reference KSF/DISC/2026/099");
    assert.ok(dataContent.includes("KSF/DISC/2026/100"), "Must include reference KSF/DISC/2026/100");
    assert.ok(dataContent.includes("KSF/DISC/2026/101"), "Must include reference KSF/DISC/2026/101");
    assert.ok(dataContent.includes("KSF/TEST/2026/103"), "Must include reference KSF/TEST/2026/103");

    // Check authors
    assert.ok(dataContent.includes("Ms. Luvleen Kaur Puri"), "Must include author Ms. Luvleen Kaur Puri");
    assert.ok(dataContent.includes("Shubhangi Singh"), "Must include author Shubhangi Singh");
    assert.ok(dataContent.includes("Stuti Dwivedi"), "Must include author Stuti Dwivedi");
    assert.ok(dataContent.includes("Ms. Navleen Kaur Puri"), "Must include author Ms. Navleen Kaur Puri");
  });

  await t.test("Must verify verbatim quotes and excerpts from approved testimonials", () => {
    assert.ok(
      dataContent.includes("uplifting students through education while simultaneously championing animal welfare is genuinely inspiring"),
      "Must include Luvleen Kaur Puri transcript excerpt"
    );
    assert.ok(
      dataContent.includes("No matter the setbacks, we have always come together, found ways to bounce back, and continued giving our best"),
      "Must include Shubhangi Singh transcript excerpt"
    );
    assert.ok(
      dataContent.includes("What I appreciate most about the foundation is the sense of teamwork, encouragement and belonging it creates"),
      "Must include Stuti Dwivedi transcript excerpt"
    );
    assert.ok(
      dataContent.includes("Through various sessions and activities, I have gradually overcome my hesitation and become more comfortable expressing my thoughts"),
      "Must include Navleen Kaur Puri transcript excerpt"
    );
  });

  await t.test("Must export OFFICIAL_COMMITTEES_2026 with Designing Committee and core roster", () => {
    assert.ok(
      dataContent.includes("export const OFFICIAL_COMMITTEES_2026"),
      "Must export OFFICIAL_COMMITTEES_2026"
    );
    assert.ok(dataContent.includes("Designing Committee"), "Must include Designing Committee");
    assert.ok(dataContent.includes("Ms. Stuti Dwivedi"), "Must include Head Ms. Stuti Dwivedi");
    assert.ok(dataContent.includes("Shaurya Pratap Singh"), "Must include member Shaurya Pratap Singh");
    assert.ok(dataContent.includes("Official creative and visual communications directorate of Kiran Singh Foundation"), "Must include mandate");
  });

  await t.test("Must export OFFICIAL_TEAM_POSTERS_2026 with Teams I, II, III, and IV / Directorate", () => {
    assert.ok(
      dataContent.includes("export const OFFICIAL_TEAM_POSTERS_2026"),
      "Must export OFFICIAL_TEAM_POSTERS_2026"
    );
    assert.ok(dataContent.includes("Team I"), "Must include Team I");
    assert.ok(dataContent.includes("Vaishnavi (HSM)"), "Must include Team I Commander Vaishnavi (HSM)");
    assert.ok(dataContent.includes("Team II"), "Must include Team II");
    assert.ok(dataContent.includes("Ms. Prateeksha Pandey (HSM)"), "Must include Team II Commander Prateeksha Pandey");
    assert.ok(dataContent.includes("Team III"), "Must include Team III");
    assert.ok(dataContent.includes("Team IV"), "Must include Team IV");
    assert.ok(dataContent.includes("Shiksha Jaiswal"), "Must include Registrar Shiksha Jaiswal");
    assert.ok(dataContent.includes("Navyanshi Dwivedi"), "Must include Dy. Registrar Navyanshi Dwivedi");
    assert.ok(dataContent.includes("Vedant Agarwal"), "Must include HSM Vedant Agarwal");
  });

  await t.test("All 9 scanned testimonials and team hierarchy poster images must exist on disk and be > 50KB", () => {
    const images = [
      "public/images/testimonials/ksf-testimonial-099-luvleen-kaur-puri.jpg",
      "public/images/testimonials/ksf-testimonial-100-shubhangi-singh-hsm.jpg",
      "public/images/testimonials/ksf-testimonial-101-stuti-dwivedi-dc-head.jpg",
      "public/images/testimonials/ksf-testimonial-103-navleen-kaur-puri.jpg",
      "public/images/hierarchy/posters/ksf-designing-committee-poster.jpg",
      "public/images/hierarchy/posters/ksf-team-1-hierarchy-poster.jpg",
      "public/images/hierarchy/posters/ksf-team-2-hierarchy-poster.jpg",
      "public/images/hierarchy/posters/ksf-team-3-hierarchy-poster.jpg",
      "public/images/hierarchy/posters/ksf-team-4-directorate-hierarchy-poster.jpg",
    ];

    for (const imgPath of images) {
      const fullPath = path.resolve(imgPath);
      assert.ok(fs.existsSync(fullPath), `Asset file must exist on disk: ${imgPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(
        stats.size > 50000,
        `Asset file must be higher than 50KB for crisp rendering: ${imgPath} (size: ${stats.size} bytes)`
      );
    }
  });

  await t.test("Component ScholarTestimonialsSection must exist and provide accessible interactive lightbox", () => {
    const compPath = path.resolve("src/components/testimonials/ScholarTestimonialsSection.tsx");
    assert.ok(fs.existsSync(compPath), "ScholarTestimonialsSection.tsx must exist");
    const content = fs.readFileSync(compPath, "utf8");

    assert.ok(content.includes("OFFICIAL_SCHOLAR_TESTIMONIALS_2026"), "Must import testimonials data");
    assert.ok(content.includes("lightboxScanUrl"), "Must manage lightbox state");
    assert.ok(content.includes('role="dialog"') || content.includes("aria-modal=\"true\""), "Must be accessible dialog");
    assert.ok(content.includes("Escape"), "Must handle Escape key for modal dismissal");
    assert.ok(content.includes("min-h-[44px]") || content.includes("py-3") || content.includes("py-2.5"), "Must enforce accessible touch targets");
  });

  await t.test("Component OfficialHierarchyPostersViewer must exist and provide multi-tab poster switcher", () => {
    const compPath = path.resolve("src/components/hierarchy/OfficialHierarchyPostersViewer.tsx");
    assert.ok(fs.existsSync(compPath), "OfficialHierarchyPostersViewer.tsx must exist");
    const content = fs.readFileSync(compPath, "utf8");

    assert.ok(content.includes("OFFICIAL_COMMITTEES_2026"), "Must import committee data");
    assert.ok(content.includes("OFFICIAL_TEAM_POSTERS_2026"), "Must import team posters data");
    assert.ok(content.includes("activeTab"), "Must manage active tab state");
    assert.ok(content.includes("committee"), "Must support committee tab");
    assert.ok(content.includes("lightboxPosterUrl"), "Must support full screen zoom modal");
  });

  await t.test("StudentsRosterClient must integrate ScholarTestimonialsSection and OfficialHierarchyPostersViewer", () => {
    const rosterPath = path.resolve("src/components/wings/StudentsRosterClient.tsx");
    const content = fs.readFileSync(rosterPath, "utf8");

    assert.ok(
      content.includes("ScholarTestimonialsSection"),
      "StudentsRosterClient must import ScholarTestimonialsSection"
    );
    assert.ok(
      content.includes("<ScholarTestimonialsSection"),
      "StudentsRosterClient must render ScholarTestimonialsSection"
    );
    assert.ok(
      content.includes("OfficialHierarchyPostersViewer"),
      "StudentsRosterClient must import OfficialHierarchyPostersViewer"
    );
    assert.ok(
      content.includes("<OfficialHierarchyPostersViewer"),
      "StudentsRosterClient must render OfficialHierarchyPostersViewer"
    );
  });

  await t.test("Dynamic event detail route must integrate both testimonials and hierarchy posters for winter program", () => {
    const eventPath = path.resolve("src/app/events/[slug]/page.tsx");
    const content = fs.readFileSync(eventPath, "utf8");

    assert.ok(
      content.includes("ScholarTestimonialsSection"),
      "Event page must import ScholarTestimonialsSection"
    );
    assert.ok(
      content.includes("OfficialHierarchyPostersViewer"),
      "Event page must import OfficialHierarchyPostersViewer"
    );
    assert.ok(
      content.includes("<OfficialHierarchyPostersViewer"),
      "Event page must render OfficialHierarchyPostersViewer"
    );
    assert.ok(
      content.includes("<ScholarTestimonialsSection"),
      "Event page must render ScholarTestimonialsSection"
    );
  });

  await t.test("OperationalHierarchy must include Designing Committee and poster zoom modal", () => {
    const hierPath = path.resolve("src/components/OperationalHierarchy.tsx");
    const content = fs.readFileSync(hierPath, "utf8");

    assert.ok(
      content.includes("OFFICIAL_COMMITTEES_2026"),
      "OperationalHierarchy must import OFFICIAL_COMMITTEES_2026"
    );
    assert.ok(
      content.includes("designing"),
      "OperationalHierarchy must include designing committee filter"
    );
    assert.ok(
      content.includes("selectedCommitteePoster"),
      "OperationalHierarchy must support poster zoom lightbox"
    );
  });
});
