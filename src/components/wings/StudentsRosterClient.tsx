"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Briefcase, Award, CheckCircle, Search } from "lucide-react";
import { StudentScholar, STUDENT_WELFARE_OFFICE_BEARERS } from "@/lib/data/foundation-data";

export default function StudentsRosterClient({
  scholars,
}: {
  scholars: StudentScholar[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredScholars = scholars.filter((scholar) => {
    const matchesSearch =
      scholar.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.academicDiscipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.scholarId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.institution.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || scholar.internshipStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const syllabusModules = [
    {
      num: "01",
      title: "Executive Communication & Rhetorical Oratory",
      duration: "12 Weeks Intensive",
      desc: "Comprehensive speech craft, debate protocol, clarity in written executive briefing, and vocal projection under scrutiny.",
      skills: ["Spoken Eloquence", "Executive Brief Writing", "Media Defense"],
    },
    {
      num: "02",
      title: "Systems Thinking & Ethical Civic Governance",
      duration: "8 Weeks Applied",
      desc: "Deconstructing municipal welfare frameworks, animal protection law, public policy analysis, and state budget transparency.",
      skills: ["Policy Modeling", "Statutory Interpretation", "Audit Rigor"],
    },
    {
      num: "03",
      title: "Crisis Conflict De-escalation & Empathetic Dialogue",
      duration: "6 Weeks Workshop",
      desc: "Handling high-stakes community friction, urban mutual-aid coordination, stakeholder mediation, and trauma response.",
      skills: ["Active Listening", "Negotiation", "Crisis Mediation"],
    },
    {
      num: "04",
      title: "Scientific Documentation & Public Presentation",
      duration: "8 Weeks Lab",
      desc: "Synthesizing complex technical and ecological data into accessible civic narratives, following Late Kiran Singh ji’s research standard.",
      skills: ["Technical Synthesis", "Data Journalism", "Public Presentation"],
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Operational Wing A &bull; 100% Endowed Sponsorship</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Student Welfare <span className="italic text-lion-gold font-light">Wing</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase font-semibold">
          40 Active Sponsored Scholars &bull; Pro Bono Summer & Winter Internships
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Supports exactly 40 active students directly under foundation sponsorship. All expenses and resources
          for soft skills incubation, executive personality development, and pro bono internships are 100% provided.
        </p>
      </div>

      {/* Institutional Mandate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            100% Expense Coverage
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Every scholar receives tuition relief, research stipends, digital devices, and wardrobe allowances—removing
            all socioeconomic barriers to high achievement.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Soft Skills Incubation
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Rigorous personality development labs focusing on public speaking, diplomatic negotiation,
            and cross-cultural executive etiquette.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Pro Bono Internships
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Scholars undertake mandatory Summer and Winter internships on a pro bono basis in public welfare labs,
            civic organizations, and veterinary stations to instill professional competence.
          </p>
        </div>
      </div>

      {/* Comprehensive Syllabus of Soft-Skill Labs */}
      <div className="space-y-8">
        <div className="border-b border-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-lion-gold-dark uppercase tracking-widest font-semibold">
              Pedagogical Curriculum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian font-semibold mt-1">
              Soft Skills & Leadership Labs
            </h2>
          </div>
          <span className="text-xs font-mono text-slate font-medium">
            4 Core Pillars &bull; Continuous Evaluation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusModules.map((mod) => (
            <div key={mod.num} className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-elevation-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-lion-gold-dark">{mod.num}</span>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-50 border border-border text-slate uppercase font-medium">
                  {mod.duration}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-obsidian">
                {mod.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                {mod.desc}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {mod.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-50 border border-border text-obsidian font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cohort Directory: Exactly 40 Scholars */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <span className="font-mono text-xs text-lion-gold-dark uppercase tracking-widest font-semibold">
              Active Institutional Roster
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian font-semibold mt-1">
              The 40 Sponsored Scholars
            </h2>
            <p className="text-xs sm:text-sm text-slate mt-1 font-sans">
              100% sponsored cohort undergoing continuous soft skills assessment and pro bono placement.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scholar or institution..."
                className="pl-10 pr-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian placeholder-slate-400 focus:outline-none focus:border-lion-gold w-64 shadow-sm"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-lion-gold font-mono shadow-sm"
            >
              <option value="all">All Internship Statuses</option>
              <option value="summer_intern">Summer Intern</option>
              <option value="winter_intern">Winter Intern</option>
              <option value="completed">Completed Residency</option>
              <option value="upcoming">Upcoming Cohort</option>
            </select>
          </div>
        </div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholars.map((scholar) => (
            <div key={scholar.id} className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
                  <span className="font-mono text-xs text-lion-gold-dark font-semibold">
                    {scholar.scholarId}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-50 border border-border uppercase text-slate font-medium">
                    {scholar.internshipStatus.replace("_", " ")}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-obsidian">
                  {scholar.fullName}
                </h3>
                <p className="text-xs text-slate mt-0.5 font-medium">
                  {scholar.academicDiscipline}
                </p>
                <p className="text-xs text-slate mt-0.5">
                  {scholar.institution}
                </p>

                <div className="mt-4 pt-3 border-t border-border space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Placement & Pro Bono Lab:
                    </span>
                    <p className="text-obsidian font-sans text-xs mt-0.5 font-medium">
                      {scholar.internshipPlacement}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Soft Skills Track:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {scholar.softSkillsTrack.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-lion-gold-dark border border-lion-gold/25 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
                <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  <span>100% Endowed</span>
                </span>
                <span>Att: {scholar.attendanceRate}%</span>
              </div>
            </div>
          ))}
        </div>

        {filteredScholars.length === 0 && (
          <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-sm text-slate font-mono text-xs">
            No scholars found matching current search filters.
          </div>
        )}
      </div>

      {/* Office Bearers of Kiran Singh Foundation (Student Welfare Wing) */}
      <div className="space-y-8 pt-8 border-t border-border">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <span>Cohort Administration & Operations</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-obsidian uppercase">
            Office Bearers & <span className="italic text-lion-gold font-light">Superintendents</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            The operational supervisory corps directing soft-skill development modules, academic discipline, and pro bono corporate internship placements for our 40 sponsored scholars.
          </p>
        </div>

        {/* 3 Hierarchical Tiers */}
        <div className="space-y-6">
          {/* Tier 1: Head Superintendent Managers */}
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-elevation-1 space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-lion-gold" />
                <h4 className="font-serif text-lg sm:text-xl font-bold text-obsidian uppercase tracking-wide">
                  Head Superintendent Managers
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate uppercase tracking-wider font-semibold">
                Tier 1 &bull; Executive Operations
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {STUDENT_WELFARE_OFFICE_BEARERS.filter(b => b.category === "Head Superintendent Manager").map((bearer) => (
                <div key={bearer.id} className="p-4 rounded-2xl bg-porcelain border border-border flex items-center space-x-3.5 hover:border-lion-gold/50 transition-colors">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark font-serif font-bold text-base shrink-0 shadow-sm">
                    {bearer.photoUrl ? (
                      <Image
                        src={bearer.photoUrl}
                        alt={bearer.name}
                        fill
                        sizes="48px"
                        className={`object-cover ${bearer.photoPosition || "object-top"}`}
                      />
                    ) : (
                      <span>{bearer.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h5 className="font-serif text-base font-semibold text-obsidian">
                      {bearer.name}
                    </h5>
                    <p className="text-[10px] font-mono text-slate uppercase tracking-wider mt-0.5">
                      {bearer.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Deputy Head Superintendent Managers */}
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-elevation-1 space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-botanical-emerald" />
                <h4 className="font-serif text-lg sm:text-xl font-bold text-obsidian uppercase tracking-wide">
                  Dy. Head Superintendent Managers
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate uppercase tracking-wider font-semibold">
                Tier 2 &bull; Field Operations
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {STUDENT_WELFARE_OFFICE_BEARERS.filter(b => b.category === "Dy. Head Superintendent Manager").map((bearer) => (
                <div key={bearer.id} className="p-4 rounded-2xl bg-porcelain border border-border flex items-center space-x-3 hover:border-botanical-emerald/50 transition-colors">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-botanical-emerald/10 border border-botanical-emerald/25 flex items-center justify-center text-botanical-emerald font-serif font-bold text-sm shrink-0 shadow-sm">
                    {bearer.photoUrl ? (
                      <Image
                        src={bearer.photoUrl}
                        alt={bearer.name}
                        fill
                        sizes="44px"
                        className={`object-cover ${bearer.photoPosition || "object-top"}`}
                      />
                    ) : (
                      <span>{bearer.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-obsidian">
                      {bearer.name}
                    </h5>
                    <p className="text-[10px] font-mono text-slate uppercase tracking-wider mt-0.5">
                      Dy. Head Superintendent
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3: Team Leaders */}
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-elevation-1 space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-obsidian" />
                <h4 className="font-serif text-lg sm:text-xl font-bold text-obsidian uppercase tracking-wide">
                  Team Leaders
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate uppercase tracking-wider font-semibold">
                Tier 3 &bull; Cohort Leadership
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {STUDENT_WELFARE_OFFICE_BEARERS.filter(b => b.category === "Team Leader").map((bearer) => (
                <div key={bearer.id} className="p-4 rounded-2xl bg-porcelain border border-border flex items-center space-x-3.5 hover:border-obsidian transition-colors">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-obsidian/10 border border-obsidian/20 flex items-center justify-center text-obsidian font-serif font-bold text-sm shrink-0 shadow-sm">
                    {bearer.photoUrl ? (
                      <Image
                        src={bearer.photoUrl}
                        alt={bearer.name}
                        fill
                        sizes="44px"
                        className={`object-cover ${bearer.photoPosition || "object-top"}`}
                      />
                    ) : (
                      <span>{bearer.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-semibold text-obsidian">
                      {bearer.name}
                    </h5>
                    <p className="text-[10px] font-mono text-slate uppercase tracking-wider mt-0.5">
                      Team Leader &bull; Student Welfare
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
