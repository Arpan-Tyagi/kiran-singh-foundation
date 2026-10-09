"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileEdit,
  Calendar,
  AlertCircle,
  GraduationCap,
  Heart,
  ShieldCheck,
  ArrowUpRight,
  LogOut,
} from "lucide-react";
import { signOutDirectorateSession } from "@/actions/admin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Do not render administrative navigation chrome on the login screen
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const adminNav = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Dispatches & AI Drafting", href: "/admin/blogs", icon: FileEdit },
    { label: "Events Manager", href: "/admin/events", icon: Calendar },
    { label: "Triage Desk", href: "/admin/applications", icon: AlertCircle },
    { label: "40 Scholars", href: "/admin/students", icon: GraduationCap },
    { label: "34 Canines", href: "/admin/dogs", icon: Heart },
  ];

  const handleSignOut = async () => {
    await signOutDirectorateSession();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-porcelain py-8 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
      {/* Admin Masthead */}
      <div className="p-6 rounded-3xl bg-white border border-border shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-lion-gold/50 p-0.5 bg-white shadow-sm shrink-0">
            <Image
              src="/images/logo.png"
              alt="Seal"
              fill
              sizes="48px"
              className="object-cover object-[center_20%] scale-110 rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-obsidian uppercase tracking-wide">
                Directorate Workspace
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold text-[10px] font-mono border border-lion-gold/30 font-medium">
                RBAC: Admin Authorized
              </span>
            </div>
            <p className="text-xs text-slate-muted font-mono mt-0.5">
              Late Kiran Singh Foundation &bull; Operations & Gemini Intelligence Desk
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-porcelain border border-border text-obsidian hover:text-lion-gold hover:border-lion-gold/40 active:scale-95 transition-all flex items-center space-x-1 font-medium"
          >
            <span>Public Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" strokeWidth={1.5} />
          </Link>

          <div className="px-3 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-botanical-emerald flex items-center space-x-1.5 font-medium">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
            <span>RLS Active</span>
          </div>

          <button
            onClick={handleSignOut}
            className="px-3.5 py-2 rounded-full bg-red-50 border border-red-200 text-crimson-alert hover:bg-red-100 active:scale-95 transition-all flex items-center space-x-1.5 font-medium"
            title="Sign Out of Directorate Session"
          >
            <LogOut className="w-3.5 h-3.5" aria-hidden="true" strokeWidth={1.5} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Admin Subnav Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border">
        {adminNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap px-4 py-2.5 rounded-2xl border transition-all text-xs font-mono flex items-center space-x-2 active:scale-95 ${
                isActive
                  ? "bg-white border-lion-gold text-lion-gold font-semibold shadow-sm"
                  : "bg-white/80 border-border text-slate-muted hover:text-obsidian hover:border-lion-gold/30 hover:bg-white"
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
