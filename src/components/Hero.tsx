import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, PhoneCall, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lion-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-emerald-sanctuary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-crimson-alert/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Heraldic Emblem Circular Seal */}
        <div className="relative group mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-b from-lion-gold/60 via-lion-gold/20 to-transparent shadow-gold-glow">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-obsidian border border-lion-gold/40 flex items-center justify-center">
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
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-slate-charcoal border border-lion-gold/40 text-[10px] font-mono tracking-widest uppercase text-lion-gold shadow-lg">
            Est. Sacred Memory &bull; 1994
          </div>
        </div>

        {/* Eyebrow tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-parchment/10 text-parchment-muted text-xs font-mono tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-lion-gold" />
          <span>Institutional Ethology &bull; Human-Animal Welfare Grid</span>
        </div>

        {/* Display Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-parchment uppercase leading-[1.05] max-w-5xl">
          Kiran Singh <br />
          <span className="italic font-light text-lion-gold">Foundation</span>
        </h1>

        {/* Motto & Mandate Excerpt */}
        <p className="mt-4 font-mono text-sm sm:text-base md:text-lg text-lion-gold/90 tracking-widest uppercase font-medium">
          "Working towards Change"
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-parchment-muted font-sans font-normal leading-relaxed">
          Founded in eternal homage to <strong className="text-parchment">Late Kiran Singh ji</strong>—doctoral
          specialist in apex felid ethology and Analyst at Tamil Nadu Zoo Authority (AAZP Vandalur).
          Sustaining <span className="text-parchment font-semibold">40 sponsored scholars</span> and sheltering{" "}
          <span className="text-parchment font-semibold">34 rescued street dogs</span> through an interconnected mutual-aid grid.
        </p>

        {/* CTA Buttons with "Button-in-Button" Nested Architecture */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <Link
            href="/#wings"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-lion-gold text-obsidian font-sans font-semibold text-sm hover:bg-lion-gold-light active:scale-[0.98] transition-all duration-300 shadow-lg shadow-lion-gold/20"
          >
            <span>Explore Dual Operational Wings</span>
            <div className="w-9 h-9 rounded-full bg-obsidian/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:bg-obsidian group-hover:text-parchment transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-obsidian group-hover:text-lion-gold" />
            </div>
          </Link>

          {/* Secondary CTA: Memorial Archive */}
          <Link
            href="/about"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-slate-charcoal border border-parchment/15 text-parchment font-sans font-medium text-sm hover:border-lion-gold/40 hover:bg-slate-charcoal-light active:scale-[0.98] transition-all duration-300"
          >
            <span>Founder Memorial Archive</span>
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-parchment-muted group-hover:text-parchment" />
            </div>
          </Link>

          {/* Emergency Lifeline CTA */}
          <Link
            href="/emergency"
            className="group relative inline-flex items-center space-x-3 px-5 py-3 rounded-full bg-crimson-alert/15 border border-crimson-alert/30 text-red-200 font-mono text-xs uppercase tracking-wider hover:bg-crimson-alert/25 hover:border-crimson-alert transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>24/7 Emergency Dispatch</span>
          </Link>
        </div>

        {/* Live Institutional Counters with Double-Bezel Architecture */}
        <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: Scholars */}
          <div className="bezel-card bezel-card-hover text-left">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-widest text-parchment-dim">
                Wing A &bull; Scholars
              </div>
              <div className="my-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-parchment">
                  40
                </span>
                <span className="text-lion-gold text-lg font-serif ml-1">Active</span>
              </div>
              <p className="text-xs text-parchment-muted">
                100% funded soft skills incubation & pro bono internships
              </p>
            </div>
          </div>

          {/* Card 2: Dogs */}
          <div className="bezel-card bezel-card-hover text-left">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-widest text-parchment-dim">
                Wing B &bull; Resident Dogs
              </div>
              <div className="my-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-parchment">
                  34
                </span>
                <span className="text-emerald-400 text-lg font-serif ml-1">Sheltered</span>
              </div>
              <p className="text-xs text-parchment-muted">
                100% vaccinated (Rabies + Boosters), medical housing
              </p>
            </div>
          </div>

          {/* Card 3: Endowed Funding */}
          <div className="bezel-card bezel-card-hover text-left">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-widest text-parchment-dim">
                Care Endowment
              </div>
              <div className="my-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-parchment">
                  100%
                </span>
                <span className="text-lion-gold text-lg font-serif ml-1">Direct</span>
              </div>
              <p className="text-xs text-parchment-muted">
                Zero administrative cuts taken from scholar/canine funds
              </p>
            </div>
          </div>

          {/* Card 4: Crisis Response */}
          <div className="bezel-card bezel-card-hover text-left">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-widest text-parchment-dim">
                Mutual-Aid Grid
              </div>
              <div className="my-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-parchment">
                  24/7
                </span>
                <span className="text-red-400 text-lg font-serif ml-1">Live</span>
              </div>
              <p className="text-xs text-parchment-muted">
                Immediate WhatsApp & email dispatch during emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
