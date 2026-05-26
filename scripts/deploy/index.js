import { Vercel } from '@vercel/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

const teamId = process.env.VERCEL_TEAM_ID;
const targetEnv = process.env.TARGET_ENV;
const branch = process.env.BRANCH;
const projectName = process.env.PROJECT_NAME;
const repo = process.env.GITHUB_REPO || 'corp-web-micro';
const org = process.env.GITHUB_ORG || 'querypie';

const POLL_INTERVAL_MS = 5_000;
const POLL_TIMEOUT_MS = 10 * 60 * 1_000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 15_000;

const IN_PROGRESS_STATUSES = new Set([
  'QUEUED',
  'INITIALIZING',
  'ANALYZING',
  'BUILDING',
  'DEPLOYING',
]);

function requireEnv(name, value) {
  if (!value) {
    throw new Error(`${name} is required`);
  }
}

function deploymentTarget() {
  if (targetEnv === 'preview') {
    return undefined;
  }

  return targetEnv;
}

async function createDeployment() {
  requireEnv('VERCEL_TOKEN', process.env.VERCEL_TOKEN);
  requireEnv('VERCEL_TEAM_ID', teamId);
  requireEnv('PROJECT_NAME', projectName);
  requireEnv('TARGET_ENV', targetEnv);
  requireEnv('BRANCH', branch);

  return vercel.deployments.createDeployment({
    teamId,
    requestBody: {
      name: projectName,
      target: deploymentTarget(),
      gitSource: {
        type: 'github',
        repo,
        ref: branch,
        org,
      },
    },
  });
}

async function pollDeployment(deploymentId) {
  const startTime = Date.now();

  while (true) {
    await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL_MS));

    if (Date.now() - startTime > POLL_TIMEOUT_MS) {
      throw new Error(`Deployment polling timed out after ${POLL_TIMEOUT_MS / 1_000}s`);
    }

    let statusResponse;
    try {
      statusResponse = await vercel.deployments.getDeployment({
        idOrUrl: deploymentId,
        withGitRepoInfo: 'true',
      });
    } catch (error) {
      if (error.statusCode === 404) {
        const err = new Error(
          'Deployment was removed (HTTP 404). ' +
          'This typically happens when Vercel auto-cancels a deployment ' +
          'because a newer one was triggered for the same branch.',
        );
        err.cancelled = true;
        throw err;
      }
      throw error;
    }

    const { status, url } = statusResponse;
    console.log(`Deployment status: ${status}`);

    if (IN_PROGRESS_STATUSES.has(status)) {
      continue;
    }

    if (status === 'READY') {
      return url;
    }

    const err = new Error(`Deployment ended with status: ${status}`);
    err.cancelled = status === 'CANCELED';
    throw err;
  }
}

async function createAndCheckDeployment() {
  console.log(
    `Creating deployment: project=[${projectName}], target=[${targetEnv}], branch=[${branch}], repo=[${org}/${repo}]`,
  );

  const createResponse = await createDeployment();
  console.log(`Deployment created: ID ${createResponse.id}, status ${createResponse.status}`);

  const url = await pollDeployment(createResponse.id);
  console.log(`Deployment successful: ${url}`);
}

(async () => {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      await createAndCheckDeployment();
      return;
    } catch (error) {
      if (error.cancelled && attempt < MAX_RETRIES) {
        console.log(
          `Attempt ${attempt}/${MAX_RETRIES} failed: ${error.message}
` +
          `Retrying in ${RETRY_DELAY_MS / 1_000}s...`,
        );
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
        continue;
      }

      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
})();
