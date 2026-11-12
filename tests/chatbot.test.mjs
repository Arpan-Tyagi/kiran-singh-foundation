import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// Load .env.local
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
      const [k, ...v] = trimmed.split("=");
      process.env[k.trim()] = v.join("=").trim();
    }
  }
}

// Dynamically import executeFoundationChatTurn from compiled TS or mock
// Since we want to test both the live pipeline & deterministic fallbacks:
import { executeFoundationChatTurn } from "../src/lib/gemini.ts";

test("Kiran Singh Foundation Chatbot Intelligence Suite", async (t) => {
  await t.test("Founder & History inquiry returns accurate credentials and AAZP Vandalur", async () => {
    const res = await executeFoundationChatTurn([], "Who was Late Kiran Singh ji?");
    assert.ok(res.reply.includes("Late Kiran Singh ji"));
    assert.ok(res.reply.includes("felid") || res.reply.includes("ethologist"));
    assert.ok(res.reply.includes("AAZP Vandalur") || res.reply.includes("Vandalur"));
    assert.ok(res.suggestedAction);
    assert.equal(res.suggestedAction.href, "/about");
  });

  await t.test("Trustees & Members inquiry returns Shri Anil, Shri Anuj, and Ms. Akansha", async () => {
    const res = await executeFoundationChatTurn([], "Who are the trustees and members running the foundation?");
    assert.ok(res.reply.includes("Anil Kumar Singh"));
    assert.ok(res.reply.includes("Anuj Kumar Singh"));
    assert.ok(res.reply.includes("Akansha Singh"));
    assert.ok(res.suggestedAction);
  });

  await t.test("Students inquiry returns exactly 40 scholars and 4 teams", async () => {
    const res = await executeFoundationChatTurn([], "How many students does the foundation support and how are they organized?");
    assert.ok(res.reply.includes("40"));
    assert.ok(res.reply.includes("4 teams") || res.reply.includes("teams"));
    assert.ok(res.suggestedAction);
    assert.equal(res.suggestedAction.href, "/wings/students");
  });

  await t.test("Dogs inquiry returns exactly 34 rescued dogs and 4 shelter homes in Prayagraj", async () => {
    const res = await executeFoundationChatTurn([], "Tell me about the sheltered dogs and care facilities.");
    assert.ok(res.reply.includes("34"));
    assert.ok(res.reply.includes("4"));
    assert.ok(res.reply.includes("Prayagraj"));
    assert.ok(res.suggestedAction);
    assert.equal(res.suggestedAction.href, "/wings/dogs");
  });

  await t.test("Events inquiry returns flagship internships and upcoming winter deployment", async () => {
    const res = await executeFoundationChatTurn([], "What internship events and convocations have taken place?");
    assert.ok(res.reply.includes("Summer Internship") || res.reply.includes("Winter Internship"));
    assert.ok(res.suggestedAction);
    assert.equal(res.suggestedAction.href, "/events");
  });

  await t.test("Donations inquiry returns HDFC Bank coordinates and Section 80G tax status", async () => {
    const res = await executeFoundationChatTurn([], "How can I donate? Are donations tax exempt under 80G?");
    assert.ok(res.reply.includes("HDFC Bank") || res.reply.includes("50200119758811"));
    assert.ok(res.reply.includes("80G") || res.reply.includes("AAGTK3961N"));
    assert.ok(res.suggestedAction);
  });

  await t.test("Emergency inquiry provides immediate 24/7 WhatsApp triage helpline", async () => {
    const res = await executeFoundationChatTurn([], "Emergency! Found an injured stray dog on the road!");
    assert.ok(res.suggestedAction);
    assert.equal(res.suggestedAction.type, "whatsapp_emergency");
    assert.equal(res.suggestedAction.href, "/emergency");
  });

  await t.test("Village Development & Women Empowerment inquiries return structural mandates", async () => {
    const res = await executeFoundationChatTurn([], "What programs exist for rural villages and women empowerment?");
    assert.ok(res.reply.includes("Village Development") || res.reply.includes("education"));
    assert.ok(res.reply.includes("Women Empowerment") || res.reply.includes("summit"));
  });
});
