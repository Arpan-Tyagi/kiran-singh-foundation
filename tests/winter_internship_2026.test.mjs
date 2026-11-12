import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("2nd Winter Internship Announcement & Audited Sanctioned Expense Report", async (t) => {
  const dataPath = path.resolve("src/lib/data/foundation-data.ts");
  const dataContent = fs.readFileSync(dataPath, "utf8");

  await t.test("Must export WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES with exact budget figures", () => {
    assert.ok(
      dataContent.includes("export const WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES"),
      "Must export WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES"
    );
    assert.ok(dataContent.includes("totalSanctionedAmount: 111600"), "Total amount must be exactly 111600");
    assert.ok(dataContent.includes("page1Subtotal: 91900"), "Page 1 subtotal must be exactly 91900");
    assert.ok(dataContent.includes("page2Subtotal: 19700"), "Page 2 subtotal must be exactly 19700");
    assert.ok(dataContent.includes("totalStudentStrength: 30"), "Cohort strength must be 30 students");
    assert.ok(dataContent.includes("Shri Anuj Kumar Singh"), "Signatory must be Shri Anuj Kumar Singh");
    assert.ok(dataContent.includes("Jai Hind"), "Announcement must conclude with Jai Hind");
  });

  await t.test("Must verify all individual itemized expenses match handwritten order forms", () => {
    assert.ok(dataContent.includes("amount: 450"), "Certificate Printing must be ₹450");
    assert.ok(dataContent.includes("amount: 64000"), "Hotel Cost must be ₹64,000");
    assert.ok(dataContent.includes("amount: 9000"), "Trophy Cost must be ₹9,000");
    assert.ok(dataContent.includes("amount: 6000"), "Honour Memento must be ₹6,000");
    assert.ok(dataContent.includes("amount: 5000"), "Banner and Misc must be ₹5,000");
    assert.ok(dataContent.includes("amount: 7000"), "Musical system must be ₹7,000");
    assert.ok(dataContent.includes("amount: 1200"), "Registrar stipend must be ₹1,200");
    assert.ok(dataContent.includes("amount: 1000"), "Dy. Registrar stipend must be ₹1,000");
    assert.ok(dataContent.includes("amount: 4800"), "4 HSM stipends must be ₹4,800");
    assert.ok(dataContent.includes("amount: 5200"), "26 Intern stipends must be ₹5,200");
    assert.ok(dataContent.includes("amount: 1500"), "Bouquet cost must be ₹1,500");
  });

  await t.test("Scanned signed order form photographic assets must exist on disk", () => {
    const page1Path = path.resolve("public/images/events/winter-2026-27/sanctioned-order-form-page-1.jpg");
    const page2Path = path.resolve("public/images/events/winter-2026-27/sanctioned-order-form-page-2.jpg");
    assert.ok(fs.existsSync(page1Path), "Page 1 scan must exist at public/images/events/winter-2026-27/sanctioned-order-form-page-1.jpg");
    assert.ok(fs.existsSync(page2Path), "Page 2 scan must exist at public/images/events/winter-2026-27/sanctioned-order-form-page-2.jpg");
    assert.ok(fs.statSync(page1Path).size > 50000, "Page 1 scan must be > 50KB");
    assert.ok(fs.statSync(page2Path).size > 50000, "Page 2 scan must be > 50KB");
  });

  await t.test("Event detail page and components must integrate announcement and expense report", () => {
    const detailContent = fs.readFileSync(path.resolve("src/app/events/[slug]/page.tsx"), "utf8");
    assert.ok(detailContent.includes("EventExpenseReport"), "Event detail must import EventExpenseReport");
    assert.ok(detailContent.includes("2nd Winter Internship Program for 30 students"), "Event detail must include official announcement text");
    assert.ok(detailContent.includes("Jai Hind"), "Event detail must include Jai Hind valediction");
    assert.ok(detailContent.includes("16th of November 2026 till 30th of December 2026"), "Event detail must include exact tenure dates");
    assert.ok(detailContent.includes("3rd of January 2027"), "Event detail must include closing ceremony date");

    const expenseReportContent = fs.readFileSync(path.resolve("src/components/events/EventExpenseReport.tsx"), "utf8");
    assert.ok(expenseReportContent.includes("WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES"), "Expense report component must use dataset");
    assert.ok(expenseReportContent.includes("₹1,11,600"), "Expense report must display Grand Total ₹1,11,600");

    const eventsListContent = fs.readFileSync(path.resolve("src/components/events/EventsListClient.tsx"), "utf8");
    assert.ok(eventsListContent.includes("EventExpenseReport"), "EventsListClient must import and render EventExpenseReport");
    assert.ok(eventsListContent.includes("2nd Winter Internship Program for 30 students"), "EventsListClient must feature announcement");
    assert.ok(eventsListContent.includes("Jai Hind"), "EventsListClient must include Jai Hind");
    assert.ok(eventsListContent.includes("winter-internship-announcement"), "EventsListClient must have announcement section id");
  });

  await t.test("Cloudflare Wrangler configuration must be present to prevent deployment drift", () => {
    const wranglerJsoncPath = path.resolve("wrangler.jsonc");
    assert.ok(fs.existsSync(wranglerJsoncPath), "wrangler.jsonc must exist");
    const wranglerJsonc = fs.readFileSync(wranglerJsoncPath, "utf8");
    assert.ok(wranglerJsonc.includes("gemini-flash-latest"), "wrangler.jsonc must contain GEMINI_MODEL: gemini-flash-latest");

    const wranglerTomlPath = path.resolve("wrangler.toml");
    assert.ok(fs.existsSync(wranglerTomlPath), "wrangler.toml must exist");
    const wranglerToml = fs.readFileSync(wranglerTomlPath, "utf8");
    assert.ok(wranglerToml.includes("gemini-flash-latest"), "wrangler.toml must contain GEMINI_MODEL = gemini-flash-latest");
  });
});
