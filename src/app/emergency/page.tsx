"use client";

import React, { useState } from "react";
import { Phone, PhoneCall, HeartPulse, Send, CheckCircle2, ArrowUpRight, MapPin, Ambulance, ShieldAlert } from "lucide-react";
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
        contactEmail: "kiransinghfoundationindia@gmail.com",
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
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 bg-porcelain">
      {/* Header with High-Priority Crimson Alert */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-crimson-alert/30 text-center space-y-4 shadow-elevation-card">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-crimson-alert/10 border border-crimson-alert/25 text-crimson-alert text-xs font-mono tracking-widest uppercase font-semibold">
          <HeartPulse className="w-4 h-4 animate-pulse text-crimson-alert" />
          <span>24/7 Rapid Mutual-Aid Dispatch Grid &bull; Active Protocol</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian font-bold uppercase leading-tight">
          Emergency Mutual-Aid <span className="italic text-crimson-alert font-light">Response</span>
        </h1>
        <p className="text-sm sm:text-base text-slate max-w-2xl mx-auto leading-relaxed font-sans">
          The foundational lifeline of the Kiran Singh Foundation: operating an interconnected mutual-aid network that
          mobilizes immediate medical intervention for street animal trauma, acute canine distress, and urgent community
          crises. Trust registered under Indian Trust Act of 1882 &bull; &ldquo;A Journey from struggle to Enlightenment&rdquo;.
        </p>

        {/* Quick-Dial Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+919670970750"
            className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-crimson-alert hover:bg-crimson-alert-light text-white font-sans font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4 text-white animate-bounce" />
            <span>Primary Hotline: +91 96709 70750</span>
          </a>

          <a
            href="tel:+918115141378"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-mono text-xs font-semibold shadow-sm transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-lion-gold" />
            <span>Line 2: +91 81151 41378</span>
          </a>

          <a
            href="tel:+919450630310"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white font-mono text-xs font-semibold shadow-sm transition-all hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-lion-gold" />
            <span>Line 3: +91 94506 30310</span>
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-sans font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Dispatch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Two Column Layout: Fast Distress Intake & On-Scene Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Instant Emergency Intake Form */}
        <div className="lg:col-span-7 bg-white border border-border rounded-2xl p-6 sm:p-8 shadow-elevation-1">
          <div className="flex items-center space-x-3 pb-4 border-b border-border mb-6">
            <Ambulance className="w-6 h-6 text-crimson-alert" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-obsidian">
                Fast Incident Log & Geolocation
              </h3>
              <p className="text-xs font-mono text-slate">
                Direct telemetry to on-duty veterinary mobile team
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-slate-50 border border-botanical-emerald/30 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-botanical-emerald mx-auto" />
              <h4 className="font-serif text-xl font-bold text-obsidian">
                Emergency Incident Transmitted
              </h4>
              <p className="text-xs font-mono text-lion-gold-dark font-semibold">
                Incident Docket: #{submitted}
              </p>
              <p className="text-xs text-slate">
                Field unit coordinators have received your alert. Keep your phone line reachable.
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-botanical-emerald text-white text-xs font-semibold hover:bg-botanical-emerald-light transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Send Photos & Live GPS on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate mb-1 font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-crimson-alert focus:ring-2 focus:ring-crimson-alert/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate mb-1 font-medium">
                  Your Contact Phone (Must be reachable right now) *
                </label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+91 96709 70750"
                  className="w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-sm text-obsidian focus:outline-none focus:border-crimson-alert focus:ring-2 focus:ring-crimson-alert/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate mb-1 font-medium">
                  Exact Location / Landmark *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-crimson-alert absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Tilak Nagar Allahpur or Civil Lines, Prayagraj"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-border rounded-xl text-sm text-obsidian focus:outline-none focus:border-crimson-alert focus:ring-2 focus:ring-crimson-alert/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate mb-1 font-medium">
                  Description of Distress / Injury *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Struck by vehicle, bleeding from back leg, unable to stand, sheltered beside tea stall..."
                  className="w-full bg-slate-50 border border-border rounded-xl p-3 text-sm text-obsidian focus:outline-none focus:border-crimson-alert focus:ring-2 focus:ring-crimson-alert/15 transition-all"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-border">
                <label className="flex items-center space-x-3 cursor-pointer text-xs text-obsidian font-semibold">
                  <input
                    type="checkbox"
                    checked={isInjuredCanine}
                    onChange={(e) => setIsInjuredCanine(e.target.checked)}
                    className="w-4 h-4 rounded text-crimson-alert bg-white border-border focus:ring-0"
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

        {/* Right Column: First-Aid Protocols & Standby Instructions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-elevation-1">
            <span className="font-mono text-xs text-lion-gold-dark uppercase tracking-widest font-semibold flex items-center space-x-1.5">
              <ShieldAlert className="w-4 h-4 text-lion-gold-dark" />
              <span>On-Scene Canine First-Aid</span>
            </span>

            <h4 className="font-serif text-xl font-bold text-obsidian">
              Immediate Instructions While Unit En Route
            </h4>

            <ul className="space-y-3 text-xs text-slate font-sans leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-lion-gold-dark font-bold">&bull;</span>
                <span><strong className="text-obsidian">Do not crowd the animal:</strong> Injured dogs bite reflexively out of fear. Maintain gentle acoustic calmness.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lion-gold-dark font-bold">&bull;</span>
                <span><strong className="text-obsidian">Bleeding control:</strong> Apply direct pressure with clean cloth. Avoid tourniquets unless instructed by phone.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lion-gold-dark font-bold">&bull;</span>
                <span><strong className="text-obsidian">Do not feed or hydrate:</strong> If surgical intervention or anesthesia is required, stomach must remain empty.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lion-gold-dark font-bold">&bull;</span>
                <span><strong className="text-obsidian">Thermal protection:</strong> Shield from direct asphalt heat or heavy rain with cardboard/umbrella.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-border space-y-2.5 text-xs font-mono text-slate shadow-sm">
            <div className="text-lion-gold-dark uppercase font-semibold">Registered Trust &bull; Secretariat Desk:</div>
            <div className="text-obsidian font-semibold text-sm">191/C, Tilak Nagar Allahpur Prayagraj 211006</div>
            <div className="text-slate">Trust registered under Indian Trust Act of 1882 &bull; &ldquo;A Journey from struggle to Enlightenment&rdquo;</div>
            <div className="pt-2 border-t border-border space-y-1">
              <div><strong className="text-obsidian">Helplines:</strong> +91 96709 70750, +91 81151 41378, +91 94506 30310</div>
              <div><strong className="text-obsidian">Email:</strong> kiransinghfoundationindia@gmail.com</div>
            </div>
            <div className="text-[11px] text-slate/80 pt-1">
              Sanctuary Base: Dog Care Centre, Prayagraj &bull; Surgical recovery bay &amp; emergency triage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
