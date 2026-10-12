import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  AlertTriangle,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import {
  fetchStudentsAdmin,
  fetchDogs,
  fetchSupportApplications,
  fetchAllEventsAdmin,
} from "@/lib/supabase";
import { sanitizeWhatsAppPhone } from "@/lib/whatsapp";

export const revalidate = 0;

export default async function AdminOverviewPage() {
  const students = await fetchStudentsAdmin();
  const dogs = await fetchDogs();
  const applications = await fetchSupportApplications();
  const events = await fetchAllEventsAdmin();

  const pendingApps = applications.filter((a) => a.status === "pending" || a.status === "triaged");
  const criticalApps = applications.filter((a) => a.priority === "critical_emergency");

  return (
    <div className="space-y-8">
      {/* 4 Stat Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Scholars */}
        <div className="bg-white border border-border rounded-2xl p-5 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-slate-muted tracking-wider">
              Wing A &bull; Scholars
            </span>
            <div className="font-serif text-3xl font-bold text-obsidian mt-1">
              {students.length}
            </div>
            <p className="text-[11px] text-lion-gold-dark font-medium mt-1">
              100% Endowed Sponsorship
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        {/* Rescued Dogs */}
        <div className="bg-white border border-border rounded-2xl p-5 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-muted tracking-wider">
              Wing B &bull; Dogs
            </span>
            <div className="font-serif text-3xl font-bold text-botanical-emerald mt-1">
              {dogs.length}
            </div>
            <p className="text-[11px] text-botanical-emerald/90 font-medium mt-1">
              100% Rabies Immunized
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-botanical-emerald">
            <Heart className="w-6 h-6" />
          </div>
        </div>

        {/* Pending Triage */}
        <div className="bg-white border border-border rounded-2xl p-5 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-muted tracking-wider">
              Active Triage Desk
            </span>
            <div className="font-serif text-3xl font-bold text-crimson-alert mt-1">
              {pendingApps.length}
            </div>
            <p className="text-[11px] text-crimson-alert/90 font-medium mt-1">
              {criticalApps.length} Critical Emergencies
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200/60 flex items-center justify-center text-crimson-alert">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        {/* Events */}
        <div className="bg-white border border-border rounded-2xl p-5 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-muted tracking-wider">
              Active Field Drives
            </span>
            <div className="font-serif text-3xl font-bold text-obsidian mt-1">
              {events.length}
            </div>
            <p className="text-[11px] text-slate-muted font-medium mt-1">
              Public Camps Scheduled
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-porcelain border border-border flex items-center justify-center text-obsidian">
            <Calendar className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quick Ops Callout */}
      <div className="p-6 rounded-3xl bg-white border border-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-obsidian">
              Google Gemini 2.5 Flash Editorial Copilot
            </h3>
            <p className="text-xs text-slate-muted">
              Convert raw field notes into publication-ready dispatches and event briefs instantly.
            </p>
          </div>
        </div>

        <Link
          href="/admin/blogs"
          className="whitespace-nowrap px-6 py-2.5 rounded-full bg-lion-gold-dark text-white font-sans font-semibold text-xs hover:bg-lion-gold transition-all shadow-md"
        >
          Launch AI Drafting Modal &rarr;
        </Link>
      </div>

      {/* Support Applications & Distress Triage Queue */}
      <div className="bg-white border border-border rounded-3xl p-6 shadow-card space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
              Live Mutual-Aid Triage Desk
            </h2>
            <p className="text-xs text-slate-muted font-mono">
              Real-time distress signals, scholarship inquiries, and volunteer intakes
            </p>
          </div>
          <Link
            href="/admin/applications"
            className="text-xs font-mono text-lion-gold-dark hover:underline flex items-center space-x-1 font-medium"
          >
            <span>Full Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-border text-[10px] font-mono uppercase text-slate-muted bg-porcelain/60">
                <th className="py-2.5 px-3">Applicant / Reporter</th>
                <th className="py-2.5 px-3">Classification</th>
                <th className="py-2.5 px-3">Priority</th>
                <th className="py-2.5 px-3">Location / Landmark</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-slate-muted">
              {applications.slice(0, 5).map((app) => (
                <tr key={app.id} className="hover:bg-porcelain/50 transition-colors">
                  <td className="py-3 px-3 font-medium text-obsidian">
                    <div>{app.applicant_name}</div>
                    <div className="text-[10px] font-mono text-slate-muted">
                      {app.contact_phone}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-mono text-[10px]">
                      {app.category.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold ${
                        app.priority === "critical_emergency"
                          ? "bg-red-50 text-crimson-alert border border-red-200"
                          : app.priority === "urgent"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-gray-100 text-slate-muted"
                      }`}
                    >
                      {app.priority.replace("_", " ")}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[11px] truncate max-w-xs text-obsidian/80">
                    {app.location_data || "N/A"}
                  </td>
                  <td className="py-3 px-3 font-mono text-[10px] uppercase">
                    {app.status === "triaged" ? (
                      <span className="text-botanical-emerald font-semibold">Triaged</span>
                    ) : (
                      <span className="text-amber-600 font-semibold">Pending</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <a
                      href={`https://wa.me/${sanitizeWhatsAppPhone(app.contact_phone)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-botanical-emerald hover:bg-emerald-100 text-[10px] font-mono transition-colors font-medium"
                    >
                      <Phone className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
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
