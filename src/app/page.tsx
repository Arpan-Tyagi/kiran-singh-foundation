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
    <div className="flex flex-col space-y-0">
      {/* 1. Hero Header */}
      <Hero />

      {/* 2. Interactive Memorial Section (Late Kiran Singh ji, AAZP Vandalur, CM J. Jayalalithaa) */}
      <MemorialSection />

      {/* 3. Synchronized Split-Screen (Wing A: 40 Scholars, Wing B: 34 Dogs) */}
      <SplitWings />

      {/* 4. Interactive Mutual-Aid Intake & Emergency Grid */}
      <MutualAidForm />

      {/* 5. Foundation Gatherings & Dispatches Showcase */}
      <section className="py-24 px-4 md:px-8 bg-obsidian-deep border-t border-parchment/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Gatherings */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-parchment/10 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-lion-gold/20 flex items-center justify-center text-lion-gold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-lion-gold tracking-widest">
                      Gatherings & Field Drives
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-parchment">
                      Foundation Calendar
                    </h3>
                  </div>
                </div>
                <Link
                  href="/events"
                  className="text-xs font-mono text-lion-gold hover:underline flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt) => (
                  <div key={evt.id} className="bezel-card bezel-card-hover">
                    <div className="bezel-card-inner p-5 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-parchment-dim inline-block mb-2">
                            {evt.category.replace("_", " ")}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-parchment leading-snug">
                            {evt.title}
                          </h4>
                          <p className="text-xs text-parchment-muted mt-2 line-clamp-2">
                            {evt.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-parchment-dim">
                        <span>{new Date(evt.scheduledAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <a
                          href={evt.whatsappRsvpLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lion-gold hover:underline flex items-center space-x-1"
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
              <div className="flex items-center justify-between pb-6 border-b border-parchment/10 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-sanctuary/30 flex items-center justify-center text-emerald-400">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-widest">
                      Archival & Field Updates
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-parchment">
                      Editorial Dispatches
                    </h3>
                  </div>
                </div>
                <Link
                  href="/dispatches"
                  className="text-xs font-mono text-emerald-400 hover:underline flex items-center space-x-1"
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
                    className="block bezel-card bezel-card-hover"
                  >
                    <div className="bezel-card-inner p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-parchment-dim">
                            {post.authorName}
                          </span>
                          <span className="text-[10px] font-mono text-lion-gold">
                            {new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg font-semibold text-parchment leading-snug hover:text-lion-gold transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-parchment-muted mt-2 line-clamp-2">
                          {post.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-parchment-dim">
                        <span>Read Full Dispatch</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-lion-gold" />
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
      <section className="bg-crimson-alert/20 border-y border-crimson-alert/40 py-8 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <HeartPulse className="w-6 h-6 text-red-400 shrink-0 animate-pulse" />
            <div>
              <h4 className="font-serif text-base font-bold text-red-100">
                Are you witnessing an animal trauma or family distress emergency?
              </h4>
              <p className="text-xs text-red-200/80">
                Our 24/7 mutual-aid emergency dispatch grid operates with zero triage delay.
              </p>
            </div>
          </div>
          <Link
            href="/emergency"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-crimson-alert text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-crimson-alert-light transition-all shadow-lg"
          >
            Access Emergency Desk
          </Link>
        </div>
      </section>
    </div>
  );
}
