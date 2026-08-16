import type { Metadata } from "next";
import { THEME_STORAGE_KEY } from "@/components/theme/theme-constants";
import { ghazalMasriPortfolio } from "@/portfolio/clients/ghazal-masri";
import "./globals.css";

const siteUrl = new URL(ghazalMasriPortfolio.metadata.siteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: ghazalMasriPortfolio.metadata.title,
  description: ghazalMasriPortfolio.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: ghazalMasriPortfolio.metadata.title,
    description: ghazalMasriPortfolio.metadata.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: ghazalMasriPortfolio.metadata.title,
    description: ghazalMasriPortfolio.metadata.description,
  },
};

const themeInitializationScript = `
(() => {
  const darkModeQuery = "(prefers-color-scheme: dark)";
  let theme = window.matchMedia(darkModeQuery).matches ? "dark" : "light";
  let preference = "system";

  try {
    const storedTheme = window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (storedTheme === "light" || storedTheme === "dark") {
      theme = storedTheme;
      preference = "user";
    }
  } catch {
    // Continue with the operating-system preference when storage is unavailable.
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = preference;
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={ghazalMasriPortfolio.metadata.locale}
      style={ghazalMasriPortfolio.theme.cssVariables}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="min-h-full bg-page font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
