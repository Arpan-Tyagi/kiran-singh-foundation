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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment/10 pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-parchment">
            Wing A: 40 Scholars Administration Roster
          </h2>
          <p className="text-xs text-parchment-dim font-mono mt-0.5">
            Full cohort tracking &bull; 100% stipend coverage &bull; Pro bono internship placement
          </p>
        </div>

        <div className="w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scholar..."
            className="w-full bg-obsidian border border-parchment/20 rounded-full px-4 py-2 text-xs text-parchment focus:outline-none focus:border-lion-gold"
          />
        </div>
      </div>

      <div className="bezel-card">
        <div className="bezel-card-inner p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-mono uppercase text-parchment-dim">
                  <th className="pb-3">Scholar ID</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Discipline & College</th>
                  <th className="pb-3">Placement</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Attendance</th>
                  <th className="pb-3 text-right">Emergency Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-parchment-muted">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 font-mono text-lion-gold font-semibold">
                      {s.scholarId}
                    </td>
                    <td className="py-3 font-medium text-parchment">
                      {s.fullName}
                    </td>
                    <td className="py-3">
                      <div>{s.academicDiscipline}</div>
                      <div className="text-[10px] text-parchment-dim">{s.institution}</div>
                    </td>
                    <td className="py-3 max-w-xs truncate text-[11px]">
                      {s.internshipPlacement}
                    </td>
                    <td className="py-3">
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 text-parchment-dim">
                        {s.internshipStatus.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-3 font-mono text-[11px] text-emerald-400">
                      {s.attendanceRate}%
                    </td>
                    <td className="py-3 text-right font-mono text-[10px] text-parchment-dim">
                      {s.emergencyContactPhone || "Protected RLS"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
