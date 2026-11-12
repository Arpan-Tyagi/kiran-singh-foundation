"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES,
  ExpenseLineItem,
} from "@/lib/data/foundation-data";
import {
  FileText,
  CheckCircle2,
  Receipt,
  Building,
  Award,
  Users,
  Volume2,
  Sparkles,
  ExternalLink,
  ZoomIn,
  X,
  Share2,
  Printer,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function EventExpenseReport() {
  const expenseData = WINTER_INTERNSHIP_2026_27_SANCTIONED_EXPENSES;
  const [activeTab, setActiveTab] = useState<"summary" | "ledger" | "scans">("summary");
  const [selectedScan, setSelectedScan] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "hospitality":
        return <Building className="w-4 h-4 text-lion-gold-dark" />;
      case "awards_printing":
        return <Award className="w-4 h-4 text-botanical-emerald" />;
      case "stipends":
        return <Users className="w-4 h-4 text-lion-gold-dark" />;
      case "av_production":
        return <Volume2 className="w-4 h-4 text-obsidian" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate" />;
    }
  };

  const shareText = encodeURIComponent(
    `Official Sanctioned Expense Report: 2nd Winter Internship Program (2026-27 Session) — Total Sanction: ₹1,11,600 approved by Secretary Shri Anuj Kumar Singh on 11/11/26. Kiran Singh Foundation.`
  );

  return (
    <section id="expense-report" className="space-y-8 scroll-mt-28">
      {/* Section Header */}
      <div className="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-lion-gold-dark" />
            <span>Audited Statutory Sanction &bull; Date: 11/11/26</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-obsidian tracking-tight">
            Sanctioned Financial Budget &amp; Expenditure Ledger
          </h2>
          <p className="text-xs sm:text-sm text-slate font-sans mt-1 max-w-2xl leading-relaxed">
            Itemized institutional expenditure sanctioned and signed by Secretary{" "}
            <strong className="text-obsidian font-semibold">Shri Anuj Kumar Singh</strong> on official
            Foundation Order Forms for the 2nd Winter Internship Program and Closing Ceremony.
          </p>
        </div>

        {/* Action Controls */}
        <div className="shrink-0 flex items-center gap-2 font-mono text-xs">
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white border border-border text-slate hover:text-obsidian hover:border-slate/40 transition-colors shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-lion-gold-dark" />
            <span>Share Audit</span>
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white border border-border text-slate hover:text-obsidian hover:border-slate/40 transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Double-Bezel Architectural Container */}
      <div className="p-2 sm:p-3 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-elevation-1">
        <div className="rounded-[calc(2rem-0.625rem)] bg-white p-5 sm:p-8 space-y-8">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* 1. Grand Total */}
            <div className="p-4 sm:p-5 rounded-2xl bg-lion-gold/5 border border-lion-gold/30 space-y-1 relative overflow-hidden group">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-lion-gold-dark font-semibold">
                <span>Grand Total Sanctioned</span>
                <Receipt className="w-4 h-4 text-lion-gold-dark" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                ₹1,11,600
              </div>
              <p className="text-[10px] font-mono text-slate">
                Page 1 (₹91,900) + Page 2 (₹19,700)
              </p>
            </div>

            {/* 2. Banquet & Hospitality */}
            <div className="p-4 sm:p-5 rounded-2xl bg-porcelain border border-border space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate font-semibold">
                <span>Banquet &amp; Venue</span>
                <Building className="w-4 h-4 text-lion-gold-dark" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                ₹64,000
              </div>
              <p className="text-[10px] font-mono text-slate">
                80 Dignitaries &amp; Guests @ ₹800
              </p>
            </div>

            {/* 3. Awards & Mementos */}
            <div className="p-4 sm:p-5 rounded-2xl bg-porcelain border border-border space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-botanical-emerald font-semibold">
                <span>Awards &amp; Citations</span>
                <Award className="w-4 h-4 text-botanical-emerald" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                ₹15,900
              </div>
              <p className="text-[10px] font-mono text-slate">
                6 Trophies + 30 Mementos + 100 Certs
              </p>
            </div>

            {/* 4. Scholar Stipends */}
            <div className="p-4 sm:p-5 rounded-2xl bg-porcelain border border-border space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-obsidian font-semibold">
                <span>Scholar Stipends</span>
                <Users className="w-4 h-4 text-obsidian" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                ₹12,200
              </div>
              <p className="text-[10px] font-mono text-slate">
                30 Cohort Scholars + 4 HSMs &amp; Leadership
              </p>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center justify-between border-b border-border pb-3 flex-wrap gap-2">
            <div className="inline-flex p-1 rounded-full bg-slate-100 border border-border text-xs font-mono font-medium">
              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeTab === "summary"
                    ? "bg-white text-obsidian font-semibold shadow-sm"
                    : "text-slate hover:text-obsidian"
                }`}
              >
                Category Overview
              </button>
              <button
                onClick={() => setActiveTab("ledger")}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                  activeTab === "ledger"
                    ? "bg-white text-obsidian font-semibold shadow-sm"
                    : "text-slate hover:text-obsidian"
                }`}
              >
                Complete Audit Ledger ({expenseData.items.length} Items)
              </button>
              <button
                onClick={() => setActiveTab("scans")}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 flex items-center space-x-1.5 ${
                  activeTab === "scans"
                    ? "bg-white text-obsidian font-semibold shadow-sm"
                    : "text-slate hover:text-obsidian"
                }`}
              >
                <span>Scanned Order Forms (2 Pages)</span>
                <span className="w-2 h-2 rounded-full bg-botanical-emerald inline-block" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate flex items-center space-x-1.5">
              <span>Signatory:</span>
              <strong className="text-obsidian font-medium">
                {expenseData.signatory} ({expenseData.signatoryDesignation})
              </strong>
            </div>
          </div>

          {/* TAB 1: CATEGORY OVERVIEW */}
          {activeTab === "summary" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expenseData.categories.map((cat) => (
                  <div
                    key={cat.category}
                    className="p-5 rounded-2xl bg-porcelain border border-border hover:border-lion-gold/40 transition-all duration-300 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shadow-2xs">
                          {getCategoryIcon(cat.category)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-obsidian">{cat.categoryLabel}</h4>
                          <span className="text-[10px] font-mono text-slate">
                            {cat.itemCount} Sanctioned {cat.itemCount === 1 ? "Item" : "Items"}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-lg font-bold text-obsidian">
                          ₹{cat.totalAmount.toLocaleString("en-IN")}
                        </span>
                        <span className="block text-[10px] font-mono text-lion-gold-dark font-medium">
                          {cat.percentageOfBudget.toFixed(1)}% of Budget
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200/70 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-lion-gold-dark h-1.5 rounded-full"
                        style={{ width: `${Math.min(100, Math.max(8, cat.percentageOfBudget))}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate font-sans leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Statutory Note Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-slate">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-botanical-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-obsidian block">
                      Institutional Statutory Compliance &amp; Order Verification
                    </span>
                    <span>
                      Order Form executed under registered entity{" "}
                      <strong className="text-obsidian font-mono font-medium">M/s Kiran Singh Foundation</strong>{" "}
                      (&ldquo;A journey from Struggle to Enlightenment&rdquo;). Registered under Indian Trust Act 1882.
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("scans")}
                  className="shrink-0 px-4 py-2 rounded-full bg-obsidian text-white text-xs font-mono font-medium hover:bg-obsidian/90 transition-all flex items-center space-x-1.5"
                >
                  <span>Inspect Scans</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: AUDIT LEDGER TABLE */}
          {activeTab === "ledger" && (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-2xs">
                <table className="w-full text-left border-collapse text-xs font-sans">
                  <thead>
                    <tr className="bg-porcelain border-b border-border text-[11px] font-mono uppercase tracking-wider text-slate">
                      <th className="py-3 px-4 font-semibold">Ref #</th>
                      <th className="py-3 px-4 font-semibold">Article / Description</th>
                      <th className="py-3 px-4 font-semibold">Classification</th>
                      <th className="py-3 px-4 font-semibold">Quantity / Headcount</th>
                      <th className="py-3 px-4 font-semibold">Approved Rate</th>
                      <th className="py-3 px-4 font-semibold text-right">Sanctioned (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {/* Page 1 Header */}
                    <tr className="bg-lion-gold/5 font-mono text-[11px] font-bold text-lion-gold-dark">
                      <td colSpan={6} className="py-2.5 px-4">
                        SECTION A: ORDER FORM PAGE 1 &bull; CEREMONY, VENUE, AWARDS &amp; AV PRODUCTION
                      </td>
                    </tr>
                    {expenseData.items
                      .filter((i) => i.page === 1)
                      .map((item, index) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono text-slate">P1-{index + 1}</td>
                          <td className="py-3 px-4 font-medium text-obsidian">
                            {item.articleName}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate font-mono text-[10px]">
                              {item.categoryLabel}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate">
                            {item.quantityOrHeadcount || "—"}
                          </td>
                          <td className="py-3 px-4 font-mono text-slate">{item.unitRate || "—"}</td>
                          <td className="py-3 px-4 font-mono font-semibold text-obsidian text-right">
                            ₹{item.amount.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    {/* Page 1 Subtotal Row */}
                    <tr className="bg-slate-50 font-mono text-xs font-bold text-obsidian border-t-2 border-border">
                      <td colSpan={5} className="py-2.5 px-4 text-right">
                        PAGE 1 SANCTIONED SUBTOTAL:
                      </td>
                      <td className="py-2.5 px-4 text-right text-lion-gold-dark">
                        ₹{expenseData.page1Subtotal.toLocaleString("en-IN")}
                      </td>
                    </tr>

                    {/* Page 2 Header */}
                    <tr className="bg-botanical-emerald/5 font-mono text-[11px] font-bold text-botanical-emerald">
                      <td colSpan={6} className="py-2.5 px-4">
                        SECTION B: ORDER FORM PAGE 2 &bull; 30-STUDENT STIPENDS, PROTOCOLS &amp; CONTINGENCIES
                      </td>
                    </tr>
                    {expenseData.items
                      .filter((i) => i.page === 2)
                      .map((item, index) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono text-slate">P2-{index + 1}</td>
                          <td className="py-3 px-4 font-medium text-obsidian">
                            {item.articleName}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate font-mono text-[10px]">
                              {item.categoryLabel}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate">
                            {item.quantityOrHeadcount || "—"}
                          </td>
                          <td className="py-3 px-4 font-mono text-slate">{item.unitRate || "—"}</td>
                          <td className="py-3 px-4 font-mono font-semibold text-obsidian text-right">
                            ₹{item.amount.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    {/* Page 2 Subtotal Row */}
                    <tr className="bg-slate-50 font-mono text-xs font-bold text-obsidian border-t-2 border-border">
                      <td colSpan={5} className="py-2.5 px-4 text-right">
                        PAGE 2 SANCTIONED SUBTOTAL:
                      </td>
                      <td className="py-2.5 px-4 text-right text-botanical-emerald">
                        ₹{expenseData.page2Subtotal.toLocaleString("en-IN")}
                      </td>
                    </tr>

                    {/* Grand Total Row */}
                    <tr className="bg-obsidian text-white font-mono text-sm font-bold">
                      <td colSpan={5} className="py-3 px-4 text-right">
                        GRAND TOTAL SANCTIONED EXPENDITURE:
                      </td>
                      <td className="py-3 px-4 text-right text-lion-gold">
                        ₹{expenseData.totalSanctionedAmount.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SCANNED ORDER FORMS AUDIT */}
          {activeTab === "scans" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Order Form Page 1 */}
                <div className="bg-porcelain border border-border rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-2 text-[11px] font-mono">
                    <span className="font-semibold text-obsidian">ORDER FORM — PAGE 1</span>
                    <span className="text-lion-gold-dark font-bold">Subtotal: ₹91,900</span>
                  </div>
                  <div
                    onClick={() => setSelectedScan(expenseData.scannedDocuments.page1Url)}
                    className="relative w-full aspect-[1/1.4] rounded-xl overflow-hidden border border-border/80 bg-white shadow-inner cursor-zoom-in group"
                  >
                    <Image
                      src={expenseData.scannedDocuments.page1Url}
                      alt={expenseData.scannedDocuments.page1Alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-obsidian font-mono text-xs flex items-center space-x-1.5 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate text-center">
                    Items: Certificates (₹450), Letters (₹450), Hotel (₹64,000), Trophies (₹9,000), Mementos (₹6,000), Banners (₹5,000), Sound (₹7,000).
                  </p>
                </div>

                {/* Order Form Page 2 */}
                <div className="bg-porcelain border border-border rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-2 text-[11px] font-mono">
                    <span className="font-semibold text-obsidian">ORDER FORM — PAGE 2</span>
                    <span className="text-botanical-emerald font-bold">Subtotal: ₹19,700</span>
                  </div>
                  <div
                    onClick={() => setSelectedScan(expenseData.scannedDocuments.page2Url)}
                    className="relative w-full aspect-[1/1.4] rounded-xl overflow-hidden border border-border/80 bg-white shadow-inner cursor-zoom-in group"
                  >
                    <Image
                      src={expenseData.scannedDocuments.page2Url}
                      alt={expenseData.scannedDocuments.page2Alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3 py-1.5 rounded-full bg-white/95 text-obsidian font-mono text-xs flex items-center space-x-1.5 shadow-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-slate text-center">
                    Items: 30 Scholars Stipend (₹12,200), Bouquets (₹1,500), Garland (₹1,000), Miscellaneous (₹5,000). Total: ₹1,11,600.
                  </p>
                </div>
              </div>

              {/* Signatory Seal Footer Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark font-bold shrink-0">
                    K
                  </div>
                  <div>
                    <span className="text-obsidian font-bold block">
                      Authorized Signatory: {expenseData.signatory}
                    </span>
                    <span className="text-slate block text-[11px]">
                      Secretary, Kiran Singh Foundation &bull; Certified Date: {expenseData.sanctionDateFormatted}
                    </span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-slate">
                  <span className="block font-medium text-obsidian">Lakhani Vardaan Stationery Pad</span>
                  <span>Grand Total Sanction: ₹1,11,600 (INR)</span>
                </div>
              </div>
            </div>
          )}

          {/* Lightbox Modal for Full Resolution Inspection */}
          {selectedScan && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedScan(null)}
            >
              <div
                className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-3xl p-4 overflow-hidden flex flex-col space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="font-mono text-xs text-obsidian font-semibold">
                    Institutional Document Inspection &bull; Official Order Form
                  </span>
                  <button
                    onClick={() => setSelectedScan(null)}
                    className="p-1 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-slate" />
                  </button>
                </div>
                <div className="relative w-full h-[75vh] bg-slate-50 rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={selectedScan}
                    alt="High-resolution scanned document"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate">
                  <span>Signatory: Shri Anuj Kumar Singh (Secretary) &bull; 11/11/26</span>
                  <a
                    href={selectedScan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lion-gold-dark hover:underline flex items-center space-x-1"
                  >
                    <span>Open Raw Asset</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
