"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  STUDENT_WELFARE_OFFICE_BEARERS,
  OfficeBearer,
  UPES_ACADEMIC_PARTNERSHIP,
} from "@/lib/data/foundation-data";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  ShieldCheck,
  Camera,
  CheckCircle2,
} from "lucide-react";

interface OperationalHierarchyProps {
  className?: string;
}

export default function OperationalHierarchy({
  className = "",
}: OperationalHierarchyProps) {
  const [selectedBearer, setSelectedBearer] = useState<OfficeBearer | null>(null);
  const [activeTierFilter, setActiveTierFilter] = useState<number | "all" | "graduated" | "registrar">("all");

  const registrarBearer = STUDENT_WELFARE_OFFICE_BEARERS.find(
    (b) => b.category === "Registrar" || b.role.includes("Registrar")
  );
  const activeBearers = STUDENT_WELFARE_OFFICE_BEARERS.filter(
    (b) => !b.isGraduated && b.category !== "Registrar"
  );
  const graduatedBearers = STUDENT_WELFARE_OFFICE_BEARERS.filter((b) => b.isGraduated);

  const tier1Bearers = activeBearers.filter((b) => b.tier === 1);
  const tier2Bearers = activeBearers.filter((b) => b.tier === 2);
  const tier3Bearers = activeBearers.filter((b) => b.tier === 3);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedBearer) return;

      if (e.key === "Escape") {
        setSelectedBearer(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = STUDENT_WELFARE_OFFICE_BEARERS.findIndex(
          (b) => b.id === selectedBearer.id
        );
        const nextIndex = (currentIndex + 1) % STUDENT_WELFARE_OFFICE_BEARERS.length;
        setSelectedBearer(STUDENT_WELFARE_OFFICE_BEARERS[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = STUDENT_WELFARE_OFFICE_BEARERS.findIndex(
          (b) => b.id === selectedBearer.id
        );
        const prevIndex =
          (currentIndex - 1 + STUDENT_WELFARE_OFFICE_BEARERS.length) %
          STUDENT_WELFARE_OFFICE_BEARERS.length;
        setSelectedBearer(STUDENT_WELFARE_OFFICE_BEARERS[prevIndex]);
      }
    },
    [selectedBearer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const navigateBearer = (direction: "prev" | "next") => {
    if (!selectedBearer) return;
    const currentIndex = STUDENT_WELFARE_OFFICE_BEARERS.findIndex(
      (b) => b.id === selectedBearer.id
    );
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % STUDENT_WELFARE_OFFICE_BEARERS.length;
      setSelectedBearer(STUDENT_WELFARE_OFFICE_BEARERS[nextIndex]);
    } else {
      const prevIndex =
        (currentIndex - 1 + STUDENT_WELFARE_OFFICE_BEARERS.length) %
        STUDENT_WELFARE_OFFICE_BEARERS.length;
      setSelectedBearer(STUDENT_WELFARE_OFFICE_BEARERS[prevIndex]);
    }
  };

  return (
    <section
      id="operational-hierarchy"
      className={`space-y-12 scroll-mt-28 ${className}`}
      aria-labelledby="hierarchy-heading"
    >
      {/* Editorial Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-lion-gold-dark" />
          <span>Operational Wing A &bull; Student Welfare Administration</span>
        </div>
        <h3
          id="hierarchy-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-obsidian uppercase tracking-tight font-normal"
        >
          Operational Hierarchy &amp;{" "}
          <span className="italic text-lion-gold-dark font-light">Supervisory Corps</span>
        </h3>
        <p className="text-sm sm:text-base text-slate leading-relaxed font-sans max-w-2xl mx-auto">
          The field-proven supervisory structure governing our 40 sponsored scholars. Every officer directs specific soft-skills incubation labs, corporate internship placements, and peer-to-peer welfare accountability.
        </p>

        {/* Tier Filter Pills */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTierFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              activeTierFilter === "all"
                ? "bg-obsidian text-white shadow-sm font-semibold"
                : "bg-white border border-border text-slate hover:text-obsidian hover:border-obsidian/40"
            }`}
          >
            All Active Directorate (Registrar + 4 HSM Heads + 3 Leaders)
          </button>
          <button
            type="button"
            onClick={() => setActiveTierFilter("registrar")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              activeTierFilter === "registrar"
                ? "bg-emerald-800 text-white shadow-sm font-semibold"
                : "bg-emerald-50 border border-emerald-300 text-emerald-900 hover:bg-emerald-100"
            }`}
          >
            Office of the Registrar (Ms. Shiksha Jaiswal)
          </button>
          <button
            type="button"
            onClick={() => setActiveTierFilter(1)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              activeTierFilter === 1
                ? "bg-lion-gold-dark text-white shadow-sm font-semibold"
                : "bg-white border border-lion-gold/30 text-lion-gold-dark hover:bg-lion-gold/10"
            }`}
          >
            Tier 1: 4 HSM Heads (Vaishnavi, Prateeksha, Shubhangi, Vedant)
          </button>
          <button
            type="button"
            onClick={() => setActiveTierFilter(3)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              activeTierFilter === 3
                ? "bg-slate-700 text-white shadow-sm font-semibold"
                : "bg-white border border-border text-slate hover:text-obsidian hover:border-slate/40"
            }`}
          >
            Tier 3: Active Team Leaders (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTierFilter("graduated")}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-[0.98] ${
              activeTierFilter === "graduated"
                ? "bg-amber-800 text-white shadow-sm font-semibold"
                : "bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100"
            }`}
          >
            Graduated Summer Leadership ({graduatedBearers.length} Alumni)
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* OFFICE OF THE REGISTRAR: WING EXECUTIVE DIRECTORATE             */}
      {/* ============================================================== */}
      {registrarBearer && (activeTierFilter === "all" || activeTierFilter === "registrar") && (
        <div className="space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-emerald-600/30 pb-3">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-700 ring-4 ring-emerald-500/20" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                  Office of the Registrar &bull; KSF (Student Welfare) Wing
                </h4>
                <p className="text-xs text-emerald-800 font-mono font-semibold">
                  Permanent Executive Administration &bull; Academic Accreditations &bull; Admissions &bull; UPES MoU Liaison
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[10px] font-mono text-emerald-800 uppercase tracking-wider font-semibold self-start sm:self-auto">
              Statutory Registry &bull; Decreed Appointment
            </span>
          </div>

          {/* Registrar Showcase Card */}
          <div className="bg-gradient-to-r from-stone-50 via-emerald-50/30 to-stone-50 rounded-3xl p-2 sm:p-3 border border-emerald-600/30 shadow-elevation-1">
            <div className="rounded-2xl bg-white p-5 sm:p-7 md:p-8 border border-stone-200/90 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Photo Column */}
              <div
                onClick={() => setSelectedBearer(registrarBearer)}
                className="lg:col-span-5 group cursor-pointer relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-border shadow-md active:scale-[0.99] transition-all"
              >
                {registrarBearer.photoUrl && (
                  <Image
                    src={registrarBearer.photoUrl}
                    alt={`${registrarBearer.name} - ${registrarBearer.moment}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-[68%_35%] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-900/85 backdrop-blur-md border border-emerald-400/40 text-[10px] font-mono tracking-widest text-emerald-200 uppercase font-semibold">
                    OFFICE OF THE REGISTRAR
                  </span>
                </div>
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-[10px] font-mono font-bold text-obsidian tracking-tight truncate max-w-[85%] shadow-sm">
                    {registrarBearer.moment}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-obsidian/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Editorial / Portfolio Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono uppercase tracking-wider font-semibold">
                    <Award className="w-3 h-3 text-emerald-700" />
                    <span>Permanent Executive Office &bull; Sanctioned 40 Seats</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-obsidian tracking-tight">
                    {registrarBearer.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-emerald-800 font-semibold">
                    {registrarBearer.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
                  {registrarBearer.description}
                </p>

                {/* Statutory Mandates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] font-mono text-obsidian space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-slate block font-semibold">
                      Admissions &amp; Registry
                    </span>
                    <span className="font-medium text-obsidian">Sanctioned 40 Scholars Cohort</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] font-mono text-obsidian space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-slate block font-semibold">
                      Academic Accord Liaison
                    </span>
                    <span className="font-medium text-obsidian">UPES Dehradun School for Life MoU</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] font-mono text-obsidian space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-slate block font-semibold">
                      Monograph Verification
                    </span>
                    <span className="font-medium text-obsidian">Plagiarism Audits &amp; PPT Defenses</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] font-mono text-obsidian space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-slate block font-semibold">
                      Honors &amp; Endorsements
                    </span>
                    <span className="font-medium text-obsidian">Internship Certificates &amp; Shields</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedBearer(registrarBearer)}
                    className="px-4 py-2 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 transition-colors inline-flex items-center gap-2 active:scale-[0.98]"
                  >
                    <span>View Archival Podium Photo</span>
                    <Maximize2 className="w-3.5 h-3.5 text-lion-gold" />
                  </button>
                  <span className="text-[11px] font-mono text-slate">
                    Speaking at Foundation Heraldic Podium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TIER 1: ACTIVE HEAD SUPERINTENDENT MANAGERS (4 HSM HEADS)     */}
      {/* ============================================================== */}
      {(activeTierFilter === "all" || activeTierFilter === 1) && (
        <div className="space-y-6">
          {/* Tier Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-lion-gold/30 pb-3">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-lion-gold-dark ring-4 ring-lion-gold/20" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                  Tier 1: Head Superintendent Managers (HSMs)
                </h4>
                <p className="text-xs text-lion-gold-dark font-mono font-semibold">
                  Active Supervisory Heads &bull; Team I (Vaishnavi) &bull; Team II (Prateeksha) &bull; Team III (Shubhangi) &bull; Team IV (Vedant)
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-[10px] font-mono text-lion-gold-dark uppercase tracking-wider font-semibold self-start sm:self-auto">
              4 Appointed HSM Heads &bull; Decreed 05/11/2026
            </span>
          </div>

          {/* Tier 1 Grid: 4 Executive HSM Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {tier1Bearers.map((bearer) => (
              <OfficerCard
                key={bearer.id}
                bearer={bearer}
                tierAccent="gold"
                onSelect={() => setSelectedBearer(bearer)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TIER 2: DEPUTY HEAD SUPERINTENDENT MANAGERS (IF ANY ACTIVE)   */}
      {/* ============================================================== */}
      {(activeTierFilter === "all" || activeTierFilter === 2) && tier2Bearers.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-botanical-emerald/30 pb-3">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-botanical-emerald ring-4 ring-botanical-emerald/20" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                  Tier 2: Deputy Head Superintendent Managers
                </h4>
                <p className="text-xs text-botanical-emerald font-mono font-semibold">
                  Field Operations &bull; Academic Presentation &bull; Corporate Internship Tracking
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-[10px] font-mono text-botanical-emerald uppercase tracking-wider font-semibold self-start sm:self-auto">
              {tier2Bearers.length} Officer &bull; Field Operations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier2Bearers.map((bearer) => (
              <OfficerCard
                key={bearer.id}
                bearer={bearer}
                tierAccent="emerald"
                onSelect={() => setSelectedBearer(bearer)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TIER 3: TEAM LEADERS                                           */}
      {/* ============================================================== */}
      {(activeTierFilter === "all" || activeTierFilter === 3) && (
        <div className="space-y-6 pt-4">
          {/* Tier Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-300 pb-3">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-obsidian ring-4 ring-slate-200" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                  Tier 3: Team Leaders
                </h4>
                <p className="text-xs text-slate font-mono font-semibold">
                  Cohort Leadership &bull; Cultural Recitals &bull; Peer Mentorship &bull; Mutual-Aid
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-border text-[10px] font-mono text-slate uppercase tracking-wider font-semibold self-start sm:self-auto">
              {tier3Bearers.length} Leaders &bull; Cohort Coordination
            </span>
          </div>

          {/* Tier 3 Grid: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier3Bearers.map((bearer) => (
              <OfficerCard
                key={bearer.id}
                bearer={bearer}
                tierAccent="obsidian"
                onSelect={() => setSelectedBearer(bearer)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* GRADUATED SUMMER LEADERSHIP ARCHIVE (4 CONCLUDED ALUMNI)      */}
      {/* ============================================================== */}
      {(activeTierFilter === "all" || activeTierFilter === "graduated") && (
        <div className="space-y-6 pt-6 border-t-2 border-dashed border-border/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-amber-300 pb-3">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-600 ring-4 ring-amber-200" />
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                  Graduated Summer Batch Leadership (Alumni)
                </h4>
                <p className="text-xs text-amber-800 font-mono font-semibold">
                  Former Summer Internship Directorate &bull; Completed Tenure &bull; Awarded Certificates &bull; Now Graduated
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[10px] font-mono text-amber-900 uppercase tracking-wider font-semibold self-start sm:self-auto">
              4 Concluded Alumni Officers
            </span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs font-sans text-amber-900 leading-relaxed">
            <strong className="font-semibold">Notice of Cohort Graduation:</strong> The previous student officers of the 2026 Summer Internship Batch (Unnaati Roy, Shiksha Jaiswal, Navyanshi Dwivedi, and Rohini Agrawal) have successfully concluded their internship tenure, defended their research monographs, and received their foundation honors. They have now graduated from the active roll to make way for the newly appointed 4 HSM Commanders.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graduatedBearers.map((bearer) => (
              <OfficerCard
                key={bearer.id}
                bearer={bearer}
                tierAccent="obsidian"
                onSelect={() => setSelectedBearer(bearer)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* LIGHTBOX MODAL: FULL-RESOLUTION DOCUMENTARY IMAGE INSPECTOR */}
      {/* ============================================================== */}
      {selectedBearer && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-obsidian/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedBearer(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-divider flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-porcelain">
              <div className="flex items-center space-x-3">
                <span
                  className={`px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider ${
                    selectedBearer.tier === 0
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold"
                      : selectedBearer.tier === 1
                      ? "bg-lion-gold/20 text-lion-gold-dark border border-lion-gold/30"
                      : selectedBearer.tier === 2
                      ? "bg-botanical-emerald/20 text-botanical-emerald border border-botanical-emerald/30"
                      : "bg-obsidian/10 text-obsidian border border-border"
                  }`}
                >
                  {selectedBearer.tierTitle}
                </span>
                <span className="text-xs font-mono text-slate hidden sm:inline">
                  Archival Verification Dossier
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBearer(null)}
                className="w-9 h-9 rounded-full bg-white border border-border hover:bg-slate-100 flex items-center justify-center text-obsidian transition-colors active:scale-[0.96]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Scrollable Content with Full Photograph */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Full Photographic Viewport */}
              {selectedBearer.photoUrl ? (
                <div className="relative w-full aspect-[3/2] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-slate-900 shadow-inner group">
                  <Image
                    src={selectedBearer.photoUrl}
                    alt={`${selectedBearer.name} - ${selectedBearer.moment}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto sm:max-w-md bg-obsidian/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-white shadow-lg">
                    <span className="text-[10px] font-mono uppercase text-lion-gold block font-semibold">
                      Ceremonial Moment Verified
                    </span>
                    <p className="text-xs sm:text-sm font-sans font-medium text-white/95">
                      {selectedBearer.moment}
                    </p>
                  </div>
                </div>
              ) : (
                /* Editorial Monogram Showcase for Pending Photo */
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-dashed border-lion-gold/40 bg-gradient-to-br from-lion-gold/10 via-porcelain to-white flex flex-col items-center justify-center p-8 text-center shadow-inner">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-lion-gold/50 shadow-elevation-card flex items-center justify-center font-serif text-3xl font-bold text-lion-gold-dark mb-4">
                    VM
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-obsidian">
                    {selectedBearer.name}
                  </h4>
                  <p className="font-mono text-xs text-lion-gold-dark font-semibold mt-1">
                    {selectedBearer.role} &bull; {selectedBearer.tierTitle}
                  </p>
                  <div className="mt-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-border text-[11px] font-mono text-slate">
                    <Camera className="w-3.5 h-3.5 text-lion-gold-dark" />
                    <span>Configured with editorial monogram &bull; Ready for field photo upload</span>
                  </div>
                </div>
              )}

              {/* Officer Details & Narrative */}
              <div className="space-y-4 pt-2 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4
                      id="lightbox-title"
                      className="font-serif text-2xl sm:text-3xl font-bold text-obsidian"
                    >
                      {selectedBearer.name}
                    </h4>
                    <p className="text-sm font-mono text-lion-gold-dark font-semibold mt-0.5">
                      {selectedBearer.role} &bull; {selectedBearer.wing}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-xs font-mono font-semibold self-start sm:self-auto">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active 40 Scholars Cohort</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-porcelain border border-border space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-obsidian font-semibold">
                    <Award className="w-4 h-4 text-lion-gold-dark shrink-0" />
                    <span>Supervisory Portfolio: {selectedBearer.badge}</span>
                  </div>
                  <p className="text-sm text-slate leading-relaxed font-sans">
                    {selectedBearer.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-porcelain border-t border-border flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => navigateBearer("prev")}
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-border text-xs font-mono font-semibold text-obsidian hover:bg-slate-100 transition-colors active:scale-[0.97] min-h-[40px]"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>Prev<span className="hidden sm:inline">ious Officer</span></span>
              </button>
              <span className="text-[11px] font-mono text-slate hidden sm:inline">
                Use &larr; &rarr; arrow keys to navigate &bull; Esc to close
              </span>
              <button
                type="button"
                onClick={() => navigateBearer("next")}
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-border text-xs font-mono font-semibold text-obsidian hover:bg-slate-100 transition-colors active:scale-[0.97] min-h-[40px]"
              >
                <span>Next<span className="hidden sm:inline"> Officer</span></span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// =====================================================================
// INDIVIDUAL OFFICER CARD WITH DOUBLE-BEZEL & HIGH VISIBILITY PHOTO
// =====================================================================
interface OfficerCardProps {
  bearer: OfficeBearer;
  tierAccent: "gold" | "emerald" | "obsidian";
  onSelect: () => void;
}

function OfficerCard({ bearer, tierAccent, onSelect }: OfficerCardProps) {
  const accentClasses = {
    gold: {
      outerRing: "hover:border-lion-gold/60 hover:shadow-gold-glow",
      badge: "bg-lion-gold/10 border-lion-gold/30 text-lion-gold-dark",
      dot: "bg-lion-gold-dark",
      textAccent: "text-lion-gold-dark",
    },
    emerald: {
      outerRing: "hover:border-botanical-emerald/60",
      badge: "bg-botanical-emerald/10 border-botanical-emerald/30 text-botanical-emerald",
      dot: "bg-botanical-emerald",
      textAccent: "text-botanical-emerald",
    },
    obsidian: {
      outerRing: "hover:border-obsidian/40",
      badge: "bg-slate-100 border-border text-slate",
      dot: "bg-obsidian",
      textAccent: "text-obsidian",
    },
  }[tierAccent];

  return (
    <div
      onClick={onSelect}
      className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-white border border-border shadow-elevation-1 hover:shadow-elevation-card transition-all duration-300 flex flex-col justify-between active:scale-[0.98] min-w-0 ${accentClasses.outerRing}`}
    >
      <div className="space-y-3 sm:space-y-3.5 min-w-0">
        {/* ============================================================== */}
        {/* EXPANSIVE ACTION PHOTOGRAPHY (CRITICAL REQUIREMENT)           */}
        {/* Visible, high-resolution 16:10 landscape viewport (not 48px circle!) */}
        {/* ============================================================== */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-border shadow-inner">
          {bearer.photoUrl ? (
            <>
              <Image
                src={bearer.photoUrl}
                alt={`${bearer.name} - ${bearer.moment}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover ${
                  bearer.photoPosition || "object-center"
                } group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
              />
              {/* Subtle gradient vignette for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />

              {/* Action Moment Pill on Photo */}
              <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-[10px] font-mono font-bold text-obsidian tracking-tight truncate max-w-[85%] shadow-sm">
                  {bearer.moment}
                </span>
                <span className="w-7 h-7 rounded-full bg-obsidian/75 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </>
          ) : (
            /* Editorial Monogram Card for Varnika Mishra */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-white to-lion-gold/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-lion-gold/40 shadow-sm flex items-center justify-center font-serif text-2xl font-bold text-lion-gold-dark mb-2">
                VM
              </div>
              <span className="text-[10px] font-mono text-lion-gold-dark font-bold uppercase tracking-wider">
                Editorial Monogram
              </span>
              <span className="text-[10px] font-mono text-slate mt-0.5">
                Ready for Photo Upload
              </span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="px-1.5 space-y-2 min-w-0">
          {/* Eyebrow / Role Tag */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold truncate ${accentClasses.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accentClasses.dot}`} />
              <span className="truncate">{bearer.role}</span>
            </span>
            <span className="text-[10px] font-mono text-slate shrink-0">Tier {bearer.tier}</span>
          </div>

          {/* Child Full Name */}
          <h4 className="font-serif text-lg sm:text-2xl font-bold text-obsidian tracking-tight group-hover:text-lion-gold-dark transition-colors break-words">
            {bearer.name}
          </h4>

          {/* Verified Moment Subtitle */}
          <p className="text-xs text-slate-muted font-sans line-clamp-2 leading-relaxed break-words">
            {bearer.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Tactile Action Button */}
      <div className="mt-4 pt-3 border-t border-border px-1.5 flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-mono text-slate">
        <span className="truncate max-w-[65%] font-medium text-slate">
          {bearer.badge}
        </span>
        <span className={`font-semibold group-hover:translate-x-0.5 transition-transform shrink-0 ${accentClasses.textAccent}`}>
          View Photo &rarr;
        </span>
      </div>
    </div>
  );
}
