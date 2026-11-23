import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  User,
  Calendar,
  Phone,
  Clock,
  GraduationCap,
  Download,
  Share2,
  FileText,
  ExternalLink,
  BookOpen,
  Award,
  ShieldCheck,
} from "lucide-react";
import { Metadata } from "next";
import { fetchBlogPostBySlug, fetchBlogPosts } from "@/lib/supabase";
import { INTERNATIONAL_JOURNAL_PUBLICATIONS } from "@/lib/data/international-publications-data";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) {
    return {
      title: "Publication Not Found | Kiran Singh Foundation",
    };
  }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiransinghfoundation.org";
  const postUrl = `${siteUrl}/blogs/${post.slug}`;
  return {
    title: `${post.title} | Kiran Singh Foundation`,
    description: post.summary,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      images: [
        {
          url: post.coverImageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.coverImageUrl],
    },
  };
}

function renderFormattedText(text: string): React.ReactNode {
  const tokenRegex = /(\[.*?\]\(.*?\)|\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|`.*?`|\$\$.*?\$\$)/g;
  const parts = text.split(tokenRegex);
  return parts.map((part, i) => {
    if (!part) return null;
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const isExternal = url.startsWith("http://") || url.startsWith("https://");
      return (
        <a
          key={i}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-lion-gold-dark hover:underline font-medium inline-flex items-center gap-0.5"
        >
          {label}
        </a>
      );
    }
    if (part.startsWith("$$") && part.endsWith("$$") && part.length >= 4) {
      const mathStr = part.slice(2, -2).replace(/\\text\{|\}|\\textbf\{/g, "");
      return (
        <span key={i} className="font-serif italic font-semibold text-lion-gold-dark text-center block my-2">
          {mathStr}
        </span>
      );
    }
    if (part.startsWith("***") && part.endsWith("***") && part.length >= 6) {
      return (
        <strong key={i} className="font-semibold text-obsidian">
          <em className="italic">{part.slice(3, -3)}</em>
        </strong>
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={i} className="font-semibold text-obsidian">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return (
        <em key={i} className="italic text-slate">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-obsidian border border-border">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function renderTable(chunk: string): React.ReactNode {
  const lines = chunk.trim().split("\n").filter((l) => l.trim().startsWith("|"));
  if (lines.length < 2) return null;
  const headerLine = lines[0];
  const bodyLines = lines.slice(2); // Skip separator row

  const parseRow = (line: string) =>
    line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());

  const headers = parseRow(headerLine);

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-border bg-white shadow-sm">
      <table className="w-full text-left text-xs sm:text-sm">
        <thead className="bg-slate-50 border-b border-border font-mono text-[11px] text-obsidian uppercase tracking-wider">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="py-3 px-4 font-semibold">
                {renderFormattedText(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border font-sans">
          {bodyLines.map((line, rIdx) => {
            const cells = parseRow(line);
            return (
              <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                {cells.map((cell, cIdx) => (
                  <td key={cIdx} className="py-3 px-4 text-slate">
                    {renderFormattedText(cell)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kiransinghfoundation.org";
  const postUrl = `${siteUrl}/blogs/${post.slug}`;
  const shareText = `Read "${post.title}" on the Kiran Singh Foundation Institutional Press: ${postUrl}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const isResearch = post.category === "student_research" || post.category === "scholar_monograph";
  const isInternationalJournal = post.category === "international_journal";

  const matchingPublication = isInternationalJournal
    ? INTERNATIONAL_JOURNAL_PUBLICATIONS.find((p) => p.slug === post.slug)
    : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": isResearch || isInternationalJournal ? "ScholarlyArticle" : "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: [post.coverImageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: matchingPublication
      ? matchingPublication.authors.map((a) => ({
          "@type": "Person",
          name: a.name,
          jobTitle: a.role,
          affiliation: {
            "@type": "Organization",
            name: a.institution,
          },
        }))
      : {
          "@type": "Person",
          name: post.authorName,
          url: "https://kiransinghfoundation.org",
        },
    ...(isInternationalJournal
      ? {
          isPartOf: {
            "@type": "Periodical",
            name:
              matchingPublication?.journalName ||
              "Knowledgeable Research: An International Peer Reviewed & Refereed Multidisciplinary Journal",
            issn: matchingPublication?.issn || "2583-6633",
          },
          issueNumber: matchingPublication?.issue.replace("No. ", "") || "10",
          volumeNumber: matchingPublication?.volume.replace("Vol. ", "") || "5",
          publisher: {
            "@type": "Organization",
            name:
              matchingPublication?.issuingSociety ||
              "Society for Academic Facilitation & Extension (SAFE)",
          },
        }
      : {
          publisher: {
            "@type": "NGO",
            name: "Kiran Singh Foundation",
            url: "https://kiransinghfoundation.org",
            logo: {
              "@type": "ImageObject",
              url: "https://kiransinghfoundation.org/images/logo.png",
            },
          },
        }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <article className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-10 bg-porcelain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Navigation Header */}
      <div className="flex items-center justify-between text-xs font-mono text-slate">
        <Link
          href="/blogs"
          className="inline-flex items-center space-x-2 text-slate hover:text-lion-gold-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Blogs &amp; Research</span>
        </Link>

        {isResearch && (
          <Link
            href="/events/upcoming-winter-internship-program-2026-27#student-research-topics"
            className="hidden sm:inline-flex items-center space-x-1.5 text-lion-gold-dark hover:underline font-semibold"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>View in Symposium Dossier</span>
          </Link>
        )}

        {isInternationalJournal && (
          <Link
            href="/wings/students#international-publications"
            className="hidden sm:inline-flex items-center space-x-1.5 text-lion-gold-dark hover:underline font-semibold"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Inspect Verified Journal Certificates</span>
          </Link>
        )}
      </div>

      {/* Article Header */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate">
          {post.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/30 font-semibold text-[10px]">
              {post.badge}
            </span>
          )}
          <span className="flex items-center space-x-1.5 text-slate font-medium">
            <User className="w-3.5 h-3.5 text-lion-gold-dark" />
            <span>{post.authorName}</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </span>
          {post.readTime && (
            <>
              <span>&bull;</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate" />
                <span>{post.readTime}</span>
              </span>
            </>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-obsidian leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate leading-relaxed font-sans italic border-l-2 border-lion-gold-dark pl-4 py-1">
          {post.summary}
        </p>
      </div>

      {/* Cover Image */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-border shadow-elevation-card bg-slate-50">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
        {post.documentRef && (
          <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full bg-obsidian/90 backdrop-blur-md text-lion-gold border border-lion-gold/40 text-[11px] font-mono shadow-md">
            Ref: {post.documentRef}
          </div>
        )}
      </div>

      {/* Research Action Strip (for research papers) */}
      {isResearch && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-border text-xs font-mono shadow-sm">
          <div className="flex items-center space-x-2 text-lion-gold-dark font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Peer-Reviewed Student Research Working Paper</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/events/upcoming-winter-internship-program-2026-27#student-research-topics"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-lion-gold/15 text-obsidian hover:text-lion-gold-dark transition-colors inline-flex items-center space-x-1.5 font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Symposium Dossier</span>
            </Link>
          </div>
        </div>
      )}

      {/* International Journal Verification Banner */}
      {isInternationalJournal && (
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white via-amber-50/25 to-slate-50 border border-lion-gold/40 shadow-elevation-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-lion-gold/20 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-lion-gold/20 border border-lion-gold/30 flex items-center justify-center text-lion-gold-dark shadow-sm shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-lion-gold-dark block">
                  International Peer-Reviewed &amp; Refereed Publication
                </span>
                <span className="font-sans text-xs text-slate">
                  Knowledgeable Research &bull; ISSN: 2583-6633 &bull; Vol. 5, No. 10 (October 2026)
                </span>
              </div>
            </div>
            <Link
              href="/wings/students#international-publications"
              className="px-4 py-2 rounded-xl bg-lion-gold hover:bg-lion-gold-light text-obsidian text-xs font-mono font-semibold transition-all shadow-sm inline-flex items-center space-x-1.5 self-start sm:self-auto shrink-0"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Inspect Certificates</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white border border-border">
              <span className="text-[10px] text-slate uppercase block">Issuing Authority</span>
              <span className="font-semibold text-obsidian">SAFE Society</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-border">
              <span className="text-[10px] text-slate uppercase block">Chief Editor</span>
              <span className="font-semibold text-obsidian">Dr. Ramesh Chandra</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-border">
              <span className="text-[10px] text-slate uppercase block">Registry Validation</span>
              <span className="font-semibold text-botanical-emerald-dark">Published &amp; Certified (31/10/2026)</span>
            </div>
          </div>
        </div>
      )}

      {/* Article Body Content */}
      <div className="bg-white border border-border rounded-3xl p-8 md:p-12 space-y-6 text-sm sm:text-base text-obsidian leading-relaxed font-sans shadow-elevation-1">
        {post.contentMarkdown.split("\n\n").map((chunk, idx) => {
          if (chunk.startsWith("# ")) {
            return null; // Skip main title
          }
          if (chunk.startsWith("### ")) {
            return (
              <h3
                key={idx}
                className="font-serif text-xl sm:text-2xl font-bold text-obsidian pt-4 text-left"
              >
                {renderFormattedText(chunk.replace("### ", ""))}
              </h3>
            );
          }
          if (chunk.startsWith("## ")) {
            return (
              <h2
                key={idx}
                className="font-serif text-2xl sm:text-3xl font-bold text-obsidian pt-6 text-left border-b border-border/60 pb-2"
              >
                {renderFormattedText(chunk.replace("## ", ""))}
              </h2>
            );
          }
          if (chunk.startsWith("---")) {
            return <hr key={idx} className="my-6 border-border" />;
          }
          if (chunk.startsWith("> ")) {
            return (
              <blockquote
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border-l-4 border-lion-gold text-slate font-sans italic my-4"
              >
                {renderFormattedText(chunk.replace(/^>\s*/gm, ""))}
              </blockquote>
            );
          }
          if (chunk.trim().startsWith("|") && chunk.includes("\n|")) {
            return <React.Fragment key={idx}>{renderTable(chunk)}</React.Fragment>;
          }
          if (chunk.startsWith("```")) {
            const codeContent = chunk.replace(/^```[a-z]*\n/i, "").replace(/```$/, "");
            return (
              <pre
                key={idx}
                className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto my-4 shadow-sm"
              >
                <code>{codeContent}</code>
              </pre>
            );
          }
          if (chunk.startsWith("- ")) {
            const items = chunk.split("\n- ");
            return (
              <ul key={idx} className="space-y-2 pl-4 list-disc list-outside text-slate">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="leading-relaxed">
                    {renderFormattedText(item.replace(/^- /, ""))}
                  </li>
                ))}
              </ul>
            );
          }
          if (/^\d+\.\s/.test(chunk)) {
            const items = chunk.split(/\n\d+\.\s/);
            return (
              <ol key={idx} className="space-y-2 pl-4 list-decimal list-outside text-slate">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="leading-relaxed">
                    {renderFormattedText(item.replace(/^\d+\.\s/, ""))}
                  </li>
                ))}
              </ol>
            );
          }
          return (
            <p key={idx} className="leading-relaxed text-slate">
              {renderFormattedText(chunk)}
            </p>
          );
        })}
      </div>

      {/* International Journal Verified Certificate Gallery */}
      {isInternationalJournal && matchingPublication && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border shadow-elevation-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-lion-gold-dark font-semibold">
                SAFE &bull; Knowledgeable Research
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-obsidian">
                Official Certificates of Publication
              </h3>
            </div>
            <Link
              href="/wings/students#international-publications"
              className="text-xs font-mono text-lion-gold-dark hover:underline inline-flex items-center space-x-1 font-semibold"
            >
              <span>View Interactive Showcase</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchingPublication.authors.map((author, aIdx) => (
              <div key={aIdx} className="space-y-3 rounded-2xl border border-border p-4 bg-slate-50/60">
                <div className="relative h-56 w-full rounded-xl overflow-hidden border border-border bg-white shadow-sm">
                  <Image
                    src={author.certificateUrl}
                    alt={`Certificate for ${author.name}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-obsidian text-sm">{author.name}</span>
                    {author.scholarId && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/30">
                        {author.scholarId}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate font-sans">{author.role}</p>
                  <p className="text-[11px] text-slate font-mono">{author.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer / Share Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-border text-xs font-mono shadow-sm">
        <span className="text-slate">
          Kiran Singh Foundation Directorate Press Registry &bull; ISSN Protocol Applied
        </span>
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-botanical-emerald hover:bg-botanical-emerald-light text-white font-semibold transition-colors shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Share via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
