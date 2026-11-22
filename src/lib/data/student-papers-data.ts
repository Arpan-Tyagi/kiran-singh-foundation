// ============================================================================
// PUBLISHED STUDENT RESEARCH PAPERS & DEFENSE MANUSCRIPTS
// Official academic publications under Kiran Singh Foundation Research Wing
// ============================================================================

export interface ResearchPaperSubsection {
  subtitle: string;
  paragraphs: string[];
}

export interface ResearchPaperSection {
  number: string;
  title: string;
  paragraphs: string[];
  subsections?: ResearchPaperSubsection[];
}

export interface ResearchPaperAuthor {
  name: string;
  credential: string;
  institution: string;
}

export interface ResearchPaperSuggestion {
  number: number;
  title: string;
  description: string;
}

export interface ResearchPaperFootnote {
  number: number;
  text: string;
  url?: string;
}

export interface PublishedStudentPaper {
  id: string;
  topicId: string;
  documentRef: string;
  title: string;
  institutionalAffiliation: string;
  authors: ResearchPaperAuthor[];
  abstract: string;
  keywords: string[];
  sections: ResearchPaperSection[];
  suggestionsTitle: string;
  suggestions: ResearchPaperSuggestion[];
  conclusionParagraphs: string[];
  footnotes: ResearchPaperFootnote[];
  bibliography: string[];
  statusBadge: string;
  publicationDate: string;
  downloadFilename: string;
}

export const PUBLISHED_STUDENT_PAPERS: PublishedStudentPaper[] = [
  {
    id: "paper-disc-2026-096",
    topicId: "ksf-disc-2026-096",
    documentRef: "KSF/DISC/2026/096",
    title: "MIND OF A POLITICIAN TO FACE A CRISIS SITUATION",
    institutionalAffiliation:
      "Kiran Singh Foundation (Student Welfare Wing) • Directorate of Socio-Legal Research",
    statusBadge: "Peer-Reviewed & Secretariat Ratified Manuscript",
    publicationDate: "November 2026",
    downloadFilename: "KSF-DISC-2026-096-Mind-of-a-Politician-Crisis-Situation.md",
    authors: [
      {
        name: "Mr. Anuj Kumar Singh",
        credential: "Ph.D. Scholar",
        institution: "Department of Law, Dr. Bhim Rao Ambedkar University, Agra",
      },
      {
        name: "Ms. Vaishnavi",
        credential: "2nd Year B.A. LL.B (Hons.)",
        institution: "Faculty of Law, University of Allahabad",
      },
      {
        name: "Mr. Karan Pal",
        credential: "3rd Year B.C.A.",
        institution: "Dr. Bhim Rao Ambedkar University, Agra",
      },
    ],
    abstract:
      "This research paper investigates the cognitive, institutional, and operational divergence between the decision-making processes of a political executive and an ordinary citizen during acute crises. Challenging the premise that effective crisis leadership stems from innate intellectual superiority, this study demonstrates that divergence in crisis behavior is primarily a function of constitutional role, jurisdictional scale, asymmetric information velocity, administrative constraints, and systemic accountability. In the Indian democratic fabric, political leadership has evolved from anti-colonial mass mobilization into a complex constitutional welfare state operating under statutory frameworks such as the Disaster Management Act, 2005. By contrasting the localized, immediate, mutual-aid reflex of citizens with the macro-allocative, multi-departmental, and communication-heavy duties of elected representatives, the paper constructs a comparative operational matrix. Crucially, the study examines the epistemic conflict between rigid, rote-learned bureaucratic procedures and lived, grassroots experiential intelligence. Drawing upon empirical instances including the 2018 Kerala floods and cyclone evacuations in Odisha, alongside the crisis leadership framework of Boin and ’t Hart, the paper argues that crisis governance achieves peak efficacy only when top-down administrative authority actively synthesizes professional technocratic counsel with decentralized citizen participation. The paper concludes with actionable institutional recommendations to embed mandatory crisis simulation in legislative academies, statutory civil-society liaison cells in District Disaster Management Authorities (DDMAs), and adaptive incident command structures.",
    keywords: [
      "Political Leadership",
      "Crisis Management",
      "Disaster Management Act 2005",
      "Political Psychology",
      "Bounded Rationality",
      "Grassroots Experience",
      "Rote Learning",
      "Article 21 Jurisprudence",
      "Public Administration",
      "Incident Command Systems",
      "Citizen Participation",
      "Democratic Accountability",
      "Ethical Statesmanship",
      "Cognitive Overload",
      "Comparative Governance",
    ],
    sections: [
      {
        number: "1",
        title: "Introduction",
        paragraphs: [
          "A crisis, in governance jurisprudence, represents an acute disruption of normalcy wherein standard institutional routines, standard operating procedures (SOPs), and resource allocations prove fundamentally inadequate to arrest cascading social, economic, or physical peril. Whether triggered by hydrological catastrophes, public health emergencies, communal friction, or geopolitical shocks, crises compress decision-making time horizons, generate severe informational ambiguity, and amplify psychological stress across all strata of society.",
          "In a sovereign democratic republic like India, an elected political leader does not encounter a crisis as an isolated moral actor; rather, they operate as a constitutional trustee invested with sovereign police powers, budgetary discretion, and democratic legitimacy. The choices executed by a political executive during an emergency reverberate across millions of citizens, dictating public survival, economic stability, and civil order. Conversely, an ordinary citizen confronts the identical shock not from the vantage point of macro-command, but from the visceral reality of direct survival, familial preservation, and localized communal solidarity.",
          "This paper does not seek to valorize political executives as inherently superior decision-makers, nor does it romanticize citizen action as an all-sufficient substitute for organized state capacity. Instead, this inquiry conducts a structural, psychological, and legal analysis into how jurisdictional scale, cognitive load, institutional machinery, and the nature of knowledge—specifically rote procedural memorization versus field-tested grassroots experience—shape crisis response in contemporary Indian society.",
        ],
      },
      {
        number: "2",
        title: "Evolution of Politics and Its Role in Indian Society",
        paragraphs: [
          "The ontology of Indian politics has undergone profound generational transformations, evolving through four distinct epochs that have progressively redefined the expectations placed upon leadership during catastrophe:",
          "1. The Classical and Pre-Colonial Ethos (Rajadharma & Apad-dharma): In classical Indian jurisprudence, as articulated in the Arthashastra and the Shanti Parva of the Mahabharata, governance was fundamentally tethered to Rajadharma—the moral duty of the sovereign to preserve public welfare (Yogakshema). Crucially, political thinkers recognized Apad-dharma (conduct permissible during catastrophic extremities), which mandated that during famine, floods, or warfare, normal taxation must cease, state granaries must open unconditionally, and the ruler’s survival was subordinate to the preservation of the populace.",
          "2. The Colonial Era of Coercive Bureaucracy (Pre-1947): British colonial administration transformed governance into an extractive enterprise. Crisis management was reduced to mechanical, revenue-protecting rulebooks (such as the rigid 19th-century Famine Codes). The catastrophic consequence of this detached, rote administrative structure was starkly demonstrated during the 1943 Bengal Famine, where bureaucratic indifference, lack of democratic accountability, and imperial resource diversion caused over three million deaths.",
          "3. The Constitutional Genesis & The Nehruvian Welfare State (1947–1990s): The enactment of the Constitution of India in 1950 marked a revolutionary departure. Politics was redefined as an instrument of social revolution. Through the Directive Principles of State Policy (Part IV), political leadership was charged with creating healthcare networks, irrigation systems, famine prevention grids, and scientific institutions to buffer society against systemic vulnerability.",
          "4. The Decentralized & Participatory Era (Post-73rd/74th Amendments to Date): With the constitutional empowerment of Panchayati Raj Institutions and Urban Local Bodies, coupled with the digital democratization of information, political leadership ceased to be exclusively Delhi- or state-capital-centric. Contemporary Indian political society expects elected representatives to be real-time communicators, transparent managers, and accessible field facilitators.",
        ],
      },
      {
        number: "3",
        title: "Politics in India – Pre-Independence Era and Post-Independence Era",
        paragraphs: [
          "A rigorous comparative examination reveals that the primary divergence between pre-independence and post-independence political leadership lies in the nature of authority, institutional objective, and accountability mechanisms:",
          "Before independence, the primary objective of political movements was anti-colonial resistance, mass mobilization, civil disobedience, and ideological assertion of sovereignty. Operationally, leadership relied upon agitational politics, defiance of colonial statutes, boycott movements, and moral persuasion. In times of crisis, their function was exposing the moral and material failures of the colonial regime to protect Indians, while organizing independent humanitarian relief (such as the Congress Seva Dal). Leaders were held accountable primarily to the moral conscience of the freedom movement and party cadre, while the colonial state treated them as seditious.",
          "Following independence in 1947, the focus shifted to institutional stability, socioeconomic development, public health management, and rights protection. Post-independence leadership operates through executive administration, statutory compliance, budget appropriation, and multi-tier bureaucratic coordination. During crises, the democratic state directs mobilization utilizing statutory arms (NDRF, Armed Forces, SDMAs) under constitutional mandate. The accountability vector is direct and legally enforced through universal adult suffrage, parliamentary debate, free press, and judicial review under Article 32 and Article 226.",
        ],
      },
      {
        number: "4",
        title: "Mind of a Politician – How It Is Different from an Ordinary Man",
        paragraphs: [
          "The psychological architecture of an elected politician facing a crisis differs fundamentally from that of an ordinary private citizen, not by virtue of neurological hardwiring, but due to the intense institutional forces that govern the political mind:",
        ],
        subsections: [
          {
            subtitle: "4.1 Bounded Rationality and Asymmetric Information",
            paragraphs: [
              "Herbert Simon’s foundational concept of Bounded Rationality demonstrates that human decision-makers cannot optimize outcomes perfectly because they suffer from tractability limits, incomplete information, and restricted time. In an emergency:",
              "The Ordinary Citizen experiences high local clarity but low macro clarity. A citizen knows precisely if their street is submerged, who among their neighbors is bedridden, and where dry ground lies. However, they lack macro-information regarding regional reservoir discharge rates, hospital bed availability across neighboring districts, or national fuel reserves.",
              "The Political Executive suffers from macro-overload alongside ground distortion. The politician is inundated with hundreds of bureaucratic status reports, intelligence memos, and media alerts. Paradoxically, this data flood often conceals hyper-local realities due to bureaucratic sanitization, forcing the leader to 'satisfice' (settle on an acceptable rather than perfect decision) amidst intense fog of war.",
            ],
          },
          {
            subtitle: "4.2 The Five Core Tasks of Crisis Leadership",
            paragraphs: [
              "In their canonical treatise Public Leadership in Times of Crisis, Arjen Boin and Paul ’t Hart outline five executive psychological tasks that distinguish political crisis command from individual crisis survival:",
              "1. Sense-Making: Rapidly sifting noise to identify incoming threats before institutional inertia dismisses them.",
              "2. Decision-Making & Coordination: Overcoming inter-departmental turf wars between police, civil administration, public health departments, and military authorities.",
              "3. Meaning-Making (Crisis Communication): Articulating a coherent narrative that provides reassurance without false optimism, minimizing mass hysteria while ensuring compliance with safety directives.",
              "4. Terminating & Account-Giving: Re-establishing institutional normalcy and facing independent audits without shifting blame onto subordinate functionaries.",
              "5. Learning: Overcoming political defensiveness to translate systemic failure into legislative reform.",
            ],
          },
          {
            subtitle: "4.3 Cognitive Overload, Groupthink, and the Electoral Calculus",
            paragraphs: [
              "A private citizen reacts to a crisis through the psychological prism of direct preservation. An elected politician, however, is burdened by the simultaneous management of three competing pressures:",
              "First, the Humanitarian Imperative: Preventing loss of human life and mitigating physical devastation.",
              "Second, Administrative Feasibility: Ensuring actions comply with financial codes, procurement rules, and civil service hierarchies.",
              "Third, Electoral & Reputational Calculus: Anticipating how opposition parties, television news cycles, and subsequent election campaigns will interpret every utterance and resource prioritization.",
              "This compounding pressure frequently makes politicians susceptible to Groupthink (Irving Janis), wherein a leader surrounds themselves with subservient advisors who validate comforting illusions rather than report catastrophic field truths.",
            ],
          },
        ],
      },
      {
        number: "5",
        title: "Role of Politics in India: Statutory, Constitutional, and Administrative Dimensions",
        paragraphs: [
          "In the Indian constitutional framework, crisis governance is governed by a sophisticated statutory architecture that distributes power and establishes legal duties:",
        ],
        subsections: [
          {
            subtitle: "5.1 The Constitutional Mandate: Article 21 and Federal Division",
            paragraphs: [
              "Under Article 21 of the Constitution of India, the 'Right to Life' has been repeatedly expanded by the Supreme Court to mandate an affirmative obligation upon the state to safeguard citizen life, health, and emergency livelihood during catastrophic events (Paschim Banga Khet Mazdoor Samity v. State of West Bengal). During crises, political executives operate under the shadow of writ jurisdiction: administrative callousness or discriminatory aid distribution can be directly challenged under Articles 32 and 226.",
              "Furthermore, the Indian federal matrix introduces jurisdictional friction during crises. Under the Seventh Schedule: State List (Entry 6: Public Health, Entry 9: Relief of Disabled, Entry 17: Water) falls squarely within state domain, while Concurrent List (Entry 29: Prevention of Epidemics, Entry 23: Social Security) allows central intervention. This constitutional bifurcation means that an Indian politician cannot manage a crisis in a vacuum; they must constantly negotiate the delicate balance of Cooperative Federalism between New Delhi, State Secretariats, and municipal commissioners.",
            ],
          },
          {
            subtitle: "5.2 The Statutory Engine: Disaster Management Act, 2005 (DMA 2005)",
            paragraphs: [
              "Post-2005, Indian disaster response shifted from ad-hoc reactive charity to a legally codified, multi-tier command structure: National Level (NDMA chaired by the Prime Minister), State Level (SDMA chaired by the Chief Minister), and District Level (DDMA co-headed by the District Magistrate and Chairperson of the Zilla Parishad). The political executive at each tier holds the statutory power to requisition private vehicles, commandeer private hospital beds, disburse ex-gratia funds, and deploy specialized response forces like the NDRF and SDRF.",
            ],
          },
          {
            subtitle: "5.3 The Seam Between Political Executive and Permanent Bureaucracy",
            paragraphs: [
              "A central dynamic of Indian governance is the relationship between the Political Executive (Ministers, MLAs, MPs) and the Permanent Executive (IAS District Magistrates, Municipal Commissioners, Police Chiefs). While the permanent bureaucracy provides institutional memory, regulatory fidelity, and technical mastery, it frequently suffers from procedural rigidity and emotional detachment. The elected politician injects democratic legitimacy, public empathy, and field responsiveness—challenging red-tape when lives are hanging in the balance.",
            ],
          },
        ],
      },
      {
        number: "6",
        title: "Facing a Crisis Situation – Comparative Study of Citizen and Political Executive Reactions",
        paragraphs: [
          "To understand the practical intersection of citizen action and political crisis command, theoretical abstractions must be tested against real-world Indian catastrophic scenarios:",
        ],
        subsections: [
          {
            subtitle: "6.1 The 2018 Kerala Floods: Grassroots Mastery over Procedural Latency",
            paragraphs: [
              "During the devastating South-West monsoon floods of August 2018 in Kerala, extreme precipitation overwhelmed 35 state dams, submerging vast rural and urban tracts.",
              "The Citizen Response: Hundreds of traditional coastal fishermen from Kollam, Alappuzha, and Thiruvananthapuram organized an autonomous rescue armada (heralded by the state as Kerala’s 'Coastal Army'). Utilizing wooden and fiberglass country boats, these fishermen navigated treacherous, narrow urban alleyways, submerged powerlines, and raging currents where heavy military trucks and NDRF motorized inflatable boats could not operate. They directly rescued over 65,000 citizens through intuitive spatial knowledge and selfless bravery.",
              "The Political Response: State leadership, coordinating from the Secretariat in Thiruvananthapuram, operated the macro-levers: negotiating with the Union Government for Indian Navy and Air Force heavy-lift helicopters, releasing emergency state treasury funds, establishing an around-the-clock unified press briefing protocol that prevented statewide panic, and ultimately recognizing the fishermen as institutional disaster response partners with state fuel subsidies and honorariums.",
            ],
          },
          {
            subtitle: "6.2 The Odisha Cyclone Trajectory: Systemic Evolution from 1999 to Cyclone Fani (2019)",
            paragraphs: [
              "In the 1999 Odisha Super Cyclone, political indecision, lack of early warning dissemination, and bureaucratic paralysis resulted in the tragic loss of over 10,000 lives.",
              "By Cyclone Fani (May 2019), a profound evolution in political mindset occurred. Guided by an institutionalized 'Zero-Casualty Mission,' political leadership empowered local Panchayats, deployed targeted SMS warnings in local dialects, and mobilized 1.2 million citizens into 800+ reinforced cyclone shelters within 24 hours. This transformation proved that political capacity to handle crises is an institutional discipline developed through iterative learning and preparation.",
            ],
          },
        ],
      },
      {
        number: "7",
        title: "Difference Between Rote Learning and Grassroot-Level Experience – Impact on Decision-Making",
        paragraphs: [
          "A critical intellectual contribution of this research is untangling the epistemic divide between Rote Learning and Grassroots Experience in shaping governance outcomes:",
          "Rote learning in public administration manifests as mechanical adherence to standard operating procedures, rigid regulatory circulars, and historical precedents without contextual calibration. While rote knowledge ensures audit compliance, standardized record-keeping, and predictability, its fatal flaw in a crisis is that emergencies are inherently non-linear and unprecedented. A leader relying exclusively on rote manuals becomes paralyzed when field conditions diverge. Rigid proceduralism leads to 'administrative apathy,' such as refusing to release relief rations because beneficiaries cannot produce national identity cards in a submerged relief camp.",
          "Conversely, grassroots experience represents deep, tacit knowledge acquired through continuous, direct physical immersion within communities: granular demographic awareness of which informal settlements lack water or which elderly residents live alone; social credibility to enforce difficult evacuations without provoking civil unrest; and intuitive triage to instantly detect bureaucratic whitewashing.",
          "Neither pure rote procedure nor raw grassroots instinct is sufficient on its own. Grassroots experience without administrative literacy can degenerate into parochial favoritism or disregard for statutory safety thresholds. Conversely, administrative literacy without grassroots intuition produces cold, ineffective technocracy. Superior political statesmanship is achieved when the rigor of constitutional procedure is animated by the empathy and ground-level nuance of lived community experience.",
        ],
      },
    ],
    suggestionsTitle: "Suggestions for Institutional and Policy Reform",
    suggestions: [
      {
        number: 1,
        title: "Statutory Creation of Community Liaison Cells within DDMAs",
        description:
          "The Disaster Management Act, 2005 should be amended to require every District Disaster Management Authority (DDMA) to incorporate a permanent, institutionalized Community Liaison Cell. Composed of elected ward councilors, registered welfare societies, rural self-help groups (SHGs), and youth volunteer networks, this cell must have formal protocol seats during district emergency triage, ensuring real-time citizen reporting reaches the District Magistrate and Minister-in-Charge without administrative filtering.",
      },
      {
        number: 2,
        title: "Mandatory Crisis Simulation & Statecraft Training for Elected Representatives",
        description:
          "Legislative training academies—such as the Parliamentary Research and Training Institute for Democracies (PRIDE) and State Administrative Training Institutes (ATIs)—must formulate mandatory, high-intensity crisis simulation exercises for newly elected MLAs and MPs. These modules should train politicians in cognitive bias mitigation, counter-misinformation strategies, data-driven resource triage, and inter-service coordination.",
      },
      {
        number: 3,
        title: "Adoption of Adaptive Incident Command Systems (ICS) with Field Discretion",
        description:
          "State administrative codes should officially replace archaic manual procedures with an Indianized Incident Command System (ICS). Crucially, civil service regulations must include a 'Good-Faith Administrative Protection Clause,' granting ground officers and local political representatives emergency financial discretion to bypass rigid procurement formalities during declared emergencies without fear of post-crisis audit prosecution.",
      },
      {
        number: 4,
        title: "Institutionalization of Mandatory Post-Crisis Public Learning Audits",
        description:
          "To institutionalize Boin and ’t Hart’s fifth leadership task (Learning), Parliament should enact legislation requiring an independent, multi-disciplinary Post-Crisis Audit Commission to be constituted following any nationally or state-declared emergency. These commissions must publish their findings within six months, cataloging institutional failures, supply bottlenecks, and successful community mutual-aid models to mandate formal revisions to state disaster management plans.",
      },
    ],
    conclusionParagraphs: [
      "The response of an elected politician to an acute crisis differs from that of an ordinary citizen not by virtue of inherent intellect or innate courage, but due to the profound divergence in their jurisdictional mandate, institutional accountability, and operational scale. While the citizen embodies the indispensable virtues of rapid, localized empathy, peer solidarity, and agile field action, the political executive must bear the solemn burden of constitutional trustee—balancing macro-allocations, statutory mandates, inter-governmental coordination, and collective public morale.",
      "As this research has established, effective crisis statecraft cannot survive upon rote procedural memorization, nor can it rest solely upon isolated bureaucratic fiat. Crises ruthlessly expose the fault lines between the ruler and the ruled. The true measure of a capable political mind is found not in the authoritarian consolidation of emergency power, but in institutional humility: the willingness to listen to the whisper of grassroots reality, synthesize technocratic science with human compassion, act transparently under intense scrutiny, and harness the immense, heroic resilience of ordinary citizens for the collective salvation of the republic.",
    ],
    footnotes: [
      {
        number: 1,
        text: "Boin, A., & ’t Hart, P. (2003). Public Leadership in Times of Crisis: Mission Impossible? Public Administration Review, 63(5), 544–553.",
        url: "https://doi.org/10.1111/1540-6210.00318",
      },
      {
        number: 2,
        text: "Kautilya. The Arthashastra (L.N. Rangarajan, Trans. & Ed.). Penguin Books India (1992), Book VIII: Concerning Calamities of the King and the State.",
      },
      {
        number: 3,
        text: "Sen, Amartya. (1981). Poverty and Famines: An Essay on Entitlement and Deprivation. Oxford University Press, pp. 52–85 (analyzing administrative failure during the 1943 Bengal Famine).",
      },
      {
        number: 4,
        text: "National Council of Educational Research and Training (NCERT). Making of the Indian Constitution, Class XI Indian Constitution at Work, pp. 1–28.",
      },
      {
        number: 5,
        text: "Simon, Herbert A. (1957). Models of Man, Social and Rational: Mathematical Essays on Rational Human Behavior in a Social Setting. John Wiley & Sons.",
      },
      {
        number: 6,
        text: "Boin, A., ’t Hart, P., Stern, E., & Sundelius, B. (2005). The Politics of Crisis Management: Public Leadership under Pressure. Cambridge University Press.",
      },
      {
        number: 7,
        text: "Janis, Irving L. (1972). Victims of Groupthink: A Psychological Study of Foreign-Policy Decisions and Fiascoes. Houghton Mifflin.",
      },
      {
        number: 8,
        text: "Supreme Court of India. Paschim Banga Khet Mazdoor Samity v. State of West Bengal (1996) 4 SCC 37; affirming positive welfare obligations under Article 21.",
      },
      {
        number: 9,
        text: "Hazaa, Y. M. H., Almaqtari, F. A., & Al-Swidi, A. (2021). Factors Influencing Crisis Management: A Systematic Review. Cogent Business & Management, 8(1), 1878979.",
        url: "https://doi.org/10.1080/23311975.2021.1878979",
      },
      {
        number: 10,
        text: "Nakamizo, Kazuya. (2013). Political History of Crisis: How Did India Cope with Crisis After Independence? The Annals of Japanese Political Science Association, 64(2), 62–85.",
        url: "https://doi.org/10.7218/nenpouseijigaku.64.2_62",
      },
      {
        number: 11,
        text: "Maiorano, D. (2014). Indian Institutions in the Early 1980s: The Pre-history of the Great Transformation. Modern Asian Studies, 48(5), 1389–1434.",
        url: "https://doi.org/10.1017/S0026749X13000255",
      },
      {
        number: 12,
        text: "Disaster Management Act, 2005 (Act No. 53 of 2005), Ministry of Law and Justice, Government of India; Sections 14, 22, and 30.",
      },
    ],
    bibliography: [
      "Boin, A., & ’t Hart, P. (2003). 'Public Leadership in Times of Crisis: Mission Impossible?' Public Administration Review, 63(5), 544–553.",
      "Disaster Management Act, 2005 (Act No. 53 of 2005), Universal Law Publishing, New Delhi.",
      "Eid, J., et al. (2023). 'Developing Local Crisis Leadership – A Research and Training Agenda.' Journal of Contingencies and Crisis Management, PubMed ID: 36818135.",
      "Hazaa, Y. M. H., Almaqtari, F. A., & Al-Swidi, A. (2021). 'Factors Influencing Crisis Management: A Systematic Review and Synthesis for Future Research.' Cogent Business & Management, 8(1), 1878979.",
      "Indira Gandhi National Open University (IGNOU). (2021). History of India: 1707–1950 (BHIC-134).",
      "Janis, Irving L. (1972). Victims of Groupthink. Houghton Mifflin.",
      "Kumar, R. (2024). 'The Making of India’s Resilient Opposition in the 1970s.' Studies in Indian Politics, 12(1).",
      "Maiorano, D. (2014). 'Indian Institutions in the Early 1980s: The Pre-history of the Great Transformation.' Modern Asian Studies, 48(5), 1389–1434.",
      "Nakamizo, Kazuya. (2013). 'Political History of Crisis: How Did India Cope with Crisis After Independence?' The Annals of the Japanese Political Science Association, 64(2), 62–85.",
      "National Council of Educational Research and Training (NCERT). (2022). 'Making of the Indian Constitution.'",
      "Simon, Herbert A. (1957). Models of Man, Social and Rational. John Wiley & Sons.",
      "Singh, Jagpal. (2018). 'Making of the Indian Constitution.' IGNOU, Unit 34.",
    ],
  },
];
