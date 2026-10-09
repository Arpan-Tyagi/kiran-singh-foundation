// Kiran Singh Foundation - Google Gemini 2.5 Flash Pipeline
// Utilizes official @google/genai SDK with the GoogleGenAI class.
// Embeds strict historical mandates and institutional guardrails.

import { GoogleGenAI } from "@google/genai";

export const FOUNDATION_SYSTEM_PROMPT = `
You are the institutional intelligence copilot and editorial engine of the "Kiran Singh Foundation".
Under no circumstances should you alter, abstract, or invent core institutional facts.

AUTHORITATIVE INSTITUTIONAL MANDATES:
1. FOUNDATION FOUNDER:
   - Established in sacred memory of Late Kiran Singh ji (Amma).
   - Identity: Female leader, ethologist, and institutional pillar. Always refer to Late Kiran Singh ji with female pronouns (she, her, hers).
   - Credentials: She earned a Ph.D. specializing in the behavioral science, training, and conditioning of apex felids (lions, tigers, and leopards).
   - Public Service: She served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai).
   - High Governance: She worked in close alignment with the then Chief Minister of Tamil Nadu, Late Jayaram Jayalalithaa ("Amma"), advising on modern zoological conservation standards and humane community animal welfare.
2. MOTTO: "Working towards Change".
3. HERALDIC EMBLEM: A classical circular seal containing a detailed roaring male lion, surrounded by the ring inscription "KIRAN SINGH FOUNDATION".
4. OPERATIONAL WING A - STUDENT WELFARE WING:
   - Supports exactly 40 active students directly under comprehensive foundation sponsorship.
   - All expenses and educational resources for soft skills incubation and personality development (executive communication, public discourse, systems thinking) are fully provided.
   - Offers Summer and Winter Internships on a pro bono basis to build professional competence and civic discipline.
5. OPERATIONAL WING B - DOG CARE CENTRE:
   - Protects and shelters exactly 34 rescued street dogs.
   - All food, housing, medical care, sterilizations, and vaccinations (rabies and boosters) are 100% funded by the foundation.
   - Organized across three protective zones: Zone Alpha (Critical Care & Quarantine), Zone Beta (Main Pack Sanctuary), and Zone Gamma (Senior & Palliative Run).
6. CORE PURPOSE: Deep community interconnectedness—ensuring participants and supporters are immediately available for one another during emergencies.
7. MULTI-CHANNEL COMMUNICATIONS: Primary engagement through WhatsApp (wa.me) and transactional emails.

STRICT CAPACITY NEGATIVE CONSTRAINTS:
- Operational counts must remain strictly and inviolably: exactly 40 active sponsored scholars (Wing A) and exactly 34 rescued street dogs (Wing B).
- Do not cite, claim, extrapolate, or invent counts other than 40 scholars and 34 dogs under any circumstances. Prohibiting claiming counts other than 40 scholars and 34 dogs is an inviolable mandate.

VOICE & TONE:
- Institutional, dignified, scholarly, compassionate, and precise.
- When generating editorial drafts, write in high-caliber prose worthy of an archival institute.
- When assisting users with distress or emergency reports, prioritize calm, swift triage, providing direct emergency actions and urging use of WhatsApp or phone immediate dispatch.
`;

// Helper to get or instantiate Gemini client
function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "placeholder-gemini-key" || apiKey.trim() === "") {
    return null;
  }
  try {
    return new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn("Failed to instantiate GoogleGenAI client:", err);
    return null;
  }
}

export interface EditorialDraftRequest {
  type: "blog_post" | "event_announcement";
  rawNotes: string;
  targetTone?: "institutional" | "urgent_call" | "scholarly";
  topic?: string;
}

export interface EditorialDraftResponse {
  title: string;
  summary: string;
  contentMarkdown: string;
  suggestedTags: string[];
  isAiDrafted: true;
}

/**
 * Editorial Assistant Pipeline:
 * Transforms rough admin field notes into publication-ready, structured dispatches or announcements.
 */
export async function generateEditorialDraft(
  request: EditorialDraftRequest
): Promise<EditorialDraftResponse> {
  const client = getGenAIClient();

  const prompt = `
Task: Transform the following raw field notes into a publication-ready ${request.type.replace("_", " ")} for the Kiran Singh Foundation.
Raw Notes:
"""
${request.rawNotes}
"""

Requirements:
- Target Tone: ${request.targetTone || "institutional"}
- Incorporate appropriate institutional context regarding Late Kiran Singh ji, our 40 sponsored scholars, or our 34 rescued dogs where relevant.
- Return output strictly as valid JSON with keys:
  "title": string (crisp, dignified headline)
  "summary": string (1-2 sentence executive summary)
  "contentMarkdown": string (comprehensive, well-structured markdown content with subheadings)
  "suggestedTags": array of strings (3-5 relevant keywords)
`;

  if (client) {
    try {
      const abortController = new AbortController();
      const timeoutId = setTimeout(() => abortController.abort(), 12000);

      const generatePromise = client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: FOUNDATION_SYSTEM_PROMPT,
          responseMimeType: "application/json",
          temperature: 0.3,
          maxOutputTokens: 600,
          httpOptions: { timeout: 12000 },
        },
      });

      const timeoutPromise = new Promise<never>((_, reject) => {
        abortController.signal.addEventListener("abort", () => {
          reject(new Error("Gemini API call timed out via AbortSignal after 12000ms"));
        });
      });

      let response;
      try {
        response = await Promise.race([generatePromise, timeoutPromise]);
      } finally {
        clearTimeout(timeoutId);
      }

      const text = (response.text || "").trim();
      const cleaned = text
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/, "")
        .replace(/```\s*$/, "")
        .trim();
      const parsed = JSON.parse(cleaned);
      return {
        title: parsed.title || "Foundation Institutional Dispatch",
        summary: parsed.summary || "Official field report from the Kiran Singh Foundation Directorate.",
        contentMarkdown: parsed.contentMarkdown || request.rawNotes,
        suggestedTags: Array.isArray(parsed.suggestedTags) ? parsed.suggestedTags : ["Foundation", "Dispatches"],
        isAiDrafted: true,
      };
    } catch (error) {
      console.error("Gemini 2.5 Flash API error during draft generation:", error);
      // Fallback below
    }
  }

  // High-fidelity fallback generator if API key is not configured
  const cleanedTitle = request.rawNotes.split("\n")[0]?.replace(/^[#\-\*\s]+/, "").slice(0, 70) ||
    (request.type === "blog_post" ? "Foundation Field Dispatch" : "Upcoming Foundation Gathering");

  return {
    title: cleanedTitle,
    summary: `Official ${request.type.replace("_", " ")} structured by the Foundation Intelligence Copilot based on field notes.`,
    contentMarkdown: `## Executive Overview\n\n${request.rawNotes}\n\n### Operational Alignment\n\nIn accordance with the foundational ethos of **Late Kiran Singh ji** and our motto *"Working towards Change"*, this initiative advances our dual commitments: fostering our **40 active sponsored scholars** through pro bono incubation and protecting our **34 resident canine companions** across our sanctuary zones.\n\n### Next Steps\n\nField coordinators and community partners may coordinate via our dedicated WhatsApp channel or through the emergency mutual-aid desk.`,
    suggestedTags: ["Kiran Singh Foundation", "Community Welfare", "Ethological Care"],
    isAiDrafted: true,
  };
}

export interface ChatMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

export interface ChatTurnResponse {
  reply: string;
  suggestedAction?: {
    type: "whatsapp_emergency" | "view_dogs" | "view_students" | "intake_form";
    label: string;
    href: string;
  };
}

/**
 * Support Concierge Pipeline (Server Action backend):
 * Powers the interactive drawer copilot for visitor guidance and emergency triage.
 */
export async function executeFoundationChatTurn(
  history: ChatMessage[],
  latestUserMessage: string
): Promise<ChatTurnResponse> {
  const client = getGenAIClient();

  const userQueryLower = latestUserMessage.toLowerCase();
  const isEmergency =
    userQueryLower.includes("emergency") ||
    userQueryLower.includes("injured") ||
    userQueryLower.includes("bleeding") ||
    userQueryLower.includes("accident") ||
    userQueryLower.includes("urgent") ||
    userQueryLower.includes("bite") ||
    userQueryLower.includes("distress");

  if (client) {
    try {
      // Sanitize incoming history by dropping any leading turns where role === "model" or "assistant"
      // so the contents array sent to @google/genai strictly starts with role: "user"
      const sanitizedHistory = [...history];
      while (
        sanitizedHistory.length > 0 &&
        (sanitizedHistory[0].role === "model" || sanitizedHistory[0].role === "assistant")
      ) {
        sanitizedHistory.shift();
      }

      // Build strictly alternating turn contents for Gemini SDK (user -> model -> user)
      const alternatingTurns: Array<{ role: "user" | "model"; parts: [{ text: string }] }> = [];
      for (const m of sanitizedHistory) {
        const text = (m.content || "").trim();
        if (!text) continue;
        const role: "user" | "model" = m.role === "assistant" ? "model" : m.role;
        const last = alternatingTurns[alternatingTurns.length - 1];
        if (last && last.role === role) {
          last.parts[0].text += `\n${text}`;
        } else {
          alternatingTurns.push({ role, parts: [{ text }] });
        }
      }

      // If the last history turn is already 'user', avoid consecutive user turns before appending latestUserMessage
      if (alternatingTurns.length > 0 && alternatingTurns[alternatingTurns.length - 1].role === "user") {
        alternatingTurns.pop();
      }

      const formattedContents = [
        ...alternatingTurns,
        {
          role: "user" as const,
          parts: [{ text: latestUserMessage.trim() }],
        },
      ];

      const abortController = new AbortController();
      const timeoutId = setTimeout(() => abortController.abort(), 12000);

      const generatePromise = client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: FOUNDATION_SYSTEM_PROMPT,
          temperature: 0.4,
          maxOutputTokens: 600,
          httpOptions: { timeout: 12000 },
        },
      });

      const timeoutPromise = new Promise<never>((_, reject) => {
        abortController.signal.addEventListener("abort", () => {
          reject(new Error("Gemini API call timed out via AbortSignal after 12000ms"));
        });
      });

      let response;
      try {
        response = await Promise.race([generatePromise, timeoutPromise]);
      } finally {
        clearTimeout(timeoutId);
      }

      const replyText = response.text || "Thank you for reaching out to the Kiran Singh Foundation.";

      let suggestedAction: ChatTurnResponse["suggestedAction"];
      if (isEmergency) {
        suggestedAction = {
          type: "whatsapp_emergency",
          label: "Trigger Immediate Emergency WhatsApp",
          href: "/emergency",
        };
      } else if (userQueryLower.includes("dog") || userQueryLower.includes("canine") || userQueryLower.includes("vaccin")) {
        suggestedAction = {
          type: "view_dogs",
          label: "View 34 Rescued Dogs Roster",
          href: "/wings/dogs",
        };
      } else if (userQueryLower.includes("student") || userQueryLower.includes("scholar") || userQueryLower.includes("internship")) {
        suggestedAction = {
          type: "view_students",
          label: "Explore Student Welfare Wing (40 Scholars)",
          href: "/wings/students",
        };
      }

      return {
        reply: replyText,
        suggestedAction,
      };
    } catch (error) {
      console.error("Gemini 2.5 Flash chat error:", error);
    }
  }

  // Graceful deterministic responder adhering strictly to institutional facts
  if (isEmergency) {
    return {
      reply: `CRITICAL TRIAGE PROTOCOL: If you are reporting an injured animal or community member in immediate distress, please alert our emergency dispatch grid directly. Our field coordinators respond rapidly across the Chennai and suburban corridor.`,
      suggestedAction: {
        type: "whatsapp_emergency",
        label: "Open 24/7 Emergency Dispatch",
        href: "/emergency",
      },
    };
  }

  if (
    userQueryLower.includes("kiran singh") ||
    userQueryLower.includes("founder") ||
    userQueryLower.includes("history") ||
    userQueryLower.includes("amma") ||
    userQueryLower.includes("ethology")
  ) {
    return {
      reply: `Late Kiran Singh ji (Amma) was a distinguished ethologist who earned her Ph.D. specializing in the behavioral science, training, and conditioning of apex felids (lions, tigers, and leopards). She served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai) and worked in close alignment with the then Chief Minister of Tamil Nadu, Late Jayaram Jayalalithaa ("Amma"). Her vision powers our motto: "Working towards Change".`,
      suggestedAction: {
        type: "intake_form",
        label: "Read Institutional Archive",
        href: "/about",
      },
    };
  }

  if (userQueryLower.includes("dog") || userQueryLower.includes("canine") || userQueryLower.includes("rabies")) {
    return {
      reply: `Our Dog Care Centre shelters and protects exactly 34 rescued street dogs. All food, housing, medical care, sterilizations, and vaccinations (rabies and annual boosters) are 100% funded by the foundation across three monitored zones (Zone Alpha, Beta, and Gamma).`,
      suggestedAction: {
        type: "view_dogs",
        label: "Inspect 34 Resident Dogs",
        href: "/wings/dogs",
      },
    };
  }

  if (userQueryLower.includes("student") || userQueryLower.includes("intern") || userQueryLower.includes("scholar")) {
    return {
      reply: `Our Student Welfare Wing directly supports exactly 40 active students under comprehensive foundation sponsorship. We provide 100% funding for soft skills incubation (executive communication, public discourse, systems thinking) alongside pro bono Summer and Winter Internships.`,
      suggestedAction: {
        type: "view_students",
        label: "View 40 Scholars Cohort",
        href: "/wings/students",
      },
    };
  }

  return {
    reply: `Welcome to the Kiran Singh Foundation. Established in sacred memory of Late Kiran Singh ji, our mission operates under the motto "Working towards Change". We oversee the Student Welfare Wing (40 sponsored scholars), the Dog Care Centre (34 rescued street dogs), and an active community emergency grid. How may we assist you today?`,
    suggestedAction: {
      type: "intake_form",
      label: "Mutual-Aid & Community Intake",
      href: "/#mutual-aid",
    },
  };
}
