"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  OFFICIAL_SCHOLAR_TESTIMONIALS_2026,
  ScholarTestimonial,
} from "@/lib/data/foundation-data";
import {
  Quote,
  ShieldCheck,
  Sparkles,
  Share2,
  ZoomIn,
  Download,
  X,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Award,
  Heart,
  CheckCircle2,
} from "lucide-react";

interface ScholarTestimonialsSectionProps {
  className?: string;
  showAllHeader?: boolean;
}

export default function ScholarTestimonialsSection({
  className = "",
  showAllHeader = true,
}: ScholarTestimonialsSectionProps) {
  const testimonials = OFFICIAL_SCHOLAR_TESTIMONIALS_2026;
  const [selectedId, setSelectedId] = useState<string>(testimonials[0].id);
  const [lightboxScanUrl, setLightboxScanUrl] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>("");

  const activeTestimonial =
    testimonials.find((t) => t.id === selectedId) || testimonials[0];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxScanUrl(null);
      }
    };
    if (lightboxScanUrl) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxScanUrl]);

  const shareTestimonial = (t: ScholarTestimonial) => {
    const text = encodeURIComponent(
      `Official Scholar Testimonial [${t.documentRef}] by ${t.authorName} (${t.authorRole}): "${t.pullQuote}" — Kiran Singh Foundation Prayagraj.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <section
      id="scholar-testimonials"
      className={`space-y-8 scroll-mt-28 ${className}`}
      aria-labelledby="testimonials-heading"
    >
      {/* 1. Section Header */}
      {showAllHeader && (
        <div className="border-b border-border pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-2">
              <Quote className="w-3.5 h-3.5 text-lion-gold-dark" />
              <span>Voices of the Cohort &bull; Ratified Decrees</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-serif text-2xl sm:text-4xl font-normal text-obsidian tracking-tight"
            >
              Scholar Reflections &amp; Testimonials
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate mt-1 max-w-3xl leading-relaxed">
              Official written reflections ratified by the Secretariat under official decree references{" "}
              <strong className="text-obsidian font-semibold">KSF/DISC/2026/099</strong> through{" "}
              <strong className="text-obsidian font-semibold">KSF/TEST/2026/103</strong>, detailing the transformational
              impact of foundation mentorship, public speaking labs, animal welfare triage, and academic research.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-xs font-mono font-semibold flex items-center space-x-1.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>4 Certified Testimonials Stamped</span>
            </span>
          </div>
        </div>
      )}

      {/* 2. Double-Bezel Architectural Enclosure (Doppelrand) */}
      <div className="p-2 sm:p-3 rounded-[2rem] bg-black/5 ring-1 ring-lion-gold/25 shadow-elevation-1">
        <div className="rounded-[calc(2rem-0.625rem)] bg-white p-5 sm:p-8 space-y-8">
          
          {/* Responsive Author Selection Tabs */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate block font-semibold">
              Select Scholar / Officer Testimonial:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {testimonials.map((t) => {
                const isActive = t.id === selectedId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedId(t.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 active:scale-[0.98] flex flex-col justify-between space-y-2 min-h-[96px] ${
                      isActive
                        ? "bg-white border-lion-gold ring-2 ring-lion-gold/20 shadow-md"
                        : "bg-porcelain/80 border-border hover:bg-white hover:border-slate/40"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                          isActive
                            ? "bg-lion-gold text-white"
                            : "bg-slate-200/80 text-slate"
                        }`}
                      >
                        {t.documentRef}
                      </span>
                      {t.teamCode && (
                        <span className="text-[10px] font-mono font-semibold text-slate">
                          {t.teamCode}
                        </span>
                      )}
                    </div>

                    <div>
                      <strong
                        className={`text-xs block font-serif truncate ${
                          isActive ? "text-obsidian font-bold" : "text-slate font-medium"
                        }`}
                      >
                        {t.authorName}
                      </strong>
                      <span className="text-[11px] text-slate/90 line-clamp-1 font-sans mt-0.5">
                        {t.authorRole}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Testimonial Card */}
          <div className="bg-porcelain border border-border/80 rounded-3xl p-5 sm:p-8 space-y-6">
            
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-lion-gold/15 text-lion-gold-dark text-xs font-mono font-bold uppercase tracking-wider">
                  Official Testimonial
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-border text-obsidian text-xs font-mono font-semibold">
                  Ref: {activeTestimonial.documentRef}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-semibold">
                  {activeTestimonial.sealLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => shareTestimonial(activeTestimonial)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-mono text-slate hover:text-obsidian hover:border-slate/40 transition-colors shadow-2xs min-h-[44px]"
                >
                  <Share2 className="w-3.5 h-3.5 text-lion-gold-dark" />
                  <span className="hidden sm:inline">Share Testimonial</span>
                </button>
              </div>
            </div>

            {/* Author Attribution & Primary Pull-Quote */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border shadow-xs flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 text-lion-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                    {activeTestimonial.authorName}
                  </h3>
                  <p className="text-xs sm:text-sm text-lion-gold-dark font-mono font-semibold">
                    {activeTestimonial.authorRole}
                  </p>
                  <span className="text-[11px] text-slate font-sans block mt-0.5">
                    {activeTestimonial.authorAffiliation}
                  </span>
                </div>
              </div>

              <blockquote className="border-l-4 border-lion-gold pl-4 sm:pl-6 py-2 italic font-serif text-lg sm:text-2xl text-obsidian leading-relaxed bg-white/60 rounded-r-2xl">
                &ldquo;{activeTestimonial.pullQuote}&rdquo;
              </blockquote>
            </div>

            {/* Two-Column Body: Full Statement Transcript & Scanned Certificate */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
              
              {/* Left Column (7 cols): Full Verified Paragraphs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between border-b border-border/70 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-obsidian font-bold flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-lion-gold-dark" />
                    <span>Complete Endorsed Transcript ({activeTestimonial.fullStatement.length} Paragraphs)</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate">
                    Prayagraj Secretariat
                  </span>
                </div>

                <div className="bg-white border border-border/80 rounded-2xl p-5 sm:p-6 space-y-3.5 text-xs sm:text-sm text-slate font-sans leading-relaxed shadow-2xs">
                  {activeTestimonial.fullStatement.map((p, idx) => (
                    <p key={idx} className="break-words">
                      {p}
                    </p>
                  ))}
                  <div className="pt-2 text-right border-t border-border/60">
                    <span className="font-serif italic font-semibold text-obsidian text-sm">
                      — {activeTestimonial.authorName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Scanned Certificate Image & Action Controls */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white border border-border rounded-3xl p-5 shadow-elevation-1 space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-lion-gold-dark" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                        Official Decreed Scan
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate font-mono text-[10px]">
                      {activeTestimonial.documentRef}
                    </span>
                  </div>

                  {/* Scanned Image Container */}
                  <div
                    onClick={() => {
                      setLightboxScanUrl(activeTestimonial.decreeScanUrl);
                      setLightboxCaption(`Official Testimonial [${activeTestimonial.documentRef}]: ${activeTestimonial.authorName}`);
                    }}
                    className="relative w-full aspect-[1/1.3] rounded-2xl overflow-hidden border border-border bg-slate-50 shadow-inner group cursor-pointer"
                  >
                    <Image
                      src={activeTestimonial.decreeScanUrl}
                      alt={`Official Testimonial Decree: ${activeTestimonial.authorName} (${activeTestimonial.documentRef})`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain p-1 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white/95 text-obsidian font-mono text-xs font-semibold flex items-center space-x-2 shadow-lg">
                        <ZoomIn className="w-4 h-4 text-lion-gold-dark" />
                        <span>Inspect Full Scan</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-porcelain border border-border/70 text-[11px] font-mono space-y-1 text-slate">
                      <div className="flex items-center justify-between">
                        <span>Signatory:</span>
                        <strong className="text-obsidian">{activeTestimonial.authorName}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Registry Ref:</span>
                        <span className="text-obsidian font-semibold">{activeTestimonial.documentRef}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Secretariat Hotline:</span>
                        <span className="text-obsidian font-medium">{activeTestimonial.secretariatContact}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setLightboxScanUrl(activeTestimonial.decreeScanUrl);
                          setLightboxCaption(`Official Testimonial [${activeTestimonial.documentRef}]: ${activeTestimonial.authorName}`);
                        }}
                        className="w-full py-2.5 px-3 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 shadow-sm min-h-[44px]"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-lion-gold" />
                        <span>Inspect Scan</span>
                      </button>

                      <a
                        href={activeTestimonial.decreeScanUrl}
                        download={`${activeTestimonial.documentRef.replace(/\//g, "-")}-testimonial.jpg`}
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

          {/* Institutional Affirmation Footer */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-botanical-emerald shrink-0" />
              <span className="text-obsidian font-medium">
                Certified scholar testimonials stamped with KSF Approved 2026 registered seal.
              </span>
            </div>
            <span className="text-lion-gold-dark font-bold uppercase tracking-wider">
              Prayagraj Secretariat &bull; Jai Hind
            </span>
          </div>
        </div>
      </div>

      {/* 3. Accessible Full-Screen Lightbox Modal */}
      {lightboxScanUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Inspect Official Testimonial Decree"
          onClick={() => setLightboxScanUrl(null)}
          className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 bg-obsidian/85 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between bg-porcelain">
              <div className="flex items-center space-x-2 truncate pr-4">
                <Quote className="w-4 h-4 text-lion-gold-dark shrink-0" />
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

            {/* Modal Image Body */}
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

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-border bg-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate text-[11px]">
                Official Testimonial Document Scan &bull; Certified by KSF Secretariat
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
                  download="ksf-official-testimonial-scan.jpg"
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
    </section>
  );
}
