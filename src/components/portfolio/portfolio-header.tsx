import { PortfolioMenu } from "@/components/portfolio/portfolio-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { NavigationItem, PortfolioContent } from "@/portfolio/types";

type PortfolioHeaderProps = Readonly<{
  identity: PortfolioContent["identity"];
  navigationItems: readonly NavigationItem[];
}>;

export function PortfolioHeader({
  identity,
  navigationItems,
}: PortfolioHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 shadow-[var(--portfolio-shadow-header)] backdrop-blur-sm">
      <div className="mx-auto grid w-full max-w-shell grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:px-8 lg:px-12 lg:py-4">
        <a
          href="#top"
          className="group inline-flex min-h-11 min-w-0 items-center gap-3 rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3 focus-visible:ring-offset-surface"
          aria-label={`${identity.name}, back to top`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center border border-inverse-surface bg-inverse-surface font-serif text-base font-semibold text-inverse-text transition-colors duration-200 group-hover:border-accent-strong group-hover:bg-accent-strong group-hover:text-surface motion-reduce:transition-none"
          >
            {identity.name.charAt(0)}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-semibold leading-none tracking-[-0.02em] text-ink">
              {identity.name}
            </span>
            <span className="mt-1 hidden truncate text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-text sm:block">
              {identity.role}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <PortfolioMenu navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
}
