"use client";

import React, { useState } from "react";
import { StudentScholar, STUDENT_COHORT_SUMMARY_2026_27 } from "@/lib/data/foundation-data";

export default function StudentsDeskClient({
  scholars,
}: {
  scholars: StudentScholar[];
}) {
  const [search, setSearch] = useState("");
  const [teamFilter, setTeamFilter] = useState("all");

  const filtered = scholars.filter((s) => {
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      s.fullName.toLowerCase().includes(q) ||
      s.scholarId.toLowerCase().includes(q) ||
      (s.teamName || "").toLowerCase().includes(q) ||
      (s.teamRole || "").toLowerCase().includes(q) ||
      s.academicDiscipline.toLowerCase().includes(q);
    const matchesTeam =
      teamFilter === "all" || String(s.teamNumber || "") === teamFilter;
    return matchesSearch && matchesTeam;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Wing A: KSF (Student Welfare) Wing Roster ({STUDENT_COHORT_SUMMARY_2026_27.session})
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-1">
            Current Strength: <strong className="text-obsidian">{STUDENT_COHORT_SUMMARY_2026_27.currentStrength}</strong> &bull; Allotted Strength: <strong className="text-obsidian">{STUDENT_COHORT_SUMMARY_2026_27.allottedStrength}</strong> &bull; Vacancy: <strong className="text-amber-800">0{STUDENT_COHORT_SUMMARY_2026_27.vacancy}</strong> &bull; 4 Active Teams
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={teamFilter}
            onChange={(e) => setTeamFilter(e.target.value)}
            aria-label="Filter by Team"
            className="bg-white border border-border rounded-full px-4 py-2 text-xs text-obsidian font-mono focus:outline-none focus:border-lion-gold shadow-sm"
          >
            <option value="all">All 4 Teams (37 + 03 Vacancy)</option>
            <option value="1">Team 1: Unnaati &amp; Shiksha (12)</option>
            <option value="2">Team 2: Vaishnavi &amp; Navyanshi (11)</option>
            <option value="3">Team 3: Prateeksha &amp; Rohini (10)</option>
            <option value="4">Team 4: Shubhangi (04 + 03 Vacancy)</option>
          </select>

          <div className="w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search student or team..."
              className="w-full bg-white border border-border rounded-full px-4 py-2 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-border text-[10px] font-mono uppercase text-slate-muted bg-porcelain/60">
                <th className="py-2.5 px-3">Scholar ID</th>
                <th className="py-2.5 px-3">Team &amp; S.No.</th>
                <th className="py-2.5 px-3">Student Name</th>
                <th className="py-2.5 px-3">Designation</th>
                <th className="py-2.5 px-3">Placement &amp; Research Cell</th>
                <th className="py-2.5 px-3">Attendance</th>
                <th className="py-2.5 px-3 text-right">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-slate-muted">
              {filtered.map((s) => (
                <tr
                  key={s.id}
                  className={`hover:bg-porcelain/50 transition-colors ${
                    s.isVacant ? "bg-amber-50/40" : ""
                  }`}
                >
                  <td className="py-3 px-3 font-mono text-lion-gold-dark font-semibold">
                    {s.scholarId}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-obsidian">
                    <div>{s.teamName || `Team ${s.teamNumber || 1}`}</div>
                    <div className="text-[10px] text-slate">Team S.No. #{s.teamRank || "•"}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-obsidian">
                    {s.fullName}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-gray-100 text-obsidian border border-border font-semibold">
                      {s.teamRole || "Member"}
                    </span>
                  </td>
                  <td className="py-3 px-3 max-w-xs truncate text-[11px] text-obsidian/80">
                    {s.internshipPlacement}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-botanical-emerald font-semibold">
                    {s.isVacant ? "OPEN" : `${s.attendanceRate}%`}
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[10px] text-slate-muted">
                    {s.emergencyContactPhone || "Protected RLS"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
