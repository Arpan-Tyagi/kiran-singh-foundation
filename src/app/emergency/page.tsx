"use client";

import React, { useState } from "react";
import { Phone, PhoneCall, AlertTriangle, ShieldAlert, HeartPulse, Send, CheckCircle2, ArrowUpRight, MapPin, Ambulance } from "lucide-react";
import { submitIntakeAction } from "@/actions/intake";
import { buildEmergencyWhatsAppUrl } from "@/lib/whatsapp";

export default function EmergencyPage() {
  const [callerName, setCallerName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isInjuredCanine, setIsInjuredCanine] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const directWhatsAppUrl = buildEmergencyWhatsAppUrl({
    callerName: callerName || "Emergency Caller",
    phone: contactPhone || "Direct Hotline",
    location: location || "Immediate assistance requested",
    description: description || "Critical distress situation reported",
    isInjuredCanine,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await submitIntakeAction({
        applicantName: callerName,
        contactEmail: "emergency-desk@kiransinghfoundation.org",
        contactPhone,
        category: "emergency_distress",
        priority: "critical_emergency",
        subject: `🚨 CRITICAL DISTRESS: ${location || "Immediate Triage"}`,
        messageDetails: description,
        locationData: location,
        isInjuredCanine,
      });

      if (res.success && res.referenceId) {
        setSubmitted(res.referenceId);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
      {/* Header with High-Priority Crimson Alert */}
      <div className="p-8 rounded-3xl bg-crimson-alert/20 border-2 border-crimson-alert text-center space-y-4 shadow-emergency-glow">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-crimson-alert text-white text-xs font-mono tracking-widest uppercase">
          <HeartPulse className="w-4 h-4 animate-pulse" />
          <span>High-Priority Distress Protocol Active</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-bold uppercase leading-tight">
          Emergency Distress <span className="italic font-light">Response</span>
        </h1>
        <p className="text-sm sm:text-base text-red-200 max-w-2xl mx-auto leading-relaxed">
          The Kiran Singh Foundation operates a synchronized 24/7 mutual-aid lifeline for street canine trauma,
          severe animal injuries, and urgent community crisis in the Chennai and suburban corridors.
        </p>

        {/* Quick-Dial Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+919840012345"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white text-crimson-alert font-sans font-bold text-base shadow-2xl hover:bg-parchment transition-all hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 text-crimson-alert animate-bounce" />
            <span>Call 24/7 Hotline: +91 98400 12345</span>
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-base shadow-2xl transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Instant Emergency WhatsApp Alert</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Two Column Layout: Fast Distress Intake & On-Scene Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Instant Emergency Intake Form */}
        <div className="lg:col-span-7 bezel-card border-crimson-alert/30">
          <div className="bezel-card-inner p-6 sm:p-8">
            <div className="flex items-center space-x-3 pb-4 border-b border-white/10 mb-6">
              <Ambulance className="w-6 h-6 text-crimson-alert" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-parchment">
                  Fast Incident Log & Geolocation
                </h3>
                <p className="text-xs font-mono text-parchment-dim">
                  Direct telemetry to on-duty veterinary mobile team
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-slate-charcoal border border-emerald-500/50 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-parchment">
                  Emergency Incident Transmitted
                </h4>
                <p className="text-xs font-mono text-lion-gold">
                  Incident Docket: #{submitted}
                </p>
                <p className="text-xs text-parchment-muted">
                  Field unit coordinators have received your alert. Keep your phone line free.
                </p>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Send Photos & Live GPS on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-parchment-dim mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={callerName}
                    onChange={(e) => setCallerName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full bg-obsidian border border-parchment/20 rounded-xl px-4 py-3 text-sm text-parchment focus:outline-none focus:border-crimson-alert"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-parchment-dim mb-1">
                    Your Contact Phone (Must be reachable right now) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+91 98400 12345"
                    className="w-full bg-obsidian border border-parchment/20 rounded-xl px-4 py-3 text-sm text-parchment focus:outline-none focus:border-crimson-alert"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-parchment-dim mb-1">
                    Exact Location / Landmark *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-crimson-alert absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. GST Road opposite Vandalur Zoo Main Gate"
                      className="w-full pl-10 pr-4 py-3 bg-obsidian border border-parchment/20 rounded-xl text-sm text-parchment focus:outline-none focus:border-crimson-alert"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-parchment-dim mb-1">
                    Description of Distress / Injury *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. Struck by vehicle, bleeding from back leg, unable to stand, sheltered beside tea stall..."
                    className="w-full bg-obsidian border border-parchment/20 rounded-xl p-3 text-sm text-parchment focus:outline-none focus:border-crimson-alert"
                  />
                </div>

                <div className="p-3 rounded-xl bg-obsidian border border-white/5">
                  <label className="flex items-center space-x-3 cursor-pointer text-xs text-parchment font-medium">
                    <input
                      type="checkbox"
                      checked={isInjuredCanine}
                      onChange={(e) => setIsInjuredCanine(e.target.checked)}
                      className="w-4 h-4 rounded text-crimson-alert bg-slate-charcoal border-parchment/20"
                    />
                    <span>Canine Trauma / Rescued Animal Case (Requires Veterinary Unit)</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-crimson-alert hover:bg-crimson-alert-light text-white font-sans font-bold text-sm flex items-center justify-center space-x-2 shadow-emergency-glow transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Transmitting Distress Log..." : "Transmit Distress Alert"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: First-Aid Protocols & Standby Instructions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bezel-card">
            <div className="bezel-card-inner p-6 space-y-4">
              <span className="font-mono text-xs text-lion-gold uppercase tracking-widest font-semibold flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-lion-gold" />
                <span>On-Scene Canine First-Aid</span>
              </span>

              <h4 className="font-serif text-xl font-bold text-parchment">
                Immediate Instructions While Unit En Route
              </h4>

              <ul className="space-y-3 text-xs text-parchment-muted font-sans">
                <li className="flex items-start space-x-2">
                  <span className="text-lion-gold font-bold">&bull;</span>
                  <span><strong>Do not crowd the animal:</strong> Injured dogs bite reflexively out of fear. Maintain gentle acoustic calmness.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-lion-gold font-bold">&bull;</span>
                  <span><strong>Bleeding control:</strong> Apply direct pressure with clean cloth. Avoid tourniquets unless instructed by phone.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-lion-gold font-bold">&bull;</span>
                  <span><strong>Do not feed or hydrate:</strong> If surgical intervention or anesthesia is required, stomach must remain empty.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-lion-gold font-bold">&bull;</span>
                  <span><strong>Thermal protection:</strong> Shield from direct asphalt heat or heavy rain with cardboard/umbrella.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono text-parchment-dim">
            <div className="text-lion-gold uppercase font-semibold">Sanctuary Base Station:</div>
            <div>Dog Care Centre &bull; Vandalur South Corridor, Chennai</div>
            <div>Equipped with surgical recovery bay, oxygen concentrators, and rabies anti-serum.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
