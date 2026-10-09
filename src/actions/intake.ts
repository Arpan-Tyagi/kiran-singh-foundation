"use server";

import { submitSupportApplication, SupportApplication } from "@/lib/supabase";
import { buildEmergencyWhatsAppUrl, buildMutualAidWhatsAppUrl } from "@/lib/whatsapp";
import { sendIntakeConfirmationEmail, sendEmergencyAdminAlertEmail } from "@/lib/email";

export interface SubmitIntakeInput {
  applicantName: string;
  contactEmail?: string | null;
  contactPhone: string;
  category: "volunteer_onboarding" | "student_application" | "emergency_distress";
  priority?: "standard" | "urgent" | "critical_emergency";
  subject?: string;
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
    if (!data.applicantName?.trim() || !data.contactPhone?.trim() || !data.messageDetails?.trim()) {
      return {
        success: false,
        error: "Name, phone number, and details are required.",
      };
    }

    const INDIAN_PHONE_REGEX = /^(?:\+?91|0)?[6-9]\d{9}$/;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const cleanPhone = data.contactPhone.replace(/[\s-]/g, "");
    if (!INDIAN_PHONE_REGEX.test(cleanPhone)) {
      return {
        success: false,
        error: "Please provide a valid Indian mobile number (+91 or 10-digit).",
      };
    }

    const sanitizedEmail = data.contactEmail?.trim() ? data.contactEmail.trim() : null;
    if (sanitizedEmail && !EMAIL_REGEX.test(sanitizedEmail)) {
      return {
        success: false,
        error: "Please provide a valid email address.",
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

    const cleanApplicantName = data.applicantName.trim();
    const cleanMessageDetails = data.messageDetails.trim();
    const cleanLocation = data.locationData?.trim() || undefined;

    const created = await submitSupportApplication({
      applicant_name: cleanApplicantName,
      contact_email: sanitizedEmail,
      contact_phone: cleanPhone,
      category,
      priority,
      subject: data.subject?.trim() || `Intake: ${category}`,
      message_details: cleanMessageDetails,
      location_data: cleanLocation,
    });

    // Build immediate WhatsApp deep link
    let whatsappUrl: string;
    if (category === "emergency_distress" || priority === "critical_emergency") {
      whatsappUrl = buildEmergencyWhatsAppUrl({
        callerName: cleanApplicantName,
        phone: cleanPhone,
        location: cleanLocation || "Not specified",
        description: cleanMessageDetails,
        isInjuredCanine: data.isInjuredCanine,
      });

      // Dispatch emergency alert email asynchronously
      sendEmergencyAdminAlertEmail({
        callerName: cleanApplicantName,
        phone: cleanPhone,
        location: cleanLocation || "Not specified",
        description: cleanMessageDetails,
        priority: priority === "critical_emergency" ? "critical_emergency" : "urgent",
      }).catch((e) => console.error("Emergency alert email error:", e));
    } else {
      whatsappUrl = buildMutualAidWhatsAppUrl({
        applicantName: cleanApplicantName,
        category,
        contact: cleanPhone,
        brief: cleanMessageDetails,
      });
    }

    // Send confirmation email if email is provided
    if (sanitizedEmail && sanitizedEmail.includes("@")) {
      sendIntakeConfirmationEmail({
        toEmail: sanitizedEmail,
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
