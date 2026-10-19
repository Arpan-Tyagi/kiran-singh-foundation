import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Award,
  BookOpen,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import {
  MEMORIAL_RECORDS,
  FOUNDATION_META,
  FOUNDATION_LEADERSHIP,
  FOUR_OPERATIONAL_WINGS,
} from "@/lib/data/foundation-data";
import OperationalHierarchy from "@/components/OperationalHierarchy";

export const metadata = {
  title: 'Institutional Archive & Legal Secretariat | Kiran Singh Foundation',
  description:
    'Kiran Singh Foundation is a registered trust under the Indian Trust Act of 1882 (PAN: AAGTK3961N, CSR: CSR00110895, URN: AAGTK3961NE20261, 191/C, Tilak Nagar Allahpur Prayagraj 211006). Official charter covering 4 Operational Wings: Student Welfare, Dog Welfare, Village Development, and Women Empowerment.',
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <span>Official Institutional Archive &bull; Trust Registered Under Indian Trust Act of 1882</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          The Heritage & <span className="italic text-lion-gold-dark font-light">Mandate</span>
        </h1>
        <div className="space-y-1">
          <p className="font-serif text-lg sm:text-xl text-lion-gold-dark italic font-semibold">
            &ldquo;A Journey from struggle to Enlightenment&rdquo;
          </p>
          <p className="font-mono text-xs text-slate uppercase tracking-wider font-medium">
            &ldquo;Working Towards Change&rdquo;
          </p>
        </div>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          The verified historical record and statutory charter of the Kiran Singh Foundation: honoring Late Kiran Singh ji’s
          doctoral scholarship in apex felid psychology and analytical tenure at Arignar Anna Zoological Park (AAZP Vandalur),
          while executing our 4 Operational Wings across Prayagraj.
        </p>
      </div>

      {/* Statutory Trust Registry, Tax/CSR Credentials & Official Banking Ledger */}
      <div className="bg-white border-2 border-lion-gold/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-elevation-1 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 text-botanical-emerald text-xs font-mono uppercase tracking-wider font-semibold mb-2">
              Statutory Governance &bull; Legal Trust &amp; CSR Registry
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
              Kiran Singh Foundation
            </h2>
            <p className="font-mono text-xs text-lion-gold-dark mt-1 font-semibold">
              {FOUNDATION_META.trustRegistration} &bull; Established: {FOUNDATION_META.establishmentDate} ({FOUNDATION_META.incorporationDate})
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="font-mono text-[11px] text-slate uppercase tracking-wider block">Institutional Tagline</span>
            <span className="font-serif text-lg text-lion-gold-dark italic font-bold">
              &ldquo;{FOUNDATION_META.tagline}&rdquo;
            </span>
            <span className="font-mono text-[10px] text-slate uppercase tracking-wider block mt-0.5">
              &ldquo;{FOUNDATION_META.motto}&rdquo;
            </span>
          </div>
        </div>

        {/* Contact & Secretariat Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-1.5">
            <span className="font-mono text-[10px] text-slate uppercase tracking-wider font-semibold block">
              Registered Secretariat
            </span>
            <p className="font-semibold text-obsidian text-sm">
              191/C, Tilak Nagar Allahpur Prayagraj 211006
            </p>
            <p className="text-slate">Allahabad (Prayagraj), U.P., India &ndash; 211006</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-1.5">
            <span className="font-mono text-[10px] text-slate uppercase tracking-wider font-semibold block">
              Official Mobile Helplines
            </span>
            <div className="space-y-1 font-mono text-xs text-obsidian font-semibold">
              <div><a href="tel:+919670970750" className="hover:text-lion-gold-dark">+91 96709 70750 (Primary/WhatsApp)</a></div>
              <div><a href="tel:+918115141378" className="hover:text-lion-gold-dark">+91 81151 41378</a></div>
              <div><a href="tel:+919450630310" className="hover:text-lion-gold-dark">+91 94506 30310</a></div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-1.5">
            <span className="font-mono text-[10px] text-slate uppercase tracking-wider font-semibold block">
              Institutional Email &amp; Dispatch
            </span>
            <p className="font-mono text-xs font-semibold text-obsidian break-all">
              <a href="mailto:kiransinghfoundationindia@gmail.com" className="hover:text-lion-gold-dark">
                kiransinghfoundationindia@gmail.com
              </a>
            </p>
            <p className="text-slate text-[11px]">
              Direct communication for trustee inquiries, CSR endowments, scholar sponsorships, and canine rescue triage.
            </p>
          </div>
        </div>

        {/* Statutory Tax, Income Tax URN & CSR Credentials Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-lion-gold-dark font-semibold">
              § Statutory Tax, CSR &amp; Regulatory Registrations
            </span>
            <span className="font-mono text-[10px] text-slate uppercase">
              Verified Dossier Credentials
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-porcelain border border-border">
              <span className="text-[10px] text-slate uppercase block">Permanent Account No. (PAN)</span>
              <span className="text-sm font-bold text-obsidian mt-0.5 block">{FOUNDATION_META.pan}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-porcelain border border-border">
              <span className="text-[10px] text-slate uppercase block">Income Tax URN (Sec. 332(8) &amp; 354(4))</span>
              <span className="text-sm font-bold text-obsidian mt-0.5 block">{FOUNDATION_META.incomeTaxUrn}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-porcelain border border-border">
              <span className="text-[10px] text-slate uppercase block">CSR Registration No.</span>
              <span className="text-sm font-bold text-botanical-emerald mt-0.5 block">{FOUNDATION_META.csrRegistrationNumber}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-porcelain border border-border">
              <span className="text-[10px] text-slate uppercase block">Application Number</span>
              <span className="text-sm font-bold text-obsidian mt-0.5 block">{FOUNDATION_META.applicationSrn}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-porcelain border border-border">
              <span className="text-[10px] text-slate uppercase block">Date of Establishment</span>
              <span className="text-sm font-bold text-lion-gold-dark mt-0.5 block">{FOUNDATION_META.incorporationDate}</span>
            </div>
          </div>
        </div>

        {/* Official Banking & CSR Endowment Coordinates - Elevated Treasury Vault Desk */}
        <div className="rounded-2xl sm:rounded-3xl bg-stone-50/80 border border-lion-gold/25 p-1.5 sm:p-2 shadow-elevation-1">
          <div className="rounded-xl sm:rounded-2xl bg-white border border-stone-200/80 p-5 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-botanical-emerald font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-botanical-emerald shrink-0" />
                  <span>Verified Statutory Treasury &amp; CSR Endowment Coordinates</span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-obsidian tracking-tight">
                  {FOUNDATION_META.bankDetails.bankName} &mdash; {FOUNDATION_META.bankDetails.branchName}
                </h3>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="px-3 py-1 rounded-full bg-stone-50 border border-border font-mono text-[10px] text-obsidian font-semibold">
                  CKYC: {FOUNDATION_META.bankDetails.ckycNumber}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 font-mono text-[10px] text-botanical-emerald font-semibold">
                  100% Tax Exempt
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 font-mono text-xs">
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">Account Number</span>
                <span className="font-bold text-obsidian text-sm sm:text-base mt-0.5 block tracking-wide tabular-nums">
                  {FOUNDATION_META.bankDetails.accountNumber}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">IFSC Code</span>
                <span className="font-bold text-lion-gold-dark text-sm sm:text-base mt-0.5 block tracking-wide">
                  {FOUNDATION_META.bankDetails.ifscCode}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">Bank &amp; Branch</span>
                <span className="font-semibold text-obsidian text-xs sm:text-sm mt-0.5 block truncate">
                  {FOUNDATION_META.bankDetails.branchName}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">Customer ID</span>
                <span className="font-semibold text-obsidian text-xs sm:text-sm mt-0.5 block tabular-nums">
                  {FOUNDATION_META.bankDetails.customerId}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">MMID</span>
                <span className="font-semibold text-obsidian text-xs sm:text-sm mt-0.5 block tabular-nums">
                  {FOUNDATION_META.bankDetails.mmid}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-50/80 border border-border/60">
                <span className="text-[10px] text-slate uppercase tracking-wider block font-medium">SmartHub TID</span>
                <span className="font-semibold text-obsidian text-xs sm:text-sm mt-0.5 block tabular-nums">
                  {FOUNDATION_META.bankDetails.smartHubVyaparTid}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MUSEUM-GRADE MASTERWORK: Memorial Archival Monograph & Ethology Dossier
          Replaces the stretched horizontal banner and redundant card with an
          Awwwards-tier Double-Bezel archival centerpiece.
         ========================================================================= */}
      <section className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#FBF9F5] via-stone-50 to-[#F5F2EB] p-2.5 sm:p-4 border border-lion-gold/30 shadow-elevation-card relative overflow-hidden">
        {/* Subtle decorative radial atmosphere */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lion-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="rounded-2xl sm:rounded-[calc(2.5rem-0.625rem)] bg-white p-6 sm:p-10 md:p-12 lg:p-14 border border-stone-200/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] relative space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Museum Archival Portrait & Provenance Gallery (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-5">
              {/* Museum Portrait Frame with Brushed Bezel & Paper Matting */}
              <div className="relative w-full max-w-[340px] rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-lion-gold/30 via-stone-100 to-stone-200 border-2 border-lion-gold/40 shadow-elevation-card">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-lion-gold/30 shadow-inner group">
                  <Image
                    src="/images/memorial-founder.jpg"
                    alt="Late Kiran Singh ji - Ph.D. Ethologist & Founder in Sacred Memory"
                    fill
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-cover object-[center_18%] group-hover:scale-102 transition-transform duration-700"
                    priority
                  />
                  {/* Dignified museum tonal vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />
                  
                  {/* Accession Seal Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-obsidian/75 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-widest text-lion-gold uppercase font-semibold">
                      ARCHIVE &bull; REF: AAZP-VANDALUR
                    </span>
                  </div>

                  {/* Sacred Memory Overlay Badge */}
                  <div className="absolute bottom-3 inset-x-3 text-center">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-lion-gold/30 shadow-md">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-obsidian font-bold block">
                        Founder in Sacred Memory
                      </span>
                      <span className="text-[9px] font-mono text-lion-gold-dark tracking-wider block">
                        1964 &ndash; 2024 &bull; Prayagraj Secretariat
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engraved Brass-Finish Plaque */}
                <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-stone-50 via-stone-100/80 to-stone-50 border border-lion-gold/30 text-center space-y-1 shadow-xs">
                  <div className="inline-flex items-center justify-center space-x-1.5 text-lion-gold-dark">
                    <Landmark className="w-3.5 h-3.5" />
                    <span className="font-serif text-sm font-bold uppercase tracking-wider text-obsidian">
                      Late Kiran Singh <span className="italic font-light text-lion-gold-dark">ji</span>
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-slate leading-tight uppercase tracking-wider">
                    Ph.D. Ethologist &bull; Wildlife Analyst
                  </p>
                  <p className="text-[10px] font-mono text-lion-gold-dark font-medium">
                    Tamil Nadu Zoo Authority &bull; AAZP Vandalur, Chennai
                  </p>
                </div>
              </div>

              {/* Archival Evidence Twin Vignettes */}
              <div className="w-full max-w-[340px] grid grid-cols-2 gap-3 pt-1">
                {/* 1. Deepa Prajwalan Homage */}
                <div className="p-2 rounded-xl bg-stone-50 border border-border hover:border-lion-gold/40 transition-colors space-y-1.5 group">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-200">
                    <Image
                      src="/images/events/summer-2026/deepa-prajwalan-lamp-lighting-01.jpg"
                      alt="Ceremonial Deepa Prajwalan before Late Kiran Singh ji's portrait"
                      fill
                      sizes="160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[9px] font-mono text-slate block leading-tight uppercase font-medium">
                    Deepa Prajwalan Homage at Convocation
                  </span>
                </div>

                {/* 2. Felid Pride Ethology Subject */}
                <div className="p-2 rounded-xl bg-stone-50 border border-border hover:border-lion-gold/40 transition-colors space-y-1.5 group">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-200">
                    <Image
                      src="/images/hero-lion.jpg"
                      alt="Panthera leo - Apex Felid Ethology Research"
                      fill
                      sizes="160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[9px] font-mono text-slate block leading-tight uppercase font-medium">
                    Panthera leo Behavioral Study
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Institutional Ethology Monograph & State Gazette Credentials (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow strip */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono uppercase tracking-widest font-bold">
                  Tamil Nadu Zoo Authority Historical Dossier
                </span>
                <span className="px-3 py-1 rounded-full bg-stone-100 border border-border text-slate text-[10px] font-mono uppercase tracking-widest font-medium">
                  AAZP Vandalur &bull; Chennai
                </span>
                <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 text-botanical-emerald text-[10px] font-mono uppercase tracking-widest font-semibold">
                  State Policy Alignment
                </span>
              </div>

              {/* Monumental Headline */}
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-obsidian font-normal leading-[1.14]">
                  Late Kiran Singh <span className="italic font-light text-lion-gold-dark">ji</span> &amp; The Ethology of <span className="italic text-lion-gold-dark font-light">Apex Felids</span>
                </h2>
                <p className="font-mono text-xs text-slate uppercase tracking-wider">
                  Arignar Anna Zoological Park (AAZP Vandalur) &bull; Consultative Alignment with then Chief Minister Late J. Jayalalithaa (&ldquo;Amma&rdquo;)
                </p>
              </div>

              {/* 4 Gazette Credentials Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-border/80 space-y-1">
                  <div className="flex items-center space-x-1.5 text-lion-gold-dark text-xs font-mono font-bold uppercase">
                    <GraduationCap className="w-4 h-4 text-lion-gold-dark shrink-0" />
                    <span>Doctoral Dissertation</span>
                  </div>
                  <p className="text-xs text-obsidian font-sans leading-relaxed">
                    Ph.D. specializing in the behavioral training, conditioning, and sensory neurobiology of large apex felids (lions, tigers, and leopards).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-border/80 space-y-1">
                  <div className="flex items-center space-x-1.5 text-botanical-emerald text-xs font-mono font-bold uppercase">
                    <Award className="w-4 h-4 text-botanical-emerald shrink-0" />
                    <span>Tamil Nadu Zoo Authority</span>
                  </div>
                  <p className="text-xs text-obsidian font-sans leading-relaxed">
                    Tenured Wildlife Analyst at AAZP Vandalur; designed sensory enrichment protocols reducing stereotypic pacing distress by &gt;60%.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-border/80 space-y-1">
                  <div className="flex items-center space-x-1.5 text-lion-gold-dark text-xs font-mono font-bold uppercase">
                    <BookOpen className="w-4 h-4 text-lion-gold-dark shrink-0" />
                    <span>State Conservation Advisory</span>
                  </div>
                  <p className="text-xs text-obsidian font-sans leading-relaxed">
                    Direct consultative advisory to then Chief Minister Late J. Jayalalithaa (&ldquo;Amma&rdquo;), shaping humane wildlife and conservation directives.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-border/80 space-y-1">
                  <div className="flex items-center space-x-1.5 text-botanical-emerald text-xs font-mono font-bold uppercase">
                    <ShieldCheck className="w-4 h-4 text-botanical-emerald shrink-0" />
                    <span>Prayagraj Living Sanctuaries</span>
                  </div>
                  <p className="text-xs text-obsidian font-sans leading-relaxed">
                    Living institutional genesis underwriting 40 Sponsored Scholars and 34 Rescued Canines at 191/C Tilak Nagar, Prayagraj.
                  </p>
                </div>
              </div>

              {/* Visceral Biographical Narrative */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate font-sans leading-relaxed">
                <p>
                  Late Kiran Singh ji dedicated her life to deciphering the behavioral psychology, operant conditioning,
                  and sensory modulation of large apex felids—specifically lions (<em>Panthera leo</em>), tigers (<em>Panthera tigris</em>),
                  and leopards (<em>Panthera pardus</em>). Her doctoral research conclusively proved that managed apex predators
                  maintain psychological equilibrium through predictable auditory cues, spatial complexity, and positive operant reinforcement
                  rather than physical coercion or pharmaceutical sedation.
                </p>
                <p>
                  Serving as an Analyst with the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai),
                  she instituted landmark nocturnal habitat enrichment and revolutionized veterinary safety procedures. Her empirical rigor
                  earned the personal confidence of then Chief Minister Late J. Jayalalithaa (&ldquo;Amma&rdquo;), guiding statewide policies
                  in ethical captive management and modern zoological governance.
                </p>
              </div>

              {/* Philosophical Pull Quote with Archival Styling */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-50 via-lion-gold/10 to-stone-50 border-l-4 border-lion-gold shadow-xs space-y-1">
                <p className="font-serif italic text-sm sm:text-base text-obsidian font-semibold leading-relaxed">
                  &ldquo;Compassion devoid of scientific rigor deteriorates into sentimentality; scientific rigor rooted in disciplined compassion transforms entire habitats.&rdquo;
                </p>
                <span className="text-[10px] font-mono uppercase tracking-wider text-lion-gold-dark font-semibold block">
                  &mdash; Core Institutional Thesis of Late Kiran Singh ji
                </span>
              </div>

              {/* Link CTA with Nested Button-in-Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/dispatches/from-apex-felids-to-compassionate-canines"
                  className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-lion-gold hover:bg-lion-gold-dark text-white font-sans font-semibold text-xs transition-all shadow-gold-glow group"
                >
                  <span>Read Complete Ethology Monograph &amp; Field Records</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>

                <span className="text-xs font-mono text-slate">
                  Archival Dispatch Ref: &ldquo;From Apex Felids to Compassionate Canines&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heraldic Emblem Showcase Card */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-elevation-1 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl p-2 bg-gradient-to-b from-lion-gold/40 via-lion-gold/15 to-border shadow-elevation-card shrink-0">
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center p-2 shadow-inner">
            <Image
              src="/images/logo.png"
              alt="Heraldic Emblem Seal - Detailed Roaring Male Lion"
              fill
              sizes="176px"
              className="object-contain p-1"
            />
          </div>
        </div>
        <div className="space-y-3 text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
            Archival Emblem Registry & Heraldic Symbolism
          </div>
          <h3 className="font-serif text-2xl font-bold text-obsidian uppercase">
            The Roaring Lion Heraldic Crest
          </h3>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            The foundation’s official seal features an intricately rendered roaring male lion set within a circular
            typographic ring inscribed <strong className="text-lion-gold-dark font-semibold">"KIRAN SINGH FOUNDATION"</strong>.
            Directly inspired by Late Kiran Singh ji’s doctoral research on *Panthera leo* pride ethology at AAZP Vandalur,
            the seal symbolizes scientific vigilance, moral strength, and protective stewardship over the vulnerable.
          </p>
        </div>
      </div>

      {/* Board of Trustees & Directorate Leadership */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <span>Governance & Executive Directorate</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-obsidian uppercase">
            Board of Trustees & <span className="italic text-lion-gold-dark font-light">Leadership</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            Stewards of the foundation's institutional mandate, educational endowments, and animal sanctuary operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDATION_LEADERSHIP.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-border rounded-3xl overflow-hidden shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden border-b border-border">
                <Image
                  src={leader.photoUrl}
                  alt={`${leader.name} - ${leader.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover ${leader.photoPosition || "object-top"} group-hover:scale-103 transition-transform duration-500`}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
                    {leader.role}
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian mt-1">
                    {leader.name}
                  </h4>
                  {leader.bio && (
                    <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mt-2.5">
                      {leader.bio}
                    </p>
                  )}
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-slate">
                  <span>Kiran Singh Foundation</span>
                  <span className="text-lion-gold-dark font-semibold">Directorate Board</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Hierarchy & Supervisory Corps (Student Welfare Wing) */}
      <OperationalHierarchy />

      {/* Apex Felids Research Visual Accent */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-elevation-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 relative h-64 md:h-72 rounded-2xl overflow-hidden border border-border shadow-sm">
          <Image
            src="/images/hero-lion.jpg"
            alt="Apex Lion - Panthera leo Research Subject"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-obsidian/75 backdrop-blur-xs text-[10px] font-mono text-white">
            Ethological Study: Panthera leo
          </div>
        </div>
        <div className="md:col-span-7 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
            Behavioral Ethology of Apex Felids
          </span>
          <h3 className="font-serif text-2xl font-bold text-obsidian">
            Lions, Tigers, and Leopards (*Panthera leo, P. tigris, P. pardus*)
          </h3>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            Late Kiran Singh ji’s doctoral dissertation challenged traditional coercive animal management by proving
            that apex carnivores possess sophisticated cognitive associative memory and stress-modulation pathways.
            Through systematic observation of scent-marking frequencies, vocalization acoustic frequencies, and enclosure
            micro-topography, she designed operant environmental enrichment protocols that permanently reduced captivity
            stereotypic pacing distress across managed felid cohorts.
          </p>
          <div className="text-xs font-mono text-lion-gold-dark font-medium pt-1">
            "Compassion devoid of scientific rigor deteriorates into sentimentality; scientific rigor rooted in disciplined
            compassion transforms entire habitats."
          </div>
        </div>
      </div>

      {/* Historical Milestones Detailed Archive */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-obsidian uppercase">
            Documented Milestones & Citations
          </h3>
          <p className="text-xs text-slate font-mono mt-1 uppercase tracking-wider font-medium">
            Verified Archival Gazette Records
          </p>
        </div>

        <div className="space-y-6">
          {MEMORIAL_RECORDS.map((rec) => (
            <div key={rec.id} className="bg-white border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-elevation-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                <div>
                  <span className="font-mono text-xs text-lion-gold-dark font-medium">{rec.period}</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                    {rec.title}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-mono text-xs text-slate block">Archival Identifier</span>
                  <span className="font-mono text-xs text-obsidian font-semibold">{rec.archivalDocumentRef}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate">
                <strong className="text-obsidian">Institutional Affiliation:</strong> {rec.institution} &bull; <strong className="text-obsidian">Discipline:</strong> {rec.researchDiscipline}
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                {rec.detailedNarrative}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-border space-y-1.5">
                <div className="text-xs font-mono text-botanical-emerald font-semibold uppercase">
                  Governance & Policy Alignment:
                </div>
                <p className="text-xs text-obsidian leading-relaxed font-sans">
                  {rec.advisoryAlignment}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate uppercase block mb-1 font-medium">
                  Citations & Technical References:
                </span>
                <ul className="space-y-1">
                  {rec.citations.map((cite, i) => (
                    <li key={i} className="text-xs text-slate italic flex items-start space-x-2">
                      <span className="text-lion-gold-dark font-bold">&bull;</span>
                      <span>{cite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Operational Wings Charter Summary */}
      <div id="four-wings-charter" className="space-y-8 pt-8 border-t border-border">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <span>Official Institutional Mandate &bull; 4 Operational Wings</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-obsidian uppercase">
            Four Operational <span className="italic text-lion-gold-dark font-light">Wings</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            Pursuant to our statutory charter under the Indian Trust Act of 1882, the Kiran Singh Foundation executes four
            integrated operational mandates across Prayagraj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUR_OPERATIONAL_WINGS.map((wing) => {
            const isEmerald = wing.code === "Wing B" || wing.code === "Wing D";
            const wingImage =
              wing.code === "Wing A"
                ? "/images/students-wing.jpg"
                : wing.code === "Wing B"
                ? "/images/dogs-wing.jpg"
                : wing.code === "Wing C"
                ? "/images/office-bearers/navyanshi-dwivedi.jpg"
                : "/images/office-bearers/unnaati-roy.jpg";

            return (
              <div
                key={wing.id}
                className="bg-white border border-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-elevation-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border shadow-sm">
                    <Image
                      src={wingImage}
                      alt={wing.officialName}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-widest font-semibold text-obsidian shadow-sm">
                      {wing.code} &bull; {wing.keyMetric} ({wing.secondaryMetric})
                    </div>
                  </div>

                  <div>
                    <span
                      className={`font-mono text-xs uppercase tracking-widest font-semibold block ${
                        isEmerald ? "text-botanical-emerald" : "text-lion-gold-dark"
                      }`}
                    >
                      {wing.tagline}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-obsidian mt-1">
                      {wing.officialName}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                    {wing.summary}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-border/60">
                    {wing.pillars.map((pillar, idx) => (
                      <li key={idx} className="text-xs text-slate font-sans flex items-start gap-2">
                        <span className={`font-bold ${isEmerald ? "text-botanical-emerald" : "text-lion-gold-dark"}`}>
                          &bull;
                        </span>
                        <span>{pillar}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

