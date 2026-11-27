"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Newspaper,
  ExternalLink,
  ZoomIn,
  X,
  Award,
  BookOpen,
  Download,
  ArrowUpRight,
  Calendar,
  MapPin,
  ShieldCheck,
  Sparkles,
  FileText,
} from "lucide-react";
import { AMAR_UJALA_CONSTITUTION_DAY_2026 } from "@/lib/data/press-coverage-data";
import { INTERNATIONAL_JOURNAL_PUBLICATIONS } from "@/lib/data/international-publications-data";

export default function MediaAndPublicationsShowcase() {
  const press = AMAR_UJALA_CONSTITUTION_DAY_2026;
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  return (
    <section
      id="press-and-published-papers"
      className="py-16 md:py-24 px-4 md:px-8 bg-stone-50/70 border-t border-border scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Print Media Coverage &amp; Published Scholarship</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-obsidian tracking-tight leading-tight">
              In the Press &amp;{" "}
              <span className="italic text-lion-gold-dark font-light">
                Published Papers
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
              Verified regional print coverage in{" "}
              <strong className="text-obsidian font-semibold">Amar Ujala</strong>{" "}
              alongside our peer-reviewed research papers published in international refereed journals (
              <span className="font-mono text-obsidian font-medium">ISSN: 2583-6633</span>).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={press.epaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-obsidian text-white hover:bg-stone-800 text-xs font-mono font-semibold inline-flex items-center space-x-1.5 shadow-sm transition-colors"
            >
              <span>Amar Ujala ePaper</span>
              <ExternalLink className="w-3.5 h-3.5 text-lion-gold" />
            </a>
            <Link
              href="/blogs"
              className="px-4 py-2 rounded-full bg-white border border-border hover:border-lion-gold/50 text-obsidian text-xs font-mono font-semibold inline-flex items-center space-x-1.5 shadow-2xs transition-colors"
            >
              <span>All Publications</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold-dark" />
            </Link>
          </div>
        </div>

        {/* Double-Bezel Feature Grid: Left Press Feature + Right Published Research Papers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 1. LEFT (7 Cols): Amar Ujala Prayagraj Newspaper Coverage */}
          <div className="lg:col-span-7 p-2 sm:p-3 rounded-[2rem] bg-black/5 ring-1 ring-lion-gold/25 shadow-elevation-1">
            <div className="rounded-[calc(2rem-0.625rem)] bg-white p-5 sm:p-7 space-y-6">
              {/* Press Outlet Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="px-3 py-1 rounded-full bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-[10px] font-mono uppercase tracking-wider font-bold">
                    {press.outletName} ({press.outletHindiName}) &bull; {press.edition}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-botanical-emerald/10 text-botanical-emerald text-[10px] font-mono font-semibold">
                    {press.publicationDateFormatted}
                  </span>
                </div>

                <a
                  href={press.epaperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-lion-gold-dark hover:underline inline-flex items-center space-x-1 font-semibold"
                >
                  <span>Original ePaper Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Bilingual Headline & Context */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian leading-snug">
                  &ldquo;{press.headlineHindi}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm font-mono text-lion-gold-dark font-semibold">
                  {press.headlineEnglish}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate pt-1">
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-lion-gold-dark" />
                    <span>Event Held: {press.eventDateFormatted}</span>
                  </span>
                  <span>&bull;</span>
                  <span className="inline-flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-crimson-alert" />
                    <span>Prayagraj</span>
                  </span>
                </div>
              </div>

              {/* Side-by-Side Images: ePaper Clipping + Ceremony Photo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      url: press.clippingImageUrl,
                      title: `${press.outletName} Prayagraj City (${press.publicationDateFormatted})`,
                      subtitle: press.headlineHindi,
                    })
                  }
                  className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-slate-50 shadow-sm text-left"
                >
                  <Image
                    src={press.clippingImageUrl}
                    alt={`${press.outletName} newspaper coverage: ${press.headlineHindi}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 35vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent flex items-end justify-between p-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Amar Ujala Clipping (27/11/26)
                    </span>
                    <span className="p-1.5 rounded-full bg-white/90 text-obsidian shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      url: press.ceremonyPhotoUrl,
                      title: "Constitution Day Memento Felicitation (26 Nov 2026)",
                      subtitle: press.photoCaptionEnglish,
                    })
                  }
                  className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-slate-50 shadow-sm text-left"
                >
                  <Image
                    src={press.ceremonyPhotoUrl}
                    alt={press.photoCaptionEnglish}
                    fill
                    sizes="(max-width: 640px) 100vw, 35vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent flex items-end justify-between p-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Anuj Kr. Singh &amp; Alpana Dey
                    </span>
                    <span className="p-1.5 rounded-full bg-white/90 text-obsidian shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              </div>

              {/* Event Summary & Key Figures */}
              <div className="p-4 rounded-2xl bg-porcelain border border-border/80 space-y-3 text-xs font-sans text-slate leading-relaxed">
                <p>{press.summaryEnglish}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-border/70">
                  {press.keyPeople.map((person, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-border/70 text-[11px]"
                    >
                      <strong className="text-obsidian font-serif block">
                        {person.name}
                      </strong>
                      <span className="text-slate font-mono text-[10px]">
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Press Footer Links */}
              <div className="pt-2 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <Link
                  href={`/blogs/${press.blogSlug}`}
                  className="px-4 py-2 rounded-full bg-lion-gold hover:bg-lion-gold-light text-obsidian font-semibold inline-flex items-center space-x-1.5 shadow-2xs transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Bilingual Dispatch</span>
                </Link>
                <a
                  href={press.epaperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-obsidian inline-flex items-center space-x-1 font-medium"
                >
                  <span>Verify on epaper.amarujala.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold-dark" />
                </a>
              </div>
            </div>
          </div>

          {/* 2. RIGHT (5 Cols): Published Peer-Reviewed Research Papers */}
          <div className="lg:col-span-5 bg-white border border-border rounded-[2rem] p-6 sm:p-7 shadow-elevation-card space-y-6">
            <div className="space-y-2 border-b border-border pb-4">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Published Research Papers</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-[10px] font-mono font-bold text-lion-gold-dark">
                  ISSN: 2583-6633
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian leading-snug">
                Peer-Reviewed Journal &amp; Scholar Publications
              </h3>
              <p className="text-xs text-slate font-sans leading-relaxed">
                Alongside regional press recognition, 8 KSF authors have published empirical socio-legal papers in{" "}
                <strong className="text-obsidian">Knowledgeable Research</strong> (Vol. 5, No. 10 &bull; Oct 2026 &bull; SAFE Society).
              </p>
            </div>

            {/* List of All 3 Published International Journal Papers */}
            <div className="space-y-3.5">
              {INTERNATIONAL_JOURNAL_PUBLICATIONS.map((pub, idx) => (
                <div
                  key={pub.id}
                  className="p-4 rounded-2xl bg-porcelain/80 border border-border/80 hover:border-lion-gold/50 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-obsidian text-lion-gold font-bold">
                      Paper 0{idx + 1} &bull; {pub.pages || "Refereed"}
                    </span>
                    <span className="text-botanical-emerald-dark font-semibold inline-flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>ISSN {pub.issn}</span>
                    </span>
                  </div>

                  <Link
                    href={`/blogs/${pub.slug}`}
                    className="font-serif text-sm font-bold text-obsidian hover:text-lion-gold-dark transition-colors leading-snug block line-clamp-2"
                  >
                    {pub.title}
                  </Link>

                  <p className="text-[11px] font-mono text-slate line-clamp-1">
                    {pub.authors.map((a) => a.name).join(", ")}
                  </p>

                  <div className="pt-2 border-t border-border/70 flex items-center justify-between gap-2 text-[11px] font-mono">
                    <Link
                      href={`/blogs/${pub.slug}`}
                      className="text-lion-gold-dark hover:underline font-semibold inline-flex items-center space-x-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Read Full Paper</span>
                    </Link>
                    <a
                      href={pub.pdfDownloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white border border-border hover:border-lion-gold/50 text-obsidian inline-flex items-center space-x-1 font-medium shadow-2xs"
                    >
                      <Download className="w-3 h-3 text-lion-gold-dark" />
                      <span>PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Hub Links */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-obsidian to-stone-900 text-white space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-lion-gold font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complete Academic Library</span>
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                Explore our 3 ISSN journal papers, student team research decrees (KSF/DISC/2026/093–097), and 5 independent scholar monographs.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/wings/students#international-publications"
                  className="px-3.5 py-2 rounded-xl bg-lion-gold hover:bg-lion-gold-light text-obsidian text-[11px] font-mono font-bold transition-colors inline-flex items-center space-x-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Inspect Certificates</span>
                </Link>
                <Link
                  href="/blogs?category=scholar_monograph"
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono font-medium transition-colors inline-flex items-center space-x-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-lion-gold" />
                  <span>Student Monographs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox for Newspaper Clipping & Ceremony Photo */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between bg-porcelain gap-3">
              <div className="min-w-0">
                <span className="font-serif text-sm sm:text-base font-bold text-obsidian block truncate">
                  {lightboxImage.title}
                </span>
                <span className="text-[11px] font-mono text-slate block truncate">
                  {lightboxImage.subtitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close press lightbox"
                className="w-10 h-10 rounded-full bg-white border border-border hover:bg-slate-100 flex items-center justify-center text-obsidian shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-grow flex items-center justify-center bg-stone-100/70">
              <div className="relative w-full h-[68vh] sm:h-[74vh]">
                <Image
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="px-5 py-3 border-t border-border bg-white flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <a
                href={press.epaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lion-gold-dark hover:underline inline-flex items-center space-x-1 font-semibold"
              >
                <span>Open Amar Ujala ePaper Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={lightboxImage.url}
                download
                className="px-3.5 py-1.5 rounded-full bg-obsidian text-white hover:bg-stone-800 inline-flex items-center space-x-1.5 font-medium"
              >
                <Download className="w-3.5 h-3.5 text-lion-gold" />
                <span>Download Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
