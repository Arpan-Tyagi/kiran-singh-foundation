// Kiran Singh Foundation - WhatsApp Deep-Link Generator Utility
// Interacts with wa.me click-to-chat API for emergency dispatch, RSVPs, and mutual aid.

const DEFAULT_WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919670970750";

export const FOUNDATION_CONTACT_NUMBERS = [
  { label: "Primary / WhatsApp", display: "+91 96709 70750", raw: "9670970750", wa: "919670970750" },
  { label: "Coordinator Line 2", display: "+91 81151 41378", raw: "8115141378", wa: "918115141378" },
  { label: "Coordinator Line 3", display: "+91 94506 30310", raw: "9450630310", wa: "919450630310" },
];

export interface EmergencyDistressPayload {
  callerName: string;
  phone: string;
  location: string;
  description: string;
  isInjuredCanine?: boolean;
}

export interface MutualAidPayload {
  applicantName: string;
  category: "volunteer_onboarding" | "student_application" | "emergency_distress";
  contact: string;
  brief: string;
}

export interface EventRsvpPayload {
  eventTitle: string;
  attendeeName: string;
  attendeePhone?: string;
  headcount?: number;
}

/**
 * Normalizes phone numbers for wa.me API format (digits only, international format without +)
 */
export function sanitizeWhatsAppPhone(phone: string): string {
  if (!phone) return DEFAULT_WHATSAPP_PHONE;
  let digits = phone.replace(/\D/g, "");
  // Handle Indian domestic trunk prefix 0 (e.g. 09840012345 -> 9840012345)
  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  // Default to India country code (91) if standard 10 digits entered
  if (digits.length === 10) {
    return `91${digits}`;
  }
  return digits || DEFAULT_WHATSAPP_PHONE;
}

/**
 * Builds an urgent emergency distress WhatsApp deep link.
 */
export function buildEmergencyWhatsAppUrl(payload: EmergencyDistressPayload): string {
  const targetPhone = sanitizeWhatsAppPhone(DEFAULT_WHATSAPP_PHONE);
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const text = [
    `🚨 *[CRITICAL EMERGENCY DISPATCH - KIRAN SINGH FOUNDATION]*`,
    `--------------------------------------------------`,
    `👤 *Reporter:* ${payload.callerName || "Anonymous Reporter"}`,
    `📞 *Contact:* ${payload.phone || "Not specified"}`,
    `📍 *Location / Landmark:* ${payload.location || "Immediate assistance requested"}`,
    `⚠️ *Situation:* ${payload.description}`,
    payload.isInjuredCanine ? `🐕 *Type:* Canine Trauma / Animal Distress` : `🤝 *Type:* Human / Community Mutual Aid Distress`,
    `⏰ *Timestamp:* ${timestamp}`,
    `--------------------------------------------------`,
    `*Immediate response requested from Foundation Field Dispatch.*`,
  ].join("\n");

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a mutual-aid intake inquiry WhatsApp deep link.
 */
export function buildMutualAidWhatsAppUrl(payload: MutualAidPayload): string {
  const targetPhone = sanitizeWhatsAppPhone(DEFAULT_WHATSAPP_PHONE);
  const categoryLabel = {
    volunteer_onboarding: "Volunteer Onboarding",
    student_application: "Scholarship & Student Welfare Inquiry",
    emergency_distress: "Emergency Mutual Aid",
  }[payload.category];

  const text = [
    `🏛️ *[KIRAN SINGH FOUNDATION - COMMUNITY INTAKE]*`,
    `📋 *Category:* ${categoryLabel}`,
    `👤 *Name:* ${payload.applicantName}`,
    `📞 *Contact:* ${payload.contact}`,
    `📝 *Details:* ${payload.brief}`,
    `--------------------------------------------------`,
    `"Working towards Change"`,
  ].join("\n");

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds an Event RSVP WhatsApp deep link.
 */
export function buildEventRsvpWhatsAppUrl(payload: EventRsvpPayload): string {
  const targetPhone = sanitizeWhatsAppPhone(DEFAULT_WHATSAPP_PHONE);

  const text = [
    `📅 *[EVENT RSVP - KIRAN SINGH FOUNDATION]*`,
    `Gathering: *${payload.eventTitle}*`,
    `Attendee: *${payload.attendeeName}*`,
    payload.attendeePhone ? `Contact: ${payload.attendeePhone}` : null,
    payload.headcount ? `Headcount: ${payload.headcount} attendee(s)` : null,
    `--------------------------------------------------`,
    `Confirming attendance in person.`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
}
