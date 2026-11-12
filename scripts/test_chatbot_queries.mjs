import fs from "fs";
import path from "path";
import dns from "node:dns";
import { GoogleGenAI } from "@google/genai";

if (typeof dns?.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("ipv4first");
}

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

// Read FOUNDATION_SYSTEM_PROMPT from src/lib/gemini.ts
const geminiTs = fs.readFileSync(path.resolve("src/lib/gemini.ts"), "utf-8");
const promptMatch = geminiTs.match(/export const FOUNDATION_SYSTEM_PROMPT = `([\s\S]*?)`;/);
if (!promptMatch) {
  throw new Error("Could not extract FOUNDATION_SYSTEM_PROMPT from src/lib/gemini.ts");
}
const FOUNDATION_SYSTEM_PROMPT = promptMatch[1];

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY not found in environment");
}

const ai = new GoogleGenAI({ apiKey });
const modelName = process.env.GEMINI_MODEL || "gemini-flash-latest";

const testQueries = [
  {
    category: "Founder & History",
    prompt: "Who was Late Kiran Singh ji and what was her research?",
    mustInclude: ["Kiran Singh", "felid", "Vandalur"],
  },
  {
    category: "Leadership & Trustees",
    prompt: "Who are the core members and trustees running the foundation?",
    mustInclude: ["Anil Kumar Singh", "Anuj Kumar Singh", "Akansha Singh"],
  },
  {
    category: "40 Scholars Roster & Teams",
    prompt: "Explain the student welfare wing. How many students are there and how are they organized?",
    mustInclude: ["40", "4 teams", "internship"],
  },
  {
    category: "34 Dogs & 4 Shelter Homes",
    prompt: "How many street dogs do you shelter, where are they located, and how are they cared for?",
    mustInclude: ["34", "4 shelter homes", "Prayagraj"],
  },
  {
    category: "Events & Landmark Internships",
    prompt: "What landmark internships and events has the foundation hosted?",
    mustInclude: ["Summer Internship", "Winter Internship"],
  },
  {
    category: "Emergency Canine Triage",
    prompt: "Emergency! I found a severely injured bleeding street dog in Prayagraj. What should I do right now?",
    mustInclude: ["emergency", "96709"],
  },
  {
    category: "Tax 80G & Banking",
    prompt: "Can I donate to the foundation? Are donations 80G tax exempt and what is your official bank account?",
    mustInclude: ["HDFC", "AAGTK3961N"],
  },
];

async function runAudit() {
  console.log(`=== RUNNING GEMINI CHATBOT QUALITY & ACCURACY AUDIT ===`);
  console.log(`Model: ${modelName}`);
  console.log(`Queries to test: ${testQueries.length}\n`);

  let passed = 0;
  for (let i = 0; i < testQueries.length; i++) {
    const q = testQueries[i];
    console.log(`--- [Query ${i + 1}/${testQueries.length}] Category: ${q.category} ---`);
    console.log(`User: "${q.prompt}"`);

    const start = Date.now();
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          {
            role: "user",
            parts: [{ text: q.prompt }],
          },
        ],
        config: {
          systemInstruction: FOUNDATION_SYSTEM_PROMPT,
          temperature: 0.3,
          maxOutputTokens: 1000,
        },
      });

      const reply = (response.text || "").trim();
      const elapsed = Date.now() - start;
      console.log(`Response received in ${elapsed}ms (${reply.length} chars):`);
      console.log(reply.slice(0, 300) + (reply.length > 300 ? "..." : ""));

      // Check required tokens
      const missing = q.mustInclude.filter((token) => !reply.toLowerCase().includes(token.toLowerCase()));
      if (missing.length === 0) {
        console.log(`✅ [PASS] Found all target entities: ${q.mustInclude.join(", ")}\n`);
        passed++;
      } else {
        console.warn(`⚠️ [WARN] Missing target entities: ${missing.join(", ")}\n`);
      }
    } catch (err) {
      console.error(`❌ [ERROR] Failed to query:`, err.message);
    }
  }

  console.log(`=== AUDIT SUMMARY: ${passed}/${testQueries.length} PASSED ===`);
  if (passed === testQueries.length) {
    console.log(`🎉 All domain and institutional categories verified with 100% accuracy.`);
  }
}

runAudit();
