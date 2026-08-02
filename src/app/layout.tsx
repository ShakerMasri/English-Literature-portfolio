import type { Metadata } from "next";
import { ghazalMasriPortfolio } from "@/portfolio/clients/ghazal-masri";
import "./globals.css";

export const metadata: Metadata = {
  title: ghazalMasriPortfolio.metadata.title,
  description: ghazalMasriPortfolio.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={ghazalMasriPortfolio.metadata.locale}>
      <body
        style={ghazalMasriPortfolio.theme.cssVariables}
        className="min-h-full bg-page font-sans text-text antialiased"
      >
        {children}
      </body>
    </html>
  );
}
