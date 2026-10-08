import React from "react";
import { fetchStudents } from "@/lib/supabase";
import StudentsDeskClient from "@/components/admin/StudentsDeskClient";

export const revalidate = 0;

export default async function AdminStudentsPage() {
  const scholars = await fetchStudents();

  return <StudentsDeskClient scholars={scholars} />;
}
