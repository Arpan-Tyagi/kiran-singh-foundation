"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  OFFICIAL_COMMITTEES_2026,
  OFFICIAL_TEAM_POSTERS_2026,
} from "@/lib/data/foundation-data";
import {
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  ZoomIn,
  Download,
  X,
  ExternalLink,
  ChevronRight,
  Palette,
  Camera,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

interface OfficialHierarchyPostersViewerProps {
  className?: string;
  initialTab?: "committee" | "team-1" | "team-2" | "team-3" | "team-4";
}

export default function OfficialHierarchyPostersViewer({
  className = "",
  initialTab = "committee",
}: OfficialHierarchyPostersViewerProps) {
  const committee = OFFICIAL_COMMITTEES_2026[0];
  const teamPosters = OFFICIAL_TEAM_POSTERS_2026;

  const [activeTab, setActiveTab] = useState<
    "committee" | "team-1" | "team-2" | "team-3" | "team-4"
  >(initialTab);
  const [lightboxPosterUrl, setLightboxPosterUrl] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxPosterUrl(null);
      }
    };
    if (lightboxPosterUrl) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxPosterUrl]);

  const activePoster =
    activeTab === "committee"
      ? {
          title: "Designing Committee (DC)",
          subtitle: "Creative Directorate & Visual Communications",
          commanderName: committee.headName,
          commanderRole: committee.headRole,
          moment: committee.headStageMoment,
          scholars: committee.members.map((m) => `${m.name} (${m.role})`),
          posterUrl: committee.posterUrl,
          mandate: committee.mandate,
          tag: "CREATIVE COMMITTEE",
        }
      : activeTab === "team-1"
      ? {
          title: teamPosters[0].teamTitle,
          subtitle: "Official Operational Wing A &bull; Deployed Team I",
          commanderName: teamPosters[0].commanderName,
          commanderRole: teamPosters[0].commanderRole,
          moment: teamPosters[0].convocationMoment,
          scholars: teamPosters[0].deployedScholars,
          posterUrl: teamPosters[0].posterUrl,
          mandate:
            "Mobilized under Senior Scale HSM Vaishnavi to conduct legislative analysis, public communication labs, and educational policy defenses.",
          tag: "TEAM I COMMAND",
        }
      : activeTab === "team-2"
      ? {
          title: teamPosters[1].teamTitle,
          subtitle: "Official Operational Wing A &bull; Deployed Team II",
          commanderName: teamPosters[1].commanderName,
          commanderRole: teamPosters[1].commanderRole,
          moment: teamPosters[1].convocationMoment,
          scholars: teamPosters[1].deployedScholars,
          posterUrl: teamPosters[1].posterUrl,
          mandate:
            "Mobilized under Senior Scale HSM Ms. Prateeksha Pandey to analyze criminal justice elements, theories of punishment, and judicial redressal frameworks.",
          tag: "TEAM II COMMAND",
        }
      : activeTab === "team-3"
      ? {
          title: teamPosters[2].teamTitle,
          subtitle: "Official Operational Wing A &bull; Deployed Team III",
          commanderName: teamPosters[2].commanderName,
          commanderRole: teamPosters[2].commanderRole,
          moment: teamPosters[2].convocationMoment,
          scholars: teamPosters[2].deployedScholars,
          posterUrl: teamPosters[2].posterUrl,
          mandate:
            "Mobilized under HSM Shubhangi Singh to explore artificial intelligence emotion profiling, KS Puttaswamy privacy doctrines, and tech-ethics governance.",
          tag: "TEAM III COMMAND",
        }
      : {
          title: teamPosters[3].teamTitle,
          subtitle: "Executive Directorate & Deployed Team IV",
          commanderName: teamPosters[3].commanderName,
          commanderRole: teamPosters[3].commanderRole,
          moment: teamPosters[3].convocationMoment,
          scholars: teamPosters[3].deployedScholars,
          posterUrl: teamPosters[3].posterUrl,
          mandate:
            "Governed directly under Registrar Ms. Shiksha Jaiswal, Dy. Registrar Ms. Navyanshi Dwivedi, and HSM Mr. Vedant Agarwal, synthesizing crisis statecraft and grassroots triage.",
          tag: "DIRECTORATE & TEAM IV",
        };

  return (
    <div
      id="hierarchy-posters-viewer"
      className={`space-y-6 scroll-mt-28 ${className}`}
    >
      {/* 1. Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-lion-gold-dark uppercase font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Broadsheets &bull; Graphic Decrees</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Official Hierarchy &amp; Committee Posters
          </h3>
          <p className="text-xs sm:text-sm text-slate font-sans mt-0.5 max-w-2xl">
            Graphic decree broadsheets ratified by the Secretariat, featuring on-stage convocation photographs,
            chain-of-command flowcharts, and the official Designing Committee.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-lion-gold-dark text-xs font-mono font-semibold">
            5 Graphic Posters Ratified
          </span>
        </div>
      </div>

      {/* 2. Double-Bezel Architectural Container */}
      <div className="p-2 sm:p-3 rounded-[2rem] bg-black/5 ring-1 ring-lion-gold/25 shadow-elevation-1">
        <div className="rounded-[calc(2rem-0.625rem)] bg-white p-5 sm:p-8 space-y-6">
          
          {/* Responsive 5-Tab Navigation Strip */}
          <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
            <button
              onClick={() => setActiveTab("committee")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-[0.98] inline-flex items-center space-x-1.5 min-h-[44px] ${
                activeTab === "committee"
                  ? "bg-amber-900 text-white shadow-sm"
                  : "bg-porcelain border border-border text-slate hover:text-obsidian hover:bg-white"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Designing Committee</span>
            </button>

            <button
              onClick={() => setActiveTab("team-1")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-[0.98] inline-flex items-center space-x-1.5 min-h-[44px] ${
                activeTab === "team-1"
                  ? "bg-lion-gold text-white shadow-sm"
                  : "bg-porcelain border border-border text-slate hover:text-obsidian hover:bg-white"
              }`}
            >
              <span>Team I Poster</span>
            </button>

            <button
              onClick={() => setActiveTab("team-2")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-[0.98] inline-flex items-center space-x-1.5 min-h-[44px] ${
                activeTab === "team-2"
                  ? "bg-lion-gold text-white shadow-sm"
                  : "bg-porcelain border border-border text-slate hover:text-obsidian hover:bg-white"
              }`}
            >
              <span>Team II Poster</span>
            </button>

            <button
              onClick={() => setActiveTab("team-3")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-[0.98] inline-flex items-center space-x-1.5 min-h-[44px] ${
                activeTab === "team-3"
                  ? "bg-lion-gold text-white shadow-sm"
                  : "bg-porcelain border border-border text-slate hover:text-obsidian hover:bg-white"
              }`}
            >
              <span>Team III Poster</span>
            </button>

            <button
              onClick={() => setActiveTab("team-4")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-[0.98] inline-flex items-center space-x-1.5 min-h-[44px] ${
                activeTab === "team-4"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-porcelain border border-border text-slate hover:text-obsidian hover:bg-white"
              }`}
            >
              <span>Directorate &amp; Team IV</span>
            </button>
          </div>

          {/* Active Graphic Poster Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left (7 Cols): Metadata, Chain of Command, and Convocation Moment */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-lion-gold/15 text-lion-gold-dark text-xs font-mono font-bold uppercase tracking-wider">
                    {activePoster.tag}
                  </span>
                  <span className="text-xs font-mono text-slate">
                    Secretariat: +91 96709 70750
                  </span>
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                  {activePoster.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
                  {activePoster.mandate}
                </p>
              </div>

              {/* Convocation Moment Highlight Card */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5 text-xs font-sans text-amber-900">
                <div className="flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-amber-800 font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Verified Convocation Action Photograph:</span>
                </div>
                <p className="leading-relaxed font-medium">
                  {activePoster.moment}
                </p>
              </div>

              {/* Commander & Deployed Scholars Bento */}
              <div className="p-5 rounded-2xl bg-porcelain border border-border/80 space-y-4">
                <div className="flex items-center justify-between border-b border-border/70 pb-2.5">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                      Commanding Authority
                    </span>
                    <strong className="font-serif text-base text-obsidian block">
                      {activePoster.commanderName}
                    </strong>
                    <span className="text-[11px] font-mono text-lion-gold-dark">
                      {activePoster.commanderRole}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-border text-xs font-mono text-obsidian font-semibold">
                    {activePoster.scholars.length} Officers / Scholars
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate block font-semibold">
                    Deployed Members in Hierarchy:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                    {activePoster.scholars.map((sName, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-white border border-border/60 flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <span className="w-5 h-5 rounded-md bg-stone-100 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 text-slate">
                            {String(sIdx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-medium text-xs truncate text-obsidian">
                            {sName}
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate/40 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right (5 Cols): Scanned Graphic Broadsheet Poster */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-border rounded-3xl p-5 shadow-elevation-1 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-lion-gold-dark" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                      Graphic Broadsheet
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate">
                    Full Resolution
                  </span>
                </div>

                {/* Poster Display Container */}
                <div
                  onClick={() => {
                    setLightboxPosterUrl(activePoster.posterUrl);
                    setLightboxCaption(activePoster.title);
                  }}
                  className="relative w-full aspect-[1/1.5] rounded-2xl overflow-hidden border border-border bg-slate-900 shadow-md group cursor-pointer"
                >
                  <Image
                    src={activePoster.posterUrl}
                    alt={activePoster.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-1 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-white/95 text-obsidian font-mono text-xs font-semibold flex items-center space-x-2 shadow-lg">
                      <ZoomIn className="w-4 h-4 text-lion-gold-dark" />
                      <span>Inspect Poster Full Size</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setLightboxPosterUrl(activePoster.posterUrl);
                      setLightboxCaption(activePoster.title);
                    }}
                    className="w-full py-2.5 px-3 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-lion-gold" />
                    <span>Inspect</span>
                  </button>

                  <a
                    href={activePoster.posterUrl}
                    download="ksf-official-hierarchy-poster.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-full bg-white border border-border text-obsidian text-xs font-mono font-semibold tracking-wider hover:border-lion-gold/50 hover:bg-slate-50 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 shadow-2xs min-h-[44px]"
                  >
                    <Download className="w-3.5 h-3.5 text-slate" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Full-Screen Accessible Modal Lightbox */}
      {lightboxPosterUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Inspect Official Graphic Poster"
          onClick={() => setLightboxPosterUrl(null)}
          className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 bg-obsidian/85 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between bg-porcelain">
              <div className="flex items-center space-x-2 truncate pr-4">
                <Award className="w-4 h-4 text-lion-gold-dark shrink-0" />
                <span className="font-serif text-sm font-bold text-obsidian truncate">
                  {lightboxCaption} &bull; Official Broadsheet Decree
                </span>
              </div>
              <button
                onClick={() => setLightboxPosterUrl(null)}
                aria-label="Close Lightbox"
                className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-white border border-border hover:bg-slate-100 flex items-center justify-center text-obsidian active:scale-95 transition-all shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-grow flex items-center justify-center bg-stone-900/90">
              <div className="relative w-full h-[68vh] sm:h-[75vh]">
                <Image
                  src={lightboxPosterUrl}
                  alt={lightboxCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-border bg-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate text-[11px]">
                High-Resolution Graphic Decree Poster &bull; Ratified by Secretariat
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={lightboxPosterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-porcelain border border-border text-obsidian hover:bg-white transition-colors inline-flex items-center space-x-1"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate" />
                  <span>Open Full Size</span>
                </a>
                <a
                  href={lightboxPosterUrl}
                  download="ksf-hierarchy-poster.jpg"
                  className="px-3.5 py-1.5 rounded-full bg-obsidian text-white hover:bg-stone-800 transition-colors inline-flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-lion-gold" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
