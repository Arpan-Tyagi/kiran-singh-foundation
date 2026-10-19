"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, HeartPulse } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "40 Scholars", href: "/wings/students" },
    { label: "34 Dogs", href: "/wings/dogs" },
    { label: "Events", href: "/events" },
    { label: "Dispatches", href: "/dispatches" },
    { label: "Admin", href: "/admin" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-500">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 px-4 md:px-6 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-border shadow-elevation-card"
            : "bg-white/80 backdrop-blur-md border-border/80 shadow-elevation-1"
        }`}
      >
        {/* Emblem & Brand Identity */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden border border-border p-1 bg-white group-hover:border-lion-gold transition-colors duration-300 shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Kiran Singh Foundation Emblem - Roaring Lion Seal"
              fill
              sizes="44px"
              className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm md:text-base font-bold tracking-wider text-obsidian uppercase leading-tight group-hover:text-lion-gold-dark transition-colors">
              Kiran Singh Foundation
            </span>
            <span className="text-[11px] text-slate font-mono tracking-widest uppercase font-medium">
              A Journey from struggle to Enlightenment
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/40 font-semibold shadow-sm"
                    : "text-slate hover:text-obsidian hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Emergency & Mobile Toggle */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <Link
            href="/emergency"
            className="group relative inline-flex items-center space-x-2 px-3.5 md:px-4 py-2 min-h-[48px] rounded-full bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-xs font-medium hover:bg-crimson-alert/15 hover:border-crimson-alert active:scale-[0.97] transition-all duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" aria-hidden="true"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" aria-hidden="true"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px] font-semibold">Emergency Grid</span>
            <div className="w-5 h-5 rounded-full bg-crimson-alert/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 text-crimson-alert" aria-hidden="true" strokeWidth={1.5} />
            </div>
          </Link>

          {/* Mobile Menu Trigger with >= 48px Touch Target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-slate-100 border border-border text-obsidian hover:text-lion-gold-dark active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay with overflow-y-auto */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-porcelain/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between border-t border-border overflow-y-auto max-h-[calc(100vh-88px)] animate-in fade-in slide-in-from-top-4 duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <div className="flex flex-col space-y-3 pt-2">
            <div className="px-2 text-xs uppercase tracking-widest text-slate font-mono font-medium">
              Institutional Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group px-4 py-3 rounded-2xl border text-base font-medium flex items-center justify-between shadow-sm transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? "bg-lion-gold/10 border-lion-gold/50 text-lion-gold-dark font-semibold"
                      : "bg-white border-border text-obsidian hover:border-lion-gold/50 hover:text-lion-gold-dark"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" strokeWidth={1.5} />
                </Link>
              );
            })}
            <Link
              href="/emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-base font-semibold flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
            >
              <div className="flex items-center space-x-2">
                <HeartPulse className="w-5 h-5 text-crimson-alert" aria-hidden="true" strokeWidth={1.5} />
                <span>24/7 Emergency Crisis Desk</span>
              </div>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-border text-center shadow-sm">
            <p className="font-serif text-sm text-obsidian italic font-medium">"A Journey from struggle to Enlightenment"</p>
            <p className="text-[11px] text-slate mt-1 font-mono font-medium">
              Trust registered under Indian Trust Act of 1882 &bull; "Working Towards Change"
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
