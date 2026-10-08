import React from "react";
import { fetchEvents } from "@/lib/supabase";
import EventsListClient from "@/components/events/EventsListClient";

export const revalidate = 60;

export const metadata = {
  title: "Events Calendar | Kiran Singh Foundation",
  description:
    "Upcoming institutional gatherings, suburban anti-rabies vaccination clinics, and student welfare symposiums.",
};

export default async function EventsPage() {
  const events = await fetchEvents();

  return <EventsListClient events={events} />;
}
