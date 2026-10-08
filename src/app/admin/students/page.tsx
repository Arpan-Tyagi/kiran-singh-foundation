import React from "react";
import { fetchStudentsAdmin } from "@/lib/supabase";
import StudentsDeskClient from "@/components/admin/StudentsDeskClient";

export const revalidate = 0;

export default async function AdminStudentsPage() {
  const scholars = await fetchStudentsAdmin();

  return <StudentsDeskClient scholars={scholars} />;
}
