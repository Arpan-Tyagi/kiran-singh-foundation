"use server";

import { submitSupportApplication, SupportApplication } from "@/lib/supabase";
import { buildEmergencyWhatsAppUrl, buildMutualAidWhatsAppUrl } from "@/lib/whatsapp";
import { sendIntakeConfirmationEmail, sendEmergencyAdminAlertEmail } from "@/lib/email";

export interface SubmitIntakeInput {
  applicantName: string;
  contactEmail: string;
  contactPhone: string;
  category: "volunteer_onboarding" | "student_application" | "emergency_distress";
  priority?: "standard" | "urgent" | "critical_emergency";
  subject: string;
  messageDetails: string;
  locationData?: string;
  isInjuredCanine?: boolean;
}

export interface SubmitIntakeResult {
  success: boolean;
  referenceId?: string;
  whatsappUrl?: string;
  error?: string;
}

export async function submitIntakeAction(data: SubmitIntakeInput): Promise<SubmitIntakeResult> {
  try {
    if (!data.applicantName || !data.contactPhone || !data.messageDetails) {
      return {
        success: false,
        error: "Name, phone number, and details are required.",
      };
    }

    const VALID_CATEGORIES = ["volunteer_onboarding", "student_application", "emergency_distress"] as const;
    type ValidCategory = (typeof VALID_CATEGORIES)[number];
    const category: ValidCategory =
      data.category && (VALID_CATEGORIES as readonly string[]).includes(data.category)
        ? (data.category as ValidCategory)
        : "volunteer_onboarding";

    const VALID_PRIORITIES = ["standard", "urgent", "critical_emergency"] as const;
    type ValidPriority = (typeof VALID_PRIORITIES)[number];

    const defaultPriority: ValidPriority =
      category === "emergency_distress" ? "urgent" : "standard";

    const priority: ValidPriority =
      data.priority && (VALID_PRIORITIES as readonly string[]).includes(data.priority)
        ? (data.priority as ValidPriority)
        : defaultPriority;

    const created = await submitSupportApplication({
      applicant_name: data.applicantName,
      contact_email: data.contactEmail || "not-provided@kiransinghfoundation.org",
      contact_phone: data.contactPhone,
      category,
      priority,
      subject: data.subject || `Intake: ${category}`,
      message_details: data.messageDetails,
      location_data: data.locationData,
    });

    // Build immediate WhatsApp deep link
    let whatsappUrl: string;
    if (category === "emergency_distress" || priority === "critical_emergency") {
      whatsappUrl = buildEmergencyWhatsAppUrl({
        callerName: data.applicantName,
        phone: data.contactPhone,
        location: data.locationData || "Not specified",
        description: data.messageDetails,
        isInjuredCanine: data.isInjuredCanine,
      });

      // Dispatch emergency alert email asynchronously
      sendEmergencyAdminAlertEmail({
        callerName: data.applicantName,
        phone: data.contactPhone,
        location: data.locationData || "Not specified",
        description: data.messageDetails,
        priority: priority === "critical_emergency" ? "critical_emergency" : "urgent",
      }).catch((e) => console.error("Emergency alert email error:", e));
    } else {
      whatsappUrl = buildMutualAidWhatsAppUrl({
        applicantName: data.applicantName,
        category,
        contact: data.contactPhone,
        brief: data.messageDetails,
      });
    }

    // Send confirmation email if email is provided
    if (data.contactEmail && data.contactEmail.includes("@")) {
      sendIntakeConfirmationEmail({
        toEmail: data.contactEmail,
        applicantName: data.applicantName,
        category,
        priority,
        referenceId: created.id,
        message: data.messageDetails,
      }).catch((e) => console.error("Intake confirmation email error:", e));
    }

    return {
      success: true,
      referenceId: created.id,
      whatsappUrl,
    };
  } catch (error: any) {
    console.error("Intake submission error:", error);
    return {
      success: false,
      error: error?.message || "Failed to process intake submission.",
    };
  }
}
