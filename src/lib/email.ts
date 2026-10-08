// Kiran Singh Foundation - Resend Transactional Email Pipelines
// Renders luxury editorial archival HTML templates for confirmations and emergency alerts.

import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "concierge@kiransinghfoundation.org";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "emergency@kiransinghfoundation.org";

function getResendClient(): Resend | null {
  if (!RESEND_API_KEY || RESEND_API_KEY === "placeholder-resend-key" || RESEND_API_KEY.trim() === "") {
    return null;
  }
  try {
    return new Resend(RESEND_API_KEY);
  } catch (err) {
    console.warn("Resend client initialization error:", err);
    return null;
  }
}

export interface IntakeEmailPayload {
  toEmail: string;
  applicantName: string;
  category: string;
  priority: string;
  referenceId: string;
  message: string;
}

export interface EmergencyAdminEmailPayload {
  callerName: string;
  phone: string;
  location: string;
  description: string;
  priority: "urgent" | "critical_emergency";
}

/**
 * Sends a confirmation email to the community member who submitted an intake form.
 */
export async function sendIntakeConfirmationEmail(payload: IntakeEmailPayload) {
  const client = getResendClient();

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { background-color: #0A0B0D; color: #F4EFEA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #1A1C20; border: 1px solid #C89D54; border-radius: 16px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
    .header { text-align: center; border-bottom: 1px solid rgba(200, 157, 84, 0.3); padding-bottom: 24px; margin-bottom: 28px; }
    .emblem-title { color: #C89D54; font-size: 20px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
    .motto { color: #A39E96; font-size: 13px; font-style: italic; margin-top: 6px; }
    .greeting { font-size: 18px; color: #F4EFEA; margin-bottom: 16px; }
    .body-text { font-size: 15px; line-height: 1.6; color: #D6CFC7; }
    .details-card { background-color: #121418; border-left: 3px solid #C89D54; padding: 16px; margin: 24px 0; border-radius: 4px; }
    .detail-row { margin: 8px 0; font-size: 14px; }
    .detail-label { color: #C89D54; font-weight: 600; }
    .footer { text-align: center; margin-top: 36px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #A39E96; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="emblem-title">Kiran Singh Foundation</h1>
      <p class="motto">"Working towards Change"</p>
    </div>
    <div class="greeting">Dear ${payload.applicantName},</div>
    <p class="body-text">
      Your submission has been formally logged into the institutional registry of the Kiran Singh Foundation. In sacred memory of Late Kiran Singh ji, our field coordinators and scholar logistics desk operate to ensure swift, accountable attention to every community request.
    </p>
    <div class="details-card">
      <div class="detail-row"><span class="detail-label">Reference ID:</span> ${payload.referenceId}</div>
      <div class="detail-row"><span class="detail-label">Classification:</span> ${payload.category}</div>
      <div class="detail-row"><span class="detail-label">Triage Priority:</span> ${payload.priority.toUpperCase()}</div>
      <div class="detail-row"><span class="detail-label">Notes Registered:</span> ${payload.message}</div>
    </div>
    <p class="body-text">
      If this matter escalates into an active emergency, please do not hesitate to contact our 24/7 mutual-aid desk via WhatsApp or phone.
    </p>
    <div class="footer">
      Kiran Singh Foundation Directorate &bull; Vandalur & Adyar Stations, Chennai<br/>
      Student Welfare Wing (40 Scholars) &bull; Dog Care Centre (34 Rescued Canines)
    </div>
  </div>
</body>
</html>
`;

  if (!client) {
    console.log(`[EMAIL DISPATCH - SIMULATED] To: ${payload.toEmail} | Ref: ${payload.referenceId}`);
    return { success: true, simulated: true };
  }

  try {
    const result = await client.emails.send({
      from: `Kiran Singh Foundation <${FROM_EMAIL}>`,
      to: payload.toEmail,
      subject: `[Registry #${payload.referenceId}] Submission Received - Kiran Singh Foundation`,
      html: htmlContent,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Resend error sending intake confirmation:", error);
    return { success: false, error };
  }
}

/**
 * Sends a high-priority emergency alert email to the Foundation directorate and veterinary team.
 */
export async function sendEmergencyAdminAlertEmail(payload: EmergencyAdminEmailPayload) {
  const client = getResendClient();

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { background-color: #0A0B0D; color: #F4EFEA; font-family: -apple-system, BlinkMacSystemFont, sans-serif; padding: 30px 15px; }
    .alert-card { max-width: 600px; margin: 0 auto; background-color: #1A1C20; border: 2px solid #A82020; border-radius: 12px; padding: 30px; }
    .banner { background-color: #A82020; color: #FFFFFF; font-weight: 700; text-align: center; padding: 12px; border-radius: 8px; letter-spacing: 1px; }
    .info { margin: 20px 0; font-size: 15px; line-height: 1.6; }
    .label { color: #C89D54; font-weight: 600; }
  </style>
</head>
<body>
  <div class="alert-card">
    <div class="banner">🚨 CRITICAL EMERGENCY DISTRESS DISPATCH</div>
    <div class="info">
      <p><span class="label">Priority:</span> ${payload.priority.toUpperCase()}</p>
      <p><span class="label">Caller / Reporter:</span> ${payload.callerName}</p>
      <p><span class="label">Phone:</span> <a href="tel:${payload.phone}" style="color: #F4EFEA;">${payload.phone}</a></p>
      <p><span class="label">Location Coordinates / Landmark:</span> ${payload.location}</p>
      <p><span class="label">Incident Details:</span> ${payload.description}</p>
      <p><span class="label">Timestamp:</span> ${new Date().toISOString()}</p>
    </div>
  </div>
</body>
</html>
`;

  if (!client) {
    console.log(`[EMERGENCY ALERT - SIMULATED] Sent to admin: ${ADMIN_EMAIL} for caller: ${payload.callerName}`);
    return { success: true, simulated: true };
  }

  try {
    const result = await client.emails.send({
      from: `Foundation Emergency Triage <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: `🚨 [CRITICAL ALERT] Immediate Dispatch Needed: ${payload.location}`,
      html: htmlContent,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Resend error sending emergency alert:", error);
    return { success: false, error };
  }
}
