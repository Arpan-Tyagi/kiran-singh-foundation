"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  STUDENT_RESEARCH_TOPIC_DOSSIERS_2026,
  StudentResearchTopic,
  PUBLISHED_STUDENT_PAPERS,
  PublishedStudentPaper,
} from "@/lib/data/foundation-data";
import {
  BookOpen,
  Award,
  ShieldCheck,
  FileText,
  ZoomIn,
  Download,
  X,
  Share2,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  FileCheck2,
  Printer,
  Copy,
  Check,
  ArrowUpRight,
  Bookmark,
} from "lucide-react";

export default function StudentResearchTopicsDossier() {
  const topics = STUDENT_RESEARCH_TOPIC_DOSSIERS_2026;
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0].id);
  const [lightboxScanUrl, setLightboxScanUrl] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>("");
  const [readingPaper, setReadingPaper] = useState<PublishedStudentPaper | null>(null);
  const [activeTab, setActiveTab] = useState<"syllabus" | "manuscript">("syllabus");
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);

  const activeTopic =
    topics.find((t) => t.id === selectedTopicId) || topics[0];

  const activePublishedPaper = PUBLISHED_STUDENT_PAPERS.find(
    (p) => p.topicId === activeTopic.id
  );

  // Close lightbox or reading modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxScanUrl(null);
        setReadingPaper(null);
      }
    };
    if (lightboxScanUrl || readingPaper) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxScanUrl, readingPaper]);

  const shareTopic = (topic: StudentResearchTopic) => {
    const text = encodeURIComponent(
      `Official Research Topic [${topic.documentRef}]: "${topic.title}" — Assigned to ${topic.teamCode} (${topic.commander.name}, HSM) under the 2nd Winter Internship Program. Kiran Singh Foundation Prayagraj.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const copyCitation = (paper: PublishedStudentPaper) => {
    const citation = `${paper.authors.map((a) => a.name).join(", ")}. (${paper.publicationDate}). "${paper.title}". Kiran Singh Foundation Research Working Paper Series, Ref: ${paper.documentRef}. Prayagraj.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(citation);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2500);
    }
  };

  const downloadPaperMarkdown = (paper: PublishedStudentPaper) => {
    let md = `# ${paper.title}\n\n`;
    md += `**Document Reference:** ${paper.documentRef}\n`;
    md += `**Institutional Affiliation:** ${paper.institutionalAffiliation}\n`;
    md += `**Date:** ${paper.publicationDate}\n\n`;
    md += `## Authors\n`;
    paper.authors.forEach((a) => {
      md += `- **${a.name}** (${a.credential}), ${a.institution}\n`;
    });
    md += `\n### Abstract\n*${paper.abstract}*\n\n`;
    md += `### Keywords\n*${paper.keywords.join(", ")}*\n\n---\n\n`;
    
    paper.sections.forEach((sec) => {
      md += `## ${sec.number}. ${sec.title}\n\n`;
      sec.paragraphs.forEach((p) => {
        md += `${p}\n\n`;
      });
      if (sec.subsections) {
        sec.subsections.forEach((sub) => {
          md += `### ${sub.subtitle}\n\n`;
          sub.paragraphs.forEach((p) => {
            md += `${p}\n\n`;
          });
        });
      }
    });

    md += `## 8. Suggestions for Institutional and Policy Reform\n\n`;
    paper.suggestions.forEach((s) => {
      md += `### ${s.number}. ${s.title}\n${s.description}\n\n`;
    });

    md += `## 9. Conclusion\n\n`;
    paper.conclusionParagraphs.forEach((p) => {
      md += `${p}\n\n`;
    });

    md += `## 10. References & Mandatory Footnotes\n\n### Footnotes (Calibri 10pt Standard)\n`;
    paper.footnotes.forEach((fn) => {
      md += `[^${fn.number}]: ${fn.text}${fn.url ? ` ${fn.url}` : ""}\n`;
    });

    md += `\n### Bibliography\n`;
    paper.bibliography.forEach((b, idx) => {
      md += `${idx + 1}. ${b}\n`;
    });

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = paper.downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="student-research-topics" className="space-y-8 scroll-mt-28">
      {/* 1. Institutional Section Header */}
      <div className="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-lion-gold-dark" />
            <span>Academic Research Syllabus &bull; Winter Session 2026–27</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-obsidian tracking-tight">
            Topic of Research Given to Students
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate mt-1 max-w-3xl leading-relaxed">
            Decreed by Secretary <strong className="text-obsidian font-semibold">Shri Anuj Kumar Singh</strong> to
            cultivate empirical reasoning, critical logical faculties, and public policy formulation across the 4 deployed teams
            mobilized for the 2nd Winter Internship Program.
          </p>
        </div>

        {/* Quick Statutory Telemetry Badge */}
        <div className="shrink-0 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-xs font-mono font-semibold flex items-center space-x-1.5 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>4 Official Decrees Ratified</span>
          </span>
        </div>
      </div>

      {/* 2. Double-Bezel Architectural Container */}
      <div className="p-2 sm:p-3 rounded-[2rem] bg-black/5 ring-1 ring-lion-gold/25 shadow-elevation-1">
        <div className="rounded-[calc(2rem-0.625rem)] bg-white p-5 sm:p-8 space-y-8">
          
          {/* A. Academic Protocol Rigor Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-50 via-amber-50/20 to-stone-50 border border-lion-gold/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-lion-gold/20 pb-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-lion-gold-dark" />
                <span>Mandatory Formatting Protocol &bull; Decree Compliance</span>
              </span>
              <span className="text-[10px] font-mono text-slate bg-white px-2.5 py-0.5 rounded-full border border-border">
                All 4 Teams &bull; Audited Defenses
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-border/70 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono text-slate uppercase block font-semibold">
                  1. Abstract Requirement
                </span>
                <span className="font-serif font-bold text-obsidian text-xs sm:text-sm block">
                  300 Words &bull; Italics
                </span>
                <span className="text-[10px] font-mono text-slate block">
                  Times New Roman &bull; Font Size 12
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border/70 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono text-slate uppercase block font-semibold">
                  2. Scholarly Keywords
                </span>
                <span className="font-serif font-bold text-obsidian text-xs sm:text-sm block">
                  Min. 10 Keywords
                </span>
                <span className="text-[10px] font-mono text-slate block">
                  Italics &bull; Times New Roman 12
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border/70 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono text-slate uppercase block font-semibold">
                  3. Citation Footnotes
                </span>
                <span className="font-serif font-bold text-obsidian text-xs sm:text-sm block">
                  Min. 10 Footnotes
                </span>
                <span className="text-[10px] font-mono text-slate block">
                  Calibri &bull; Font Size 10
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-border/70 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono text-slate uppercase block font-semibold">
                  4. Report &amp; Defense
                </span>
                <span className="font-serif font-bold text-botanical-emerald text-xs sm:text-sm block">
                  Plagiarism Audited
                </span>
                <span className="text-[10px] font-mono text-slate block">
                  PPT Defense before Panel
                </span>
              </div>
            </div>
          </div>

          {/* B. Responsive 4-Team Interactive Switcher */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate block font-semibold">
              Select Deployed Research Wing / Decree:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {topics.map((t) => {
                const isActive = t.id === selectedTopicId;
                const hasPaper = PUBLISHED_STUDENT_PAPERS.some(
                  (p) => p.topicId === t.id
                );
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTopicId(t.id);
                      setActiveTab("syllabus");
                    }}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 min-h-[92px] ${
                      isActive
                        ? "bg-white border-lion-gold ring-2 ring-lion-gold/20 shadow-md"
                        : "bg-porcelain/80 border-border hover:bg-white hover:border-slate/40"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-1.5">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                            isActive
                              ? "bg-lion-gold text-white"
                              : "bg-slate-200/80 text-slate"
                          }`}
                        >
                          {t.teamCode}
                        </span>
                        {hasPaper && (
                          <span className="px-1.5 py-0.5 rounded-full bg-botanical-emerald/15 text-botanical-emerald text-[9px] font-mono font-bold">
                            Paper Available
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-slate">
                        {t.documentRef}
                      </span>
                    </div>

                    <div>
                      <strong
                        className={`text-xs block line-clamp-1 font-serif ${
                          isActive ? "text-obsidian" : "text-slate"
                        }`}
                      >
                        {t.commander.name} (HSM)
                      </strong>
                      <span className="text-[11px] text-slate/90 line-clamp-1 font-sans mt-0.5">
                        {t.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* C. Active Topic Dossier Card */}
          <div className="bg-porcelain border border-border/80 rounded-3xl p-5 sm:p-8 space-y-6">
            
            {/* Header Strip of Active Dossier */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-lion-gold/15 text-lion-gold-dark text-xs font-mono font-bold uppercase tracking-wider">
                  {activeTopic.docType}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-border text-obsidian text-xs font-mono font-semibold">
                  Ref: {activeTopic.documentRef}
                </span>
                <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-xs font-mono font-semibold">
                  {activeTopic.teamCode} &bull; {activeTopic.cohortStrength}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => shareTopic(activeTopic)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-mono text-slate hover:text-obsidian hover:border-slate/40 transition-colors shadow-2xs"
                >
                  <Share2 className="w-3.5 h-3.5 text-lion-gold-dark" />
                  <span className="hidden sm:inline">Share Topic</span>
                </button>
              </div>
            </div>

            {/* Title & Narrative Overview */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-3xl md:text-4xl text-obsidian leading-tight font-normal">
                &ldquo;{activeTopic.title}&rdquo;
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate leading-relaxed">
                {activeTopic.themeOverview}
              </p>
              <div className="p-3 rounded-xl bg-white border border-border/70 text-xs font-sans text-slate space-y-1">
                <span className="font-mono text-[10px] uppercase text-lion-gold-dark font-bold block">
                  Academic Rationale &amp; Intellectual Focus:
                </span>
                <p className="leading-relaxed">
                  {activeTopic.academicRationale}
                </p>
              </div>
            </div>

            {/* Specialized Showcase Banner if Full Research Paper is Available */}
            {activePublishedPaper && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-obsidian via-stone-900 to-obsidian text-white border border-lion-gold/40 shadow-lg space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-lion-gold animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-lion-gold font-bold">
                      {activePublishedPaper.statusBadge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-300">
                    Published: {activePublishedPaper.publicationDate}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                      Complete Working Paper &amp; Institutional Defense Manuscript
                    </h4>
                    <p className="text-xs text-stone-300 font-sans max-w-2xl leading-relaxed">
                      Authored by{" "}
                      <strong className="text-white">
                        {activePublishedPaper.authors.map((a) => a.name).join(", ")}
                      </strong>
                      . Features all 10 mandated sections, Boin &amp; &rsquo;t Hart&rsquo;s 5 Crisis Leadership Tasks, Article 21 constitutional jurisprudence, and 12 verified footnotes.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => setReadingPaper(activePublishedPaper)}
                      className="px-4 py-2.5 rounded-full bg-lion-gold text-obsidian text-xs font-mono font-bold hover:bg-lion-gold-light active:scale-95 transition-all inline-flex items-center space-x-2 shadow-md min-h-[44px]"
                    >
                      <BookOpen className="w-4 h-4 text-obsidian" />
                      <span>Read Full Paper Online</span>
                    </button>
                    <button
                      onClick={() => downloadPaperMarkdown(activePublishedPaper)}
                      className="px-3.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono hover:text-lion-gold active:scale-95 transition-all inline-flex items-center space-x-1.5 min-h-[44px]"
                      title="Download Full Text (.md)"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </div>

                {/* Sub-tabs toggle between Syllabus view and Paper preview */}
                <div className="flex items-center space-x-2 pt-1 border-t border-white/10">
                  <button
                    onClick={() => setActiveTab("syllabus")}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
                      activeTab === "syllabus"
                        ? "bg-white text-obsidian"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    1. Decreed Syllabus &amp; Scan
                  </button>
                  <button
                    onClick={() => setActiveTab("manuscript")}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-colors ${
                      activeTab === "manuscript"
                        ? "bg-white text-obsidian"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    2. Manuscript Text Preview
                  </button>
                </div>
              </div>
            )}

            {/* Tab 1: Syllabus Modules and Scanned Decree (Default) */}
            {activeTab === "syllabus" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                
                {/* Left (7 Cols): Numbered Structural Syllabus Tree */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between border-b border-border/70 pb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-obsidian font-bold flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-lion-gold-dark" />
                      <span>Structured Modules of Research ({activeTopic.curriculumModules.length} Stages)</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate">
                      Mandated Defense Flow
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {activeTopic.curriculumModules.map((mod) => (
                      <div
                        key={mod.step}
                        className="p-3.5 rounded-2xl bg-white border border-border/80 hover:border-lion-gold/50 transition-colors flex items-start space-x-3 shadow-2xs group"
                      >
                        <div className="w-7 h-7 rounded-xl bg-stone-100 group-hover:bg-lion-gold/15 text-obsidian group-hover:text-lion-gold-dark text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-border/70 transition-colors">
                          {String(mod.step).padStart(2, "0")}
                        </div>
                        <div className="space-y-0.5 flex-grow">
                          <h4 className="text-xs sm:text-sm font-semibold text-obsidian font-sans leading-snug">
                            {mod.title}
                          </h4>
                          {mod.focusPoint && (
                            <p className="text-[11px] text-slate font-sans leading-relaxed">
                              {mod.focusPoint}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right (5 Cols): Official Decree Document Scan & Inspector */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-white border border-border rounded-3xl p-5 shadow-elevation-1 space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-4 h-4 text-lion-gold-dark" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                          Official Decreed Sheet
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">
                        {activeTopic.sealLabel}
                      </span>
                    </div>

                    {/* Scanned Document Image Container */}
                    <div
                      onClick={() => {
                        setLightboxScanUrl(activeTopic.decreeScanUrl);
                        setLightboxCaption(`Official Decree [${activeTopic.documentRef}]: "${activeTopic.title}"`);
                      }}
                      className="relative w-full aspect-[1/1.3] rounded-2xl overflow-hidden border border-border bg-slate-50 shadow-inner group cursor-pointer"
                    >
                      <Image
                        src={activeTopic.decreeScanUrl}
                        alt={`Official Research Decree: ${activeTopic.title} (Ref: ${activeTopic.documentRef})`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-contain p-1 group-hover:scale-102 transition-transform duration-500"
                      />
                      {/* Hover Zoom Overlay */}
                      <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-white/95 text-obsidian font-mono text-xs font-semibold flex items-center space-x-2 shadow-lg">
                          <ZoomIn className="w-4 h-4 text-lion-gold-dark" />
                          <span>Inspect High-Res Scan</span>
                        </div>
                      </div>
                    </div>

                    {/* Document Telemetry & Action Buttons */}
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-porcelain border border-border/70 text-[11px] font-mono space-y-1 text-slate">
                        <div className="flex items-center justify-between">
                          <span>Document Ref:</span>
                          <strong className="text-obsidian">{activeTopic.documentRef}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Assigned HSM:</span>
                          <span className="text-obsidian font-semibold">{activeTopic.commander.name}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Format Standard:</span>
                          <span className="text-obsidian font-medium">TNR 12 / Calibri 10</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Secretariat Hotline:</span>
                          <span className="text-obsidian font-medium">{activeTopic.secretariatContact}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setLightboxScanUrl(activeTopic.decreeScanUrl);
                            setLightboxCaption(`Official Decree [${activeTopic.documentRef}]: "${activeTopic.title}"`);
                          }}
                          className="w-full py-2.5 px-3 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 active:scale-95 transition-all inline-flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                        >
                          <ZoomIn className="w-3.5 h-3.5 text-lion-gold" />
                          <span>Inspect Scan</span>
                        </button>

                        <a
                          href={activeTopic.decreeScanUrl}
                          download={`${activeTopic.documentRef.replace(/\//g, "-")}-decree.jpg`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 rounded-full bg-white border border-border text-obsidian text-xs font-mono font-semibold tracking-wider hover:border-lion-gold/50 hover:bg-slate-50 active:scale-95 transition-all inline-flex items-center justify-center gap-1.5 shadow-2xs min-h-[44px]"
                        >
                          <Download className="w-3.5 h-3.5 text-slate" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Manuscript Text Preview (Available if paper published) */}
            {activeTab === "manuscript" && activePublishedPaper && (
              <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-elevation-1">
                {/* Abstract Preview */}
                <div className="space-y-2 border-l-4 border-lion-gold pl-4 sm:pl-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-lion-gold-dark font-bold block">
                    Manuscript Abstract (Times New Roman &bull; 12pt &bull; Italics)
                  </span>
                  <p className="font-serif italic text-sm text-slate leading-relaxed">
                    &ldquo;{activePublishedPaper.abstract}&rdquo;
                  </p>
                </div>

                {/* Keywords Chips */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate font-semibold block">
                    Author Keywords ({activePublishedPaper.keywords.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activePublishedPaper.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-porcelain border border-border text-[11px] font-mono text-obsidian font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section Overview Grid */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-obsidian font-bold block">
                    Published Sections &amp; Core Debates:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePublishedPaper.sections.map((sec) => (
                      <div
                        key={sec.number}
                        className="p-3.5 rounded-2xl bg-porcelain border border-border/80 space-y-1"
                      >
                        <span className="text-[10px] font-mono text-lion-gold-dark font-bold">
                          Section {sec.number}
                        </span>
                        <h5 className="font-serif font-bold text-xs text-obsidian">
                          {sec.title}
                        </h5>
                        <p className="text-[11px] text-slate font-sans line-clamp-2">
                          {sec.paragraphs[0]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="p-4 rounded-2xl bg-amber-50/40 border border-lion-gold/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-botanical-emerald shrink-0" />
                    <span className="text-xs font-mono text-obsidian font-medium">
                      All 10 Sections, 4 Suggestions &amp; 12 Footnotes Ready
                    </span>
                  </div>
                  <button
                    onClick={() => setReadingPaper(activePublishedPaper)}
                    className="px-5 py-2 rounded-full bg-obsidian text-white hover:bg-stone-800 text-xs font-mono font-bold inline-flex items-center space-x-1.5 transition-all shadow-sm"
                  >
                    <span>Launch Full Scholarly Reader</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* D. Footer Affirmation */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-botanical-emerald shrink-0" />
              <span className="text-obsidian font-medium">
                Official decree sheets ratified under registered seal of Kiran Singh Foundation.
              </span>
            </div>
            <span className="text-lion-gold-dark font-bold uppercase tracking-wider">
              Prayagraj Secretariat &bull; Jai Hind
            </span>
          </div>
        </div>
      </div>

      {/* 3. Full-Screen Accessible Lightbox Modal (For Decree Scans) */}
      {lightboxScanUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Inspect Official Research Decree Scan"
          onClick={() => setLightboxScanUrl(null)}
          className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 bg-obsidian/85 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between bg-porcelain">
              <div className="flex items-center space-x-2 truncate pr-4">
                <FileCheck2 className="w-4 h-4 text-lion-gold-dark shrink-0" />
                <span className="font-serif text-sm font-bold text-obsidian truncate">
                  {lightboxCaption}
                </span>
              </div>
              <button
                onClick={() => setLightboxScanUrl(null)}
                aria-label="Close Lightbox"
                className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-white border border-border hover:bg-slate-100 flex items-center justify-center text-obsidian active:scale-95 transition-all shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body with Touch-Friendly Scroll */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-grow flex items-center justify-center bg-stone-100/50">
              <div className="relative w-full h-[65vh] sm:h-[72vh]">
                <Image
                  src={lightboxScanUrl}
                  alt={lightboxCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="px-5 py-3 border-t border-border bg-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate text-[11px]">
                Official Decree Document Scan &bull; Certified by KSF Prayagraj
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={lightboxScanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-porcelain border border-border text-obsidian hover:bg-white transition-colors inline-flex items-center space-x-1"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate" />
                  <span>Open Full Screen</span>
                </a>
                <a
                  href={lightboxScanUrl}
                  download="ksf-official-decree-scan.jpg"
                  className="px-3.5 py-1.5 rounded-full bg-obsidian text-white hover:bg-stone-800 transition-colors inline-flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-lion-gold" />
                  <span>Download Scan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Full-Screen Accessible Scholarly Paper Reading Modal */}
      {readingPaper && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Read Full Research Paper: ${readingPaper.title}`}
          onClick={() => setReadingPaper(null)}
          className="fixed inset-0 z-50 p-2 sm:p-4 md:p-6 bg-obsidian/90 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[92vh] max-h-[95vh] bg-[#fdfbf7] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Academic Modal Header Bar */}
            <div className="px-5 py-3.5 border-b border-stone-200 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center space-x-2 truncate pr-4">
                <GraduationCap className="w-5 h-5 text-lion-gold-dark shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] font-mono text-slate uppercase block leading-none">
                    Ref: {readingPaper.documentRef} &bull; {readingPaper.institutionalAffiliation}
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold text-obsidian truncate block mt-0.5">
                    {readingPaper.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => copyCitation(readingPaper)}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-porcelain border border-border text-[11px] font-mono text-obsidian hover:bg-white transition-colors"
                  title="Copy Academic Citation"
                >
                  {copiedCitation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-botanical-emerald" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate" />
                      <span>Cite</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => downloadPaperMarkdown(readingPaper)}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-porcelain border border-border text-[11px] font-mono text-obsidian hover:bg-white transition-colors"
                  title="Download Markdown Manuscript"
                >
                  <Download className="w-3.5 h-3.5 text-slate" />
                  <span>Download (.md)</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="hidden md:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-porcelain border border-border text-[11px] font-mono text-obsidian hover:bg-white transition-colors"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-slate" />
                  <span>Print</span>
                </button>

                <button
                  onClick={() => setReadingPaper(null)}
                  aria-label="Close Reader"
                  className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-300 flex items-center justify-center text-obsidian active:scale-95 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Reading Document Body with Academic Typography */}
            <div className="flex-grow overflow-y-auto px-6 sm:px-12 md:px-16 py-8 sm:py-12 space-y-8 max-w-4xl mx-auto w-full font-serif text-obsidian">
              
              {/* Paper Masthead */}
              <div className="space-y-4 border-b border-stone-200 pb-8 text-center">
                <span className="px-3.5 py-1 rounded-full bg-lion-gold/15 text-lion-gold-dark text-[10px] font-mono font-bold uppercase tracking-[0.2em] inline-block">
                  Kiran Singh Foundation Research Working Paper Series
                </span>
                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-obsidian uppercase leading-tight">
                  {readingPaper.title}
                </h1>
                <p className="text-xs font-mono text-slate uppercase tracking-wider">
                  Document Reference: <strong className="text-obsidian">{readingPaper.documentRef}</strong> &bull; {readingPaper.publicationDate}
                </p>

                {/* Author Byline Grid */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  {readingPaper.authors.map((author, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-0.5"
                    >
                      <strong className="text-xs font-serif font-bold text-obsidian block">
                        {author.name}
                      </strong>
                      <span className="text-[11px] font-mono text-lion-gold-dark font-medium block">
                        {author.credential}
                      </span>
                      <span className="text-[10px] font-sans text-slate block leading-snug">
                        {author.institution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abstract Block */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-lion-gold border-y border-r border-stone-200 space-y-2 shadow-2xs">
                <span className="text-[11px] font-mono uppercase tracking-widest text-lion-gold-dark font-bold block">
                  ABSTRACT
                </span>
                <p className="italic text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                  {readingPaper.abstract}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate font-semibold block mb-1">
                    Keywords:
                  </span>
                  <p className="text-xs font-mono italic text-slate-600">
                    {readingPaper.keywords.join(", ")}
                  </p>
                </div>
              </div>

              {/* Body Sections */}
              <div className="space-y-8 text-sm sm:text-base leading-relaxed text-stone-800">
                {readingPaper.sections.map((sec) => (
                  <article key={sec.number} id={`paper-sec-${sec.number}`} className="space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian border-b border-stone-200 pb-1 pt-2">
                      {sec.number}. {sec.title}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed font-sans text-xs sm:text-sm text-stone-700">
                        {p}
                      </p>
                    ))}
                    {sec.subsections && (
                      <div className="space-y-4 pt-2">
                        {sec.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-2 pl-3 sm:pl-4 border-l-2 border-stone-300">
                            <h3 className="font-serif text-base sm:text-lg font-bold text-obsidian">
                              {sub.subtitle}
                            </h3>
                            {sub.paragraphs.map((subP, subPIdx) => (
                              <p key={subPIdx} className="leading-relaxed font-sans text-xs sm:text-sm text-stone-700">
                                {subP}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                ))}

                {/* Section 8: Suggestions */}
                <article id="paper-sec-8" className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian border-b border-stone-200 pb-1 pt-2">
                    8. Suggestions for Institutional and Policy Reform
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-stone-700">
                    To bridge the structural chasm between political executive decision-making, administrative procedure, and citizen grassroots mobilization, the following statutory and operational reforms are recommended:
                  </p>
                  <div className="space-y-3 pt-2">
                    {readingPaper.suggestions.map((sug) => (
                      <div
                        key={sug.number}
                        className="p-4 rounded-2xl bg-white border border-lion-gold/30 space-y-1.5 shadow-2xs"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-lg bg-lion-gold/15 text-lion-gold-dark font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            {sug.number}
                          </span>
                          <h4 className="font-serif font-bold text-sm sm:text-base text-obsidian">
                            {sug.title}
                          </h4>
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                          {sug.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Section 9: Conclusion */}
                <article id="paper-sec-9" className="space-y-3">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian border-b border-stone-200 pb-1 pt-2">
                    9. Conclusion
                  </h2>
                  {readingPaper.conclusionParagraphs.map((cp, cIdx) => (
                    <p key={cIdx} className="leading-relaxed font-sans text-xs sm:text-sm text-stone-700">
                      {cp}
                    </p>
                  ))}
                </article>

                {/* Section 10: References and Mandatory Footnotes */}
                <article id="paper-sec-10" className="space-y-6 pt-4 border-t-2 border-stone-300">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                    10. References &amp; Mandatory Footnotes
                  </h2>
                  
                  {/* Footnotes in Calibri 10pt format */}
                  <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-lion-gold-dark font-bold block">
                      Substantive Footnotes (Calibri &bull; Font Size 10)
                    </span>
                    <ol className="list-decimal list-inside space-y-1.5 font-sans text-xs text-stone-600 leading-normal">
                      {readingPaper.footnotes.map((fn) => (
                        <li key={fn.number} className="pl-1">
                          <span className="font-mono text-[10px] text-slate font-bold mr-1">
                            [{fn.number}]
                          </span>
                          <span>{fn.text}</span>
                          {fn.url && (
                            <a
                              href={fn.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lion-gold-dark hover:underline ml-1 inline-flex items-center"
                            >
                              <ExternalLink className="w-3 h-3 inline ml-0.5" />
                            </a>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Bibliography */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-obsidian font-bold block">
                      Formal Academic Bibliography
                    </span>
                    <ul className="list-disc list-inside space-y-1 font-sans text-xs text-stone-600">
                      {readingPaper.bibliography.map((bib, bIdx) => (
                        <li key={bIdx} className="pl-1">
                          {bib}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>

              {/* End of Paper Sign-off Box */}
              <div className="p-6 rounded-2xl bg-white border border-lion-gold/40 text-center space-y-2 shadow-sm my-8">
                <span className="text-lion-gold-dark font-mono text-xs font-bold uppercase tracking-widest block">
                  Kiran Singh Foundation Directorate of Socio-Legal Research
                </span>
                <p className="font-serif text-xs text-slate-600">
                  Ratified for Academic Defense &bull; Student Welfare Wing &bull; Prayagraj, Uttar Pradesh
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => downloadPaperMarkdown(readingPaper)}
                    className="px-4 py-2 rounded-full bg-obsidian text-white text-xs font-mono font-semibold hover:bg-stone-800 transition-colors inline-flex items-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-lion-gold" />
                    <span>Download Complete Manuscript (.md)</span>
                  </button>
                  <button
                    onClick={() => setReadingPaper(null)}
                    className="px-4 py-2 rounded-full bg-porcelain border border-border text-xs font-mono text-obsidian hover:bg-white transition-colors"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
