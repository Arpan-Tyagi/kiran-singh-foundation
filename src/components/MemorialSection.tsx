import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Award, Landmark, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { MEMORIAL_RECORDS } from "@/lib/data/foundation-data";

export default function MemorialSection() {
  return (
    <section id="memorial" className="py-24 md:py-32 px-4 md:px-8 bg-obsidian relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-parchment/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold text-[10px] font-mono tracking-widest uppercase mb-4">
              <Landmark className="w-3.5 h-3.5" />
              <span>Sacred Memorial & Archival Record</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-parchment font-normal uppercase leading-tight">
              Late Kiran Singh <span className="italic text-lion-gold font-light">ji</span>
            </h2>
            <p className="mt-4 text-parchment-muted text-base sm:text-lg leading-relaxed">
              Ethologist, zoological analyst, and lifelong champion of the voiceless. His pioneering doctoral
              research into apex felids laid the scientific foundation for our contemporary student and canine welfare wings.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-parchment-dim">
              Institutional Motto
            </span>
            <span className="font-serif text-xl sm:text-2xl text-lion-gold italic font-medium mt-1">
              "Working towards Change"
            </span>
            <span className="text-xs font-mono text-parchment-dim mt-1">
              AAZP Vandalur &bull; Govt of Tamil Nadu Alignment
            </span>
          </div>
        </div>

        {/* 3 Core Historical Milestones in Double-Bezel Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MEMORIAL_RECORDS.map((record, index) => {
            const icons = [BookOpen, Award, Landmark];
            const IconComponent = icons[index] || BookOpen;

            return (
              <div key={record.id} className="bezel-card bezel-card-hover flex flex-col">
                <div className="bezel-card-inner flex flex-col justify-between">
                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lion-gold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-parchment-dim px-3 py-1 rounded-full bg-obsidian border border-parchment/10">
                        {record.period}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-parchment leading-snug mb-2">
                      {record.title}
                    </h3>

                    <div className="text-xs font-mono text-lion-gold mb-4">
                      {record.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans mb-6">
                      {record.detailedNarrative}
                    </p>
                  </div>

                  {/* Advisory Alignment & Citations Card */}
                  <div className="pt-4 border-t border-parchment/10 mt-auto space-y-3">
                    <div className="p-3 rounded-xl bg-obsidian/80 border border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-parchment-dim flex items-center space-x-1.5 mb-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Public Service Impact</span>
                      </div>
                      <p className="text-xs text-parchment leading-relaxed font-sans">
                        {record.advisoryAlignment}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-parchment-dim pt-1">
                      <span>Ref: {record.archivalDocumentRef}</span>
                      <span className="text-lion-gold">{record.citations.length} Verified Sources</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Archival Excerpt Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-charcoal/70 border border-parchment/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-lion-gold/20 border border-lion-gold/50 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-lion-gold" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-parchment">
                Explore the Complete Academic & Governmental Archive
              </h4>
              <p className="text-xs sm:text-sm text-parchment-muted mt-0.5">
                Review verified Tamil Nadu Zoo Authority records, apex felid ethology papers, and ministerial citations.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="group whitespace-nowrap inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-parchment text-xs font-mono uppercase tracking-wider hover:border-lion-gold hover:text-lion-gold transition-colors"
          >
            <span>Read Institutional Memoir</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
