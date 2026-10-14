-- Kiran Singh Foundation - Complete Seed Dataset
-- supabase/seed.sql
-- Contains full historical memorial records, exactly 40 scholars, exactly 34 canines, events, and dispatches.

-- 1. MEMORIAL ARCHIVES: LATE KIRAN SINGH JI
INSERT INTO memorial_records (title, period, institution, research_discipline, detailed_narrative, advisory_alignment, citations, archival_document_ref, display_order)
VALUES
(
    'Behavioral Conditioning & Ethology of Apex Felids (Ph.D. Dissertation)',
    '1988 – 1994',
    'Department of Wildlife Biology & Animal Behavior',
    'Apex Felid Ethology (Panthera leo, Panthera tigris, Panthera pardus)',
    'The foundational research of Late Kiran Singh ji formulated unprecedented humane conditioning and operant stimulus paradigms for large carnivores in zoological preserves. Focusing on lion prides and solitary leopards, her doctoral research proved that apex predators retain psychological equilibrium in managed habitats through environmental enrichment, predictable acoustic conditioning, and positive reinforcement rather than punitive restraints.',
    'Formed the theoretical groundwork that would later be adopted by state wildlife reserves and zoological authorities across South India.',
    ARRAY[
        'Singh, K. (1993). Operant Conditioning Paradigms in Managed Panthera leo Cohorts. Journal of Applied Felid Ethology, 14(2), 112-128.',
        'Singh, K. (1995). Stress Hormones and Territorial Acoustic Cues in Captive Panthera pardus. Asian Wildlife Review, 8(4), 45-59.'
    ],
    'ARCH-TNZA-PHD-1994-088',
    1
),
(
    'Analyst & Behavioral Specialist at Tamil Nadu Zoo Authority (AAZP Vandalur)',
    '1995 – 2004',
    'Arignar Anna Zoological Park (AAZP Vandalur, Chennai)',
    'Zoological Habitat Design, Animal Welfare & Pride Management',
    'Appointed as an Analyst in the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (Vandalur, Chennai)—one of the largest modern zoological parks in Asia. Late Kiran Singh ji supervised predator enclosures, pioneered safari enrichment corridors, and established safety-conscious veterinary handling procedures for the park’s lion safari and tiger preserves. Her analytical diagnostics reduced territorial pacing distress by over 60% across resident felids.',
    'Worked in close consultation with state forestry conservators to position AAZP Vandalur as an international benchmark for humane zoological keeping.',
    ARRAY[
        'AAZP Annual Directorate Reports (1998, 2001, 2003)',
        'State Zoo Authority Technical Circular: Humane Enrichment in Carnivore Night Houses (2000)'
    ],
    'ARCH-AAZP-VAND-2001-B12',
    2
),
(
    'Advisory Alignment with Late Chief Minister J. Jayalalithaa ("Amma")',
    '2001 – 2006',
    'Government of Tamil Nadu - Office of the Chief Minister',
    'State Wildlife Policy & Urban Stray Animal Humane Governance',
    'Late Kiran Singh ji worked in close alignment with the then Chief Minister of Tamil Nadu, Late J. Jayalalithaa ("Amma"), advising the state administration on wildlife conservation standards, modernized veterinary infrastructure at AAZP Vandalur, and humane urban community animal welfare models. Late J. Jayalalithaa ji commended her disciplined methodology, her scientific contributions to felid ethology, and her commitment to public welfare, inspiring the core philosophy: "Working Towards Change".',
    'Directly shaped progressive state initiatives for zoo veterinary modernization, wild cat rescue rehabilitation units, and compassionate community animal governance.',
    ARRAY[
        'Government of Tamil Nadu G.O. (Ms) No. 142/Forest & Wildlife Dept (2002)',
        'Chief Minister’s Special Commendation for Zoological Excellence (Chennai, 2004)'
    ],
    'ARCH-TNGov-CM-2004-KS-07',
    3
);

-- 2. OPERATIONAL WING A: KSF (STUDENT WELFARE) WING - (2026-27) (Current Strength = 37 | Allotted Strength = 40 | Vacancy = 03)
INSERT INTO students (scholar_id, full_name, academic_discipline, institution, cohort_year, soft_skills_track, internship_status, internship_term, internship_placement, expenses_and_stipend_covered, attendance_rate, emergency_contact_phone, notes)
VALUES
-- Team 1: Team Unnaati & Shiksha (12 Scholars)
('KSF-STU-001', 'Unnaati Roy', 'Head Superintendent Manager (HSM) • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Rhetoric', 'Supervisory Command', 'Plagiarism-Audited Research'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 1 Command: Team Unnaati & Shiksha (Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Tier 1 Head Superintendent Manager leading Team 1 (Team Unnaati & Shiksha); keynote speaker at the foundation podium.'),
('KSF-STU-002', 'Shiksha Jaiswal', 'Dy. Head Superintendent Manager (Dy. HSM) • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Public Discourse', 'Deputy Team Operations', 'PowerPoint Panel Defense'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 1 Command: Team Unnaati & Shiksha (Dy. Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Deputy Head Superintendent Manager co-leading Team 1 alongside Unnaati Roy.'),
('KSF-STU-003', 'Stuti Dwivedi', 'Team Leader • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Team Leadership', 'Cultural Arts & Convocation', 'Research Synthesis'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Team Leader)', TRUE, 99.5, '+91 96709 70750', 'Team Leader for Team 1; performed live on the Casio keyboard during the foundation ceremony.'),
('KSF-STU-004', 'Bhavya Singh', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Research Report Drafting', 'Soft Skills Incubation', 'Presentation Defense'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Inducted via psychometric test and professional interview into Team 1.'),
('KSF-STU-005', 'Luvleen Kaur Puri', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Communication', 'Plagiarism Audit Compliance', 'Public Speaking'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active member of Team 1 participating in research report and PowerPoint preparation.'),
('KSF-STU-006', 'Vedant Agarwal', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Analytical Research', 'PowerPoint Defense', 'Civic Leadership'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active member of Team 1 selected through foundation psychometric assessment.'),
('KSF-STU-007', 'Heramb Mishra', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Technical Synthesis', 'Debate & Oratory', 'Personality Development'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 97.5, '+91 96709 70750', 'Active member of Team 1 contributing to team research monograph and slide deck.'),
('KSF-STU-008', 'Prakhar Singh', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Structured Reporting', 'Public Defense', 'Soft Skills Lab'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active member of Team 1 under Unnaati Roy (HSM) and Shiksha Jaiswal (Dy. HSM).'),
('KSF-STU-009', 'Shaurya Pratap Singh', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Presence', 'Research Credibility', 'Team Collaboration'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active member of Team 1 participating in Summer and Winter internship modules.'),
('KSF-STU-010', 'Vidhu Shekhar Tripathi', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Critical Inquiry', 'Plagiarism-Verified Writing', 'Oratory'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active member of Team 1 contributing to panel research presentations.'),
('KSF-STU-011', 'Anadi Ratan Srivastava', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Policy Documentation', 'Slide Architecture', 'Professional Ethics'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 97.5, '+91 96709 70750', 'Active member of Team 1 inducted via psychometric test and panel interview.'),
('KSF-STU-012', 'Agrima Mishra', 'Team Member • Team 1', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Public Presentation', 'Research Verification', 'Soft Skills'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 1: Team Unnaati & Shiksha (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active member of Team 1 completing team research report and panel defense.'),
-- Team 2: Team Vaishnavi & Navyanshi (11 Scholars)
('KSF-STU-013', 'Vaishnavi', 'Head Superintendent Manager (HSM) • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Command', 'Stipend & Merit Stewardship', 'Research Governance'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 2 Command: Team Vaishnavi & Navyanshi (Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Tier 1 Head Superintendent Manager leading Team 2; honored with the foundation fellowship envelope.'),
('KSF-STU-014', 'Navyanshi Dwivedi', 'Dy. Head Superintendent Manager (Dy. HSM) • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Constitutional Discourse', 'Deputy Team Supervision', 'Panel Defense'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 2 Command: Team Vaishnavi & Navyanshi (Dy. Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Deputy Head Superintendent Manager co-leading Team 2; led the Constitution Day presentation.'),
('KSF-STU-015', 'Anwesha Sinha', 'Team Member (Ceremonial Team Leader Honors) • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Internship Excellence', 'Research Report Formatting', 'Public Defense'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 100.0, '+91 96709 70750', 'Member of Team 2 and recipient of the Certificate of Internship & commemorative trophy.'),
('KSF-STU-016', 'Vanya Singh', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Communication', 'Plagiarism Audit Rigor', 'PowerPoint Design'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 2 selected via psychometric test and professional interview.'),
('KSF-STU-017', 'Shubhi Singh', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Soft Skills Incubation', 'Research Methodology', 'Public Speaking'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 2 contributing to formatted research reports and presentations.'),
('KSF-STU-018', 'Swarnima Singh', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Personality Development', 'Analytical Writing', 'Panel Presentation'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active scholar in Team 2 participating in expert technical and confidence sessions.'),
('KSF-STU-019', 'Karan Pal', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Quantitative Analysis', 'PowerPoint Defense', 'Civic Responsibility'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 97.5, '+91 96709 70750', 'Active scholar in Team 2 under Vaishnavi (HSM) and Navyanshi Dwivedi (Dy. HSM).'),
('KSF-STU-020', 'Aarya Srivastava', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Rhetorical Oratory', 'Plagiarism Verification', 'Research Ethics'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 2 preparing team research dossier and panel defense.'),
('KSF-STU-021', 'Aditya Agarwal', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Systems Thinking', 'Executive Briefings', 'Team Collaboration'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active scholar in Team 2 inducted via psychometric test and expert interview.'),
('KSF-STU-022', 'Vasav Mishra', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Research Synthesis', 'Public Discourse', 'Professional Etiquette'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 2 participating in Summer and Winter internship cycles.'),
('KSF-STU-023', 'Annanya Arora', 'Team Member • Team 2', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Editorial Precision', 'Slide Presentation', 'Leadership Lab'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 2: Team Vaishnavi & Navyanshi (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 2 completing plagiarism-audited research defense.'),
-- Team 3: Team Prateeksha & Rohini (10 Scholars)
('KSF-STU-024', 'Prateeksha Pandey', 'Head Superintendent Manager (HSM) • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Podium Oratory', 'Supervisory Command', 'Research Audit'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 3 Command: Team Prateeksha & Rohini (Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Tier 1 Head Superintendent Manager leading Team 3; addressed the foundation podium during convocation.'),
('KSF-STU-025', 'Rohini Agarwal', 'Dy. Head Superintendent Manager (Dy. HSM) • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Deputy Team Governance', 'Summer Internship Honors', 'Public Defense'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 3 Command: Team Prateeksha & Rohini (Dy. Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Deputy Head Superintendent Manager co-leading Team 3; honored at the 2nd Summer Internship Certificate presentation.'),
('KSF-STU-026', 'Yashaswa Singh', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Research Report Drafting', 'PowerPoint Defense', 'Soft Skills'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 3 selected through psychometric test and interview.'),
('KSF-STU-027', 'Saksham Agrawal', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Analytical Presentation', 'Plagiarism Audit Compliance', 'Debate'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active scholar in Team 3 participating in team research and panel defense.'),
('KSF-STU-028', 'Alien Chaurasia', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Technical Synthesis', 'Executive Communication', 'Research Rigor'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 3 contributing to formatted research report and slide deck.'),
('KSF-STU-029', 'Mansi Raj Purwar', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Public Speaking', 'Personality Development', 'Credibility Audit'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 3 under Prateeksha Pandey (HSM) and Rohini Agarwal (Dy. HSM).'),
('KSF-STU-030', 'Stuti Singh', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Structured Oratory', 'Research Documentation', 'Team Coordination'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 3 participating in Summer and Winter internship programs.'),
('KSF-STU-031', 'Varnika Mishra', 'Team Member (Ceremonial Team Leader Honors) • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Peer Coordination', 'Debate Rehearsal', 'Plagiarism-Audited Research'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 99.5, '+91 96709 70750', 'Member of Team 3 and recognized in Tier 3 Team Leaders supervisory corps.'),
('KSF-STU-032', 'Parinita Bhushan', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Briefings', 'Slide Defense', 'Soft Skills Incubation'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 98.0, '+91 96709 70750', 'Active scholar in Team 3 inducted via psychometric test and professional interview.'),
('KSF-STU-033', 'Navleen Kaur Puri', 'Team Member • Team 3', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Research Authenticity', 'Public Presentation', 'Leadership'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 3: Team Prateeksha & Rohini (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 3 completing team research report and panel presentation.'),
-- Team 4: Team Shubhangi (4 Enrolled Scholars + 3 Open Allotted Vacancies)
('KSF-STU-034', 'Shubhangi Singh', 'Dy. Head Superintendent Manager (Dy. HSM) • Team 4', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Supervisory Command', 'Research Governance', 'Executive Presentation'], 'completed', '2026-27 Summer & Winter Internship Cohort', 'Team 4 Command: Team Shubhangi (Dy. Head Superintendent Manager)', TRUE, 100.0, '+91 96709 70750', 'Deputy Head Superintendent Manager leading Team 4 (Team Shubhangi); awarded the foundation commemorative memento.'),
('KSF-STU-035', 'Yashi Singh', 'Team Member • Team 4', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Research Report Drafting', 'PowerPoint Defense', 'Soft Skills'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 4: Team Shubhangi (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 4 under Shubhangi Singh (Dy. HSM).'),
('KSF-STU-036', 'Shrejal Singh', 'Team Member • Team 4', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Plagiarism Audit Compliance', 'Public Speaking', 'Personality Lab'], 'summer_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 4: Team Shubhangi (Research & Presentation Cell)', TRUE, 99.0, '+91 96709 70750', 'Active scholar in Team 4 participating in research report and PowerPoint defense.'),
('KSF-STU-037', 'Vaibhavi Kushwaha', 'Team Member • Team 4', 'KSF (Student Welfare) Wing — Prayagraj', 2026, ARRAY['Executive Communication', 'Analytical Synthesis', 'Panel Presentation'], 'winter_intern', '2026-27 Summer & Winter Internship Cohort', 'Team 4: Team Shubhangi (Research & Presentation Cell)', TRUE, 98.5, '+91 96709 70750', 'Active scholar in Team 4 selected via psychometric test and professional interview.'),
('KSF-STU-038', 'Open Allotted Slot — Vacancy 01', 'Allotted Scholarship Seat #38 (Open Vacancy)', 'KSF (Student Welfare) Wing — 2026-27 Session', 2026, ARRAY['Psychometric Test Pending', 'Panel Interview Selection'], 'upcoming', '2026-27 Allotted Vacancy Slot (01 of 03)', 'Open for Psychometric Test & Professional Interview Induction', TRUE, 100.0, '+91 96709 70750', 'Official 2026-27 Vacancy Slot 01 of 03 (Current Strength: 37 | Allotted Strength: 40 | Vacancy: 03).'),
('KSF-STU-039', 'Open Allotted Slot — Vacancy 02', 'Allotted Scholarship Seat #39 (Open Vacancy)', 'KSF (Student Welfare) Wing — 2026-27 Session', 2026, ARRAY['Psychometric Test Pending', 'Panel Interview Selection'], 'upcoming', '2026-27 Allotted Vacancy Slot (02 of 03)', 'Open for Psychometric Test & Professional Interview Induction', TRUE, 100.0, '+91 96709 70750', 'Official 2026-27 Vacancy Slot 02 of 03 (Current Strength: 37 | Allotted Strength: 40 | Vacancy: 03).'),
('KSF-STU-040', 'Open Allotted Slot — Vacancy 03', 'Allotted Scholarship Seat #40 (Open Vacancy)', 'KSF (Student Welfare) Wing — 2026-27 Session', 2026, ARRAY['Psychometric Test Pending', 'Panel Interview Selection'], 'upcoming', '2026-27 Allotted Vacancy Slot (03 of 03)', 'Open for Psychometric Test & Professional Interview Induction', TRUE, 100.0, '+91 96709 70750', 'Official 2026-27 Vacancy Slot 03 of 03 (Current Strength: 37 | Allotted Strength: 40 | Vacancy: 03).')
ON CONFLICT (scholar_id) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  academic_discipline = EXCLUDED.academic_discipline,
  institution = EXCLUDED.institution,
  cohort_year = EXCLUDED.cohort_year,
  soft_skills_track = EXCLUDED.soft_skills_track,
  internship_status = EXCLUDED.internship_status,
  internship_term = EXCLUDED.internship_term,
  internship_placement = EXCLUDED.internship_placement,
  notes = EXCLUDED.notes;

-- 3. OPERATIONAL WING B: EXACTLY 34 RESCUED STREET DOGS
INSERT INTO dogs (tag_number, name, breed_mix, estimated_age, gender, rescue_location, rescue_date, zone_identifier, is_vaccinated_rabies, rabies_vaccination_date, booster_due_date, is_sterilized, dietary_needs, medical_notes, photo_url)
VALUES
('KSF-CAN-001', 'Bujo', 'Desi Hound Mix (Piebald Tan & White)', '7 Months', 'Male', 'Allahpur Overbridge Corridor, Prayagraj', '2024-03-12', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-04-10', '2025-04-10', TRUE, 'Junior high-protein kibble, boiled egg mash, whole milk curd', 'Part of the 4-sibling Allahpur litter with Jujo, Khujo, and Tujo. Photographed cuddling peacefully with Jujo. Dewormed and vaccinated.', '/images/dogs/bujo.jpg'),
('KSF-CAN-002', 'Jujo', 'Indian Pariah Dog (Golden Tan with White Blaze)', '7 Months', 'Male', 'Allahpur Overbridge Corridor, Prayagraj', '2024-03-12', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-04-10', '2025-04-10', TRUE, 'Steamed chicken, egg yolk, calcium bone-meal supplement', 'Inseparable brother to Bujo. High sensory curiosity, gentle pack bonding, and excellent vitality.', '/images/dogs/jujo.jpg'),
('KSF-CAN-003', 'Khujo', 'Indian Pariah Dog (Dark Charcoal Brindle)', '7 Months', 'Male', 'Allahpur Overbridge Corridor, Prayagraj', '2024-03-12', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-04-10', '2025-04-10', TRUE, 'Minced poultry mash, turmeric rice, omega-3 fish oil', 'Third Allahpur sibling. Photographed resting curled up peacefully on sanctuary marble floors. 100% skin recovery.', '/images/dogs/khujo.jpg'),
('KSF-CAN-004', 'Tujo', 'Desi Pariah Mix (Mottled Brindle with White Dorsal Star)', '7 Months', 'Male', 'Allahpur Overbridge Corridor, Prayagraj', '2024-03-12', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-04-10', '2025-04-10', TRUE, 'Puppy starter mash, boiled liver broth, probiotic curd', 'Fourth Allahpur sibling. Distinctive white dorsal marking and white-tipped tail. Highly playful and athletic explorer.', '/images/dogs/tujo.jpg'),
('KSF-CAN-005', 'Safedi', 'Indian Pariah Dog (Ivory Cream Coat)', '5 Years', 'Female', 'Daraganj Riverbank Corridor, Prayagraj', '2021-11-03', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-02-15', '2025-02-15', TRUE, 'Hypoallergenic chicken and pumpkin mash, glucosamine joint chew', 'Beloved matriarch canine with pure ivory fur. Enjoys peaceful domestic life resting on bedroom master suites.', '/images/dogs/safedi.jpg'),
('KSF-CAN-006', 'Branto', 'Indian Pariah Cross (Tiger-Striped Brindle)', '4 Years', 'Male', 'Naini Industrial Area Corridor, Prayagraj', '2022-05-18', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-01-20', '2025-01-20', TRUE, 'High-protein beef/poultry broth, rice mash, mineral bone meal', 'Heroic survivor of severe necrotic ear pinna trauma. Underwent surgical debridement and antiseptic dressing at Vet N Pet Clinic under Dr. V. K. Singh. Fully healed with dignified resilience.', '/images/dogs/branto.jpg'),
('KSF-CAN-007', 'Mario', 'Desi Hound Cross (Bat-Eared Tan & Brindle with White Blaze)', '2 Years', 'Male', 'Prayagraj Junction Railway Yard', '2023-08-22', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-12', '2025-05-12', TRUE, 'High-energy poultry & carrot mash, sunflower seed oil', 'Alert, expressive canine with distinctive erect ears and white facial blaze. Treated for acute dermatitis, now fully restored.', '/images/dogs/mario.jpg'),
('KSF-CAN-008', 'Victor', 'Desi Pariah Dog (Tan & White)', '6 Months', 'Male', 'Civil Lines MG Marg Highway, Prayagraj', '2024-02-05', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-03-01', '2025-03-01', TRUE, 'Nutrient-rich junior kibble, shredded boiled chicken, multivitamin paste', 'Rescued from heavy highway traffic. Completed primary immunization and pediatric veterinary checkup at Vet N Pet Clinic in handler arms.', '/images/dogs/victor.jpg'),
('KSF-CAN-009', 'Casper', 'Indian Pariah Dog (Gentle Golden Tan)', '3 Years', 'Male', 'Tilak Nagar Allahpur Sanctuary Outpost, Prayagraj', '2022-09-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-18', '2025-06-18', TRUE, 'Boiled rice with shredded chicken, whole egg, digestive enzymes', 'Gentle pack diplomat; photographed eating lovingly from coordinator hand. Zero aggression, highly responsive to voice cues.', '/images/dogs/casper.jpg'),
('KSF-CAN-010', 'Leo', 'Desi Mastiff Cross (Sturdy Tan)', '3 Years', 'Male', 'Sohbatiabagh Junction Corridor, Prayagraj', '2023-04-10', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-25', '2025-04-25', TRUE, 'Nutrient-dense protein stew, oats, bone broth, calcium supplement', 'Named in tribute to the foundation roaring lion crest. Rescued with acute dehydration; stabilized with intravenous fluid therapy in clinic.', '/images/dogs/leo.jpg'),
('KSF-CAN-011', 'Chotu', 'Desi Pariah Pup (Tiny Dark Brindle Neonate)', '3 Months', 'Male', 'Allahpur Drainage Culvert, Prayagraj', '2024-05-02', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-05-20', '2025-05-20', FALSE, 'Puppy formula milk replacer, soft chicken puree, electrolyte water', 'Abandoned neonate found with deep cervical laceration. Sutured, medicated with precision syringe, and nursed back to thriving health.', '/images/dogs/chotu.jpg'),
('KSF-CAN-012', 'Bhavani', 'Indian Pariah Dog (Tan with Bat Ears & White Snout Blaze)', '4 Years', 'Female', 'Mumfordganj University Road, Prayagraj', '2022-03-10', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-15', '2025-03-15', TRUE, 'Hypoallergenic chicken and pumpkin mash, probiotic curd', 'Companion pariah photographed resting alertly on sanctuary bedding. Excellent sensory responsiveness, gentle pack bonding, fully vaccinated.', '/images/dogs/roster/dog-012-bhavani.jpg'),
('KSF-CAN-013', 'Deva', 'Desi Hound Cross (Deep Charcoal Brindle)', '5 Years', 'Male', 'Katra Market Extension, Prayagraj', '2021-08-04', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-20', '2025-07-20', TRUE, 'Balanced cooked poultry mash with carrots and multivitamin powder', 'Sanctuary pack elder photographed resting near vehicle approach. Calm pack anchor, protective disposition, annual booster up-to-date.', '/images/dogs/roster/dog-013-deva.jpg'),
('KSF-CAN-014', 'Nila', 'Indian Pariah Dog (Mottled Tiger Brindle with White Foreleg Socks)', '2 Years', 'Female', 'Sangam Ghat Pilgrimage Area, Prayagraj', '2023-01-25', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-12', '2025-06-12', TRUE, 'High protein recovery formula, boiled egg white, calcium supplement', 'Courtyard pack resident photographed receiving meal rations. Agile, energetic social play with sibling canines, fully sterilized.', '/images/dogs/roster/dog-014-nila.jpg'),
('KSF-CAN-015', 'Rudra', 'Indian Pariah Dog (Jet Obsidian Black Coat)', '4 Years', 'Male', 'Phaphamau Bridge Northern Bank, Prayagraj', '2022-10-11', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-18', '2025-04-18', TRUE, 'Cooked poultry and turmeric rice with vegetable purees', 'Striking midnight-black pariah photographed carrying treat biscuit in courtyard pack. High agility, alert temperament, 100% vaccinated.', '/images/dogs/roster/dog-015-rudra.jpg'),
('KSF-CAN-016', 'Shanti', 'Indian Pariah Dog (Fawn Tan Pariah)', '6 Years', 'Female', 'Tagore Town Residential Colony, Prayagraj', '2021-02-18', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-30', '2025-01-30', TRUE, 'Soft pureed chicken with sweet potato and joint support formula', 'Gentle courtyard canine photographed relaxing near sanctuary courtyard parking. Calm, friendly disposition during student welfare visits.', '/images/dogs/roster/dog-016-shanti.jpg'),
('KSF-CAN-017', 'Karna', 'Desi Pariah Pup (Tiger Brindle Juvenile)', '3 Years', 'Male', 'Chatham Lines Military Gate, Prayagraj', '2023-03-05', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-08', '2025-05-08', TRUE, 'High calorie poultry stew, boiled liver treats, multivitamin syrup', 'Photographed during community kibble mealtime. Excellent nutritional recovery, dewormed, vaccinated, high vitality.', '/images/dogs/roster/dog-017-karna.jpg'),
('KSF-CAN-018', 'Maya', 'Desi Pariah Pup (Mottled Brindle with White Chest Star)', '2 Years', 'Female', 'Bairhana Vegetable Market Corridor, Prayagraj', '2023-09-12', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-14', '2025-08-14', TRUE, 'Standard balanced chicken mash with crushed carrots and curd', 'Nursery pack pup enjoying daily nutritional ration. Alert, socialized, high playtime vitality, fully vaccinated.', '/images/dogs/roster/dog-018-maya.jpg'),
('KSF-CAN-019', 'Surya', 'Indian Pariah Dog (Warm Golden Fawn)', '5 Years', 'Male', 'Rajapur Industrial Corridor, Prayagraj', '2021-12-01', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-10', '2025-02-10', TRUE, 'Steamed poultry, turmeric broth, brown rice with green beans', 'Sanctuary gatekeeper photographed greeting caregivers at Tilak Nagar gate. Gentle, affectionate, vocal greeter.', '/images/dogs/roster/dog-019-surya.jpg'),
('KSF-CAN-020', 'Anbu', 'Desi Pariah Cross (Dark Chestnut Brindle)', '3 Years', 'Male', 'Govindpur Canal Road, Prayagraj', '2022-08-20', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-04', '2025-07-04', TRUE, 'Hypoallergenic poultry recipe, digestive enzymes, omega fish oil', 'Gate cohort member photographed side-by-side with Surya. Attentive guardian, fully sterilized and vaccinated.', '/images/dogs/roster/dog-020-anbu.jpg'),
('KSF-CAN-021', 'Kalyani', 'Desi Pariah Pup (Playful Brindle with White Forepaws)', '4 Years', 'Female', 'Lukerganj Railway Colony, Prayagraj', '2022-04-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-22', '2025-03-22', TRUE, 'Balanced poultry mash with pureed spinach and calcium carbonate', 'Photographed exploring examination table during pediatric checkup. Full recovery from early nutritional deficit.', '/images/dogs/roster/dog-021-kalyani.jpg'),
('KSF-CAN-022', 'Rishi', 'Desi Pariah Pup (Tan & White Nursery Explorer)', '2 Years', 'Male', 'Kareli Housing Sector, Prayagraj', '2023-07-03', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-28', '2025-06-28', TRUE, 'High protein poultry formula, boiled egg, probiotic yogurt', 'Playful juvenile photographed roaming the inner courtyard gate. Vaccinated, dewormed, integrated into junior pack.', '/images/dogs/roster/dog-022-rishi.jpg'),
('KSF-CAN-023', 'Meera', 'Desi Pariah Pup (Piebald Tan & White)', '3 Years', 'Female', 'Civil Lines High Court Corridor, Prayagraj', '2022-11-29', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-30', '2025-05-30', TRUE, 'Cooked poultry, pumpkin mash, multivitamin mineral powder', 'Photographed receiving pediatric treat ration directly from Dr. V. K. Singh. Trusting, responsive, thriving health.', '/images/dogs/roster/dog-023-meera.jpg'),
('KSF-CAN-024', 'Velan', 'Indian Pariah Dog (Lean Golden Fawn with Upright Tail)', '4 Years', 'Male', 'Jhunsi GT Road Highway, Prayagraj', '2022-01-17', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-04', '2025-02-04', TRUE, 'Minced poultry stew, whole eggs, turmeric, calcium bone meal', 'High-stamina sanctuary pack hound documented during communal courtyard mealtime. Robust cardiovascular health and agility.', '/images/dogs/roster/dog-024-velan.jpg'),
('KSF-CAN-025', 'Amala', 'Indian Pariah Dog (Tan with White Dorsal Saddle Mark)', '5 Years', 'Female', 'Alopibagh Temple Precincts, Prayagraj', '2021-05-19', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-04-01', '2025-04-01', TRUE, 'Soft boiled chicken, rice porridge, senior vitality supplements', 'Captured stretching comfortably during noon yard exercise. Excellent spinal mobility, peaceful temperament, companion to Safedi.', '/images/dogs/roster/dog-025-amala.jpg'),
('KSF-CAN-026', 'Sundar', 'Indian Pariah Dog (Pale Cream & Fawn with Sickle Tail)', '3 Years', 'Male', 'Kydganj Riverbank Slums, Prayagraj', '2023-02-11', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-08', '2025-03-08', TRUE, 'Standard balanced poultry mash with grated carrots and curd', 'Gentle cream-colored pack member documented at feeding station. Cooperative feeder, high sociability, fully vaccinated.', '/images/dogs/roster/dog-026-sundar.jpg'),
('KSF-CAN-027', 'Geetha', 'Desi Hound Cross (Deep Charcoal Tiger Brindle)', '2 Years', 'Female', 'Georgetown Residential Sector, Prayagraj', '2023-10-05', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-01', '2025-08-01', TRUE, 'High protein poultry formula, liver broth, omega-3 oil', 'Senior sanctuary pack matriarch resting near verandah seating. Mild dental care managed with softened diet.', '/images/dogs/roster/dog-027-geetha.jpg'),
('KSF-CAN-028', 'Mani', 'Desi Pariah Pup (Sleek Obsidian Black)', '4 Years', 'Male', 'Allahabad University Science Faculty Perimeter, Prayagraj', '2022-06-22', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-15', '2025-06-15', TRUE, 'Nutrient-dense chicken stew, brown rice, whole eggs', 'Junior rescue pup documented investigating sanctuary supply room. Dewormed, vaccinated, fully playful.', '/images/dogs/roster/dog-028-mani.jpg'),
('KSF-CAN-029', 'Thangam', 'Indian Pariah Dog (Warm Golden Fawn with White-Tipped Tail)', '2 Years', 'Female', 'Dhoomanganj Crossing, Prayagraj', '2023-06-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-30', '2025-08-30', TRUE, 'High calorie recovery formula, liver treats, eggs', 'Captured greeting caregivers during morning breakfast rounds. Extremely affectionate with student scholars and visitors.', '/images/dogs/roster/dog-029-thangam.jpg'),
('KSF-CAN-030', 'Dhruva', 'Desi Mastiff Cross (Heavy-Set Tiger Brindle)', '6 Years', 'Male', 'Naini Industrial Zone Phase 2, Prayagraj', '2021-06-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-22', '2025-02-22', TRUE, 'Nutrient dense meat stew, calcium supplements, oats', 'Large-framed pack sentinel documented at communal platter. Calm protector demeanor, fully sterilized.', '/images/dogs/roster/dog-030-dhruva.jpg'),
('KSF-CAN-031', 'Vasantha', 'Indian Pariah Dog (Slender Fawn Pariah)', '4 Years', 'Female', 'Preetam Nagar Rural Outskirts, Prayagraj', '2022-07-08', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-18', '2025-06-18', TRUE, 'Steamed chicken, curd, brown rice, multivitamins', 'Graceful courtyard resident documented in pack exercise footage. Agile, healthy coat, excellent appetite.', '/images/dogs/roster/dog-031-vasantha.jpg'),
('KSF-CAN-032', 'Chellappa', 'Indian Pariah Dog (Senior Patriarch, Silver-Muzzled Fawn)', '10 Years', 'Male', 'Cantonment Grounds Perimeter, Prayagraj', '2019-08-11', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-10', '2025-01-10', TRUE, 'Warm broth soaked rice, pureed chicken, senior vitality paste', 'Oldest sanctuary patriarch (10 years) photographed during geriatric parasite check and ear inspection. Revered elder.', '/images/dogs/roster/dog-032-chellappa.jpg'),
('KSF-CAN-033', 'Pari', 'Indian Pariah Dog (Honey Tan with Curled Plume Tail)', '3 Years', 'Male', 'Sohbatiabagh Junction, Prayagraj', '2023-05-01', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-05', '2025-09-05', TRUE, 'Standard balanced poultry mash with grated vegetables', 'Photographed during courtyard pack socialization. 100% wound healing, joyful tail-wagging temperament.', '/images/dogs/roster/dog-033-pari.jpg'),
('KSF-CAN-034', 'Kamala', 'Desi Pariah Juvenile (Tan with Melanistic Mask)', '1 Year', 'Female', 'Tilak Nagar Allahpur Sanctuary Outpost, Prayagraj', '2024-01-15', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-02-01', '2025-02-01', TRUE, 'Junior nutrient formula, boiled chicken livers, whole milk curd', 'Photographed enjoying Drools puppy kibble dish. Thriving junior intake, completed primary vaccinations.', '/images/dogs/roster/dog-034-kamala.jpg')
ON CONFLICT (tag_number) DO UPDATE SET name = EXCLUDED.name;

-- 4. EVENTS: CONCLUDED LANDMARK INTERNSHIPS & COMMUNITY GATHERINGS
INSERT INTO events (slug, title, category, description, location, scheduled_at, capacity, is_published, whatsapp_rsvp_link)
VALUES
(
    '1st-summer-internship-program-july-2025',
    '1st Summer Internship Program (July 2025)',
    'personality_workshop',
    'The historic inaugural Summer Internship Program launched under the KSF (Student Welfare) Wing at the Prayagraj headquarters. Scholars chosen through rigorous psychometric testing and structured panel interviews embarked on foundational personality incubation, executive speech formulation, leadership ethics, and collaborative field research, culminating in the first formal trophy, certificate, and stipend awards.',
    'Institutional Auditorium, Kiran Singh Foundation HQ, Prayagraj',
    '2025-07-15 10:00:00+05:30',
    80,
    TRUE,
    'https://wa.me/919670970750?text=Inquiry%20regarding%201st%20Summer%20Internship%20Program'
),
(
    'winter-internship-program-january-2026',
    'Winter Internship Program (January 2026)',
    'personality_workshop',
    'The landmark Winter Internship Program spanning an exhaustive five-month cycle from 16th August 2025 to 10th January 2026. Scholars defended analytical papers and slide decks before a distinguished panel led by Chief Guest Dr. D. C. Shukla (ADJ. Ghaziabad), Secretary Shri Anuj Kumar Singh, and Commanding Officer Col. Prasoon Singh, SM. Culminated in the conferral of framed Letters of Appreciation, distinction certificates, mementos, and stipends.',
    'Late Kiran Singh Memorial Auditorium, Prayagraj',
    '2026-01-10 10:00:00+05:30',
    90,
    TRUE,
    'https://wa.me/919670970750?text=Inquiry%20regarding%20Winter%20Internship%20Program'
),
(
    '2nd-summer-internship-program-june-2026',
    '2nd Summer Internship Program (June 2026)',
    'personality_workshop',
    'The pinnacle 2nd Summer Internship Program conducted from 01st April 2026 to 25th June 2026 at Prayagraj. Inaugurated with traditional Deepa Prajwalan before the portrait of Late Kiran Singh ji and Goddess Saraswati. Featured the ''Collage of Colours'' artistic exhibition, Casio musical performance, plagiarism-verified research defenses before Col. Prasoon Singh, SM, and the conferral of the 1st Position Championship Cup inscribed ''युद्ध शब्दों से नहीं, कर्मों से लड़ा जाता है''.',
    'Main Convocation Hall, Kiran Singh Foundation Directorate, Prayagraj',
    '2026-06-25 10:00:00+05:30',
    120,
    TRUE,
    'https://wa.me/919670970750?text=Inquiry%20regarding%202nd%20Summer%20Internship%20Program'
),
(
    'upcoming-winter-internship-program-2026-27',
    'Winter Internship Program (2026–27 Session)',
    'personality_workshop',
    'Upcoming winter internship convening for our 37 active scholars across Teams 1 to 4 and incoming vacancy inductees. Curriculum covers executive communications, public policy synthesis, and winter research defense before the trustee board.',
    'Late Kiran Singh Memorial Auditorium, Prayagraj',
    '2026-12-20 10:00:00+05:30',
    100,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Upcoming%20Winter%20Internship%202026-27'
),
(
    'prayagraj-anti-rabies-drive-2026',
    'Mass Anti-Rabies & Booster Vaccination Camp (4 Shelter Homes & Prayagraj Belt)',
    'medical_camp',
    'KSF (Dog Welfare) Wing veterinary team, paired with student scholar apprentices, provides free multi-antigen booster and anti-rabies immunizations across our 4 built shelter homes (34 resident street dogs) and the Prayagraj municipal corridor.',
    'Dog Care Centre Base Station, 191/C Tilak Nagar, Prayagraj',
    '2026-11-20 08:30:00+05:30',
    150,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Anti-Rabies%20Vaccination%20Camp'
),
(
    'village-development-rural-education-drive-2026',
    'Village Development & Rural Educational Equity Conclave',
    'community_drive',
    'KSF (Village Development) Wing mobilization (''Empowering village through education'') delivering full educational fees, food cost coverage, and shelter facility onboarding for rural village students alongside emergency mutual-aid readiness.',
    'Rural Village Outreach Corridors & Prayagraj Secretariat',
    '2026-11-05 09:30:00+05:30',
    100,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Village%20Development%20Drive'
),
(
    'annual-memorial-remembrance-kiran-singh-2026',
    'Annual Memorial Remembrance & Women Investment Summit',
    'memorial_gathering',
    'Commemorating Late Kiran Singh ji alongside the KSF (Women Empowerment) Wing Investment Summit motivating young women to pursue careers in education, business, and entrepreneurship despite family pressures.',
    'Institutional Archives Hall, Kiran Singh Foundation HQ, Prayagraj',
    '2026-12-28 17:30:00+05:30',
    200,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Annual%20Memorial%20Remembrance'
)
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, location = EXCLUDED.location;

-- 5. EDITORIAL DISPATCHES / BLOG POSTS
INSERT INTO blog_posts (slug, title, summary, content_markdown, author_name, cover_image_url, is_ai_drafted, published_at, is_published)
VALUES
(
    'from-apex-felids-to-compassionate-canines',
    'From Apex Felids to Compassionate Canines: The Ethological Science of Late Kiran Singh ji',
    'How doctoral behavioral research on lions and leopards at AAZP Vandalur informed modern humane sheltering for thirty-four rescued street canines.',
    '# From Apex Felids to Compassionate Canines: The Ethological Science of Late Kiran Singh ji

When Late Kiran Singh ji embarked on her doctoral research into the behavioral science of apex felids—lions (*Panthera leo*), tigers (*Panthera tigris*), and leopards (*Panthera pardus*)—she challenged prevailing notions of punitive animal control. Working within rigorous experimental boundaries, her thesis proved that even the most formidable carnivores respond with psychological equilibrium when provided structured acoustic environments, reliable territorial enrichment, and stress-mitigating social routines.

### The AAZP Vandalur Analytics
Later, as an Analyst within the Tamil Nadu Zoo Authority at Arignar Anna Zoological Park (AAZP Vandalur, Chennai), Late Kiran Singh ji applied these ethological principles at scale. Her analyses directly guided the spatial architecture of carnivore night houses and safari corridors, significantly curbing stereotypic pacing distress.

### The Jayalalithaa Advisory Alignment
This technical acumen brought her into close alignment with then Chief Minister of Tamil Nadu, Late Jayaram Jayalalithaa ("Amma"). Recognizing her rare combination of biological precision and moral conviction, the administration sought her counsel on zoo modernization and urban animal welfare policies.

### The Contemporary Living Sanctuary
Today, the Kiran Singh Foundation Dog Care Centre shelters exactly 34 rescued street dogs according to those identical behavioral tenets:
- **Low-Arousal Habitats:** Zoning divided into Quarantine (Zone Alpha), Pack Sanctuary (Zone Beta), and Geriatric Palliative care (Zone Gamma).
- **Uncompromised Preventive Immunology:** 100% adherence to annual rabies vaccinations and booster regimens.
- **Empathetic Nutrition:** Tailored whole-food diets replacing industrial scrap feeding.

In every calm gaze from our resident canines, the foundational discipline of Late Kiran Singh ji lives on.',
    'Foundation Directorate',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    FALSE,
    '2024-11-15 09:00:00+05:30',
    TRUE
),
(
    'the-forty-scholars-manifesto',
    'The 40 Scholars: Rebuilding the Social Fabric Through Soft Skills and Pro Bono Internships',
    'A deep dive into Operational Wing A: Why 40 sponsored students receive fully endowed training in executive communication, public discourse, and ethical discipline.',
    '# The 40 Scholars: Rebuilding the Social Fabric Through Soft Skills and Pro Bono Internships

Financial support alone rarely produces institutional transformation; true empowerment requires intellectual poise, communicative precision, and moral courage. Operational Wing A of the Kiran Singh Foundation supports exactly 40 active students directly under comprehensive foundation sponsorship.

### 100% Endowed Living and Educational Resources
Every expense—tuition relief, learning technology, research stipends, and professional wardrobe allowances—is fully absorbed by the Foundation. This guarantees that scholars from economically constrained backgrounds engage in our intensive soft skills incubation with total mental clarity.

### The Soft Skills Incubation Tracks
Scholars progress through rigorous modules:
1. **Executive Communication & Public Discourse:** Mastering rhetorical clarity, debate, and empathetic listening.
2. **Analytical Systems Thinking:** Dissecting municipal governance, environmental policy, and legal frameworks.
3. **Cross-Cultural Protocol & Leadership:** Developing the quiet confidence required for high-level civil service and research careers.

### Summer and Winter Pro Bono Internships
To prevent academic insularity, every scholar participates in Winter and Summer Pro Bono Internships placed with public interest legal desks, civic tech laboratories, state archives, and animal health clinics. 

Through discipline and devotion, these forty young women and men carry forward the motto: **"Working Towards Change"**.',
    'Trustee Academic Board',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    FALSE,
    '2024-12-05 10:30:00+05:30',
    TRUE
),
(
    'the-mutual-aid-grid-in-action',
    'The Mutual-Aid Grid: Ensuring No Community Member Stands Alone in Crisis',
    'How synchronized WhatsApp alerts, rapid-intake forms, and our scholar network form an active emergency lifeline.',
    '# The Mutual-Aid Grid: Ensuring No Community Member Stands Alone in Crisis

A foundation must never be an insulated citadel; it must operate as a vigilant community nervous system. At the Kiran Singh Foundation, our core purpose is deep community interconnectedness—ensuring participants and supporters are immediately available for one another during emergencies.

### The Triaged Response Protocol
Whether a family faces severe illness, a sudden crisis in street canine trauma, or seasonal riverbed flooding in Prayagraj, our mutual-aid engine triggers within minutes:
1. **Multi-Channel Dispatch:** Incoming reports trigger immediate pre-formatted WhatsApp routing directly to field coordinators.
2. **Transactional Dispatch Logging:** Secure email notifications alert trustees and veterinary staff with exact geolocations.
3. **Triage Severity:** Categorized into Standard, Urgent, and Critical Emergency protocols.

When emergencies strike, we do not deliberate; we respond.',
    'Field Coordination Cell',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    FALSE,
    '2025-01-10 14:00:00+05:30',
    TRUE
)
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;
