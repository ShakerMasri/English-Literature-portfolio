import type {
  PortfolioTheme,
  ThemeCssVariables,
} from "@/portfolio/types";

const colors = {
  page: "#F4F7FA",
  surface: "#FFFCF7",
  surfaceMuted: "#EAF0F6",
  ink: "#10233F",
  text: "#172033",
  mutedText: "#526074",
  accent: "#2F67A8",
  accentStrong: "#255487",
  softAccent: "#DCE7F2",
  border: "#C8D4E1",
  focus: "#0B63CE",
} as const;

const typography = {
  display: 'ui-serif, Georgia, Cambria, "Times New Roman", serif',
  body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

const cssVariables: ThemeCssVariables = {
  "--portfolio-page": colors.page,
  "--portfolio-surface": colors.surface,
  "--portfolio-surface-muted": colors.surfaceMuted,
  "--portfolio-ink": colors.ink,
  "--portfolio-text": colors.text,
  "--portfolio-muted-text": colors.mutedText,
  "--portfolio-accent": colors.accent,
  "--portfolio-accent-strong": colors.accentStrong,
  "--portfolio-soft-accent": colors.softAccent,
  "--portfolio-border": colors.border,
  "--portfolio-focus": colors.focus,
  "--portfolio-font-display": typography.display,
  "--portfolio-font-body": typography.body,
  "--portfolio-shell": "72rem",
  "--portfolio-reading": "68ch",
};

export const editorialBlueTheme = {
  id: "editorial-blue",
  colors,
  typography,
  layout: {
    shell: "72rem",
    reading: "68ch",
  },
  cssVariables,
} satisfies PortfolioTheme;
