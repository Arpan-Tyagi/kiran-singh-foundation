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

  const handleSignOut = () => {
    document.cookie = "ksf-admin-session=; path=/; max-age=0";
    document.cookie = "sb-access-token=; path=/; max-age=0";
    document.cookie = "supabase-auth-token=; path=/; max-age=0";
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-obsidian-deep py-8 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
      {/* Admin Masthead */}
      <div className="p-6 rounded-3xl bg-slate-charcoal border border-parchment/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-lion-gold/50 p-0.5 bg-obsidian shrink-0">
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
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-parchment uppercase">
                Directorate Workspace
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-lion-gold/20 text-lion-gold text-[10px] font-mono border border-lion-gold/40">
                RBAC: Admin Authorized
              </span>
            </div>
            <p className="text-xs text-parchment-dim font-mono mt-0.5">
              Late Kiran Singh Foundation &bull; Operations & Gemini Intelligence Desk
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <Link
            href="/"
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-parchment hover:text-lion-gold transition-colors flex items-center space-x-1"
          >
            <span>Public Site</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>RLS Active</span>
          </div>

          <button
            onClick={handleSignOut}
            className="px-3.5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 transition-colors flex items-center space-x-1.5"
            title="Sign Out of Directorate Session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Admin Subnav Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-parchment/10">
        {adminNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap px-4 py-2.5 rounded-2xl border transition-all text-xs font-mono flex items-center space-x-2 ${
                isActive
                  ? "bg-lion-gold/15 border-lion-gold text-lion-gold font-semibold shadow-sm"
                  : "bg-white/[0.03] border-white/5 text-parchment-muted hover:text-lion-gold hover:border-lion-gold/30 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4" />
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
