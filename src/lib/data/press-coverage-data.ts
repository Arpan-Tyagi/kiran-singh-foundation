// ============================================================================
// KIRAN SINGH FOUNDATION - OFFICIAL PRINT MEDIA & PRESS COVERAGE RECORDS
// Documents verified newspaper publications, ePaper archives, and public events.
// ============================================================================

export interface PressCoverageRecord {
  id: string;
  slug: string;
  outletName: string;
  outletHindiName: string;
  edition: string;
  headlineHindi: string;
  headlineEnglish: string;
  publicationDate: string;
  publicationDateFormatted: string;
  eventDateFormatted: string;
  epaperUrl: string;
  clippingImageUrl: string;
  ceremonyPhotoUrl: string;
  photoCaptionHindi: string;
  photoCaptionEnglish: string;
  transcriptHindi: string;
  summaryEnglish: string;
  keyPeople: {
    name: string;
    role: string;
  }[];
  highlights: string[];
  blogSlug: string;
}

export const AMAR_UJALA_CONSTITUTION_DAY_2026: PressCoverageRecord = {
  id: "press-amar-ujala-2026-11-27",
  slug: "amar-ujala-prayagraj-constitution-day-celebration-2026",
  outletName: "Amar Ujala",
  outletHindiName: "अमर उजाला",
  edition: "Prayagraj City (Allahabad City)",
  headlineHindi: "किरण सिंह फाउंडेशन ने संविधान दिवस मनाया",
  headlineEnglish:
    "Kiran Singh Foundation Celebrates Constitution Day (Samvidhan Divas) in Prayagraj",
  publicationDate: "2026-11-27",
  publicationDateFormatted: "27 November 2026",
  eventDateFormatted: "Thursday, 26 November 2026",
  epaperUrl:
    "https://epaper.amarujala.com/allahabad-city/2026-11-27/01.html?format=img&ed_code=allahabad-city",
  clippingImageUrl:
    "/images/press/amar-ujala-prayagraj-constitution-day-2026-11-27.jpg",
  ceremonyPhotoUrl:
    "/images/press/constitution-day-2026-anuj-kumar-singh-alpana-dey.jpg",
  photoCaptionHindi:
    "अल्पना डे को सम्मानित करते किरण सिंह फाउंडेशन के सचिव अनुज कुमार सिंह। स्रोत : फाउंडेशन",
  photoCaptionEnglish:
    "Kiran Singh Foundation Secretary Mr. Anuj Kumar Singh felicitating Principal & Administrator Ms. Alpana Dey during Constitution Day celebrations.",
  transcriptHindi:
    "प्रयागराज। किरण सिंह फाउंडेशन ने बृहस्पतिवार को संविधान दिवस का आयोजन किया। इसमें भारतीय संविधान के महत्व पर प्रकाश डाला गया। फाउंडेशन के सचिव अनुज कुमार सिंह ने भारतीय संविधान की ऐतिहासिक पृष्ठभूमि और प्रस्तावना पर विस्तृत व्याख्यान दिया। उन्होंने हमारे पूर्वजों के दृष्टिकोण, सिद्धांतों और उद्देश्यों को स्पष्ट किया। कार्यक्रम के दौरान संविधान पर आधारित एक परीक्षा भी आयोजित की गई। इसमें छात्रा अनघा सिंह को उनके प्रदर्शन के लिए प्रशंसा पत्र से सम्मानित किया गया। प्रधानाचार्य और प्रशासक अल्पना डे को एक स्मृति चिह्न भेंट किया गया। इस मौके पर गीतिका जोशी भी मौजूद रहीं। संवाद",
  summaryEnglish:
    "Featured in Amar Ujala (Prayagraj City Edition, 27 Nov 2026): Kiran Singh Foundation organized Constitution Day (Samvidhan Divas) on Thursday, 26 November 2026, highlighting the importance of the Constitution of India. Foundation Secretary Mr. Anuj Kumar Singh delivered a detailed keynote lecture on the historical background and Preamble of the Indian Constitution, elucidating the vision, foundational principles, and objectives of its framers. A constitutional examination was conducted during the event, where student Anagha Singh was honored with a Certificate of Appreciation for her performance. Principal & Administrator Ms. Alpana Dey was presented a commemorative memento, with Ms. Geetika Joshi also in attendance.",
  keyPeople: [
    {
      name: "Shri Anuj Kumar Singh",
      role: "Secretary & Keynote Speaker, Kiran Singh Foundation",
    },
    {
      name: "Ms. Alpana Dey",
      role: "Principal & Administrator (Memento Honoree)",
    },
    {
      name: "Ms. Anagha Singh",
      role: "Student Awardee (Certificate of Appreciation — Constitution Day Quiz)",
    },
    {
      name: "Ms. Geetika Joshi",
      role: "Dignitary Present at Ceremony",
    },
  ],
  highlights: [
    "Keynote Lecture: Historical Background & Preamble of the Constitution of India by Secretary Shri Anuj Kumar Singh",
    "Constitution Day Examination conducted to cultivate constitutional literacy among students",
    "Student Felicitation: Anagha Singh awarded Certificate of Appreciation (प्रशंसा पत्र)",
    "Leadership Honour: Principal & Administrator Alpana Dey presented commemorative memento (स्मृति चिह्न)",
    "Published in Amar Ujala Prayagraj City ePaper (Page 01, 27 Nov 2026)",
  ],
  blogSlug: "amar-ujala-prayagraj-constitution-day-celebration-2026",
};

export const PRESS_COVERAGE_RECORDS_2026: PressCoverageRecord[] = [
  AMAR_UJALA_CONSTITUTION_DAY_2026,
];
