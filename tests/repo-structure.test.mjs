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
  "apps/finance/vercel.json",
  "packages/microsite-ui/src/index.tsx",
  "packages/microsite-links/src/index.ts",
  "scripts/deploy/index.js",
  "scripts/deploy/package.json",
  "scripts/deploy/package-lock.json",
  ".github/workflows/deploy-finance-on-preview.yml",
  ".github/workflows/deploy-finance-on-staging.yml",
  ".github/workflows/deploy-finance-on-production.yml",
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

const financeVercelConfig = read("apps/finance/vercel.json");
assert.match(financeVercelConfig, /"deploymentEnabled": false/);

const links = read("packages/microsite-links/src/index.ts");
assert.match(links, /https:\/\/querypie\.ai\/contact-us/);

const previewWorkflow = read(".github/workflows/deploy-finance-on-preview.yml");
assert.match(previewWorkflow, /name: Deploy Finance on Preview/);
assert.match(previewWorkflow, /PROJECT_NAME: corp-web-micro-finance/);
assert.match(previewWorkflow, /TARGET_ENV: preview/);

const stagingWorkflow = read(".github/workflows/deploy-finance-on-staging.yml");
assert.match(stagingWorkflow, /name: Deploy Finance on Staging/);
assert.match(stagingWorkflow, /TARGET_ENV: staging/);

const productionWorkflow = read(".github/workflows/deploy-finance-on-production.yml");
assert.match(productionWorkflow, /name: Deploy Finance on Production/);
assert.match(productionWorkflow, /TARGET_ENV: production/);

const deployScript = read("scripts/deploy/index.js");
assert.match(deployScript, /PROJECT_NAME/);
assert.match(deployScript, /createDeployment/);

console.log("repo structure checks passed");
