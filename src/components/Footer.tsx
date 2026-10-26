import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-border pt-20 pb-24 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          {/* Institutional Anchor & Founder Tribute */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-lion-gold/50 p-1 bg-white shadow-sm shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Kiran Singh Foundation Heraldic Lion Emblem"
                  fill
                  sizes="56px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-obsidian">
                  Kiran Singh Foundation
                </h3>
                <p className="font-mono text-xs text-lion-gold-dark tracking-widest uppercase font-semibold">
                  &ldquo;A Journey from struggle to Enlightenment&rdquo;
                </p>
                <p className="font-mono text-[11px] text-slate font-medium uppercase tracking-wider">
                  Trust registered under Indian Trust Act of 1882 &bull; &ldquo;Working Towards Change&rdquo;
                </p>
              </div>
            </div>

            <p className="text-sm text-slate leading-relaxed font-sans">
              Established in sacred memory of <strong className="text-obsidian font-semibold">Late Kiran Singh ji</strong>.
              She earned her Ph.D. specializing in the behavioral science, psychology, and conditioning of large apex felids
              (lions, tigers, and leopards). She served as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna
              Zoological Park (AAZP Vandalur, Chennai) and worked in close consultative alignment with the then Chief Minister
              of Tamil Nadu, Late J. Jayalalithaa ("Amma").
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate font-medium">
                <ShieldCheck className="w-4 h-4 text-botanical-emerald shrink-0" />
                <span>Trust registered under Indian Trust Act of 1882 &bull; Est: 30/04/2023</span>
              </div>
              <p className="text-xs text-slate leading-relaxed">
                100% of operational resources are directly deployed across our 4 Operational Wings: 40 scholars (4 teams), 34 resident canines (4 shelter homes), Village Development, and Women Empowerment.
              </p>
              <div className="text-[11px] font-mono text-slate border-t border-border/60 pt-2 space-y-1">
                <div><strong className="text-obsidian">Registered Office:</strong> 191/C, Tilak Nagar Allahpur Prayagraj 211006</div>
                <div><strong className="text-obsidian">Statutory IDs:</strong> PAN: AAGTK3961N &bull; CSR: CSR00110895 &bull; URN: AAGTK3961NE20261 &bull; SRN: AC3352827</div>
                <div><strong className="text-obsidian">Endowment Bank:</strong> HDFC Bank (Naya Katra, Prayagraj) &bull; A/C: 50200119758811 &bull; IFSC: HDFC0004664</div>
                <div><strong className="text-obsidian">Academic Partner:</strong> UPES Dehradun &bull; MoU Accord: 13/04/2026 (e-Stamp IN-UK09052749976330X)</div>
                <div><strong className="text-obsidian">Email:</strong> kiransinghfoundationindia@gmail.com</div>
              </div>
            </div>
          </div>

          {/* 4 Operational Wings */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
              4 Operational Wings
            </h4>
            <div className="space-y-2.5">
              <Link
                href="/wings/students"
                className="group block p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-lion-gold/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-obsidian group-hover:text-lion-gold-dark">
                  <span>Wing A: KSF (Student Welfare) Wing</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate mt-1 leading-relaxed">
                  40 students selected via psychometric test &amp; interview across 4 teams; Summer &amp; Winter internships, plagiarism-audited research &amp; closing stipends.
                </p>
              </Link>

              <Link
                href="/wings/dogs"
                className="group block p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-botanical-emerald/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-obsidian group-hover:text-botanical-emerald">
                  <span>Wing B: KSF (Dog Welfare) Wing</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate mt-1 leading-relaxed">
                  Built 4 shelter homes housing 34 rescued street dogs in Prayagraj with complete food, clean water, vaccination &amp; clinical trauma facilities.
                </p>
              </Link>

              <Link
                href="/about#four-wings-charter"
                className="group block p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-lion-gold/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-obsidian group-hover:text-lion-gold-dark">
                  <span>Wing C: KSF (Village Development) Wing</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate mt-1 leading-relaxed">
                  &ldquo;Empowering village through education&rdquo; &mdash; 100% educational fees, food cost, and shelter facility underwritten for rural students.
                </p>
              </Link>

              <Link
                href="/about#four-wings-charter"
                className="group block p-3.5 rounded-2xl bg-slate-50 border border-border hover:border-botanical-emerald/40 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-obsidian group-hover:text-botanical-emerald">
                  <span>Wing D: KSF (Women Empowerment) Wing</span>
                  <ArrowUpRight className="w-4 h-4 text-slate group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate mt-1 leading-relaxed">
                  Career advancement across education, business &amp; entrepreneurship via awareness programs and investment summits.
                </p>
              </Link>
            </div>
          </div>

          {/* Emergency Lifeline & Links */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-lion-gold-dark font-semibold">
              Secretariat &amp; Communications
            </h4>
            <ul className="space-y-2.5 text-xs text-slate font-sans">
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
                  href="https://wa.me/919670970750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-obsidian font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-botanical-emerald shrink-0" />
                  <span>Mob: +91 96709 70750 (Primary/WhatsApp)</span>
                </a>
              </li>
              <li className="pl-5 text-slate flex flex-col space-y-0.5">
                <a href="tel:+918115141378" className="hover:text-obsidian font-mono text-[11px]">
                  &bull; +91 81151 41378
                </a>
                <a href="tel:+919450630310" className="hover:text-obsidian font-mono text-[11px]">
                  &bull; +91 94506 30310
                </a>
              </li>
              <li>
                <a
                  href="mailto:kiransinghfoundationindia@gmail.com"
                  className="flex items-center space-x-2 hover:text-obsidian"
                >
                  <Mail className="w-3.5 h-3.5 text-slate shrink-0" />
                  <span className="break-all font-mono text-[11px]">kiransinghfoundationindia@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate pt-1 leading-relaxed">
                <MapPin className="w-4 h-4 text-slate shrink-0 mt-0.5" />
                <span>191/C, Tilak Nagar Allahpur Prayagraj 211006</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-slate-50 border border-border font-mono text-[10px] text-slate space-y-0.5">
              <div className="text-obsidian font-semibold">Core Members (Trustees):</div>
              <div>&bull; Shri Anuj Kumar Singh (Secretary)</div>
              <div>&bull; Shri Anil Kumar Singh (President)</div>
              <div>&bull; Ms. Akansha Singh (Treasurer)</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-border font-mono text-[10px] text-slate space-y-1">
              <div className="flex items-center space-x-2">
                <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
                  <Image src="/images/partners/upes-logo.png" alt="UPES Logo" fill className="object-contain" sizes="16px" />
                </div>
                <span className="text-obsidian font-semibold">Academic Alliance:</span>
              </div>
              <div className="text-slate">UPES Dehradun &bull; School for Life (1:5 Mentor Ratio)</div>
            </div>

            <div className="pt-1">
              <Link
                href="/admin"
                className="text-[11px] font-mono text-slate hover:text-lion-gold-dark transition-colors inline-block font-medium"
              >
                &rarr; Directorate Admin Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Legal, Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate font-mono gap-4 border-t border-border/40 mt-2">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Kiran Singh Foundation. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-1.5 text-xs text-slate font-mono text-center">
            <span>Crafted with Purpose by</span>
            <a
              href="https://panarchdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-obsidian hover:text-lion-gold-dark transition-colors inline-flex items-center gap-1 underline underline-offset-4 decoration-border hover:decoration-lion-gold"
            >
              <span>Panarch Digital</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate hover:text-lion-gold-dark transition-colors" />
            </a>
          </div>

          <p className="italic font-serif text-slate font-medium text-center md:text-right">
            Dedicated in Sacred Memory of Late Kiran Singh ji
          </p>
        </div>
      </div>
    </footer>
  );
}
