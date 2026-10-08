import React from "react";
import { fetchAllEventsAdmin } from "@/lib/supabase";
import EventsDeskClient from "@/components/admin/EventsDeskClient";

export const revalidate = 0;

export default async function AdminEventsPage() {
  const events = await fetchAllEventsAdmin();

  return <EventsDeskClient initialEvents={events} />;
}
