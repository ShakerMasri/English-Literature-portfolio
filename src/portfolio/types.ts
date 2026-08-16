import type { CSSProperties } from "react";

export type SectionId =
  | "hero"
  | "about"
  | "education"
  | "interests"
  | "experience"
  | "volunteering"
  | "skills"
  | "languages"
  | "certificates"
  | "cv"
  | "contact";

export type NavigationItem = Readonly<{
  section: Exclude<SectionId, "hero">;
  label: string;
}>;

export type EducationEntry = Readonly<{
  institution: string;
  field: string;
  startYear: number;
  endYear: number;
  endYearLabel: string;
}>;

export type InterestItem = Readonly<{
  title: string;
  description?: string;
}>;

export type ExperienceEntry = Readonly<{
  title: string;
  organization: string;
  category: "academic" | "volunteering" | "student-activity" | "work";
  period?: string;
  summary: string;
  details?: readonly string[];
}>;

export type SkillGroup = Readonly<{
  title: string;
  items: readonly string[];
}>;

export type LanguageEntry = Readonly<{
  name: string;
  level?: string;
}>;

export type CertificateEntry = Readonly<{
  kind: "certificate" | "workshop";
  title: string;
  issuer: string;
  date?: string;
  summary?: string;
  credentialUrl?: string;
}>;

export type CvAsset = Readonly<{
  href: string;
  label: string;
}>;

export type ContactLink = Readonly<{
  kind: "linkedin" | "email";
  label: string;
  href: string;
}>;

export type PortfolioContent = Readonly<{
  identity: Readonly<{
    name: string;
    role: string;
    institution: string;
  }>;
  hero: Readonly<{
    eyebrow: string;
    summary: string;
    opportunityFocus: string;
  }>;
  about: Readonly<{
    heading: string;
    paragraphs: readonly string[];
    strengths: readonly string[];
  }>;
  education: readonly EducationEntry[];
  interests: readonly InterestItem[];
  experience: readonly ExperienceEntry[];
  volunteering: readonly ExperienceEntry[];
  skillGroups: readonly SkillGroup[];
  languages: readonly LanguageEntry[];
  certificates: readonly CertificateEntry[];
  cv?: CvAsset;
  contact: Readonly<{
    heading: string;
    introduction: string;
    links: readonly ContactLink[];
  }>;
}>;

export type PortfolioSections = Readonly<{
  enabled: readonly SectionId[];
  order: readonly SectionId[];
}>;

export type PortfolioMetadata = Readonly<{
  title: string;
  description: string;
  locale: "en";
  siteUrl: `https://${string}`;
}>;

export type ThemeCssVariables = CSSProperties &
  Record<`--portfolio-${string}`, string>;

export type PortfolioThemePalette = Readonly<{
  page: string;
  surface: string;
  surfaceMuted: string;
  ink: string;
  text: string;
  mutedText: string;
  accent: string;
  accentStrong: string;
  softAccent: string;
  border: string;
  focus: string;
  inverseSurface: string;
  inverseText: string;
  inverseMuted: string;
  shadowCard: string;
  shadowCardHover: string;
  shadowHero: string;
  shadowHeader: string;
}>;

export type PortfolioTheme = Readonly<{
  id: "editorial-blue";
  palettes: Readonly<{
    light: PortfolioThemePalette;
    dark: PortfolioThemePalette;
  }>;
  typography: Readonly<{
    display: string;
    body: string;
  }>;
  layout: Readonly<{
    shell: string;
    reading: string;
  }>;
  cssVariables: ThemeCssVariables;
}>;

export type PortfolioDefinition = Readonly<{
  content: PortfolioContent;
  metadata: PortfolioMetadata;
  navigation: readonly NavigationItem[];
  sections: PortfolioSections;
  theme: PortfolioTheme;
}>;
