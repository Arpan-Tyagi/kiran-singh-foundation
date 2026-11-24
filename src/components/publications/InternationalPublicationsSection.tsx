"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  User,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Download,
  FileText,
} from "lucide-react";
import {
  INTERNATIONAL_JOURNAL_PUBLICATIONS,
  InternationalJournalPublication,
} from "@/lib/data/international-publications-data";
import CertificateInspectionModal from "./CertificateInspectionModal";

export default function InternationalPublicationsSection() {
  const [activeModalPub, setActiveModalPub] =
    useState<InternationalJournalPublication | null>(null);
  const [initialAuthorIdx, setInitialAuthorIdx] = useState(0);

  const handleOpenCertificate = (
    pub: InternationalJournalPublication,
    authorIndex = 0
  ) => {
    setActiveModalPub(pub);
    setInitialAuthorIdx(authorIndex);
  };

  return (
    <section id="international-publications" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>External Peer-Reviewed Recognition</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian tracking-tight">
            International Journal <span className="italic font-light text-lion-gold-dark">Publications</span>
          </h2>
          <p className="text-sm text-slate font-sans leading-relaxed">
            Scholars and leadership of the Kiran Singh Foundation actively publish original empirical and
            socio-legal research in international peer-reviewed journals, validating our academic incubation culture.
          </p>
        </div>

        {/* Quick Link to Blogs Hub */}
        <Link
          href="/blogs?category=international_journal"
          className="text-xs font-mono text-lion-gold-dark hover:underline inline-flex items-center space-x-1.5 font-semibold shrink-0"
        >
          <span>View All in Blogs &amp; Research Hub</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Impact Metric Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-border shadow-elevation-1">
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-slate tracking-wider">Peer-Reviewed Papers</span>
          <div className="font-serif text-2xl font-bold text-obsidian">3 Papers</div>
          <div className="text-[11px] text-slate font-sans">24 Pages Verbatim Digitized</div>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-slate tracking-wider">Published Authors</span>
          <div className="font-serif text-2xl font-bold text-lion-gold-dark">8 Authors</div>
          <div className="text-[11px] text-slate font-sans">6 Scholars &bull; 2 Trustees</div>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-slate tracking-wider">Journal Registry</span>
          <div className="font-mono text-xl font-bold text-obsidian">ISSN: 2583-6633</div>
          <div className="text-[11px] text-slate font-sans">CODEN: KRABAU &bull; Refereed</div>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-slate tracking-wider">Issuing Authority</span>
          <div className="font-serif text-lg font-bold text-obsidian truncate">SAFE Society</div>
          <div className="text-[11px] text-slate font-sans">Vol. 5 No. 10 (Oct 2026)</div>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {INTERNATIONAL_JOURNAL_PUBLICATIONS.map((pub) => (
          <div
            key={pub.id}
            className="group bg-white rounded-3xl border border-border p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Certificate Image Preview */}
              <div
                onClick={() => handleOpenCertificate(pub, 0)}
                className="relative h-48 w-full rounded-2xl overflow-hidden border border-border bg-slate-50 cursor-pointer group-hover:border-lion-gold/40 transition-colors"
              >
                <Image
                  src={pub.coverImageUrl}
                  alt={pub.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-lion-gold/40 text-lion-gold-dark text-[10px] font-mono flex items-center space-x-1 shadow-sm font-semibold">
                  <ShieldCheck className="w-3 h-3 text-lion-gold-dark" />
                  <span>ISSN: {pub.issn}</span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-obsidian/90 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-wider flex items-center space-x-1.5">
                  <span>Vol. 5 No. 10</span>
                  <span>&bull;</span>
                  <span className="text-lion-gold">{pub.pages || "Refereed"}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-obsidian leading-snug group-hover:text-lion-gold-dark transition-colors line-clamp-2">
                {pub.title}
              </h3>

              {/* Co-Authors List */}
              <div className="space-y-1.5 pt-1">
                <span className="font-mono text-[10px] uppercase text-slate tracking-wider block">
                  Published Authors:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pub.authors.map((author, aIdx) => (
                    <button
                      key={aIdx}
                      onClick={() => handleOpenCertificate(pub, aIdx)}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-lion-gold/15 border border-border text-[11px] font-mono text-obsidian hover:text-lion-gold-dark transition-colors"
                      title={`Inspect certificate for ${author.name}`}
                    >
                      <User className="w-3 h-3 text-lion-gold-dark" />
                      <span>{author.name}</span>
                      {author.scholarId && (
                        <span className="text-[9px] text-slate opacity-75">
                          ({author.scholarId})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Abstract Excerpt */}
              <p className="text-xs text-slate font-sans leading-relaxed line-clamp-3">
                {pub.abstract}
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono">
              <button
                onClick={() => handleOpenCertificate(pub, 0)}
                className="text-lion-gold-dark hover:underline font-semibold flex items-center space-x-1"
              >
                <span>Certificates ({pub.authors.length})</span>
              </button>
              <div className="flex items-center space-x-2">
                <a
                  href={pub.pdfDownloadUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-lion-gold/20 text-obsidian hover:text-lion-gold-dark font-medium transition-colors inline-flex items-center space-x-1 shadow-sm"
                  title="Download Official 24-Page Journal PDF Report"
                >
                  <Download className="w-3.5 h-3.5 text-lion-gold-dark" />
                  <span>PDF</span>
                </a>
                <Link
                  href={`/blogs/${pub.slug}`}
                  className="px-2.5 py-1 rounded-lg bg-obsidian text-white hover:bg-lion-gold hover:text-obsidian font-medium transition-colors inline-flex items-center space-x-1 shadow-sm"
                  title="Read complete manuscript online"
                >
                  <BookOpen className="w-3.5 h-3.5 text-lion-gold" />
                  <span>Read</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <CertificateInspectionModal
        isOpen={!!activeModalPub}
        onClose={() => setActiveModalPub(null)}
        publication={activeModalPub}
        initialAuthorIndex={initialAuthorIdx}
      />
    </section>
  );
}
