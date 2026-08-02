import { PortfolioHeader } from "@/components/portfolio/portfolio-header";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import {
  getRenderableSectionIds,
  getVisibleNavigationItems,
} from "@/portfolio/section-registry";
import type { PortfolioDefinition } from "@/portfolio/types";

type PortfolioPageProps = Readonly<{
  portfolio: PortfolioDefinition;
}>;

export function PortfolioPage({ portfolio }: PortfolioPageProps) {
  const renderableSections = getRenderableSectionIds(portfolio);
  const navigationItems = getVisibleNavigationItems(
    portfolio,
    renderableSections,
  );

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 bg-ink px-4 py-3 font-semibold text-surface outline-none focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3 focus-visible:ring-offset-page"
      >
        Skip to main content
      </a>

      <PortfolioHeader
        identity={portfolio.content.identity}
        navigationItems={navigationItems}
      />

      <main id="main-content">
        {renderableSections.map((section) => {
          const contentIndex = renderableSections
            .slice(0, renderableSections.indexOf(section) + 1)
            .filter((candidate) => candidate !== "hero").length;

          return (
            <PortfolioSection
              key={section}
              section={section}
              portfolio={portfolio}
              index={
                section === "hero"
                  ? undefined
                  : String(contentIndex).padStart(2, "0")
              }
            />
          );
        })}
      </main>

      <footer className="bg-ink text-surface">
        <div className="mx-auto flex w-full max-w-shell flex-col gap-2 border-t border-soft-accent/30 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="font-serif text-base font-semibold">
            {portfolio.content.identity.name}
          </p>
          <p className="text-soft-accent">
            {portfolio.content.identity.role} · {portfolio.content.identity.institution}
          </p>
        </div>
      </footer>
    </>
  );
}
