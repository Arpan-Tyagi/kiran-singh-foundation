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
    { label: "Archive", href: "/about" },
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
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-border p-0.5 bg-white group-hover:border-lion-gold transition-colors duration-300 shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Kiran Singh Foundation Emblem - Roaring Lion Seal"
              fill
              sizes="44px"
              className="object-cover object-[center_20%] scale-110 rounded-full group-hover:scale-115 transition-transform duration-500"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm md:text-base font-bold tracking-wider text-obsidian uppercase leading-tight group-hover:text-lion-gold transition-colors">
              Kiran Singh Foundation
            </span>
            <span className="text-[10px] text-slate font-mono tracking-widest uppercase">
              Working towards Change
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/40 font-semibold"
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
            className="group relative inline-flex items-center space-x-2 px-3.5 md:px-4 py-1.5 rounded-full bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-xs font-medium hover:bg-crimson-alert/15 hover:border-crimson-alert transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px] font-semibold">Emergency Grid</span>
            <div className="w-5 h-5 rounded-full bg-crimson-alert/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 text-crimson-alert" />
            </div>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100 border border-border text-obsidian hover:text-lion-gold transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-porcelain/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            <div className="px-2 text-xs uppercase tracking-widest text-slate font-mono font-medium">
              Institutional Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl bg-white border border-border text-obsidian hover:border-lion-gold/50 hover:text-lion-gold text-base font-medium flex items-center justify-between shadow-sm transition-all"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate" />
              </Link>
            ))}
            <Link
              href="/emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-base font-semibold flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <HeartPulse className="w-5 h-5 text-crimson-alert" />
                <span>24/7 Emergency Crisis Desk</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-border text-center shadow-sm">
            <p className="font-serif text-sm text-obsidian italic font-medium">"Working towards Change"</p>
            <p className="text-[11px] text-slate mt-1 font-mono">
              Late Kiran Singh ji Memorial Foundation
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
