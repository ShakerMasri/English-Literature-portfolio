"use client";

import { useSyncExternalStore } from "react";
import {
  isColorTheme,
  THEME_STORAGE_KEY,
  type ColorTheme,
} from "@/components/theme/theme-constants";

const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

type ThemeSnapshot = ColorTheme | null;

function getSystemTheme(): ColorTheme {
  return window.matchMedia(DARK_MODE_QUERY).matches ? "dark" : "light";
}

function getDocumentTheme(): ColorTheme {
  const documentTheme = document.documentElement.dataset.theme;
  return isColorTheme(documentTheme) ? documentTheme : getSystemTheme();
}

function getThemeSnapshot(): ThemeSnapshot {
  return getDocumentTheme();
}

function getServerThemeSnapshot(): ThemeSnapshot {
  return null;
}

function applyTheme(
  theme: ColorTheme,
  preference: "system" | "user",
) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = preference;
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleThemeChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    const nextTheme = isColorTheme(event.newValue)
      ? event.newValue
      : getSystemTheme();

    applyTheme(nextTheme, isColorTheme(event.newValue) ? "user" : "system");
    onStoreChange();
  };

  const colorSchemeQuery = window.matchMedia(DARK_MODE_QUERY);
  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (document.documentElement.dataset.themePreference !== "system") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light", "system");
    onStoreChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorage);
  colorSchemeQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
    colorSchemeQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const isDark = theme === "dark";
  const nextTheme: ColorTheme = isDark ? "light" : "dark";
  const accessibleLabel = theme
    ? `Switch to ${nextTheme} mode`
    : "Change color theme";

  function handleToggle() {
    const currentTheme = getDocumentTheme();
    const updatedTheme: ColorTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(updatedTheme, "user");

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, updatedTheme);
    } catch {
      // The visual preference still works when storage is unavailable.
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={accessibleLabel}
      aria-pressed={theme === null ? undefined : isDark}
      className="theme-toggle inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-accent bg-page px-3 text-sm font-semibold text-text outline-none transition-[background-color,border-color,color] duration-200 hover:border-accent hover:bg-soft-accent hover:text-ink focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        className="w-4 text-center font-serif text-lg leading-none"
      >
        {theme === null ? "◐" : isDark ? "☾" : "☼"}
      </span>
      <span className="hidden sm:inline">Theme</span>
    </button>
  );
}
