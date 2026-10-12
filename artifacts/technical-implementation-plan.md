# Kiran Singh Foundation: Technical Implementation & Institutional Audit Remediation Plan

**Document ID:** `KSF-ARCH-PLAN-2026-V2`  
**Statutory Entity:** Kiran Singh Foundation (Trust registered under Indian Trust Act of 1882)  
**Registered Secretariat & Clinic Facility:** 191/C, Tilak Nagar Allahpur Prayagraj 211006, Uttar Pradesh  
**Helplines:** Primary/WhatsApp: +91 96709 70750 | Line 2: +91 81151 41378 | Line 3: +91 94506 30310  
**Official Email:** kiransinghfoundation@gmail.com  
**Motto & Tagline:** *"Working Towards Change"* & *"A Journey from struggle to Enlightenment"*  

---

## 1. Critical Geographic Ground Truth & Location Purge

### Geographic Ground Truth Specification:
- **Zero Clinic/Shelter in Chennai:** The foundation does **NOT** maintain, operate, or sponsor an animal clinic, triage station, or dog shelter in Chennai or the surrounding suburban corridor.
- **Sole Operational Facility in Prayagraj:** The Dog Care Centre (sheltering exactly 34 rescued street dogs), the animal clinic and surgical recovery bay, the student welfare wing (incubating exactly 40 sponsored scholars), and the registered secretariat operate **STRICTLY AND SOLELY IN PRAYAGRAJ** at `191/C, Tilak Nagar Allahpur Prayagraj 211006, Uttar Pradesh`.
- **Historical Academic Distinction:** Late Kiran Singh ji historically earned her Ph.D. in apex felid ethology (*Panthera leo*, *P. tigris*, *P. pardus*) and conducted zoological research as an Analyst at Arignar Anna Zoological Park (AAZP Vandalur, Chennai) in consultative alignment with Late CM of Tamil Nadu, Late J. Jayalalithaa ("Amma"). This historical biographical record is preserved in the Memorial Archive, while all current operational facility, triage, rescue, and clinic references are corrected to Prayagraj.

### Scope of Location Purge & Correction:
1. `src/components/Hero.tsx`: Archival coordinate and copy updated to reflect Prayagraj registered operations.
2. `src/components/MemorialSection.tsx`: Correct "sheltering 34 rescued street dogs in Chennai" to "sheltering 34 rescued street dogs at our sanctuary facility in Prayagraj".
3. `src/app/page.tsx`: Purge "Chennai mutual-aid dispatch network" in favor of "Prayagraj mutual-aid dispatch network".
4. `src/components/MutualAidForm.tsx`: Replace "Chennai Community Mutual-Aid" image alt tag and Chennai placeholder locations (`Vandalur Overbridge`) with Prayagraj locations (`Tilak Nagar Allahpur, Prayagraj`).
5. `src/app/emergency/page.tsx`: Replace Chennai emergency location placeholders with Prayagraj landmarks and confirm sanctuary base is Prayagraj.
6. `src/lib/gemini.ts`: Replace simulated dispatch triage text referencing "Chennai and suburban corridor" with "Prayagraj and suburban municipal corridor", and update system prompt with geographic negative constraint.
7. `src/lib/supabase.ts`: Update fallback mock support applications from Chennai locations (`Vandalur Overbridge Pillar 12, Chennai`, `Adyar`, `Chromepet`) to Prayagraj locations (`Allahpur Overbridge`, `Civil Lines`, `George Town`).
8. `src/lib/data/foundation-data.ts` & `supabase/seed.sql`:
   - Systematically purged all Chennai rescue origins across all 34 rescued street dogs in both datasets, re-anchoring every dog to authentic Prayagraj localities (e.g., Allahpur Overbridge Corridor, Prayagraj Junction Railway Yard, Naini Industrial Area, Daraganj Riverbank Colony, Civil Lines MG Marg, Sangam Lowland Embankment, Yamuna Ghat Bund, Katra Market Square, Phaphamau Bridge, Bairhana Canal, George Town Ring Road, Mundera Wholesale Mandi, Subedarganj Goods Shed, Alopibagh Temple Precincts, Mumfordganj, Kydganj Heritage Lane, Colonelganj, Jhusi, Rasulabad Ghat, Tagore Town, Govindpur, Teliyarganj, Attarsuiya, Lukerganj, Ashok Nagar, Chauk Bazaar, Dhoomanganj, Preetam Nagar, Cantonment Grounds, Sohbatiabagh, and Tilak Nagar Allahpur Sanctuary Outpost).
   - Corrected sponsored scholar KSF-STU-005 (Pranav Subramanian) active ethology placement from `Vandalur Eco-Sanctuary Field Station` to `Prayagraj Canine Sanctuary & Ethology Field Station`.
   - Corrected clinic event locations and mutual-aid dispatches from Chennai to Prayagraj (`Dog Care Centre Base Station, 191/C Tilak Nagar Allahpur, Prayagraj`).
9. `src/components/admin/EventsDeskClient.tsx`: Purged lingering Chennai locality placeholders (`Tambaram`, `Adyar`) in raw notes textarea and title input in favor of Prayagraj.
10. `docs/research/late-kiran-singh-ji-biographical-record.md`, `fragments.md`, and `README.md`: Ensure all operational descriptions specify Prayagraj as the sole clinic and sanctuary headquarters.

---

## 2. Architectural & UI Defect Remediation Matrix

### Defect 1: Fold 3 Sticky Split-Scroll Refactor (`src/components/SplitWings.tsx`)
- **Desktop Architecture (lg+):** Implement sticky split-scroll. Left column anchors as a sticky command card (`lg:sticky lg:top-28 self-start`) displaying dual-wing institutional overview, synchronous telemetry, and active stage navigation. Right column flows continuously through Stage 1 (Wing A: 40 Scholars Welfare Wing) and Stage 2 (Wing B: 34 Canines Dog Care Centre, Prayagraj).
- **Mobile/Tablet Architecture (< lg):** Interactive tabbed card deck with active state switching between Wing A and Wing B, guaranteeing high usability and low cognitive load on small viewports.

### Defect 2: Sitewide Contrast Compliance (WCAG AA)
- Replace low-contrast `#C89D54` (`text-lion-gold`, 2.15:1 contrast on light backgrounds) with WCAG AA-compliant `#8E6822` (`text-lion-gold-dark`, 4.8:1+ contrast) across all light-themed route components:
  - `Hero.tsx`
  - `MemorialSection.tsx`
  - `SplitWings.tsx`
  - `MutualAidForm.tsx`
  - `Footer.tsx`
  - `src/app/about/page.tsx`
  - `src/app/dispatches/page.tsx`
  - `src/app/events/page.tsx` (`EventsListClient.tsx`)
  - `src/components/wings/StudentsRosterClient.tsx`

### Defect 3: Mobile Sticky Emergency Bar (`src/components/MobileEmergencyBar.tsx`)
- Create new client component `MobileEmergencyBar.tsx` mounted in `src/app/layout.tsx`.
- Include 1-tap direct WhatsApp emergency SOS link and quick-dial helpline (+91 96709 70750).
- Support iOS safe-area insets (`pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]`).
- Adjust `AICopilotDrawer.tsx` floating trigger offset to `bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))]` on mobile to completely prevent touch target collision.

### Defect 4: Touch Targets & Drawer Overflow (`src/components/Navbar.tsx`)
- Enforce >= 48px touch targets for mobile hamburger toggle (`w-12 h-12 p-3`) and Emergency CTA button.
- Add `overflow-y-auto` and bounded viewport height to mobile menu drawer to prevent clipped content on short viewports.

### Defect 5: Fluid Typography (`src/components/Hero.tsx`)
- Upgrade display headline from stepped Tailwind classes to dynamic fluid clamp scaling:
  `text-[clamp(2.25rem,8.5vw,5.5rem)]` for seamless cross-resolution typographic rendering.

### Defect 6: Metadata Legibility (`Hero.tsx`, `MemorialSection.tsx`)
- Eliminate unreadable `text-[9px] text-slate/50` micro-text; upgrade to `text-[11px] text-slate/80 font-medium`.

### Defect 7: Container Measure Consistency
- Standardize primary content route containers to `max-w-7xl mx-auto px-4 md:px-8` across:
  - `src/app/about/page.tsx`
  - `src/app/dispatches/page.tsx`
  - `src/app/events/page.tsx` (`EventsListClient.tsx`)
  - `src/app/emergency/page.tsx`

### Defect 8: Mobile Padding Reduction (`src/components/MutualAidForm.tsx`)
- Adjust outer container padding from `p-8 md:p-12` to `p-5 sm:p-8 md:p-12` to prevent excessive gutter compression on mobile screens.

### Defect 9: Monolithic Ledger Grid Borders (`src/components/Hero.tsx`)
- Resolve border rendering artifacts in the 4-cell statistics bar across 1-col mobile, 2-col tablet, and 4-col desktop viewports with explicit cell borders and `lg:border-b-0` on cells 1 & 2 to prevent horizontal hairline cuts across desktop viewports. Also corrected CTA hover contrast to `group-hover:text-lion-gold-dark`.

### Defect 10: Timeline Alignment Geometry (`src/components/MemorialSection.tsx`)
- Correct node indicator offset from `-left-[37px] sm:-left-[45px]` to `-left-4` and transfer left padding `pl-6 sm:pl-8` to the individual `.group` entry elements, ensuring that the 32px circular badges mathematically bisect the vertical `border-l-2` axis line.

### Defect 11: Inline Markdown Rendering (`src/app/dispatches/[slug]/page.tsx`)
- Upgraded `renderFormattedText` inline parser to support markdown links `[label](url)`, `***bold-italic***`, `**bold**`, `*italic*`, and `` `code` `` within article chunks and dispatches.

### Defect 12: Mobile Footer Safe Clearance (`src/components/Footer.tsx`)
- Increased mobile bottom padding to `pb-24 md:pb-12` to guarantee zero content occlusion behind the fixed `MobileEmergencyBar`.

### Section 2: Slop Cleansing & Institutional Dignity
- Maintain austere, high-trust institutional voice across all pages, emphasizing statutory precision, ethological scholarship, and protective care.

---

## 3. Verification Protocol
1. `node tests/foundation.test.mjs` — All institutional facts, seed counts, and security invariants pass.
2. `node tests/run-verification.mjs` — All 22 standalone verification checkpoints pass.
3. `npm run build` — Clean production compilation with 0 TypeScript/ESLint errors and 100% static page prerendering.
