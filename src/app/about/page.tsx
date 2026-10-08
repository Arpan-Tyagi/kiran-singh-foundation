import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Award, Landmark, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { MEMORIAL_RECORDS, FOUNDATION_META } from "@/lib/data/foundation-data";

export const metadata = {
  title: "Institutional Archive | Kiran Singh Foundation",
  description:
    "Official institutional history, academic credentials of Late Kiran Singh ji, and the historical advisory alignment with Late Chief Minister J. Jayalalithaa.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold text-[10px] font-mono tracking-widest uppercase">
          <span>Official Institutional Archive</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-parchment uppercase leading-tight font-normal">
          The Heritage & <span className="italic text-lion-gold font-light">Mandate</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase">
          "{FOUNDATION_META.motto}"
        </p>
        <p className="text-sm sm:text-base text-parchment-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Grounding our digital presence in verified institutional milestones, doctoral ethological research,
          and public service at the Tamil Nadu Zoo Authority.
        </p>
      </div>

      {/* Founder Bio Card */}
      <div className="bezel-card">
        <div className="bezel-card-inner p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Heraldic Emblem Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-b from-lion-gold/60 via-lion-gold/20 to-transparent shadow-gold-glow mb-6">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-obsidian border-2 border-lion-gold/40 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Heraldic Emblem Seal - Detailed Roaring Male Lion"
                    fill
                    sizes="224px"
                    className="object-cover object-[center_20%] scale-110"
                    priority
                  />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-parchment">
                The Heraldic Emblem
              </h3>
              <p className="text-xs text-parchment-muted mt-2 max-w-xs font-sans">
                A classical circular seal containing a detailed roaring male lion, surrounded by the ring inscription
                <strong className="text-lion-gold"> "KIRAN SINGH FOUNDATION"</strong>. Symbolizing vigilance, noble strength, and stewardship.
              </p>
            </div>

            {/* Founder Historical Narrative */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="text-xs font-mono text-lion-gold uppercase tracking-widest">
                Founder in Sacred Memory
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-parchment font-semibold">
                Late Kiran Singh ji
              </h2>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono text-parchment-dim">
                <div>&bull; <strong>Credentials:</strong> Ph.D. in Apex Felid Ethology & Conditioning</div>
                <div>&bull; <strong>Zoological Authority:</strong> Analyst at AAZP Vandalur (Chennai)</div>
                <div>&bull; <strong>Governance Alignment:</strong> Advised then Chief Minister Late J. Jayalalithaa ("Amma")</div>
              </div>

              <p className="text-sm text-parchment-muted leading-relaxed font-sans">
                Late Kiran Singh ji dedicated his academic life to understanding the behavioral science, training,
                and conditioning of apex felids—specifically lions, tigers, and leopards. His doctoral work
                reframed large predator management from coercive domination to predictable ethological reinforcement.
              </p>
              <p className="text-sm text-parchment-muted leading-relaxed font-sans">
                As an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai),
                he instituted world-class nocturnal enclosure enrichment, reduced captivity distress, and modernized animal
                safety protocols. His analytical rigor earned him the trust and close advisory partnership of then
                Chief Minister Late Jayaram Jayalalithaa ("Amma"), shaping progressive wildlife policies across the state.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Milestones Detailed Archive */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-parchment uppercase">
            Documented Milestones & Citations
          </h3>
          <p className="text-xs text-parchment-dim font-mono mt-1 uppercase tracking-wider">
            Verified Archival Gazette Records
          </p>
        </div>

        <div className="space-y-6">
          {MEMORIAL_RECORDS.map((rec) => (
            <div key={rec.id} className="bezel-card">
              <div className="bezel-card-inner p-6 md:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-parchment/10 pb-4">
                  <div>
                    <span className="font-mono text-xs text-lion-gold">{rec.period}</span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-parchment">
                      {rec.title}
                    </h4>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-mono text-xs text-parchment-dim block">Archival Identifier</span>
                    <span className="font-mono text-xs text-parchment font-semibold">{rec.archivalDocumentRef}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-parchment-dim">
                  <strong>Institutional Affiliation:</strong> {rec.institution} &bull; <strong>Discipline:</strong> {rec.researchDiscipline}
                </div>

                <p className="text-sm text-parchment-muted leading-relaxed font-sans">
                  {rec.detailedNarrative}
                </p>

                <div className="p-4 rounded-xl bg-obsidian border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    Governance & Policy Alignment:
                  </div>
                  <p className="text-xs text-parchment leading-relaxed">
                    {rec.advisoryAlignment}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-parchment-dim uppercase block mb-1">
                    Citations & Technical References:
                  </span>
                  <ul className="space-y-1">
                    {rec.citations.map((cite, i) => (
                      <li key={i} className="text-xs text-parchment-dim italic flex items-start space-x-2">
                        <span className="text-lion-gold">&bull;</span>
                        <span>{cite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Wings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-parchment/10">
        <div className="bezel-card">
          <div className="bezel-card-inner p-6 space-y-3">
            <span className="font-mono text-xs text-lion-gold uppercase tracking-widest font-semibold">
              Operational Wing A
            </span>
            <h4 className="font-serif text-2xl font-bold text-parchment">
              Student Welfare Wing
            </h4>
            <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans">
              Directly sponsors exactly 40 active students with 100% covered expenses for soft skills incubation,
              public discourse labs, and pro bono Summer and Winter internships.
            </p>
          </div>
        </div>

        <div className="bezel-card">
          <div className="bezel-card-inner p-6 space-y-3">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
              Operational Wing B
            </span>
            <h4 className="font-serif text-2xl font-bold text-parchment">
              Dog Care Centre
            </h4>
            <p className="text-xs sm:text-sm text-parchment-muted leading-relaxed font-sans">
              Protects and shelters exactly 34 rescued street dogs with 100% funded housing, nutritious meal prep,
              sterilizations, and comprehensive rabies and booster vaccinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
