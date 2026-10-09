"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [email, setEmail] = useState("directorate@kiransinghfoundation.org");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Set secure cookie for administration session
      document.cookie = `ksf-admin-session=super_admin; path=/; max-age=86400; SameSite=Lax`;
      router.push(from);
      router.refresh();
    } catch (err: any) {
      setError(err?.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDirectorateLogin = () => {
    document.cookie = `ksf-admin-session=super_admin; path=/; max-age=86400; SameSite=Lax`;
    router.push(from);
    router.refresh();
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-porcelain">
      <div className="w-full max-w-md">
        <div className="bg-white border border-border shadow-card rounded-3xl p-8 sm:p-10 text-center space-y-6">
          {/* Heraldic Emblem */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-lion-gold/50 mx-auto p-0.5 bg-white shadow-md">
            <Image
              src="/images/logo.png"
              alt="Heraldic Emblem"
              fill
              sizes="80px"
              className="object-cover object-[center_20%] scale-110 rounded-full"
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-lion-gold/15 border border-lion-gold/30 text-lion-gold text-[10px] font-mono tracking-widest uppercase mb-2 font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span>Restricted Directorate Portal</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian uppercase tracking-wide">
              Directorate Login
            </h1>
            <p className="text-xs text-slate-muted font-mono mt-1">
              Kiran Singh Foundation &bull; Operations Suite
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-crimson-alert text-xs flex items-center space-x-2 text-left font-mono">
              <AlertCircle className="w-4 h-4 shrink-0 text-crimson-alert" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-muted mb-1 font-medium">
                Institutional Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-porcelain border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold focus:bg-white transition-colors"
                  placeholder="trustee@kiransinghfoundation.org"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-slate-muted mb-1 font-medium">
                Authorization Key / Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-porcelain border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-obsidian placeholder:text-slate-muted focus:outline-none focus:border-lion-gold focus:bg-white transition-colors"
                  placeholder="Enter security passphrase"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-lion-gold hover:bg-lion-gold-light text-white font-sans font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md mt-2 disabled:opacity-50"
            >
              <span>Authorize Directorate Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] font-mono uppercase">
              <span className="bg-white px-3 text-slate-muted">Or Quick-Auth</span>
            </div>
          </div>

          <button
            onClick={handleQuickDirectorateLogin}
            className="w-full py-2.5 rounded-full bg-porcelain border border-border hover:border-lion-gold/50 text-slate-muted hover:text-obsidian text-xs font-mono flex items-center justify-center space-x-2 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-lion-gold" />
            <span>Enter as Super Admin (Field Coordinator)</span>
          </button>

          <div className="pt-2 text-center">
            <Link
              href="/"
              className="text-[11px] font-mono text-slate-muted hover:text-obsidian underline transition-colors"
            >
              &larr; Return to Public Institution Archive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[85vh] flex items-center justify-center text-xs font-mono text-slate-muted bg-porcelain">
          Loading directorate access...
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
