"use client";

import React, { useState } from "react";
import { GraduationCap, BookOpen, Briefcase, Award, CheckCircle, Search } from "lucide-react";
import { StudentScholar } from "@/lib/data/foundation-data";

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
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold text-[10px] font-mono tracking-widest uppercase">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Operational Wing A &bull; 100% Endowed Sponsorship</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-parchment uppercase leading-tight font-normal">
          Student Welfare <span className="italic text-lion-gold font-light">Wing</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase">
          40 Active Sponsored Scholars &bull; Pro Bono Summer & Winter Internships
        </p>
        <p className="text-sm sm:text-base text-parchment-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Supports exactly 40 active students directly under foundation sponsorship. All expenses and resources
          for soft skills incubation, executive personality development, and pro bono internships are 100% provided.
        </p>
      </div>

      {/* Institutional Mandate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bezel-card">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-lion-gold/20 flex items-center justify-center text-lion-gold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              100% Expense Coverage
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed">
              Every scholar receives tuition relief, research stipends, digital devices, and wardrobe allowances—removing
              all socioeconomic barriers to high achievement.
            </p>
          </div>
        </div>

        <div className="bezel-card">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-lion-gold/20 flex items-center justify-center text-lion-gold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              Soft Skills Incubation
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed">
              Rigorous personality development labs focusing on public speaking, diplomatic negotiation,
              and cross-cultural executive etiquette.
            </p>
          </div>
        </div>

        <div className="bezel-card">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="w-10 h-10 rounded-full bg-lion-gold/20 flex items-center justify-center text-lion-gold">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              Pro Bono Internships
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed">
              Scholars undertake mandatory Summer and Winter internships on a pro bono basis in public welfare labs,
              civic organizations, and veterinary stations to instill civic discipline.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Syllabus of Soft-Skill Labs */}
      <div className="space-y-8">
        <div className="border-b border-parchment/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-lion-gold uppercase tracking-widest">
              Pedagogical Curriculum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-parchment font-semibold mt-1">
              Soft Skills & Leadership Labs
            </h2>
          </div>
          <span className="text-xs font-mono text-parchment-dim">
            4 Core Pillars &bull; Continuous Evaluation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusModules.map((mod) => (
            <div key={mod.num} className="bezel-card">
              <div className="bezel-card-inner p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-lion-gold">{mod.num}</span>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-parchment-dim uppercase">
                    {mod.duration}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-parchment">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed">
                  {mod.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {mod.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-obsidian border border-white/5 text-parchment"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cohort Directory: Exactly 40 Scholars */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-parchment/10 pb-6">
          <div>
            <span className="font-mono text-xs text-lion-gold uppercase tracking-widest">
              Active Institutional Roster
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-parchment font-semibold mt-1">
              The 40 Sponsored Scholars
            </h2>
            <p className="text-xs sm:text-sm text-parchment-muted mt-1">
              100% sponsored cohort undergoing continuous soft skills assessment and pro bono placement.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-parchment-dim absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scholar or institution..."
                className="pl-10 pr-4 py-2 bg-obsidian border border-parchment/20 rounded-full text-xs text-parchment placeholder-parchment-dim focus:outline-none focus:border-lion-gold w-64"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-obsidian border border-parchment/20 rounded-full text-xs text-parchment focus:outline-none focus:border-lion-gold font-mono"
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
            <div key={scholar.id} className="bezel-card bezel-card-hover">
              <div className="bezel-card-inner p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                    <span className="font-mono text-xs text-lion-gold font-semibold">
                      {scholar.scholarId}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 uppercase text-parchment-dim">
                      {scholar.internshipStatus.replace("_", " ")}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-parchment">
                    {scholar.fullName}
                  </h3>
                  <p className="text-xs text-parchment-muted mt-0.5 font-medium">
                    {scholar.academicDiscipline}
                  </p>
                  <p className="text-xs text-parchment-dim mt-0.5">
                    {scholar.institution}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Placement & Pro Bono Lab:
                      </span>
                      <p className="text-parchment font-sans text-xs mt-0.5 font-medium">
                        {scholar.internshipPlacement}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Soft Skills Track:
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {scholar.softSkillsTrack.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian text-lion-gold/90 border border-lion-gold/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-parchment-dim">
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>100% Endowed</span>
                  </span>
                  <span>Att: {scholar.attendanceRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredScholars.length === 0 && (
          <div className="p-12 text-center bezel-card">
            <div className="bezel-card-inner p-8 text-parchment-dim font-mono text-xs">
              No scholars found matching current search filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
