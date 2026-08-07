import { SectionLayout } from "@/components/portfolio/section-layout";
import type {
  ExperienceEntry,
  PortfolioDefinition,
  SectionId,
} from "@/portfolio/types";

type PortfolioSectionProps = Readonly<{
  section: SectionId;
  portfolio: PortfolioDefinition;
  index?: string;
}>;

export function PortfolioSection({
  section,
  portfolio,
  index = "01",
}: PortfolioSectionProps) {
  const { content } = portfolio;

  switch (section) {
    case "hero":
      return <HeroSection portfolio={portfolio} />;

    case "about":
      return (
        <SectionLayout
          id="about"
          index={index}
          heading={content.about.heading}
          eyebrow="Personal statement"
          tone="surface"
        >
          <div className="grid gap-12 xl:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] xl:gap-16">
            <div className="editorial-prose max-w-reading space-y-6 text-lg leading-8 text-text sm:text-xl sm:leading-9">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {content.about.strengths.length > 0 ? (
              <aside
                className="border-t border-ink pt-5 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0"
                aria-labelledby="strengths-heading"
              >
                <h3
                  id="strengths-heading"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong"
                >
                  Personal strengths
                </h3>
                <ol className="mt-5 divide-y divide-border">
                  {content.about.strengths.map((strength, index) => (
                    <li
                      key={strength}
                      className="grid grid-cols-[2rem_1fr] gap-3 py-4 text-base text-ink first:pt-0"
                    >
                      <span className="font-serif text-sm font-semibold text-accent-strong">
                        {formatIndex(index)}
                      </span>
                      <span className="font-medium">{strength}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            ) : null}
          </div>
        </SectionLayout>
      );

    case "education":
      return (
        <SectionLayout
          id="education"
          index={index}
          heading="Education"
          eyebrow="Academic foundation"
          tone="page"
        >
          <div className="grid gap-5">
            {content.education.map((entry, index) => (
              <article
                key={`${entry.institution}-${entry.field}`}
                className="group relative overflow-hidden border border-border bg-surface p-6 shadow-[var(--portfolio-shadow-card)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--portfolio-shadow-card-hover)] sm:p-9 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 bg-accent transition-[width] duration-300 group-hover:w-2 motion-reduce:transition-none"
                />
                <div className="grid gap-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">
                      Academic record {formatIndex(index)}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
                      {entry.field}
                    </h3>
                    <p className="mt-3 text-base font-semibold text-text sm:text-lg">
                      {entry.institution}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4 sm:min-w-40 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                    <p className="font-serif text-2xl font-semibold text-ink">
                      {entry.startYear}–{entry.endYear}
                    </p>
                    <p className="mt-2 max-w-40 text-sm leading-6 text-muted-text">
                      {entry.endYearLabel}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionLayout>
      );

    case "interests":
      return (
        <SectionLayout
          id="interests"
          index={index}
          heading="Academic interests"
          eyebrow="Areas of inquiry"
          tone="muted"
        >
          <div className="grid border-l border-t border-border sm:grid-cols-2 xl:grid-cols-3">
            {content.interests.map((interest, index) => (
              <article
                key={interest.title}
                className="group min-h-64 border-b border-r border-border bg-surface/70 p-6 transition-colors duration-300 hover:bg-surface sm:p-8 motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-serif text-sm font-semibold text-accent-strong">
                    {formatIndex(index)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-border transition-[width,background-color] duration-300 group-hover:w-16 group-hover:bg-accent motion-reduce:transition-none"
                  />
                </div>
                <h3 className="mt-12 max-w-[14ch] font-serif text-2xl font-semibold leading-tight tracking-[-0.025em] text-ink">
                  {interest.title}
                </h3>
                {interest.description ? (
                  <p className="mt-5 text-base leading-7 text-muted-text">
                    {interest.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </SectionLayout>
      );

    case "experience":
      return (
        <SectionLayout
          id="experience"
          index={index}
          heading="Experience"
          eyebrow="Professional experience"
          tone="surface"
        >
          <ExperienceList entries={content.experience} />
        </SectionLayout>
      );

    case "volunteering":
      return (
        <SectionLayout
          id="volunteering"
          index={index}
          heading="Volunteering & activities"
          eyebrow="Community & student involvement"
          tone="page"
        >
          <ExperienceList entries={content.volunteering} />
        </SectionLayout>
      );

    case "skills":
      return (
        <SectionLayout
          id="skills"
          index={index}
          heading="Skills"
          eyebrow="Developing capabilities"
          tone="surface"
        >
          <div className="grid gap-6 xl:grid-cols-2">
            {content.skillGroups.map((group, groupIndex) => {
              const headingId = `skills-${slugify(group.title)}`;

              return (
                <section
                  key={group.title}
                  aria-labelledby={headingId}
                  className="border border-border bg-page p-6 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6 border-b border-border pb-5">
                    <h3
                      id={headingId}
                      className="max-w-[13ch] font-serif text-2xl font-semibold leading-tight text-ink sm:text-3xl"
                    >
                      {group.title}
                    </h3>
                    <span className="font-serif text-sm font-semibold text-accent-strong">
                      {formatIndex(groupIndex)}
                    </span>
                  </div>
                  <ul className="mt-2 divide-y divide-border">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="grid grid-cols-[0.55rem_1fr] items-center gap-3 py-3.5 text-[0.95rem] font-medium text-text sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-accent"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </SectionLayout>
      );

    case "languages":
      return (
        <SectionLayout
          id="languages"
          index={index}
          heading="Languages"
          eyebrow="Communication"
          tone="page"
        >
          <ul className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {content.languages.map((language, index) => (
              <li
                key={language.name}
                className="group min-h-48 bg-surface p-6 transition-colors duration-300 hover:bg-soft-accent sm:p-8 motion-reduce:transition-none"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.18em] text-accent-strong">
                    {formatIndex(index)}
                  </span>
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full border border-accent transition-colors duration-300 group-hover:bg-accent motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-12 font-serif text-3xl font-semibold tracking-[-0.025em] text-ink">
                  {language.name}
                </p>
                {language.level ? (
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-text">
                    {language.level}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </SectionLayout>
      );

    case "certificates":
      return (
        <SectionLayout
          id="certificates"
          index={index}
          heading="Certifications & workshops"
          eyebrow="Training & recognition"
          tone="muted"
        >
          <div className="grid gap-5 xl:grid-cols-2">
            {content.certificates.map((certificate) => (
              <article
                key={`${certificate.issuer}-${certificate.title}`}
                className="border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-strong">
                    {certificate.kind}
                  </p>
                  {certificate.date ? (
                    <p className="text-sm font-medium text-muted-text">
                      {certificate.date}
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-ink">
                  {certificate.title}
                </h3>
                <p className="mt-2 font-medium text-accent-strong">
                  {certificate.issuer}
                </p>
                {certificate.summary ? (
                  <p className="mt-5 max-w-reading leading-7 text-text">
                    {certificate.summary}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </SectionLayout>
      );

    case "cv":
      return content.cv ? (
        <SectionLayout
          id="cv"
          index={index}
          heading="Curriculum vitae"
          eyebrow="Document"
          tone="surface"
        >
          <a
            href={content.cv.href}
            className="inline-flex min-h-12 items-center border border-inverse-surface bg-inverse-surface px-6 py-3 font-semibold text-inverse-text outline-none transition-colors duration-200 hover:bg-accent-strong hover:text-surface focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3 focus-visible:ring-offset-surface motion-reduce:transition-none"
          >
            {content.cv.label}
          </a>
        </SectionLayout>
      ) : null;

    case "contact":
      return (
        <SectionLayout
          id="contact"
          index={index}
          heading={content.contact.heading}
          eyebrow="Professional profile"
          tone="inverse"
        >
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-reading font-serif text-2xl leading-10 text-inverse-text sm:text-3xl sm:leading-[1.45]">
              {content.contact.introduction}
            </p>
            <ul className="flex flex-wrap gap-4">
              {content.contact.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.kind === "linkedin" ? "_blank" : undefined}
                    rel={
                      link.kind === "linkedin"
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="inline-flex min-h-12 items-center border border-inverse-muted bg-inverse-text px-6 py-3 font-semibold text-inverse-surface outline-none transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-inverse-muted focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3 focus-visible:ring-offset-inverse-surface motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SectionLayout>
      );
  }
}

function ExperienceList({
  entries,
}: Readonly<{ entries: readonly ExperienceEntry[] }>) {
  return (
    <div className="grid gap-5">
      {entries.map((entry) => (
        <article
          key={`${entry.organization}-${entry.title}-${entry.period ?? "undated"}`}
          className="border border-border bg-page p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-strong">
              {entry.category.replaceAll("-", " ")}
            </p>
            {entry.period ? (
              <p className="text-sm font-medium text-muted-text">
                {entry.period}
              </p>
            ) : null}
          </div>
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink">
            {entry.title}
          </h3>
          <p className="mt-2 font-medium text-accent-strong">
            {entry.organization}
          </p>
          <p className="mt-5 max-w-reading leading-7 text-text">
            {entry.summary}
          </p>
          {entry.details?.length ? (
            <ul className="mt-5 max-w-reading space-y-3 text-sm leading-6 text-muted-text sm:text-base sm:leading-7">
              {entry.details.map((detail) => (
                <li
                  key={detail}
                  className="grid grid-cols-[0.55rem_1fr] items-start gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] size-1.5 rounded-full bg-accent"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function HeroSection({
  portfolio,
}: Readonly<{ portfolio: PortfolioDefinition }>) {
  const { content } = portfolio;

  return (
    <section
      id="top"
      className="editorial-hero scroll-mt-28 overflow-hidden border-b border-border bg-surface"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-shell gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-24">
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-accent" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong sm:text-sm">
              {content.hero.eyebrow}
            </p>
          </div>

          <h1 className="mt-9 max-w-[10ch] text-balance font-serif text-[clamp(4.25rem,12vw,8.75rem)] font-semibold leading-[0.82] tracking-[-0.065em] text-ink">
            {content.identity.name}
          </h1>

          <div className="mt-10 grid gap-7 border-l border-accent pl-5 sm:pl-7 lg:grid-cols-[minmax(0,1fr)_minmax(12rem,0.45fr)] lg:items-end">
            <p className="max-w-[34ch] text-pretty text-xl leading-8 text-text sm:text-2xl sm:leading-10">
              {content.hero.summary}
            </p>
            <p className="max-w-sm text-sm leading-7 text-muted-text sm:text-base">
              {content.hero.opportunityFocus}
            </p>
          </div>

          <a
            href="#about"
            className="mt-10 inline-flex min-h-12 items-center border-b border-ink px-1 py-2 text-sm font-bold uppercase tracking-[0.14em] text-ink outline-none transition-[color,border-color] duration-200 hover:border-accent hover:text-accent-strong focus-visible:ring-3 focus-visible:ring-focus focus-visible:ring-offset-3 focus-visible:ring-offset-surface motion-reduce:transition-none"
          >
            Explore the portfolio
          </a>
        </div>

        <aside className="relative z-10 border border-border bg-surface/90 p-6 shadow-[var(--portfolio-shadow-hero)] sm:p-8 lg:translate-y-8">
          <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">
              Profile
            </p>
            <p className="font-serif text-sm font-semibold text-muted-text">
              Academic portfolio
            </p>
          </div>

          <dl className="divide-y divide-border">
            <div className="grid gap-2 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-text">
                Current role
              </dt>
              <dd className="font-serif text-2xl font-semibold leading-tight text-ink">
                {content.identity.role}
              </dd>
            </div>
            <div className="grid gap-2 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-text">
                Institution
              </dt>
              <dd className="text-base font-semibold leading-7 text-text">
                {content.identity.institution}
              </dd>
            </div>
          </dl>

          <div className="pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-text">
              Academic focus
            </p>
            <ul className="mt-4 space-y-3">
              {content.interests.slice(0, 3).map((interest, index) => (
                <li
                  key={interest.title}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 text-sm leading-6 text-text"
                >
                  <span className="font-serif font-semibold text-accent-strong">
                    {formatIndex(index)}
                  </span>
                  {interest.title}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function formatIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");
}
