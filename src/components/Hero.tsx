import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOUNDATION_META } from "@/lib/data/foundation-data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-4 pb-16 md:pt-6 md:pb-24 px-4 md:px-8 overflow-hidden bg-porcelain">
      {/* Architectural hairline grid framing and archival coordinates */}
      <div className="absolute inset-0 pointer-events-none border-x border-border/40 max-w-7xl mx-auto" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent pointer-events-none" />
      <div className="absolute top-6 left-8 hidden lg:block font-mono text-[11px] text-slate/80 font-medium uppercase tracking-widest select-none pointer-events-none">
        GRID REF // 25.4358° N, 81.8463° E (PRAYAGRAJ)
      </div>
      <div className="absolute top-6 right-8 hidden lg:block font-mono text-[11px] text-slate/80 font-medium uppercase tracking-widest select-none pointer-events-none">
        INSTITUTIONAL ARCHIVE &bull; EST. 30TH APRIL 2023
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Heraldic Emblem Box */}
        <div className="relative group mb-8">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl p-2 bg-gradient-to-b from-lion-gold/40 via-lion-gold/15 to-border shadow-elevation-card">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center p-2 shadow-inner">
              <Image
                src="/images/logo.png"
                alt="Kiran Singh Foundation Heraldic Seal - Roaring Male Lion"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
          {/* Micro-badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-white border border-border text-[10px] font-mono tracking-widest uppercase text-lion-gold-dark font-semibold shadow-sm">
            Established &bull; {FOUNDATION_META.establishmentDate}
          </div>
        </div>

        {/* Eyebrow tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-1.5 rounded-full bg-white border border-border text-slate text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
          <span className="text-lion-gold-dark font-bold">§</span>
          <span>Trust registered under Indian Trust Act of 1882 &bull; PAN: AAGTK3961N &bull; CSR: CSR00110895</span>
        </div>

        {/* Display Title */}
        <h1 className="font-serif text-[clamp(2.25rem,8.5vw,5.5rem)] font-normal tracking-tight text-obsidian uppercase leading-[1.05] max-w-5xl">
          Kiran Singh <br />
          <span className="italic font-light text-lion-gold-dark">Foundation</span>
        </h1>

        {/* Motto & Tagline */}
        <div className="mt-4 flex flex-col items-center gap-1">
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-lion-gold-dark italic font-semibold">
            &ldquo;A Journey from struggle to Enlightenment&rdquo;
          </p>
          <p className="font-mono text-xs sm:text-sm text-slate tracking-widest uppercase font-semibold">
            &ldquo;Working Towards Change&rdquo;
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate font-sans font-normal leading-relaxed">
          Established in sacred memory of <strong className="text-obsidian font-semibold">Late Kiran Singh ji</strong>—honoring
          her doctoral scholarship in apex felid ethology and analytical service at Tamil Nadu Zoo Authority (AAZP Vandalur).
          Operating across <span className="text-obsidian font-semibold">4 Operational Wings</span> from Prayagraj (Secretariat: 191/C, Tilak Nagar Allahpur Prayagraj 211006), the foundation directly sponsors <span className="text-obsidian font-semibold">40 scholars across 4 research teams</span>, shelters <span className="text-obsidian font-semibold">34 rescued street dogs across 4 built shelter homes</span>, empowers rural students under <span className="text-obsidian font-semibold">Village Development</span>, and advances <span className="text-obsidian font-semibold">Women Empowerment</span> through career and investment summits.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary CTA */}
          <Link
            href="/#wings"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-lion-gold text-white font-sans font-semibold text-sm hover:bg-lion-gold-dark active:scale-[0.97] transition-all duration-160 ease-out shadow-gold-glow"
          >
            <span>Explore 4 Operational Wings</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-lion-gold-dark transition-all duration-160 ease-out">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-lion-gold-dark" aria-hidden="true" strokeWidth={1.5} />
            </div>
          </Link>

          {/* Secondary CTA: Memorial Archive */}
          <Link
            href="/about"
            className="group relative inline-flex items-center space-x-3 pl-6 pr-2 py-2 rounded-full bg-white border border-border text-obsidian font-sans font-medium text-sm hover:border-lion-gold/50 hover:bg-slate-50 active:scale-[0.97] transition-all duration-160 ease-out shadow-sm"
          >
            <span>Founder Memorial Archive</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:translate-x-0.5 transition-all duration-160 ease-out">
              <ArrowUpRight className="w-4 h-4 text-slate group-hover:text-obsidian" aria-hidden="true" strokeWidth={1.5} />
            </div>
          </Link>

          {/* Emergency Lifeline CTA */}
          <Link
            href="/emergency"
            className="group relative inline-flex items-center space-x-2.5 px-5 py-3 rounded-full bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert font-mono text-xs uppercase tracking-wider font-semibold hover:bg-crimson-alert/15 active:scale-[0.97] transition-all duration-160 ease-out shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-crimson-alert animate-ping" aria-hidden="true" />
            <span>24/7 Emergency Dispatch</span>
          </Link>
        </div>

        {/* Monolithic Masthead Ledger Bar */}
        <div className="mt-16 sm:mt-20 w-full bg-white border border-border rounded-2xl shadow-card overflow-hidden text-left font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cell 1: Scholars */}
            <div className="p-6 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-160 ease-out border-b lg:border-b-0 sm:border-r border-border">
              <div className="text-[10px] uppercase tracking-widest text-slate font-semibold flex items-center space-x-1.5">
                <span className="text-lion-gold-dark font-bold">§</span>
                <span>Wing A &bull; Student Welfare</span>
              </div>
              <div className="my-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                  40
                </span>
                <span className="text-lion-gold-dark text-xs sm:text-sm uppercase ml-1.5 font-semibold">Scholars / 4 Teams</span>
              </div>
              <p className="text-[11px] text-slate font-sans leading-relaxed">
                Psychometric selection, Summer &amp; Winter internships, plagiarism-audited research &amp; closing stipends
              </p>
            </div>

            {/* Cell 2: Dogs */}
            <div className="p-6 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-160 ease-out border-b lg:border-b-0 lg:border-r border-border">
              <div className="text-[10px] uppercase tracking-widest text-slate font-semibold flex items-center space-x-1.5">
                <span className="text-botanical-emerald font-bold">§</span>
                <span>Wing B &bull; Dog Welfare</span>
              </div>
              <div className="my-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                  34
                </span>
                <span className="text-botanical-emerald text-xs sm:text-sm uppercase ml-1.5 font-semibold">Dogs / 4 Shelters</span>
              </div>
              <p className="text-[11px] text-slate font-sans leading-relaxed">
                4 built shelter homes in Prayagraj with complete food, clean water, vaccination &amp; clinical trauma care
              </p>
            </div>

            {/* Cell 3: Village & Women Wings */}
            <div className="p-6 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-160 ease-out border-b sm:border-b-0 sm:border-r border-border">
              <div className="text-[10px] uppercase tracking-widest text-slate font-semibold flex items-center space-x-1.5">
                <span className="text-lion-gold-dark font-bold">§</span>
                <span>Wings C &amp; D &bull; Mandate</span>
              </div>
              <div className="my-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                  4
                </span>
                <span className="text-lion-gold-dark text-xs sm:text-sm uppercase ml-1.5 font-semibold">Active Wings</span>
              </div>
              <p className="text-[11px] text-slate font-sans leading-relaxed">
                Village Development (&ldquo;Empowering village through education&rdquo;) &amp; Women Empowerment Investment Summits
              </p>
            </div>

            {/* Cell 4: Mutual-Aid Grid */}
            <div className="p-6 flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-160 ease-out">
              <div className="text-[10px] uppercase tracking-widest text-slate font-semibold flex items-center space-x-1.5">
                <span className="text-crimson-alert font-bold">§</span>
                <span>Mutual-Aid Grid</span>
              </div>
              <div className="my-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                  24/7
                </span>
                <span className="text-crimson-alert text-xs sm:text-sm uppercase ml-1.5 font-semibold">Live</span>
              </div>
              <p className="text-[11px] text-slate font-sans leading-relaxed">
                Zero-delay WhatsApp dispatch &amp; email triage linking trustees, scholars &amp; caretakers during crisis
              </p>
            </div>
          </div>

          {/* Statutory Strip */}
          <div className="px-6 py-3 bg-slate-50 border-t border-border flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate font-mono">
            <span>
              <strong className="text-obsidian">Statutory Registry:</strong> PAN: AAGTK3961N &bull; URN: AAGTK3961NE20261 &bull; CSR: CSR00110895 &bull; SRN: AC3352827
            </span>
            <span>
              <strong className="text-obsidian">Endowment Bank:</strong> HDFC Bank (Naya Katra, Prayagraj) &bull; A/C: 50200119758811 &bull; IFSC: HDFC0004664
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
