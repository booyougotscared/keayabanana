// ─────────────────────────────────────────────────────────────
// All of your portfolio's content lives in this one file.
// Edit the values below — the layout will update automatically.
// Anything wrapped in [BRACKETS] is a placeholder pulled straight
// from your resume gaps — swap it for your own words.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Keaya Chua",
  initials: "KC",
  photo: "/profile/keaya-profile.jpg",
  role: "SMU Information Systems Student",
  tagline:
  "I design and build digital products at the intersection of usability, data, and engineering — currently exploring UX design, cloud platforms, and solution architecture.",
  location: "Singapore",
  email: "chuakeaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/keayachua",
  resumeUrl: "", // PLACEHOLDER — add a link/path to a downloadable PDF resume if you want a "Download CV" button to work.
};

// PLACEHOLDER — a short personal bio in your own words (2–4 sentences).
// The facts below (skills / education / leadership) are pulled from your resume;
// this paragraph is the one thing you should personalize before sharing the site.
export const aboutBio = [
  "I'm a Year 3 Information Systems student at Singapore Management University, currently interning as a UX designer at GovTech. My path has wound through food science, data-validation research at A*STAR, and full-stack side projects — a roundabout way of saying I like understanding a problem from a few angles before building for it.",
  "I work best in the space between design and engineering — close enough to users to know what they need, close enough to the system to help build it. That's why UX, cloud, and solution architecture all pull at me: they're different views of the same problem. I bring a designer's eye to technical work, and enough hands-on building to keep design decisions grounded in what's actually shippable.",
];

export const skills = {
  Programming: ["Python","Java","JavaScript", "SQL", "HTML", "CSS"],
  "Cloud & Tools": ["Azure", "Firebase", "Git / GitHub", "OutSystems"],
  Frameworks: ["React Native", "Vue.js"],
  Other: ["Excel", "Figma","Tableau"],
};

export const experience = [
  {
    org: "Government Technology Agency of Singapore (GovTech)",
    title: "UI/UX Designer",
    period: "June 2026 – Present",
    bullets: [
      "Worked within cross-functional product and engineering teams supporting digital services used by public sector stakeholders.",
      "Collaborated with developers, product managers and technical stakeholders to analyse requirements and improve platform usability.",
      "Applied data-driven approaches to evaluate user behaviour and support product decisions.",
    ],
  },
  {
    org: "Agency for Science, Technology and Research (A*STAR)",
    title: "Research and Development Intern",
    period: "Sep 2023 – Feb 2024",
    bullets: [
      "Processed and validated experimental datasets to ensure accuracy and consistency across multiple trials.",
      "Developed Excel-based reporting dashboards and statistical summaries for analysis and decision-making.",
    ],
  },
];

export const education = [
  {
    org: "Singapore Management University (SMU)",
    title: "Bachelor of Science – Information Systems",
    period: "August 2024 – Present",
    bullets: ["Activities: SMU Ellipsis, SMU Eurhythmix, Project Wan Mai XV"],
  },
  {
    org: "Singapore Polytechnic",
    title: "Diploma in Food Science and Technology",
    period: "April 2021 – May 2024",
    bullets: [
      "A*STAR Science Award (Polytechnic), 2022 & 2023",
      "Director's Honor Roll, 2022",
    ],
  },
];

export const leadership = [
  {
    org: "SMU Eurhythmix (Dance Club)",
    title: "Vice-President",
    period: "Oct 2025 – Present",
  },
  {
    org: "SMU Ellipsis (Student Body)",
    title: "Events Executive · VP of SCIS Freshman Orientation Camp",
    period: "Dec 2024 – Dec 2025",
  },
];

// Captions follow "Attraction, City" — the attraction names for a few of these
// are best-effort guesses, so double-check the ones marked below.
export const photography = {
  intro:
    "When I'm not building things, I'm usually behind a camera. Here are a few frames from my recent travels around Korea!",
  photos: [
    {
      src: "/photos/sea-terrace.jpg",
      alt: "Sea view from a mosaic-tiled terrace between two buildings",
      caption: "Huinnyeoul Culture Village, Busan", // VERIFY attraction
      orientation: "landscape",
    },
    {
      src: "/photos/gyeongju-gate.jpg",
      alt: "Portrait under a traditional Korean hanok gate",
      caption: "Gyochon Hanok Village, Gyeongju", // VERIFY attraction
      orientation: "landscape",
    },
    {
      src: "/photos/woljeonggyo-bridge.jpg",
      alt: "Woljeonggyo Bridge over a river at dusk",
      caption: "Woljeonggyo Bridge, Gyeongju",
      orientation: "landscape",
    },
    {
      src: "/photos/gyeongju-stream.jpg",
      alt: "Golden-hour light on a stream framed by trees and a wooden lattice railing",
      caption: "Woljeonggyo, Gyeongju", // VERIFY attraction
      orientation: "landscape",
    },
    {
      src: "/photos/pavilion-roof.jpg",
      alt: "Close-up of a traditional Korean pavilion roof structure",
      caption: "Donggung Palace, Gyeongju", // VERIFY attraction
      orientation: "portrait",
    },
    {
      src: "/photos/donggung-night.jpg",
      alt: "Illuminated pavilion reflected in a pond at night",
      caption: "Donggung Palace, Gyeongju",
      orientation: "landscape",
    },
    {
      src: "/photos/jusangjeolli-cliffs.jpg",
      alt: "Waves crashing against hexagonal basalt column cliffs",
      caption: "Jusangjeolli Cliffs, Jeju",
      orientation: "landscape",
    },
    {
      src: "/photos/jeju-coast-pines.jpg",
      alt: "Rugged basalt coastline and turquoise surf framed by pine trees",
      caption: "Jusangjeolli Cliffs, Jeju", // VERIFY attraction
      orientation: "landscape",
    },
  ],
};

export const projects = [
  {
    title: "FYND",
    tech: ["React Native", "Full-Stack Development", "Google Maps API", "UI/UX Design"],
    description:
      "Designed and built a mobile app with interactive maps, browsing, and event listings.",
    bullets: [
      "Built the app end to end in React Native, developing both the front end and back-end integrations.",
      "Deployed the Google Maps API to power location search and interactive map views.",
      "Designed and tested the map, browsing, and event-listing flows, iterating on layout and navigation until testers could find an event without help.",
    ],
    // PLACEHOLDER — add a live link, case study, or repo if you have one.
    link: "",
    color: "blue",
  },
  {
    title: "Powertrack",
    tech: ["Vue.js", "JavaScript", "Firebase", "Google Maps API", "Git"],
    description:
      "Built a fitness web app that generates workout routines based on user goals, intensity, and duration.",
    bullets: [
      "Implemented workout logic, exercise library, and progress tracking with charts and stats.",
      "Integrated Firebase Auth, database, and hosting, and added route features with Google Maps API.",
    ],
    link: "", // PLACEHOLDER
    color: "blue",
  },
  {
    title: "TeamFlow",
    tech: ["Figma", "UX Research", "A/B Testing", "Statistical Analysis"],
    description:
      "Designed a group project management app concept focused on delegation, communication, and accountability.",
    bullets: [
      "Built personas and high-fidelity prototypes for task management, feedback, and personality-based features.",
      "Ran A/B testing with 60 undergraduates and analysed results using t-tests and Mann–Whitney U tests.",
    ],
    link: "", // PLACEHOLDER
    color: "blue",
  },
];
