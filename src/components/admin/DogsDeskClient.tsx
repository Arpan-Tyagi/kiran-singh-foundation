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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment/10 pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-parchment">
            Wing B: 34 Canines Healthcare Registry
          </h2>
          <p className="text-xs text-parchment-dim font-mono mt-0.5">
            Rabies & booster schedules &bull; Dietary profiles &bull; Three sanctuary zones
          </p>
        </div>

        <div className="w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search canine..."
            className="w-full bg-obsidian border border-parchment/20 rounded-full px-4 py-2 text-xs text-parchment focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      <div className="bezel-card">
        <div className="bezel-card-inner p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-mono uppercase text-parchment-dim">
                  <th className="pb-3">Tag ID</th>
                  <th className="pb-3">Name & Details</th>
                  <th className="pb-3">Sanctuary Zone</th>
                  <th className="pb-3">Rabies Vaccinated</th>
                  <th className="pb-3">Booster Due</th>
                  <th className="pb-3">Dietary Care</th>
                  <th className="pb-3 text-right">Sterilized</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-parchment-muted">
                {filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 font-mono text-emerald-400 font-semibold">
                      {d.tagNumber}
                    </td>
                    <td className="py-3 font-medium text-parchment">
                      <div>{d.name}</div>
                      <div className="text-[10px] text-parchment-dim font-mono">
                        {d.gender}, {d.estimatedAge}
                      </div>
                    </td>
                    <td className="py-3 text-[11px] text-emerald-300">
                      {d.zoneIdentifier}
                    </td>
                    <td className="py-3 font-mono text-[10px] text-parchment">
                      {d.rabiesVaccinationDate}
                    </td>
                    <td className="py-3 font-mono text-[10px] text-amber-400 font-semibold">
                      {d.boosterDueDate}
                    </td>
                    <td className="py-3 max-w-xs truncate text-[11px]">
                      {d.dietaryNeeds}
                    </td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
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
    </div>
  );
}
