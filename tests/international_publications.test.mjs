import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("International Journal Publications Integration Verification", async (t) => {
  const root = process.cwd();

  await t.test("1. Verify all 6 publication certificate files exist and are > 50KB", () => {
    const certDir = path.resolve(root, "public/images/publications/certificates");
    assert.ok(fs.existsSync(certDir), "Certificates directory must exist.");

    const expectedCerts = [
      "cert-akansha-singh-nep-2020.jpg",
      "cert-navyanshi-dwivedi-nep-2020.jpg",
      "cert-anuj-kumar-singh-campus-governance.jpg",
      "cert-shiksha-jaiswal-campus-governance.jpg",
      "cert-prateeksha-pandey-election-commission.jpg",
      "cert-rohini-agarwal-election-commission.jpg",
    ];

    for (const cert of expectedCerts) {
      const filePath = path.join(certDir, cert);
      assert.ok(fs.existsSync(filePath), `Certificate file ${cert} must exist.`);
      const stats = fs.statSync(filePath);
      assert.ok(
        stats.size > 50000,
        `Certificate file ${cert} must be genuine high-res (> 50KB), got ${stats.size} bytes.`
      );
    }
  });

  await t.test("2. Verify international-publications-data.ts dataset integrity", () => {
    const dataFilePath = path.resolve(
      root,
      "src/lib/data/international-publications-data.ts"
    );
    assert.ok(fs.existsSync(dataFilePath), "Publications data file must exist.");
    const content = fs.readFileSync(dataFilePath, "utf-8");

    // Check Journal metadata
    assert.ok(content.includes("2583-6633"), "ISSN 2583-6633 must be declared.");
    assert.ok(
      content.includes("Knowledgeable Research"),
      "Journal name 'Knowledgeable Research' must be declared."
    );
    assert.ok(
      content.includes("SAFE (Society for Academic Facilitation & Extension)"),
      "Issuing Society SAFE must be declared."
    );
    assert.ok(
      content.includes("Dr. Ramesh Chandra"),
      "Chief Editor Dr. Ramesh Chandra must be credited."
    );
    assert.ok(
      content.includes("Vol. 5"),
      "Volume 5 must be declared."
    );
    assert.ok(
      content.includes("No. 10"),
      "Issue 10 must be declared."
    );
    assert.ok(
      content.includes("2026-10-31"),
      "Publication date 2026-10-31 must be present."
    );

    // Check 3 published papers
    assert.ok(
      content.includes("policy-perspectives-case-studies-advancing-literacy-nep-2020"),
      "NEP 2020 paper slug must be present."
    );
    assert.ok(
      content.includes("crisis-of-campus-governance-reclaiming-universities-research-culture"),
      "Campus Governance paper slug must be present."
    );
    assert.ok(
      content.includes("election-commission-of-india-special-intensive-revision-sir"),
      "Election Commission paper slug must be present."
    );

    // Check all 6 authors
    assert.ok(content.includes("Ms. Akansha Singh"), "Akansha Singh must be credited.");
    assert.ok(content.includes("Ms. Navyanshi Dwivedi"), "Navyanshi Dwivedi must be credited.");
    assert.ok(content.includes("Mr. Anuj Kumar Singh"), "Anuj Kumar Singh must be credited.");
    assert.ok(content.includes("Ms. Shiksha Jaiswal"), "Shiksha Jaiswal must be credited.");
    assert.ok(content.includes("Ms. Prateeksha Pandey"), "Prateeksha Pandey must be credited.");
    assert.ok(content.includes("Ms. Rohini Agarwal"), "Rohini Agarwal must be credited.");

    // Check citations
    assert.ok(content.includes("apaCitation:"), "APA citation must be defined.");
    assert.ok(content.includes("bluebookCitation:"), "Bluebook citation must be defined.");
  });

  await t.test("3. Verify foundation-data.ts spreads international publications", () => {
    const foundPath = path.resolve(root, "src/lib/data/foundation-data.ts");
    const content = fs.readFileSync(foundPath, "utf-8");

    assert.ok(
      content.includes('"international_journal"'),
      "BlogPost category union must include international_journal."
    );
    assert.ok(
      content.includes("...INTERNATIONAL_PUBLICATIONS_BLOGS"),
      "FOUNDATION_BLOGS must spread INTERNATIONAL_PUBLICATIONS_BLOGS."
    );
    assert.ok(
      content.includes('export * from "./international-publications-data"'),
      "foundation-data.ts must re-export international-publications-data."
    );
  });

  await t.test("4. Verify UI showcase components exist and render", () => {
    const modalPath = path.resolve(
      root,
      "src/components/publications/CertificateInspectionModal.tsx"
    );
    const sectionPath = path.resolve(
      root,
      "src/components/publications/InternationalPublicationsSection.tsx"
    );

    assert.ok(fs.existsSync(modalPath), "CertificateInspectionModal component must exist.");
    assert.ok(fs.existsSync(sectionPath), "InternationalPublicationsSection component must exist.");

    const modalContent = fs.readFileSync(modalPath, "utf-8");
    assert.ok(modalContent.includes("publication.chiefEditor"), "Modal must verify Chief Editor.");
    assert.ok(modalContent.includes("ISSN:"), "Modal must display ISSN.");
    assert.ok(modalContent.includes("handleCopyCitation"), "Modal must provide citation copying.");
    assert.ok(modalContent.includes("download"), "Modal must provide certificate download.");

    const sectionContent = fs.readFileSync(sectionPath, "utf-8");
    assert.ok(sectionContent.includes("3 Papers"), "Section must highlight 3 papers metric.");
    assert.ok(sectionContent.includes("6 Scholars"), "Section must highlight 6 scholars metric.");
    assert.ok(sectionContent.includes("ISSN: 2583-6633"), "Section must highlight ISSN metric.");
    assert.ok(sectionContent.includes("SAFE Society"), "Section must highlight SAFE Society metric.");
  });

  await t.test("5. Verify Students Roster and Hierarchy author badges", () => {
    const rosterPath = path.resolve(root, "src/components/wings/StudentsRosterClient.tsx");
    const rosterContent = fs.readFileSync(rosterPath, "utf-8");

    assert.ok(
      rosterContent.includes("InternationalPublicationsSection"),
      "StudentsRosterClient must import InternationalPublicationsSection."
    );
    assert.ok(
      rosterContent.includes("★ Published Author"),
      "StudentsRosterClient must display '★ Published Author' badge."
    );

    const hierPath = path.resolve(root, "src/components/OperationalHierarchy.tsx");
    const hierContent = fs.readFileSync(hierPath, "utf-8");
    assert.ok(
      hierContent.includes("★ Published Author"),
      "OperationalHierarchy must display '★ Published Author' badge for published scholars."
    );
  });

  await t.test("6. Verify Blogs Hub Client includes international journal category filter", () => {
    const blogsHubPath = path.resolve(root, "src/components/blogs/BlogsHubClient.tsx");
    const content = fs.readFileSync(blogsHubPath, "utf-8");

    assert.ok(
      content.includes('"international_journal"'),
      "BlogsHubClient must include international_journal category pill."
    );
    assert.ok(
      content.includes("International Journals"),
      "BlogsHubClient must label the category 'International Journals'."
    );
    assert.ok(
      content.includes("Read Refereed Paper"),
      "BlogsHubClient must feature 'Read Refereed Paper' action button."
    );
  });

  await t.test("7. Verify blog/dispatch slug pages implement ScholarlyArticle schema and certificate galleries", () => {
    const blogSlugPath = path.resolve(root, "src/app/blogs/[slug]/page.tsx");
    const blogSlugContent = fs.readFileSync(blogSlugPath, "utf-8");

    assert.ok(
      blogSlugContent.includes("isInternationalJournal"),
      "Blog slug page must detect isInternationalJournal."
    );
    assert.ok(
      blogSlugContent.includes("ScholarlyArticle"),
      "Blog slug page must generate ScholarlyArticle schema."
    );
    assert.ok(
      blogSlugContent.includes("2583-6633"),
      "Blog slug page schema must specify ISSN 2583-6633."
    );
    assert.ok(
      blogSlugContent.includes("Official Certificates of Publication"),
      "Blog slug page must render certificate gallery."
    );

    const dispatchSlugPath = path.resolve(root, "src/app/dispatches/[slug]/page.tsx");
    const dispatchSlugContent = fs.readFileSync(dispatchSlugPath, "utf-8");
    assert.ok(
      dispatchSlugContent.includes("isInternationalJournal"),
      "Dispatch slug page must detect isInternationalJournal."
    );
    assert.ok(
      dispatchSlugContent.includes("Official Certificates of Publication"),
      "Dispatch slug page must render certificate gallery."
    );
  });
});
