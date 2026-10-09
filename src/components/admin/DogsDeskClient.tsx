"use client";

import React, { useState } from "react";
import { Heart, Search, Syringe, ShieldCheck } from "lucide-react";
import { RescuedDog } from "@/lib/data/foundation-data";

export default function DogsDeskClient({
  dogs,
}: {
  dogs: RescuedDog[];
}) {
  const [search, setSearch] = useState("");

  const filtered = dogs.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.tagNumber.toLowerCase().includes(search.toLowerCase()) ||
      d.rescueLocation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Wing B: 34 Canines Healthcare Registry
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-0.5">
            Rabies & booster schedules &bull; Dietary profiles &bull; Three sanctuary zones
          </p>
        </div>

        <div className="w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search canine..."
            className="w-full bg-white border border-border rounded-full px-4 py-2 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-botanical-emerald shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-border text-[10px] font-mono uppercase text-slate-muted bg-porcelain/60">
                <th className="py-2.5 px-3">Tag ID</th>
                <th className="py-2.5 px-3">Name & Details</th>
                <th className="py-2.5 px-3">Sanctuary Zone</th>
                <th className="py-2.5 px-3">Rabies Vaccinated</th>
                <th className="py-2.5 px-3">Booster Due</th>
                <th className="py-2.5 px-3">Dietary Care</th>
                <th className="py-2.5 px-3 text-right">Sterilized</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-slate-muted">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-porcelain/50 transition-colors">
                  <td className="py-3 px-3 font-mono text-botanical-emerald font-semibold">
                    {d.tagNumber}
                  </td>
                  <td className="py-3 px-3 font-medium text-obsidian">
                    <div>{d.name}</div>
                    <div className="text-[10px] text-slate-muted font-mono">
                      {d.gender}, {d.estimatedAge}
                    </div>
                  </td>
                  <td className="py-3 px-3 text-[11px] text-obsidian font-medium">
                    {d.zoneIdentifier}
                  </td>
                  <td className="py-3 px-3 font-mono text-[10px] text-obsidian">
                    {d.rabiesVaccinationDate}
                  </td>
                  <td className="py-3 px-3 font-mono text-[10px] text-amber-600 font-semibold">
                    {d.boosterDueDate}
                  </td>
                  <td className="py-3 px-3 max-w-xs truncate text-[11px] text-obsidian/80">
                    {d.dietaryNeeds}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-botanical-emerald text-[10px] font-mono border border-emerald-200 font-semibold">
                      Sterilized
                    </span>
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
