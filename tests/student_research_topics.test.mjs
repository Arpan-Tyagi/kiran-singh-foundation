import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Student Research Topics & Responsive Audit Verification", async (t) => {
  const dataPath = path.resolve("src/lib/data/foundation-data.ts");
  const dataContent = fs.readFileSync(dataPath, "utf8");

  await t.test("Must export STUDENT_RESEARCH_TOPIC_DOSSIERS_2026 with all 4 official decrees", () => {
    assert.ok(
      dataContent.includes("export const STUDENT_RESEARCH_TOPIC_DOSSIERS_2026"),
      "Must export STUDENT_RESEARCH_TOPIC_DOSSIERS_2026"
    );
    assert.ok(dataContent.includes("KSF/DISC/2026/093"), "Must include decree KSF/DISC/2026/093");
    assert.ok(dataContent.includes("KSF/DISC/2026/094"), "Must include decree KSF/DISC/2026/094");
    assert.ok(dataContent.includes("KSF/DISC/2026/095"), "Must include decree KSF/DISC/2026/095");
    assert.ok(dataContent.includes("KSF/DISC/2026/096"), "Must include decree KSF/DISC/2026/096");
  });

  await t.test("Must verify all 4 official research topic titles match decrees exactly", () => {
    assert.ok(
      dataContent.includes("Empowering Young People through Education - with Choices that Broaden their Futures"),
      "Topic 093 title must match official decree"
    );
    assert.ok(
      dataContent.includes("The existing Criminal Justice System in India"),
      "Topic 094 title must match official decree"
    );
    assert.ok(
      dataContent.includes("How AI is utilising our emotions to violate Right to Privacy."),
      "Topic 095 title must match official decree"
    );
    assert.ok(
      dataContent.includes("Mind of a politician to face a crisis situation"),
      "Topic 096 title must match official decree"
    );
  });

  await t.test("Must verify statutory academic guidelines (Abstract, Keywords, Footnotes)", () => {
    assert.ok(dataContent.includes("300 words; Italics; Times New Roman; Font Size 12"), "Must mandate 300 words TNR 12 abstract in italics");
    assert.ok(dataContent.includes("Min - 10; Italics; Times New Roman; Font Size 12"), "Must mandate min 10 keywords in TNR 12 italics");
    assert.ok(dataContent.includes("Calibri, Font Size 10, Min. 10 footnotes"), "Must mandate min 10 footnotes in Calibri 10");
    assert.ok(dataContent.includes("KSF Approved 2026"), "Must mandate official gold seal KSF Approved 2026");
    assert.ok(dataContent.includes("+91-9670970750"), "Must include official secretariat contact");
  });

  await t.test("Must verify critical syllabus modules (NEP 2020, KS Puttaswamy, Crime Elements, Crisis Decision Making)", () => {
    assert.ok(dataContent.includes("NEP, 2020 :- Educational Shift towards Change"), "Topic 093 must include NEP 2020 module");
    assert.ok(dataContent.includes("Elements of Crime. Explain through case laws"), "Topic 094 must include Elements of Crime module");
    assert.ok(dataContent.includes("Right to Privacy. Judgement of KS Puttaswamy v. UOI"), "Topic 095 must include KS Puttaswamy judgement module");
    assert.ok(dataContent.includes("Difference between Rote Learning and Grassroot level experience"), "Topic 096 must include Rote Learning vs Grassroots experience module");
  });

  await t.test("All 4 scanned decree images must exist on disk in public folder and be > 50KB", () => {
    const images = [
      "public/images/events/winter-2026-27/research-topics/ksf-disc-2026-093-empowering-education.jpg",
      "public/images/events/winter-2026-27/research-topics/ksf-disc-2026-094-criminal-justice-system.jpg",
      "public/images/events/winter-2026-27/research-topics/ksf-disc-2026-095-ai-emotions-right-to-privacy.jpg",
      "public/images/events/winter-2026-27/research-topics/ksf-disc-2026-096-mind-of-politician-crisis.jpg",
    ];

    for (const img of images) {
      const fullPath = path.resolve(img);
      assert.ok(fs.existsSync(fullPath), `Image file must exist: ${img}`);
      assert.ok(fs.statSync(fullPath).size > 50000, `Image file must be > 50KB: ${img}`);
    }
  });

  await t.test("Must export PUBLISHED_STUDENT_PAPERS with full paper for KSF/DISC/2026/096", () => {
    const papersPath = path.resolve("src/lib/data/student-papers-data.ts");
    assert.ok(fs.existsSync(papersPath), "student-papers-data.ts must exist");
    const paperContent = fs.readFileSync(papersPath, "utf8");

    assert.ok(paperContent.includes("PUBLISHED_STUDENT_PAPERS"), "Must export PUBLISHED_STUDENT_PAPERS");
    assert.ok(paperContent.includes("paper-disc-2026-096"), "Must contain paper-disc-2026-096");
    assert.ok(paperContent.includes("Mr. Anuj Kumar Singh"), "Must include author Mr. Anuj Kumar Singh");
    assert.ok(paperContent.includes("Ms. Vaishnavi"), "Must include author Ms. Vaishnavi");
    assert.ok(paperContent.includes("Mr. Karan Pal"), "Must include author Mr. Karan Pal");
    assert.ok(paperContent.includes("Suggestions for Institutional and Policy Reform"), "Must include Section 8 Suggestions");
    assert.ok(paperContent.includes("Statutory Creation of Community Liaison Cells within DDMAs"), "Must include suggestion 1");
    assert.ok(paperContent.includes("Paschim Banga Khet Mazdoor Samity v. State of West Bengal"), "Must cite Article 21 ruling");
    assert.ok(paperContent.includes("Boin, A., & ’t Hart, P."), "Must cite Boin and 't Hart");
  });

  await t.test("Must export PUBLISHED_STUDENT_PAPERS with full paper for KSF/DISC/2026/093", () => {
    const papersPath = path.resolve("src/lib/data/student-papers-data.ts");
    const paperContent = fs.readFileSync(papersPath, "utf8");

    assert.ok(paperContent.includes("paper-disc-2026-093"), "Must contain paper-disc-2026-093");
    assert.ok(paperContent.includes("Ms. Shubhi Singh"), "Must include author Ms. Shubhi Singh");
    assert.ok(paperContent.includes("Ms. Annanya Arora"), "Must include author Ms. Annanya Arora");
    assert.ok(paperContent.includes("NIPUN Bharat"), "Must include NIPUN Bharat FLN framework");
    assert.ok(paperContent.includes("Academic Bank of Credits"), "Must include Academic Bank of Credits");
    assert.ok(paperContent.includes("Article 21A"), "Must include Article 21A jurisprudence");
  });

  await t.test("Must export SCHOLAR_SPECIAL_MONOGRAPHS with Vanya's decision-science report and Stuti Singh's monograph", () => {
    const papersPath = path.resolve("src/lib/data/student-papers-data.ts");
    const paperContent = fs.readFileSync(papersPath, "utf8");

    assert.ok(paperContent.includes("SCHOLAR_SPECIAL_MONOGRAPHS"), "Must export SCHOLAR_SPECIAL_MONOGRAPHS");
    assert.ok(paperContent.includes("KSF-STU-016"), "Must include scholar ID KSF-STU-016");
    assert.ok(paperContent.includes("Ms. Vanya Singh"), "Must include author Ms. Vanya Singh");
    assert.ok(paperContent.includes("Roger Boisjoly"), "Must cite engineer Roger Boisjoly");
    assert.ok(paperContent.includes("BATNA"), "Must include BATNA framework");

    // Stuti Singh monograph
    assert.ok(paperContent.includes("KSF-STU-030"), "Must include scholar ID KSF-STU-030");
    assert.ok(paperContent.includes("Ms. Stuti Singh"), "Must include author Ms. Stuti Singh");
    assert.ok(paperContent.includes("THE POWER OF QUESTIONING"), "Must include title THE POWER OF QUESTIONING");
    assert.ok(paperContent.includes("Socratic Method"), "Must include Socratic Method");

    // Newly uploaded monographs: Luvleen & Stuti Dwivedi, Annanya Arora, Sacrifices & Success
    assert.ok(paperContent.includes("DON'T SPEAK WHEN YOU ARE ANGRY"), "Must include Luvleen & Stuti monograph title");
    assert.ok(paperContent.includes("Ms. Luvleen Kaur Puri & Ms. Stuti Dwivedi"), "Must credit Luvleen Kaur Puri & Stuti Dwivedi");
    assert.ok(paperContent.includes("THE POWER OF CONSISTENCY: CAN IT OVERPOWER TALENT?"), "Must include Annanya Arora report title");
    assert.ok(paperContent.includes("Ms. Annanya Arora"), "Must credit Annanya Arora");
    assert.ok(paperContent.includes("SACRIFICES ARE DIRECTLY PROPORTIONAL TO SUCCESS"), "Must include Sacrifices & Success monograph title");
  });

  await t.test("All new monograph cover images and original submission files must exist on disk", () => {
    const coverFiles = [
      "public/images/publications/monographs/luvleen-stuti-dont-speak-angry.jpg",
      "public/images/publications/monographs/annanya-arora-consistency-talent.jpg",
      "public/images/publications/monographs/ksf-sacrifices-success.jpg",
    ];
    for (const c of coverFiles) {
      const p = path.resolve(c);
      assert.ok(fs.existsSync(p), `Monograph cover must exist: ${c}`);
      assert.ok(fs.statSync(p).size > 50000, `Monograph cover must be > 50KB: ${c}`);
    }

    const docFiles = [
      "public/docs/monographs/dont-speak-when-angry-luvleen-stuti.pptx",
      "public/docs/monographs/power-of-consistency-annanya-arora.pdf",
      "public/docs/monographs/sacrifices-directly-proportional-to-success.pdf",
    ];
    for (const d of docFiles) {
      const p = path.resolve(d);
      assert.ok(fs.existsSync(p), `Monograph source document must exist: ${d}`);
      assert.ok(fs.statSync(p).size > 100000, `Monograph source document must be > 100KB: ${d}`);
    }
  });

  await t.test("Component StudentResearchTopicsDossier must exist, render interactive elements, and support full paper reader", () => {
    const compPath = path.resolve("src/components/events/StudentResearchTopicsDossier.tsx");
    assert.ok(fs.existsSync(compPath), "StudentResearchTopicsDossier component must exist");
    const compContent = fs.readFileSync(compPath, "utf8");

    assert.ok(compContent.includes("STUDENT_RESEARCH_TOPIC_DOSSIERS_2026"), "Must import dataset");
    assert.ok(compContent.includes("PUBLISHED_STUDENT_PAPERS"), "Must import PUBLISHED_STUDENT_PAPERS");
    assert.ok(compContent.includes("Topic of Research Given to Students"), "Must display section title");
    assert.ok(compContent.includes("readingPaper"), "Must support full paper reading state");
    assert.ok(compContent.includes("lightboxScanUrl"), "Must support full-screen lightbox modal");
    assert.ok(compContent.includes("Read Full Paper Online") || compContent.includes("Launch Full Scholarly Reader"), "Must provide reader CTA");
    assert.ok(compContent.includes("Escape"), "Must handle Escape key for accessibility");
    assert.ok(compContent.includes("min-h-[44px]"), "Must meet mobile touch target requirements");
  });

  await t.test("Event detail page must integrate StudentResearchTopicsDossier", () => {
    const eventPagePath = path.resolve("src/app/events/[slug]/page.tsx");
    const eventPageContent = fs.readFileSync(eventPagePath, "utf8");
    assert.ok(eventPageContent.includes("StudentResearchTopicsDossier"), "Event detail page must import and render StudentResearchTopicsDossier");
  });

  await t.test("Students wing client must link Module 04 to research topics", () => {
    const studentWingPath = path.resolve("src/components/wings/StudentsRosterClient.tsx");
    const studentWingContent = fs.readFileSync(studentWingPath, "utf8");
    assert.ok(studentWingContent.includes("Decrees KSF/DISC/2026/093–096"), "Students wing must reference the research decrees in Module 04");
  });

  await t.test("Hero top padding and coordinates must be calibrated against fixed header", () => {
    const heroPath = path.resolve("src/components/Hero.tsx");
    const heroContent = fs.readFileSync(heroPath, "utf8");
    assert.ok(!heroContent.includes("pt-[104px]"), "Hero must not have excessive double-padding pt-[104px]");
    assert.ok(heroContent.includes("pt-6 sm:pt-8 md:pt-10"), "Hero must have calibrated pt-6 sm:pt-8 md:pt-10");
  });

  await t.test("Navbar must hide wide tracking text on small screens", () => {
    const navPath = path.resolve("src/components/Navbar.tsx");
    const navContent = fs.readFileSync(navPath, "utf8");
    assert.ok(navContent.includes("hidden sm:block"), "Navbar tracking subtitle must hide on small screens");
  });
});
