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
      <div className="mx-auto grid w-full max-w-shell grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 px-5 py-3 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-x-4 lg:px-12 lg:py-4">
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

        <div className="justify-self-end lg:col-start-2">
          <ThemeToggle />
        </div>

        {navigationItems.length > 0 ? (
          <nav
            aria-label="Primary navigation"
            className="col-span-2 -mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex w-max min-w-full items-center gap-1 lg:min-w-0 lg:justify-end">
              {navigationItems.map((item) => (
                <li key={item.section}>
                  <a
                    href={`#${item.section}`}
                    className="relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-3 text-sm font-medium text-muted-text outline-none transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent-strong after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100 focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none motion-reduce:after:transition-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
