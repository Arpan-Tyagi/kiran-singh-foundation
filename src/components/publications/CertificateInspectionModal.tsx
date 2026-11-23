"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Download,
  Copy,
  Check,
  Award,
  BookOpen,
  Calendar,
  User,
  ShieldCheck,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import type { InternationalJournalPublication, PublicationAuthor } from "@/lib/data/international-publications-data";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  publication: InternationalJournalPublication | null;
  initialAuthorIndex?: number;
}

export default function CertificateInspectionModal({
  isOpen,
  onClose,
  publication,
  initialAuthorIndex = 0,
}: Props) {
  const [selectedAuthorIndex, setSelectedAuthorIndex] = useState(initialAuthorIndex);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setSelectedAuthorIndex(initialAuthorIndex);
    setIsZoomed(false);
  }, [initialAuthorIndex, publication]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && publication) {
        setSelectedAuthorIndex((prev) =>
          prev > 0 ? prev - 1 : publication.authors.length - 1
        );
      }
      if (e.key === "ArrowRight" && publication) {
        setSelectedAuthorIndex((prev) =>
          prev < publication.authors.length - 1 ? prev + 1 : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, publication]);

  if (!isOpen || !publication) return null;

  const currentAuthor: PublicationAuthor =
    publication.authors[selectedAuthorIndex] || publication.authors[0];

  const handleCopyCitation = (format: "apa" | "bluebook") => {
    const text =
      format === "apa" ? publication.apaCitation : publication.bluebookCitation;
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian/85 backdrop-blur-md transition-opacity duration-300">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-border shadow-elevation-2 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-white/95 backdrop-blur-md border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] sm:text-xs text-lion-gold-dark font-semibold uppercase tracking-wider">
                  Official Publication Certificate
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-obsidian text-[10px] font-mono font-medium">
                  ISSN: {publication.issn}
                </span>
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-obsidian truncate max-w-md sm:max-w-xl">
                {publication.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate hover:text-obsidian hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-6">
          {/* Author Selector Tabs (if multi-author) */}
          {publication.authors.length > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 border border-border">
              <div className="text-xs font-mono text-slate flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-lion-gold-dark" />
                <span>Select Co-Author Certificate:</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {publication.authors.map((author, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedAuthorIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center space-x-1.5 shrink-0 ${
                      selectedAuthorIndex === idx
                        ? "bg-obsidian text-white shadow-sm font-semibold"
                        : "bg-white text-slate hover:text-obsidian hover:bg-slate-100 border border-border"
                    }`}
                  >
                    <span>{author.name}</span>
                    {author.scholarId && (
                      <span className="text-[10px] opacity-75">
                        ({author.scholarId})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Display Area */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900/5 shadow-inner">
            <div
              className={`relative w-full aspect-[4/3] sm:aspect-[1.414/1] transition-transform duration-300 ${
                isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={currentAuthor.certificateUrl}
                alt={`Certificate of Publication for ${currentAuthor.name} - ${publication.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-contain"
                priority
              />
            </div>

            {/* Zoom / Info Overlay Pill */}
            <div className="absolute bottom-3 right-3 flex items-center space-x-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="px-3 py-1.5 rounded-full bg-obsidian/80 backdrop-blur-md text-white text-xs font-mono flex items-center space-x-1.5 shadow-md hover:bg-obsidian transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5 text-lion-gold" />
                <span>{isZoomed ? "Reset Zoom" : "Click to Zoom"}</span>
              </button>
            </div>
          </div>

          {/* Verification & Metadata Dossier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {/* Left: Journal Verification */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-2.5">
              <div className="flex items-center space-x-2 font-mono text-[11px] text-lion-gold-dark font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Journal Peer-Review Record</span>
              </div>
              <div className="space-y-1.5 text-slate leading-relaxed">
                <div>
                  <strong className="text-obsidian font-semibold">Journal:</strong>{" "}
                  {publication.journalName}
                </div>
                <div>
                  <strong className="text-obsidian font-semibold">Issuing Body:</strong>{" "}
                  {publication.issuingSociety}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px]">
                  <span>
                    <strong className="text-obsidian">ISSN:</strong> {publication.issn}
                  </span>
                  <span>
                    <strong className="text-obsidian">Volume:</strong> {publication.volume},{" "}
                    {publication.issue}
                  </span>
                  <span>
                    <strong className="text-obsidian">Date:</strong> 31st October 2026
                  </span>
                </div>
                <div>
                  <strong className="text-obsidian font-semibold">Chief Editor:</strong>{" "}
                  {publication.chiefEditor}
                </div>
              </div>
            </div>

            {/* Right: Author & Institutional Credential */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-2.5">
              <div className="flex items-center space-x-2 font-mono text-[11px] text-lion-gold-dark font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Awarded Scholar Credential</span>
              </div>
              <div className="space-y-1.5 text-slate leading-relaxed">
                <div>
                  <strong className="text-obsidian font-semibold">Recipient:</strong>{" "}
                  <span className="text-obsidian font-bold text-sm">
                    {currentAuthor.name}
                  </span>
                </div>
                <div>
                  <strong className="text-obsidian font-semibold">Foundation Role:</strong>{" "}
                  {currentAuthor.role}
                </div>
                {currentAuthor.scholarId && (
                  <div className="font-mono text-[11px]">
                    <strong className="text-obsidian">Scholar Roll:</strong>{" "}
                    {currentAuthor.scholarId}
                  </div>
                )}
                <div>
                  <strong className="text-obsidian font-semibold">Institution:</strong>{" "}
                  {currentAuthor.institution}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Citation Box */}
          <div className="p-4 rounded-2xl bg-white border border-border shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-obsidian font-semibold flex items-center space-x-1.5">
                <BookOpen className="w-3.5 h-3.5 text-lion-gold-dark" />
                <span>Standard Academic Citation</span>
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopyCitation("apa")}
                  className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-lion-gold/15 text-obsidian hover:text-lion-gold-dark text-xs font-mono transition-colors flex items-center space-x-1"
                >
                  {copiedFormat === "apa" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied APA</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy APA</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleCopyCitation("bluebook")}
                  className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-lion-gold/15 text-obsidian hover:text-lion-gold-dark text-xs font-mono transition-colors flex items-center space-x-1"
                >
                  {copiedFormat === "bluebook" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied Bluebook</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Bluebook</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <p className="font-mono text-xs text-slate bg-slate-50 p-3 rounded-xl border border-border leading-relaxed break-words">
              {publication.apaCitation}
            </p>
          </div>
        </div>

        {/* Modal Footer Strip */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate">
            Kiran Singh Foundation Directorate &bull; Verified Academic Milestone
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={currentAuthor.certificateUrl}
              download={`${currentAuthor.name.replace(/[^a-zA-Z0-9]/g, "_")}_Publication_Certificate.jpg`}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white border border-border hover:bg-slate-100 text-obsidian text-xs font-mono font-medium transition-colors inline-flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Certificate</span>
            </a>
            <a
              href={`/blogs/${publication.slug}`}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-obsidian text-white hover:bg-obsidian/90 text-xs font-mono font-medium transition-colors inline-flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-lion-gold" />
              <span>Read Full Article</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
