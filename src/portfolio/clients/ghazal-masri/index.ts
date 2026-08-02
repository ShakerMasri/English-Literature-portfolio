import type { PortfolioDefinition } from "@/portfolio/types";
import { ghazalMasriContent } from "./content";
import { ghazalMasriMetadata } from "./metadata";
import { ghazalMasriNavigation } from "./navigation";
import { ghazalMasriSections } from "./sections";
import { editorialBlueTheme } from "./theme";

export const ghazalMasriPortfolio = {
  content: ghazalMasriContent,
  metadata: ghazalMasriMetadata,
  navigation: ghazalMasriNavigation,
  sections: ghazalMasriSections,
  theme: editorialBlueTheme,
} satisfies PortfolioDefinition;
