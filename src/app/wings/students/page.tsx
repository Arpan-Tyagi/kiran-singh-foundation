import React from "react";
import { fetchStudents } from "@/lib/supabase";
import StudentsRosterClient from "@/components/wings/StudentsRosterClient";

export const revalidate = 60;

export const metadata = {
  title: "Student Welfare Wing | 40 Scholars Cohort | Kiran Singh Foundation",
  description:
    "Comprehensive syllabus of soft skills incubation, executive personality development, and pro bono internships for our 40 sponsored scholars.",
};

export default async function StudentsWingPage() {
  const scholars = await fetchStudents();

  return <StudentsRosterClient scholars={scholars} />;
}
