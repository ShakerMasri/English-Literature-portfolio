import {
  getRenderableSectionIds,
  getVisibleNavigationItems,
} from "@/portfolio/section-registry";
import type { PortfolioDefinition, SectionId } from "@/portfolio/types";

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
        className="sr-only fixed left-4 top-4 z-50 rounded-md bg-ink px-4 py-3 text-surface focus:not-sr-only"
      >
        Skip to main content
      </a>

      <header className="border-b border-border bg-surface/95">
        <div className="mx-auto flex w-full max-w-shell items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="font-serif text-lg font-semibold tracking-tight text-ink outline-none focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-focus"
          >
            {portfolio.content.identity.name}
          </a>

          {navigationItems.length > 0 ? (
            <nav aria-label="Primary navigation">
              <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm text-muted-text">
                {navigationItems.map((item) => (
                  <li key={item.section}>
                    <a
                      href={`#${item.section}`}
                      className="rounded-sm underline-offset-4 transition-colors hover:text-accent-strong hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-focus"
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

      <main id="main-content">
        {renderableSections.map((section) => (
          <PortfolioSection
            key={section}
            section={section}
            portfolio={portfolio}
          />
        ))}
      </main>
    </>
  );
}

type PortfolioSectionProps = Readonly<{
  section: SectionId;
  portfolio: PortfolioDefinition;
}>;

function PortfolioSection({ section, portfolio }: PortfolioSectionProps) {
  const { content } = portfolio;

  switch (section) {
    case "hero":
      return (
        <section id="top" className="border-b border-border bg-surface">
          <div className="mx-auto grid min-h-[70svh] w-full max-w-shell content-center gap-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-strong">
              {content.hero.eyebrow}
            </p>
            <div className="max-w-reading space-y-7">
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl">
                {content.identity.name}
              </h1>
              <p className="text-xl leading-9 text-text sm:text-2xl sm:leading-10">
                {content.hero.summary}
              </p>
              <p className="max-w-2xl text-base leading-7 text-muted-text sm:text-lg">
                {content.hero.opportunityFocus}
              </p>
            </div>
          </div>
        </section>
      );

    case "about":
      return (
        <ContentSection id="about" heading={content.about.heading}>
          <div className="max-w-reading space-y-5 text-lg leading-8 text-text">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Personal strengths">
            {content.about.strengths.map((strength) => (
              <li
                key={strength}
                className="rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium text-ink"
              >
                {strength}
              </li>
            ))}
          </ul>
        </ContentSection>
      );

    case "education":
      return (
        <ContentSection id="education" heading="Education">
          <div className="grid gap-5">
            {content.education.map((entry) => (
              <article
                key={`${entry.institution}-${entry.field}`}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {entry.field}
                </h3>
                <p className="mt-2 text-base font-medium text-accent-strong">
                  {entry.institution}
                </p>
                <p className="mt-3 text-sm text-muted-text">
                  {entry.startYear}–{entry.endYear} · {entry.endYearLabel}
                </p>
              </article>
            ))}
          </div>
        </ContentSection>
      );

    case "interests":
      return (
        <ContentSection id="interests" heading="Academic interests">
          <div className="grid gap-5 md:grid-cols-3">
            {content.interests.map((interest) => (
              <article
                key={interest.title}
                className="border-l-2 border-accent pl-5"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {interest.title}
                </h3>
                {interest.description ? (
                  <p className="mt-3 leading-7 text-muted-text">
                    {interest.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </ContentSection>
      );

    case "experience":
      return (
        <ContentSection id="experience" heading="Experience">
          <div className="grid gap-5">
            {content.experience.map((entry) => (
              <article
                key={`${entry.organization}-${entry.title}-${entry.startDate}`}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {entry.title}
                </h3>
                <p className="mt-1 font-medium text-accent-strong">
                  {entry.organization}
                </p>
                <p className="mt-3 leading-7 text-text">{entry.summary}</p>
              </article>
            ))}
          </div>
        </ContentSection>
      );

    case "skills":
      return (
        <ContentSection id="skills" heading="Skills">
          <div className="grid gap-8 md:grid-cols-2">
            {content.skillGroups.map((group) => (
              <section key={group.title} aria-labelledby={`skills-${slugify(group.title)}`}>
                <h3
                  id={`skills-${slugify(group.title)}`}
                  className="font-serif text-xl font-semibold text-ink"
                >
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="border-b border-border pb-3 text-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </ContentSection>
      );

    case "languages":
      return (
        <ContentSection id="languages" heading="Languages">
          <ul className="grid gap-4 sm:grid-cols-3">
            {content.languages.map((language) => (
              <li
                key={language.name}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="font-serif text-xl font-semibold text-ink">
                  {language.name}
                </p>
                {language.level ? (
                  <p className="mt-1 text-sm text-muted-text">
                    {language.level}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </ContentSection>
      );

    case "certificates":
      return (
        <ContentSection id="certificates" heading="Certificates">
          <div className="grid gap-5">
            {content.certificates.map((certificate) => (
              <article
                key={`${certificate.issuer}-${certificate.title}`}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-muted-text">{certificate.issuer}</p>
              </article>
            ))}
          </div>
        </ContentSection>
      );

    case "cv":
      return content.cv ? (
        <ContentSection id="cv" heading="Curriculum vitae">
          <a
            href={content.cv.href}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 py-3 font-semibold text-surface transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3"
          >
            {content.cv.label}
          </a>
        </ContentSection>
      ) : null;

    case "contact":
      return (
        <ContentSection id="contact" heading={content.contact.heading}>
          <p className="max-w-reading text-lg leading-8 text-text">
            {content.contact.introduction}
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {content.contact.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.kind === "linkedin" ? "_blank" : undefined}
                  rel={
                    link.kind === "linkedin" ? "noreferrer noopener" : undefined
                  }
                  className="inline-flex min-h-11 items-center rounded-full border border-accent px-5 py-3 font-semibold text-accent-strong underline-offset-4 transition-colors hover:bg-soft-accent hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </ContentSection>
      );
  }
}

type ContentSectionProps = Readonly<{
  id: Exclude<SectionId, "hero">;
  heading: string;
  children: React.ReactNode;
}>;

function ContentSection({ id, heading, children }: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-8 border-b border-border">
      <div className="mx-auto grid w-full max-w-shell gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:px-12 lg:py-24">
        <h2 className="font-serif text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
          {heading}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

function slugify(value: string): string {
  return value.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "");
}
