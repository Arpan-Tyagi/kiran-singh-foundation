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
  CheckCircle2,
  Clock,
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
        <div className="bezel-card">
          <div className="bezel-card-inner p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-parchment-dim tracking-wider">
                Wing A &bull; Scholars
              </span>
              <div className="font-serif text-3xl font-bold text-parchment mt-1">
                {students.length}
              </div>
              <p className="text-[11px] text-lion-gold mt-1">
                100% Endowed Sponsorship
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-lion-gold/15 flex items-center justify-center text-lion-gold">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Rescued Dogs */}
        <div className="bezel-card">
          <div className="bezel-card-inner p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-parchment-dim tracking-wider">
                Wing B &bull; Dogs
              </span>
              <div className="font-serif text-3xl font-bold text-emerald-400 mt-1">
                {dogs.length}
              </div>
              <p className="text-[11px] text-emerald-400/80 mt-1">
                100% Rabies Immunized
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-sanctuary/30 flex items-center justify-center text-emerald-400">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Pending Triage */}
        <div className="bezel-card">
          <div className="bezel-card-inner p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-parchment-dim tracking-wider">
                Active Triage Desk
              </span>
              <div className="font-serif text-3xl font-bold text-red-400 mt-1">
                {pendingApps.length}
              </div>
              <p className="text-[11px] text-red-300 mt-1">
                {criticalApps.length} Critical Emergencies
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-crimson-alert/20 flex items-center justify-center text-red-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="bezel-card">
          <div className="bezel-card-inner p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase text-parchment-dim tracking-wider">
                Active Field Drives
              </span>
              <div className="font-serif text-3xl font-bold text-parchment mt-1">
                {events.length}
              </div>
              <p className="text-[11px] text-parchment-dim mt-1">
                Public Camps Scheduled
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-parchment">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Ops Callout */}
      <div className="p-6 rounded-3xl bg-slate-charcoal border border-parchment/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-lion-gold/20 flex items-center justify-center text-lion-gold shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-parchment">
              Google Gemini 2.5 Flash Editorial Copilot
            </h3>
            <p className="text-xs text-parchment-muted">
              Convert raw field notes into publication-ready dispatches and event briefs instantly.
            </p>
          </div>
        </div>

        <Link
          href="/admin/blogs"
          className="whitespace-nowrap px-6 py-2.5 rounded-full bg-lion-gold text-obsidian font-sans font-semibold text-xs hover:bg-lion-gold-light transition-all shadow-md"
        >
          Launch AI Drafting Modal &rarr;
        </Link>
      </div>

      {/* Support Applications & Distress Triage Queue */}
      <div className="bezel-card">
        <div className="bezel-card-inner p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-parchment/10 pb-4">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-parchment">
                Live Mutual-Aid Triage Desk
              </h2>
              <p className="text-xs text-parchment-dim font-mono">
                Real-time distress signals, scholarship inquiries, and volunteer intakes
              </p>
            </div>
            <Link
              href="/admin/applications"
              className="text-xs font-mono text-lion-gold hover:underline flex items-center space-x-1"
            >
              <span>Full Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-mono uppercase text-parchment-dim">
                  <th className="pb-3">Applicant / Reporter</th>
                  <th className="pb-3">Classification</th>
                  <th className="pb-3">Priority</th>
                  <th className="pb-3">Location / Landmark</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-parchment-muted">
                {applications.slice(0, 5).map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 font-medium text-parchment">
                      <div>{app.applicant_name}</div>
                      <div className="text-[10px] font-mono text-parchment-dim">
                        {app.contact_phone}
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="font-mono text-[10px]">
                        {app.category.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-semibold ${
                          app.priority === "critical_emergency"
                            ? "bg-crimson-alert/30 text-red-300 border border-crimson-alert/50"
                            : app.priority === "urgent"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-white/5 text-parchment-dim"
                        }`}
                      >
                        {app.priority.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-3 text-[11px] truncate max-w-xs">
                      {app.location_data || "N/A"}
                    </td>
                    <td className="py-3 font-mono text-[10px] uppercase">
                      {app.status === "triaged" ? (
                        <span className="text-emerald-400">Triaged</span>
                      ) : (
                        <span className="text-amber-400">Pending</span>
                      )}
                    </td>
                    <td className="py-3 text-right">
                      <a
                        href={`https://wa.me/${sanitizeWhatsAppPhone(app.contact_phone)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/40 text-[10px] font-mono"
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
    </div>
  );
}
