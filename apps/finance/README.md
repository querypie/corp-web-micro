# Finance Micro Website

This app hosts the Finance AIP micro website.

## Local commands

Run from the repository root:

```bash
npm run dev --workspace @querypie/microsite-finance
npm run lint --workspace @querypie/microsite-finance
npm run typecheck --workspace @querypie/microsite-finance
npm run build --workspace @querypie/microsite-finance
```

## Deployment

Create a dedicated Vercel project for this app.

- Root directory: `apps/finance`
- Install command: `npm install`
- Build command: `npm run build`
- Runtime: Node.js 24 LTS

The app currently assumes the canonical production URL `https://finance.querypie.ai` in `src/lib/site-config.ts`. Update that value when the final domain is chosen.

## Content policy

Public website copy is Japanese-first. Repository docs and PR text should remain English.
