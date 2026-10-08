"use server";

import {
  executeFoundationChatTurn as runFoundationChatTurn,
  ChatMessage,
  ChatTurnResponse,
} from "@/lib/gemini";

/**
 * Support Concierge Server Action:
 * Powers the interactive onboarding, institutional orientation, and emergency triage drawer.
 * Strictly adheres to task specification: A Server Action (executeFoundationChatTurn).
 */
export async function executeFoundationChatTurn(
  history: ChatMessage[],
  message: string
): Promise<ChatTurnResponse> {
  if (!message || message.trim() === "") {
    return {
      reply: "Please provide a message or inquiry.",
    };
  }

  try {
    return await runFoundationChatTurn(history, message);
  } catch (error: any) {
    console.error("Server Action executeFoundationChatTurn failed:", error);
    return {
      reply: "Our institutional copilot encountered an error. Please try again or reach our emergency coordination desk directly on WhatsApp.",
      suggestedAction: {
        type: "whatsapp_emergency",
        label: "Contact Emergency Desk",
        href: "/emergency",
      },
    };
  }
}

// Backward-compatible alias
export const submitFoundationChatTurnAction = executeFoundationChatTurn;
