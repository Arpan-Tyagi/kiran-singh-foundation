"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Heart, ArrowUpRight, Syringe, CheckCircle2 } from "lucide-react";
import { SCHOLARS_COHORT, RESCUED_DOGS_ROSTER } from "@/lib/data/foundation-data";

export default function SplitWings() {
  const [activeScholarTab, setActiveScholarTab] = useState(0);
  const [activeDogTab, setActiveDogTab] = useState(0);

  // Take top 4 for quick spotlight
  const previewScholars = SCHOLARS_COHORT.slice(0, 4);
  const previewDogs = RESCUED_DOGS_ROSTER.slice(0, 4);

  return (
    <section id="wings" className="py-20 md:py-28 px-4 md:px-8 bg-white relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-border text-slate text-[10px] font-mono tracking-widest uppercase mb-4 font-semibold">
            <span>Dual Operational Wings &bull; 100% Endowed Sponsorship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian uppercase leading-tight font-normal">
            Synchronized <span className="italic text-lion-gold font-light">Impact</span>
          </h2>
          <p className="mt-4 text-slate text-sm sm:text-base leading-relaxed font-sans">
            In accordance with Late Kiran Singh ji’s ethological and humanitarian principles, the foundation
            simultaneously incubates exactly 40 youth scholars and shelters 34 rescued street dogs.
          </p>
        </div>

        {/* Synchronized Split-Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* WING A: STUDENT WELFARE WING */}
          <div className="bg-porcelain border border-border rounded-2xl p-7 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Wing Eyebrow */}
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-lion-gold-dark font-semibold">
                      Operational Wing A
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                      Student Welfare Wing
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-obsidian">40</span>
                  <span className="text-[10px] font-mono text-slate block uppercase font-medium">
                    Sponsored Scholars
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mb-6">
                Supports exactly 40 active students directly under foundation sponsorship. All expenses and resources
                for soft skills incubation, personality development (executive communication, rhetorical debate, systems thinking),
                and Summer and Winter pro bono internships are 100% funded.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Incubation Curriculum
                  </span>
                  <p className="text-xs text-obsidian font-medium">
                    Executive Communication & Public Discourse
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark font-semibold block mb-1">
                    Internship Model
                  </span>
                  <p className="text-xs text-obsidian font-medium">
                    Pro Bono Summer & Winter Placements
                  </p>
                </div>
              </div>

              {/* Interactive Scholar Roster Preview */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate font-medium">
                  <span>Active Cohort Spotlights</span>
                  <span className="text-lion-gold-dark">100% Stipends Covered</span>
                </div>

                <div className="space-y-2">
                  {previewScholars.map((scholar, idx) => (
                    <div
                      key={scholar.id}
                      onClick={() => setActiveScholarTab(idx)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        activeScholarTab === idx
                          ? "bg-white border-lion-gold/50 text-obsidian shadow-sm"
                          : "bg-white/60 border-border/80 text-slate hover:bg-white hover:text-obsidian"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-obsidian">{scholar.fullName}</span>
                        <span className="font-mono text-[10px] text-lion-gold-dark font-medium">{scholar.scholarId}</span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate">
                        {scholar.academicDiscipline} &bull; {scholar.institution}
                      </div>
                      {activeScholarTab === idx && (
                        <div className="mt-2.5 pt-2 border-t border-border text-[11px] text-slate flex items-center justify-between">
                          <span>Track: {scholar.softSkillsTrack[0]}</span>
                          <span className="text-botanical-emerald font-mono text-[10px] font-medium">
                            {scholar.internshipTerm}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6 border-t border-border">
              <Link
                href="/wings/students"
                className="group w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-lion-gold text-white font-sans font-semibold text-sm hover:bg-lion-gold-dark transition-all shadow-gold-glow"
              >
                <span>Explore Full 40 Scholars Syllabus & Directory</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* WING B: DOG CARE CENTRE */}
          <div className="bg-porcelain border border-border rounded-2xl p-7 shadow-elevation-1 hover:shadow-elevation-card hover:border-botanical-emerald/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Wing Eyebrow */}
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 flex items-center justify-center text-botanical-emerald shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-botanical-emerald font-semibold">
                      Operational Wing B
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                      Dog Care Centre
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

              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mb-6">
                Protects and shelters exactly 34 rescued street dogs. All food, housing, medical care, sterilizations,
                and vaccinations (rabies and annual boosters) are 100% funded by the foundation across three monitored sanctuary zones.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Veterinary Standard
                  </span>
                  <p className="text-xs text-obsidian font-medium">
                    100% Anti-Rabies & Booster Compliance
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-border shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald font-semibold block mb-1">
                    Ethological Zoning
                  </span>
                  <p className="text-xs text-obsidian font-medium">
                    Quarantine, Main Pack, & Geriatric Run
                  </p>
                </div>
              </div>

              {/* Interactive Canine Roster Preview */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate font-medium">
                  <span>Resident Canine Spotlights</span>
                  <span className="text-botanical-emerald flex items-center space-x-1">
                    <Syringe className="w-3 h-3" />
                    <span>Rabies Vaccinated</span>
                  </span>
                </div>

                <div className="space-y-2">
                  {previewDogs.map((dog, idx) => (
                    <div
                      key={dog.id}
                      onClick={() => setActiveDogTab(idx)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        activeDogTab === idx
                          ? "bg-white border-botanical-emerald/50 text-obsidian shadow-sm"
                          : "bg-white/60 border-border/80 text-slate hover:bg-white hover:text-obsidian"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-obsidian flex items-center space-x-1.5">
                          <span>{dog.name}</span>
                          <span className="text-[10px] text-slate font-normal">({dog.gender}, {dog.estimatedAge})</span>
                        </span>
                        <span className="font-mono text-[10px] text-botanical-emerald font-medium">{dog.tagNumber}</span>
                      </div>
                      <div className="text-[11px] text-slate mt-0.5 truncate">
                        Rescue: {dog.rescueLocation}
                      </div>
                      {activeDogTab === idx && (
                        <div className="mt-2.5 pt-2 border-t border-border text-[11px] text-slate flex items-center justify-between">
                          <span className="truncate max-w-[200px]">{dog.zoneIdentifier}</span>
                          <span className="text-botanical-emerald font-mono text-[10px] flex items-center space-x-1 font-medium">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Booster Due: {dog.boosterDueDate}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6 border-t border-border">
              <Link
                href="/wings/dogs"
                className="group w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-botanical-emerald text-white font-sans font-semibold text-sm hover:bg-botanical-emerald-light transition-all shadow-sm"
              >
                <span>View All 34 Dogs Medical Profiles & Zones</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
