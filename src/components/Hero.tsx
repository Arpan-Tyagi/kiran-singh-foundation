import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-porcelain">
      {/* Architectural hairline grid framing and archival coordinates */}
      <div className="absolute inset-0 pointer-events-none border-x border-border/40 max-w-7xl mx-auto" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent pointer-events-none" />
      <div className="absolute top-6 left-8 hidden lg:block font-mono text-[9px] text-slate/50 uppercase tracking-widest select-none pointer-events-none">
        GRID REF // 12.8797° N, 80.0811° E (AAZP)
      </div>
      <div className="absolute top-6 right-8 hidden lg:block font-mono text-[9px] text-slate/50 uppercase tracking-widest select-none pointer-events-none">
        INSTITUTIONAL ARCHIVE &bull; EST. 1994
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Heraldic Emblem Circular Seal */}
        <div className="relative group mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-b from-lion-gold/40 via-lion-gold/15 to-border shadow-elevation-card">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white border border-border flex items-center justify-center shadow-inner">
              <Image
                src="/images/logo.png"
                alt="Kiran Singh Foundation Heraldic Seal - Roaring Male Lion"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover object-[center_20%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
              />
            </div>
          </div>
          {/* Micro-badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-white border border-border text-[10px] font-mono tracking-widest uppercase text-lion-gold-dark font-semibold shadow-sm">
            Est. Sacred Memory &bull; 1994
          </div>
        </div>

        {/* Eyebrow tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-border text-slate text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-lion-gold-dark" aria-hidden="true" strokeWidth={1.5} />
          <span>Institutional Ethology &bull; Human-Animal Welfare Grid</span>
        </div>

        {/* Display Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-obsidian uppercase leading-[1.05] max-w-5xl">
          Kiran Singh <br />
          <span className="italic font-light text-lion-gold">Foundation</span>
        </h1>

        {/* Motto & Mandate Excerpt */}
        <p className="mt-4 font-mono text-sm sm:text-base md:text-lg text-lion-gold-dark tracking-widest uppercase font-semibold">
          "Working towards Change"
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate font-sans font-normal leading-relaxed">
          Founded in sacred memory of <strong className="text-obsidian font-semibold">Late Kiran Singh ji</strong>—doctoral
          specialist in apex felid ethology and Analyst at Tamil Nadu Zoo Authority (AAZP Vandalur).
          Directly sponsoring <span className="text-obsidian font-semibold">40 scholars</span> and sheltering{" "}
          <span className="text-obsidian font-semibold">34 rescued street dogs</span> through an interconnected mutual-aid community.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary CTA */}
          <Link
            href="/#wings"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-lion-gold text-white font-sans font-semibold text-sm hover:bg-lion-gold-dark active:scale-[0.97] transition-transform duration-160 ease-out shadow-gold-glow"
          >
            <span>Explore Dual Operational Wings</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-lion-gold transition-all duration-160">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-lion-gold" aria-hidden="true" strokeWidth={1.5} />
            </div>
          </Link>

          {/* Secondary CTA: Memorial Archive */}
          <Link
            href="/about"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-white border border-border text-obsidian font-sans font-medium text-sm hover:border-lion-gold/50 hover:bg-slate-50 active:scale-[0.97] transition-transform duration-160 ease-out shadow-sm"
          >
            <span>Founder Memorial Archive</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-160">
              <ArrowUpRight className="w-4 h-4 text-slate group-hover:text-obsidian" aria-hidden="true" strokeWidth={1.5} />
            </div>
          </Link>

          {/* Emergency Lifeline CTA */}
          <Link
            href="/emergency"
            className="group relative inline-flex items-center space-x-2.5 px-5 py-3 rounded-full bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert font-mono text-xs uppercase tracking-wider font-semibold hover:bg-crimson-alert/15 active:scale-[0.97] transition-transform duration-160 ease-out shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-crimson-alert animate-ping" aria-hidden="true" />
            <span>24/7 Emergency Dispatch</span>
          </Link>
        </div>

        {/* Live Institutional Impact Counters */}
        <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {/* Card 1: Scholars */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate font-semibold">
              Wing A &bull; Scholars
            </div>
            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                40
              </span>
              <span className="text-lion-gold-dark text-base sm:text-lg font-serif ml-1.5 font-medium">Active</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              100% funded soft skills incubation & pro bono internships
            </p>
          </div>

          {/* Card 2: Dogs */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-botanical-emerald/50 transition-all duration-300 flex flex-col justify-between">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate font-semibold">
              Wing B &bull; Resident Dogs
            </div>
            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                34
              </span>
              <span className="text-botanical-emerald text-base sm:text-lg font-serif ml-1.5 font-medium">Sheltered</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              100% vaccinated (Rabies + Boosters), medical housing
            </p>
          </div>

          {/* Card 3: Direct Care Endowment */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate font-semibold">
              Care Endowment
            </div>
            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                100%
              </span>
              <span className="text-lion-gold-dark text-base sm:text-lg font-serif ml-1.5 font-medium">Direct</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              Zero administrative cuts taken from scholar or canine care
            </p>
          </div>

          {/* Card 4: Mutual-Aid Grid */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-elevation-1 hover:shadow-elevation-card hover:border-crimson-alert/50 transition-all duration-300 flex flex-col justify-between">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate font-semibold">
              Mutual-Aid Grid
            </div>
            <div className="my-3">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                24/7
              </span>
              <span className="text-crimson-alert text-base sm:text-lg font-serif ml-1.5 font-medium">Live</span>
            </div>
            <p className="text-xs text-slate leading-relaxed">
              Immediate WhatsApp & email dispatch during emergencies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
