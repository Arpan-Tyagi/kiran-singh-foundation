"use server";

import { submitSupportApplication } from "@/lib/supabase";

export interface Donation80GInput {
  donorName: string;
  donorPan: string;
  donorEmail: string;
  donorPhone: string;
  donorAddress: string;
  amount: number;
  transactionId: string;
  wingPreference: string;
  donationDate?: string;
}

export interface Donation80GReceipt {
  receiptNumber: string;
  donorName: string;
  donorPan: string;
  donorEmail: string;
  donorPhone: string;
  donorAddress: string;
  amount: number;
  amountInWords: string;
  transactionId: string;
  wingPreference: string;
  donationDate: string;
  financialYear: string;
  statutoryPan: string;
  statutoryCsr: string;
  statutoryUrn: string;
  statutorySrn: string;
  registeredOffice: string;
  bankAccount: string;
  bankIfsc: string;
}

export interface SubmitDonation80GResult {
  success: boolean;
  receipt?: Donation80GReceipt;
  error?: string;
}

function numberToIndianRupeesWords(num: number): string {
  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (num === 0) return "Zero Rupees Only";

  const numToWords = (n: number): string => {
    let str = "";
    if (n >= 10000000) {
      str += numToWords(Math.floor(n / 10000000)) + " Crore ";
      n %= 10000000;
    }
    if (n >= 100000) {
      str += numToWords(Math.floor(n / 100000)) + " Lakh ";
      n %= 100000;
    }
    if (n >= 1000) {
      str += numToWords(Math.floor(n / 1000)) + " Thousand ";
      n %= 1000;
    }
    if (n >= 100) {
      str += numToWords(Math.floor(n / 100)) + " Hundred ";
      n %= 100;
    }
    if (n > 0) {
      if (str !== "") str += "and ";
      if (n < 20) {
        str += a[n];
      } else {
        str += b[Math.floor(n / 10)];
        if (n % 10 > 0) str += " " + a[n % 10];
      }
    }
    return str.trim();
  };

  return `${numToWords(Math.floor(num))} Rupees Only`;
}

export async function submitDonation80GAction(
  data: Donation80GInput
): Promise<SubmitDonation80GResult> {
  try {
    if (!data.donorName?.trim()) {
      return { success: false, error: "Legal Donor Name is required as per PAN." };
    }
    if (!data.donorPan?.trim()) {
      return { success: false, error: "Valid PAN is mandatory for Section 80G tax deductions." };
    }
    const panClean = data.donorPan.trim().toUpperCase();
    const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!PAN_REGEX.test(panClean)) {
      return {
        success: false,
        error: "Invalid PAN format. Please provide a valid 10-character Indian PAN (e.g., ABCDE1234F).",
      };
    }

    if (!data.donorEmail?.trim() || !data.donorEmail.includes("@")) {
      return { success: false, error: "A valid email address is required to receive the 80G certificate." };
    }

    const INDIAN_PHONE_REGEX = /^(?:\+?91|0)?[6-9]\d{9}$/;
    const phoneClean = data.donorPhone.replace(/[\s-]/g, "");
    if (!INDIAN_PHONE_REGEX.test(phoneClean)) {
      return {
        success: false,
        error: "Please provide a valid Indian mobile number (+91 or 10-digit).",
      };
    }

    if (!data.donorAddress?.trim()) {
      return { success: false, error: "Postal address with PIN code is mandatory under CBDT Form 10BD rules." };
    }

    if (!data.amount || data.amount < 100) {
      return { success: false, error: "Minimum contribution amount is ₹100." };
    }

    if (!data.transactionId?.trim()) {
      return { success: false, error: "Bank UTR or UPI Transaction ID is required for verification." };
    }

    // Generate verified receipt reference
    const now = new Date();
    const dateFormatted = data.donationDate || now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // 1-12
    const fyStart = currentMonth >= 4 ? currentYear : currentYear - 1;
    const fyEnd = fyStart + 1;
    const financialYear = `FY ${fyStart}-${fyEnd.toString().slice(-2)}`;

    const randomSerial = Math.floor(100000 + Math.random() * 900000);
    const receiptNumber = `KSF/80G/${fyStart}-${fyEnd.toString().slice(-2)}/${randomSerial}`;

    // Store record in support intake system for audit tracking
    try {
      await submitSupportApplication({
        applicant_name: data.donorName.trim(),
        contact_email: data.donorEmail.trim(),
        contact_phone: phoneClean,
        category: "volunteer_onboarding",
        priority: "standard",
        subject: `80G DONATION RECEIPT: ₹${data.amount.toLocaleString("en-IN")} (Ref: ${receiptNumber})`,
        message_details: `Donor PAN: ${panClean} | UTR: ${data.transactionId.trim()} | Wing: ${data.wingPreference} | Address: ${data.donorAddress.trim()} | FY: ${financialYear}`,
        location_data: data.donorAddress.trim(),
      });
    } catch (dbErr) {
      console.warn("Non-blocking DB write notice for 80G receipt:", dbErr);
    }

    const receipt: Donation80GReceipt = {
      receiptNumber,
      donorName: data.donorName.trim(),
      donorPan: panClean,
      donorEmail: data.donorEmail.trim(),
      donorPhone: phoneClean,
      donorAddress: data.donorAddress.trim(),
      amount: data.amount,
      amountInWords: numberToIndianRupeesWords(data.amount),
      transactionId: data.transactionId.trim(),
      wingPreference: data.wingPreference || "General Operational Endowment",
      donationDate: dateFormatted,
      financialYear,
      statutoryPan: "AAGTK3961N",
      statutoryCsr: "CSR00110895",
      statutoryUrn: "AAGTK3961NE20261",
      statutorySrn: "AC3352827",
      registeredOffice: "191/C, Tilak Nagar Allahpur Prayagraj 211006, UP",
      bankAccount: "50200119758811",
      bankIfsc: "HDFC0004664",
    };

    return {
      success: true,
      receipt,
    };
  } catch (error: any) {
    console.error("Donation 80G submission error:", error);
    return {
      success: false,
      error: error?.message || "Failed to issue 80G provisional tax exemption receipt.",
    };
  }
}
