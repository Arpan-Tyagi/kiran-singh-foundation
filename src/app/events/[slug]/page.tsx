import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Award,
  BookOpen,
  FileCheck2,
  Sparkles,
  Share2,
} from "lucide-react";
import { fetchEventBySlug, fetchEvents } from "@/lib/supabase";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const events = await fetchEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Dossier Not Found | Kiran Singh Foundation",
    };
  }

  return {
    title: `${event.title} | Kiran Singh Foundation Convocations`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = await fetchEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.scheduledAt);
  const isConcluded = event.status === "concluded";

  const shareText = encodeURIComponent(
    `Official Event Dossier: ${event.title} — Kiran Singh Foundation (Prayagraj Secretariat).`
  );

  return (
    <article className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto space-y-12 bg-porcelain">
      {/* 1. Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <Link
          href="/events"
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate hover:text-obsidian transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Convocations &amp; Gatherings</span>
        </Link>

        <a
          href={`https://api.whatsapp.com/send?text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-mono text-lion-gold-dark hover:underline"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Dossier</span>
        </a>
      </div>

      {/* 2. Hero Header Block */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {isConcluded ? (
            <span className="px-3.5 py-1 rounded-full bg-botanical-emerald/10 border border-botanical-emerald/30 text-botanical-emerald text-xs font-mono uppercase font-semibold flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Concluded &bull; Certified Milestone</span>
            </span>
          ) : (
            <span className="px-3.5 py-1 rounded-full bg-lion-gold/10 border border-lion-gold/30 text-lion-gold-dark text-xs font-mono uppercase font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upcoming Field Gathering</span>
            </span>
          )}

          {event.edition && (
            <span className="px-3.5 py-1 rounded-full bg-white border border-border text-obsidian text-xs font-mono uppercase font-semibold">
              {event.edition}
            </span>
          )}

          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate text-xs font-mono uppercase font-medium">
            {event.monthYear || eventDate.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-obsidian leading-tight font-normal">
          {event.title}
        </h1>

        {/* Telemetry Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white border border-border rounded-2xl shadow-sm text-xs font-mono text-slate">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-lion-gold-dark shrink-0" />
            <div>
              <span className="text-slate block text-[10px] uppercase">Session Date</span>
              <span className="font-semibold text-obsidian">
                {eventDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:border-x sm:border-border sm:px-3">
            <MapPin className="w-4 h-4 text-crimson-alert shrink-0" />
            <div>
              <span className="text-slate block text-[10px] uppercase">Venue &bull; Prayagraj</span>
              <span className="font-semibold text-obsidian truncate block max-w-[200px]">
                {event.location}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-botanical-emerald shrink-0" />
            <div>
              <span className="text-slate block text-[10px] uppercase">Academic Conferrals</span>
              <span className="font-semibold text-obsidian">
                {event.certificateType || "Certificates & Merit Stipends"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Program Narrative Overview */}
      <section className="bg-white border border-border rounded-3xl p-6 sm:p-10 shadow-elevation-1 space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
          Executive Dossier &amp; Institutional Charter
        </h2>
        <p className="text-sm sm:text-base text-slate leading-relaxed font-sans">
          {event.description}
        </p>

        {/* Syllabi and Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
          {/* Syllabus Tracks */}
          {event.syllabusCovered && event.syllabusCovered.length > 0 && (
            <div className="bg-porcelain border border-border rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-lion-gold-dark font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Curricular Labs &amp; Soft-Skills Training</span>
              </div>
              <ul className="space-y-2">
                {event.syllabusCovered.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-obsidian leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-lion-gold-dark shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Program Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="bg-porcelain border border-border rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-botanical-emerald font-bold">
                <FileCheck2 className="w-4 h-4" />
                <span>Ceremonial Milestones &amp; Plagiarism Audits</span>
              </div>
              <ul className="space-y-2">
                {event.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-obsidian leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-botanical-emerald shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Research Themes Defended */}
        {event.researchThemes && event.researchThemes.length > 0 && (
          <div className="pt-4 border-t border-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate block font-semibold">
              Research Themes Defended Before Expert Panels:
            </span>
            <div className="flex flex-wrap gap-2">
              {event.researchThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-border text-xs text-obsidian font-mono"
                >
                  &ldquo;{theme}&rdquo;
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Ceremonial Action Photographs Gallery */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-lion-gold-dark uppercase font-semibold mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Empirical Archival Evidence</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-obsidian">
              Ceremonial Action Photographs
            </h2>
            <p className="text-xs sm:text-sm text-slate font-sans mt-0.5">
              Verified photographic records capturing convocation addresses, certificate presentations, and musical performances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {event.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-3xl overflow-hidden shadow-elevation-1 space-y-4 p-4"
              >
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 px-2 pb-1">
                  <div className="flex items-center space-x-2">
                    {img.officerName && (
                      <span className="px-3 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold-dark font-mono text-xs font-bold uppercase">
                        {img.officerName}
                      </span>
                    )}
                    {img.roleBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate font-mono text-xs">
                        {img.roleBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-obsidian leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Committee Governance & Contact Bar */}
      <section className="bg-porcelain border border-border rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-obsidian">
              Kiran Singh Foundation Directorate
            </h3>
            <p className="text-xs font-mono text-slate mt-0.5">
              Trust registered under Indian Trust Act of 1882 &bull; PAN: AAGTK3961N &bull; CSR: CSR00110895
            </p>
          </div>
          <div className="text-xs font-mono text-slate">
            Secretariat: 191/C, Tilak Nagar Allahpur Prayagraj 211006
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate font-sans leading-relaxed">
            Board of Trustees: <strong className="text-obsidian">Shri Anil Kumar Singh</strong> (President) &bull;{" "}
            <strong className="text-obsidian">Shri Anuj Kumar Singh</strong> (Secretary) &bull;{" "}
            <strong className="text-obsidian">Ms. Akansha Singh</strong> (Treasurer).
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Link
              href="/wings/students"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full bg-white border border-border text-obsidian font-sans font-semibold text-xs hover:border-lion-gold/60 transition-colors shadow-sm"
            >
              <span>View 40 Scholars</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`https://wa.me/919670970750?text=${encodeURIComponent(`Inquiry regarding event dossier: ${event.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-sans font-semibold text-xs transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
