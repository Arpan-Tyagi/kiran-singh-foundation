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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
            Support Applications & Triage Desk
          </h2>
          <p className="text-xs text-slate-muted font-mono mt-0.5">
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
                    ? "bg-crimson-alert text-white font-semibold shadow-sm"
                    : "bg-lion-gold text-white font-semibold shadow-sm"
                  : "bg-white border border-border text-slate-muted hover:text-obsidian hover:border-lion-gold/30"
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
            className={`bg-white rounded-2xl p-6 shadow-card border transition-all ${
              app.priority === "critical_emergency"
                ? "border-red-300 ring-1 ring-red-200"
                : app.priority === "urgent"
                ? "border-amber-300"
                : "border-border"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Details */}
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
                      app.priority === "critical_emergency"
                        ? "bg-red-50 text-crimson-alert border border-red-200"
                        : app.priority === "urgent"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-gray-100 text-slate-muted"
                    }`}
                  >
                    {app.priority.replace("_", " ")}
                  </span>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-porcelain border border-border text-slate-muted uppercase">
                    {app.category.replace("_", " ")}
                  </span>

                  <span className="text-[11px] font-mono text-slate-muted">
                    {new Date(app.created_at).toLocaleString()}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-obsidian">
                    {app.subject}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed font-sans mt-1">
                    "{app.message_details}"
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-muted pt-1">
                  <span className="text-obsidian font-medium">
                    Reporter: {app.applicant_name}
                  </span>
                  {app.location_data && (
                    <span className="flex items-center space-x-1 text-lion-gold-dark font-medium">
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
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-border">
                <a
                  href={`https://wa.me/${sanitizeWhatsAppPhone(app.contact_phone)}?text=${encodeURIComponent(
                    `Hello ${app.applicant_name}, this is the Kiran Singh Foundation Directorate responding to your inquiry (#${app.id}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-botanical-emerald font-sans font-medium text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Field Response</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-slate-muted">Status:</span>
                  <select
                    value={app.status}
                    onChange={(e) =>
                      handleStatusChange(app.id, e.target.value as any)
                    }
                    className="bg-porcelain border border-border rounded-lg px-2.5 py-1 text-xs text-obsidian font-mono focus:border-lion-gold focus:bg-white"
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
          <div className="p-12 text-center bg-white border border-border rounded-2xl shadow-card">
            <div className="text-slate-muted font-mono text-xs">
              No triage cases matching current priority filters.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
