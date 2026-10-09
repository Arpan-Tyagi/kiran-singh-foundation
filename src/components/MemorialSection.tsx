import React from "react";
import Link from "next/link";
import { BookOpen, Award, Landmark, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { MEMORIAL_RECORDS } from "@/lib/data/foundation-data";

export default function MemorialSection() {
  return (
    <section id="memorial" className="py-20 md:py-28 px-4 md:px-8 bg-porcelain relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-border">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase mb-4 font-semibold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Sacred Memorial & Archival Record</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian font-normal uppercase leading-tight">
              Late Kiran Singh <span className="italic text-lion-gold font-light">ji</span>
            </h2>
            <p className="mt-4 text-slate text-base sm:text-lg leading-relaxed font-sans">
              Ethologist, zoological analyst, and lifelong champion of the voiceless. His pioneering doctoral
              research into apex felids laid the scientific foundation for our contemporary student incubation and canine welfare wings.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-slate font-medium">
              Institutional Motto
            </span>
            <span className="font-serif text-xl sm:text-2xl text-lion-gold italic font-semibold mt-1">
              "Working towards Change"
            </span>
            <span className="text-xs font-mono text-slate mt-1">
              AAZP Vandalur &bull; Govt of Tamil Nadu Alignment
            </span>
          </div>
        </div>

        {/* 3 Core Historical Milestones Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {MEMORIAL_RECORDS.map((record, index) => {
            const icons = [BookOpen, Award, Landmark];
            const IconComponent = icons[index] || BookOpen;

            return (
              <div
                key={record.id}
                className="bg-white border border-border rounded-2xl p-6 sm:p-7 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-lion-gold/10 border border-lion-gold/20 flex items-center justify-center text-lion-gold-dark">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate px-3 py-1 rounded-full bg-slate-50 border border-border">
                      {record.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-obsidian leading-snug mb-2">
                    {record.title}
                  </h3>

                  <div className="text-xs font-mono text-lion-gold-dark font-medium mb-4">
                    {record.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mb-6">
                    {record.detailedNarrative}
                  </p>
                </div>

                {/* Advisory Alignment & Citations Card */}
                <div className="pt-4 border-t border-border mt-auto space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-border/80">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate flex items-center space-x-1.5 mb-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-botanical-emerald" />
                      <span>Public Service Impact</span>
                    </div>
                    <p className="text-xs text-obsidian leading-relaxed font-sans">
                      {record.advisoryAlignment}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate pt-1">
                    <span>Ref: {record.archivalDocumentRef}</span>
                    <span className="text-lion-gold-dark font-medium">{record.citations.length} Verified Sources</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Archival Excerpt Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-border shadow-elevation-1 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-lion-gold-dark" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-obsidian">
                Explore the Complete Academic & Governmental Archive
              </h4>
              <p className="text-xs sm:text-sm text-slate mt-0.5">
                Review verified Tamil Nadu Zoo Authority records, apex felid ethology papers, and ministerial citations.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="group whitespace-nowrap inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-obsidian text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors shadow-sm"
          >
            <span>Read Institutional Memoir</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-lion-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
