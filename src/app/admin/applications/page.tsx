import React from "react";
import { fetchSupportApplications } from "@/lib/supabase";
import ApplicationsDeskClient from "@/components/admin/ApplicationsDeskClient";

export const revalidate = 0;

export default async function AdminApplicationsPage() {
  const applications = await fetchSupportApplications();

  return <ApplicationsDeskClient initialApplications={applications} />;
}
