"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Award,
  FileCheck2,
  Sparkles,
  BookOpen,
  X,
  ExternalLink,
} from "lucide-react";
import { FoundationEvent, EventGalleryImage } from "@/lib/data/foundation-data";

export default function EventsListClient({
  events,
}: {
  events: FoundationEvent[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLandmarkTab, setActiveLandmarkTab] = useState<number>(0);
  const [activeLightboxImage, setActiveLightboxImage] = useState<EventGalleryImage | null>(null);

  // Filter concluded landmark programs vs all events
  const landmarkEvents = events.filter((evt) => evt.status === "concluded");
  const upcomingEvents = events.filter((evt) => evt.status !== "concluded");

  const filteredUpcomingEvents = upcomingEvents.filter((evt) => {
    if (selectedCategory === "all") return true;
    return evt.category === selectedCategory;
  });

  const activeLandmark = landmarkEvents[activeLandmarkTab] || landmarkEvents[0];

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-20 bg-porcelain">
      {/* 1. Header & Context */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>4 Operational Wings &bull; Student Welfare Convocations &bull; Prayagraj</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Convocations &amp; <span className="italic text-lion-gold-dark font-light">Gatherings</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold-dark tracking-widest uppercase font-semibold">
          Chronicle of 3 Flagship Internship Programs Conducted by Kiran Singh Foundation
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          From psychometric scholar selection to plagiarism-audited research defenses, our events document real,
          empirical progress in human empowerment and community animal protection across Prayagraj.
        </p>
      </div>

      {/* 2. Official Telemetry Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-3xl shadow-elevation-card text-center">
        <div className="p-3 border-r border-border/60">
          <span className="font-serif text-2xl md:text-3xl font-bold text-obsidian block">3</span>
          <span className="text-[10px] md:text-xs font-mono uppercase text-slate font-semibold mt-1 block">
            Completed Flagships
          </span>
          <span className="text-[10px] font-mono text-lion-gold-dark hidden sm:block mt-0.5">
            July &apos;25 &bull; Jan &apos;26 &bull; June &apos;26
          </span>
        </div>

        <div className="p-3 md:border-r border-border/60">
          <span className="font-serif text-2xl md:text-3xl font-bold text-obsidian block">40</span>
          <span className="text-[10px] md:text-xs font-mono uppercase text-slate font-semibold mt-1 block">
            Scholars Incubated
          </span>
          <span className="text-[10px] font-mono text-botanical-emerald hidden sm:block mt-0.5">
            4 Dedicated Research Teams
          </span>
        </div>

        <div className="p-3 border-r border-border/60">
          <span className="font-serif text-2xl md:text-3xl font-bold text-obsidian block">100%</span>
          <span className="text-[10px] md:text-xs font-mono uppercase text-slate font-semibold mt-1 block">
            Stipends &amp; Trophies
          </span>
          <span className="text-[10px] font-mono text-lion-gold-dark hidden sm:block mt-0.5">
            Certificates &amp; Mementos
          </span>
        </div>

        <div className="p-3">
          <span className="font-serif text-2xl md:text-3xl font-bold text-obsidian block">Prayagraj</span>
          <span className="text-[10px] md:text-xs font-mono uppercase text-slate font-semibold mt-1 block">
            Official Secretariat
          </span>
          <span className="text-[10px] font-mono text-slate hidden sm:block mt-0.5">
            191/C, Tilak Nagar Allahpur
          </span>
        </div>
      </div>

      {/* 3. The 3 Landmark Programs Section */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-5">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-lion-gold-dark uppercase font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Concluded Academic Milestones</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
              3 Concluded Landmark Programs (2025–2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans mt-1">
              Official records of our Summer and Winter Internship Programs, panel defenses, and convocation award ceremonies.
            </p>
          </div>

          {/* Program Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {landmarkEvents.map((evt, idx) => (
              <button
                key={evt.id}
                onClick={() => setActiveLandmarkTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 ${
                  activeLandmarkTab === idx
                    ? "bg-lion-gold text-white font-semibold shadow-gold-glow"
                    : "bg-white border border-border text-slate hover:text-obsidian shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{evt.monthYear || evt.title.split("(")[1]?.replace(")", "") || `Event ${idx + 1}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Landmark Program Dossier Card */}
        {activeLandmark && (
          <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-elevation-card space-y-8 transition-all duration-300">
            {/* Top Bar: Title, Edition Badge & Status */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-[11px] font-mono uppercase font-semibold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Concluded &bull; Certified</span>
                  </span>
                  {activeLandmark.edition && (
                    <span className="px-3 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[11px] font-mono uppercase font-semibold">
                      {activeLandmark.edition}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate text-[11px] font-mono uppercase font-medium">
                    {activeLandmark.monthYear}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-obsidian">
                  {activeLandmark.title}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-crimson-alert" />
                  <span className="font-semibold text-obsidian">{activeLandmark.location}</span>
                </span>
                <span className="flex items-center space-x-1.5 text-lion-gold-dark font-medium">
                  <Award className="w-3.5 h-3.5" />
                  <span>{activeLandmark.certificateType || "Certificates & Merit Stipends Conferred"}</span>
                </span>
              </div>
            </div>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-slate leading-relaxed font-sans max-w-4xl">
              {activeLandmark.description}
            </p>

            {/* Key Pillars & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Syllabi Covered */}
              {activeLandmark.syllabusCovered && activeLandmark.syllabusCovered.length > 0 && (
                <div className="bg-porcelain border border-border rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase text-lion-gold-dark font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>Curricular Syllabi &amp; Soft-Skills Labs</span>
                  </div>
                  <ul className="space-y-2">
                    {activeLandmark.syllabusCovered.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-obsidian leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-lion-gold-dark shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Research & Panel Defenses */}
              <div className="bg-porcelain border border-border rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-lion-gold-dark font-bold">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Program Milestones &amp; Plagiarism Audits</span>
                </div>
                <ul className="space-y-2">
                  {activeLandmark.highlights?.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-obsidian leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-botanical-emerald shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Archival Action Photographs Carousel / Grid */}
            {activeLandmark.galleryImages && activeLandmark.galleryImages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-xs font-mono text-slate">
                  <span className="font-semibold uppercase tracking-wider text-obsidian">
                    Ceremonial Action Photographs &bull; {activeLandmark.galleryImages.length} Verified Moments
                  </span>
                  <span className="text-[11px] text-lion-gold-dark">
                    Click any photo to enlarge
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {activeLandmark.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveLightboxImage(img)}
                      className="group relative h-48 rounded-2xl overflow-hidden border border-border shadow-sm cursor-pointer bg-slate-50 transition-all hover:shadow-elevation-card hover:border-lion-gold/50"
                    >
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent flex flex-col justify-end p-3.5 text-white">
                        {img.officerName && (
                          <span className="text-[10px] font-mono text-lion-gold font-bold uppercase tracking-wider">
                            {img.officerName}
                          </span>
                        )}
                        <p className="text-[11px] font-sans text-white/95 line-clamp-2 leading-tight mt-0.5">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate">
                <span className="w-2 h-2 rounded-full bg-botanical-emerald" />
                <span>
                  Trustees: Shri Anil Kumar Singh &bull; Shri Anuj Kumar Singh &bull; Ms. Akansha Singh
                </span>
              </div>

              <Link
                href={`/events/${activeLandmark.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-lion-gold text-white font-sans font-semibold text-xs hover:bg-lion-gold-dark transition-all shadow-gold-glow"
              >
                <span>Read Full Event Dossier &amp; Defense Records</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* 4. Upcoming Gatherings & Field Drives Section */}
      <div className="space-y-8 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-lion-gold-dark uppercase font-semibold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Upcoming Field Initiatives &amp; Academic Convenings</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
              Upcoming Gatherings &amp; Community Drives
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans mt-1">
              Open registrations, scholar workshops, canine anti-rabies camps, and village mutual-aid programs.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Gatherings" },
              { id: "personality_workshop", label: "Scholar Internships" },
              { id: "medical_camp", label: "Medical & Rabies Camps" },
              { id: "community_drive", label: "Village Drives" },
              { id: "memorial_gathering", label: "Memorial Remembrances" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  selectedCategory === tab.id
                    ? "bg-obsidian text-white font-semibold shadow-sm"
                    : "bg-white border border-border text-slate hover:text-obsidian shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events List */}
        <div className="space-y-5">
          {filteredUpcomingEvents.map((evt) => {
            const eventDate = new Date(evt.scheduledAt);
            return (
              <div
                key={evt.id}
                className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Date Badge & Details */}
                  <div className="flex items-start space-x-6">
                    {/* Calendar Pill */}
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-border flex flex-col items-center justify-center shrink-0 shadow-sm">
                      <span className="font-mono text-[10px] uppercase text-lion-gold-dark tracking-widest font-semibold">
                        {eventDate.toLocaleDateString("en-IN", { month: "short" })}
                      </span>
                      <span className="font-serif text-2xl font-bold text-obsidian">
                        {eventDate.getDate()}
                      </span>
                      <span className="font-mono text-[11px] text-slate/80 font-medium">
                        {eventDate.getFullYear()}
                      </span>
                    </div>

                    <div className="space-y-2 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-50 border border-border text-lion-gold-dark font-medium">
                          {evt.category.replace("_", " ")}
                        </span>
                        {evt.edition && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate">
                            {evt.edition}
                          </span>
                        )}
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-botanical-emerald/10 text-botanical-emerald font-semibold">
                          Upcoming
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian leading-snug">
                        {evt.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                        {evt.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate pt-1">
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-slate" />
                          <span>{evt.location}</span>
                        </span>
                        {evt.capacity && (
                          <span className="flex items-center space-x-1">
                            <Users className="w-3.5 h-3.5 text-slate" />
                            <span>Capacity: {evt.capacity} attendees</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions: WhatsApp RSVP & Detail Link */}
                  <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 border-border">
                    <a
                      href={evt.whatsappRsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-sans font-semibold text-xs transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>WhatsApp RSVP</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] font-mono text-slate">
                      Instant confirmation via wa.me (+91 96709 70750)
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredUpcomingEvents.length === 0 && (
            <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-sm text-slate font-mono text-xs">
              No upcoming gatherings found under this category.
            </div>
          )}
        </div>
      </div>

      {/* 5. Image Lightbox Modal */}
      {activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-obsidian/70 text-white flex items-center justify-center hover:bg-obsidian transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-res Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-900">
              <Image
                src={activeLightboxImage.url}
                alt={activeLightboxImage.caption}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-5 sm:p-6 bg-white space-y-2">
              <div className="flex items-center space-x-2">
                {activeLightboxImage.officerName && (
                  <span className="px-3 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold-dark font-mono text-xs font-bold uppercase">
                    {activeLightboxImage.officerName}
                  </span>
                )}
                {activeLightboxImage.roleBadge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate font-mono text-xs">
                    {activeLightboxImage.roleBadge}
                  </span>
                )}
              </div>
              <p className="text-sm font-sans text-obsidian leading-relaxed">
                {activeLightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
