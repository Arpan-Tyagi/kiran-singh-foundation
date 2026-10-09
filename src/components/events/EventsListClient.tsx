"use client";

import React, { useState } from "react";
import { Calendar, MapPin, Users, ArrowUpRight, Phone } from "lucide-react";
import { FoundationEvent } from "@/lib/data/foundation-data";

export default function EventsListClient({
  events,
}: {
  events: FoundationEvent[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredEvents = events.filter((evt) => {
    if (selectedCategory === "all") return true;
    return evt.category === selectedCategory;
  });

  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-16 bg-porcelain">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Foundation Convenings & Field Drives</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          Events <span className="italic text-lion-gold font-light">Calendar</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase font-semibold">
          Medical Camps &bull; Scholar Symposia &bull; Community Drives
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Participate in our free suburban anti-rabies vaccination drives, scholar public discourse symposiums,
          and mutual-aid flood response drills.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "All Gatherings" },
          { id: "medical_camp", label: "Medical & Rabies Camps" },
          { id: "personality_workshop", label: "Scholar Symposia" },
          { id: "community_drive", label: "Community Drives" },
          { id: "memorial_gathering", label: "Memorial Remembrance" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              selectedCategory === tab.id
                ? "bg-lion-gold text-white font-semibold shadow-gold-glow"
                : "bg-white border border-border text-slate hover:text-obsidian shadow-sm"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((evt) => {
          const eventDate = new Date(evt.scheduledAt);
          return (
            <div
              key={evt.id}
              className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/40 transition-all duration-300"
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
                    <span className="font-mono text-[9px] text-slate">
                      {eventDate.getFullYear()}
                    </span>
                  </div>

                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-50 border border-border text-lion-gold-dark font-medium">
                        {evt.category.replace("_", " ")}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                      {evt.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate pt-2">
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-slate" />
                        <span>{evt.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-slate" />
                        <span>Capacity: {evt.capacity} attendees</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* RSVP Action */}
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
                    Instant confirmation via wa.me
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredEvents.length === 0 && (
          <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-sm text-slate font-mono text-xs">
            No gatherings found under this category.
          </div>
        )}
      </div>
    </div>
  );
}
