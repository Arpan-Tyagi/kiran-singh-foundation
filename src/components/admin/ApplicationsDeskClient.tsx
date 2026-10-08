"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import { updateApplicationStatusAction } from "@/actions/admin";
import { SupportApplication } from "@/lib/supabase";
import { sanitizeWhatsAppPhone } from "@/lib/whatsapp";

export default function ApplicationsDeskClient({
  initialApplications,
}: {
  initialApplications: SupportApplication[];
}) {
  const [applications, setApplications] = useState<SupportApplication[]>(initialApplications);
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = applications.filter((app) => {
    const matchesPriority =
      priorityFilter === "all" || app.priority === priorityFilter;
    const matchesStatus =
      statusFilter === "all" || app.status === statusFilter;
    return matchesPriority && matchesStatus;
  });

  const handleStatusChange = async (
    id: string,
    newStatus: SupportApplication["status"]
  ) => {
    await updateApplicationStatusAction(id, newStatus);
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment/10 pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-parchment">
            Support Applications & Triage Desk
          </h2>
          <p className="text-xs text-parchment-dim font-mono mt-0.5">
            Classified mutual-aid triage: Standard, Urgent, and Critical Emergency
          </p>
        </div>

        {/* Priority Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Priorities" },
            { id: "critical_emergency", label: "Critical Emergency" },
            { id: "urgent", label: "Urgent" },
            { id: "standard", label: "Standard" },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setPriorityFilter(chip.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                priorityFilter === chip.id
                  ? chip.id === "critical_emergency"
                    ? "bg-crimson-alert text-white"
                    : "bg-lion-gold text-obsidian font-semibold"
                  : "bg-white/5 border border-white/10 text-parchment-dim hover:text-parchment"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Applications Cards Grid */}
      <div className="space-y-4">
        {filtered.map((app) => (
          <div
            key={app.id}
            className={`bezel-card ${
              app.priority === "critical_emergency"
                ? "border-crimson-alert/50"
                : app.priority === "urgent"
                ? "border-amber-500/30"
                : "border-white/5"
            }`}
          >
            <div className="bezel-card-inner p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Details */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
                      app.priority === "critical_emergency"
                        ? "bg-crimson-alert text-white animate-pulse"
                        : app.priority === "urgent"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-white/5 text-parchment-dim"
                    }`}
                  >
                    {app.priority.replace("_", " ")}
                  </span>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-parchment-dim uppercase">
                    {app.category.replace("_", " ")}
                  </span>

                  <span className="text-[11px] font-mono text-parchment-dim">
                    {new Date(app.created_at).toLocaleString()}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-parchment">
                    {app.subject}
                  </h3>
                  <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans mt-1">
                    "{app.message_details}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-parchment-dim pt-1">
                  <span className="text-parchment font-medium">
                    Reporter: {app.applicant_name}
                  </span>
                  {app.location_data && (
                    <span className="flex items-center space-x-1 text-lion-gold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{app.location_data}</span>
                    </span>
                  )}
                  {app.contact_email && (
                    <span className="flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{app.contact_email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Right Action & Status Controls */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                <a
                  href={`https://wa.me/${sanitizeWhatsAppPhone(app.contact_phone)}?text=${encodeURIComponent(
                    `Hello ${app.applicant_name}, this is the Kiran Singh Foundation Directorate responding to your inquiry (#${app.id}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600/50 text-emerald-300 font-sans font-medium text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Field Response</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-parchment-dim">Status:</span>
                  <select
                    value={app.status}
                    onChange={(e) =>
                      handleStatusChange(app.id, e.target.value as any)
                    }
                    className="bg-obsidian border border-parchment/20 rounded-lg px-2.5 py-1 text-xs text-parchment font-mono focus:border-lion-gold"
                  >
                    <option value="pending">Pending</option>
                    <option value="triaged">Triaged</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="p-12 text-center bezel-card">
            <div className="bezel-card-inner p-8 text-parchment-dim font-mono text-xs">
              No triage cases matching current priority filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
