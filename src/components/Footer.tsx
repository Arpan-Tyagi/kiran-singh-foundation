import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-border pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          {/* Institutional Anchor & Founder Tribute */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-lion-gold/50 p-0.5 bg-white shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Kiran Singh Foundation Heraldic Lion Emblem"
                  fill
                  sizes="56px"
                  className="object-cover object-[center_20%] scale-110 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-obsidian">
                  Kiran Singh Foundation
                </h3>
                <p className="font-mono text-xs text-lion-gold tracking-widest uppercase font-semibold">
                  "Working towards Change"
                </p>
              </div>
            </div>

            <p className="text-sm text-slate leading-relaxed font-sans">
              Established in sacred memory of <strong className="text-obsidian font-semibold">Late Kiran Singh ji</strong>,
              who earned his Ph.D. specializing in the behavioral science, training, and conditioning of apex felids
              (lions, tigers, and leopards). He served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna
              Zoological Park (AAZP Vandalur, Chennai) and worked in close alignment with then Chief Minister Late
              Jayaram Jayalalithaa ("Amma").
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate font-medium">
                <ShieldCheck className="w-4 h-4 text-botanical-emerald" />
                <span>Non-Profit Institutional Registry &bull; Mutual-Aid Grid</span>
              </div>
              <p className="text-xs text-slate">
                100% of resources are endowed directly to our 40 scholars and 34 resident canines.
              </p>
            </div>
          </div>

          {/* Operational Wings */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
              Operational Wings
            </h4>
            <div className="space-y-3.5">
              <Link
                href="/wings/students"
                className="group block p-4 rounded-2xl bg-slate-50 border border-border hover:border-lion-gold/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-sm font-semibold text-obsidian group-hover:text-lion-gold-dark">
                  <span>Wing A: Student Welfare Wing</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate mt-1 leading-relaxed">
                  Supports exactly 40 active students directly under foundation sponsorship with fully funded soft skills incubation and pro bono internships.
                </p>
              </Link>

              <Link
                href="/wings/dogs"
                className="group block p-4 rounded-2xl bg-slate-50 border border-border hover:border-botanical-emerald/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-sm font-semibold text-obsidian group-hover:text-botanical-emerald">
                  <span>Wing B: Dog Care Centre</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate mt-1 leading-relaxed">
                  Protects and shelters exactly 34 rescued street dogs with 100% funded veterinary healthcare, rabies vaccinations, and sanctuary.
                </p>
              </Link>
            </div>
          </div>

          {/* Emergency Lifeline & Links */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
              Crisis & Communications
            </h4>
            <ul className="space-y-3 text-xs text-slate font-sans">
              <li>
                <Link
                  href="/emergency"
                  className="flex items-center space-x-2 text-crimson-alert hover:text-red-700 font-semibold"
                >
                  <span className="w-2 h-2 rounded-full bg-crimson-alert animate-pulse" />
                  <span>24/7 Distress Response Desk</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919840012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-obsidian"
                >
                  <Phone className="w-3.5 h-3.5 text-botanical-emerald" />
                  <span>WhatsApp: +91 98400 12345</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@kiransinghfoundation.org"
                  className="flex items-center space-x-2 hover:text-obsidian"
                >
                  <Mail className="w-3.5 h-3.5 text-slate" />
                  <span>concierge@kiransinghfoundation.org</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate pt-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-slate shrink-0 mt-0.5" />
                <span>Arignar Anna Zoological Park Corridor & Adyar Lowland Base, Chennai, Tamil Nadu</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/admin"
                className="text-[11px] font-mono text-slate hover:text-lion-gold-dark transition-colors inline-block font-medium"
              >
                &rarr; Directorate Admin Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate font-mono gap-4">
          <p>
            &copy; {new Date().getFullYear()} Kiran Singh Foundation. All Rights Reserved.
          </p>
          <p className="italic font-serif text-slate font-medium">
            Dedicated in Sacred Memory of Late Kiran Singh ji
          </p>
        </div>
      </div>
    </footer>
  );
}
