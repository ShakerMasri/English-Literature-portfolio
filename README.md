# Ghazal Masri — English Literature Portfolio

A professional portfolio website for **Ghazal Masri**, an English Literature student, designed primarily for internship and scholarship opportunities.

The project uses a calm, editorial-inspired visual direction with a deep navy and blue identity, strong typography, generous spacing, and accessible light and dark themes.

## Project Status

The portfolio is currently preparing for its first production deployment.

Implemented sections include:

- Hero
- About / personal statement
- Education
- Academic interests
- Experience
- Volunteering and activities
- Skills
- Languages
- Certifications and workshops
- Contact / LinkedIn

Current confirmed language levels:

- Arabic — Native
- English — C1
- French — A2

The following content is intentionally postponed until material is provided:

- Selected Work
- CV download
- Certificate images

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Local typed configuration
- Static/server-rendered content
- Minimal client-side JavaScript
- npm

The project intentionally does **not** use:

- CMS
- Database
- Authentication
- Analytics
- Contact backend
- External fonts
- Paid assets
- Unnecessary third-party libraries

## Architecture

The portfolio separates client content from presentation and site configuration.

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── icon.svg
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── portfolio/
│   └── theme/
│
└── portfolio/
    ├── clients/
    │   └── ghazal-masri/
    │       ├── content.ts
    │       ├── index.ts
    │       ├── metadata.ts
    │       ├── navigation.ts
    │       ├── sections.ts
    │       └── theme.ts
    ├── section-registry.ts
    └── types.ts
```

### Client configuration

Ghazal-specific information is kept under:

```text
src/portfolio/clients/ghazal-masri/
```

This includes:

- portfolio content
- metadata
- navigation
- enabled section order
- theme configuration

Personal information should not be scattered across reusable components.

## Design Direction

The portfolio uses an original **Editorial Blue** design system.

The visual direction prioritizes:

- deep navy tones
- restrained blue accents
- warm light surfaces
- soft blue-gray supporting colors
- strong contrast
- generous whitespace
- comfortable reading widths
- editorial typography and hierarchy
- subtle motion

The literary identity is created through layout, typography, hierarchy, and writing presentation rather than decorative book-related imagery.

No external fonts or copyrighted visual assets are required.

## Navigation

The portfolio uses a compact burger/disclosure navigation instead of a long persistent navigation bar.

The menu supports:

- keyboard interaction
- accessible naming
- `aria-expanded`
- `aria-controls`
- Escape to close
- outside-click closing
- closing after navigation
- visible focus styles
- reduced-motion preferences

The light/dark theme toggle remains independently accessible.

## Accessibility

Accessibility is treated as a core project requirement.

Current implementation includes:

- semantic HTML
- one clear page-level heading
- logical heading hierarchy
- skip-to-content navigation
- keyboard-accessible controls
- visible focus indicators
- accessible color contrast
- readable line lengths
- reduced-motion support
- meaningful link text
- appropriate language metadata
- comfortable mobile layouts

Manual keyboard and responsive testing should be performed before each production release.

## Performance

The project favors static and server-rendered content.

Client-side JavaScript is limited mainly to interactive UI such as:

- navigation menu
- theme toggle

The site avoids:

- external font requests
- animation libraries
- third-party scripts
- unnecessary data fetching
- heavy client components

## Privacy and Security

The portfolio is intentionally privacy-conscious.

It currently contains:

- no analytics
- no trackers
- no backend
- no authentication
- no database
- no public email address
- no exposed credentials or secrets
- no untrusted HTML rendering
- no unnecessary personal information

External links opened in a new tab should use safe link attributes such as:

```html
rel="noopener noreferrer"
```

Private information such as student IDs, grades, instructor comments, signatures, or private contact details should not be added without explicit approval.

## SEO

Production SEO support includes:

- page title and description
- canonical URL
- metadata base
- Open Graph metadata
- social sharing metadata
- `robots.txt`
- `sitemap.xml`
- favicon / site icon

Current intended production URL:

```text
https://ghazalmasri.shakerweb.com
```

If the production URL changes, update the centralized client metadata rather than hardcoding the new URL throughout the application.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Validation

Before committing or deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
```

The project should pass all three checks before deployment.

Useful production metadata routes include:

```text
/robots.txt
/sitemap.xml
/icon.svg
```

## Deployment

The site is designed to work well with a standard Next.js hosting environment such as Vercel.

The current intended production domain is:

```text
ghazalmasri.shakerweb.com
```

Before deployment, verify:

- desktop layout
- mobile layout
- light theme
- dark theme
- keyboard navigation
- burger menu behavior
- Escape and outside-click behavior
- focus states
- LinkedIn link
- favicon
- canonical metadata
- `/robots.txt`
- `/sitemap.xml`

## Content Rules

Only information supplied or approved for the client should be published.

Do not invent:

- experience
- achievements
- awards
- publications
- responsibilities
- qualifications
- dates
- professional titles

Academic assignments, research, personal writing, professional work, and published work should remain clearly distinguished.

Writing samples should only be published when ownership and permission are clear.

## Future Content

Potential future additions include:

- Selected Work
- CV download
- certificate images
- approved writing samples
- additional client-approved academic material

These should only be added when real content is available.

The project intentionally avoids rendering empty placeholder sections.

## Reusability

Although this portfolio is designed specifically for Ghazal Masri, the codebase provides a reusable foundation for future client portfolios.

Future portfolios should vary through:

- content strategy
- section selection
- section order
- typography
- spacing
- hero composition
- media
- presentation style
- theme tokens

They should not feel like identical templates with only the name and colors changed.

## Current Version Notes

The project currently uses Next.js `16.2.12`.

The production build is statically prerendered and includes:

```text
/
/_not-found
/icon.svg
/robots.txt
/sitemap.xml
```

---

Built as a focused, maintainable portfolio with accessibility, privacy, performance, and accurate client representation as first-class requirements.