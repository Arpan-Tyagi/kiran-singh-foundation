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
('KSF-CAN-001', 'Simba', 'Indian Pariah Dog', '5 Years', 'Male', 'Allahpur Overbridge Corridor, Prayagraj', '2021-04-12', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-10', '2025-03-10', TRUE, 'Boiled rice with shredded chicken & egg, calcium supplement', 'Found with severe pelvic contusions; fully rehabilitated with excellent gait.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-002', 'Tara', 'Desi Hound Cross', '4 Years', 'Female', 'Prayagraj Junction Railway Yard', '2021-07-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-05', '2025-04-05', TRUE, 'Hypoallergenic poultry & turmeric rice mash', 'Rescued with severe mange. Fur completely restored. Very gentle disposition.', 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-003', 'Raja', 'Indian Pariah Dog', '7 Years', 'Male', 'Naini Industrial Area, Prayagraj', '2020-09-15', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-22', '2025-01-22', TRUE, 'Soft minced chicken, pumpkin puree, glucosamine & chondroitin', 'Senior dog with mild osteoarthritis in left hock. Warm infrared therapy administered.', 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-004', 'Kavya', 'Desi Pariah Mix', '3 Years', 'Female', 'Daraganj Riverbank Colony, Prayagraj', '2022-02-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-18', '2025-05-18', TRUE, 'Standard balanced high-protein canine mash with fresh carrots', 'Rescued as an abandoned malnourished pup. High agility and alert nature.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-005', 'Veera', 'Indian Pariah Dog', '6 Years', 'Male', 'Civil Lines MG Marg Highway, Prayagraj', '2021-11-03', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-28', '2025-02-28', TRUE, 'Cooked mutton broth, brown rice, omega-3 fish oil', 'Surviving vehicular hit-and-run; pin inserted in right tibia. Completely recovered.', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-006', 'Malar', 'Desi Pariah Mix', '2 Years', 'Female', 'Sangam Lowland Embankment, Prayagraj', '2023-01-10', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-12', '2025-06-12', TRUE, 'High calorie puppy-to-adult recovery kibble and curd', 'Rescued from monsoon flooding. Fully dewormed and playful.', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-007', 'Chander', 'Indian Pariah Dog', '8 Years', 'Male', 'Yamuna Ghat Bund, Prayagraj', '2020-03-20', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-15', '2025-01-15', TRUE, 'Renal support formula, steamed egg whites, sweet potatoes', 'Geriatric canine with mild renal insufficiency. Creatinine stabilized on diet.', 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-008', 'Gauri', 'Indian Pariah Dog', '4 Years', 'Female', 'Katra Market Square, Prayagraj', '2022-06-25', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-01', '2025-07-01', TRUE, 'Chicken mince, bone broth, crushed moringa leaf powder', 'Laceration on right shoulder treated. Healed without scars.', 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-009', 'Bhima', 'Desi Mastiff Mix', '5 Years', 'Male', 'Phaphamau Bridge Perimeter, Prayagraj', '2021-12-08', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-25', '2025-03-25', TRUE, 'High calorie beef/chicken mince, steamed pumpkin, multivitamin', 'Large muscular build. Protective but very affectionate with handlers.', 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-010', 'Lakshmi', 'Indian Pariah Dog', '3 Years', 'Female', 'Bairhana Canal Crossing, Prayagraj', '2022-09-17', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-14', '2025-08-14', TRUE, 'Standard nutrient mash with boiled eggs and oats', 'Rescued during deep monsoon ditch inundation. Full recovery.', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-011', 'Arjun', 'Desi Pariah Cross', '4 Years', 'Male', 'George Town Ring Road, Prayagraj', '2022-10-02', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-19', '2025-04-19', TRUE, 'Lean chicken, curd, brown rice, probiotic digestive paste', 'Rescued with corneal ulcer in right eye; 90% vision preserved after treatment.', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-012', 'Bhavani', 'Indian Pariah Dog', '2 Years', 'Female', 'Mundera Wholesale Mandi, Prayagraj', '2023-03-11', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-02', '2025-09-02', TRUE, 'Protein enriched mash with carrots, beans, and bone meal', 'Rescued as stray pup surviving on garbage scraps. Thriving in pack.', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-013', 'Deva', 'Desi Pariah Dog', '6 Years', 'Male', 'Subedarganj Goods Shed, Prayagraj', '2021-05-30', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-11', '2025-02-11', TRUE, 'High fiber brown rice, minced chicken, digestive enzymes', 'Ear hematoma drained and sutured in 2021; completely healthy.', 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-014', 'Nila', 'Indian Pariah Dog', '1.5 Years', 'Female', 'Alopibagh Temple Precincts, Prayagraj', '2023-08-04', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-20', '2025-08-20', TRUE, 'Boiled eggs, chicken broth, sweet potato, vitamin syrup', 'Youngest female resident. High social drive with volunteers.', 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-015', 'Rudra', 'Desi Pariah Hound', '5 Years', 'Male', 'Mumfordganj Drainage Perimeter, Prayagraj', '2022-04-16', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-05-02', '2025-05-02', TRUE, 'Hypoallergenic grain-free chicken stew, zinc supplement', 'Under observation for seasonal dermatitis flare-up. Improving well.', 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-016', 'Shanti', 'Indian Pariah Dog', '9 Years', 'Female', 'Kydganj Heritage Lane, Prayagraj', '2019-12-01', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-08', '2025-01-08', TRUE, 'Pureed boiled chicken, warm broth, joint supplements', 'Gentle matriarch of the senior wing. Blind in left eye due to mature cataract.', 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-017', 'Karna', 'Indian Pariah Dog', '4 Years', 'Male', 'Colonelganj Loco Sheds, Prayagraj', '2022-08-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-25', '2025-06-25', TRUE, 'High protein poultry mash, raw carrots for chewing', 'One ear notched from past territorial scuffle prior to rescue. Very docile.', 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-018', 'Maya', 'Desi Pariah Dog', '3 Years', 'Female', 'Civil Lines Bus Depot, Prayagraj', '2022-11-20', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-15', '2025-07-15', TRUE, 'Standard balanced chicken and rice with coconut oil drizzle', 'Healthy coat and bright demeanor. Loves morning agility runs.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-019', 'Surya', 'Indian Pariah Dog', '4 Years', 'Male', 'Jhusi Highway Junction, Prayagraj', '2022-01-05', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-18', '2025-02-18', TRUE, 'Cooked chicken gizzards, steamed rice, calcium carbonate', 'Rescued from deep highway drainage pit. 100% vital organs normal.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-020', 'Anbu', 'Desi Pariah Mix', '7 Years', 'Male', 'Rasulabad Ghat Crossing, Prayagraj', '2020-11-12', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-30', '2025-01-30', TRUE, 'Low-sodium chicken broth, mashed rice, liver tonic', 'Senior companion dog. Loves resting under the sanctuary banyan trees.', 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-021', 'Kalyani', 'Indian Pariah Dog', '3 Years', 'Female', 'Tagore Town Flyover Pillar 14, Prayagraj', '2023-02-18', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-01', '2025-08-01', TRUE, 'Standard chicken mash with steamed green peas', 'Escaped vehicular traffic unscathed; sterilized upon intake.', 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-022', 'Rishi', 'Indian Pariah Dog', '5 Years', 'Male', 'Govindpur Dairy Enclave, Prayagraj', '2021-08-22', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-14', '2025-03-14', TRUE, 'Cooked chicken, eggs, curd, vitamin mineral mix', 'Calm and steady temperament. Frequently assists in socializing new intakes.', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-023', 'Meera', 'Desi Pariah Cross', '2.5 Years', 'Female', 'Teliyarganj Tank Road, Prayagraj', '2023-04-09', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-10', '2025-09-10', TRUE, 'High protein poultry rice, pumpkin seeds for digestion', 'Rescued following severe tick fever (Ehrlichia); fully cleared after doxycycline protocol.', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-024', 'Velan', 'Indian Pariah Dog', '6 Years', 'Male', 'Naini Toll Plaza Corridor, Prayagraj', '2021-10-15', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-20', '2025-04-20', TRUE, 'Steamed chicken, brown rice, glucosamine daily chew', 'Slight stiffness in colder months, managed with orthopaedic bedding.', 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-025', 'Amala', 'Indian Pariah Dog', '4 Years', 'Female', 'Attarsuiya Main Road, Prayagraj', '2022-05-12', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-25', '2025-05-25', TRUE, 'Balanced poultry diet with grated carrots and boiled egg', 'Very bonded with caregiver team. Excellent physical stamina.', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-026', 'Sundar', 'Desi Pariah Dog', '5 Years', 'Male', 'Lukerganj Railway Colony, Prayagraj', '2021-09-04', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-30', '2025-03-30', TRUE, 'Chicken mince, sweet potato, probiotic yoghurt', 'Recovered from fractured metatarsal bone in 2021. No residual limp.', 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-027', 'Geetha', 'Indian Pariah Dog', '8 Years', 'Female', 'Ashok Nagar Hospital Lane, Prayagraj', '2020-04-18', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-28', '2025-01-28', TRUE, 'Senior canine soft stew, fish oil, turmeric extract', 'Senior resident with mild hearing loss. Responds enthusiastically to hand cues.', 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-028', 'Mani', 'Desi Pariah Hound', '3 Years', 'Male', 'Chauk Bazaar Market Street, Prayagraj', '2023-01-29', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-22', '2025-07-22', TRUE, 'Standard nutritious chicken and egg mix with greens', 'Rescued during festival crowd stampede. Traumatized initially, now fully confident.', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-029', 'Thangam', 'Indian Pariah Dog', '2 Years', 'Female', 'Dhoomanganj Crossing, Prayagraj', '2023-06-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-30', '2025-08-30', TRUE, 'High calorie recovery formula, liver treats, eggs', 'Beautiful golden coat. Highly energetic and friendly with all student scholars.', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-030', 'Dhruva', 'Desi Mastiff Cross', '6 Years', 'Male', 'Naini Industrial Zone Phase 2, Prayagraj', '2021-06-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-22', '2025-02-22', TRUE, 'Nutrient dense meat stew, calcium supplements, oats', 'Very large frame. Exceptional pack protector and calm temperament.', 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-031', 'Vasantha', 'Indian Pariah Dog', '4 Years', 'Female', 'Preetam Nagar Rural Outskirts, Prayagraj', '2022-07-08', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-18', '2025-06-18', TRUE, 'Steamed chicken, curd, brown rice, multivitamins', 'Rescued with severe dehydration during peak summer heatwave. Restored to 100% health.', 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-032', 'Chellappa', 'Desi Pariah Dog', '10 Years', 'Male', 'Cantonment Grounds Perimeter, Prayagraj', '2019-08-11', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-10', '2025-01-10', TRUE, 'Warm broth soaked rice, pureed chicken, senior vitality paste', 'Our oldest sanctuary resident (10 years). Quiet, dignified, spends afternoons resting in shade.', 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-033', 'Pari', 'Indian Pariah Dog', '3 Years', 'Male', 'Sohbatiabagh Junction, Prayagraj', '2023-05-01', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-05', '2025-09-05', TRUE, 'Standard balanced poultry mash with grated vegetables', 'Rescued from stray dog territorial dispute; bite wounds completely sanitized and healed.', 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-034', 'Kamala', 'Desi Pariah Dog', '1 Year', 'Female', 'Tilak Nagar Allahpur Sanctuary Outpost, Prayagraj', '2024-01-15', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-02-01', '2025-02-01', TRUE, 'Junior nutrient formula, boiled chicken livers, whole milk curd', 'Recent rescue intake. Fully vaccinated, completing final post-sterilization monitoring.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80')
ON CONFLICT (tag_number) DO UPDATE SET name = EXCLUDED.name;

-- 4. EVENTS: COMMUNITY DRIVES, CAMPS & SYMPOSIA
INSERT INTO events (slug, title, category, description, location, scheduled_at, capacity, is_published, whatsapp_rsvp_link)
VALUES
(
    'prayagraj-anti-rabies-drive-2025',
    'Mass Anti-Rabies & Booster Vaccination Camp (Prayagraj Municipal Belt)',
    'medical_camp',
    'Foundation veterinary team, paired with student scholar apprentices, provides free multi-antigen booster and anti-rabies immunizations for community street canines across the municipal corridor.',
    'Dog Care Centre Base Station, Prayagraj',
    '2025-04-15 08:30:00+05:30',
    150,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Anti-Rabies%20Vaccination%20Camp'
),
(
    'student-oratory-diplomacy-symposium',
    'Scholar Public Discourse & Executive Oratory Symposium',
    'personality_workshop',
    'The 40 sponsored scholars present their mid-term public policy theses and civic advocacy arguments before a distinguished panel of institutional jurists and social welfare trustees.',
    'Late Kiran Singh Memorial Auditorium, Prayagraj',
    '2025-05-10 10:00:00+05:30',
    80,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Scholar%20Symposium'
),
(
    'monsoon-mutual-aid-rapid-response-drill',
    'Prayagraj Mutual-Aid Flood & Canine Rescue Readiness Drill',
    'community_drive',
    'Coordinated simulation exercise testing the rapid emergency grid between our student logistics corps and local community caretakers for canine evacuation during monsoon inundations.',
    'Sangam & Yamuna Lowland Riverbed Basins, Prayagraj',
    '2025-06-20 07:00:00+05:30',
    100,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Mutual%20Aid%20Drill'
),
(
    'annual-memorial-remembrance-kiran-singh',
    'Annual Memorial Remembrance & Wildlife Conservation Oration',
    'memorial_gathering',
    'Commemorating the life, ethological contributions, and public service legacy of Late Kiran Singh ji. Keynote address on apex felid behavioral conditioning and humane state governance.',
    'Institutional Archives Hall, Kiran Singh Foundation HQ',
    '2025-09-18 17:30:00+05:30',
    200,
    TRUE,
    'https://wa.me/919670970750?text=RSVP%20for%20Annual%20Memorial%20Remembrance'
)
ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

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
