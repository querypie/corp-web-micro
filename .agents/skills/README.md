# Repo-local AI agent skills

This repository keeps checked-in agent skills under `.agents/skills/`.

Canonical layout:

- `.agents/skills/<skill-name>/SKILL.md`

Current skills:

- `micro-site-authoring`
  - Path: `.agents/skills/micro-site-authoring/SKILL.md`
  - Purpose: create or maintain small QueryPie micro websites in this monorepo while preserving independent app boundaries, English repository documentation, and Japanese public copy.
- `micro-site-setup`
  - Path: `.agents/skills/micro-site-setup/SKILL.md`
  - Purpose: add a new independent Next.js app under `apps/*`, wire it to shared packages, and prepare the app for standalone Vercel deployment.

Usage notes:

- Load `micro-site-authoring` for page/content/section work in an existing micro website.
- Load `micro-site-setup` before adding a new app under `apps/*`.
- Keep this index aligned with the actual skill directories.
