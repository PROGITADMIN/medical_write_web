const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const Module = require("module");

// ---------------------------------------------------------
// 0. Intercept Module Resolution for /opt/nodejs
// ---------------------------------------------------------
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request.startsWith("/opt/nodejs/")) {
    const relativePath = request.replace("/opt/nodejs/", "");
    const targetPath = path.join(__dirname, "layers/utils_layer/nodejs", relativePath);
    return originalResolveFilename(targetPath, parent, isMain, options);
  }
  return originalResolveFilename(request, parent, isMain, options);
};

// Set up global module paths so the lambda modules are visible for local-server.js
module.paths.push(
  path.join(__dirname, "lambda_functions/backend/node_modules"),
  path.join(__dirname, "layers/modules_layer/nodejs/node_modules")
);
const globalPaths = Module.globalPaths;
globalPaths.push(
  path.join(__dirname, "lambda_functions/backend/node_modules"),
  path.join(__dirname, "layers/modules_layer/nodejs/node_modules")
);

// Intercept Module._nodeModulePaths so all subsequent loaded modules can resolve backend and modules_layer node_modules
const originalNodeModulePaths = Module._nodeModulePaths;
Module._nodeModulePaths = function (from) {
  const paths = originalNodeModulePaths(from);
  paths.push(
    path.join(__dirname, "lambda_functions/backend/node_modules"),
    path.join(__dirname, "layers/modules_layer/nodejs/node_modules")
  );
  return paths;
};

const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

// ---------------------------------------------------------
// Helper: Custom Dotenv Loader
// Loads ONLY AWS credentials & region configuration from .env
// ---------------------------------------------------------
function loadDotenv(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`🔌 Loading bootstrap AWS variables from: ${filePath}`);
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split(/\r?\n/);
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const separatorIndex = line.indexOf("=");
      if (separatorIndex === -1) continue;
      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();

      // Remove surrounding quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Only load AWS credentials or Secret ID configuration
      const isAwsVar = key.startsWith("AWS_") || key === "SECRET_KEY" || key === "SECRET_NAME" || key === "SECRET_REGION" || key === "PORT";
      if (isAwsVar) {
        process.env[key] = value;
      }
    }
  }
}

// ---------------------------------------------------------
// Helper: RSA Key Pair Generator
// ---------------------------------------------------------
function ensureKeys() {
  const keysDir = path.join(__dirname, "keys");
  const privateKeyPath = path.join(keysDir, "private.pem");
  const publicKeyPath = path.join(keysDir, "public.pem");

  if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir, { recursive: true });
  }

  if (!fs.existsSync(privateKeyPath) || !fs.existsSync(publicKeyPath)) {
    console.log("🗝️ Generating RSA key pair for local JWT signing...");
    try {
      const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
          type: "spki",
          format: "pem",
        },
        privateKeyEncoding: {
          type: "pkcs8",
          format: "pem",
        },
      });

      fs.writeFileSync(privateKeyPath, privateKey);
      fs.writeFileSync(publicKeyPath, publicKey);
      console.log("🗝️ RSA keys generated successfully in: cdk/backend/keys");
    } catch (err) {
      console.error("❌ Failed to generate RSA keys:", err.message);
    }
  }

  process.env.JWT_PRIVATE_KEY_PATH = process.env.JWT_PRIVATE_KEY_PATH || privateKeyPath;
  process.env.JWT_PUBLIC_KEY_PATH = process.env.JWT_PUBLIC_KEY_PATH || publicKeyPath;
}

// ---------------------------------------------------------
// Helper: Load Secrets from AWS Secrets Manager
// ---------------------------------------------------------
async function loadSecretsFromAWS() {
  const secretId = process.env.SECRET_KEY || process.env.SECRET_NAME || "CARGOCLAVE_PORTAL_DEV_SECRET";
  const region = process.env.SECRET_REGION || process.env.AWS_REGION || "ap-south-1";

  console.log(`🔍 Fetching application secrets from AWS Secrets Manager: "${secretId}" in region "${region}"...`);
  const client = new SecretsManagerClient({ region });

  try {
    const response = await client.send(
      new GetSecretValueCommand({ SecretId: secretId })
    );

    const raw = response.SecretString;
    if (!raw) {
      throw new Error(`Secret ${secretId} has no SecretString value.`);
    }

    const secrets = JSON.parse(raw);
    console.log(`✅ Successfully retrieved and parsed secret string from AWS.`);
    
    // Inject the secrets into process.env
    for (const [key, value] of Object.entries(secrets)) {
      if (!process.env[key]) {
        process.env[key] = typeof value === "string" ? value : String(value);
      }
    }
    console.log(`👉 Injected ${Object.keys(secrets).length} configurations into local environment.`);
  } catch (err) {
    console.error("❌ Failed to load secrets from AWS Secrets Manager:", err.message);
    throw err;
  }
}

// ---------------------------------------------------------
// Main Server Start Flow
// ---------------------------------------------------------
async function start() {
  // Load bootstrap AWS config from env files
  loadDotenv(path.join(__dirname, ".env"));
  loadDotenv(path.join(__dirname, "lambda_functions/backend/.env"));

  // Ensure RSA keys are ready
  ensureKeys();

  // Load secrets from AWS Secrets Manager before starting the local web server
  try {
    await loadSecretsFromAWS();
  } catch (err) {
    console.error("❌ Critical: Shutting down due to AWS Secrets Manager error.");
    process.exit(1);
  }

  // Load split Lambda handlers
  const authHandler = require("./lambda_functions/auth/index.js").handler;
  const applicationHandler = require("./lambda_functions/application/index.js").handler;
  const adminHandler = require("./lambda_functions/admin/index.js").handler;
  const organizationHandler = require("./lambda_functions/organization/index.js").handler;
  const externalHandler = require("./lambda_functions/external/index.js").handler;

  // Express Setup
  const app = express();
  app.use(cors());

  // We need the raw body as a string to mimic API Gateway behavior
  app.use(
    express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );
  app.use(express.urlencoded({ extended: true }));

  // Local health check route
  app.get("/health", (req, res) => {
    res.json({
      success: true,
      message: "CargoClave Portal Local Lambda Wrapper is up and running!",
      timestamp: new Date().toISOString(),
    });
  });

  // Proxy all other routes to the Lambda handlers dynamically
  app.use(async (req, res) => {
    const path = req.path;

    // Construct a mock API Gateway Event
    const event = {
      httpMethod: req.method,
      path: req.path,
      headers: req.headers,
      queryStringParameters: req.query || {},
      body:
        req.rawBody ||
        (req.body && Object.keys(req.body).length > 0
          ? JSON.stringify(req.body)
          : null),
      requestContext: {
        identity: { sourceIp: req.ip },
      },
    };

    // Determine target handler
    let handler = null;
    if (path.startsWith("/api/external")) {
      handler = externalHandler;
    } else if (
      path.startsWith("/api/auth/rbac") ||
      path.startsWith("/api/admin")
    ) {
      handler = adminHandler;
    } else if (path.startsWith("/api/auth") || path === "/health") {
      handler = authHandler;
    } else if (path.startsWith("/api/apps") || path.startsWith("/api/file")) {
      handler = applicationHandler;
    } else if (path.startsWith("/api/org")) {
      handler = organizationHandler;
    }

    if (!handler) {
      return res.status(404).json({
        success: false,
        message: `Route ${path} not matched to any local Lambda.`,
      });
    }

    try {
      const result = await handler(event);

      if (!result) {
        return res.status(500).json({
          success: false,
          message: "Lambda returned null or crashed locally",
        });
      }

      // Set response headers generated by Lambda
      if (result.headers) {
        for (const [key, value] of Object.entries(result.headers)) {
          res.setHeader(key, value);
        }
      }

      // Send status code and body
      res.status(result.statusCode || 200).send(result.body);
    } catch (err) {
      console.error("Local Server Error:", err);
      res.status(500).json({
        success: false,
        message: err.message,
        stack: err.stack,
      });
    }
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Portal Local Lambda Server is Running!`);
    console.log(`🌍 URL: http://localhost:${PORT}`);
    console.log(`=========================================`);
  });
}

// Boot up
start().catch((err) => {
  console.error("Boot error:", err);
  process.exit(1);
});
