"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Syringe, ShieldCheck, Search } from "lucide-react";
import { RescuedDog } from "@/lib/data/foundation-data";

export default function DogsRosterClient({
  dogs,
}: {
  dogs: RescuedDog[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [zoneFilter, setZoneFilter] = useState<string>("all");

  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch =
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.tagNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.rescueLocation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesZone =
      zoneFilter === "all" || dog.zoneIdentifier.includes(zoneFilter);

    return matchesSearch && matchesZone;
  });

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-sanctuary/30 border border-emerald-sanctuary/60 text-emerald-400 text-[10px] font-mono tracking-widest uppercase">
          <Heart className="w-3.5 h-3.5" />
          <span>Operational Wing B &bull; 100% Endowed Shelter</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-parchment uppercase leading-tight font-normal">
          Dog Care <span className="italic text-emerald-400 font-light">Centre</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-emerald-400 tracking-widest uppercase">
          34 Rescued Street Dogs &bull; 100% Rabies Vaccinated & Sterilized
        </p>
        <p className="text-sm sm:text-base text-parchment-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Protects and shelters exactly 34 rescued street dogs. All food, housing, medical care, sterilizations,
          and vaccinations (rabies and annual boosters) are 100% funded by the foundation across three monitored zones.
        </p>
      </div>

      {/* 3 Ethological Sanctuary Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bezel-card border-emerald-sanctuary/30">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 uppercase font-semibold">
                Zone Alpha
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Triage & Quarantine
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              Critical Care & Intake
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed font-sans">
              Dedicated veterinary isolation runs for fresh intakes, post-surgical sterilization recovery,
              and trauma wound debridement with 24/7 telemetry monitoring.
            </p>
          </div>
        </div>

        <div className="bezel-card border-emerald-sanctuary/30">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 uppercase font-semibold">
                Zone Beta
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Main Community
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              Main Pack Sanctuary
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed font-sans">
              Open-air shaded socialization paddocks with thermal resting stones and agility runs,
              allowing healthy resident dogs to exercise in stable, low-stress pack hierarchies.
            </p>
          </div>
        </div>

        <div className="bezel-card border-emerald-sanctuary/30">
          <div className="bezel-card-inner p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 uppercase font-semibold">
                Zone Gamma
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Palliative Haven
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-parchment">
              Senior & Palliative Run
            </h3>
            <p className="text-xs text-parchment-muted leading-relaxed font-sans">
              Geriatric comfort suites equipped with orthopedic memory foam bedding, low-impact infrared lamps,
              and customized renal/hepatic pureed diets for senior companions.
            </p>
          </div>
        </div>
      </div>

      {/* Directory of 34 Rescued Dogs */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-parchment/10 pb-6">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              Authoritative Canine Registry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-parchment font-semibold mt-1">
              The 34 Resident Canines
            </h2>
            <p className="text-xs sm:text-sm text-parchment-muted mt-1">
              Complete records of rabies vaccinations, annual booster schedules, and individual clinical histories.
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
                placeholder="Search dog name or tag..."
                className="pl-10 pr-4 py-2 bg-obsidian border border-parchment/20 rounded-full text-xs text-parchment placeholder-parchment-dim focus:outline-none focus:border-emerald-400 w-64"
              />
            </div>

            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="px-4 py-2 bg-obsidian border border-parchment/20 rounded-full text-xs text-parchment focus:outline-none focus:border-emerald-400 font-mono"
            >
              <option value="all">All Sanctuary Zones</option>
              <option value="Zone Alpha">Zone Alpha (Quarantine/Critical)</option>
              <option value="Zone Beta">Zone Beta (Main Pack)</option>
              <option value="Zone Gamma">Zone Gamma (Senior Run)</option>
            </select>
          </div>
        </div>

        {/* Canines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDogs.map((dog) => (
            <div key={dog.id} className="bezel-card bezel-card-hover border-emerald-sanctuary/20">
              <div className="bezel-card-inner p-5 flex flex-col justify-between">
                <div>
                  {/* Photo & Header */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-white/5 bg-obsidian">
                    <Image
                      src={dog.photoUrl}
                      alt={`${dog.name} - ${dog.tagNumber}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-emerald-400 font-semibold">
                      {dog.tagNumber}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md font-mono text-[10px] text-white flex items-center space-x-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Sterilized</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-parchment">
                      {dog.name}
                    </h3>
                    <span className="text-xs font-mono text-parchment-dim">
                      {dog.gender} &bull; {dog.estimatedAge}
                    </span>
                  </div>

                  <p className="text-xs text-parchment-muted mt-1 font-sans">
                    {dog.breedMix}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Sanctuary Zone:
                      </span>
                      <p className="text-emerald-300 font-sans text-xs mt-0.5 font-medium">
                        {dog.zoneIdentifier}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Rescue Origin:
                      </span>
                      <p className="text-parchment text-xs mt-0.5 font-sans">
                        {dog.rescueLocation} ({dog.rescueDate})
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Dietary Management:
                      </span>
                      <p className="text-parchment-muted text-xs mt-0.5 font-sans">
                        {dog.dietaryNeeds}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-parchment-dim block">
                        Clinical & Behavioral Notes:
                      </span>
                      <p className="text-parchment-muted text-xs mt-0.5 font-sans italic">
                        "{dog.medicalNotes}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Immunization Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <Syringe className="w-3 h-3" />
                    <span>Rabies: {dog.rabiesVaccinationDate}</span>
                  </span>
                  <span className="text-parchment-dim">
                    Booster: {dog.boosterDueDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDogs.length === 0 && (
          <div className="p-12 text-center bezel-card">
            <div className="bezel-card-inner p-8 text-parchment-dim font-mono text-xs">
              No canines found matching current search filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
