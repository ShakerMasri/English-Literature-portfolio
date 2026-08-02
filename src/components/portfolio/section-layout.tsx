import type { SectionId } from "@/portfolio/types";

type SectionTone = "page" | "surface" | "muted" | "inverse";

type SectionLayoutProps = Readonly<{
  id: Exclude<SectionId, "hero">;
  index: string;
  heading: string;
  eyebrow?: string;
  tone?: SectionTone;
  children: React.ReactNode;
}>;

const toneClasses: Record<SectionTone, string> = {
  page: "bg-page text-text",
  surface: "bg-surface text-text",
  muted: "bg-surface-muted text-text",
  inverse: "bg-inverse-surface text-inverse-text",
};

export function SectionLayout({
  id,
  index,
  heading,
  eyebrow,
  tone = "page",
  children,
}: SectionLayoutProps) {
  const isInverse = tone === "inverse";

  return (
    <section
      id={id}
      className={`scroll-mt-28 border-b border-border ${toneClasses[tone]}`}
    >
      <div className="mx-auto grid w-full max-w-shell gap-10 px-5 py-18 sm:px-8 sm:py-22 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-28">
        <header className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-bold tracking-[0.2em] ${
                isInverse ? "text-inverse-muted" : "text-accent-strong"
              }`}
            >
              {index}
            </span>
            <span
              aria-hidden="true"
              className={`h-px w-10 ${
                isInverse ? "bg-inverse-muted" : "bg-accent"
              }`}
            />
          </div>
          {eyebrow ? (
            <p
              className={`mt-5 text-xs font-semibold uppercase tracking-[0.17em] ${
                isInverse ? "text-inverse-muted" : "text-muted-text"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`mt-3 max-w-[12ch] font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl ${
              isInverse ? "text-inverse-text" : "text-ink"
            }`}
          >
            {heading}
          </h2>
        </header>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
