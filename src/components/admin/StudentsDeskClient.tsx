"use client";

import React, { useState } from "react";
import { GraduationCap, Search, CheckCircle, Phone } from "lucide-react";
import { StudentScholar } from "@/lib/data/foundation-data";

export default function StudentsDeskClient({
  scholars,
}: {
  scholars: StudentScholar[];
}) {
  const [search, setSearch] = useState("");

  const filtered = scholars.filter(
    (s) =>
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.scholarId.toLowerCase().includes(search.toLowerCase()) ||
      s.academicDiscipline.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Wing A: 40 Scholars Administration Roster
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-0.5">
            Full cohort tracking &bull; 100% stipend coverage &bull; Pro bono internship placement
          </p>
        </div>

        <div className="w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scholar..."
            className="w-full bg-white border border-border rounded-full px-4 py-2 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-border text-[10px] font-mono uppercase text-slate-muted bg-porcelain/60">
                <th className="py-2.5 px-3">Scholar ID</th>
                <th className="py-2.5 px-3">Name</th>
                <th className="py-2.5 px-3">Discipline & College</th>
                <th className="py-2.5 px-3">Placement</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Attendance</th>
                <th className="py-2.5 px-3 text-right">Emergency Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-slate-muted">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-porcelain/50 transition-colors">
                  <td className="py-3 px-3 font-mono text-lion-gold-dark font-semibold">
                    {s.scholarId}
                  </td>
                  <td className="py-3 px-3 font-medium text-obsidian">
                    {s.fullName}
                  </td>
                  <td className="py-3 px-3">
                    <div className="text-obsidian font-medium">{s.academicDiscipline}</div>
                    <div className="text-[11px] text-slate-muted font-medium">{s.institution}</div>
                  </td>
                  <td className="py-3 px-3 max-w-xs truncate text-[11px] text-obsidian/80">
                    {s.internshipPlacement}
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono text-[11px] uppercase px-2 py-0.5 rounded-full bg-gray-100 text-slate-muted border border-border font-medium">
                      {s.internshipStatus.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-botanical-emerald font-semibold">
                    {s.attendanceRate}%
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
