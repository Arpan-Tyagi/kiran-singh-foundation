"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  CheckCircle,
  Search,
  Users,
  ShieldCheck,
  UserPlus,
  ArrowUpRight,
  Sparkles,
  FileText,
  Eye,
  X,
} from "lucide-react";
import {
  StudentScholar,
  STUDENT_WELFARE_TEAMS_2026_27,
  STUDENT_COHORT_SUMMARY_2026_27,
  UPES_ACADEMIC_PARTNERSHIP,
  WINTER_INTERNSHIP_BATCH_2026_27,
} from "@/lib/data/foundation-data";
import OperationalHierarchy from "@/components/OperationalHierarchy";

export default function StudentsRosterClient({
  scholars,
}: {
  scholars: StudentScholar[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamFilter, setTeamFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [rosterViewMode, setRosterViewMode] = useState<"winter_2026_27" | "session_2026_27">("winter_2026_27");
  const [isDecreeModalOpen, setIsDecreeModalOpen] = useState(false);

  // Map student scholarId to Winter 2026-27 Deployment
  const winterScholarMap = React.useMemo(() => {
    const map = new Map<string, { teamCode: string; decreeRole: string; hsmName: string }>();
    for (const team of WINTER_INTERNSHIP_BATCH_2026_27.teams) {
      map.set(team.hsm.scholarId, { teamCode: team.teamCode, decreeRole: "HSM", hsmName: team.hsm.name });
      for (const mem of team.members) {
        map.set(mem.scholarId, { teamCode: team.teamCode, decreeRole: "Member", hsmName: team.hsm.name });
      }
    }
    return map;
  }, []);

  // Map student scholarId to custom photos if present
  const scholarPhotoMap = React.useMemo(() => {
    const map = new Map<string, string>();
    for (const s of scholars) {
      if (s.photoUrl) {
        map.set(s.scholarId, s.photoUrl);
      }
    }
    return map;
  }, [scholars]);

  const filteredScholars = scholars.filter((scholar) => {
    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !q ||
      scholar.fullName.toLowerCase().includes(q) ||
      scholar.scholarId.toLowerCase().includes(q) ||
      (scholar.teamName || "").toLowerCase().includes(q) ||
      (scholar.teamRole || "").toLowerCase().includes(q) ||
      scholar.academicDiscipline.toLowerCase().includes(q);

    const matchesTeam =
      teamFilter === "all" || String(scholar.teamNumber || "") === teamFilter;

    const matchesRole =
      roleFilter === "all" || scholar.teamRole === roleFilter;

    return matchesSearch && matchesTeam && matchesRole;
  });

  // Filter Winter Teams dynamically based on search and teamFilter
  const filteredWinterTeams = WINTER_INTERNSHIP_BATCH_2026_27.teams
    .map((team) => {
      if (teamFilter !== "all") {
        const matchesCode =
          teamFilter === team.teamCode ||
          teamFilter === team.teamCode.replace("Team ", "") ||
          (teamFilter === "1" && team.teamCode === "Team I") ||
          (teamFilter === "2" && team.teamCode === "Team II") ||
          (teamFilter === "3" && team.teamCode === "Team III") ||
          (teamFilter === "4" && team.teamCode === "Team IV");
        if (!matchesCode) return null;
      }

      const q = searchTerm.toLowerCase().trim();
      if (!q) return team;

      const hsmMatches =
        team.hsm.name.toLowerCase().includes(q) ||
        team.hsm.scholarId.toLowerCase().includes(q) ||
        team.hsm.academicDiscipline.toLowerCase().includes(q);

      const matchingMembers = team.members.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.scholarId.toLowerCase().includes(q) ||
          m.academicDiscipline.toLowerCase().includes(q)
      );

      if (hsmMatches || matchingMembers.length > 0) {
        return {
          ...team,
          members: hsmMatches ? team.members : matchingMembers,
        };
      }
      return null;
    })
    .filter(Boolean) as typeof WINTER_INTERNSHIP_BATCH_2026_27.teams;

  const syllabusModules = [
    {
      num: "01",
      title: "Executive Presence & Rhetorical Oratory",
      duration: "12 Weeks Intensive Lab",
      desc: "Structured training in parliamentary debate protocols, high-pressure vocal modulation, executive summary drafting, and media defense under cross-examination.",
      skills: ["Executive Briefings", "Parliamentary Debate", "Crisis Cross-Examination"],
    },
    {
      num: "02",
      title: "Systems Thinking & Statutory Civic Governance",
      duration: "8 Weeks Applied Seminar",
      desc: "Rigorous statutory analysis of municipal administration, environmental protection jurisprudence, public expenditure audits, and institutional transparency frameworks.",
      skills: ["Statutory Redlining", "Municipal Policy Analysis", "Fiscal Audit Rigor"],
    },
    {
      num: "03",
      title: "Interpersonal Conflict De-escalation & Mediation",
      duration: "6 Weeks Field Workshop",
      desc: "Trauma-informed mediation protocols for resolving neighborhood community friction, coordinating rapid mutual-aid deployments, and de-escalating urban crisis flashpoints.",
      skills: ["Active Listening Labs", "Bilateral Mediation", "Emergency Crisis Triage"],
    },
    {
      num: "04",
      title: "Formatted Research Report, Plagiarism Audit & PPT Defense",
      duration: "8 Weeks Practicum",
      desc: "Each of the 4 teams prepares a formatted Research Report and PowerPoint Presentation defended before a panel of accomplished professionals, audited via a formal Plagiarism Report for copying percentage and authenticity.",
      skills: ["Formatted Research Report", "Plagiarism Audit Verification", "PowerPoint Panel Defense"],
    },
  ];

  const getRoleBadgeStyle = (role?: StudentScholar["teamRole"]) => {
    switch (role) {
      case "HSM":
        return "bg-lion-gold/15 text-lion-gold-dark border-lion-gold/40 font-bold";
      case "Dy. HSM":
        return "bg-botanical-emerald/12 text-botanical-emerald border-botanical-emerald/35 font-bold";
      case "Team Leader":
        return "bg-obsidian text-white border-obsidian font-semibold";
      case "Vacancy":
        return "bg-amber-50 text-amber-800 border-amber-300 font-semibold";
      default:
        return "bg-slate-100 text-obsidian border-border font-medium";
    }
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[11px] font-mono tracking-widest uppercase font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Operational Wing A &bull; Academic Session {STUDENT_COHORT_SUMMARY_2026_27.session}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          KSF (Student Welfare) <span className="italic text-lion-gold-dark font-light">Wing</span>
        </h1>
        <div className="space-y-1">
          <p className="font-serif text-lg text-lion-gold-dark italic font-semibold">
            &ldquo;A Journey from struggle to Enlightenment&rdquo;
          </p>
          <p className="font-mono text-xs sm:text-sm text-slate tracking-widest uppercase font-semibold">
            Official Roster (2026&ndash;27) &bull; Current Strength: 37 &bull; Allotted Strength: 40 &bull; Vacancy: 03
          </p>
        </div>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Students are chosen through a rigorous <strong className="text-obsidian font-semibold">psychometric test and interview</strong> organized by the 3 core members (Shri Anuj Kumar Singh, Shri Anil Kumar Singh, and Ms. Akansha Singh) and conducted by accomplished professionals. Organized into <strong className="text-obsidian font-semibold">4 teams</strong> across our Summer &amp; Winter Internship Programs, scholars prepare plagiarism-audited <strong className="text-obsidian font-semibold">Research Reports and PowerPoint defenses</strong>, culminating in an <strong className="text-obsidian font-semibold">Internship Closing Ceremony</strong> with Certificates, Trophies, Mementos, and Stipends.
        </p>
      </div>

      {/* Official 2026-27 Sheet Summary Telemetry Bar */}
      <div className="bg-white border-2 border-lion-gold/30 rounded-3xl p-6 sm:p-8 shadow-elevation-1 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-lion-gold-dark font-semibold block">
              Official Sheet Summary &bull; Session {STUDENT_COHORT_SUMMARY_2026_27.session}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian mt-0.5">
              List of Students Along With the Team of KSF (Student Welfare) Wing
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 font-mono text-xs text-botanical-emerald font-semibold self-start md:self-auto">
            4 Active Teams &bull; Verified 2026&ndash;27 Sheet
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="p-5 rounded-2xl bg-porcelain border border-border flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-slate font-semibold">
              Current Strength
            </span>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-obsidian">
                {STUDENT_COHORT_SUMMARY_2026_27.currentStrength}
              </span>
              <span className="text-xs text-botanical-emerald font-semibold uppercase">
                Active Enrolled
              </span>
            </div>
            <p className="text-[11px] text-slate font-sans">
              Team 1 (12) + Team 2 (11) + Team 3 (10) + Team 4 (04)
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-porcelain border border-border flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-slate font-semibold">
              Allotted Strength
            </span>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-obsidian">
                {STUDENT_COHORT_SUMMARY_2026_27.allottedStrength}
              </span>
              <span className="text-xs text-lion-gold-dark font-semibold uppercase">
                Sanctioned Seats
              </span>
            </div>
            <p className="text-[11px] text-slate font-sans">
              100% foundation-endowed scholarship &amp; internship cohort
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-porcelain border border-border flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-slate font-semibold">
              Vacancy
            </span>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-obsidian">
                0{STUDENT_COHORT_SUMMARY_2026_27.vacancy}
              </span>
              <span className="text-xs text-amber-700 font-semibold uppercase">
                Open Slots
              </span>
            </div>
            <p className="text-[11px] text-slate font-sans">
              Reserved in Team 4 for Psychometric Test &amp; Interview induction
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-porcelain border border-border flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-slate font-semibold">
              Team Hierarchy
            </span>
            <div className="my-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-obsidian">
                0{STUDENT_COHORT_SUMMARY_2026_27.teamsCount}
              </span>
              <span className="text-xs text-lion-gold-dark font-semibold uppercase">
                Research Teams
              </span>
            </div>
            <p className="text-[11px] text-slate font-sans">
              Headed by HSM, Dy. HSM &amp; Team Leader supervisory corps
            </p>
          </div>
        </div>
      </div>

      {/* UPES School for Life Academic Alliance Callout */}
      <div className="rounded-3xl p-2 sm:p-2.5 bg-gradient-to-r from-stone-100 via-lion-gold/15 to-stone-100 border border-lion-gold/30 shadow-elevation-1">
        <div className="rounded-2xl bg-white p-5 sm:p-7 border border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2.5 border border-border shadow-xs shrink-0 flex items-center justify-center">
              <Image
                src={UPES_ACADEMIC_PARTNERSHIP.logoUrl}
                alt="UPES Dehradun Logo"
                fill
                sizes="96px"
                className="object-contain p-1.5"
              />
            </div>
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
                <span>Accredited Academic Partner &bull; UPES Dehradun</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                School for Life &bull; Pro-Bono Field & Research Internship Track
              </h3>
              <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
                Under the bilateral MoU executed on 13th April 2026 (Uttarakhand e-Stamp <span className="font-mono text-obsidian font-semibold">{UPES_ACADEMIC_PARTNERSHIP.eStampNumber}</span>), UPES scholars join our 4-team operational wings under a strict <strong className="text-obsidian font-semibold">1:5 mentor ratio</strong>. All participation is 100% pro-bono with zero commercial fundraising, guaranteed POSH Act 2013 protections, and formal academic credits submitted to the UPES Registrar.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full sm:w-auto">
            <Link
              href="/about#academic-partnership"
              className="px-5 py-2.5 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-1.5 text-center shadow-sm"
            >
              <span>Inspect Accord</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold" />
            </Link>
            <span className="text-[10px] font-mono text-slate text-center block">
              5-Year Horizon (2026&ndash;2031)
            </span>
          </div>
        </div>
      </div>

      {/* Official Cohort View Switcher & Letterhead Decree Notification */}
      <div className="bg-gradient-to-r from-stone-100 via-lion-gold/15 to-stone-100 p-2 sm:p-2.5 rounded-3xl border border-lion-gold/30 shadow-elevation-1">
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
                <FileText className="w-3.5 h-3.5 text-lion-gold-dark" />
                <span>Official Decree Executed &bull; Date: 05/11/2026</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian tracking-tight">
                Upcoming Winter Internship Batch: 26 Selected Scholars
              </h2>
              <p className="text-xs sm:text-sm text-slate font-sans max-w-2xl leading-relaxed">
                Officially decreed on 5th November 2026 by Secretary Shri Anuj Kumar Singh at Prayagraj. Deploys 26 scholars across 4 operational teams headed by appointed Head Superintendent Managers (HSMs): Vaishnavi (Team I), Prateeksha Pandey (Team II), Shubhangi Singh (Team III), and Vedant Agrawal (Team IV).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsDecreeModalOpen(true)}
                className="px-4 py-2.5 rounded-full bg-white border border-lion-gold/40 text-obsidian text-xs font-mono font-semibold tracking-wider hover:bg-stone-50 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5 text-lion-gold-dark" />
                <span>View Certified Decree</span>
              </button>

              <Link
                href="/events/upcoming-winter-internship-program-2026-27"
                className="px-5 py-2.5 rounded-full bg-obsidian text-white text-xs font-mono font-semibold tracking-wider hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Winter Event Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold" />
              </Link>
            </div>
          </div>

          {/* View Mode Switcher Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-obsidian font-semibold">
              <Sparkles className="w-4 h-4 text-lion-gold-dark" />
              <span>Select Active Student Roster View:</span>
            </div>

            <div className="flex items-center p-1 bg-stone-100 rounded-full border border-border w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  setRosterViewMode("winter_2026_27");
                  setTeamFilter("all");
                }}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-xs font-mono transition-all font-semibold ${
                  rosterViewMode === "winter_2026_27"
                    ? "bg-obsidian text-white shadow-sm"
                    : "text-slate hover:text-obsidian"
                }`}
              >
                Upcoming Winter Batch (26 Scholars)
              </button>
              <button
                type="button"
                onClick={() => {
                  setRosterViewMode("session_2026_27");
                  setTeamFilter("all");
                }}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-xs font-mono transition-all font-semibold ${
                  rosterViewMode === "session_2026_27"
                    ? "bg-obsidian text-white shadow-sm"
                    : "text-slate hover:text-obsidian"
                }`}
              >
                Annual Session Roll (37 Active &bull; 40 Allotted)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team-Wise Directory & Interactive Filter */}
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <span className="font-mono text-xs text-lion-gold-dark uppercase tracking-widest font-semibold">
              {rosterViewMode === "winter_2026_27"
                ? "Official Notification (05/11/2026) • 4 Operational Winter Teams"
                : "Official 2026–27 Team Roster • Organized by Team (1 to 4)"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian font-semibold mt-1">
              {rosterViewMode === "winter_2026_27"
                ? "Winter 2026–27 Deployment Registry"
                : "4-Team Student Welfare Registry"}
            </h2>
            <p className="text-xs sm:text-sm text-slate mt-1 font-sans max-w-2xl">
              {rosterViewMode === "winter_2026_27"
                ? "Active deployment of 26 selected scholars across Team I (Vaishnavi, HSM), Team II (Prateeksha Pandey, HSM), Team III (Shubhangi Singh, HSM), and Team IV (Vedant Agrawal, HSM)."
                : "Complete 2026–27 session roster organized across Team 1 (Team Unnaati & Shiksha), Team 2 (Team Vaishnavi & Navyanshi), Team 3 (Team Prateeksha & Rohini), and Team 4 (Team Shubhangi)."}
            </p>
          </div>

          {/* Search & Team Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search student name or ID..."
                className="pl-10 pr-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian placeholder-slate-400 focus:outline-none focus:border-lion-gold w-56 sm:w-64 shadow-sm"
              />
            </div>

            {rosterViewMode === "winter_2026_27" ? (
              <select
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
                aria-label="Filter by Winter Team"
                className="px-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-lion-gold font-mono shadow-sm"
              >
                <option value="all">All 4 Winter Teams (26 Scholars)</option>
                <option value="Team I">Team I: Vaishnavi (HSM) &bull; 8 Scholars</option>
                <option value="Team II">Team II: Prateeksha Pandey (HSM) &bull; 9 Scholars</option>
                <option value="Team III">Team III: Shubhangi Singh (HSM) &bull; 5 Scholars</option>
                <option value="Team IV">Team IV: Vedant Agrawal (HSM) &bull; 4 Scholars</option>
              </select>
            ) : (
              <select
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
                aria-label="Filter by Team"
                className="px-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-lion-gold font-mono shadow-sm"
              >
                <option value="all">All 4 Teams (37 + 03 Vacancy)</option>
                <option value="1">Team 1: Unnaati &amp; Shiksha (12)</option>
                <option value="2">Team 2: Vaishnavi &amp; Navyanshi (11)</option>
                <option value="3">Team 3: Prateeksha &amp; Rohini (10)</option>
                <option value="4">Team 4: Shubhangi (04 + 03 Vacancy)</option>
              </select>
            )}

            {rosterViewMode === "session_2026_27" && (
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                aria-label="Filter by Designation"
                className="px-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-lion-gold font-mono shadow-sm"
              >
                <option value="all">All Designations</option>
                <option value="HSM">HSM (Head Superintendent)</option>
                <option value="Dy. HSM">Dy. HSM (Deputy HSM)</option>
                <option value="Team Leader">Team Leader</option>
                <option value="Member">Member</option>
                <option value="Vacancy">Vacancy (03 Open Slots)</option>
              </select>
            )}
          </div>
        </div>

        {/* Quick Team Jump Pills */}
        {rosterViewMode === "winter_2026_27" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WINTER_INTERNSHIP_BATCH_2026_27.teams.map((wTeam) => {
              const isSelected = teamFilter === wTeam.teamCode;
              return (
                <button
                  key={wTeam.teamCode}
                  type="button"
                  onClick={() =>
                    setTeamFilter(isSelected ? "all" : wTeam.teamCode)
                  }
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-obsidian text-white border-obsidian shadow-card"
                      : "bg-white text-obsidian border-border hover:border-lion-gold/50 shadow-elevation-1"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className={isSelected ? "text-lion-gold" : "text-lion-gold-dark font-semibold"}>
                      {wTeam.teamCode}
                    </span>
                    <span className={isSelected ? "text-white/80" : "text-slate"}>
                      {wTeam.totalStrength} Scholars
                    </span>
                  </div>
                  <div className="font-serif text-base font-bold mt-1">
                    HSM: {wTeam.hsm.name}
                  </div>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 font-sans ${
                      isSelected ? "text-white/80" : "text-slate"
                    }`}
                  >
                    Commanded by appointed Head Superintendent Manager
                  </p>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDENT_WELFARE_TEAMS_2026_27.map((team) => {
              const isSelected = teamFilter === String(team.teamNumber);
              return (
                <button
                  key={team.teamNumber}
                  type="button"
                  onClick={() =>
                    setTeamFilter(isSelected ? "all" : String(team.teamNumber))
                  }
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-obsidian text-white border-obsidian shadow-card"
                      : "bg-white text-obsidian border-border hover:border-lion-gold/50 shadow-elevation-1"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                    <span className={isSelected ? "text-lion-gold" : "text-lion-gold-dark font-semibold"}>
                      Team 0{team.teamNumber}
                    </span>
                    <span className={isSelected ? "text-white/80" : "text-slate"}>
                      {team.currentCount} Enrolled
                      {team.vacancyCount > 0 ? ` + 0${team.vacancyCount} Vacancy` : ""}
                    </span>
                  </div>
                  <div className="font-serif text-base font-bold mt-1">
                    {team.teamTitle.replace(/^Team \d:\s*/, "")}
                  </div>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 font-sans ${
                      isSelected ? "text-white/80" : "text-slate"
                    }`}
                  >
                    {team.commandSummary}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Dynamic Team Content: Winter 2026-27 Mode vs. Session Mode */}
        {rosterViewMode === "winter_2026_27" ? (
          <div className="space-y-12">
            {filteredWinterTeams.map((wTeam) => (
              <div
                key={wTeam.teamCode}
                className="bg-white border border-border rounded-3xl overflow-hidden shadow-elevation-1"
              >
                {/* Team Architectural Banner */}
                <div className="p-6 sm:p-8 bg-slate-50 border-b border-border flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-lion-gold-dark font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>
                        Winter 2026&ndash;27 Deployment &bull; Decreed 05/11/2026
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      {wTeam.teamTitle}
                    </h3>
                    <p className="text-xs text-slate font-mono">
                      <strong className="text-obsidian">Supervisory Command:</strong> {wTeam.hsm.name} (HSM) &bull; Plagiarism Defense Track
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <div className="px-3.5 py-2 rounded-xl bg-white border border-border text-obsidian font-semibold shadow-2xs">
                      Deployed Strength: <span className="text-botanical-emerald">{wTeam.totalStrength} Scholars</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-lion-gold/10 text-lion-gold-dark font-semibold border border-lion-gold/30">
                      1 HSM + {wTeam.members.length} Members
                    </span>
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* HSM Card */}
                  <div className="bg-gradient-to-br from-white via-lion-gold/5 to-white border-2 border-lion-gold/40 rounded-2xl p-5 shadow-elevation-1 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-lion-gold/30 mb-3.5">
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="w-6 h-6 rounded-md bg-lion-gold/20 border border-lion-gold/40 flex items-center justify-center text-[11px] font-bold text-lion-gold-dark">
                            01
                          </span>
                          <span className="text-lion-gold-dark font-semibold">
                            {wTeam.hsm.scholarId}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase bg-lion-gold/20 text-lion-gold-dark border-lion-gold/40 font-bold">
                          HSM Commander
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5">
                        {scholarPhotoMap.get(wTeam.hsm.scholarId) ? (
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-lion-gold/40 shrink-0 bg-slate-100">
                            <Image
                              src={scholarPhotoMap.get(wTeam.hsm.scholarId)!}
                              alt={wTeam.hsm.name}
                              fill
                              sizes="48px"
                              className="object-cover object-top"
                            />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-xl bg-lion-gold/15 border border-lion-gold/30 flex items-center justify-center font-serif text-sm font-bold text-lion-gold-dark shrink-0">
                            {wTeam.hsm.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <h4 className="font-serif text-lg font-bold text-obsidian leading-snug">
                            {wTeam.hsm.name}
                          </h4>
                          <p className="text-xs text-lion-gold-dark font-mono font-medium">
                            Head Superintendent Manager
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-lion-gold/20 space-y-1 text-xs">
                        <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                          Academic Discipline:
                        </span>
                        <p className="text-obsidian font-sans text-xs font-medium">
                          {wTeam.hsm.academicDiscipline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-lion-gold/20 flex items-center justify-between text-[11px] font-mono text-slate">
                      <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Winter &apos;26&ndash;27 Command</span>
                      </span>
                      <span className="text-lion-gold-dark font-bold font-mono">05/11/26 Decree</span>
                    </div>
                  </div>

                  {/* Members Cards */}
                  {wTeam.members.map((mem, mIdx) => {
                    const initials = mem.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase();

                    return (
                      <div
                        key={mem.scholarId}
                        className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-border mb-3.5">
                            <div className="flex items-center gap-2 font-mono text-xs">
                              <span className="w-6 h-6 rounded-md bg-slate-100 border border-border flex items-center justify-center text-[11px] font-bold text-obsidian">
                                {String(mIdx + 2).padStart(2, "0")}
                              </span>
                              <span className="text-lion-gold-dark font-semibold">
                                {mem.scholarId}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase bg-slate-100 text-obsidian border-border font-medium">
                              Member
                            </span>
                          </div>

                          <div className="flex items-center gap-3.5">
                            {scholarPhotoMap.get(mem.scholarId) ? (
                              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-lion-gold/40 shrink-0 bg-slate-100">
                                <Image
                                  src={scholarPhotoMap.get(mem.scholarId)!}
                                  alt={mem.name}
                                  fill
                                  sizes="48px"
                                  className="object-cover object-top"
                                />
                              </div>
                            ) : (
                              <div className="w-11 h-11 rounded-xl bg-porcelain border border-border flex items-center justify-center font-serif text-sm font-bold text-lion-gold-dark shrink-0">
                                {initials}
                              </div>
                            )}
                            <div>
                              <h4 className="font-serif text-lg font-bold text-obsidian leading-snug">
                                {mem.name}
                              </h4>
                              <p className="text-xs text-slate font-medium">
                                {wTeam.teamCode} &bull; Research Member
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-border space-y-1 text-xs">
                            <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                              Academic Discipline:
                            </span>
                            <p className="text-obsidian font-sans text-xs font-medium">
                              {mem.academicDiscipline}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
                          <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Winter Cohort</span>
                          </span>
                          <span className="text-slate">HSM: {wTeam.hsm.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Render Full Session Teams (37 Active + 03 Vacancy) */
          <div className="space-y-12">
          {STUDENT_WELFARE_TEAMS_2026_27.map((team) => {
            const teamMembers = filteredScholars
              .filter((s) => (s.teamNumber || 1) === team.teamNumber)
              .sort((a, b) => (a.teamRank || 99) - (b.teamRank || 99));

            if (teamMembers.length === 0) return null;

            return (
              <div
                key={team.teamNumber}
                className="bg-white border border-border rounded-3xl overflow-hidden shadow-elevation-1"
              >
                {/* Team Architectural Banner */}
                <div className="p-6 sm:p-8 bg-slate-50 border-b border-border flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-lion-gold-dark font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>
                        KSF (Student Welfare) Wing &bull; Session {STUDENT_COHORT_SUMMARY_2026_27.session}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
                      {team.teamTitle}
                    </h3>
                    <p className="text-xs text-slate font-mono">
                      <strong className="text-obsidian">Command Structure:</strong> {team.commandSummary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <div className="px-3.5 py-2 rounded-xl bg-white border border-border text-obsidian font-semibold shadow-2xs">
                      Current Strength: <span className="text-botanical-emerald">{team.currentCount}</span>
                    </div>
                    {team.vacancyCount > 0 && (
                      <div className="px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 font-semibold shadow-2xs">
                        Vacancy: 0{team.vacancyCount} Slots Open
                      </div>
                    )}
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {teamMembers.map((scholar) => {
                    const isVacant = scholar.isVacant || scholar.teamRole === "Vacancy";

                    if (isVacant) {
                      return (
                        <div
                          key={scholar.id}
                          className="border-2 border-dashed border-amber-300/80 bg-amber-50/30 rounded-2xl p-5 flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between pb-2.5 border-b border-amber-200/70">
                              <span className="font-mono text-xs text-amber-900 font-bold">
                                #{scholar.teamRank} &bull; {scholar.scholarId}
                              </span>
                              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase bg-amber-100 text-amber-900 border-amber-300 font-semibold">
                                Vacancy
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
                                <UserPlus className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-serif text-lg font-bold text-obsidian">
                                  {scholar.fullName}
                                </h4>
                                <p className="text-xs text-slate font-mono">
                                  {scholar.academicDiscipline}
                                </p>
                              </div>
                            </div>

                            <p className="text-xs text-slate leading-relaxed font-sans">
                              Reserved allotted seat under {team.teamTitle}. Induction conducted via Psychometric Test &amp; Professional Interview by the 3 Core Trustees.
                            </p>
                          </div>

                          <div className="pt-3 border-t border-amber-200/70 flex items-center justify-between">
                            <span className="font-mono text-[10px] text-amber-900 uppercase font-semibold">
                              Allotted Seat #{scholar.scholarId.slice(-2)} of 40
                            </span>
                            <Link
                              href="/#mutual-aid"
                              className="inline-flex items-center gap-1 font-mono text-[11px] text-lion-gold-dark hover:text-obsidian font-semibold"
                            >
                              <span>Apply for Slot</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    }

                    const initials = scholar.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase();

                    return (
                      <div
                        key={scholar.id}
                        className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row: Team Rank + Scholar ID + Official Role Badge */}
                          <div className="flex items-center justify-between pb-3 border-b border-border mb-3.5">
                            <div className="flex items-center gap-2 font-mono text-xs">
                              <span className="w-6 h-6 rounded-md bg-slate-100 border border-border flex items-center justify-center text-[11px] font-bold text-obsidian">
                                {scholar.teamRank || "•"}
                              </span>
                              <span className="text-lion-gold-dark font-semibold">
                                {scholar.scholarId}
                              </span>
                            </div>
                            <span
                              className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase ${getRoleBadgeStyle(
                                scholar.teamRole
                              )}`}
                            >
                              {scholar.teamRole || "Member"}
                            </span>
                          </div>

                          {/* Scholar Identity Row */}
                          <div className="flex items-center gap-3.5">
                            {scholar.photoUrl ? (
                              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-lion-gold/40 shrink-0 bg-slate-100">
                                <Image
                                  src={scholar.photoUrl}
                                  alt={scholar.fullName}
                                  fill
                                  sizes="48px"
                                  className="object-cover object-top"
                                />
                              </div>
                            ) : (
                              <div className="w-11 h-11 rounded-xl bg-porcelain border border-border flex items-center justify-center font-serif text-sm font-bold text-lion-gold-dark shrink-0">
                                {initials}
                              </div>
                            )}
                            <div>
                              <h4 className="font-serif text-lg font-bold text-obsidian leading-snug">
                                {scholar.fullName}
                              </h4>
                              <p className="text-xs text-slate font-medium">
                                {scholar.teamName || team.teamTitle}
                              </p>
                            </div>
                          </div>

                          {/* Assignment & Soft Skills */}
                          <div className="mt-4 pt-3 border-t border-border space-y-2 text-xs">
                            <div>
                              <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                                Role &amp; Wing Assignment:
                              </span>
                              <p className="text-obsidian font-sans text-xs mt-0.5 font-medium">
                                {scholar.academicDiscipline}
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                                Soft-Skills &amp; Research Track:
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
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>100% Endowed &bull; 2026&ndash;27</span>
                          </span>
                          <span>Att: {scholar.attendanceRate}%</span>
                        </div>

                        {winterScholarMap.has(scholar.scholarId) && (
                          <div className="mt-2.5 pt-2 border-t border-border/60 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-botanical-emerald font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-lion-gold-dark" />
                              <span>Winter &apos;26&ndash;27: {winterScholarMap.get(scholar.scholarId)?.teamCode}</span>
                            </span>
                            <span className="text-lion-gold-dark font-medium">
                              {winterScholarMap.get(scholar.scholarId)?.decreeRole === "HSM" ? "HSM Commander" : "Member"}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        )}

        {((rosterViewMode === "winter_2026_27" && filteredWinterTeams.length === 0) ||
          (rosterViewMode === "session_2026_27" && filteredScholars.length === 0)) && (
          <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-sm text-slate font-mono text-xs">
            No students found matching current team or search filters.
          </div>
        )}
      </div>

      {/* Institutional Mandate Cards (PDF Charter) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-border">
        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Psychometric &amp; Interview Selection
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Students are chosen through a structured psychometric test and panel interview organized by our 3 Core Trustees and conducted by accomplished industry professionals.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            4 Teams &amp; Dual Internships
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Scholars participate in the Summer Internship Program and Winter Internship Program, organized into 4 teams—each headed by a Head Superintendent Manager, Dy. Head Superintendent Manager, and Team Leader.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Plagiarism-Audited Research &amp; PPT
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Each team receives diverse research topics, prepares a formatted Research Report and PowerPoint Presentation before top professionals, and undergoes a strict Plagiarism Report audit to verify copying percentage and authenticity.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
            <CheckCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Closing Ceremony &amp; Stipends
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Alongside regular expert sessions that instill confidence and technical knowledge, each cohort concludes with an Internship Closing Ceremony awarding Certificates, Trophies, Mementos, and a Stipend amount.
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
              Soft Skills &amp; Leadership Labs
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

      {/* Operational Hierarchy & Supervisory Corps (Student Welfare Wing) */}
      <div className="pt-10 border-t border-border">
        <OperationalHierarchy />
      </div>

      {/* Official Letterhead Decree Lightbox Modal */}
      {isDecreeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsDecreeModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden p-5 sm:p-7 shadow-2xl border border-lion-gold/40 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-3.5">
              <div>
                <span className="font-mono text-[10px] text-lion-gold-dark uppercase tracking-widest font-semibold block">
                  Official Letterhead Decree &bull; Executed 05/11/2026
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-obsidian">
                  Final List for Upcoming Internship Program
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsDecreeModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-obsidian hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-[1/1.4] rounded-2xl overflow-hidden bg-slate-50 border border-border shadow-inner">
              <Image
                src={WINTER_INTERNSHIP_BATCH_2026_27.decreeDocumentUrl}
                alt="Official Executed Decree: Final List for Upcoming Internship Program"
                fill
                className="object-contain p-1"
                sizes="(max-width: 640px) 90vw, 550px"
              />
            </div>

            <div className="text-xs font-mono text-slate flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-border">
              <span>Signatory: <strong className="text-obsidian">Secretary Shri Anuj Kumar Singh</strong></span>
              <span>Place: <strong className="text-obsidian">Prayagraj, U.P.</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
