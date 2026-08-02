import type {
  PortfolioTheme,
  PortfolioThemePalette,
  ThemeCssVariables,
} from "@/portfolio/types";

const lightPalette = {
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
  inverseSurface: "#10233F",
  inverseText: "#FFFCF7",
  inverseMuted: "#DCE7F2",
  shadowCard: "0 18px 55px rgba(16, 35, 63, 0.06)",
  shadowCardHover: "0 24px 70px rgba(16, 35, 63, 0.1)",
  shadowHero: "0 28px 90px rgba(16, 35, 63, 0.12)",
  shadowHeader: "0 1px 0 rgba(16, 35, 63, 0.06)",
} as const satisfies PortfolioThemePalette;

const darkPalette = {
  page: "#0B1220",
  surface: "#111C2E",
  surfaceMuted: "#16243A",
  ink: "#F4F7FB",
  text: "#DCE5F0",
  mutedText: "#A9B7C8",
  accent: "#78AEE6",
  accentStrong: "#9CC7F2",
  softAccent: "#243B57",
  border: "#30445E",
  focus: "#8FC7FF",
  inverseSurface: "#06101F",
  inverseText: "#F7FAFE",
  inverseMuted: "#B9CCE0",
  shadowCard: "0 18px 55px rgba(0, 0, 0, 0.22)",
  shadowCardHover: "0 24px 70px rgba(0, 0, 0, 0.32)",
  shadowHero: "0 28px 90px rgba(0, 0, 0, 0.34)",
  shadowHeader: "0 1px 0 rgba(0, 0, 0, 0.34)",
} as const satisfies PortfolioThemePalette;

const typography = {
  display: 'ui-serif, Georgia, Cambria, "Times New Roman", serif',
  body: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

function createPaletteVariables(
  mode: "light" | "dark",
  palette: PortfolioThemePalette,
): ThemeCssVariables {
  return {
    [`--portfolio-${mode}-page`]: palette.page,
    [`--portfolio-${mode}-surface`]: palette.surface,
    [`--portfolio-${mode}-surface-muted`]: palette.surfaceMuted,
    [`--portfolio-${mode}-ink`]: palette.ink,
    [`--portfolio-${mode}-text`]: palette.text,
    [`--portfolio-${mode}-muted-text`]: palette.mutedText,
    [`--portfolio-${mode}-accent`]: palette.accent,
    [`--portfolio-${mode}-accent-strong`]: palette.accentStrong,
    [`--portfolio-${mode}-soft-accent`]: palette.softAccent,
    [`--portfolio-${mode}-border`]: palette.border,
    [`--portfolio-${mode}-focus`]: palette.focus,
    [`--portfolio-${mode}-inverse-surface`]: palette.inverseSurface,
    [`--portfolio-${mode}-inverse-text`]: palette.inverseText,
    [`--portfolio-${mode}-inverse-muted`]: palette.inverseMuted,
    [`--portfolio-${mode}-shadow-card`]: palette.shadowCard,
    [`--portfolio-${mode}-shadow-card-hover`]: palette.shadowCardHover,
    [`--portfolio-${mode}-shadow-hero`]: palette.shadowHero,
    [`--portfolio-${mode}-shadow-header`]: palette.shadowHeader,
  } as ThemeCssVariables;
}

const cssVariables: ThemeCssVariables = {
  ...createPaletteVariables("light", lightPalette),
  ...createPaletteVariables("dark", darkPalette),
  "--portfolio-font-display": typography.display,
  "--portfolio-font-body": typography.body,
  "--portfolio-shell": "72rem",
  "--portfolio-reading": "68ch",
};

export const editorialBlueTheme = {
  id: "editorial-blue",
  palettes: {
    light: lightPalette,
    dark: darkPalette,
  },
  typography,
  layout: {
    shell: "72rem",
    reading: "68ch",
  },
  cssVariables,
} satisfies PortfolioTheme;
