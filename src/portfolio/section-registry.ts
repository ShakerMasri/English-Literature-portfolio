import type {
  NavigationItem,
  PortfolioDefinition,
  SectionId,
} from "@/portfolio/types";

function hasSectionContent(
  section: SectionId,
  portfolio: PortfolioDefinition,
): boolean {
  const { content } = portfolio;

  switch (section) {
    case "hero":
      return Boolean(content.identity.name && content.hero.summary);
    case "about":
      return content.about.paragraphs.length > 0;
    case "education":
      return content.education.length > 0;
    case "interests":
      return content.interests.length > 0;
    case "experience":
      return content.experience.length > 0;
    case "volunteering":
      return content.volunteering.length > 0;
    case "skills":
      return content.skillGroups.some((group) => group.items.length > 0);
    case "languages":
      return content.languages.length > 0;
    case "certificates":
      return content.certificates.length > 0;
    case "cv":
      return Boolean(content.cv?.href);
    case "contact":
      return content.contact.links.length > 0;
  }
}

export function getRenderableSectionIds(
  portfolio: PortfolioDefinition,
): readonly SectionId[] {
  const enabledSections = new Set(portfolio.sections.enabled);

  return portfolio.sections.order.filter(
    (section) =>
      enabledSections.has(section) && hasSectionContent(section, portfolio),
  );
}

export function getVisibleNavigationItems(
  portfolio: PortfolioDefinition,
  renderableSections: readonly SectionId[],
): readonly NavigationItem[] {
  const visibleSections = new Set(renderableSections);

  return portfolio.navigation.filter((item) =>
    visibleSections.has(item.section),
  );
}
