// -----------------------------------------------------------------------------
// Single source of truth for all CV content.
// Keeping content out of the components makes every section reusable and the
// whole CV editable from one place.
// -----------------------------------------------------------------------------

export const profile = {
  firstName: "Dania",
  lastName: "Abdul Kareem",
  eyebrow: "Biomedical Portfolio",
  title: "Biomedical Engineering",
  introSummary:
    "Creative biomedical graduate with a passion for AI, medical technology, design, and modern software tools.",
  summary:
    "A motivated and creative Biomedical Engineering graduate from Al-Bayan University, Baghdad. Dania blends technical knowledge with creativity, communication, and a genuine passion for AI, software development, and healthcare technology.",
  status: "Open to Work",
};

export const contacts = [
  { icon: "phone", label: "Phone", value: "07806646544", href: "tel:07806646544" },
  {
    icon: "mail",
    label: "Email",
    value: "danyaabdarkareem930@gmail.com",
    href: "mailto:danyaabdarkareem930@gmail.com",
  },
  { icon: "mapPin", label: "Location", value: "Baghdad, Iraq", href: null },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const education = [
  {
    degree: "Bachelor's Degree in Biomedical Engineering",
    school: "Al-Bayan University · Baghdad, Iraq",
    years: "2025 – 2026",
  },
];

export const skills = {
  technical: [
    "Computer Skills",
    "Microsoft Office",
    "AI Fundamentals",
    "Research",
    "Data Organization",
    "Canva",
    "Photoshop",
  ],
  professional: [
    "Fast Learning",
    "Problem Solving",
    "Teamwork",
    "Leadership",
    "Communication",
    "Time Management",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "English", level: "Very Good", value: 80 },
];

export const interests = [
  { icon: "palette", label: "Advanced Drawing & Visual Art" },
  { icon: "bookOpen", label: "Reading & Self-Development" },
  { icon: "trendingUp", label: "Career Growth & Innovation" },
];

export const experience = [
  {
    title: "Biomedical Graduate",
    tag: "AI & Medical Technology Enthusiast",
    period: "Open to Work",
    desc: "Passionate about using technology to improve healthcare. Strong visual creativity, excellent communication, and the ability to learn quickly make Dania suitable for tech, healthcare, and creative roles.",
  },
];

export const careerDirection = [
  {
    title: "Front-End Potential",
    tag: "Creative UI Thinking",
    desc: "Strong visual sense, passion for aesthetics, and creativity — ideal for building clean, elegant user interfaces.",
  },
  {
    title: "AI & Healthcare",
    tag: "Smart Medical Solutions",
    desc: "A biomedical background paired with an interest in AI gives Dania a strong foundation for digital health and smart medical technology.",
  },
];

export const courses = [
  { name: "Artificial Intelligence Training Course", tag: "AI Course" },
];
