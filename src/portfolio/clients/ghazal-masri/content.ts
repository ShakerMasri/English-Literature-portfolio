import type { PortfolioContent } from "@/portfolio/types";

export const ghazalMasriContent = {
  identity: {
    name: "Ghazal Masri",
    role: "English Literature Student",
    institution: "An-Najah National University",
  },
  hero: {
    eyebrow: "English Literature · An-Najah National University",
    summary:
      "Exploring nineteenth-century and Gothic literature through close reading, critical thinking, and thoughtful analysis.",
    opportunityFocus:
      "Building an academic portfolio for internship and scholarship opportunities.",
  },
  about: {
    heading: "About Ghazal",
    paragraphs: [
      "Ghazal Masri is an English Literature student at An-Najah National University with a particular interest in nineteenth-century and Gothic literature.",
      "She values literature for its ability to strengthen critical thinking and sharpen analysis. She is especially drawn to writing whose deeper meanings become clearer through careful reading and interpretation.",
    ],
    strengths: [
      "Hardworking",
      "Curious and eager to learn",
      "Sociable",
      "Responsible",
      "Open to new ideas",
    ],
  },
  education: [
    {
      institution: "An-Najah National University",
      field: "English Literature",
      startYear: 2024,
      endYear: 2028,
      endYearLabel: "Expected graduation",
    },
  ],
  interests: [
    {
      title: "Nineteenth-century literature",
    },
    {
      title: "Gothic literature",
      description:
        "Drawn to stories whose deeper meanings emerge through repeated reading and analysis.",
    },
    {
      title: "Close reading and textual analysis",
      description:
        "Interested in looking beyond a first reading to understand the complete picture of a text.",
    },
  ],
  experience: [],
  skillGroups: [
    {
      title: "Literary and academic",
      items: [
        "Literary analysis",
        "Critical thinking",
        "Close reading",
        "Academic writing",
        "Research",
        "Textual interpretation",
        "Analytical reading",
      ],
    },
    {
      title: "Communication and collaboration",
      items: [
        "English communication",
        "Teamwork and collaboration",
        "Interpersonal communication",
        "Group discussion",
        "Event organization",
        "Student engagement",
        "Presentation skills",
      ],
    },
  ],
  languages: [
    { name: "Arabic" },
    { name: "English" },
    { name: "French", level: "A2" },
  ],
  certificates: [],
  contact: {
    heading: "Connect",
    introduction:
      "View Ghazal’s professional profile and approved public updates on LinkedIn.",
    links: [
      {
        kind: "linkedin",
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/ghazal-masri-062b132a0/",
      },
    ],
  },
} satisfies PortfolioContent;
