"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Heart, ArrowUpRight, ShieldCheck, Syringe, CheckCircle2 } from "lucide-react";
import { SCHOLARS_COHORT, RESCUED_DOGS_ROSTER } from "@/lib/data/foundation-data";

export default function SplitWings() {
  const [activeScholarTab, setActiveScholarTab] = useState(0);
  const [activeDogTab, setActiveDogTab] = useState(0);

  // Take top 4 for quick spotlight
  const previewScholars = SCHOLARS_COHORT.slice(0, 4);
  const previewDogs = RESCUED_DOGS_ROSTER.slice(0, 4);

  return (
    <section id="wings" className="py-24 md:py-32 px-4 md:px-8 bg-obsidian-deep relative border-t border-parchment/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-lion-gold text-[10px] font-mono tracking-widest uppercase mb-4">
            <span>Dual Operational Wings &bull; 100% Endowed Sponsorship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-parchment uppercase leading-tight">
            Synchronized <span className="italic text-lion-gold font-light">Impact</span>
          </h2>
          <p className="mt-4 text-parchment-muted text-sm sm:text-base leading-relaxed">
            In accordance with Late Kiran Singh ji’s ethological and humanitarian principles, the foundation
            simultaneously incubates 40 youth scholars and shelters 34 rescued street dogs.
          </p>
        </div>

        {/* Synchronized Split-Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* WING A: STUDENT WELFARE WING */}
          <div className="bezel-card flex flex-col justify-between border-lion-gold/20 hover:border-lion-gold/40 transition-all">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div>
                {/* Wing Eyebrow */}
                <div className="flex items-center justify-between pb-6 border-b border-parchment/10 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-lion-gold/20 border border-lion-gold/40 flex items-center justify-center text-lion-gold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-lion-gold font-semibold">
                        Operational Wing A
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-parchment">
                        Student Welfare Wing
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-lion-gold">40</span>
                    <span className="text-[10px] font-mono text-parchment-dim block uppercase">
                      Sponsored Scholars
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans mb-6">
                  Supports exactly 40 active students directly under foundation sponsorship. All expenses and resources
                  for soft skills incubation, personality development (executive communication, rhetorical debate, systems thinking),
                  and Summer and Winter pro bono internships are 100% provided.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-obsidian border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-lion-gold block mb-1">
                      Incubation Curriculum
                    </span>
                    <p className="text-xs text-parchment font-medium">
                      Executive Communication & Public Discourse
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-lion-gold block mb-1">
                      Internship Model
                    </span>
                    <p className="text-xs text-parchment font-medium">
                      Pro Bono Summer & Winter Placements
                    </p>
                  </div>
                </div>

                {/* Interactive Scholar Roster Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-parchment-dim">
                    <span>Active Cohort Spotlights</span>
                    <span>100% Stipends Covered</span>
                  </div>

                  <div className="space-y-2">
                    {previewScholars.map((scholar, idx) => (
                      <div
                        key={scholar.id}
                        onClick={() => setActiveScholarTab(idx)}
                        className={`p-3 rounded-xl cursor-pointer transition-all border ${
                          activeScholarTab === idx
                            ? "bg-lion-gold/10 border-lion-gold/50 text-parchment"
                            : "bg-obsidian/60 border-white/5 text-parchment-muted hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-parchment">{scholar.fullName}</span>
                          <span className="font-mono text-[10px] text-lion-gold">{scholar.scholarId}</span>
                        </div>
                        <div className="text-[11px] text-parchment-dim mt-0.5 truncate">
                          {scholar.academicDiscipline} &bull; {scholar.institution}
                        </div>
                        {activeScholarTab === idx && (
                          <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-parchment-muted flex items-center justify-between">
                            <span>Track: {scholar.softSkillsTrack[0]}</span>
                            <span className="text-emerald-400 font-mono text-[10px]">
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
              <div className="pt-6 border-t border-parchment/10">
                <Link
                  href="/wings/students"
                  className="group w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-lion-gold text-obsidian font-sans font-semibold text-sm hover:bg-lion-gold-light transition-all"
                >
                  <span>Explore Full 40 Scholars Syllabus & Directory</span>
                  <div className="w-7 h-7 rounded-full bg-obsidian/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-obsidian" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* WING B: DOG CARE CENTRE */}
          <div className="bezel-card flex flex-col justify-between border-emerald-sanctuary/30 hover:border-emerald-sanctuary/60 transition-all">
            <div className="bezel-card-inner flex flex-col justify-between">
              <div>
                {/* Wing Eyebrow */}
                <div className="flex items-center justify-between pb-6 border-b border-parchment/10 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-sanctuary/30 border border-emerald-sanctuary/60 flex items-center justify-center text-emerald-400">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                        Operational Wing B
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-parchment">
                        Dog Care Centre
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-emerald-400">34</span>
                    <span className="text-[10px] font-mono text-parchment-dim block uppercase">
                      Resident Street Dogs
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans mb-6">
                  Protects and shelters exactly 34 rescued street dogs. All food, housing, medical care, sterilizations,
                  and vaccinations (rabies and annual boosters) are 100% funded by the foundation across three monitored sanctuary zones.
                </p>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-obsidian border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">
                      Veterinary Standard
                    </span>
                    <p className="text-xs text-parchment font-medium">
                      100% Anti-Rabies & Booster Compliance
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-obsidian border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">
                      Ethological Zoning
                    </span>
                    <p className="text-xs text-parchment font-medium">
                      Quarantine, Main Pack, & Geriatric Run
                    </p>
                  </div>
                </div>

                {/* Interactive Canine Roster Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-parchment-dim">
                    <span>Resident Canine Spotlights</span>
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <Syringe className="w-3 h-3" />
                      <span>Rabies Vaccinated</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    {previewDogs.map((dog, idx) => (
                      <div
                        key={dog.id}
                        onClick={() => setActiveDogTab(idx)}
                        className={`p-3 rounded-xl cursor-pointer transition-all border ${
                          activeDogTab === idx
                            ? "bg-emerald-sanctuary/20 border-emerald-sanctuary text-parchment"
                            : "bg-obsidian/60 border-white/5 text-parchment-muted hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-parchment flex items-center space-x-1.5">
                            <span>{dog.name}</span>
                            <span className="text-[10px] text-parchment-dim">({dog.gender}, {dog.estimatedAge})</span>
                          </span>
                          <span className="font-mono text-[10px] text-emerald-400">{dog.tagNumber}</span>
                        </div>
                        <div className="text-[11px] text-parchment-dim mt-0.5 truncate">
                          Rescue: {dog.rescueLocation}
                        </div>
                        {activeDogTab === idx && (
                          <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-parchment-muted flex items-center justify-between">
                            <span className="truncate max-w-[200px]">{dog.zoneIdentifier}</span>
                            <span className="text-emerald-400 font-mono text-[10px] flex items-center space-x-1">
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
              <div className="pt-6 border-t border-parchment/10">
                <Link
                  href="/wings/dogs"
                  className="group w-full flex items-center justify-between px-6 py-3.5 rounded-full bg-slate-charcoal border border-emerald-sanctuary/50 text-parchment font-sans font-semibold text-sm hover:border-emerald-400 hover:bg-slate-charcoal-light transition-all"
                >
                  <span>View All 34 Dogs Medical Profiles & Zones</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
