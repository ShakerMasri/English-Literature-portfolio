"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavigationItem } from "@/portfolio/types";

type PortfolioMenuProps = Readonly<{
  navigationItems: readonly NavigationItem[];
}>;

export function PortfolioMenu({ navigationItems }: PortfolioMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      buttonRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node) || containerRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  if (navigationItems.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative print:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border bg-surface px-3 text-sm font-semibold text-text outline-none transition-[background-color,border-color,color] duration-200 hover:border-accent hover:bg-soft-accent hover:text-ink focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="relative block h-4 w-[1.125rem] shrink-0"
        >
          <span
            className={`absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? "translate-y-[0.45rem] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[0.45rem] block h-px w-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? "-translate-y-[0.45rem] -rotate-45" : ""
            }`}
          />
        </span>
        <span>Menu</span>
      </button>

      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={`absolute right-0 top-[calc(100%+0.6rem)] z-50 w-[min(20rem,calc(100vw-2.5rem))] origin-top-right border border-border bg-surface p-2 shadow-[var(--portfolio-shadow-hero)] transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <nav aria-label="Primary navigation">
          <ul className="grid gap-1">
            {navigationItems.map((item) => (
              <li key={item.section}>
                <a
                  href={`#${item.section}`}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                  className="group flex min-h-11 items-center justify-between gap-4 rounded-sm px-3 py-2 text-sm font-medium text-muted-text outline-none transition-[background-color,color] duration-200 hover:bg-soft-accent hover:text-ink focus-visible:bg-soft-accent focus-visible:text-ink focus-visible:ring-3 focus-visible:ring-focus motion-reduce:transition-none"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className="font-serif text-base text-accent-strong transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
