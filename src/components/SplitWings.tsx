"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  ArrowUpRight,
  Syringe,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SCHOLARS_COHORT, RESCUED_DOGS_ROSTER } from "@/lib/data/foundation-data";

export default function SplitWings() {
  const [mobileTab, setMobileTab] = useState<"scholars" | "dogs">("scholars");
  const [activeScholarTab, setActiveScholarTab] = useState(0);
  const [activeDogTab, setActiveDogTab] = useState(0);
  const [activeStage, setActiveStage] = useState<1 | 2>(1);

  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);

  // Take top 4 for quick spotlight
  const previewScholars = SCHOLARS_COHORT.slice(0, 4);
  const previewDogs = RESCUED_DOGS_ROSTER.slice(0, 4);

  // Track active stage on desktop based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!stage2Ref.current) return;
      const stage2Top = stage2Ref.current.getBoundingClientRect().top;
      // If Stage 2 has scrolled within 320px of the viewport top, mark activeStage as 2
      if (stage2Top <= 320) {
        setActiveStage(2);
      } else {
        setActiveStage(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (stage: 1 | 2) => {
    const targetRef = stage === 1 ? stage1Ref : stage2Ref;
    if (targetRef.current) {
      const topOffset = targetRef.current.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="wings" className="py-20 md:py-28 px-4 md:px-8 bg-white relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-border text-slate text-[10px] font-mono tracking-widest uppercase mb-4 font-semibold">
            <span>Dual Operational Wings &bull; 100% Endowed Sponsorship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian uppercase leading-tight font-normal">
            Synchronized <span className="italic text-lion-gold-dark font-light">Impact</span>
          </h2>
          <p className="mt-4 text-slate text-sm sm:text-base leading-relaxed font-sans">
            In accordance with Late Kiran Singh ji’s ethological and humanitarian principles, and guided by our motto
            &ldquo;A Journey from struggle to Enlightenment&rdquo;, the foundation simultaneously incubates exactly 40 youth scholars and shelters 34 rescued street dogs at our sanctuary facility in Prayagraj.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW (lg+): STICKY SPLIT-SCROLL ARCHITECTURE
            - Left: Anchored Sticky Command Card
            - Right: Continuous Scroll Dossiers (Stage 1: Scholars -> Stage 2: Dogs)
           ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Anchored Sticky Command Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-porcelain border-2 border-border/80 rounded-3xl p-8 shadow-elevation-card space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-lion-gold-dark animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-obsidian font-bold">
                    Command Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-lion-gold-dark uppercase font-semibold px-2.5 py-0.5 rounded-full bg-lion-gold/10 border border-lion-gold/30">
                  Dual Wings Active
                </span>
              </div>

              {/* Stage Switcher Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => scrollToStage(1)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 1
                      ? "bg-white border-lion-gold-dark/60 shadow-md ring-2 ring-lion-gold/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        activeStage === 1
                          ? "bg-lion-gold text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                          Stage 01
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; 40 Scholars</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-obsidian">
                        Student Welfare Wing
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 1 ? "text-lion-gold-dark translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToStage(2)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 2
                      ? "bg-white border-botanical-emerald shadow-md ring-2 ring-botanical-emerald/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                        activeStage === 2
                          ? "bg-botanical-emerald text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-botanical-emerald font-bold">
                          Stage 02
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; 34 Canines</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-obsidian">
                        Dog Care Centre (Prayagraj)
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 2 ? "text-botanical-emerald translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>
              </div>

              {/* Geographic Ground Truth Card */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-2">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-slate font-semibold uppercase">
                  <MapPin className="w-3.5 h-3.5 text-crimson-alert" />
                  <span>Facility Headquarters: Prayagraj</span>
                </div>
                <p className="text-xs text-slate leading-relaxed font-sans">
                  All clinical treatments, biosecure canine sheltering, scholar executive incubation, and registered trust governance take place strictly at <strong className="text-obsidian">191/C, Tilak Nagar Allahpur Prayagraj 211006</strong>.
                </p>
              </div>

              {/* Synchronized Core Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-slate block font-medium">Wing A Underwriting</span>
                  <div className="font-serif text-2xl font-bold text-obsidian mt-0.5">100%</div>
                  <span className="text-[10px] font-mono text-lion-gold-dark font-semibold">Tuition &amp; Labs</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-slate block font-medium">Wing B Healthcare</span>
                  <div className="font-serif text-2xl font-bold text-obsidian mt-0.5">100%</div>
                  <span className="text-[10px] font-mono text-botanical-emerald font-semibold">Vaccines &amp; Surgeries</span>
                </div>
              </div>

              {/* Motto Stamp */}
              <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
                <span>Working Towards Change</span>
                <span className="text-lion-gold-dark font-semibold">Est. 1994</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Continuous Scroll Dossiers */}
          <div className="lg:col-span-7 space-y-16">
            {/* ---------------- STAGE 1: SCHOLARS DOSSIER ---------------- */}
            <div
              ref={stage1Ref}
              id="wing-a-scholars"
              className="bg-porcelain border border-border rounded-3xl p-8 sm:p-10 shadow-elevation-1 space-y-7 scroll-mt-28"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
                      Operational Wing A &bull; Stage 1
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      Student Welfare Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-4xl font-bold text-obsidian">40</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Sponsored Scholars
                  </span>
                </div>
              </div>

              {/* Real Photography Preview Card */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-sm group">
                <Image
                  src="/images/students-wing.jpg"
                  alt="40 Scholars Welfare Wing Incubation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-white/95">
                    Active Cohort &bull; Soft Skills Incubation Lab &amp; Debate Oratory
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Underwrites exactly 40 active scholars through complete foundation endowment. Eliminating all socioeconomic
                friction, the wing finances rigorous soft-skills incubation—focusing on executive presence, rhetorical debate,
                and systems thinking—paired with mandatory pro bono Summer and Winter corporate and legal internships.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Executive Presence Labs
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Rhetorical Oratory, Public Discourse &amp; Systems Analysis
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Workplace Acclimation
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Fully Funded Summer &amp; Winter Corporate/Legal Placements
                  </p>
                </div>
              </div>

              {/* Interactive Scholar Roster Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate font-medium">
                  <span>Active Cohort Spotlights</span>
                  <span className="text-lion-gold-dark font-semibold">100% Stipends Covered</span>
                </div>

                <div className="space-y-2.5">
                  {previewScholars.map((scholar, idx) => (
                    <div
                      key={scholar.id}
                      onClick={() => setActiveScholarTab(idx)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        activeScholarTab === idx
                          ? "bg-white border-lion-gold-dark/60 text-obsidian shadow-sm ring-1 ring-lion-gold/20"
                          : "bg-white/70 border-border/80 text-slate hover:bg-white hover:text-obsidian"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-obsidian">{scholar.fullName}</span>
                        <span className="font-mono text-[10px] text-lion-gold-dark font-semibold">
                          {scholar.scholarId}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate font-sans">
                        {scholar.academicDiscipline} &bull; {scholar.institution}
                      </div>
                      {activeScholarTab === idx && (
                        <div className="mt-2.5 pt-2 border-t border-border text-[11px] text-slate flex items-center justify-between font-mono">
                          <span>Track: {scholar.softSkillsTrack[0]}</span>
                          <span className="text-botanical-emerald text-[10px] font-semibold">
                            {scholar.internshipTerm}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/wings/students"
                  className="group w-full flex items-center justify-between px-6 py-4 rounded-full bg-lion-gold text-white font-sans font-semibold text-sm hover:bg-lion-gold-dark transition-all shadow-gold-glow"
                >
                  <span>Explore Full 40 Scholars Syllabus &amp; Directory</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>

            {/* ---------------- STAGE 2: DOGS DOSSIER ---------------- */}
            <div
              ref={stage2Ref}
              id="wing-b-dogs"
              className="bg-porcelain border border-border rounded-3xl p-8 sm:p-10 shadow-elevation-1 space-y-7 scroll-mt-28"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full bg-botanical-emerald/15 border border-botanical-emerald/30 flex items-center justify-center text-botanical-emerald shadow-sm">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-botanical-emerald font-semibold">
                      Operational Wing B &bull; Stage 2
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      Dog Care Centre (Prayagraj)
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-4xl font-bold text-obsidian">34</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Resident Dogs
                  </span>
                </div>
              </div>

              {/* Real Photography Preview Card */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-sm group">
                <Image
                  src="/images/dogs-wing.jpg"
                  alt="34 Rescued Canines Dog Care Centre Sanctuary in Prayagraj"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-white/95">
                    Prayagraj Sanctuary Compound &bull; Full Veterinary Care &amp; Biosecure Housing
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Operated strictly and solely at the foundation's registered facility in Prayagraj (191/C, Tilak Nagar Allahpur Prayagraj 211006). Rejecting
                unsupervised roadside feeding in favor of structured ethological housing, the foundation fully underwrites
                daily balanced veterinary nutrition, routine surgical sterilizations, multi-strain core boosters, and systematic
                anti-rabies schedules across three biosecure zones.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Clinical Protocol
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    100% Surgical Sterilization &amp; Systematic Rabies Boosters
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Ethological Sanctuary
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Controlled Quarantine, Socialized Pack Run &amp; Geriatric Suite
                  </p>
                </div>
              </div>

              {/* Interactive Canine Roster Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate font-medium">
                  <span>Resident Canine Spotlights</span>
                  <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                    <Syringe className="w-3.5 h-3.5" />
                    <span>Rabies Vaccinated</span>
                  </span>
                </div>

                <div className="space-y-2.5">
                  {previewDogs.map((dog, idx) => (
                    <div
                      key={dog.id}
                      onClick={() => setActiveDogTab(idx)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                        activeDogTab === idx
                          ? "bg-white border-botanical-emerald/60 text-obsidian shadow-sm ring-1 ring-botanical-emerald/20"
                          : "bg-white/70 border-border/80 text-slate hover:bg-white hover:text-obsidian"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-obsidian flex items-center space-x-1.5">
                          <span>{dog.name}</span>
                          <span className="text-[10px] text-slate font-normal">
                            ({dog.gender}, {dog.estimatedAge})
                          </span>
                        </span>
                        <span className="font-mono text-[10px] text-botanical-emerald font-semibold">
                          {dog.tagNumber}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate font-sans">
                        Rescue: {dog.rescueLocation}
                      </div>
                      {activeDogTab === idx && (
                        <div className="mt-2.5 pt-2 border-t border-border text-[11px] text-slate flex items-center justify-between font-mono">
                          <span className="truncate max-w-[200px]">{dog.zoneIdentifier}</span>
                          <span className="text-botanical-emerald text-[10px] flex items-center space-x-1 font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Booster Due: {dog.boosterDueDate}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border">
                <Link
                  href="/wings/dogs"
                  className="group w-full flex items-center justify-between px-6 py-4 rounded-full bg-botanical-emerald text-white font-sans font-semibold text-sm hover:bg-botanical-emerald-light transition-all shadow-sm"
                >
                  <span>View All 34 Dogs Medical Profiles &amp; Zones</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW (< lg): INTERACTIVE TABBED CARD DECK
           ========================================================================= */}
        <div className="lg:hidden space-y-6">
          {/* Top Pill Tab Selector */}
          <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100/80 border border-border rounded-full max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setMobileTab("scholars")}
              className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full text-xs font-mono font-semibold transition-all ${
                mobileTab === "scholars"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-lion-gold-dark" />
              <span>Wing A: 40 Scholars</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("dogs")}
              className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full text-xs font-mono font-semibold transition-all ${
                mobileTab === "dogs"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <Heart className="w-4 h-4 text-botanical-emerald" />
              <span>Wing B: 34 Dogs</span>
            </button>
          </div>

          {/* TAB 1: SCHOLARS DECK */}
          {mobileTab === "scholars" && (
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-lion-gold-dark font-semibold">
                      Operational Wing A
                    </span>
                    <h3 className="font-serif text-xl font-bold text-obsidian">
                      Student Welfare Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-obsidian">40</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-medium">
                    Scholars
                  </span>
                </div>
              </div>

              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border shadow-sm">
                <Image
                  src="/images/students-wing.jpg"
                  alt="40 Scholars Welfare Wing Incubation"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-white/95">
                    Active Cohort &bull; Soft Skills Incubation Lab
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                Underwrites exactly 40 active scholars through complete foundation endowment. Eliminating all socioeconomic
                friction, the wing finances rigorous soft-skills incubation paired with mandatory pro bono Summer and Winter internships.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-0.5">
                    Executive Labs
                  </span>
                  <p className="text-xs text-obsidian font-medium">Oratory &amp; Debate</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-0.5">
                    Acclimation
                  </span>
                  <p className="text-xs text-obsidian font-medium">Pro Bono Residencies</p>
                </div>
              </div>

              {/* Scholar Spotlights */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate font-medium">
                  <span>Cohort Spotlights</span>
                  <span className="text-lion-gold-dark font-semibold">100% Endowed</span>
                </div>
                <div className="space-y-2">
                  {previewScholars.map((scholar, idx) => (
                    <div
                      key={scholar.id}
                      onClick={() => setActiveScholarTab(idx)}
                      className={`p-3 rounded-xl cursor-pointer border text-xs ${
                        activeScholarTab === idx
                          ? "bg-white border-lion-gold-dark text-obsidian shadow-sm"
                          : "bg-white/60 border-border text-slate"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-obsidian">{scholar.fullName}</span>
                        <span className="font-mono text-[10px] text-lion-gold-dark font-semibold">
                          {scholar.scholarId}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate">
                        {scholar.academicDiscipline}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/wings/students"
                className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-lion-gold text-white font-sans font-semibold text-xs hover:bg-lion-gold-dark transition-all shadow-gold-glow"
              >
                <span>View Full 40 Scholars Syllabus &amp; Roster</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          )}

          {/* TAB 2: DOGS DECK */}
          {mobileTab === "dogs" && (
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-botanical-emerald/15 border border-botanical-emerald/30 flex items-center justify-center text-botanical-emerald">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-botanical-emerald font-semibold">
                      Operational Wing B
                    </span>
                    <h3 className="font-serif text-xl font-bold text-obsidian">
                      Dog Care Centre (Prayagraj)
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-obsidian">34</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-medium">
                    Resident Dogs
                  </span>
                </div>
              </div>

              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border shadow-sm">
                <Image
                  src="/images/dogs-wing.jpg"
                  alt="34 Rescued Canines Dog Care Centre Sanctuary in Prayagraj"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-white/95">
                    Prayagraj Sanctuary &bull; Full Veterinary Care &amp; Housing
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                Operated strictly and solely at the foundation's registered facility in Prayagraj (191/C, Tilak Nagar Allahpur Prayagraj 211006). The foundation fully underwrites
                daily balanced veterinary nutrition, routine surgical sterilizations, multi-strain core boosters, and systematic
                anti-rabies schedules across three biosecure zones.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-0.5">
                    Clinical Protocol
                  </span>
                  <p className="text-xs text-obsidian font-medium">100% Sterilized &amp; Boostered</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-border">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-0.5">
                    Sanctuary
                  </span>
                  <p className="text-xs text-obsidian font-medium">3 Biosecure Zones</p>
                </div>
              </div>

              {/* Canine Spotlights */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate font-medium">
                  <span>Resident Canines</span>
                  <span className="text-botanical-emerald font-semibold flex items-center space-x-1">
                    <Syringe className="w-3 h-3" />
                    <span>Rabies Vaccinated</span>
                  </span>
                </div>
                <div className="space-y-2">
                  {previewDogs.map((dog, idx) => (
                    <div
                      key={dog.id}
                      onClick={() => setActiveDogTab(idx)}
                      className={`p-3 rounded-xl cursor-pointer border text-xs ${
                        activeDogTab === idx
                          ? "bg-white border-botanical-emerald text-obsidian shadow-sm"
                          : "bg-white/60 border-border text-slate"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-obsidian">{dog.name}</span>
                        <span className="font-mono text-[10px] text-botanical-emerald font-semibold">
                          {dog.tagNumber}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate">
                        Zone: {dog.zoneIdentifier}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/wings/dogs"
                className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-botanical-emerald text-white font-sans font-semibold text-xs hover:bg-botanical-emerald-light transition-all shadow-sm"
              >
                <span>View All 34 Dogs Medical Profiles &amp; Zones</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
