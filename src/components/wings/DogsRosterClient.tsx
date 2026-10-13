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
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 text-botanical-emerald text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Heart className="w-3.5 h-3.5" />
          <span>Operational Wing B &bull; 4 Built Shelter Homes &bull; 34 Street Dogs</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Dog Care <span className="italic text-botanical-emerald font-light">Centre</span>
        </h1>
        <div className="space-y-1">
          <p className="font-serif text-lg text-botanical-emerald italic font-semibold">
            &ldquo;A Journey from struggle to Enlightenment&rdquo;
          </p>
          <p className="font-mono text-xs sm:text-sm text-slate tracking-widest uppercase font-semibold">
            Trust registered under Indian Trust Act of 1882 &bull; 4 Built Shelter Homes &bull; 34 Rescued Canines
          </p>
        </div>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          The Kiran Singh Foundation has built <strong className="text-obsidian font-semibold">4 dedicated shelter homes</strong> housing <strong className="text-obsidian font-semibold">34 rescued street dogs in total</strong> in Prayagraj. Street dogs are rescued, vaccinated, and provided with complete <strong className="text-obsidian font-semibold">food, clean water, shelter, and medical facilities</strong> to save them from diseases and accidents and ensure a decent standard of living.
        </p>
      </div>

      {/* 3 Ethological Sanctuary Zones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
              Zone Alpha
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate border border-border">
              Intake & Quarantine
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Critical Care & Isolation
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Biosecure isolation kennels for newly rescued canines, post-operative sterilization recovery,
            parvovirus/distemper quarantine screening, and complex trauma wound debridement under continuous telemetry.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
              Zone Beta
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate border border-border">
              Main Pack Sanctuary
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Socialized Cohort Grounds
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Spacious, shaded socialization paddocks equipped with bioclimatic thermal stones and natural turf runs,
            fostering low-stress pack hierarchy dynamics calibrated using Late Kiran Singh ji’s behavioral models.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-elevation-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
              Zone Gamma
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate border border-border">
              Senior & Palliative Care
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-obsidian">
            Geriatric Comfort Suites
          </h3>
          <p className="text-xs text-slate leading-relaxed font-sans">
            Specialized climate-controlled quarters featuring orthopedic memory foam resting pads, therapeutic infrared
            lamps for osteoarthritis relief, and tailored renal/hepatic pureed diets formulated for our senior canines.
          </p>
        </div>
      </div>

      {/* Directory of 34 Rescued Dogs */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <span className="font-mono text-xs text-botanical-emerald uppercase tracking-widest font-semibold">
              Authoritative Canine Registry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian font-semibold mt-1">
              The 34 Resident Canines
            </h2>
            <p className="text-xs sm:text-sm text-slate mt-1 font-sans">
              Complete records of rabies vaccinations, annual booster schedules, and individual clinical histories.
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
                placeholder="Search dog name or tag..."
                className="pl-10 pr-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian placeholder-slate-400 focus:outline-none focus:border-botanical-emerald w-64 shadow-sm"
              />
            </div>

            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-botanical-emerald font-mono shadow-sm"
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
            <div key={dog.id} className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-botanical-emerald/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Photo & Header */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-border bg-slate-50">
                  <Image
                    src={dog.photoUrl}
                    alt={`${dog.name} - ${dog.tagNumber}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-border font-mono text-[10px] text-botanical-emerald font-semibold shadow-sm">
                    {dog.tagNumber}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-botanical-emerald/90 backdrop-blur-md font-mono text-[10px] text-white flex items-center space-x-1 shadow-sm font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Sterilized</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-obsidian">
                    {dog.name}
                  </h3>
                  <span className="text-xs font-mono text-slate">
                    {dog.gender} &bull; {dog.estimatedAge}
                  </span>
                </div>

                <p className="text-xs text-slate mt-1 font-sans">
                  {dog.breedMix}
                </p>

                <div className="mt-4 pt-3 border-t border-border space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Sanctuary Zone & Cohort Placement:
                    </span>
                    <p className="text-botanical-emerald font-sans text-xs mt-0.5 font-semibold">
                      {dog.zoneIdentifier}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Rescue Provenance & Ingestion Date:
                    </span>
                    <p className="text-obsidian text-xs mt-0.5 font-sans">
                      {dog.rescueLocation} &bull; <span className="font-mono text-slate">{dog.rescueDate}</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Clinical Nutrition Specification:
                    </span>
                    <p className="text-slate text-xs mt-0.5 font-sans">
                      {dog.dietaryNeeds}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate block font-medium">
                      Veterinary Case Summary:
                    </span>
                    <p className="text-slate text-xs mt-0.5 font-sans italic">
                      "{dog.medicalNotes}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Immunization Footer */}
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono">
                <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                  <Syringe className="w-3 h-3" />
                  <span>Rabies Record: {dog.rabiesVaccinationDate}</span>
                </span>
                <span className="text-slate font-medium">
                  Annual Booster Due: {dog.boosterDueDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredDogs.length === 0 && (
          <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-sm text-slate font-mono text-xs">
            No canines found matching current search filters.
          </div>
        )}
      </div>
    </div>
  );
}
