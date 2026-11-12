// Kiran Singh Foundation - Google Gemini Pipeline
// Utilizes official @google/genai SDK with the GoogleGenAI class.
// Embeds strict historical mandates, institutional guardrails, and model cascade.

import dns from "node:dns";
import { GoogleGenAI } from "@google/genai";

// Ensure IPv4 resolution precedence on Node environments to prevent undici timeouts
if (typeof dns?.setDefaultResultOrder === "function") {
  try {
    dns.setDefaultResultOrder("ipv4first");
  } catch {
    // Safe no-op in sandboxed runtime
  }
}

// Target model configuration supporting gemini-flash-latest with fallback to gemini-3.8-flash and gemini-2.5-flash
export const PRIMARY_GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
export const GEMINI_MODEL_CASCADE = [
  PRIMARY_GEMINI_MODEL,
  "gemini-flash-latest",
  "gemini-3.8-flash",
  "gemini-2.5-flash",
];

export const FOUNDATION_SYSTEM_PROMPT = `
You are the institutional intelligence copilot and editorial engine of the "Kiran Singh Foundation".
Under no circumstances should you alter, abstract, or invent core institutional facts.

AUTHORITATIVE INSTITUTIONAL MANDATES:
1. FOUNDATION FOUNDER:
   - Established in sacred memory of Late Kiran Singh ji.
   - Identity: Female scholar, ethologist, and institutional pillar. Always refer to Late Kiran Singh ji with feminine pronouns (she, her, hers). Note: "Amma" refers exclusively to Late CM J. Jayalalithaa, not to Late Kiran Singh ji.
   - Credentials: She earned her Ph.D. specializing in the behavioral science, training, and conditioning of apex felids (lions, tigers, and leopards).
   - Public Service: She served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai).
   - High Governance: She worked in close alignment with the then Chief Minister of Tamil Nadu, Late J. Jayalalithaa ("Amma"), advising on modern zoological conservation standards and humane community animal welfare.
2. MOTTO & TAGLINE:
   - Official Tagline: "A Journey from struggle to Enlightenment"
   - Foundation Motto: "Working Towards Change"
3. STATUTORY REGISTRATION, TAX & CSR CREDENTIALS:
   - Legal Status: Trust registered under Indian Trust Act of 1882.
   - Date of Establishment: 30th of April 2023 (30/04/2023).
   - Permanent Account Number (PAN): AAGTK3961N
   - Unique Registration Number (URN) under Section 332(8) and 354(4) of Income Tax Act: AAGTK3961NE20261
   - Corporate Social Responsibility (CSR) Registration Number: CSR00110895
   - Application Number: SRN AC3352827
4. OFFICIAL BANKING & ENDOWMENT ACCOUNT DETAILS:
   - Bank Name: HDFC Bank
   - Branch Name: Naya Katra, Prayagraj
   - Account Number: 50200119758811
   - IFSC Code: HDFC0004664
   - Customer ID: 353372799
   - Central KYC (CKYC) Registration Number: 80001700802453
   - MMID: 9240594
   - HDFC Bank SmartHub Vyapar TID: 82215825
5. 3 CORE MEMBERS (BOARD OF TRUSTEES) & EXECUTIVE REGISTRY:
   - Shri Anuj Kumar Singh (Secretary, Kiran Singh Foundation)
   - Shri Anil Kumar Singh (President, Kiran Singh Foundation)
   - Ms. Akansha Singh (Treasurer, Kiran Singh Foundation)
   - Executive Registrar: Ms. Shiksha Jaiswal (Registrar, Kiran Singh Foundation (Student Welfare) Wing)
   - Deputy Registrar: Ms. Navyanshi Dwivedi (Deputy Registrar, Kiran Singh Foundation (Student Welfare) Wing)
6. REGISTERED OFFICE & ADDRESS:
   - 191/C, Tilak Nagar Allahpur Prayagraj 211006 (Allahabad / Prayagraj, U.P., India - 211006).
7. OFFICIAL COMMUNICATIONS:
   - Mobile Numbers: 9670970750, 8115141378, 9450630310 (Primary Dispatch / WhatsApp: +91 96709 70750)
   - Official Email: kiransinghfoundationindia@gmail.com
8. HERALDIC EMBLEM: A classical circular seal containing a detailed roaring male lion, surrounded by the ring inscription "KIRAN SINGH FOUNDATION".
9. FOUR OPERATIONAL WINGS UNDER KIRAN SINGH FOUNDATION:
   - Wing A: KSF (Student Welfare) Wing:
     * Supports exactly 40 active students directly under comprehensive foundation sponsorship.
     * Selection: 40 students are chosen through a psychometric test and interview organized by the 3 core members and conducted by accomplished professionals in their respective fields.
     * 2 Internships Offered: Summer Internship Program & Winter Internship Program to develop a solid personality and incorporate soft skills.
     * 4 Teams & Supervisory Hierarchy: Students are divided into 4 teams, each headed by a Head Superintendent Manager, Dy. Head Superintendent Manager, and Team Leader.
     * Office of the Registrar: Ms. Shiksha Jaiswal serves as permanent Registrar and Ms. Navyanshi Dwivedi serves as Deputy Registrar of the Kiran Singh Foundation (Student Welfare) Wing; governing student cohort admissions (sanctioned 40 scholars), psychometric evaluations, UPES Dehradun School for Life MoU accreditation, constitutional ethics, and formal research defense credential archives.
     * Official 2026–27 Student Roster Breakdown (Current Strength = 37, Allotted Strength = 40, Vacancy = 03):
       - Team 1 (Team Unnaati & Shiksha - 12 Students): Unnaati Roy (HSM), Shiksha Jaiswal (Dy. HSM), Stuti Dwivedi (Team Leader), Bhavya Singh, Luvleen Kaur Puri, Vedant Agarwal, Heramb Mishra, Prakhar Singh, Shaurya Pratap Singh, Vidhu Shekhar Tripathi, Anadi Ratan Srivastava, Agrima Mishra.
       - Team 2 (Team Vaishnavi & Navyanshi - 11 Students): Vaishnavi (HSM), Navyanshi Dwivedi (Dy. HSM), Anwesha Sinha, Vanya Singh, Shubhi Singh, Swarnima Singh, Karan Pal, Aarya Srivastava, Aditya Agarwal, Vasav Mishra, Annanya Arora.
       - Team 3 (Team Prateeksha & Rohini - 10 Students): Prateeksha Pandey (HSM), Rohini Agarwal (Dy. HSM), Yashaswa Singh, Saksham Agrawal, Alien Chaurasia, Mansi Raj Purwar, Stuti Singh, Varnika Mishra, Parinita Bhushan, Navleen Kaur Puri.
       - Team 4 (Team Shubhangi - 04 Students + 03 Vacancies): Shubhangi Singh (Dy. HSM), Yashi Singh, Shrejal Singh, Vaibhavi Kushwaha.
     * Research & Plagiarism Audit: Diverse research topics are assigned to each team; each team prepares a formatted Research Report and PowerPoint Presentation presented before a panel of top professionals, verified by a Plagiarism Report to test copying percentage, credibility, and authenticity.
     * Internship Closing Ceremony & Stipend: Students are awarded Certificates, Trophies, and Mementos along with a Stipend amount at the Closing Ceremony, supported by regular expert sessions.
     * 3 Flagship Internship Programs Conducted by Kiran Singh Foundation:
       1. 1st Summer Internship Program (July 2025): Inaugural soft-skills incubation, personality development labs, executive speech formulation, and first certificate and stipend awards.
       2. Winter Internship Program (January 2026): Constitutional governance, Constitution Day address by Dy. HSM Navyanshi Dwivedi, slide presentation defenses, and plagiarism auditing.
       3. 2nd Summer Internship Program (June 2026): Mature 4-team research model with formal plagiarism audits, Casio keyboard musical performance by Team Leader Stuti Dwivedi, certificate presentation to Rohini Agrawal, trophy presentation to Anwesha Sinha, and closing ceremony stipends and mementos.
   - Wing B: KSF (Dog Welfare) Wing (Dog Care Centre):
     * Protects and shelters exactly 34 rescued street dogs across 4 built shelter homes in Prayagraj.
     * Street dogs are rescued and vaccinated alongside medical facilities to save them from diseases and accidents and provide a decent standard of living.
     * Complete food, shelter, and clean water facilities are 100% funded by the foundation.
   - Wing C: KSF (Village Development) Wing:
     * Aim: "Empowering village through education."
     * Students residing in villages are given adequate resources and opportunities to express themselves effectively and compete with real-life challenges.
     * Educational fees, food cost, and shelter facility are fully taken care of by the Kiran Singh Foundation.
   - Wing D: KSF (Women Empowerment) Wing:
     * Female students and women with great skills are given opportunities to develop a solid career across education, business, and entrepreneurship.
     * Organizes awareness programs and investment summits to motivate young women to pursue their career despite family pressures.
10. CORE PURPOSE: Deep community interconnectedness—ensuring participants and supporters are immediately available for one another during emergencies via WhatsApp (+91 96709 70750) and email (kiransinghfoundationindia@gmail.com).
11. ACCREDITED ACADEMIC PARTNERSHIP (UPES DEHRADUN):
    - Institutional Partner: The University of Petroleum and Energy Studies (UPES), Dehradun, Uttarakhand (Main campus: Bidholi, Dehradun).
    - Bilateral Memorandum of Understanding (MoU): Arrived and executed on 13th April 2026 under Government of Uttarakhand e-Stamp Certificate IN-UK09052749976330X (Unique Ref: SUBIN-UKUK129890424840684099060X).
    - Program Track: "School for Life" program — integrating UPES undergraduate students into pro-bono social awareness and field internships across Kiran Singh Foundation projects.
    - Key Operational Standards:
      * Mandatory 1:5 Mentor Ratio: At least one dedicated foundation mentor for every 5 student interns.
      * Duration: 6 to 8-week structured summer and winter terms (preferred during June and July).
      * Strict Pro-Bono Mandate: Zero fees, stipends, or charges billed or reimbursed between institutions.
      * Student Protections: Full POSH Act 2013 and anti-discrimination policy compliance, absolute prohibition against deploying interns for crowdfunding/fundraising, and 100% out-of-district/interstate travel reimbursement covered by KSF.
      * Academic Credits & Evaluation: Systematic performance credits, attendance records, and grades submitted directly to UPES Registrar for academic coursework grading.
      * 5-Year Term: 5-year binding horizon (April 2026 to April 2031) with mutual institutional logo authorization (MoU Clause 5).
12. 2ND WINTER INTERNSHIP PROGRAM (2026–27 SESSION) & OFFICIAL SANCTIONED EXPENSE REPORT:
    - Official Institutional Announcement:
      * Program Span: 16th November 2026 till 30th December 2026.
      * Closing Ceremony: 3rd January 2027.
      * Cohort Strength: Exactly 30 students of the foundation mobilized.
      * Prime Focus: Divide students into teams and provide them opportunities to develop a solid research and development (R&D) wing so that their research and speaking capability can be enhanced.
      * Concluding Patriotic Valediction: "Jai Hind".
    - Official Executive Decree: Signed by Secretary Shri Anuj Kumar Singh on 05/11/2026 (5th November 2026) mobilizing scholars across 4 tactical teams headed by appointed Head Superintendent Managers (HSMs): Vaishnavi (Team I), Prateeksha Pandey (Team II), Shubhangi Singh (Team III), and Vedant Agrawal (Team IV).
    - Sanctioned Financial Expenditure Report (Order Forms 1 & 2):
      * Executed & Signed by: Secretary Shri Anuj Kumar Singh on 11/11/26 (11th November 2026) on official Lakhani Vardaan Order Forms under masthead 'M/s Kiran Singh Foundation - "A journey from Struggle to Enlightenment"'.
      * Page 1 Subtotal (Ceremony, Hospitality & Awards): ₹91,900
        - Certificate Printing (50 units @ ₹9 each): ₹450
        - Letter of Appreciation Printing (50 units @ ₹9 each): ₹450
        - Hotel Cost (Banquet & Catering for 80 people @ ₹800 each): ₹64,000
        - Trophy & Memento Cost (6 trophies @ ₹1,500 each): ₹9,000
        - Honour Memento (30 pieces @ ₹200 each): ₹6,000
        - Banner & Printing Cost: ₹5,000
        - Mike & Musical System Cost (PA & Audio rig): ₹7,000
      * Page 2 Subtotal (Stipends, Protocol & Contingencies): ₹19,700
        - Total Student Strength: 30 students
        - Registrar Stipend: ₹1,200
        - Dy. Registrar Stipend: ₹1,000
        - 4 HSMs (Head Superintendent Managers): 4 × ₹1,200 = ₹4,800
        - Student Interns (26 students @ ₹200 each): ₹5,200 (Total Stipends = ₹12,200)
        - Bouquet Cost (6 @ ₹250 each): ₹1,500
        - Garland (Traditional Welcome): ₹1,000
        - Miscellaneous Contingencies: ₹5,000
      * GRAND TOTAL SANCTIONED EXPENDITURE: ₹1,11,600 (₹91,900 + ₹19,700).

STRICT CAPACITY & GEOGRAPHIC CONSTRAINTS:
- Operational counts must remain strictly and inviolably: exactly 40 active sponsored scholars (divided into 4 teams in Wing A) and exactly 34 rescued street dogs (housed across 4 built shelter homes in Wing B).
- Do not cite, claim, extrapolate, or invent counts other than 40 scholars and 34 dogs under any circumstances. Prohibiting claiming counts other than 40 scholars and 34 dogs is an inviolable mandate.
- All current facilities, sanctuary operations, 4 shelter homes, and clinics are located SOLELY in Prayagraj (191/C, Tilak Nagar Allahpur Prayagraj 211006). The foundation does NOT operate any clinic, shelter, or triage station in Chennai. Late Kiran Singh ji's historical research took place at AAZP Vandalur (Chennai), but current operations are in Prayagraj.

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
    const modelsToTry = Array.from(new Set(GEMINI_MODEL_CASCADE));
    for (const modelName of modelsToTry) {
      try {
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => abortController.abort(), 15000);

        const generatePromise = client.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            systemInstruction: FOUNDATION_SYSTEM_PROMPT,
            responseMimeType: "application/json",
            temperature: 0.3,
            maxOutputTokens: 1500,
            httpOptions: { timeout: 15000 },
          },
        });

        const timeoutPromise = new Promise<never>((_, reject) => {
          abortController.signal.addEventListener("abort", () => {
            reject(new Error(`Gemini API call to ${modelName} timed out via AbortSignal after 15000ms`));
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
      } catch (error: any) {
        const errMsg = error?.message || "";
        if (error?.status === 429 || errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("quota")) {
          console.warn(`Gemini API quota reached (429) during draft generation, deploying institutional draft generator.`);
          break;
        }
        console.warn(`Gemini model ${modelName} failed during draft generation, checking next fallback:`, error);
        // Continue loop to next model in cascade
      }
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

      const modelsToTry = Array.from(new Set(GEMINI_MODEL_CASCADE));
      for (const modelName of modelsToTry) {
        try {
          const abortController = new AbortController();
          const timeoutId = setTimeout(() => abortController.abort(), 4000);

          const generatePromise = client.models.generateContent({
            model: modelName,
            contents: formattedContents,
            config: {
              systemInstruction: FOUNDATION_SYSTEM_PROMPT,
              temperature: 0.4,
              maxOutputTokens: 1200,
              httpOptions: { timeout: 4000 },
            },
          });

          const timeoutPromise = new Promise<never>((_, reject) => {
            abortController.signal.addEventListener("abort", () => {
              reject(new Error(`Gemini API call to ${modelName} timed out via AbortSignal after 4000ms`));
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
          const combinedLower = (latestUserMessage + " " + replyText).toLowerCase();
          if (isEmergency) {
            suggestedAction = {
              type: "whatsapp_emergency",
              label: "Trigger Immediate Emergency WhatsApp",
              href: "/emergency",
            };
          } else if (combinedLower.includes("dog") || combinedLower.includes("canine") || combinedLower.includes("vaccin") || combinedLower.includes("shelter")) {
            suggestedAction = {
              type: "view_dogs",
              label: "View 34 Rescued Dogs Roster",
              href: "/wings/dogs",
            };
          } else if (combinedLower.includes("student") || combinedLower.includes("scholar") || combinedLower.includes("internship") || combinedLower.includes("team")) {
            suggestedAction = {
              type: "view_students",
              label: "Explore Student Welfare Wing (40 Scholars)",
              href: "/wings/students",
            };
          } else if (combinedLower.includes("event") || combinedLower.includes("convocation") || combinedLower.includes("gathering")) {
            suggestedAction = {
              type: "intake_form",
              label: "View Flagship Internship Events",
              href: "/events",
            };
          } else if (combinedLower.includes("bank") || combinedLower.includes("donat") || combinedLower.includes("80g") || combinedLower.includes("tax")) {
            suggestedAction = {
              type: "intake_form",
              label: "View Official Bank Coordinates & 80G",
              href: "/about#banking-coordinates",
            };
          }

          return {
            reply: replyText,
            suggestedAction,
          };
        } catch (modelError: any) {
          const errMsg = modelError?.message || "";
          const isQuotaExhausted =
            modelError?.status === 429 ||
            errMsg.includes("429") ||
            errMsg.includes("RESOURCE_EXHAUSTED") ||
            errMsg.includes("quota");

          const isTimeout =
            errMsg.includes("timed out") ||
            errMsg.includes("AbortSignal") ||
            errMsg.includes("TIMEOUT") ||
            errMsg.includes("UND_ERR_HEADERS_TIMEOUT");

          if (isQuotaExhausted || isTimeout) {
            console.warn(
              `Gemini API unavailable (${isTimeout ? "network timeout" : "429 quota"}), switching instantly to institutional archive intelligence.`
            );
            break;
          }
          console.warn(`Gemini model ${modelName} failed during chat turn, trying next fallback:`, modelError);
        }
      }
    } catch (error) {
      console.error("Gemini 2.5 Flash chat error:", error);
    }
  }

  // Graceful deterministic responder adhering strictly to institutional facts
  if (isEmergency) {
    return {
      reply: `CRITICAL TRIAGE PROTOCOL: If you are reporting an injured animal or community member in immediate distress, please alert our emergency dispatch grid directly. Our field coordinators respond rapidly across the Prayagraj and suburban municipal corridor.`,
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
    userQueryLower.includes("jayalalithaa") ||
    userQueryLower.includes("felid") ||
    userQueryLower.includes("ethology") ||
    userQueryLower.includes("vandalur")
  ) {
    return {
      reply: `Late Kiran Singh ji was a distinguished ethologist who earned her Ph.D. specializing in the behavioral science, training, and conditioning of apex felids (lions, tigers, and leopards). She served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai) and worked in close alignment with then Chief Minister Late J. Jayalalithaa ("Amma"). Kiran Singh Foundation is a registered public charitable trust under the Indian Trust Act of 1882 (Est. 30/04/2023, Secretariat: 191/C, Tilak Nagar Allahpur Prayagraj 211006). Her vision powers our guiding ethos: "A Journey from struggle to Enlightenment" ("Working Towards Change").`,
      suggestedAction: {
        type: "intake_form",
        label: "Read Institutional Archive",
        href: "/about",
      },
    };
  }

  if (
    userQueryLower.includes("member") ||
    userQueryLower.includes("trustee") ||
    userQueryLower.includes("leader") ||
    userQueryLower.includes("president") ||
    userQueryLower.includes("secretary") ||
    userQueryLower.includes("treasurer") ||
    userQueryLower.includes("anil") ||
    userQueryLower.includes("anuj") ||
    userQueryLower.includes("akansha") ||
    userQueryLower.includes("registrar") ||
    userQueryLower.includes("shiksha") ||
    userQueryLower.includes("navyanshi")
  ) {
    return {
      reply: `The Kiran Singh Foundation is governed by its 3 Core Members (Board of Trustees):\n• Shri Anil Kumar Singh — President\n• Shri Anuj Kumar Singh — Secretary\n• Ms. Akansha Singh — Treasurer\n\nAdministrative oversight for the Student Welfare Wing is led by:\n• Ms. Shiksha Jaiswal — Permanent Registrar\n• Ms. Navyanshi Dwivedi — Deputy Registrar\n\nTogether, leadership oversees the 4 Operational Wings from our registered headquarters at 191/C, Tilak Nagar Allahpur Prayagraj 211006.`,
      suggestedAction: {
        type: "intake_form",
        label: "Inspect Leadership & Governance",
        href: "/about#hierarchy",
      },
    };
  }

  if (
    userQueryLower.includes("dog") ||
    userQueryLower.includes("canine") ||
    userQueryLower.includes("rabies") ||
    userQueryLower.includes("shelter") ||
    userQueryLower.includes("puppy") ||
    userQueryLower.includes("feeding") ||
    userQueryLower.includes("indie") ||
    userQueryLower.includes("pariah")
  ) {
    return {
      reply: `Our KSF (Dog Welfare) Wing shelters and protects exactly 34 rescued street dogs across 4 dedicated built shelter homes in Prayagraj. Every dog receives 100% foundation-funded nutritious meals, clean water facilities, hygienic shelter, surgical sterilizations, and systematic anti-rabies and annual booster vaccinations. For rapid rescue triage or injured animal reports, our emergency helpline is +91 96709 70750.`,
      suggestedAction: {
        type: "view_dogs",
        label: "Inspect 34 Resident Dogs (4 Shelters)",
        href: "/wings/dogs",
      },
    };
  }

  // 2nd Winter Internship Announcement & Sanctioned Expense Report
  if (
    userQueryLower.includes("winter") ||
    userQueryLower.includes("expense") ||
    userQueryLower.includes("budget") ||
    userQueryLower.includes("sanction") ||
    userQueryLower.includes("111600") ||
    userQueryLower.includes("order form") ||
    userQueryLower.includes("closing ceremony") ||
    userQueryLower.includes("r&d wing") ||
    userQueryLower.includes("research and development wing")
  ) {
    return {
      reply: `**Official Institutional Announcement: 2nd Winter Internship Program (2026–27 Session)**\n\n• **Program Tenure:** 16th November 2026 till 30th December 2026.\n• **Closing Ceremony:** 3rd January 2027.\n• **Cohort Mobilization:** Exactly 30 students of the foundation.\n• **Prime Focus:** Divide students into teams and provide them opportunities to develop a solid research and development wing so that their research and speaking capability can be enhanced.\n• **Patriotic Valediction:** "Jai Hind".\n\n**Audited Sanctioned Budget (Approved by Secretary Shri Anuj Kumar Singh on 11/11/26):**\n• **Grand Total:** ₹1,11,600 (Order Form Page 1: ₹91,900 + Page 2: ₹19,700)\n• **Banquet & Hotel (80 people @ ₹800):** ₹64,000\n• **Awards, Trophies & Mementos:** ₹15,900 (6 trophies @ ₹1,500, 30 mementos @ ₹200, 100 certs/letters @ ₹9)\n• **Scholar Stipends (30 scholars):** ₹12,200 (Registrar ₹1,200, Dy. Registrar ₹1,000, 4 HSMs ₹4,800, 26 Scholars ₹5,200)\n• **Audio-Visual Sound & Stage Banners:** ₹12,000 (Sound rig ₹7,000, Banners ₹5,000)\n• **Protocols & Contingencies:** ₹7,500 (Bouquets ₹1,500, Garlands ₹1,000, Misc ₹5,000).`,
      suggestedAction: {
        type: "intake_form",
        label: "View 2nd Winter Internship Dossier & Budget",
        href: "/events/upcoming-winter-internship-program-2026-27#expense-report",
      },
    };
  }

  if (
    userQueryLower.includes("event") ||
    userQueryLower.includes("convocation") ||
    userQueryLower.includes("symposium") ||
    userQueryLower.includes("ceremony") ||
    userQueryLower.includes("gathering") ||
    userQueryLower.includes("winter 2026") ||
    userQueryLower.includes("flagship") ||
    userQueryLower.includes("decree")
  ) {
    return {
      reply: `Kiran Singh Foundation has executed 3 landmark Flagship Internship Programs in Prayagraj:\n1. 1st Summer Internship Program (July 2025): Inaugural personality incubation and executive speech labs.\n2. Winter Internship Program (January 2026): Constitution Day symposium and presentation defense.\n3. 2nd Summer Internship Program (June 2026): Plagiarism-audited research defense and convocation awards.\n\nUpcoming Deployment: The 2026–27 Winter Internship Batch (Decree signed 05/11/2026 by Secretary Shri Anuj Kumar Singh) mobilizes 26 scholars across 4 tactical teams headed by HSMs Vaishnavi, Prateeksha Pandey, Shubhangi Singh, and Vedant Agrawal.`,
      suggestedAction: {
        type: "intake_form",
        label: "View Convocations & Events Hub",
        href: "/events",
      },
    };
  }

  if (
    userQueryLower.includes("student") ||
    userQueryLower.includes("scholar") ||
    userQueryLower.includes("intern") ||
    userQueryLower.includes("roster") ||
    userQueryLower.includes("team") ||
    userQueryLower.includes("plagiarism") ||
    userQueryLower.includes("stipend") ||
    userQueryLower.includes("psychometric")
  ) {
    return {
      reply: `Our KSF (Student Welfare) Wing operates an allotted cohort of exactly 40 scholars chosen through psychometric testing and interviews conducted by the 3 core members and industry professionals. The 40 scholars are organized into 4 teams:\n• Team 1 (Team Unnaati & Shiksha - 12 scholars)\n• Team 2 (Team Vaishnavi & Navyanshi - 11 scholars)\n• Team 3 (Team Prateeksha & Rohini - 10 scholars)\n• Team 4 (Team Shubhangi - 4 enrolled scholars + 3 open vacancies)\n\nScholars undertake research reports verified by formal plagiarism audits, defended before evaluative panels, and receive completion certificates, trophies, mementos, and cash stipends.`,
      suggestedAction: {
        type: "view_students",
        label: "View 2026–27 4-Team Student Roster",
        href: "/wings/students",
      },
    };
  }

  if (
    userQueryLower.includes("upes") ||
    userQueryLower.includes("dehradun") ||
    userQueryLower.includes("mou") ||
    userQueryLower.includes("school for life") ||
    userQueryLower.includes("partnership") ||
    userQueryLower.includes("alliance")
  ) {
    return {
      reply: `Kiran Singh Foundation maintains a binding 5-year bilateral academic partnership (MoU executed 13th April 2026) with the University of Petroleum and Energy Studies (UPES), Dehradun for their "School for Life" undergraduate social internship track. The program guarantees a strict 1:5 mentor ratio, 100% pro-bono zero fee policy, POSH Act compliance, full travel reimbursement, and official coursework credits submitted to UPES Registrar.`,
      suggestedAction: {
        type: "intake_form",
        label: "View UPES Partnership Details",
        href: "/about#accredited-partnerships",
      },
    };
  }

  if (
    userQueryLower.includes("donat") ||
    userQueryLower.includes("bank") ||
    userQueryLower.includes("account") ||
    userQueryLower.includes("80g") ||
    userQueryLower.includes("tax") ||
    userQueryLower.includes("hdfc") ||
    userQueryLower.includes("ifsc") ||
    userQueryLower.includes("pan") ||
    userQueryLower.includes("csr") ||
    userQueryLower.includes("urn")
  ) {
    return {
      reply: `Kiran Singh Foundation is a public charitable trust registered under the Indian Trust Act of 1882 (Est. 30/04/2023).\n\nOfficial Bank Endowment Details:\n• Bank: HDFC Bank, Naya Katra, Prayagraj\n• A/C Number: 50200119758811\n• IFSC Code: HDFC0004664\n• Customer ID: 353372799\n\nStatutory Tax Credentials:\n• PAN: AAGTK3961N\n• Income Tax URN (80G/12A): AAGTK3961NE20261\n• MCA CSR Registration: CSR00110895\n• Sub-Registrar SRN: AC3352827\n\nAll donations are eligible for statutory tax deductions under Section 80G with Form 10BE certificates issued for all qualifying contributions.`,
      suggestedAction: {
        type: "intake_form",
        label: "View Banking & Tax Credentials",
        href: "/about#four-wings-charter",
      },
    };
  }

  if (
    userQueryLower.includes("village") ||
    userQueryLower.includes("rural") ||
    userQueryLower.includes("women") ||
    userQueryLower.includes("female") ||
    userQueryLower.includes("girl") ||
    userQueryLower.includes("entrepreneur") ||
    userQueryLower.includes("summit")
  ) {
    return {
      reply: `Our community transformation agenda encompasses Wings C and D:\n\n• Wing C: KSF (Village Development) Wing — Aim: "Empowering village through education." Complete academic tuition fees, hygienic daily meals, and residential shelter are 100% underwritten by the foundation for enrolled rural scholars.\n\n• Wing D: KSF (Women Empowerment) Wing — Dedicated to building sustainable careers for female scholars and women through professional mentorship, skill incubation, and regular Investor Summits held in Prayagraj to connect regional women founders with angel capital.`,
      suggestedAction: {
        type: "intake_form",
        label: "Explore Village & Women Wings",
        href: "/about#four-wings-charter",
      },
    };
  }

  if (
    userQueryLower.includes("contact") ||
    userQueryLower.includes("email") ||
    userQueryLower.includes("phone") ||
    userQueryLower.includes("address") ||
    userQueryLower.includes("location") ||
    userQueryLower.includes("office") ||
    userQueryLower.includes("helpline")
  ) {
    return {
      reply: `Official Institutional Coordinates for Kiran Singh Foundation:\n• Secretariat & HQ: 191/C, Tilak Nagar Allahpur Prayagraj 211006 (U.P., India)\n• Primary Dispatch & Helpline: +91 96709 70750 / 8115141378 / 9450630310\n• Official Email: kiransinghfoundationindia@gmail.com\n• Website: https://kiransinghfoundation.org\n• All facilities and shelter homes are located exclusively in Prayagraj.`,
      suggestedAction: {
        type: "intake_form",
        label: "Contact Emergency & Support Desk",
        href: "/emergency",
      },
    };
  }

  return {
    reply: `Welcome to the Kiran Singh Foundation (Trust registered under Indian Trust Act of 1882, PAN: AAGTK3961N, CSR: CSR00110895, 191/C, Tilak Nagar Allahpur Prayagraj 211006). Established in sacred memory of Late Kiran Singh ji, our mission operates under the tagline "A Journey from struggle to Enlightenment" and motto "Working Towards Change". We execute 4 Operational Wings: Student Welfare (40 scholars across 4 teams), Dog Welfare (34 rescued street dogs across 4 built shelter homes), Village Development, and Women Empowerment. Contact: +91 96709 70750 / kiransinghfoundationindia@gmail.com. How may we assist you today?`,
    suggestedAction: {
      type: "intake_form",
      label: "Mutual-Aid & Community Intake",
      href: "/#mutual-aid",
    },
  };
}

