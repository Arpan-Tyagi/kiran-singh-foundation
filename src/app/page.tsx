import React from "react";
import Hero from "@/components/Hero";
import MemorialSection from "@/components/MemorialSection";
import SplitWings from "@/components/SplitWings";
import MutualAidForm from "@/components/MutualAidForm";
import Link from "next/link";
import { ArrowUpRight, Calendar, Newspaper, HeartPulse } from "lucide-react";
import { fetchEvents, fetchBlogPosts } from "@/lib/supabase";

export const revalidate = 60;

export default async function HomePage() {
  const events = await fetchEvents();
  const blogs = await fetchBlogPosts();

  const upcomingEvents = events.slice(0, 3);
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="flex flex-col space-y-0 bg-porcelain">
      {/* 1. Hero Header */}
      <Hero />

      {/* 2. Interactive Memorial Section (Late Kiran Singh ji, AAZP Vandalur, CM J. Jayalalithaa) */}
      <MemorialSection />

      {/* 3. Synchronized Split-Screen (Wing A: 40 Scholars, Wing B: 34 Dogs) */}
      <SplitWings />

      {/* 4. Interactive Mutual-Aid Intake & Emergency Grid */}
      <MutualAidForm />

      {/* 5. Foundation Gatherings & Dispatches Showcase */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Gatherings */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lion-gold/15 flex items-center justify-center text-lion-gold-dark shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-lion-gold-dark tracking-widest font-semibold">
                      Gatherings & Field Drives
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-obsidian">
                      Foundation Calendar
                    </h3>
                  </div>
                </div>
                <Link
                  href="/events"
                  className="text-xs font-mono text-lion-gold-dark hover:underline flex items-center space-x-1 font-semibold"
                >
                  <span>View All</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="bg-porcelain border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-lion-gold/40 transition-all duration-300"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white border border-border text-slate inline-block mb-2 font-medium">
                            {evt.category.replace("_", " ")}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-obsidian leading-snug">
                            {evt.title}
                          </h4>
                          <p className="text-xs text-slate mt-2 line-clamp-2 leading-relaxed font-sans">
                            {evt.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-slate">
                        <span>{new Date(evt.scheduledAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <a
                          href={evt.whatsappRsvpLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lion-gold-dark font-medium hover:underline flex items-center space-x-1"
                        >
                          <span>WhatsApp RSVP</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Dispatches */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-botanical-emerald/10 flex items-center justify-center text-botanical-emerald shadow-sm">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-botanical-emerald tracking-widest font-semibold">
                      Archival & Field Updates
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-obsidian">
                      Editorial Dispatches
                    </h3>
                  </div>
                </div>
                <Link
                  href="/dispatches"
                  className="text-xs font-mono text-botanical-emerald hover:underline flex items-center space-x-1 font-semibold"
                >
                  <span>All Dispatches</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {recentBlogs.map((post) => (
                  <Link
                    key={post.id}
                    href={`/dispatches/${post.slug}`}
                    className="block bg-porcelain border border-border rounded-2xl p-5 shadow-elevation-1 hover:shadow-elevation-card hover:border-botanical-emerald/40 transition-all duration-300"
                  >
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-slate">
                            {post.authorName}
                          </span>
                          <span className="text-[10px] font-mono text-lion-gold-dark font-medium">
                            {new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg font-semibold text-obsidian leading-snug hover:text-lion-gold-dark transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate mt-2 line-clamp-2 leading-relaxed font-sans">
                          {post.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono text-slate">
                        <span>Read Full Dispatch</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold-dark" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Distress Strip */}
      <section className="bg-crimson-alert/5 border-y border-crimson-alert/20 py-8 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <HeartPulse className="w-6 h-6 text-crimson-alert shrink-0 animate-pulse" />
            <div>
              <h4 className="font-serif text-base font-bold text-obsidian">
                Witnessing Street Canine Trauma or Acute Community Crisis?
              </h4>
              <p className="text-xs text-slate leading-relaxed">
                Directly mobilize our Chennai mutual-aid dispatch network via instant WhatsApp telemetry.
                Our field coordinators and student response volunteers deploy with zero triage latency.
              </p>
            </div>
          </div>
          <Link
            href="/emergency"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-crimson-alert text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-crimson-alert-light transition-all shadow-sm"
          >
            Trigger Emergency Dispatch
          </Link>
        </div>
      </section>
    </div>
  );
}
