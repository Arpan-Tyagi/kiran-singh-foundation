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
  ChevronRight,
  Landmark,
  Briefcase,
  Award,
  FileCheck2,
  Home,
} from "lucide-react";
import { SCHOLARS_COHORT, RESCUED_DOGS_ROSTER } from "@/lib/data/foundation-data";

export default function SplitWings() {
  const [mobileTab, setMobileTab] = useState<"scholars" | "dogs" | "village" | "women">("scholars");
  const [activeScholarTab, setActiveScholarTab] = useState(0);
  const [activeDogTab, setActiveDogTab] = useState(0);
  const [activeStage, setActiveStage] = useState<1 | 2 | 3 | 4>(1);

  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);

  // Take top 4 for quick spotlight
  const previewScholars = SCHOLARS_COHORT.slice(0, 4);
  const previewDogs = RESCUED_DOGS_ROSTER.slice(0, 4);

  // Track active stage on desktop based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const s2Top = stage2Ref.current?.getBoundingClientRect().top ?? Infinity;
      const s3Top = stage3Ref.current?.getBoundingClientRect().top ?? Infinity;
      const s4Top = stage4Ref.current?.getBoundingClientRect().top ?? Infinity;

      if (s4Top <= 340) {
        setActiveStage(4);
      } else if (s3Top <= 340) {
        setActiveStage(3);
      } else if (s2Top <= 340) {
        setActiveStage(2);
      } else {
        setActiveStage(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (stage: 1 | 2 | 3 | 4) => {
    const refMap = {
      1: stage1Ref,
      2: stage2Ref,
      3: stage3Ref,
      4: stage4Ref,
    };
    const targetRef = refMap[stage];
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
            <span>4 Operational Wings &bull; PAN: AAGTK3961N &bull; CSR: CSR00110895</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian uppercase leading-tight font-normal">
            Four-Wing <span className="italic text-lion-gold-dark font-light">Mandate</span>
          </h2>
          <p className="mt-4 text-slate text-sm sm:text-base leading-relaxed font-sans">
            Guided by our motto &ldquo;A Journey from struggle to Enlightenment&rdquo;, the Kiran Singh Foundation
            operates <strong className="text-obsidian">4 dedicated operational wings</strong> focused on bringing structural positive change across student personality incubation, street canine sheltering, rural village education, and women&apos;s career empowerment.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW (lg+): STICKY SPLIT-SCROLL ARCHITECTURE
            - Left: Anchored Sticky Command Card (4 Operational Wings)
            - Right: Continuous Scroll Dossiers (Stages 1 to 4)
           ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Anchored Sticky Command Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-6">
            <div className="bg-porcelain border-2 border-border/80 rounded-3xl p-7 shadow-elevation-card space-y-5">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-border pb-3.5">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-lion-gold-dark animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-obsidian font-bold">
                    Institutional Agenda
                  </span>
                </div>
                <span className="text-[10px] font-mono text-lion-gold-dark uppercase font-semibold px-2.5 py-0.5 rounded-full bg-lion-gold/10 border border-lion-gold/30">
                  4 Active Wings
                </span>
              </div>

              {/* 4 Stage Switcher Buttons */}
              <div className="space-y-2.5">
                {/* Wing A */}
                <button
                  type="button"
                  onClick={() => scrollToStage(1)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 1
                      ? "bg-white border-lion-gold-dark/60 shadow-md ring-2 ring-lion-gold/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        activeStage === 1
                          ? "bg-lion-gold text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                          Wing A
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; 40 Scholars / 4 Teams</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-obsidian">
                        KSF (Student Welfare) Wing
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 1 ? "text-lion-gold-dark translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>

                {/* Wing B */}
                <button
                  type="button"
                  onClick={() => scrollToStage(2)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 2
                      ? "bg-white border-botanical-emerald shadow-md ring-2 ring-botanical-emerald/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        activeStage === 2
                          ? "bg-botanical-emerald text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-botanical-emerald font-bold">
                          Wing B
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; 34 Dogs / 4 Shelters</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-obsidian">
                        KSF (Dog Welfare) Wing
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 2 ? "text-botanical-emerald translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>

                {/* Wing C */}
                <button
                  type="button"
                  onClick={() => scrollToStage(3)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 3
                      ? "bg-white border-lion-gold-dark/60 shadow-md ring-2 ring-lion-gold/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        activeStage === 3
                          ? "bg-lion-gold-dark text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-lion-gold-dark font-bold">
                          Wing C
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; Fees, Food &amp; Shelter</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-obsidian">
                        KSF (Village Development) Wing
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 3 ? "text-lion-gold-dark translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>

                {/* Wing D */}
                <button
                  type="button"
                  onClick={() => scrollToStage(4)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    activeStage === 4
                      ? "bg-white border-botanical-emerald shadow-md ring-2 ring-botanical-emerald/20"
                      : "bg-white/60 border-border hover:bg-white text-slate hover:text-obsidian"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        activeStage === 4
                          ? "bg-obsidian text-white shadow-sm"
                          : "bg-slate-100 text-slate"
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-obsidian font-bold">
                          Wing D
                        </span>
                        <span className="text-[10px] font-mono text-slate">&bull; Investment Summits</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-obsidian">
                        KSF (Women Empowerment) Wing
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeStage === 4 ? "text-obsidian translate-x-1" : "text-slate/40"
                    }`}
                  />
                </button>
              </div>

              {/* Geographic & Statutory Ground Truth Card */}
              <div className="p-4 rounded-2xl bg-white border border-border space-y-1.5">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-slate font-semibold uppercase">
                  <MapPin className="w-3.5 h-3.5 text-crimson-alert" />
                  <span>Secretariat: Prayagraj (211006)</span>
                </div>
                <p className="text-xs text-slate leading-relaxed font-sans">
                  Registered at <strong className="text-obsidian">191/C, Tilak Nagar, Allahpur, Prayagraj</strong>. Incorporated 31/12/2025 (student welfare active 3 years prior).
                </p>
              </div>

              {/* Motto Stamp */}
              <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
                <span>URN: AAGTK3961NE20261</span>
                <span className="text-lion-gold-dark font-semibold">CSR00110895</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Continuous Scroll Dossiers (4 Stages) */}
          <div className="lg:col-span-7 space-y-14">
            {/* ---------------- STAGE 1: KSF (STUDENT WELFARE) WING ---------------- */}
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
                      Operational Wing A &bull; 4 Teams &bull; 2 Internships
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      KSF (Student Welfare) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-4xl font-bold text-obsidian">40</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Chosen Scholars
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
                    Psychometric Selection &bull; 4 Research Teams &bull; Plagiarism-Audited Panel Defense
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Under this wing, <strong className="text-obsidian">40 students</strong> have been chosen through a rigorous <strong className="text-obsidian">psychometric test and interview</strong> organized by the 3 core members of the foundation and conducted by accomplished industry professionals. Two flagship programs—the <strong className="text-obsidian">Summer Internship Program &amp; Winter Internship Program</strong>—develop a solid personality by incorporating soft skills and technical sessions from expert foundation members.
              </p>

              {/* Key Charter Pillars from PDF */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm space-y-1">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-lion-gold-dark font-semibold">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>4 Teams &amp; Plagiarism Audit</span>
                  </div>
                  <p className="text-xs text-obsidian font-semibold leading-snug">
                    Divided into 4 teams (headed by Head Superintendent, Dy. Head Superintendent &amp; Team Leader) presenting formatted Research Reports &amp; PPTs with plagiarism reports before top professionals.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm space-y-1">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-lion-gold-dark font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Closing Ceremony &amp; Stipend</span>
                  </div>
                  <p className="text-xs text-obsidian font-semibold leading-snug">
                    Concludes with an Internship Closing Ceremony honoring students with Certificates, Trophies, Mementos, and Stipend amounts for their dedication.
                  </p>
                </div>
              </div>

              {/* Interactive Scholar Roster Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate font-medium">
                  <span>Active Cohort Spotlights</span>
                  <span className="text-lion-gold-dark font-semibold">Certificates, Trophies &amp; Stipends</span>
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

              {/* Supervisory Hierarchy Link */}
              <div className="p-3.5 rounded-2xl bg-white border border-border flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-lion-gold-dark" />
                  <span className="font-semibold text-obsidian">Supervisory Corps &bull; 3 Tiers &bull; 4 Teams</span>
                </div>
                <Link
                  href="/wings/students#operational-hierarchy"
                  className="font-mono text-[11px] text-lion-gold-dark font-semibold hover:underline flex items-center space-x-1"
                >
                  <span>View Photos &amp; Hierarchy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
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

            {/* ---------------- STAGE 2: KSF (DOG WELFARE) WING ---------------- */}
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
                      Operational Wing B &bull; 4 Built Shelter Homes
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      KSF (Dog Welfare) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-4xl font-bold text-obsidian">34</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Street Dogs
                  </span>
                </div>
              </div>

              {/* Real Photography Preview Card */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-sm group">
                <Image
                  src="/images/dogs-wing.jpg"
                  alt="34 Rescued Canines across 4 Shelter Homes in Prayagraj"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-white/95">
                    4 Built Shelter Homes &bull; 34 Street Dogs &bull; Food, Water &amp; Medical Facility
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Street dogs are rescued and vaccinated by the Kiran Singh Foundation alongside dedicated medical facilities in Prayagraj in order to save them from various diseases and accidents and provide a decent standard of living. Currently, we have <strong className="text-obsidian">built 4 shelter homes</strong> housing <strong className="text-obsidian">34 street dogs in total</strong>, with complete food, shelter, and clean water facilities provided by the foundation.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm space-y-1">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-botanical-emerald font-semibold">
                    <Home className="w-3.5 h-3.5" />
                    <span>4 Built Shelter Homes</span>
                  </div>
                  <p className="text-xs text-obsidian font-semibold">
                    Dedicated shelter homes in Prayagraj providing food, clean water, and safe living quarters for 34 street dogs.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm space-y-1">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase text-botanical-emerald font-semibold">
                    <Syringe className="w-3.5 h-3.5" />
                    <span>Vaccination &amp; Medical Facility</span>
                  </div>
                  <p className="text-xs text-obsidian font-semibold">
                    100% anti-rabies vaccination, surgical sterilization, and trauma care protecting dogs from diseases and accidents.
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
                  <span>View All 34 Dogs Across 4 Shelter Homes</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>

            {/* ---------------- STAGE 3: KSF (VILLAGE DEVELOPMENT) WING ---------------- */}
            <div
              ref={stage3Ref}
              id="wing-c-village"
              className="bg-porcelain border border-border rounded-3xl p-8 sm:p-10 shadow-elevation-1 space-y-6 scroll-mt-28"
            >
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark shadow-sm">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
                      Operational Wing C &bull; Rural Educational Equity
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      KSF (Village Development) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-lion-gold-dark">100%</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Fees, Food &amp; Shelter
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark font-serif italic text-base sm:text-lg font-semibold">
                &ldquo;Aim: Empowering village through education.&rdquo;
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Students residing in rural villages are given adequate educational resources, mentorship, and communicative opportunities so that they can express themselves effectively and compete with real-life challenges. Crucially, <strong className="text-obsidian">their educational fees are taken care of by the Kiran Singh Foundation, including their daily food cost and shelter facility</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Educational Fees
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Full school &amp; collegiate tuition underwritten by the trust
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Daily Nutrition
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Complete food cost coverage for rural students
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Residential Shelter
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Safe shelter facility &amp; study environment in Prayagraj
                  </p>
                </div>
              </div>
            </div>

            {/* ---------------- STAGE 4: KSF (WOMEN EMPOWERMENT) WING ---------------- */}
            <div
              ref={stage4Ref}
              id="wing-d-women"
              className="bg-porcelain border border-border rounded-3xl p-8 sm:p-10 shadow-elevation-1 space-y-6 scroll-mt-28"
            >
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full bg-obsidian/10 border border-obsidian/20 flex items-center justify-center text-obsidian shadow-sm">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-obsidian font-semibold">
                      Operational Wing D &bull; Careers &amp; Investment Summits
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      KSF (Women Empowerment) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-botanical-emerald">Summits</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-semibold">
                    Career &amp; Enterprise
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                Female students and women who possess strong skills are given concrete opportunities to develop a solid career across diverse fields including <strong className="text-obsidian">education, business, and entrepreneurship</strong>. Various awareness programs are organized by the Kiran Singh Foundation—including <strong className="text-obsidian">dedicated investment summits</strong>—to motivate young women to pursue their careers in spite of family pressures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Education, Business &amp; Entrepreneurship
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Direct career pathways, leadership incubation, and professional placement for skilled women.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Awareness &amp; Investment Summits
                  </span>
                  <p className="text-xs text-obsidian font-semibold">
                    Conclaves and investment summits empowering young women to overcome family pressures and lead independent careers.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <Link
                  href="/about#four-wings-charter"
                  className="group w-full flex items-center justify-between px-6 py-4 rounded-full bg-obsidian text-white font-sans font-semibold text-sm hover:bg-obsidian/90 transition-all shadow-sm"
                >
                  <span>Review Full 4-Wing Institutional Charter &amp; Statutory Dossier</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW (< lg): INTERACTIVE 4-WING TABBED CARD DECK
           ========================================================================= */}
        <div className="lg:hidden space-y-6">
          {/* 2x2 Pill Tab Selector for 4 Wings */}
          <div className="grid grid-cols-2 gap-2 p-2 bg-slate-100/80 border border-border rounded-2xl max-w-lg mx-auto">
            <button
              type="button"
              onClick={() => setMobileTab("scholars")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                mobileTab === "scholars"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-lion-gold-dark shrink-0" />
              <span className="truncate">Wing A: 40 Scholars</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("dogs")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                mobileTab === "dogs"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-botanical-emerald shrink-0" />
              <span className="truncate">Wing B: 34 Dogs</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("village")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                mobileTab === "village"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <Landmark className="w-3.5 h-3.5 text-lion-gold-dark shrink-0" />
              <span className="truncate">Wing C: Village Dev</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("women")}
              className={`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                mobileTab === "women"
                  ? "bg-white text-obsidian shadow-sm border border-border"
                  : "text-slate hover:text-obsidian"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-obsidian shrink-0" />
              <span className="truncate">Wing D: Women Emp</span>
            </button>
          </div>

          {/* TAB 1: SCHOLARS DECK */}
          {mobileTab === "scholars" && (
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-5 animate-in fade-in duration-300">
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
                      KSF (Student Welfare) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-obsidian">40</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-medium">
                    4 Teams
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
                    Psychometric Selection &bull; 4 Teams &bull; Plagiarism-Verified Research
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                40 students chosen through a psychometric test and professional interview. Divided into 4 teams (headed by Head Superintendent Manager, Dy. Head Superintendent Manager &amp; Team Leader) for Summer &amp; Winter Internships, plagiarism-audited research reports, PPT panel defenses, and Closing Ceremony stipends &amp; trophies.
              </p>

              {/* Supervisory Hierarchy Link */}
              <div className="p-3 rounded-xl bg-white border border-border flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-lion-gold-dark" />
                  <span className="font-semibold text-obsidian text-[11px]">Supervisory Corps &bull; 3 Tiers</span>
                </div>
                <Link
                  href="/wings/students#operational-hierarchy"
                  className="font-mono text-[10px] text-lion-gold-dark font-semibold hover:underline flex items-center space-x-0.5"
                >
                  <span>Photos &amp; Roster</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
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
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-5 animate-in fade-in duration-300">
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
                      KSF (Dog Welfare) Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-obsidian">34</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-medium">
                    4 Shelters
                  </span>
                </div>
              </div>

              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border shadow-sm">
                <Image
                  src="/images/dogs-wing.jpg"
                  alt="34 Rescued Canines across 4 Shelter Homes in Prayagraj"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-mono text-white/95">
                    4 Built Shelter Homes &bull; 34 Street Dogs &bull; Prayagraj
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                Street dogs are rescued and vaccinated alongside medical facilities to save them from diseases and accidents. We have built 4 shelter homes in Prayagraj housing 34 street dogs with full food, shelter, and clean water facilities.
              </p>

              <Link
                href="/wings/dogs"
                className="w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-botanical-emerald text-white font-sans font-semibold text-xs hover:bg-botanical-emerald-light transition-all shadow-sm"
              >
                <span>View All 34 Dogs Across 4 Shelter Homes</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          )}

          {/* TAB 3: VILLAGE DEVELOPMENT DECK */}
          {mobileTab === "village" && (
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-lion-gold-dark font-semibold">
                      Operational Wing C
                    </span>
                    <h3 className="font-serif text-xl font-bold text-obsidian">
                      KSF (Village Development) Wing
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-lion-gold-dark">100% Endowed</span>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                <strong className="text-obsidian">Aim: Empowering village through education.</strong> Students residing in villages are given adequate resources and opportunities to express themselves effectively and compete with real-life challenges. Their educational fees, food cost, and shelter facility are fully taken care of by the Kiran Singh Foundation.
              </p>
            </div>
          )}

          {/* TAB 4: WOMEN EMPOWERMENT DECK */}
          {mobileTab === "women" && (
            <div className="bg-porcelain border border-border rounded-2xl p-6 shadow-elevation-1 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-obsidian/10 border border-obsidian/20 flex items-center justify-center text-obsidian">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-obsidian font-semibold">
                      Operational Wing D
                    </span>
                    <h3 className="font-serif text-xl font-bold text-obsidian">
                      KSF (Women Empowerment) Wing
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-botanical-emerald">Summits</span>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                Female students and women with strong skills are given opportunities to develop a solid career across education, business, and entrepreneurship. Awareness programs and investment summits are organized to motivate young women to pursue their career in spite of family pressures.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
