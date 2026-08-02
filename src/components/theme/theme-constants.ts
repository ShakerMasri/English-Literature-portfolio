export const THEME_STORAGE_KEY = "portfolio-color-theme";

export const COLOR_THEMES = ["light", "dark"] as const;

export type ColorTheme = (typeof COLOR_THEMES)[number];

export function isColorTheme(value: unknown): value is ColorTheme {
  return COLOR_THEMES.includes(value as ColorTheme);
}
