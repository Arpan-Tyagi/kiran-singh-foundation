import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Blogs & Research Papers Hub Architecture Verification", async (t) => {
  const root = process.cwd();

  await t.test("Must verify all route files exist", () => {
    const routes = [
      "src/app/blogs/page.tsx",
      "src/app/blogs/[slug]/page.tsx",
      "src/app/research/page.tsx",
      "src/app/dispatches/page.tsx",
      "src/app/dispatches/[slug]/page.tsx",
      "src/components/blogs/BlogsHubClient.tsx",
      "src/lib/data/research-blogs-data.ts",
    ];
    for (const r of routes) {
      assert.ok(fs.existsSync(path.resolve(root, r)), `Route or component ${r} must exist.`);
    }
  });

  await t.test("Must verify research-blogs-data.ts exports all 5 academic publications", () => {
    const filePath = path.resolve(root, "src/lib/data/research-blogs-data.ts");
    const content = fs.readFileSync(filePath, "utf-8");

    // Check Topic 096
    assert.ok(content.includes("ksf-disc-2026-096-mind-of-a-politician-in-a-crisis-situation"), "Topic 096 slug must be present.");
    assert.ok(content.includes("Anuj Kumar Singh"), "Author Anuj Kumar Singh must be credited.");
    assert.ok(content.includes("Vaishnavi"), "Author Vaishnavi must be credited.");
    assert.ok(content.includes("Karan Pal"), "Author Karan Pal must be credited.");

    // Check Topic 093
    assert.ok(content.includes("ksf-disc-2026-093-empowering-youth-through-education-choices"), "Topic 093 slug must be present.");
    assert.ok(content.includes("Shubhi Singh"), "Author Shubhi Singh must be credited.");
    assert.ok(content.includes("Annanya Arora"), "Author Annanya Arora must be credited.");

    // Check Vanya Monograph
    assert.ok(content.includes("not-every-battle-is-worth-fighting-strategic-conflict-selection"), "Vanya monograph slug must be present.");
    assert.ok(content.includes("KSF-STU-016"), "Scholar Vanya ID KSF-STU-016 must be present.");

    // Check Topic 094 & 095
    assert.ok(content.includes("ksf-disc-2026-094-impact-of-crimes-on-mental-health"), "Topic 094 slug must be present.");
    assert.ok(content.includes("ksf-disc-2026-095-impact-of-right-to-privacy"), "Topic 095 slug must be present.");

    // Check Stuti Singh's Research Paper
    assert.ok(
      content.includes("the-power-of-questioning-critical-thinking-social-change"),
      "Stuti Singh power of questioning slug must be present."
    );
    assert.ok(content.includes("Stuti Singh"), "Author Stuti Singh must be credited.");
    assert.ok(content.includes("KSF-STU-030"), "Scholar ID KSF-STU-030 must be present.");

    // Check Article A (Emergency Stray Dog Rescue Guide)
    assert.ok(
      content.includes("what-to-do-injured-stray-dog-prayagraj-emergency-guide"),
      "Article A emergency guide slug must be present."
    );
    assert.ok(content.includes("Canine Welfare Directorate"), "Canine Welfare Directorate must be credited.");

    // Check Article B (Undergraduate Research Publishing Guide)
    assert.ok(
      content.includes("undergraduate-research-international-journal-publishing-guide"),
      "Article B undergrad publishing guide slug must be present."
    );
    assert.ok(content.includes("Trustee Academic Board"), "Trustee Academic Board must be credited.");

    // Check Article C (Street Dog Feeding Rights Guide)
    assert.ok(
      content.includes("street-dog-feeding-legal-rights-animal-protection-laws-india"),
      "Article C feeding rights slug must be present."
    );
    assert.ok(content.includes("KSF Legal Advisory Directorate"), "KSF Legal Advisory Directorate must be credited.");
    assert.ok(content.includes("Maya D. Chablani"), "Maya D. Chablani landmark case must be cited.");

    // Check Article D (Sanctuary Balance Sheet & 80G Guide)
    assert.ok(
      content.includes("where-charity-money-goes-inside-monthly-balance-sheet-dog-sanctuary"),
      "Article D balance sheet slug must be present."
    );
    assert.ok(content.includes("KSF Board of Trustees & Finance Directorate"), "KSF Board of Trustees & Finance Directorate must be credited.");
    assert.ok(content.includes("AABTK2317PF20231"), "80G URN must be declared in financial audit.");

    // Check 3 Newly Uploaded Student Monographs (Luvleen & Stuti, Annanya Arora, Sacrifices & Success)
    assert.ok(
      content.includes("dont-speak-when-angry-emotional-regulation-luvleen-stuti"),
      "Luvleen Kaur Puri & Stuti Dwivedi monograph slug must be present."
    );
    assert.ok(content.includes("Luvleen Kaur Puri"), "Author Luvleen Kaur Puri must be credited.");
    assert.ok(content.includes("Stuti Dwivedi"), "Author Stuti Dwivedi must be credited.");

    assert.ok(
      content.includes("the-power-of-consistency-can-it-overpower-talent"),
      "Annanya Arora consistency report slug must be present."
    );
    assert.ok(content.includes("KSF-STU-023"), "Scholar ID KSF-STU-023 for Annanya Arora must be present.");
    assert.ok(content.includes("Ericsson"), "Anders Ericsson deliberate practice citation must be present.");

    assert.ok(
      content.includes("sacrifices-are-directly-proportional-to-success-case-studies"),
      "Sacrifices and Success monograph slug must be present."
    );
    assert.ok(content.includes("Chandrayaan-3"), "Chandrayaan-3 case study must be present.");
    assert.ok(content.includes("D. Gukesh"), "D. Gukesh case study must be present.");

    // Check Amar Ujala Prayagraj Constitution Day Press Dispatch
    assert.ok(
      content.includes("amar-ujala-prayagraj-constitution-day-celebration-2026"),
      "Amar Ujala Constitution Day press dispatch slug must be present."
    );
    assert.ok(
      content.includes("https://epaper.amarujala.com/allahabad-city/2026-11-27/01.html?format=img&ed_code=allahabad-city"),
      "Amar Ujala official ePaper URL must be linked."
    );
    assert.ok(content.includes("अल्पना डे") || content.includes("Alpana Dey"), "Alpana Dey must be credited.");
    assert.ok(content.includes("अनघा सिंह") || content.includes("Anagha Singh"), "Anagha Singh must be credited.");
  });

  await t.test("Must verify Amar Ujala press coverage photos and showcase component exist", () => {
    const pressImages = [
      "public/images/press/amar-ujala-prayagraj-constitution-day-2026-11-27.jpg",
      "public/images/press/constitution-day-2026-anuj-kumar-singh-alpana-dey.jpg",
    ];
    for (const img of pressImages) {
      const p = path.resolve(root, img);
      assert.ok(fs.existsSync(p), `Press coverage image must exist: ${img}`);
      assert.ok(fs.statSync(p).size > 50000, `Press image must be > 50KB: ${img}`);
    }
    assert.ok(
      fs.existsSync(path.resolve(root, "src/lib/data/press-coverage-data.ts")),
      "press-coverage-data.ts must exist."
    );
    assert.ok(
      fs.existsSync(path.resolve(root, "src/components/press/MediaAndPublicationsShowcase.tsx")),
      "MediaAndPublicationsShowcase component must exist."
    );

    const homeContent = fs.readFileSync(path.resolve(root, "src/app/page.tsx"), "utf-8");
    const aboutContent = fs.readFileSync(path.resolve(root, "src/app/about/page.tsx"), "utf-8");
    const eventsContent = fs.readFileSync(path.resolve(root, "src/components/events/EventsListClient.tsx"), "utf-8");
    assert.ok(homeContent.includes("MediaAndPublicationsShowcase"), "Homepage must showcase press and published papers.");
    assert.ok(aboutContent.includes("MediaAndPublicationsShowcase"), "About page must showcase press and published papers.");
    assert.ok(eventsContent.includes("MediaAndPublicationsShowcase"), "Events page must showcase press and published papers.");
  });

  await t.test("Must verify dedicated /donate portal exists with 80G receipt generator", () => {
    assert.ok(fs.existsSync(path.resolve(root, "src/app/donate/page.tsx")), "Donate page.tsx must exist.");
    assert.ok(fs.existsSync(path.resolve(root, "src/app/donate/layout.tsx")), "Donate layout.tsx must exist.");
    assert.ok(fs.existsSync(path.resolve(root, "src/components/donate/DonateHubClient.tsx")), "DonateHubClient must exist.");
    assert.ok(fs.existsSync(path.resolve(root, "src/actions/donate.ts")), "Donate server actions must exist.");

    const clientContent = fs.readFileSync(path.resolve(root, "src/components/donate/DonateHubClient.tsx"), "utf-8");
    assert.ok(clientContent.includes("50200119758811"), "Must display official HDFC Bank account.");
    assert.ok(clientContent.includes("HDFC0004664"), "Must display HDFC IFSC.");
    assert.ok(clientContent.includes("Section 80G"), "Must feature Section 80G tax exemption.");
  });

  await t.test("Must verify Navbar has Blogs link replacing Dispatches", () => {
    const navbarPath = path.resolve(root, "src/components/Navbar.tsx");
    const navbarContent = fs.readFileSync(navbarPath, "utf-8");
    assert.ok(navbarContent.includes('href: "/blogs"'), "Navbar must link to /blogs.");
    assert.ok(navbarContent.includes('label: "Blogs"'), 'Navbar label must be "Blogs".');
  });

  await t.test("Must verify Footer links to /blogs", () => {
    const footerPath = path.resolve(root, "src/components/Footer.tsx");
    const footerContent = fs.readFileSync(footerPath, "utf-8");
    assert.ok(footerContent.includes('href="/blogs"'), "Footer must link to /blogs.");
  });

  await t.test("Must verify BlogsHubClient includes category filters and search", () => {
    const clientPath = path.resolve(root, "src/components/blogs/BlogsHubClient.tsx");
    const clientContent = fs.readFileSync(clientPath, "utf-8");
    assert.ok(clientContent.includes("student_research"), "Must include student_research category.");
    assert.ok(clientContent.includes("scholar_monograph"), "Must include scholar_monograph category.");
    assert.ok(clientContent.includes("editorial_dispatch"), "Must include editorial_dispatch category.");
    assert.ok(clientContent.includes("canine_welfare"), "Must include canine_welfare category.");
    assert.ok(clientContent.includes("searchQuery"), "Must implement search functionality.");
  });

  await t.test("Must verify /blogs/[slug] and /dispatches/[slug] support WhatsApp share", () => {
    const blogSlugPath = path.resolve(root, "src/app/blogs/[slug]/page.tsx");
    const blogSlugContent = fs.readFileSync(blogSlugPath, "utf-8");
    assert.ok(blogSlugContent.includes("https://api.whatsapp.com/send?text="), "Blogs slug must have WhatsApp share link.");

    const dispatchSlugPath = path.resolve(root, "src/app/dispatches/[slug]/page.tsx");
    const dispatchSlugContent = fs.readFileSync(dispatchSlugPath, "utf-8");
    assert.ok(dispatchSlugContent.includes("https://api.whatsapp.com/send?text="), "Dispatches slug must have WhatsApp share link.");
  });
});
