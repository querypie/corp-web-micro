---
name: micro-site-authoring
description: Author and maintain small QueryPie micro websites while keeping page copy route-local and shared packages UI-only.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [corp-web-micro, microsite, nextjs, tailwind, route-local-authoring]
---

# Micro-site authoring

Use this skill when editing an existing micro website under `apps/<site>/`.

## Core rules

1. Write repository documentation, comments, PR titles, and PR descriptions in English.
2. Write public website content in Japanese by default.
3. Keep the site's visible copy and section order in the relevant `page.tsx` file.
4. Use `packages/microsite-ui` for UI primitives only; do not move campaign-specific story, headings, or long copy into shared packages.
5. Link shared company/contact/legal/resource surfaces to `https://querypie.ai` instead of duplicating those pages.
6. Keep site-specific assets under `apps/<site>/public/`.

## Good page pattern

```tsx
<HeroSection>
  <HeroEyebrow>...</HeroEyebrow>
  <HeroTitle>...</HeroTitle>
  <HeroBody>...</HeroBody>
  <HeroActions>...</HeroActions>
</HeroSection>
```

## Avoid

- Generic page renderers such as `<LandingPage content={...} />`.
- Large arrays or JSON-like objects that hide marketing copy from the route.
- Shared package components that include one site's copy.
- Duplicating contact/about/legal pages that already exist on the main QueryPie AI Japan site.

## Verification

Run the smallest command that proves the change:

```bash
npm run lint --workspace @querypie/microsite-<site>
npm run typecheck --workspace @querypie/microsite-<site>
npm run build --workspace @querypie/microsite-<site>
```

Use `npm run test:ci` for baseline PR validation when practical.
