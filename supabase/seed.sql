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
    'Late Kiran Singh ji worked in close alignment with the then Chief Minister of Tamil Nadu, Late Jayaram Jayalalithaa ("Amma"), advising the state administration on wildlife conservation standards, modernized veterinary infrastructure at AAZP Vandalur, and humane urban community animal welfare models. Late Jayalalithaa ji lauded her disciplined methodology, profound empathy for non-human animals, and commitment to public welfare, inspiring the core philosophy: "Working towards Change".',
    'Directly shaped progressive state initiatives for zoo veterinary modernization, wild cat rescue rehabilitation units, and compassionate community animal governance.',
    ARRAY[
        'Government of Tamil Nadu G.O. (Ms) No. 142/Forest & Wildlife Dept (2002)',
        'Chief Minister’s Special Commendation for Zoological Excellence (Chennai, 2004)'
    ],
    'ARCH-TNGov-CM-2004-KS-07',
    3
);

-- 2. OPERATIONAL WING A: EXACTLY 40 SCHOLARS
INSERT INTO students (scholar_id, full_name, academic_discipline, institution, cohort_year, soft_skills_track, internship_status, internship_term, internship_placement, expenses_and_stipend_covered, attendance_rate, emergency_contact_phone, notes)
VALUES
('KSF-STU-001', 'Aarav Sundaram', 'Computer Science & Engineering', 'Madras Institute of Technology', 2024, ARRAY['Executive Communication', 'Public Discourse', 'Systems Thinking'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Centre for Civic Technology & Open Governance', TRUE, 98.5, '+91 94441 20001', 'Demonstrates exceptional leadership in student peer mentoring.'),
('KSF-STU-002', 'Meera Ranganathan', 'B.Sc. Biotechnology & Microbiology', 'Presidency College Chennai', 2024, ARRAY['Scientific Writing', 'Debate & Oratory', 'Ethics & Philosophy'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'State Zoological Health Diagnostics Unit', TRUE, 100.0, '+91 94441 20002', 'Leading research paper analysis on zoological epidemiology.'),
('KSF-STU-003', 'Karthik Balakrishnan', 'B.A. Public Policy & Economics', 'Loyola College Chennai', 2024, ARRAY['Policy Analysis', 'Diplomatic Negotiation', 'Data Journalism'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Urban Development & Welfare Think Tank', TRUE, 96.0, '+91 94441 20003', 'Focused on municipal animal welfare budgeting.'),
('KSF-STU-004', 'Divya Selvam', 'B.Tech Data Science', 'Anna University', 2024, ARRAY['Technical Synthesis', 'Public Presentation', 'Cross-cultural Etiquette'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Wildlife Telemetry & Sensor Analytics Lab', TRUE, 99.0, '+91 94441 20004', 'Developing open tracking pipelines for community veterinary care.'),
('KSF-STU-005', 'Pranav Subramanian', 'B.Sc. Zoology & Wildlife Sciences', 'Madras Christian College', 2024, ARRAY['Field Research Oratory', 'Conflict De-escalation', 'Professional Ethics'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Vandalur Eco-Sanctuary Field Station', TRUE, 97.5, '+91 94441 20005', 'Direct student in Late Kiran Singh ji felid legacy track.'),
('KSF-STU-006', 'Ananya Vasudevan', 'B.A. English & Rhetoric', 'Stella Maris College', 2024, ARRAY['Archival Curation', 'Editorial Leadership', 'Public Discourse'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Civic Publications & Institutional Archives', TRUE, 98.0, '+91 94441 20006', 'Editor of the Foundation Student Dispatch digest.'),
('KSF-STU-007', 'Rohan Natarajan', 'Mechanical Engineering', 'College of Engineering Guindy', 2024, ARRAY['Systems Optimization', 'Technical Pitching', 'Operational Rigor'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Veterinary Prosthetics & Mobility Systems', TRUE, 95.5, '+91 94441 20007', 'Designing modular wheelchairs for disabled canine rescues.'),
('KSF-STU-008', 'Sneha Parthasarathy', 'B.Com Corporate Governance', 'Ethiraj College for Women', 2024, ARRAY['Financial Prudence', 'Non-profit Governance', 'Executive Briefing'], 'completed', 'Summer 2024 Pro Bono Incubator', 'Social Sector Audit Board', TRUE, 100.0, '+91 94441 20008', 'Completed audit residency with honours.'),
('KSF-STU-009', 'Vijay Krishnan', 'B.Sc. Psychology & Behavioral Science', 'University of Madras', 2024, ARRAY['Human-Animal Interaction', 'Crisis Counseling', 'Empathetic Listening'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Community Trauma & Mutual Aid Bureau', TRUE, 98.0, '+91 94441 20009', 'Coordinates community crisis response volunteers.'),
('KSF-STU-010', 'Pooja Venkatesh', 'B.Tech Biotechnology', 'SRM University', 2024, ARRAY['Vaccine Cold-Chain Management', 'Public Health Writing', 'Leadership'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Preventive Veterinary Vaccine Cell', TRUE, 96.5, '+91 94441 20010', 'Assisting in 100% canine rabies coverage auditing.'),
('KSF-STU-011', 'Aditya Manoharan', 'B.A. History & Archaeology', 'Presidency College Chennai', 2024, ARRAY['Historical Documentation', 'Oral History', 'Critical Thinking'], 'upcoming', 'Summer 2025 Pro Bono Incubator', 'State Archives & Memorial Registry', TRUE, 94.0, '+91 94441 20011', 'Digitizing AAZP historical conservation gazettes.'),
('KSF-STU-012', 'Lavanya Kannan', 'B.Sc. Mathematics', 'Women’s Christian College', 2024, ARRAY['Quantitative Modeling', 'Problem Decomposition', 'Presentation Precision'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Epidemiological Spread Forecasting Desk', TRUE, 99.5, '+91 94441 20012', 'Assists foundation statistical accountability reports.'),
('KSF-STU-013', 'Harish Kumar', 'B.E. Civil & Environmental Engg', 'Anna University', 2024, ARRAY['Sustainable Architecture', 'Project Scoping', 'Interdisciplinary Debate'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Sanctuary Drainage & Bioclimatic Housing', TRUE, 97.0, '+91 94441 20013', 'Assisted redesign of Dog Care Centre Zone Beta runs.'),
('KSF-STU-014', 'Deepika Chandrasekar', 'B.A. Social Work (BSW)', 'Madras School of Social Work', 2024, ARRAY['Community Organizing', 'Crisis Triage', 'Mediation & Dialogue'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'District Emergency Distress Network', TRUE, 100.0, '+91 94441 20014', 'Handles frontline intake for urban family mutual aid.'),
('KSF-STU-015', 'Gautam Raghavan', 'B.Sc. Chemistry', 'Loyola College Chennai', 2024, ARRAY['Laboratory Safety', 'Technical Documentation', 'Ethics'], 'upcoming', 'Winter 2025 Pro Bono Lab', 'Sanctuary Water Testing & Nutrition Lab', TRUE, 95.0, '+91 94441 20015', 'Monitors dietary mineral balance for senior dogs.'),
('KSF-STU-016', 'Swathi Swaminathan', 'B.Tech Information Technology', 'SSN College of Engineering', 2024, ARRAY['Digital Security', 'Product Management', 'Clear Prose'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Decentralized Mutual Aid Platforms', TRUE, 98.0, '+91 94441 20016', 'Maintaining rapid alert notifications system.'),
('KSF-STU-017', 'Manoj Padmanabhan', 'B.Com Honours', 'Ramakrishna Mission Vivekananda College', 2024, ARRAY['Institutional Accounting', 'Grant Writing', 'Negotiation'], 'completed', 'Summer 2024 Pro Bono Incubator', 'Philanthropic Transparency Trust', TRUE, 99.0, '+91 94441 20017', 'Audited 100% scholar expense allocations.'),
('KSF-STU-018', 'Keerthana Murugan', 'B.Sc. Visual Communication', 'M.O.P. Vaishnav College', 2024, ARRAY['Visual Storytelling', 'Cinematic Direction', 'Media Ethics'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Wildlife & Rescue Documentaries Guild', TRUE, 97.5, '+91 94441 20018', 'Produces photographic profiles of resident canines.'),
('KSF-STU-019', 'Naveen Rajagopal', 'B.E. Electrical & Electronics', 'Guindy Engineering College', 2024, ARRAY['Renewable Systems', 'Executive Briefings', 'Risk Management'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Off-Grid Sanctuary Solar Reliability Project', TRUE, 96.0, '+91 94441 20019', 'Designing 24/7 backup power for clinic refrigeration.'),
('KSF-STU-020', 'Janani Sethuraman', 'B.A. Political Science', 'Madras University', 2024, ARRAY['Constitutional Law', 'Debate Protocol', 'Civic Mobilization'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Animal Protection Statutory Reform Forum', TRUE, 98.5, '+91 94441 20020', 'Drafting municipal model bylaws for street animal welfare.'),
('KSF-STU-021', 'Arjun Thevar', 'B.Sc. Physics', 'New College Chennai', 2024, ARRAY['Analytical Rigor', 'Technical Exposition', 'Team Cohesion'], 'upcoming', 'Winter 2025 Pro Bono Lab', 'Acoustic Monitoring of Sanctuary Canines', TRUE, 95.0, '+91 94441 20021', 'Analyzing stress barking reduction through white noise.'),
('KSF-STU-022', 'Rithika Shankar', 'B.Arch Architecture', 'School of Architecture and Planning Anna Univ', 2024, ARRAY['Spatial Humanism', 'Presentation Clarity', 'Sustainability'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Thermal Comfort Canine Shelter Blueprinting', TRUE, 99.0, '+91 94441 20022', 'Architectural drafts for thermal stone kennel pads.'),
('KSF-STU-023', 'Sanjay Mohan', 'B.Com Information Systems', 'Guru Nanak College', 2024, ARRAY['Inventory Architecture', 'Spreadsheet Mastery', 'Professionalism'], 'completed', 'Winter 2024 Pro Bono Lab', 'Sanctuary Medical Supply Logistics Depot', TRUE, 97.0, '+91 94441 20023', 'Maintains zero-expiry protocol for rabies vaccine stocks.'),
('KSF-STU-024', 'Bhavani Duraisamy', 'B.Sc. Nutrition & Dietetics', 'Queen Mary’s College', 2024, ARRAY['Dietary Science', 'Public Education', 'Empathetic Delivery'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Canine Renal & Hepatic Diet Kitchen', TRUE, 100.0, '+91 94441 20024', 'Formulates customized steamed protein mash for 34 dogs.'),
('KSF-STU-025', 'Dinesh Kumaraguru', 'B.E. Robotics & Automation', 'Rajalakshmi Engineering College', 2024, ARRAY['Robotic Automation', 'Safety Protocols', 'Technical Leadership'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Automated Food Dispensing & Cleaners', TRUE, 96.5, '+91 94441 20025', 'Constructing automated sanitization spray nozzles.'),
('KSF-STU-026', 'Gayathri Sridhar', 'B.A. Journalism', 'Madras Christian College', 2024, ARRAY['Investigative Ethics', 'Crisp Editorial Writing', 'Interviewing'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'The Civic Herald Animal Welfare Bureau', TRUE, 98.0, '+91 94441 20026', 'Authoring community adoption case files.'),
('KSF-STU-027', 'Kishore Annamalai', 'B.Sc. Botany', 'Presidency College Chennai', 2024, ARRAY['Herbal Pharmacology', 'Scientific Documentation', 'Patience'], 'upcoming', 'Summer 2025 Pro Bono Incubator', 'Herbal Wound Healing Phytotherapy Lab', TRUE, 94.5, '+91 94441 20027', 'Testing natural neem and turmeric topical wound dressings.'),
('KSF-STU-028', 'Nithya Prabhakaran', 'B.Tech Artificial Intelligence', 'MIT Chromepet', 2024, ARRAY['Ethical AI Systems', 'Rapid Prototyping', 'Public Defense'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Canine Gait Analysis Computer Vision Cell', TRUE, 99.0, '+91 94441 20028', 'Trained models to detect early onset hip dysplasia in dogs.'),
('KSF-STU-029', 'Vignesh Soundar', 'B.Sc. Forestry & Ecology', 'Tamil Nadu Agricultural University', 2024, ARRAY['Habitat Assessment', 'Field Survival', 'Public Engagement'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Riparian Corridor & Zoo Buffer Zone Patrol', TRUE, 97.5, '+91 94441 20029', 'Studying urban wildlife corridor buffer interfaces.'),
('KSF-STU-030', 'Shruti Thiagarajan', 'B.A. French & Cross-Cultural Studies', 'Loyola College Chennai', 2024, ARRAY['Cross-Cultural Diplomacy', 'Speech Craft', 'Translation'], 'completed', 'Summer 2024 Pro Bono Incubator', 'International Felid Conservation Exchange', TRUE, 98.5, '+91 94441 20030', 'Translating Late Kiran Singh’s research papers for European ethologists.'),
('KSF-STU-031', 'Praveen Dhanasekaran', 'B.E. Mechanical Engineering', 'SRM Easwari Engineering College', 2024, ARRAY['CAD Drafting', 'Stress Testing', 'Professional Rigor'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Ergonomic Kennel Structural Fabrication', TRUE, 96.0, '+91 94441 20031', 'Fabricated zero-pinch aluminum recovery gates.'),
('KSF-STU-032', 'Meenakshi Raman', 'B.Sc. Nursing & Clinical Care', 'Madras Medical College', 2024, ARRAY['Triage Protocol', 'Patient Communication', 'Emergency Calm'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Mobile Animal Emergency Triage Unit', TRUE, 100.0, '+91 94441 20032', 'Certified in veterinary trauma first-aid response.'),
('KSF-STU-033', 'Ashwin Natraj', 'B.Tech Cybersecurity', 'Anna University', 2024, ARRAY['Privacy Law', 'Defensive Systems', 'Executive Reporting'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Mutual Aid Identity Protection Vault', TRUE, 97.0, '+91 94441 20033', 'Ensures distress reporter confidentiality and security.'),
('KSF-STU-034', 'Yamini Soundararajan', 'B.A. Public Administration', 'Presidency College Chennai', 2024, ARRAY['Public Protocol', 'Inter-agency Liaison', 'Clear Writing'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Municipal Health Coordination Liaison', TRUE, 98.0, '+91 94441 20034', 'Coordinates municipal anti-rabies vaccination verification.'),
('KSF-STU-035', 'Bharath Velumani', 'B.Sc. Statistics', 'Loyola College Chennai', 2024, ARRAY['Statistical Inference', 'Executive Dashboards', 'Rigor'], 'upcoming', 'Winter 2025 Pro Bono Lab', 'Canine Longevity & Clinical Outcome Tracking', TRUE, 95.5, '+91 94441 20035', 'Building life expectancy projection curves for rescued street dogs.'),
('KSF-STU-036', 'Archana Vijayakumar', 'B.Com Banking & Insurance', 'Meenakshi College for Women', 2024, ARRAY['Endowment Management', 'Risk Assessment', 'Auditing'], 'completed', 'Summer 2024 Pro Bono Incubator', 'Community Welfare Mutual Aid Reserve', TRUE, 99.0, '+91 94441 20036', 'Oversees student stipend disbursement transparency.'),
('KSF-STU-037', 'Siddharth Eswaran', 'B.E. Instrumentation Engineering', 'MIT Chromepet', 2024, ARRAY['Telemetry Sensors', 'Diagnostics Reporting', 'Integrity'], 'winter_intern', 'Winter 2024 Pro Bono Lab', 'Continuous Vital Signs Monitoring Station', TRUE, 97.0, '+91 94441 20037', 'Calibrated temperature & heart monitors for surgery bay.'),
('KSF-STU-038', 'Pavithra Ilangovan', 'B.A. Sociology', 'University of Madras', 2024, ARRAY['Urban Community Dynamics', 'Field Ethnography', 'Empathy'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Street Dog Feeder & Neighborhood Coexistence Cell', TRUE, 98.5, '+91 94441 20038', 'Resolves neighborhood friction through community awareness.'),
('KSF-STU-039', 'Karthikeyan Ulaganathan', 'B.Sc. Agricultural Sciences', 'TNAU Campus', 2024, ARRAY['Organic Soil Remediation', 'Agronomy', 'Field Leadership'], 'upcoming', 'Summer 2025 Pro Bono Incubator', 'Sanctuary Herbal Foraging & Grass Runs', TRUE, 96.0, '+91 94441 20039', 'Cultivating safe, parasite-resistant turf for canine exercise yards.'),
('KSF-STU-040', 'Tanvi Mahadevan', 'B.Tech Civil Engineering', 'Anna University', 2024, ARRAY['Hydraulic Engineering', 'Green Infrastructure', 'Executive Brief'], 'summer_intern', 'Summer 2025 Pro Bono Incubator', 'Flood-Resilient Animal Sanctuary Masterplan', TRUE, 99.5, '+91 94441 20040', 'Designed rainwater harvesting and surge drainage for Dog Care Centre.')
ON CONFLICT (scholar_id) DO UPDATE SET full_name = EXCLUDED.full_name;

-- 3. OPERATIONAL WING B: EXACTLY 34 RESCUED STREET DOGS
INSERT INTO dogs (tag_number, name, breed_mix, estimated_age, gender, rescue_location, rescue_date, zone_identifier, is_vaccinated_rabies, rabies_vaccination_date, booster_due_date, is_sterilized, dietary_needs, medical_notes, photo_url)
VALUES
('KSF-CAN-001', 'Simba', 'Indian Pariah Dog', '5 Years', 'Male', 'Vandalur Outer Ring Road, Chennai', '2021-04-12', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-10', '2025-03-10', TRUE, 'Boiled rice with shredded chicken & egg, calcium supplement', 'Found with severe pelvic contusions; fully rehabilitated with excellent gait.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-002', 'Tara', 'Desi Hound Cross', '4 Years', 'Female', 'Tambaram Railway Yard', '2021-07-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-05', '2025-04-05', TRUE, 'Hypoallergenic poultry & turmeric rice mash', 'Rescued with severe mange. Fur completely restored. Very gentle disposition.', 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-003', 'Raja', 'Indian Pariah Dog', '7 Years', 'Male', 'Guindy Industrial Estate', '2020-09-15', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-22', '2025-01-22', TRUE, 'Soft minced chicken, pumpkin puree, glucosamine & chondroitin', 'Senior dog with mild osteoarthritis in left hock. Warm infrared therapy administered.', 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-004', 'Kavya', 'Desi Pariah Mix', '3 Years', 'Female', 'Kotturpuram Slum Colony', '2022-02-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-18', '2025-05-18', TRUE, 'Standard balanced high-protein canine mash with fresh carrots', 'Rescued as an abandoned malnourished pup. High agility and alert nature.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-005', 'Veera', 'Indian Pariah Dog', '6 Years', 'Male', 'Chromepet GST Highway', '2021-11-03', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-28', '2025-02-28', TRUE, 'Cooked mutton broth, brown rice, omega-3 fish oil', 'Surviving vehicular hit-and-run; pin inserted in right tibia. Completely recovered.', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-006', 'Malar', 'Desi Pariah Mix', '2 Years', 'Female', 'Velachery Lake Bund', '2023-01-10', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-12', '2025-06-12', TRUE, 'High calorie puppy-to-adult recovery kibble and curd', 'Rescued from monsoon flooding. Fully dewormed and playful.', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-007', 'Chander', 'Indian Pariah Dog', '8 Years', 'Male', 'Adyar Estuary Bank', '2020-03-20', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-15', '2025-01-15', TRUE, 'Renal support formula, steamed egg whites, sweet potatoes', 'Geriatric canine with mild renal insufficiency. Creatinine stabilized on diet.', 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-008', 'Gauri', 'Indian Pariah Dog', '4 Years', 'Female', 'Besant Nagar Fish Market', '2022-06-25', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-01', '2025-07-01', TRUE, 'Chicken mince, bone broth, crushed moringa leaf powder', 'Laceration on right shoulder treated. Healed without scars.', 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-009', 'Bhima', 'Desi Mastiff Mix', '5 Years', 'Male', 'Pallavaram Quarry Site', '2021-12-08', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-25', '2025-03-25', TRUE, 'High calorie beef/chicken mince, steamed pumpkin, multivitamin', 'Large muscular build. Protective but very affectionate with handlers.', 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-010', 'Lakshmi', 'Indian Pariah Dog', '3 Years', 'Female', 'Saidapet Canal Bridge', '2022-09-17', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-14', '2025-08-14', TRUE, 'Standard nutrient mash with boiled eggs and oats', 'Rescued during deep monsoon ditch inundation. Full recovery.', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-011', 'Arjun', 'Desi Pariah Cross', '4 Years', 'Male', 'Chengalpattu By-pass', '2022-10-02', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-19', '2025-04-19', TRUE, 'Lean chicken, curd, brown rice, probiotic digestive paste', 'Rescued with corneal ulcer in right eye; 90% vision preserved after treatment.', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-012', 'Bhavani', 'Indian Pariah Dog', '2 Years', 'Female', 'Koyambedu Wholesale Market', '2023-03-11', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-02', '2025-09-02', TRUE, 'Protein enriched mash with carrots, beans, and bone meal', 'Rescued as stray pup surviving on garbage scraps. Thriving in pack.', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-013', 'Deva', 'Desi Pariah Dog', '6 Years', 'Male', 'Central Railway Goods Shed', '2021-05-30', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-11', '2025-02-11', TRUE, 'High fiber brown rice, minced chicken, digestive enzymes', 'Ear hematoma drained and sutured in 2021; completely healthy.', 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-014', 'Nila', 'Indian Pariah Dog', '1.5 Years', 'Female', 'Marina Lighthouse Beach Run', '2023-08-04', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-20', '2025-08-20', TRUE, 'Boiled eggs, chicken broth, sweet potato, vitamin syrup', 'Youngest female resident. High social drive with volunteers.', 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-015', 'Rudra', 'Desi Pariah Hound', '5 Years', 'Male', 'Ennore Thermal Plant Perimeter', '2022-04-16', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-05-02', '2025-05-02', TRUE, 'Hypoallergenic grain-free chicken stew, zinc supplement', 'Under observation for seasonal dermatitis flare-up. Improving well.', 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-016', 'Shanti', 'Indian Pariah Dog', '9 Years', 'Female', 'Mylapore Temple Mada Street', '2019-12-01', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-08', '2025-01-08', TRUE, 'Pureed boiled chicken, warm broth, joint supplements', 'Gentle matriarch of the senior wing. Blind in left eye due to mature cataract.', 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-017', 'Karna', 'Indian Pariah Dog', '4 Years', 'Male', 'Perambur Loco Works', '2022-08-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-25', '2025-06-25', TRUE, 'High protein poultry mash, raw carrots for chewing', 'One ear notched from past territorial scuffle prior to rescue. Very docile.', 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-018', 'Maya', 'Desi Pariah Dog', '3 Years', 'Female', 'Thiruvanmiyur Bus Depot', '2022-11-20', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-15', '2025-07-15', TRUE, 'Standard balanced chicken and rice with coconut oil drizzle', 'Healthy coat and bright demeanor. Loves morning agility runs.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-019', 'Surya', 'Indian Pariah Dog', '4 Years', 'Male', 'Urapakkam Highway Junction', '2022-01-05', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-18', '2025-02-18', TRUE, 'Cooked chicken gizzards, steamed rice, calcium carbonate', 'Rescued from deep highway drainage pit. 100% vital organs normal.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-020', 'Anbu', 'Desi Pariah Mix', '7 Years', 'Male', 'Royapuram Fish Harbour', '2020-11-12', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-30', '2025-01-30', TRUE, 'Low-sodium chicken broth, mashed rice, liver tonic', 'Senior companion dog. Loves resting under the sanctuary banyan trees.', 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-021', 'Kalyani', 'Indian Pariah Dog', '3 Years', 'Female', 'Vadapalani Flyover Pillar 14', '2023-02-18', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-01', '2025-08-01', TRUE, 'Standard chicken mash with steamed green peas', 'Escaped vehicular traffic unscathed; sterilized upon intake.', 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-022', 'Rishi', 'Indian Pariah Dog', '5 Years', 'Male', 'Madhavaram Milk Colony', '2021-08-22', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-14', '2025-03-14', TRUE, 'Cooked chicken, eggs, curd, vitamin mineral mix', 'Calm and steady temperament. Frequently assists in socializing new intakes.', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-023', 'Meera', 'Desi Pariah Cross', '2.5 Years', 'Female', 'Avadi Tank Road', '2023-04-09', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-10', '2025-09-10', TRUE, 'High protein poultry rice, pumpkin seeds for digestion', 'Rescued following severe tick fever (Ehrlichia); fully cleared after doxycycline protocol.', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-024', 'Velan', 'Indian Pariah Dog', '6 Years', 'Male', 'Singaperumal Koil Tollgate', '2021-10-15', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-04-20', '2025-04-20', TRUE, 'Steamed chicken, brown rice, glucosamine daily chew', 'Slight stiffness in colder months, managed with orthopaedic bedding.', 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-025', 'Amala', 'Indian Pariah Dog', '4 Years', 'Female', 'Triplicane High Road', '2022-05-12', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-05-25', '2025-05-25', TRUE, 'Balanced poultry diet with grated carrots and boiled egg', 'Very bonded with caregiver team. Excellent physical stamina.', 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-026', 'Sundar', 'Desi Pariah Dog', '5 Years', 'Male', 'Poonamallee High Road', '2021-09-04', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-03-30', '2025-03-30', TRUE, 'Chicken mince, sweet potato, probiotic yoghurt', 'Recovered from fractured metatarsal bone in 2021. No residual limp.', 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-027', 'Geetha', 'Indian Pariah Dog', '8 Years', 'Female', 'Egmore Children’s Hospital Lane', '2020-04-18', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-28', '2025-01-28', TRUE, 'Senior canine soft stew, fish oil, turmeric extract', 'Senior resident with mild hearing loss. Responds enthusiastically to hand cues.', 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-028', 'Mani', 'Desi Pariah Hound', '3 Years', 'Male', 'T. Nagar Ranganathan Street', '2023-01-29', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-07-22', '2025-07-22', TRUE, 'Standard nutritious chicken and egg mix with greens', 'Rescued during festival crowd stampede. Traumatized initially, now fully confident.', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-029', 'Thangam', 'Indian Pariah Dog', '2 Years', 'Female', 'Porur Toll Gate', '2023-06-14', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-08-30', '2025-08-30', TRUE, 'High calorie recovery formula, liver treats, eggs', 'Beautiful golden coat. Highly energetic and friendly with all student scholars.', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-030', 'Dhruva', 'Desi Mastiff Cross', '6 Years', 'Male', 'Maraimalai Nagar Industrial Zone', '2021-06-19', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-02-22', '2025-02-22', TRUE, 'Nutrient dense meat stew, calcium supplements, oats', 'Very large frame. Exceptional pack protector and calm temperament.', 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-031', 'Vasantha', 'Indian Pariah Dog', '4 Years', 'Female', 'Kelambakkam Rural Market', '2022-07-08', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-06-18', '2025-06-18', TRUE, 'Steamed chicken, curd, brown rice, multivitamins', 'Rescued with severe dehydration during peak summer heatwave. Restored to 100% health.', 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-032', 'Chellappa', 'Desi Pariah Dog', '10 Years', 'Male', 'Guindy Race Course Back Gate', '2019-08-11', 'Zone Gamma - Senior & Palliative Run', TRUE, '2024-01-10', '2025-01-10', TRUE, 'Warm broth soaked rice, pureed chicken, senior vitality paste', 'Our oldest sanctuary resident (10 years). Quiet, dignified, spends afternoons resting in shade.', 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-033', 'Pari', 'Indian Pariah Dog', '3 Years', 'Male', 'Guduvanchery Junction', '2023-05-01', 'Zone Beta - Main Pack Sanctuary', TRUE, '2024-09-05', '2025-09-05', TRUE, 'Standard balanced poultry mash with grated vegetables', 'Rescued from stray dog territorial dispute; bite wounds completely sanitized and healed.', 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80'),
('KSF-CAN-034', 'Kamala', 'Desi Pariah Dog', '1 Year', 'Female', 'Vandalur Forest Checkpost', '2024-01-15', 'Zone Alpha - Critical Care & Quarantine', TRUE, '2024-02-01', '2025-02-01', TRUE, 'Junior nutrient formula, boiled chicken livers, whole milk curd', 'Recent rescue intake. Fully vaccinated, completing final post-sterilization monitoring.', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80')
ON CONFLICT (tag_number) DO UPDATE SET name = EXCLUDED.name;

-- 4. EVENTS: COMMUNITY DRIVES, CAMPS & SYMPOSIA
INSERT INTO events (slug, title, category, description, location, scheduled_at, capacity, is_published, whatsapp_rsvp_link)
VALUES
(
    'vandalur-anti-rabies-drive-2025',
    'Mass Anti-Rabies & Booster Vaccination Camp (Chengalpattu & Vandalur Belt)',
    'medical_camp',
    'Foundation veterinary team, paired with student scholar apprentices, provides free multi-antigen booster and anti-rabies immunizations for community street canines across the suburban corridor.',
    'Dog Care Centre Base Station, Vandalur South, Chennai',
    '2025-04-15 08:30:00+05:30',
    150,
    TRUE,
    'https://wa.me/919840012345?text=RSVP%20for%20Anti-Rabies%20Vaccination%20Camp'
),
(
    'student-oratory-diplomacy-symposium',
    'Scholar Public Discourse & Executive Oratory Symposium',
    'personality_workshop',
    'The 40 sponsored scholars present their mid-term public policy theses and civic advocacy arguments before a distinguished panel of institutional jurists and social welfare trustees.',
    'Late Kiran Singh Memorial Auditorium, Chennai',
    '2025-05-10 10:00:00+05:30',
    80,
    TRUE,
    'https://wa.me/919840012345?text=RSVP%20for%20Scholar%20Symposium'
),
(
    'monsoon-mutual-aid-rapid-response-drill',
    'Suburban Mutual-Aid Flood & Canine Rescue Readiness Drill',
    'community_drive',
    'Coordinated simulation exercise testing the rapid emergency grid between our student logistics corps and local community caretakers for canine evacuation during monsoon inundations.',
    'Adyar & Tambaram Lowland Basins, Chennai',
    '2025-06-20 07:00:00+05:30',
    100,
    TRUE,
    'https://wa.me/919840012345?text=RSVP%20for%20Mutual%20Aid%20Drill'
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
    'https://wa.me/919840012345?text=RSVP%20for%20Annual%20Memorial%20Remembrance'
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

Through discipline and devotion, these forty young women and men carry forward the motto: **"Working towards Change"**.',
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
Whether a family faces severe illness, a sudden crisis in street canine trauma, or urban flooding in the lowlands of Chennai, our mutual-aid engine triggers within minutes:
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
