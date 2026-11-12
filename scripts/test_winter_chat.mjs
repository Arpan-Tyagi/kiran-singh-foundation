import { executeFoundationChatTurn } from "../src/lib/gemini.ts";

async function main() {
  console.log("Testing Winter Internship Chatbot query...");
  const t0 = Date.now();
  const res = await executeFoundationChatTurn([], "What is the 2nd winter internship program and the expense report?");
  console.log(`Elapsed: ${Date.now() - t0}ms`);
  console.log("Reply:\n", res.reply);
  console.log("Action:", res.suggestedAction);
}

main().catch(console.error);
