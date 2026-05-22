import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const requiredPaths = [
  "AGENTS.md",
  ".agents/skills/README.md",
  ".agents/skills/micro-site-authoring/SKILL.md",
  ".agents/skills/micro-site-setup/SKILL.md",
  "apps/finance/src/app/page.tsx",
  "apps/finance/src/app/layout.tsx",
  "apps/finance/src/lib/site-config.ts",
  "packages/microsite-ui/src/index.tsx",
  "packages/microsite-links/src/index.ts",
];

for (const path of requiredPaths) {
  assert.equal(existsSync(path), true, `${path} should exist`);
}

const read = (path) => readFileSync(path, "utf8");

const agents = read("AGENTS.md");
assert.match(agents, /Repository Guidelines/);
assert.match(agents, /Write public website content in Japanese by default/);

const page = read("apps/finance/src/app/page.tsx");
assert.match(page, /信頼できるAIが/);
assert.match(page, /金融の現場を動かす/);
assert.doesNotMatch(page, /GenericPageRenderer|content=\{/);

const links = read("packages/microsite-links/src/index.ts");
assert.match(links, /https:\/\/querypie\.ai\/contact-us/);

console.log("repo structure checks passed");
