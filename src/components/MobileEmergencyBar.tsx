"use client";

import React from "react";
import { Phone, ArrowUpRight, HeartPulse } from "lucide-react";

export default function MobileEmergencyBar() {
  const whatsappSOSUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919670970750"
  }?text=%F0%9F%9A%A8%20*%5BCRITICAL%20EMERGENCY%20DISPATCH%20LIFELINE%5D*%20Immediate%20veterinary%20field%20response%20requested%20in%20Prayagraj.`;

  return (
    <aside
      aria-label="Mobile Emergency Distress Lifeline"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-crimson-alert/25 px-3.5 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-elevation-card flex items-center justify-between gap-2.5"
    >
      {/* 24/7 Dial Hotline */}
      <a
        href="tel:+919670970750"
        className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-obsidian text-xs font-mono font-semibold min-h-[48px] shrink-0 border border-border transition-all"
        aria-label="Call 24/7 Hotline"
      >
        <Phone className="w-4 h-4 text-crimson-alert animate-bounce" />
        <span>Hotline</span>
      </a>

      {/* WhatsApp SOS 1-Tap Trigger */}
      <a
        href={whatsappSOSUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full bg-crimson-alert hover:bg-crimson-alert-light active:scale-[0.98] text-white text-xs font-sans font-bold uppercase tracking-wider min-h-[48px] shadow-emergency-glow transition-all"
        aria-label="Trigger WhatsApp Emergency SOS"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <HeartPulse className="w-4 h-4 text-white" />
        <span>WhatsApp SOS</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
      </a>
    </aside>
  );
}
