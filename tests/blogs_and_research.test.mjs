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
