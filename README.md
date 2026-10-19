# Kiran Singh Foundation | Institutional Digital Repository & Mutual-Aid Grid

> **"A Journey from struggle to Enlightenment"** &bull; *"Working Towards Change"*  
> **Trust registered under Indian Trust Act of 1882**  
> **Registered Secretariat:** 191/C, Tilak Nagar Allahpur Prayagraj 211006  
> **Mobile Helplines:** 9670970750, 8115141378, 9450630310 &bull; **Email:** kiransinghfoundationindia@gmail.com

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Google Gemini 2.5 Flash](https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![Supabase PostgreSQL 15](https://img.shields.io/badge/Supabase-PostgreSQL_RLS-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Tailwind CSS Luxury Design](https://img.shields.io/badge/Tailwind-Awwwards_Tier-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 1. Historical Knowledge & Data Integrity Mandates

Under no circumstances should core institutional facts be altered, abstracted, or omitted:

- **Foundation Legal Status:** **Trust registered under Indian Trust Act of 1882**.
- **Registered Secretariat:** `191/C, Tilak Nagar Allahpur Prayagraj 211006` (Uttar Pradesh, India).
- **Official Contacts:**
  - **Mobile Numbers:** `9670970750` (Primary/WhatsApp), `8115141378`, `9450630310`
  - **Email:** `kiransinghfoundationindia@gmail.com`
- **Official Tagline & Motto:**
  - Tagline: *"A Journey from struggle to Enlightenment"*
  - Motto: *"Working Towards Change"*
- **Foundation Founder:** Established in sacred memory of **Late Kiran Singh ji** (distinguished female ethologist & scholar).
  - **Academic Credentials:** Earned her Ph.D. specializing in the behavioral science, training, and conditioning of **apex felids** (lions, tigers, and leopards).
  - **Public Service:** Served as an Analyst in the **Tamil Nadu Zoo Authority** at **Arignar Anna Zoological Park (AAZP Vandalur, Chennai)**.
  - **Governance Alignment:** Worked in close advisory alignment with the then Chief Minister of Tamil Nadu, **Late J. Jayalalithaa ("Amma")**, advising on zoo veterinary modernization and humane community animal governance.
- **Heraldic Emblem:** A classical circular seal containing a detailed roaring male lion, surrounded by the ring inscription `"KIRAN SINGH FOUNDATION"`.
- **Operational Wing A – Student Welfare Wing:**
  - Directly supports **exactly 40 active students** under foundation sponsorship.
  - All expenses and resources for soft skills incubation and personality development (executive communication, public discourse, systems thinking) are 100% provided.
  - Offers **Summer and Winter Internships** on a pro bono basis to build professional competence and civic discipline.
- **Operational Wing B – Dog Care Centre:**
  - Protects and shelters **exactly 34 rescued street dogs**.
  - All food, housing, medical care, sterilizations, and vaccinations (**rabies and annual boosters**) are 100% funded by the foundation across three monitored zones:
    1. *Zone Alpha:* Critical Care & Quarantine
    2. *Zone Beta:* Main Pack Sanctuary
    3. *Zone Gamma:* Senior & Palliative Run
- **Geographic Ground Truth & Operational Base:**
  - The foundation operates its Dog Care Centre (sheltering 34 rescued dogs), Student Welfare Wing (40 scholars), animal clinic, and registered secretariat **exclusively in Prayagraj** (`191/C, Tilak Nagar Allahpur Prayagraj 211006`, Uttar Pradesh).
  - The foundation does **NOT** operate a clinic, shelter, or triage base in Chennai. Late Kiran Singh ji's historical research and Analyst tenure took place at AAZP Vandalur (Chennai), but all modern operational facilities are based in Prayagraj.
- **Core Purpose:** Deep community interconnectedness—ensuring participants and supporters are immediately available for one another during emergencies.
- **Multi-Channel Communications:** Primary engagement through deep-linked WhatsApp (`wa.me/919670970750`) and transactional emails (`kiransinghfoundationindia@gmail.com`).

---

## 2. Technical Architecture & Tech Stack

```
kiran-singh-foundation/
├── public/
│   └── images/
│       └── logo.png              # Heraldic circular roaring lion seal
├── supabase/
│   ├── migrations/
│   │   └── 001_initial_schema.sql # PostgreSQL 15 DDL, RLS, is_admin() RBAC
│   └── seed.sql                  # 40 Scholars, 34 Dogs, Memorial Archives, Events, Blogs
├── src/
│   ├── actions/
│   │   ├── admin.ts              # Server Actions for dispatch publishing & triage
│   │   ├── chat.ts               # Server Action executeFoundationChatTurn
│   │   └── intake.ts             # Server Action submitIntakeAction (WhatsApp + Email)
│   ├── app/
│   │   ├── about/                # Institutional Archive & Founder Memoir
│   │   ├── admin/                # Protected Directorate Workspace
│   │   │   ├── applications/     # Triage Desk with standard/urgent/emergency filters
│   │   │   ├── blogs/            # Gemini 2.5 Flash Editorial Drafting Modal
│   │   │   ├── dogs/             # 34 Canines healthcare & booster manager
│   │   │   ├── events/           # Gatherings & Rabies Camps scheduler
│   │   │   └── students/         # 40 Scholars cohort administration
│   │   ├── api/
│   │   │   └── ai/draft/         # Endpoint transforming admin field notes to articles
│   │   ├── dispatches/           # Editorial press repository & [slug] reader
│   │   ├── emergency/            # High-priority distress response page with quick-dial
│   │   ├── events/               # Filterable foundation convenings calendar
│   │   ├── wings/
│   │   │   ├── dogs/             # 34 Resident Dogs directory & vaccination cards
│   │   │   └── students/         # 40 Scholars directory & soft skills syllabus
│   │   ├── globals.css           # Double-bezel styling & archival film-grain
│   │   ├── layout.tsx            # Root layout with typography tokens & Copilot drawer
│   │   └── page.tsx              # Awwwards-tier homepage with Hero, Memorial & Split Wings
│   ├── components/
│   │   ├── AICopilotDrawer.tsx   # Interactive Gemini 2.5 Flash Concierge Drawer
│   │   ├── Footer.tsx            # Institutional footer with founder tribute
│   │   ├── Hero.tsx              # Roaring lion seal, live counters & nested CTAs
│   │   ├── MemorialSection.tsx   # AAZP Vandalur & CM Jayalalithaa historical archive
│   │   ├── MutualAidForm.tsx     # Intake form with WhatsApp & Resend dispatch
│   │   ├── Navbar.tsx            # Floating detached glass pill navbar
│   │   └── SplitWings.tsx        # Synchronized 40 Scholars / 34 Dogs split-screen
│   ├── lib/
│   │   ├── data/
│   │   │   └── foundation-data.ts# Authoritative typed records (40 scholars, 34 dogs)
│   │   ├── email.ts              # Resend email pipeline with luxury HTML templates
│   │   ├── gemini.ts             # GoogleGenAI (@google/genai) Gemini 2.5 Flash pipeline
│   │   ├── supabase.ts           # Supabase client with in-memory fallback store
│   │   └── whatsapp.ts           # Deep-linked wa.me click-to-chat generator
│   └── middleware.ts             # Supabase RBAC middleware verifying admin claims
└── tests/
    └── foundation.test.mjs       # Native test suite validating facts & pipelines
```

---

## 3. Visual Design System & Design Tokens

Designed in accordance with high-end editorial and Awwwards-tier standards:

- **Canvas:** Obsidian (`#0A0B0D`)
- **Typography:** Archival Parchment (`#F4EFEA`)
- **Accent / Primary CTA:** Lion Gold (`#C89D54`)
- **Elevation Containers:** Slate Charcoal (`#1A1C20`)
- **Veterinary & Impact Accents:** Emerald Sanctuary (`#1D3A2F`)
- **Emergency Distress Alerts:** Crimson Alert (`#A82020`)
- **Typography Hierarchy:**
  - *Display Titles:* Cormorant Garamond (`font-serif`)
  - *UI & Body:* Plus Jakarta Sans (`font-sans`)
  - *Metadata & Telemetry:* JetBrains Mono (`font-mono`)
- **Double-Bezel Architecture:** Concentric nested squircle cards with inner light reflection and outer dark hairline border.
- **Button-in-Button:** Primary CTAs include distinct circular icon enclosures flush with the inner edge.

---

## 4. Artificial Intelligence Pipeline (Google Gemini 2.5 Flash)

Built with the official `@google/genai` SDK using the `GoogleGenAI` class:

1. **Editorial Assistant (`POST /api/ai/draft`):** Transforms raw field notes, animal rescue observations, or student internship milestones into structured, dignified markdown dispatches with executive summaries and keywords.
2. **Support Concierge (`executeFoundationChatTurn` Server Action):** Powers the embedded interactive copilot drawer, grounded in the institutional system prompt embedding Late Kiran Singh ji's Ph.D. research on apex felids, the 40 scholars, the 34 resident canines, and the mutual-aid emergency grid.

---

## 5. Row-Level Security (RLS) & Database Schema

The PostgreSQL migration in `supabase/migrations/001_initial_schema.sql` enforces:
- `is_admin()` Security Definer function checking roles in `('super_admin', 'trustee', 'field_coordinator')`.
- Sensitive student personal records are isolated to authenticated admins.
- Public read access is granted to published events, dogs, memorial records, and dispatches.
- Support applications allow anonymous insert (for emergency triage) with restricted administrative read/update.

---

## 6. Getting Started & Verification

### Prerequisites
- Node.js 20+ (Node 24 recommended)
- npm or pnpm

### Environment Setup
Copy `.env.example` to `.env.local` and add your API keys:
```bash
cp .env.example .env.local
```

### Running Locally
```bash
npm install
npm run dev
```

### Running the Test Suite
```bash
npm test
# Runs both tests/run-verification.mjs and tests/foundation.test.mjs
```
