---
name: micro-site-setup
description: Add a new independent Next.js micro website app to the corp-web-micro monorepo.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [corp-web-micro, microsite, nextjs, setup, vercel]
---

# Micro-site setup

Use this skill before adding a new app under `apps/*`.

## Default architecture

- Add one independent Next.js app under `apps/<site-slug>/`.
- Keep deployment independent by creating one Vercel project per app.
- Use shared packages for reusable UI and main-site links.
- Do not implement host-based rewrites inside a single Next.js app unless explicitly requested.

## Required files for a new app

```text
apps/<site>/package.json
apps/<site>/next.config.ts
apps/<site>/tsconfig.json
apps/<site>/postcss.config.mjs
apps/<site>/src/app/layout.tsx
apps/<site>/src/app/page.tsx
apps/<site>/src/app/robots.ts
apps/<site>/src/app/sitemap.ts
apps/<site>/src/lib/site-config.ts
apps/<site>/public/
```

## Content and docs policy

- Repository docs and PR text: English.
- Public site copy: Japanese by default.
- Main company/contact/legal/resource links: use `@querypie/microsite-links`.

## Vercel setup

Create a Vercel project with:

- Root directory: `apps/<site>`
- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default

## Verification

After creating an app, run:

```bash
npm run test:ci
```
