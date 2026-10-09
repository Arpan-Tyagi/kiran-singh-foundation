"use client";

import React, { useState } from "react";
import {
  Calendar,
  Plus,
  MapPin,
  Users,
  Phone,
  ArrowUpRight,
  Sparkles,
  X,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { createEventAction } from "@/actions/admin";
import { FoundationEvent } from "@/lib/data/foundation-data";

export default function EventsDeskClient({
  initialEvents,
}: {
  initialEvents: FoundationEvent[];
}) {
  const [events, setEvents] = useState<FoundationEvent[]>(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<FoundationEvent["category"]>("medical_camp");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [capacity, setCapacity] = useState(100);

  // Gemini AI Drafting states
  const [showAiDraftSection, setShowAiDraftSection] = useState(false);
  const [rawNotes, setRawNotes] = useState("");
  const [targetTone, setTargetTone] = useState<"institutional" | "urgent_call" | "scholarly">("institutional");
  const [isDrafting, setIsDrafting] = useState(false);
  const [isAiAssisted, setIsAiAssisted] = useState(false);
  const [draftError, setDraftError] = useState<string | null>(null);

  const handleGenerateAiDraft = async () => {
    if (!rawNotes.trim()) return;
    setIsDrafting(true);
    setDraftError(null);

    try {
      const res = await fetch("/api/ai/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "event_announcement",
          rawNotes,
          targetTone,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.title) setTitle(data.title);
        if (data.summary) {
          setDescription(data.summary);
        } else if (data.contentMarkdown) {
          setDescription(data.contentMarkdown);
        }
        setIsAiAssisted(true);
      } else {
        const errData = await res.json().catch(() => ({}));
        setDraftError(errData.error || "Event draft generation request failed.");
      }
    } catch (err: any) {
      console.error("AI Event draft generation failed:", err);
      setDraftError(err?.message || "Failed to generate AI event draft.");
    } finally {
      setIsDrafting(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createEventAction({
        title,
        category,
        description,
        location,
        scheduledAt: scheduledAt || new Date().toISOString(),
        capacity: Number(capacity),
      });

      if (res.success && res.event) {
        setEvents([res.event, ...events]);
        setIsModalOpen(false);
        setTitle("");
        setDescription("");
        setLocation("");
        setRawNotes("");
        setIsAiAssisted(false);
        setShowAiDraftSection(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Gatherings & Medical Camps Manager
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-0.5">
            Schedule rabies clinics, scholar symposiums, and community flood readiness drills
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              setShowAiDraftSection(true);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-lion-gold/15 border border-lion-gold/40 hover:bg-lion-gold/25 text-lion-gold font-mono text-xs transition-all shadow-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Draft with Gemini 2.5 Flash</span>
          </button>

          <button
            onClick={() => {
              setShowAiDraftSection(false);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs transition-all shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule New Event</span>
          </button>
        </div>
      </div>

      {/* Events Table / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((evt) => (
          <div key={evt.id} className="bg-white border border-border rounded-2xl shadow-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-porcelain border border-border text-lion-gold font-semibold uppercase">
                  {evt.category.replace("_", " ")}
                </span>
                <span className="text-slate-muted">
                  {new Date(evt.scheduledAt).toLocaleDateString()}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-obsidian">
                {evt.title}
              </h3>

              <p className="text-xs text-slate-muted mt-2 font-sans line-clamp-3 leading-relaxed">
                {evt.description}
              </p>

              <div className="mt-4 pt-3 border-t border-border space-y-1 text-xs font-mono text-slate-muted">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-lion-gold" />
                  <span className="text-obsidian font-medium">{evt.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-3.5 h-3.5 text-slate-muted" />
                  <span>Capacity: {evt.capacity} attendees</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <a
                href={evt.whatsappRsvpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-botanical-emerald hover:underline flex items-center space-x-1 font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>RSVP Deep Link</span>
              </a>
              <span className="text-[10px] font-mono text-botanical-emerald font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Published Live
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Create Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-sm">
          <div className="bg-white border border-border rounded-3xl w-full max-w-xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-obsidian">
                    Schedule Gathering & AI Announcement
                  </h3>
                  <p className="text-[10px] font-mono text-lion-gold font-medium">
                    Grounded in Institutional Mandates &bull; @google/genai SDK
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-muted hover:text-obsidian"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gemini 2.5 Flash Drafting Assistant Section */}
            <div className="p-4 rounded-2xl bg-porcelain border border-lion-gold/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-lion-gold" />
                  <span className="font-serif text-sm font-bold text-obsidian">
                    Gemini 2.5 Flash Drafting Assistant
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAiDraftSection(!showAiDraftSection)}
                  className="text-[11px] font-mono text-lion-gold hover:underline font-medium"
                >
                  {showAiDraftSection ? "Hide Assistant" : "Expand Assistant"}
                </button>
              </div>

              {showAiDraftSection && (
                <div className="space-y-3 pt-2 border-t border-border">
                  <p className="text-[11px] text-slate-muted font-mono">
                    Paste raw coordinator notes to auto-synthesize an institutional event title and description.
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    {(["institutional", "scholarly", "urgent_call"] as const).map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setTargetTone(tone)}
                        className={`py-1.5 px-2 rounded-lg text-[10px] font-mono border transition-all ${
                          targetTone === tone
                            ? "bg-lion-gold/15 border-lion-gold text-lion-gold font-semibold shadow-sm"
                            : "bg-white border-border text-slate-muted hover:text-obsidian"
                        }`}
                      >
                        {tone.replace("_", " ")}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={3}
                    value={rawNotes}
                    onChange={(e) => setRawNotes(e.target.value)}
                    placeholder="e.g. Mass anti-rabies drive in Tambaram for street dogs, need student volunteer marshals from the 40 scholars cohort..."
                    className="w-full bg-white border border-border rounded-xl p-3 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold"
                  />

                  <button
                    type="button"
                    onClick={handleGenerateAiDraft}
                    disabled={isDrafting || !rawNotes.trim()}
                    className="w-full py-2.5 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs flex items-center justify-center space-x-2 transition-all disabled:opacity-40 shadow-sm"
                  >
                    {isDrafting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Synthesizing Event Announcement...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Auto-Fill Title & Description</span>
                      </>
                    )}
                  </button>

                  {draftError && (
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-crimson-alert text-xs font-mono">
                      {draftError}
                    </div>
                  )}

                  {isAiAssisted && (
                    <div className="flex items-center space-x-1.5 text-botanical-emerald text-xs font-mono font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Fields successfully auto-populated by Gemini 2.5 Flash</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                  Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Adyar Suburban Anti-Rabies Field Camp"
                  className="w-full bg-porcelain border border-border rounded-xl px-4 py-2.5 text-xs text-obsidian focus:bg-white focus:border-lion-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-porcelain border border-border rounded-xl px-4 py-2.5 text-xs text-obsidian font-mono focus:bg-white focus:border-lion-gold"
                  >
                    <option value="medical_camp">Medical & Rabies Camp</option>
                    <option value="personality_workshop">Scholar Symposium</option>
                    <option value="community_drive">Community Drive</option>
                    <option value="memorial_gathering">Memorial Remembrance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                    Scheduled Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={scheduledAt}
                    onChange={(e) => setScheduledAt(e.target.value)}
                    className="w-full bg-porcelain border border-border rounded-xl px-4 py-2.5 text-xs text-obsidian font-mono focus:bg-white focus:border-lion-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                  Location / Venue *
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Vandalur Base Clinic or IIT Madras Corridor"
                  className="w-full bg-porcelain border border-border rounded-xl px-4 py-2.5 text-xs text-obsidian focus:bg-white focus:border-lion-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-muted mb-1 font-medium">
                  Description & Operational Directives *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide scope, required supplies, and veterinarian assignments..."
                  className="w-full bg-porcelain border border-border rounded-xl p-3 text-xs text-obsidian focus:bg-white focus:border-lion-gold"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-border text-xs font-mono text-slate-muted hover:text-obsidian"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs transition-all disabled:opacity-50 shadow-md"
                >
                  {loading ? "Scheduling..." : "Publish Event to Calendar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
