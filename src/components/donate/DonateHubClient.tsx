"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  QrCode,
  Landmark,
  CreditCard,
  FileText,
  Printer,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Info,
  HelpCircle,
  Clock,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import { submitDonation80GAction, Donation80GReceipt } from "@/actions/donate";

interface Tier {
  id: string;
  amount: number;
  label: string;
  title: string;
  description: string;
  impactBadge: string;
  category: "canine" | "student" | "emergency" | "endowment";
  icon: any;
}

const DONATION_TIERS: Tier[] = [
  {
    id: "tier-500",
    amount: 500,
    label: "₹500",
    title: "Community Feeder & First Aid",
    description:
      "Supplies 1 week of nutritious high-protein meals for street pack canines alongside sterile antiseptic wound dressing.",
    impactBadge: "Feeds 5 Dogs / 1 Week",
    category: "canine",
    icon: Heart,
  },
  {
    id: "tier-1500",
    amount: 1500,
    label: "₹1,500",
    title: "Sponsor 1 Rescued Dog (1 Month)",
    description:
      "Covers complete food, clean shelter bedding, anti-rabies booster, and regular veterinary checkup for 1 resident sanctuary canine.",
    impactBadge: "Full Monthly Shelter Care",
    category: "canine",
    icon: ShieldCheck,
  },
  {
    id: "tier-2500",
    amount: 2500,
    label: "₹2,500",
    title: "Sponsor 1 Rural Scholar (1 Month)",
    description:
      "Underwrites college tuition fees, digital library access, academic research materials, and soft skills executive coaching.",
    impactBadge: "Higher Education Grant",
    category: "student",
    icon: GraduationCap,
  },
  {
    id: "tier-5000",
    amount: 5000,
    label: "₹5,000",
    title: "Critical Surgical Trauma & Rabies Clinic",
    description:
      "Funds emergency surgery for accident-struck animals (splints, sutures, IV trauma fluids) and 25 rabies vaccinations in rural outreach.",
    impactBadge: "Emergency Trauma Surgery",
    category: "emergency",
    icon: Sparkles,
  },
  {
    id: "tier-10000",
    amount: 10000,
    label: "₹10,000",
    title: "Patron's Semester Endowment",
    description:
      "Provides semester-long academic sponsorship for an underprivileged student plus comprehensive shelter upkeep across our 4 sanctuary homes.",
    impactBadge: "Full Semester Patron",
    category: "endowment",
    icon: Landmark,
  },
];

export default function DonateHubClient() {
  const [selectedTier, setSelectedTier] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // 80G Receipt Form State
  const [donorName, setDonorName] = useState("");
  const [donorPan, setDonorPan] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [wingPreference, setWingPreference] = useState("Canine Welfare (34 Rescued Dogs)");
  const [isSubmitting80G, setIsSubmitting80G] = useState(false);
  const [error80G, setError80G] = useState<string | null>(null);
  const [issuedReceipt, setIssuedReceipt] = useState<Donation80GReceipt | null>(null);

  const activeAmount = customAmount ? parseInt(customAmount) || 0 : selectedTier;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
  };

  const selectPredefinedTier = (amount: number) => {
    setSelectedTier(amount);
    setCustomAmount("");
  };

  const upiPayload = `upi://pay?pa=50200119758811@hdfcbank&pn=Kiran%20Singh%20Foundation&am=${activeAmount || 1500}&cu=INR&tn=KSF%20Philanthropic%20Endowment`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=${encodeURIComponent(
    upiPayload
  )}`;

  const handleGenerate80G = async (e: React.FormEvent) => {
    e.preventDefault();
    setError80G(null);
    setIsSubmitting80G(true);

    try {
      const res = await submitDonation80GAction({
        donorName,
        donorPan,
        donorEmail,
        donorPhone,
        donorAddress,
        amount: activeAmount || 1500,
        transactionId,
        wingPreference,
      });

      if (!res.success) {
        setError80G(res.error || "Failed to issue 80G receipt.");
      } else if (res.receipt) {
        setIssuedReceipt(res.receipt);
      }
    } catch (err: any) {
      setError80G(err?.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting80G(false);
    }
  };

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* 1. Header & Trust Badge Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-lion-gold-dark" />
          <span>Section 80G Tax Exemption Certified &bull; 100% Direct Impact</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Empower Scholars. <span className="italic text-lion-gold-dark font-light">Rescue Canines.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate leading-relaxed font-sans max-w-2xl mx-auto">
          Every rupee you contribute directly funds our 4 Operational Wings in Prayagraj: sheltering 34 street dogs,
          sponsoring 40 scholars, and providing 24/7 emergency medical triage. All donations are 50% tax-exempt under Section 80G.
        </p>

        {/* Quick Statutory Trust Strip */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2 text-xs font-mono text-slate">
          <span className="px-3 py-1 rounded-lg bg-white border border-border shadow-sm">
            <strong className="text-obsidian">PAN:</strong> AAGTK3961N
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-border shadow-sm">
            <strong className="text-obsidian">CSR:</strong> CSR00110895
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-border shadow-sm">
            <strong className="text-obsidian">URN:</strong> AAGTK3961NE20261
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-border shadow-sm">
            <strong className="text-obsidian">Deed Date:</strong> 30th April 2023
          </span>
        </div>
      </div>

      {/* 2. Interactive Tier Selection Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-lion-gold-dark font-semibold">
              Step 1 of 2
            </span>
            <h2 className="font-serif text-2xl font-bold text-obsidian">
              Select Your Contribution Tier
            </h2>
          </div>
          <span className="text-xs font-mono text-slate hidden sm:inline">
            Active: ₹{(activeAmount || 0).toLocaleString("en-IN")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DONATION_TIERS.map((tier) => {
            const isSelected = !customAmount && selectedTier === tier.amount;
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                onClick={() => selectPredefinedTier(tier.amount)}
                className={`relative flex flex-col justify-between p-5 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? "bg-white border-lion-gold shadow-elevation-card ring-2 ring-lion-gold/20 -translate-y-1"
                    : "bg-white/80 border-border hover:border-lion-gold/50 hover:bg-white shadow-sm"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-lion-gold flex items-center justify-center text-obsidian shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-obsidian">
                      {tier.label}
                    </div>
                    <h3 className="font-sans font-semibold text-xs text-obsidian mt-0.5">
                      {tier.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate font-sans leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60">
                  <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate">
                    {tier.impactBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Amount Selector Bar */}
        <div className="p-5 rounded-2xl bg-white border border-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-obsidian whitespace-nowrap">
              Or Choose Custom Amount:
            </span>
            <div className="relative flex-1 sm:w-56">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-serif text-slate font-bold">
                ₹
              </span>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter amount (min ₹100)"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/60"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[1000, 2000, 5000, 25000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setCustomAmount(amt.toString());
                  setSelectedTier(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  customAmount === amt.toString()
                    ? "bg-lion-gold text-obsidian border-lion-gold font-bold shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100 text-slate border-border"
                }`}
              >
                +₹{amt.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Payment Processing Hub: Dynamic UPI QR & Direct Bank Transfer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dynamic UPI QR (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-elevation-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-lion-gold-dark font-semibold">
                Instant UPI Transfer &bull; Zero Fees
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                Scan & Pay with Any UPI App
              </h3>
            </div>
            <span className="font-mono text-sm font-bold text-lion-gold-dark bg-lion-gold/15 px-3 py-1 rounded-full border border-lion-gold/30 self-start sm:self-auto">
              ₹{(activeAmount || 1500).toLocaleString("en-IN")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Dynamic QR Code Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-border text-center space-y-3">
              <div className="relative w-52 h-52 bg-white rounded-xl p-2 border border-border shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src={qrCodeUrl}
                  alt={`UPI QR Code for ₹${activeAmount || 1500}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] font-mono text-slate">
                GPay &bull; PhonePe &bull; Paytm &bull; BHIM &bull; Cred
              </p>
            </div>

            {/* UPI Details & Mobile Deep Link */}
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate tracking-wider">
                  Official UPI ID / VPA:
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-obsidian select-all">
                    50200119758811@hdfcbank
                  </span>
                  <button
                    onClick={() => handleCopy("50200119758811@hdfcbank", "upi")}
                    className="p-1.5 rounded-lg hover:bg-white text-slate hover:text-obsidian transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedField === "upi" ? (
                      <Check className="w-4 h-4 text-botanical-emerald" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate tracking-wider">
                  Beneficiary Name:
                </span>
                <div className="font-serif text-sm font-bold text-obsidian">
                  KIRAN SINGH FOUNDATION
                </div>
                <span className="text-[10px] font-mono text-slate">
                  Trust Registered Under Indian Trust Act 1882
                </span>
              </div>

              {/* Direct UPI Mobile Deep Link Button */}
              <a
                href={upiPayload}
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-lion-gold hover:bg-lion-gold-dark text-obsidian font-semibold transition-all shadow-sm text-sm"
              >
                <CreditCard className="w-4 h-4" />
                <span>Open in UPI Mobile App</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Bank Transfer / NEFT / RTGS (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-elevation-1 space-y-5">
          <div className="pb-3 border-b border-border">
            <span className="font-mono text-[10px] uppercase tracking-wider text-lion-gold-dark font-semibold">
              Net Banking &bull; NEFT / RTGS / IMPS
            </span>
            <h3 className="font-serif text-xl font-bold text-obsidian">
              Official HDFC Bank Account
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-border flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate uppercase block">Account Number</span>
                <span className="font-bold text-sm text-obsidian select-all">50200119758811</span>
              </div>
              <button
                onClick={() => handleCopy("50200119758811", "acc")}
                className="p-1.5 rounded-lg hover:bg-white text-slate hover:text-obsidian transition-colors"
                title="Copy Account Number"
              >
                {copiedField === "acc" ? (
                  <Check className="w-4 h-4 text-botanical-emerald" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-border flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate uppercase block">IFSC Code</span>
                <span className="font-bold text-sm text-obsidian select-all">HDFC0004664</span>
              </div>
              <button
                onClick={() => handleCopy("HDFC0004664", "ifsc")}
                className="p-1.5 rounded-lg hover:bg-white text-slate hover:text-obsidian transition-colors"
                title="Copy IFSC Code"
              >
                {copiedField === "ifsc" ? (
                  <Check className="w-4 h-4 text-botanical-emerald" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-border space-y-0.5">
              <span className="text-[10px] text-slate uppercase block">Bank & Branch</span>
              <span className="font-semibold text-obsidian font-sans">
                HDFC Bank Ltd., Naya Katra, Prayagraj, UP
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-border space-y-0.5">
              <span className="text-[10px] text-slate uppercase block">Account Type</span>
              <span className="font-semibold text-obsidian font-sans">
                Current Account / Trust Public Endowment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Instant Section 80G Tax Exemption Receipt Generator */}
      <div id="receipt-generator" className="p-6 sm:p-10 rounded-3xl bg-white border border-border shadow-elevation-1 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-botanical-emerald/15 text-botanical-emerald text-[10px] font-mono tracking-widest uppercase font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Step 2: Instant Provisional Tax Exemption Certificate</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian mt-2">
              Generate Your Section 80G Tax Receipt
            </h2>
            <p className="text-xs sm:text-sm text-slate mt-1 max-w-2xl font-sans">
              Already completed your contribution? Enter your transaction details below to instantly generate and download
              your official provisional 80G tax receipt for Income Tax Form 10BD compliance.
            </p>
          </div>

          <div className="text-xs font-mono text-slate text-left md:text-right">
            <div><strong className="text-obsidian">Statutory PAN:</strong> AAGTK3961N</div>
            <div><strong className="text-obsidian">Income Tax URN:</strong> AAGTK3961NE20261</div>
          </div>
        </div>

        {/* If receipt is generated, display the Printable Official Certificate */}
        {issuedReceipt ? (
          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-lion-gold shadow-elevation-card space-y-6 print:border-none print:shadow-none print:bg-white print:p-0">
              {/* Certificate Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border p-1 bg-white shadow-sm shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Kiran Singh Foundation Crest"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-lion-gold-dark tracking-widest font-semibold">
                      Trust registered under Indian Trust Act of 1882
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-obsidian">
                      Kiran Singh Foundation
                    </h3>
                    <p className="text-[11px] font-mono text-slate">
                      191/C, Tilak Nagar Allahpur Prayagraj 211006, UP &bull; PAN: {issuedReceipt.statutoryPan} &bull; URN: {issuedReceipt.statutoryUrn}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-botanical-emerald/15 text-botanical-emerald border border-botanical-emerald/30 font-semibold inline-block">
                    Official 80G Receipt
                  </span>
                  <div className="font-bold text-obsidian text-sm mt-1">{issuedReceipt.receiptNumber}</div>
                  <div className="text-slate text-[11px]">Date: {issuedReceipt.donationDate}</div>
                </div>
              </div>

              {/* Receipt Body Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-border space-y-2">
                  <span className="text-[10px] text-slate uppercase block font-semibold">Donor Details (As per CBDT)</span>
                  <div><strong className="text-obsidian">Legal Name:</strong> {issuedReceipt.donorName}</div>
                  <div><strong className="text-obsidian">Donor PAN:</strong> <span className="text-lion-gold-dark font-bold">{issuedReceipt.donorPan}</span></div>
                  <div><strong className="text-obsidian">Email:</strong> {issuedReceipt.donorEmail}</div>
                  <div><strong className="text-obsidian">Mobile:</strong> {issuedReceipt.donorPhone}</div>
                  <div><strong className="text-obsidian">Address:</strong> {issuedReceipt.donorAddress}</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border space-y-2">
                  <span className="text-[10px] text-slate uppercase block font-semibold">Contribution Audit Particulars</span>
                  <div><strong className="text-obsidian">Amount Contributed:</strong> <span className="text-sm font-bold text-obsidian">₹{issuedReceipt.amount.toLocaleString("en-IN")}</span></div>
                  <div><strong className="text-obsidian">Amount in Words:</strong> {issuedReceipt.amountInWords}</div>
                  <div><strong className="text-obsidian">Bank UTR / Transaction ID:</strong> {issuedReceipt.transactionId}</div>
                  <div><strong className="text-obsidian">Allocation Wing:</strong> {issuedReceipt.wingPreference}</div>
                  <div><strong className="text-obsidian">Assessment Year:</strong> {issuedReceipt.financialYear}</div>
                </div>
              </div>

              {/* Statutory Tax Exemption Declaration */}
              <div className="p-4 rounded-xl bg-white border border-border text-[11px] font-sans text-slate space-y-2">
                <p className="leading-relaxed">
                  <strong>Statutory Declaration:</strong> Donations to Kiran Singh Foundation are eligible for deduction under
                  <strong> Section 80G(5)(vi) of the Income Tax Act, 1961</strong> (URN: <span className="font-mono">{issuedReceipt.statutoryUrn}</span>).
                  This receipt will be synthesized into the foundation&apos;s annual filing of Form 10BD with the Income Tax Department,
                  enabling the donor to claim credit directly in their annual ITR (Income Tax Return).
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-border/60 font-mono text-[10px]">
                  <span>Authorized Signatory &bull; Board of Trustees, Kiran Singh Foundation</span>
                  <span>Registered Office: 191/C, Tilak Nagar Allahpur Prayagraj 211006</span>
                </div>
              </div>

              {/* Action Buttons: Print & New Receipt */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-obsidian hover:bg-slate-800 text-white font-semibold transition-all shadow-sm text-xs font-mono"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setIssuedReceipt(null)}
                  className="text-xs font-mono text-slate hover:text-obsidian hover:underline"
                >
                  &larr; Generate Another Receipt
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Intake Form for 80G Generation */
          <form onSubmit={handleGenerate80G} className="space-y-6">
            {error80G && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                {error80G}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Field 1: Donor Legal Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Full Legal Name (as per PAN) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
              </div>

              {/* Field 2: Donor PAN */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Donor PAN (10 Digits) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={10}
                  value={donorPan}
                  onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                  placeholder="e.g., ABCDE1234F"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-mono uppercase focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
                <span className="text-[10px] text-slate font-sans block">
                  Mandatory by Income Tax Department for Form 10BD filing.
                </span>
              </div>

              {/* Field 3: Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="rajesh@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
              </div>

              {/* Field 4: Mobile */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Mobile Number (+91) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
              </div>

              {/* Field 5: Postal Address */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Postal Address with PIN Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={donorAddress}
                  onChange={(e) => setDonorAddress(e.target.value)}
                  placeholder="Flat No, Street, City, State, PIN (Required for CBDT Form 10BD)"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
              </div>

              {/* Field 6: Transaction ID / UTR */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Bank Reference / UTR / UPI Ref ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="12-digit UPI reference or bank UTR"
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-mono focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                />
              </div>

              {/* Field 7: Operational Wing Allocation */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-obsidian">
                  Direct My Contribution Towards:
                </label>
                <select
                  value={wingPreference}
                  onChange={(e) => setWingPreference(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm font-sans focus:outline-none focus:border-lion-gold focus:ring-1 focus:ring-lion-gold bg-slate-50/50"
                >
                  <option value="Canine Welfare (34 Rescued Dogs)">Dog Welfare Wing (34 Rescued Dogs & 4 Shelters)</option>
                  <option value="Student Welfare (40 Sponsored Scholars)">Student Welfare Wing (40 Scholars & Research)</option>
                  <option value="Village Development (Rural Education)">Village Development Wing (Rural Tuition)</option>
                  <option value="Women Empowerment (Career Summits)">Women Empowerment Wing (Career Summits)</option>
                  <option value="General Operational Endowment">General Operational Endowment (Where Needed Most)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate">
                <ShieldCheck className="w-4 h-4 text-botanical-emerald shrink-0" />
                <span>Instant Verified Provisional Receipt Generated Upon Submission</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting80G}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-semibold transition-all shadow-sm text-sm disabled:opacity-50"
              >
                {isSubmitting80G ? (
                  <span>Generating Official Receipt...</span>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Generate 80G Tax Exemption Receipt</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 5. Transparency Accord & Donor FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Transparency Framework */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-lion-gold-dark">
            <Building className="w-6 h-6" />
            <h3 className="font-serif text-xl font-bold text-obsidian">
              100% Operational Transparency
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            The Kiran Singh Foundation operates under strict institutional bylaws registered under the Indian Trust Act of 1882.
            Unlike large intermediaries that lose 30–40% to administrative overhead, our operations are managed pro bono by
            the Directorate. Every rupee contributed directly supports the daily nourishment of 34 resident canines, critical veterinary
            trauma supplies, and educational tuition for our 40 sponsored scholars.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-border font-mono text-xs space-y-1">
            <div><strong className="text-obsidian">Registered Office:</strong> 191/C, Tilak Nagar Allahpur Prayagraj 211006</div>
            <div><strong className="text-obsidian">Direct Inquiries:</strong> kiransinghfoundationindia@gmail.com</div>
            <div><strong className="text-obsidian">WhatsApp Emergency Hotline:</strong> +91 9670970750</div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-lion-gold-dark">
            <HelpCircle className="w-6 h-6" />
            <h3 className="font-serif text-xl font-bold text-obsidian">
              Donation & Tax Exemption FAQs
            </h3>
          </div>
          <div className="space-y-3 text-xs font-sans text-slate">
            <div>
              <strong className="text-obsidian block mb-0.5">How does Section 80G tax deduction work?</strong>
              Contributions to Kiran Singh Foundation qualify for 50% tax exemption under Section 80G of the Income Tax Act.
              The deduction can be claimed in your annual ITR submission using the URN provided on your receipt.
            </div>
            <div>
              <strong className="text-obsidian block mb-0.5">Why is PAN card mandatory?</strong>
              Under Central Board of Direct Taxes (CBDT) notifications, NGOs must file Form 10BD with donor PAN details to allow
              taxpayers to view donations reflected in their AIS (Annual Information Statement) and Form 26AS.
            </div>
            <div>
              <strong className="text-obsidian block mb-0.5">Can corporate entities contribute under CSR?</strong>
              Yes. Kiran Singh Foundation holds valid Ministry of Corporate Affairs CSR Registration (<strong>CSR00110895</strong>)
              for Schedule VII eligible projects in education and animal welfare.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
