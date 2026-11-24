import React from "react";
import { fetchStudents } from "@/lib/supabase";
import StudentsRosterClient from "@/components/wings/StudentsRosterClient";

export const revalidate = 60;

export const metadata = {
  title: "Student Welfare Wing | NGO Internship & 40 Scholars Cohort | Kiran Singh Foundation",
  description:
    "Flagship student welfare wing sponsoring 40 scholars in Prayagraj. Summer & winter research internships, executive soft skills incubation, and peer-reviewed international publications.",
  keywords: [
    "ngo internship in prayagraj",
    "student research internship UP",
    "law student internship allahabad",
    "scholarship for graduation students prayagraj",
    "Kiran Singh Foundation student welfare wing",
    "UPES Dehradun internship partnership",
  ],
  alternates: {
    canonical: "https://kiransinghfoundation.org/wings/students",
  },
};

export default async function StudentsWingPage() {
  const scholars = await fetchStudents();

  return <StudentsRosterClient scholars={scholars} />;
}
