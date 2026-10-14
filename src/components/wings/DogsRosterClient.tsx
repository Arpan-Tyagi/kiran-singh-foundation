"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Syringe,
  ShieldCheck,
  Search,
  Stethoscope,
  Video,
  Sparkles,
  Filter,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  AlertCircle,
  Home,
  Info,
} from "lucide-react";
import { RescuedDog } from "@/lib/data/foundation-data";

interface DogsRosterClientProps {
  dogs: RescuedDog[];
}

// 11 Flagship Named Rescues with specific clinical & narrative spotlights
const FLAGSHIP_DOG_IDS = [
  "dog-001", // Bujo
  "dog-002", // Jujo
  "dog-003", // Khujo
  "dog-004", // Tujo
  "dog-005", // Safedi
  "dog-006", // Branto
  "dog-007", // Mario
  "dog-008", // Victor
  "dog-009", // Casper
  "dog-010", // Leo
  "dog-011", // Chotu
];

export default function DogsRosterClient({ dogs }: DogsRosterClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [zoneFilter, setZoneFilter] = useState<string>("all");
  const [activeFlagshipTab, setActiveFlagshipTab] = useState<string>("dog-001");
  const [flagshipFilterOnly, setFlagshipFilterOnly] = useState<boolean>(false);

  // Filtered roster of dogs
  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch =
      dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.tagNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.rescueLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dog.breedMix.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesZone =
      zoneFilter === "all" || dog.zoneIdentifier.includes(zoneFilter);

    const matchesFlagship =
      !flagshipFilterOnly || FLAGSHIP_DOG_IDS.includes(dog.id);

    return matchesSearch && matchesZone && matchesFlagship;
  });

  // The 11 Flagship Dogs list
  const flagshipDogs = dogs.filter((d) => FLAGSHIP_DOG_IDS.includes(d.id));
  const activeDog =
    flagshipDogs.find((d) => d.id === activeFlagshipTab) || flagshipDogs[0] || dogs[0];

  return (
    <div className="bg-porcelain min-h-screen text-obsidian">
      {/* =========================================================================
          HERO & INSTITUTIONAL CHARTER
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-border bg-gradient-to-b from-white via-porcelain to-white/70">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 text-botanical-emerald text-[11px] font-mono tracking-widest uppercase font-semibold">
              <Heart className="w-3.5 h-3.5 text-botanical-emerald fill-botanical-emerald/20" />
              <span>Operational Wing B &bull; 4 Built Shelter Homes &bull; 34 Rescued Canines</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-obsidian uppercase tracking-tight leading-none font-normal">
              Dog Care <span className="italic text-botanical-emerald font-light">Centre</span>
            </h1>

            <div className="space-y-1.5">
              <p className="font-serif text-xl sm:text-2xl text-botanical-emerald italic font-medium">
                &ldquo;A Journey from struggle to Enlightenment&rdquo;
              </p>
              <p className="font-mono text-xs sm:text-sm text-slate tracking-widest uppercase font-semibold">
                Trust Registered Under Indian Trust Act of 1882 &bull; Registered Secretariat: Prayagraj, UP (211006)
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate leading-relaxed max-w-3xl mx-auto font-sans">
              Under this wing, the Kiran Singh Foundation has built{" "}
              <strong className="text-obsidian font-semibold">4 dedicated shelter homes</strong> housing{" "}
              <strong className="text-obsidian font-semibold">34 street dogs in total</strong> in Prayagraj. Street dogs
              are rescued and vaccinated alongside partner clinical veterinary care to save them from diseases and
              accidents, providing complete{" "}
              <strong className="text-obsidian font-semibold">food, shelter, clean water, and medical facilities</strong>{" "}
              to ensure a dignified standard of living.
            </p>
          </div>

          {/* Institutional Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 text-center space-y-1">
              <span className="font-mono text-[11px] text-slate uppercase block font-semibold">
                Resident Cohort
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian block">
                34
              </span>
              <span className="text-[11px] font-mono text-botanical-emerald font-medium block">
                Rescued Street Dogs
              </span>
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 text-center space-y-1">
              <span className="font-mono text-[11px] text-slate uppercase block font-semibold">
                Infrastructure
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-botanical-emerald block">
                4
              </span>
              <span className="text-[11px] font-mono text-slate font-medium block">
                Built Shelter Homes
              </span>
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 text-center space-y-1">
              <span className="font-mono text-[11px] text-slate uppercase block font-semibold">
                Rabies Compliance
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-obsidian block">
                100%
              </span>
              <span className="text-[11px] font-mono text-botanical-emerald font-medium block">
                Annual Booster Cycle
              </span>
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 shadow-elevation-1 text-center space-y-1">
              <span className="font-mono text-[11px] text-slate uppercase block font-semibold">
                Clinical Facility
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-lion-gold-dark block">
                Vet N Pet
              </span>
              <span className="text-[11px] font-mono text-slate font-medium block">
                Dr. V. K. Singh (Prayagraj)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 11 FLAGSHIP CANINES: SPOTLIGHT DOSSIER & PHOTOGRAPHY
         ========================================================================= */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-10 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-botanical-emerald font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Photographic Evidence &amp; Field Spotlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian font-semibold">
              The 11 Flagship Rescued Canines
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans max-w-2xl">
              Forensically analyzed from our Prayagraj photographic archives. Each canine is housed with daily cooked
              rations, individualized medical regimens, and full biosecurity.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate">Cohort Order:</span>
            <span className="px-3 py-1 rounded-full bg-white border border-border font-semibold text-botanical-emerald">
              a to k (11 Flagship Residents)
            </span>
          </div>
        </div>

        {/* 11 Navigation Selector Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-thin">
          {flagshipDogs.map((dog, idx) => {
            const letter = String.fromCharCode(97 + idx); // a, b, c, ...
            const isActive = dog.id === activeDog.id;
            return (
              <button
                key={dog.id}
                onClick={() => setActiveFlagshipTab(dog.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-mono transition-all border ${
                  isActive
                    ? "bg-botanical-emerald text-white border-botanical-emerald shadow-sm font-semibold"
                    : "bg-white text-slate border-border hover:border-botanical-emerald/40 hover:text-obsidian"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold uppercase ${
                    isActive ? "bg-white text-botanical-emerald" : "bg-slate-100 text-slate"
                  }`}
                >
                  {letter}
                </span>
                <span>{dog.name}</span>
                <span className="text-[10px] opacity-75">({dog.tagNumber})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Flagship Canine Feature Plate */}
        {activeDog && (
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-elevation-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-border bg-slate-100 group shadow-sm">
                <Image
                  src={activeDog.photoUrl}
                  alt={`${activeDog.name} (${activeDog.tagNumber}) - Rescued Canine at Kiran Singh Foundation`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-xs font-mono font-bold text-obsidian shadow-sm">
                    {activeDog.tagNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-botanical-emerald text-white text-[10px] font-mono font-semibold uppercase shadow-sm">
                    Verified Resident
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-obsidian/80 backdrop-blur-md text-white text-xs font-mono flex items-center justify-between">
                  <span>Rescue: {activeDog.rescueDate}</span>
                  <span className="text-botanical-emerald-light font-semibold">100% Vaccinated</span>
                </div>
              </div>

              {/* Quick Details Badges */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-porcelain border border-border">
                  <span className="text-[10px] text-slate block uppercase">Age</span>
                  <span className="font-semibold text-obsidian">{activeDog.estimatedAge}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-porcelain border border-border">
                  <span className="text-[10px] text-slate block uppercase">Gender</span>
                  <span className="font-semibold text-obsidian">{activeDog.gender}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-porcelain border border-border">
                  <span className="text-[10px] text-slate block uppercase">Status</span>
                  <span className="font-semibold text-botanical-emerald">Sterilized</span>
                </div>
              </div>
            </div>

            {/* Dossier & Clinical Notes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-botanical-emerald font-semibold uppercase">
                  <span>Resident #{activeDog.tagNumber.replace("KSF-CAN-", "")}</span>
                  <span>&bull;</span>
                  <span>{activeDog.zoneIdentifier}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-obsidian tracking-tight">
                  {activeDog.name}
                </h3>
                <p className="text-sm font-mono text-slate font-medium">
                  {activeDog.breedMix}
                </p>
              </div>

              {/* Case Narrative Box */}
              <div className="p-5 rounded-2xl bg-porcelain border border-border/80 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-slate font-semibold">
                  <Info className="w-4 h-4 text-botanical-emerald" />
                  <span>Clinical Case Summary &amp; Provenance:</span>
                </div>
                <p className="text-sm sm:text-base text-obsidian leading-relaxed font-sans italic">
                  &ldquo;{activeDog.medicalNotes}&rdquo;
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-4 rounded-xl bg-white border border-border space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                    Rescue Provenance Location:
                  </span>
                  <p className="text-obsidian font-semibold leading-snug">
                    {activeDog.rescueLocation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                    Clinical Nutrition Specification:
                  </span>
                  <p className="text-slate font-medium leading-snug">
                    {activeDog.dietaryNeeds}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border space-y-1">
                  <span className="text-[10px] font-mono uppercase text-botanical-emerald block font-semibold">
                    Rabies Vaccination Date:
                  </span>
                  <p className="text-obsidian font-mono font-semibold">
                    {activeDog.rabiesVaccinationDate}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-border space-y-1">
                  <span className="text-[10px] font-mono uppercase text-lion-gold-dark block font-semibold">
                    Next Annual Booster Due:
                  </span>
                  <p className="text-obsidian font-mono font-semibold">
                    {activeDog.boosterDueDate}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=919670970750&text=${encodeURIComponent(
                    `Hello Kiran Singh Foundation, I am inquiring regarding resident canine ${activeDog.name} (${activeDog.tagNumber}) under your Dog Care Centre.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-botanical-emerald text-white text-xs font-mono font-semibold hover:bg-botanical-emerald-light transition-colors flex items-center space-x-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire / Support {activeDog.name} via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById("full-canine-roster");
                    el?.scrollIntoView({ behavior: "smooth" });
                    setSearchTerm(activeDog.name);
                  }}
                  className="px-5 py-3 rounded-full bg-white border border-border text-obsidian text-xs font-mono font-semibold hover:bg-porcelain transition-colors flex items-center space-x-1.5"
                >
                  <span>Locate in Full Registry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 11 Flagship Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-4">
          {flagshipDogs.map((dog, idx) => {
            const letter = String.fromCharCode(97 + idx);
            const isSelected = dog.id === activeDog.id;
            return (
              <div
                key={dog.id}
                onClick={() => setActiveFlagshipTab(dog.id)}
                className={`p-3 rounded-2xl bg-white border transition-all cursor-pointer space-y-2.5 ${
                  isSelected
                    ? "border-botanical-emerald ring-2 ring-botanical-emerald/20 shadow-elevation-1"
                    : "border-border hover:border-botanical-emerald/40 hover:shadow-sm"
                }`}
              >
                <div className="relative h-28 w-full rounded-xl overflow-hidden border border-border bg-slate-50">
                  <Image
                    src={dog.photoUrl}
                    alt={dog.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-white/95 text-[10px] font-mono font-bold flex items-center justify-center text-obsidian uppercase shadow-sm">
                    {letter}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-bold text-obsidian truncate">
                      {dog.name}
                    </h4>
                    <span className="text-[9px] font-mono text-botanical-emerald font-semibold">
                      {dog.tagNumber.replace("KSF-CAN-", "#")}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate font-mono truncate">
                    {dog.estimatedAge} &bull; {dog.gender}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          EMPIRICAL FIELD VIDEOS & VETERINARY CLINICAL EVIDENCE SHOWCASE
         ========================================================================= */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12 border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/25 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <Video className="w-3.5 h-3.5" />
            <span>Verifiable On-Site Evidence &bull; Prayagraj, UP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-obsidian font-semibold">
            Clinical Regimens &amp; Field Video Footage
          </h2>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            Tangible proof of daily operational care in Prayagraj. Showing real field mealtimes across our shelter homes
            and professional veterinary debridement and antiseptic procedures at Vet N Pet Clinic.
          </p>
        </div>

        {/* Video Player Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video 1: Shelter Pack Mealtime */}
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-7 shadow-elevation-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/25 text-botanical-emerald font-mono text-[10px] font-semibold uppercase">
                  Daily Pack Nutrition
                </span>
                <span className="text-[10px] font-mono text-slate font-medium">
                  Prayagraj Shelter Courtyard
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian">
                Morning Nutritional Feeding &amp; Pack Harmony
              </h3>
              <p className="text-xs text-slate font-sans leading-relaxed">
                Resident street dogs gathered at daily morning mealtime, nourished with fresh cooked poultry mash, boiled
                eggs, and probiotic curd under structured behavioral supervision.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border bg-black aspect-video shadow-inner">
              <video
                src="/images/dogs/shelter-pack-mealtime.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate border-t border-border">
              <span className="flex items-center space-x-1.5 text-botanical-emerald font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Pack Conflict Recorded</span>
              </span>
              <span>Daily Rations: 34 Canines</span>
            </div>
          </div>

          {/* Video 2: Clinical Surgical Procedure */}
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-7 shadow-elevation-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-lion-gold-dark font-mono text-[10px] font-semibold uppercase">
                  Clinical Surgical Procedure
                </span>
                <span className="text-[10px] font-mono text-slate font-medium">
                  Vet N Pet Clinic &bull; Dr. V. K. Singh
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-obsidian">
                Trauma Debridement &amp; Sterile Wound Dressing
              </h3>
              <p className="text-xs text-slate font-sans leading-relaxed">
                Resident hero dog Branto undergoing surgical ear debridement, necrotic tissue excision, and sterile
                antiseptic dressing under licensed veterinary surgeon Dr. V. K. Singh (UPVC-7338, VCI-10803).
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border bg-black aspect-video shadow-inner">
              <video
                src="/images/dogs/branto-clinical-procedure.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate border-t border-border">
              <span className="flex items-center space-x-1.5 text-botanical-emerald font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Full Antiseptic Recovery Achieved</span>
              </span>
              <span>Case: Branto (KSF-CAN-006)</span>
            </div>
          </div>
        </div>

        {/* Forensic Clinical Photographic Plates Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
              Forensic Clinical &amp; Shelter Documentation Plates
            </h3>
            <span className="text-[11px] font-mono text-slate">
              Primary Evidence from Prayagraj Field Ops
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Plate 1: Dr. VK Singh Consultation */}
            <div className="bg-white border border-border rounded-2xl p-4 space-y-3 shadow-elevation-1">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border bg-slate-50">
                <Image
                  src="/images/dogs/dr-vk-singh-checkup.jpg"
                  alt="Dr. V. K. Singh examining rescued canine at Vet N Pet Clinic Prayagraj"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-obsidian/80 text-white text-[9px] font-mono">
                  Dr. V. K. Singh (UPVC-7338)
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-obsidian">
                  Licensed Veterinary Clinical Oversight
                </h4>
                <p className="text-[11px] text-slate font-sans leading-snug">
                  Routine auscultation, temperature monitoring, and biometric intake at Vet N Pet Clinic, Prayagraj.
                </p>
              </div>
            </div>

            {/* Plate 2: Emergency IV Infusion */}
            <div className="bg-white border border-border rounded-2xl p-4 space-y-3 shadow-elevation-1">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border bg-slate-50">
                <Image
                  src="/images/dogs/emergency-iv-infusion.jpg"
                  alt="Emergency IV Saline Resuscitation for Collapsed Stray Dog"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-obsidian/80 text-white text-[9px] font-mono">
                  Emergency Triage &bull; IV Infusion
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-obsidian">
                  Critical Dehydration Resuscitation
                </h4>
                <p className="text-[11px] text-slate font-sans leading-snug">
                  Leo (KSF-CAN-010) resuscitated from severe hypovolemic shock with Ringer&apos;s lactate electrolyte therapy.
                </p>
              </div>
            </div>

            {/* Plate 3: Neonatal Care */}
            <div className="bg-white border border-border rounded-2xl p-4 space-y-3 shadow-elevation-1">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border bg-slate-50">
                <Image
                  src="/images/dogs/chotu-neonatal-triage.jpg"
                  alt="Chotu Neonatal Suture and Intensive Bottle Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-obsidian/80 text-white text-[9px] font-mono">
                  Neonate Suture &bull; Chotu
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-obsidian">
                  Orphaned Pup Emergency Suture
                </h4>
                <p className="text-[11px] text-slate font-sans leading-snug">
                  Chotu (KSF-CAN-011) treated for deep cervical laceration and nursed with formula milk every 3 hours.
                </p>
              </div>
            </div>

            {/* Plate 4: Courtyard Communal Feeding */}
            <div className="bg-white border border-border rounded-2xl p-4 space-y-3 shadow-elevation-1">
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-border bg-slate-50">
                <Image
                  src="/images/dogs/pack-feeding-circle.jpg"
                  alt="Prayagraj Shelter Courtyard Communal Feeding"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-obsidian/80 text-white text-[9px] font-mono">
                  Courtyard Pack Nutrition
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-obsidian">
                  Communal Rations &bull; 4 Shelter Homes
                </h4>
                <p className="text-[11px] text-slate font-sans leading-snug">
                  High-protein dietary regimen prepared daily to ensure long-term immunity, bone strength, and coat vitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3 ETHOLOGICAL SANCTUARY ZONES (DERIVED FROM DR. KIRAN SINGH'S ETHOLOGY)
         ========================================================================= */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8 border-b border-border">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-mono text-xs text-botanical-emerald uppercase tracking-widest font-semibold">
            Institutional Spatial Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-obsidian font-semibold">
            3 Ethological Sanctuary Zones
          </h2>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            Designed using principles from Late Kiran Singh ji’s doctoral research on felid behavior and pack psychology,
            ensuring biosecurity, social hierarchy stability, and zero territorial conflict.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-2xl p-6 space-y-3.5 shadow-elevation-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
                  Zone Alpha
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate border border-border font-medium">
                  Quarantine &amp; Intake
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-obsidian">
                Critical Care &amp; Isolation
              </h3>
              <p className="text-xs text-slate leading-relaxed font-sans">
                Biosecure isolation kennels for newly rescued canines, post-operative sterilization recovery,
                parvovirus/distemper quarantine screening, and complex trauma wound debridement under continuous telemetry.
              </p>
            </div>
            <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
              <span>Biosecurity Level: Grade A</span>
              <span className="text-botanical-emerald font-semibold">Sterile Isolation</span>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 space-y-3.5 shadow-elevation-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
                  Zone Beta
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate border border-border font-medium">
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
            <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
              <span>Behavioral Model: Ethological Pack</span>
              <span className="text-botanical-emerald font-semibold">Socialized Cohort</span>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 space-y-3.5 shadow-elevation-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-botanical-emerald uppercase font-semibold">
                  Zone Gamma
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate border border-border font-medium">
                  Senior &amp; Palliative Care
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
            <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate">
              <span>Therapy: Orthopedic Comfort</span>
              <span className="text-botanical-emerald font-semibold">Palliative Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHORITATIVE DIRECTORY OF 34 RESCUED DOGS
         ========================================================================= */}
      <section id="full-canine-roster" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-botanical-emerald uppercase tracking-widest font-semibold">
              Statutory Animal Census &bull; Prayagraj Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-obsidian font-semibold">
              The 34 Resident Canines Registry
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans max-w-2xl">
              Complete records of rabies vaccinations, annual booster schedules, and individual clinical histories
              for every street canine housed across our 4 Prayagraj shelter homes.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search name, tag, breed, location..."
                className="pl-10 pr-4 py-2.5 bg-white border border-border rounded-full text-xs text-obsidian placeholder-slate-400 focus:outline-none focus:border-botanical-emerald w-full sm:w-64 shadow-sm"
              />
            </div>

            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="px-4 py-2.5 bg-white border border-border rounded-full text-xs text-obsidian focus:outline-none focus:border-botanical-emerald font-mono shadow-sm"
            >
              <option value="all">All Sanctuary Zones</option>
              <option value="Zone Alpha">Zone Alpha (Quarantine/Critical)</option>
              <option value="Zone Beta">Zone Beta (Main Pack)</option>
              <option value="Zone Gamma">Zone Gamma (Senior Run)</option>
            </select>

            <button
              onClick={() => setFlagshipFilterOnly(!flagshipFilterOnly)}
              className={`px-4 py-2.5 rounded-full text-xs font-mono font-semibold transition-all border shadow-sm ${
                flagshipFilterOnly
                  ? "bg-botanical-emerald text-white border-botanical-emerald"
                  : "bg-white text-slate border-border hover:border-botanical-emerald hover:text-obsidian"
              }`}
            >
              {flagshipFilterOnly ? "Showing 11 Flagship Only" : "Filter 11 Flagship"}
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate">
          <span>
            Displaying <strong className="text-obsidian">{filteredDogs.length}</strong> of{" "}
            <strong className="text-obsidian">{dogs.length}</strong> registered canines
          </span>
          {(searchTerm || zoneFilter !== "all" || flagshipFilterOnly) && (
            <button
              onClick={() => {
                setSearchTerm("");
                setZoneFilter("all");
                setFlagshipFilterOnly(false);
              }}
              className="text-botanical-emerald hover:underline font-semibold"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Canines Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDogs.map((dog) => {
            const isFlagship = FLAGSHIP_DOG_IDS.includes(dog.id);
            return (
              <div
                key={dog.id}
                className={`bg-white border rounded-3xl p-5 shadow-elevation-1 hover:shadow-elevation-card transition-all duration-300 flex flex-col justify-between ${
                  isFlagship
                    ? "border-botanical-emerald/40 ring-1 ring-botanical-emerald/10"
                    : "border-border hover:border-botanical-emerald/30"
                }`}
              >
                <div>
                  {/* Photo & Header Badges */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-4 border border-border bg-slate-50">
                    <Image
                      src={dog.photoUrl}
                      alt={`${dog.name} - ${dog.tagNumber}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border font-mono text-[10px] text-obsidian font-bold shadow-sm">
                        {dog.tagNumber}
                      </span>
                      {isFlagship && (
                        <span className="px-2 py-0.5 rounded-full bg-botanical-emerald text-white font-mono text-[9px] font-semibold uppercase shadow-sm">
                          Flagship
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-botanical-emerald/90 backdrop-blur-md font-mono text-[10px] text-white flex items-center space-x-1 shadow-sm font-semibold">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Sterilized</span>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white font-mono text-[9px]">
                      {dog.estimatedAge} &bull; {dog.gender}
                    </div>
                  </div>

                  {/* Name and Breed */}
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl font-bold text-obsidian">
                      {dog.name}
                    </h3>
                    <span className="text-[10px] font-mono text-botanical-emerald font-semibold uppercase">
                      {dog.zoneIdentifier.split(" - ")[0]}
                    </span>
                  </div>

                  <p className="text-xs text-slate mt-1 font-mono">
                    {dog.breedMix}
                  </p>

                  {/* Metadata Stack */}
                  <div className="mt-4 pt-3 border-t border-border space-y-2.5 text-xs font-sans">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                        Rescue Provenance &amp; Date:
                      </span>
                      <p className="text-obsidian text-xs mt-0.5 leading-snug">
                        {dog.rescueLocation} &bull;{" "}
                        <span className="font-mono text-slate">{dog.rescueDate}</span>
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                        Clinical Nutrition:
                      </span>
                      <p className="text-slate text-xs mt-0.5 leading-snug">
                        {dog.dietaryNeeds}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate block font-semibold">
                        Clinical Case Summary:
                      </span>
                      <p className="text-slate text-xs mt-0.5 italic leading-relaxed">
                        &ldquo;{dog.medicalNotes}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Immunization & WhatsApp SOS Footer */}
                <div className="mt-5 pt-3.5 border-t border-border space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-botanical-emerald flex items-center space-x-1 font-semibold">
                      <Syringe className="w-3.5 h-3.5" />
                      <span>Rabies: {dog.rabiesVaccinationDate}</span>
                    </span>
                    <span className="text-slate font-medium text-[10px]">
                      Booster: {dog.boosterDueDate}
                    </span>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=919670970750&text=${encodeURIComponent(
                      `Hello Kiran Singh Foundation, I am inquiring regarding canine resident ${dog.name} (${dog.tagNumber}) under your Dog Care Centre.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-porcelain border border-border hover:border-botanical-emerald hover:bg-white text-obsidian text-center font-mono text-[11px] font-semibold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-slate" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredDogs.length === 0 && (
          <div className="p-16 text-center bg-white border border-border rounded-3xl shadow-sm space-y-3">
            <AlertCircle className="w-8 h-8 text-slate mx-auto" />
            <h3 className="font-serif text-xl font-bold text-obsidian">No Canines Found</h3>
            <p className="text-xs text-slate font-sans max-w-md mx-auto">
              No registered dogs matched &ldquo;{searchTerm}&rdquo; under the selected zone. Please adjust your search criteria or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setZoneFilter("all");
                setFlagshipFilterOnly(false);
              }}
              className="mt-3 px-5 py-2.5 rounded-full bg-botanical-emerald text-white text-xs font-mono font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          24/7 PRAYAGRAJ CANINE DISTRESS & EMERGENCY DISPATCH CARD
         ========================================================================= */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-botanical-emerald via-botanical-emerald-light to-botanical-emerald rounded-3xl p-8 sm:p-12 text-white shadow-elevation-2 space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>Prayagraj Regional Canine Distress Grid</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
              Report Street Canine Medical Distress or Trauma
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
              If you locate an injured, sick, or traumatized street dog within the Prayagraj municipal radius, contact our
              rapid response mutual-aid helpline immediately. All surgeries, anti-rabies immunizations, and post-operative
              care are 100% underwritten by the Kiran Singh Foundation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=919670970750&text=URGENT%20CANINE%20DISTRESS%3A%20Reporting%20injured%20or%20distressed%20dog%20in%20Prayagraj."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white text-botanical-emerald font-sans font-bold text-sm hover:bg-porcelain transition-all shadow-md flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-botanical-emerald" />
              <span>Dispatch via Emergency WhatsApp (+91 96709 70750)</span>
            </a>

            <div className="flex items-center space-x-3 text-xs font-mono text-white/80">
              <span>Alternative Helplines:</span>
              <span className="font-semibold text-white">8115141378</span>
              <span>&bull;</span>
              <span className="font-semibold text-white">9450630310</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
