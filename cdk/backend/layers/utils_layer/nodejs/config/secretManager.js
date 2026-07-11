const {
  GetSecretValueCommand,
  SecretsManagerClient,
} = require("@aws-sdk/client-secrets-manager");
const path = require("path");
const fs = require("fs");

const possibleEnvPaths = [
  path.resolve(__dirname, "../../.env"),
  path.resolve(process.cwd(), ".env"),
];

for (const envPath of possibleEnvPaths) {
  if (fs.existsSync(envPath)) {
    console.log(`Loading .env from: ${envPath}`);
    try {
      require("dotenv").config({ path: envPath });
    } catch {}
    break;
  }
}

const region = process.env.AWS_REGION || "ap-south-1";
const secretName = process.env.SECRET_KEY;

const client = new SecretsManagerClient({ region });

let cachedSecrets = null;

async function getSecretKey(secretKeyName) {
  const secrets = await loadSecrets();
  if (!secrets[secretKeyName]) {
    throw new Error(`Key "${secretKeyName}" not found in local/AWS config`);
  }
  return secrets[secretKeyName];
}

async function loadSecrets() {
  if (cachedSecrets) return cachedSecrets;

  // If local connection details are already present in env, prioritize them directly to skip AWS
  if (process.env.MONGODB_URI && process.env.REDIS_REST_URL) {
    console.log(
      "Loading configurations directly from local environment variables.",
    );
    cachedSecrets = {
      MONGODB_URI: process.env.MONGODB_URI,
      DB_NAME: process.env.DB_NAME || "cargoclave-portal",
      REDIS_REST_URL: process.env.REDIS_REST_URL,
      REDIS_REST_TOKEN: process.env.REDIS_REST_TOKEN || "",
      ENV: process.env.ENV || "dev",
      ACCESS_API_KEY: process.env.ACCESS_API_KEY || "mocked-api-key",
    };
    return cachedSecrets;
  }

  if (!secretName) {
    console.log("No SECRET_KEY set. Falling back to local configuration.");
    cachedSecrets = {
      MONGODB_URI:
        process.env.MONGODB_URI ||
        "mongodb://localhost:27017/master-management",
      DB_NAME: process.env.DB_NAME || "master-management",
      REDIS_REST_URL: process.env.REDIS_REST_URL || "localhost",
      REDIS_REST_TOKEN: process.env.REDIS_REST_TOKEN || "",
      ENV: process.env.ENV || "dev",
      ACCESS_API_KEY: process.env.ACCESS_API_KEY || "mocked-api-key",
    };
    return cachedSecrets;
  }

  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const response = await client.send(command);

    if (!response.SecretString) {
      throw new Error("SecretString not found in response");
    }

    cachedSecrets = JSON.parse(response.SecretString);
    console.log("Secrets loaded successfully from AWS Secrets Manager");
    return cachedSecrets;
  } catch (err) {
    console.warn(
      "AWS Secrets Manager failed. Falling back to local/default configuration. Error:",
      err.message,
    );
    cachedSecrets = {
      MONGODB_URI:
        process.env.MONGODB_URI ||
        "mongodb://localhost:27017/master-management",
      DB_NAME: process.env.DB_NAME || "master-management",
      REDIS_REST_URL: process.env.REDIS_REST_URL || "localhost",
      REDIS_REST_TOKEN: process.env.REDIS_REST_TOKEN || "",
      ENV: process.env.ENV || "dev",
      ACCESS_API_KEY: process.env.ACCESS_API_KEY || "mocked-api-key",
    };
    return cachedSecrets;
  }
}

function clearSecretsCache() {
  cachedSecrets = null;
}

function getSecretSync(secretKeyName) {
  if (!cachedSecrets) {
    throw new Error("Secrets are not initialized yet. Call loadSecrets() first on cold start.");
  }
  return cachedSecrets[secretKeyName];
}

module.exports = { getSecretKey, loadSecrets, clearSecretsCache, getSecretSync };
