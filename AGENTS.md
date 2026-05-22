# Repository Guidelines

This file is the working guide for AI agents and contributors working in `corp-web-micro`.

## Language policy

- Write repository-internal documentation, guidance, comments, PR titles, and PR descriptions in English.
- Write public website content in Japanese by default until a specific micro website explicitly requires another locale.
- Do not mention internal implementation terms such as MDX in stakeholder-facing website copy unless explicitly requested.

## Project stack

- npm workspaces
- Multiple independent Next.js apps under `apps/*`
- Shared packages under `packages/*`
- Next.js 16, React 19, TypeScript, Tailwind CSS v4

## Repository structure

- `apps/<site>/` — one independent Next.js app per micro website
- `packages/microsite-ui/` — shared UI primitives only
- `packages/microsite-links/` — canonical main-site links and contact URL helpers
- `.agents/skills/` — repo-local AI agent skills
- `tests/` — lightweight structure and convention tests

## Micro website rules

- Prefer multiple Next.js apps in this monorepo over one app with host-based rewrites.
- Each app should be deployable as an independent Vercel project.
- Keep each micro website to a small route surface, usually 1-5 `page.tsx` files.
- Keep page-specific marketing copy and section order visible in `page.tsx`.
- Use shared UI primitives for layout/styling; do not create generic page renderers or large JSON content registries for static marketing pages.
- Link shared surfaces such as company overview, contact, privacy policy, terms, and resources to the main QueryPie AI Japan site.
- Keep site-specific assets under that app's `public/` directory.

## Shared package rules

- Shared UI packages must not own campaign-specific copy.
- Promote code to shared packages only when it is genuinely reusable across multiple micro websites.
- Keep props small and structural. Prefer `children` for authored copy.
- Avoid hiding complete page composition behind wrappers like `PageContent` or `GenericLandingPage`.

## Workflow

1. Check the current branch and repository state before editing.
2. Use a fresh branch/worktree for PR work.
3. Keep changes small and reviewable.
4. Run the lightest verification that proves correctness. Use `npm run test:ci` for baseline PR validation.
5. Commit, push, and open a PR when the user asks for repository work.

## Verification

Recommended baseline:

```bash
npm run test:ci
```

For a single app:

```bash
npm run lint --workspace @querypie/microsite-finance
npm run typecheck --workspace @querypie/microsite-finance
npm run build --workspace @querypie/microsite-finance
```
