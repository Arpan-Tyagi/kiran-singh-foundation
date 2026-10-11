import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Award, Landmark, ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { MEMORIAL_RECORDS } from "@/lib/data/foundation-data";

export default function MemorialSection() {
  return (
    <section id="memorial" className="py-20 md:py-28 px-4 md:px-8 bg-porcelain relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-border">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase mb-4 font-semibold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Sacred Memorial & Archival Record</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian font-normal uppercase leading-tight">
              Late Kiran Singh <span className="italic text-lion-gold font-light">ji</span>
            </h2>
            <p className="mt-4 text-slate text-base sm:text-lg leading-relaxed font-sans">
              Doctoral ethologist, zoological analyst, and institutional architect of modern predator care.
              Her pioneering research into the psychology and conditioning of apex felids at Arignar Anna
              Zoological Park (AAZP Vandalur) established the scientific principles of discipline and humane
              stewardship that anchor our foundation today.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end text-left md:text-right">
            <span className="font-mono text-xs uppercase tracking-widest text-slate font-medium">
              Institutional Motto
            </span>
            <span className="font-serif text-xl sm:text-2xl text-lion-gold italic font-semibold mt-1">
              &ldquo;A Journey from struggle to Enlightenment&rdquo;
            </span>
            <span className="text-xs font-mono text-slate mt-1">
              Trust registered under Indian Trust Act of 1882 &bull; &ldquo;Working Towards Change&rdquo;
            </span>
          </div>
        </div>

        {/* Archival Memorial Tribute: Authentic Portrait & Historical Mandate */}
        <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 md:p-12 shadow-elevation-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Authentic Portrait of Late Kiran Singh ji */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[340px] aspect-[9/14] rounded-2xl overflow-hidden border-2 border-lion-gold/40 shadow-elevation-card p-1.5 bg-gradient-to-b from-lion-gold/30 via-white to-border group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-porcelain">
                  <Image
                    src="/images/memorial-founder.jpg"
                    alt="Late Kiran Singh ji - Sacred Memory & Founder"
                    fill
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-[10px] font-mono tracking-widest uppercase text-obsidian font-semibold shadow-sm">
                      Founder in Sacred Memory
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                  Late Kiran Singh <span className="font-serif italic font-normal text-lion-gold text-lg">ji</span>
                </h3>
                <p className="text-[11px] font-mono text-slate tracking-wider uppercase mt-1">
                  Ph.D. Ethologist &bull; AAZP Vandalur Analyst &bull; Foundational Pillar
                </p>
              </div>
            </div>

            {/* Historical Mandate & State Advisory Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-lion-gold/15 text-lion-gold-dark text-[10px] font-mono uppercase tracking-widest font-semibold border border-lion-gold/30">
                  Doctoral Ethology Record
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate text-[10px] font-mono uppercase tracking-widest font-medium border border-border">
                  AAZP Vandalur &bull; Chennai
                </span>
                <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 text-botanical-emerald text-[10px] font-mono uppercase tracking-widest font-semibold border border-botanical-emerald/25">
                  Govt of Tamil Nadu Alignment
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-obsidian leading-tight">
                  A Legacy of Dignity, Science, and <span className="italic text-lion-gold font-light">Compassionate Protection</span>
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate leading-relaxed font-sans">
                  Established in sacred memory of <strong className="text-obsidian font-semibold">Late Kiran Singh ji</strong>.
                  Earning her Ph.D. specializing in the behavioral science, training, and conditioning of apex felids (lions, tigers, and leopards),
                  her analytical tenure at the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai) transformed
                  zoological care into humane behavioral science.
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate leading-relaxed font-sans">
                  Working in close advisory alignment with the then Chief Minister of Tamil Nadu, Late J. Jayalalithaa ("Amma"),
                  her scientific rigor and protective discipline now animate our two operational wings: providing 40 sponsored scholars with
                  executive leadership coaching and sheltering 34 rescued street dogs in Chennai.
                </p>
              </div>

              {/* Architectural Milestone Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-porcelain border border-border">
                  <div className="text-[10px] font-mono uppercase text-slate font-medium">Academic Credentials</div>
                  <div className="font-serif text-sm font-bold text-obsidian mt-0.5">Ph.D. Apex Felids</div>
                </div>
                <div className="p-3 rounded-xl bg-porcelain border border-border">
                  <div className="text-[10px] font-mono uppercase text-slate font-medium">Zoological Role</div>
                  <div className="font-serif text-sm font-bold text-obsidian mt-0.5">Analyst, AAZP Vandalur</div>
                </div>
                <div className="p-3 rounded-xl bg-porcelain border border-border col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono uppercase text-slate font-medium">State Alignment</div>
                  <div className="font-serif text-sm font-bold text-obsidian mt-0.5">Late J. Jayalalithaa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetrical Monograph Timeline & State Advisory Highlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Column: Monograph Timeline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative border-l-2 border-lion-gold/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
              {MEMORIAL_RECORDS.map((record, index) => {
                const icons = [BookOpen, Award, Landmark];
                const IconComponent = icons[index] || BookOpen;

                return (
                  <div key={record.id} className="relative group">
                    {/* Accession Reference Timeline Node */}
                    <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-lion-gold flex items-center justify-center text-lion-gold-dark shadow-sm group-hover:bg-lion-gold group-hover:text-white transition-colors duration-160">
                      <span className="font-mono text-[10px] font-bold">0{index + 1}</span>
                    </div>

                    <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-card hover:border-lion-gold/50 transition-all duration-300 space-y-5">
                      {/* Header with Accession Reference Stamp */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark font-mono text-[10px] font-semibold tracking-wider uppercase">
                          <span className="font-bold">§</span>
                          <span>ACCESSION REF // {record.archivalDocumentRef}</span>
                        </div>
                        <span className="font-mono text-xs text-slate px-3 py-1 rounded-full bg-slate-50 border border-border font-medium">
                          {record.period}
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-mono text-lion-gold-dark font-medium mb-1">
                          {record.institution}
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-obsidian leading-snug">
                          {record.title}
                        </h3>
                        <div className="text-[11px] font-mono text-slate mt-1">
                          Discipline: <span className="text-obsidian font-medium">{record.researchDiscipline}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                        {record.detailedNarrative}
                      </p>

                      {/* Public Service Impact */}
                      <div className="p-4 rounded-xl bg-slate-50/80 border border-border/80 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-slate flex items-center space-x-1.5 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-botanical-emerald shrink-0" />
                          <span>Public Service Impact</span>
                        </div>
                        <p className="text-xs text-obsidian leading-relaxed font-sans">
                          {record.advisoryAlignment}
                        </p>
                      </div>

                      {/* Sources / Citations Footnote */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-slate border-t border-border/60">
                        <span className="text-lion-gold-dark font-medium flex items-center space-x-1">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{record.citations.length} Primary Archival Citations</span>
                        </span>
                        <span className="text-slate/60 text-[10px] uppercase tracking-wider">
                          Verified Monograph
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side Column: State Advisory Highlight Panel */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white border-2 border-lion-gold/30 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
              {/* Archival Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                <span>State Advisory Highlight</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-obsidian leading-tight">
                  Zoological Authority &amp; Ministerial Alignment
                </h3>
                <p className="text-xs font-mono text-slate mt-1">
                  AAZP Vandalur &bull; Office of the Chief Minister
                </p>
              </div>

              {/* Quote Block */}
              <div className="p-4 rounded-2xl bg-porcelain border border-border relative">
                <p className="font-serif italic text-sm sm:text-base text-obsidian leading-relaxed">
                  "Late J. Jayalalithaa ji commended her disciplined methodology, her pioneering scientific contributions to large felid psychology at AAZP Vandalur, and her commitment to public welfare, inspiring the core philosophy: &lsquo;Working Towards Change&rsquo;."
                </p>
                <div className="mt-3 text-[11px] font-mono text-lion-gold-dark font-semibold uppercase tracking-wider">
                  — State Governance Commendation (2004)
                </div>
              </div>

              {/* Advisory Pillars */}
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-border">
                  <div className="font-sans font-semibold text-xs text-obsidian">
                    1. Felid Ethology at AAZP Vandalur
                  </div>
                  <p className="text-[11px] text-slate font-sans mt-0.5 leading-relaxed">
                    Pioneered safari corridor enrichment and operant conditioning that reduced resident predator pacing distress by over 60%.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-border">
                  <div className="font-sans font-semibold text-xs text-obsidian">
                    2. Consultative Alignment with Late CM J. Jayalalithaa ("Amma")
                  </div>
                  <p className="text-[11px] text-slate font-sans mt-0.5 leading-relaxed">
                    Shaped humane urban stray animal policies, modern zoo enclosures, and the veterinary modernization roadmap.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-border">
                  <div className="font-sans font-semibold text-xs text-obsidian">
                    3. Continuity into 40 Scholars &amp; 34 Canines
                  </div>
                  <p className="text-[11px] text-slate font-sans mt-0.5 leading-relaxed">
                    The same scientific discipline directly empowers our dual operational wings today without institutional drift.
                  </p>
                </div>
              </div>

              {/* Archival Accession Stamp */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
                <span className="font-medium text-obsidian">§ ARCH-TNGov-CM-2004-KS-07</span>
                <span className="text-botanical-emerald font-semibold uppercase tracking-wider text-[10px]">
                  Verified Archive
                </span>
              </div>
            </div>
          </div>
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
