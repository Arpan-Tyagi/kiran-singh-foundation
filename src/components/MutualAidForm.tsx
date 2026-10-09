"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle, AlertTriangle, ArrowUpRight, HeartHandshake, Phone } from "lucide-react";
import { submitIntakeAction, SubmitIntakeInput } from "@/actions/intake";

export default function MutualAidForm() {
  const [formData, setFormData] = useState<SubmitIntakeInput>({
    applicantName: "",
    contactEmail: "",
    contactPhone: "",
    category: "volunteer_onboarding",
    priority: "standard",
    subject: "",
    messageDetails: "",
    locationData: "",
    isInjuredCanine: false,
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    whatsappUrl?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await submitIntakeAction(formData);
      if (res.success && res.referenceId) {
        setSuccessResult({
          referenceId: res.referenceId,
          whatsappUrl: res.whatsappUrl,
        });
      } else {
        setErrorMessage(res.error || "Failed to submit request.");
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="mutual-aid" className="py-20 md:py-28 px-4 md:px-8 bg-porcelain relative border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-border rounded-3xl shadow-elevation-1 p-8 md:p-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase mb-4 font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Mutual-Aid Dispatch & Intake Grid</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-obsidian uppercase">
              Community <span className="italic text-lion-gold font-light">Interconnectedness</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate leading-relaxed font-sans">
              Core Purpose: Deep community interconnectedness—ensuring participants and supporters
              are immediately available for one another during emergencies. All entries trigger automated WhatsApp and email dispatch.
            </p>
          </div>

          {/* Community Relief Photo Banner */}
          <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden mb-8 border border-border shadow-sm group">
            <Image
              src="/images/mutual-aid.jpg"
              alt="Chennai Community Mutual-Aid & Relief Grid"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] font-mono text-white/95">
                Rapid Field Response &bull; Direct Mutual Aid for Community and Animal Emergencies
              </span>
            </div>
          </div>

          {successResult ? (
            <div className="p-8 rounded-3xl bg-slate-50 border border-botanical-emerald/30 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 flex items-center justify-center mx-auto text-botanical-emerald">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-obsidian">
                  Submission Formally Registered
                </h3>
                <p className="text-xs font-mono text-lion-gold-dark mt-1 font-semibold">
                  Registry Reference: #{successResult.referenceId}
                </p>
                <p className="text-xs sm:text-sm text-slate mt-3 max-w-md mx-auto leading-relaxed">
                  Your details have been recorded in the foundation triage queue. Transactional confirmation
                  and field alerts have been dispatched.
                </p>
              </div>

              {successResult.whatsappUrl && (
                <div className="pt-2">
                  <a
                    href={successResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-sans font-semibold text-sm shadow-md transition-all hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Open Pre-filled WhatsApp Alert Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              <button
                onClick={() => {
                  setSuccessResult(null);
                  setFormData({
                    applicantName: "",
                    contactEmail: "",
                    contactPhone: "",
                    category: "volunteer_onboarding",
                    priority: "standard",
                    subject: "",
                    messageDetails: "",
                    locationData: "",
                    isInjuredCanine: false,
                  });
                }}
                className="text-xs font-mono text-slate hover:text-obsidian underline block mx-auto pt-2"
              >
                Submit Another Intake
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-2xl bg-crimson-alert/10 border border-crimson-alert/30 text-crimson-alert text-xs flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 text-crimson-alert" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Category Selection Tabs */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate mb-3 font-semibold">
                  1. Classification of Inquiry
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "volunteer_onboarding",
                      label: "Volunteer Onboarding",
                      desc: "Join student mentorship or canine care",
                    },
                    {
                      id: "student_application",
                      label: "Student Welfare",
                      desc: "Scholarship & internship inquiry",
                    },
                    {
                      id: "emergency_distress",
                      label: "Emergency Distress",
                      desc: "Animal injury or community crisis",
                    },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          category: cat.id as any,
                          priority: cat.id === "emergency_distress" ? "urgent" : "standard",
                        })
                      }
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        formData.category === cat.id
                          ? cat.id === "emergency_distress"
                            ? "bg-crimson-alert/10 border-crimson-alert text-crimson-alert shadow-sm"
                            : "bg-lion-gold/10 border-lion-gold text-obsidian shadow-sm"
                          : "bg-slate-50 border-border text-slate hover:bg-slate-100"
                      }`}
                    >
                      <span className="font-sans font-semibold text-xs sm:text-sm block">
                        {cat.label}
                      </span>
                      <span className="text-[11px] text-slate mt-1 block">
                        {cat.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.applicantName}
                    onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                    placeholder="e.g. S. Ramanathan"
                    className="w-full bg-slate-50/70 border border-border rounded-xl px-4 py-3 text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate mb-2 font-medium">
                    Phone Number (WhatsApp Active) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+91 98400 12345"
                    className="w-full bg-slate-50/70 border border-border rounded-xl px-4 py-3 text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate mb-2 font-medium">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50/70 border border-border rounded-xl px-4 py-3 text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate mb-2 font-medium">
                    Location / Landmark (Crucial for Rescues)
                  </label>
                  <input
                    type="text"
                    value={formData.locationData}
                    onChange={(e) => setFormData({ ...formData, locationData: e.target.value })}
                    placeholder="e.g. Vandalur Overbridge or Tambaram Station"
                    className="w-full bg-slate-50/70 border border-border rounded-xl px-4 py-3 text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate mb-2 font-medium">
                  Situation or Inquiry Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.messageDetails}
                  onChange={(e) => setFormData({ ...formData, messageDetails: e.target.value })}
                  placeholder="Provide exact context, animal condition, or academic background..."
                  className="w-full bg-slate-50/70 border border-border rounded-xl p-4 text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                />
              </div>

              {/* Emergency Indicator */}
              {formData.category === "emergency_distress" && (
                <div className="p-4 rounded-2xl bg-crimson-alert/5 border border-crimson-alert/25 space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isInjuredCanine}
                      onChange={(e) =>
                        setFormData({ ...formData, isInjuredCanine: e.target.checked })
                      }
                      className="w-4 h-4 rounded text-crimson-alert bg-white border-border focus:ring-0"
                    />
                    <span className="text-xs font-semibold text-crimson-alert">
                      Involves Injured Street Dog or Active Trauma Requiring Immediate Veterinary Field Unit
                    </span>
                  </label>

                  <div className="flex items-center space-x-4 pt-1">
                    <span className="text-[11px] font-mono text-slate font-medium">Priority Level:</span>
                    {(["urgent", "critical_emergency"] as const).map((lvl) => (
                      <label key={lvl} className="flex items-center space-x-1.5 cursor-pointer text-xs">
                        <input
                          type="radio"
                          name="priority"
                          value={lvl}
                          checked={formData.priority === lvl}
                          onChange={() => setFormData({ ...formData, priority: lvl })}
                          className="text-crimson-alert"
                        />
                        <span className="uppercase text-[11px] font-mono text-crimson-alert font-semibold">
                          {lvl.replace("_", " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Action */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-full font-sans font-semibold text-sm flex items-center justify-center space-x-3 transition-all ${
                  formData.category === "emergency_distress"
                    ? "bg-crimson-alert hover:bg-crimson-alert-light text-white shadow-emergency-glow"
                    : "bg-lion-gold hover:bg-lion-gold-dark text-white shadow-gold-glow"
                } disabled:opacity-50`}
              >
                <Send className="w-4 h-4" />
                <span>
                  {loading
                    ? "Dispatching to Registry & WhatsApp..."
                    : formData.category === "emergency_distress"
                    ? "Trigger Immediate Emergency Dispatch"
                    : "Transmit Mutual-Aid Intake"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
