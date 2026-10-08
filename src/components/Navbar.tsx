"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlertCircle, Menu, X, ArrowUpRight, ShieldCheck, HeartPulse } from "lucide-react";

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
            ? "bg-obsidian/90 backdrop-blur-xl border-parchment/10 shadow-2xl shadow-black/80"
            : "bg-slate-charcoal/60 backdrop-blur-md border-parchment/5"
        }`}
      >
        {/* Emblem & Brand Identity */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-lion-gold/40 p-0.5 bg-obsidian group-hover:border-lion-gold transition-colors duration-300">
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
            <span className="font-serif text-sm md:text-base font-semibold tracking-wider text-parchment uppercase leading-tight group-hover:text-lion-gold transition-colors">
              Kiran Singh Foundation
            </span>
            <span className="text-[10px] text-parchment-dim font-mono tracking-widest uppercase">
              Working towards Change
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-parchment/10 text-lion-gold border border-lion-gold/30"
                    : "text-parchment-muted hover:text-parchment hover:bg-white/5"
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
            className="group relative inline-flex items-center space-x-2 px-3.5 md:px-4 py-1.5 rounded-full bg-crimson-alert/20 border border-crimson-alert/40 text-red-300 text-xs font-medium hover:bg-crimson-alert/30 hover:border-crimson-alert transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px]">Emergency Grid</span>
            <div className="w-5 h-5 rounded-full bg-crimson-alert/40 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 text-red-200" />
            </div>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-parchment hover:text-lion-gold transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-obsidian/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between border-t border-parchment/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4 pt-4">
            <div className="px-2 text-xs uppercase tracking-widest text-parchment-dim font-mono">
              Institutional Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/5 text-parchment hover:border-lion-gold/40 hover:text-lion-gold text-base font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-parchment-dim" />
              </Link>
            ))}
            <Link
              href="/emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-crimson-alert/20 border border-crimson-alert/40 text-red-200 text-base font-medium flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <HeartPulse className="w-5 h-5 text-red-400" />
                <span>24/7 Emergency Crisis Desk</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-slate-charcoal border border-parchment/10 text-center">
            <p className="font-serif text-sm text-parchment italic">"Working towards Change"</p>
            <p className="text-[11px] text-parchment-dim mt-1 font-mono">
              Late Kiran Singh ji Memorial Foundation
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
