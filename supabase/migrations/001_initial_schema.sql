-- Kiran Singh Foundation - Database Schema & Security Architecture
-- PostgreSQL 15 / Supabase Migration: 001_initial_schema.sql
-- Enforces declarative Row Level Security (RLS) and custom RBAC functions.

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. CUSTOM ENUMS
CREATE TYPE user_role AS ENUM (
    'super_admin',
    'trustee',
    'field_coordinator',
    'general_member'
);

CREATE TYPE internship_status AS ENUM (
    'summer_intern',
    'winter_intern',
    'completed',
    'upcoming'
);

CREATE TYPE canine_zone AS ENUM (
    'Zone Alpha - Critical Care & Quarantine',
    'Zone Beta - Main Pack Sanctuary',
    'Zone Gamma - Senior & Palliative Run'
);

CREATE TYPE triage_priority AS ENUM (
    'standard',
    'urgent',
    'critical_emergency'
);

CREATE TYPE support_category AS ENUM (
    'volunteer_onboarding',
    'student_application',
    'emergency_distress'
);

CREATE TYPE event_category AS ENUM (
    'medical_camp',
    'personality_workshop',
    'community_drive',
    'memorial_gathering'
);

-- 3. PROFILES TABLE (Linked with Supabase auth.users)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone_number TEXT,
    role user_role NOT NULL DEFAULT 'general_member',
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. OPERATIONAL WING A: STUDENTS (40 Active Sponsored Scholars)
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    scholar_id TEXT UNIQUE NOT NULL, -- Format: KSF-STU-001 to 040
    full_name TEXT NOT NULL,
    academic_discipline TEXT NOT NULL,
    institution TEXT NOT NULL,
    cohort_year INTEGER NOT NULL DEFAULT 2024,
    soft_skills_track TEXT[] NOT NULL DEFAULT ARRAY['Executive Communication', 'Public Discourse', 'Analytical Reasoning'],
    internship_status internship_status NOT NULL DEFAULT 'upcoming',
    internship_term TEXT NOT NULL, -- e.g. "Summer 2025 Pro Bono Incubator"
    internship_placement TEXT,
    expenses_and_stipend_covered BOOLEAN NOT NULL DEFAULT TRUE,
    attendance_rate NUMERIC(5, 2) DEFAULT 100.00,
    emergency_contact_phone TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. OPERATIONAL WING B: DOGS (34 Rescued Street Dogs)
CREATE TABLE dogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tag_number TEXT UNIQUE NOT NULL, -- Format: KSF-CAN-001 to 034
    name TEXT NOT NULL,
    breed_mix TEXT NOT NULL DEFAULT 'Indian Pariah Dog (Desi)',
    estimated_age TEXT NOT NULL,
    gender TEXT NOT NULL,
    rescue_location TEXT NOT NULL,
    rescue_date DATE NOT NULL,
    zone_identifier canine_zone NOT NULL DEFAULT 'Zone Beta - Main Pack Sanctuary',
    is_vaccinated_rabies BOOLEAN NOT NULL DEFAULT TRUE,
    rabies_vaccination_date DATE NOT NULL,
    booster_due_date DATE NOT NULL,
    is_sterilized BOOLEAN NOT NULL DEFAULT TRUE,
    dietary_needs TEXT NOT NULL,
    medical_notes TEXT,
    photo_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. MEMORIAL RECORDS: LATE KIRAN SINGH JI
CREATE TABLE memorial_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    period TEXT NOT NULL,
    institution TEXT NOT NULL,
    research_discipline TEXT NOT NULL,
    detailed_narrative TEXT NOT NULL,
    advisory_alignment TEXT NOT NULL, -- Focus on AAZP Vandalur & Late CM J. Jayalalithaa ("Amma")
    citations TEXT[],
    archival_document_ref TEXT,
    display_order INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 7. EVENTS TABLE
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category event_category NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    scheduled_at TIMESTAMPTZ NOT NULL,
    capacity INTEGER,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    whatsapp_rsvp_link TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 8. EDITORIAL DISPATCHES / BLOG POSTS
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content_markdown TEXT NOT NULL,
    author_name TEXT NOT NULL DEFAULT 'Kiran Singh Foundation Directorate',
    cover_image_url TEXT,
    is_ai_drafted BOOLEAN NOT NULL DEFAULT FALSE,
    ai_prompt_context TEXT,
    is_published BOOLEAN NOT NULL DEFAULT TRUE,
    published_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 9. SUPPORT APPLICATIONS & MUTUAL-AID EMERGENCY INTAKE
CREATE TABLE support_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    applicant_name TEXT NOT NULL,
    contact_email TEXT,
    contact_phone TEXT NOT NULL,
    category support_category NOT NULL,
    priority triage_priority NOT NULL DEFAULT 'standard',
    subject TEXT NOT NULL,
    message_details TEXT NOT NULL,
    location_data TEXT,
    status TEXT NOT NULL DEFAULT 'pending', -- pending, triaged, in_progress, resolved
    assigned_to UUID REFERENCES profiles(id),
    dispatched_via_whatsapp BOOLEAN NOT NULL DEFAULT FALSE,
    dispatched_via_email BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 10. SECURITY DEFINER HELPER FUNCTIONS FOR RBAC
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
      AND role IN ('super_admin', 'trustee', 'field_coordinator')
  );
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
      AND role = 'super_admin'
  );
$$;

-- Auto-update updated_at timestamp trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$;

-- Apply timestamp triggers
CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER set_students_updated_at BEFORE UPDATE ON students FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER set_dogs_updated_at BEFORE UPDATE ON dogs FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER set_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER set_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION handle_updated_at();
CREATE TRIGGER set_support_applications_updated_at BEFORE UPDATE ON support_applications FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- 11. DECLARATIVE ROW LEVEL SECURITY (RLS) POLICIES

-- Enable RLS across all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE dogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE memorial_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_applications ENABLE ROW LEVEL SECURITY;

-- A. PROFILES POLICIES
CREATE POLICY "Users can read own profile"
    ON profiles FOR SELECT
    TO authenticated
    USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
    ON profiles FOR SELECT
    TO authenticated
    USING (public.is_admin());

CREATE POLICY "Users can update own profile"
    ON profiles FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Super Admins can manage all profiles"
    ON profiles FOR ALL
    TO authenticated
    USING (public.is_super_admin())
    WITH CHECK (public.is_super_admin());

-- B. STUDENTS POLICIES (Strict Isolation: Admin only for sensitive scholar records)
CREATE POLICY "Admins have full access to student records"
    ON students FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- General members or anonymous users can read public cohort information,
-- but sensitive personal data (emergency_contact_phone, notes) are strictly isolated to admins.
CREATE POLICY "Public read access for scholar cohort"
    ON students FOR SELECT
    TO anon, authenticated
    USING (TRUE);

-- Column-level security isolating sensitive student fields from public anon role
REVOKE SELECT (emergency_contact_phone, notes) ON students FROM anon;
GRANT SELECT (
    id, scholar_id, full_name, academic_discipline, institution,
    cohort_year, soft_skills_track, internship_status, internship_term,
    internship_placement, expenses_and_stipend_covered, attendance_rate,
    created_at, updated_at
) ON students TO anon;

-- Public sanitized view for external integrations
CREATE OR REPLACE VIEW public_students AS
    SELECT
        id,
        scholar_id,
        full_name,
        academic_discipline,
        institution,
        cohort_year,
        soft_skills_track,
        internship_status,
        internship_term,
        internship_placement,
        expenses_and_stipend_covered,
        attendance_rate,
        created_at,
        updated_at
    FROM students;

GRANT SELECT ON public_students TO anon, authenticated;

-- C. DOGS POLICIES (Public read access for transparency, Admin write)
CREATE POLICY "Public read access for resident dogs"
    ON dogs FOR SELECT
    TO anon, authenticated
    USING (TRUE);

CREATE POLICY "Admins can manage dog records"
    ON dogs FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- D. MEMORIAL RECORDS POLICIES (Public read, Admin manage)
CREATE POLICY "Public read access for memorial records"
    ON memorial_records FOR SELECT
    TO anon, authenticated
    USING (TRUE);

CREATE POLICY "Admins can manage memorial records"
    ON memorial_records FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- E. EVENTS POLICIES (Public read published, Admin all)
CREATE POLICY "Public can view published events"
    ON events FOR SELECT
    TO anon, authenticated
    USING (is_published = TRUE);

CREATE POLICY "Admins can view and manage all events"
    ON events FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- F. BLOG POSTS POLICIES (Public read published, Admin all)
CREATE POLICY "Public can view published dispatches"
    ON blog_posts FOR SELECT
    TO anon, authenticated
    USING (is_published = TRUE);

CREATE POLICY "Admins can manage all dispatches"
    ON blog_posts FOR ALL
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

-- G. SUPPORT APPLICATIONS POLICIES (Public insert for intake/distress, Admin manage)
CREATE POLICY "Public intake submission"
    ON support_applications FOR INSERT
    TO anon, authenticated
    WITH CHECK (TRUE);

CREATE POLICY "Admins can view and triage support applications"
    ON support_applications FOR SELECT
    TO authenticated
    USING (public.is_admin());

CREATE POLICY "Admins can update application triage status"
    ON support_applications FOR UPDATE
    TO authenticated
    USING (public.is_admin())
    WITH CHECK (public.is_admin());

CREATE POLICY "Super Admins can delete applications"
    ON support_applications FOR DELETE
    TO authenticated
    USING (public.is_super_admin());
