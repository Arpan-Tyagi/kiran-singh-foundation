import React from "react";
import Image from "next/image";
import { MEMORIAL_RECORDS, FOUNDATION_META, FOUNDATION_LEADERSHIP } from "@/lib/data/foundation-data";

export const metadata = {
  title: "Institutional Archive | Kiran Singh Foundation",
  description:
    "Official institutional history, academic credentials of Late Kiran Singh ji, and the historical advisory alignment with Late Chief Minister J. Jayalalithaa.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto space-y-16 bg-porcelain">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
          <span>Official Institutional Archive</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-obsidian uppercase leading-tight font-normal">
          The Heritage & <span className="italic text-lion-gold font-light">Mandate</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-lion-gold tracking-widest uppercase font-semibold">
          "{FOUNDATION_META.motto}"
        </p>
        <p className="text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto font-sans">
          Grounding our digital presence in verified institutional milestones, doctoral ethological research,
          and public service at the Tamil Nadu Zoo Authority.
        </p>
      </div>

      {/* Featured Archival Documentary Banner */}
      <div className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden border border-border shadow-elevation-card group">
        <Image
          src="/images/memorial-founder.jpg"
          alt="Late Kiran Singh ji - AAZP Vandalur Archive"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <span className="px-3 py-1 rounded-full bg-lion-gold/85 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest self-start mb-2 font-semibold">
            Tamil Nadu Zoo Authority Historical Dossier
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl leading-snug">
            Late Kiran Singh ji & The Ethology of Apex Felids
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mt-1 font-sans leading-relaxed">
            Arignar Anna Zoological Park (AAZP Vandalur, Chennai) &bull; Advisory alignment with Late Chief Minister of Tamil Nadu, Late Jayaram Jayalalithaa ("Amma").
          </p>
        </div>
      </div>

      {/* Founder Dignified Bio Card with Authentic Portrait */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-elevation-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Authentic Portrait of Late Kiran Singh ji (Amma) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-full max-w-[320px] aspect-[9/14] rounded-2xl overflow-hidden border-2 border-lion-gold/40 shadow-elevation-card p-1.5 bg-gradient-to-b from-lion-gold/30 via-white to-border group mb-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-porcelain">
                <Image
                  src="/images/memorial-founder.jpg"
                  alt="Late Kiran Singh ji (Amma) - Sacred Memory & Founder"
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-border text-[10px] font-mono tracking-widest uppercase text-obsidian font-semibold shadow-sm">
                    Founder in Sacred Memory
                  </span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-obsidian">
              Late Kiran Singh ji <span className="italic font-light text-lion-gold text-lg">(Amma)</span>
            </h3>
            <p className="text-xs text-slate mt-1 font-mono">
              Ph.D. Ethologist &bull; AAZP Vandalur Analyst &bull; 1994
            </p>
          </div>

          {/* Founder Historical Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="text-xs font-mono text-lion-gold-dark uppercase tracking-widest font-semibold">
              Institutional Heritage & Sacred Memory
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian font-semibold">
              Late Kiran Singh ji <span className="font-serif italic font-normal text-lion-gold text-2xl">(Amma)</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 border border-border space-y-2 text-xs font-mono text-slate">
              <div>&bull; <strong className="text-obsidian">Credentials:</strong> Ph.D. in Apex Felid Ethology & Conditioning</div>
              <div>&bull; <strong className="text-obsidian">Zoological Authority:</strong> Analyst at AAZP Vandalur (Chennai)</div>
              <div>&bull; <strong className="text-obsidian">Governance Alignment:</strong> Advised then Chief Minister Late J. Jayalalithaa ("Amma")</div>
            </div>

            <p className="text-sm text-slate leading-relaxed font-sans">
              Late Kiran Singh ji dedicated her academic life to understanding the behavioral science, training,
              and conditioning of apex felids—specifically lions, tigers, and leopards. Her doctoral work
              reframed large predator management from coercive domination to predictable ethological reinforcement.
            </p>
            <p className="text-sm text-slate leading-relaxed font-sans">
              As an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai),
              she instituted world-class nocturnal enclosure enrichment, reduced captivity distress, and modernized animal
              safety protocols. Her analytical rigor earned her the trust and close advisory partnership of then
              Chief Minister Late Jayaram Jayalalithaa ("Amma"), shaping progressive wildlife policies across the state.
            </p>
          </div>
        </div>
      </div>

      {/* Heraldic Emblem Showcase Card */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-elevation-1 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-2 bg-gradient-to-b from-lion-gold/40 via-lion-gold/15 to-border shadow-elevation-card shrink-0">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white border border-border flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Heraldic Emblem Seal - Detailed Roaring Male Lion"
              fill
              sizes="176px"
              className="object-cover object-[center_20%] scale-110"
            />
          </div>
        </div>
        <div className="space-y-3 text-left">
          <div className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
            The Classical Circular Seal
          </div>
          <h3 className="font-serif text-2xl font-bold text-obsidian uppercase">
            The Roaring Lion Heraldic Emblem
          </h3>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            A classical circular seal containing a detailed roaring male lion, surrounded by the ring inscription
            <strong className="text-lion-gold-dark font-semibold"> "KIRAN SINGH FOUNDATION"</strong>. Symbolizing vigilance,
            unshakable moral strength, and protective stewardship over the vulnerable.
          </p>
        </div>
      </div>

      {/* Board of Trustees & Directorate Leadership */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-[10px] font-mono tracking-widest uppercase font-semibold">
            <span>Governance & Executive Directorate</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-obsidian uppercase">
            Board of Trustees & <span className="italic text-lion-gold font-light">Leadership</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
            Stewards of the foundation's institutional mandate, educational endowments, and animal sanctuary operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOUNDATION_LEADERSHIP.map((leader) => (
            <div
              key={leader.id}
              className="bg-white border border-border rounded-3xl overflow-hidden shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/50 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden border-b border-border">
                <Image
                  src={leader.photoUrl}
                  alt={`${leader.name} - ${leader.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
                    {leader.role}
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian mt-1">
                    {leader.name}
                  </h4>
                  {leader.bio && (
                    <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans mt-2.5">
                      {leader.bio}
                    </p>
                  )}
                </div>
                <div className="pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-slate">
                  <span>Kiran Singh Foundation</span>
                  <span className="text-lion-gold-dark font-semibold">Directorate Board</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apex Felids Research Visual Accent */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-elevation-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 relative h-64 md:h-72 rounded-2xl overflow-hidden border border-border shadow-sm">
          <Image
            src="/images/hero-lion.jpg"
            alt="Apex Lion - Panthera leo Research Subject"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-obsidian/75 backdrop-blur-xs text-[10px] font-mono text-white">
            Ethological Study: Panthera leo
          </div>
        </div>
        <div className="md:col-span-7 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-lion-gold-dark font-semibold">
            Behavioral Science of Apex Felids
          </span>
          <h3 className="font-serif text-2xl font-bold text-obsidian">
            Lions, Tigers, and Leopards
          </h3>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            Late Kiran Singh ji’s doctoral research proved that apex carnivores possess sophisticated cognitive associative structures. By studying their social hierarchies, territorial scent marking, and stress triggers, he designed training paradigms that eliminated stress-induced stereotypic pacing in large zoo enclosures.
          </p>
          <div className="text-xs font-mono text-lion-gold-dark font-medium pt-1">
            "Compassion without scientific rigor is sentimentality; scientific rigor informed by compassion changes ecosystems."
          </div>
        </div>
      </div>

      {/* Historical Milestones Detailed Archive */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-obsidian uppercase">
            Documented Milestones & Citations
          </h3>
          <p className="text-xs text-slate font-mono mt-1 uppercase tracking-wider font-medium">
            Verified Archival Gazette Records
          </p>
        </div>

        <div className="space-y-6">
          {MEMORIAL_RECORDS.map((rec) => (
            <div key={rec.id} className="bg-white border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-elevation-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                <div>
                  <span className="font-mono text-xs text-lion-gold-dark font-medium">{rec.period}</span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                    {rec.title}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-mono text-xs text-slate block">Archival Identifier</span>
                  <span className="font-mono text-xs text-obsidian font-semibold">{rec.archivalDocumentRef}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate">
                <strong className="text-obsidian">Institutional Affiliation:</strong> {rec.institution} &bull; <strong className="text-obsidian">Discipline:</strong> {rec.researchDiscipline}
              </div>

              <p className="text-sm text-slate leading-relaxed font-sans">
                {rec.detailedNarrative}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-border space-y-1.5">
                <div className="text-xs font-mono text-botanical-emerald font-semibold uppercase">
                  Governance & Policy Alignment:
                </div>
                <p className="text-xs text-obsidian leading-relaxed font-sans">
                  {rec.advisoryAlignment}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate uppercase block mb-1 font-medium">
                  Citations & Technical References:
                </span>
                <ul className="space-y-1">
                  {rec.citations.map((cite, i) => (
                    <li key={i} className="text-xs text-slate italic flex items-start space-x-2">
                      <span className="text-lion-gold">&bull;</span>
                      <span>{cite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Wings Summary with Real Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
        <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-elevation-1">
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/students-wing.jpg"
              alt="40 Scholars Welfare Wing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <span className="font-mono text-xs text-lion-gold-dark uppercase tracking-widest font-semibold block">
            Operational Wing A
          </span>
          <h4 className="font-serif text-2xl font-bold text-obsidian">
            Student Welfare Wing (40 Scholars)
          </h4>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            Directly sponsors exactly 40 active students with 100% covered expenses for soft skills incubation,
            public discourse labs, and pro bono Summer and Winter internships.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-6 space-y-4 shadow-elevation-1">
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/dogs-wing.jpg"
              alt="34 Rescued Dogs Care Centre"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <span className="font-mono text-xs text-botanical-emerald uppercase tracking-widest font-semibold block">
            Operational Wing B
          </span>
          <h4 className="font-serif text-2xl font-bold text-obsidian">
            Dog Care Centre (34 Canines)
          </h4>
          <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
            Protects and shelters exactly 34 rescued street dogs with 100% funded housing, nutritious meal prep,
            sterilizations, and comprehensive rabies and booster vaccinations.
          </p>
        </div>
      </div>
    </div>
  );
}
