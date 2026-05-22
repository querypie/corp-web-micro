# Corp Web Micro

This repository hosts small QueryPie micro websites in a single npm-workspaces monorepo.

Repository documentation, guidance, comments, PR titles, and PR descriptions should be written in English. Website content is Japanese-first for now unless a future site explicitly requires another locale.

## Current apps

- `apps/finance` — Finance AIP micro website, initially based on the reference deployment at `https://finance-ow7i0ad0t-jane-na-querypies-projects.vercel.app/`.

## Architecture

The repository uses multiple independent Next.js apps rather than one app with host-based rewrites. Each micro website should be deployable as its own Vercel project with its app directory as the project root.

```text
apps/
  finance/                  # Next.js app for the Finance AIP micro website
packages/
  microsite-links/          # Canonical links back to the QueryPie AI Japan main site
  microsite-ui/             # Shared UI primitives for small marketing sites
tests/                      # Lightweight repository structure tests
.agents/skills/             # Repo-local agent skills
```

## Design and authoring principles

- Keep each micro website small, direct, and easy to review.
- Keep visible marketing copy in the relevant `page.tsx` file by default.
- Use shared packages for UI primitives, not for hiding page-specific story order or large content registries.
- Use Japanese for public website copy until the site explicitly needs another locale.
- Link shared company, contact, legal, and resource surfaces to the main QueryPie AI Japan website instead of duplicating them.
- Keep static assets app-local under each app's `public/` directory when the asset belongs to one micro website.

## Quick start

```bash
npm install
npm run test:ci
```

For app-specific development:

```bash
npm run dev --workspace @querypie/microsite-finance
```

## Deployment model

Create one Vercel project per app. For the finance site, use:

- Vercel project: `corp-web-micro-finance`
- Root directory: `apps/finance`
- Build command: `npm run build`
- Install command: `npm install`
- Output: Next.js default
- Automatic Vercel Git deployments: disabled in `apps/finance/vercel.json` because GitHub Actions owns deployment orchestration

Finance deployments are managed by project-specific GitHub Actions workflows:

- `Deploy Finance on Preview` — `.github/workflows/deploy-finance-on-preview.yml`
- `Deploy Finance on Staging` — `.github/workflows/deploy-finance-on-staging.yml`
- `Deploy Finance on Production` — `.github/workflows/deploy-finance-on-production.yml`

The workflows use `scripts/deploy` and require:

- Secret: `VERCEL_TOKEN`
- Variable: `VERCEL_TEAM_ID`

Common company links should continue to point to `https://querypie.ai`.
