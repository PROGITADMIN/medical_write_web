const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const iam = require("aws-cdk-lib/aws-iam");
const fs = require("fs");
const path = require("path");
const { Duration } = require("aws-cdk-lib");

class LambdaStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const prefix = props.env.prefix;
    const secretKey = props.env.secret_key;
    const region = props.env.region;
    const account = props.env.account;
    const docBucket = props.env.document_bucket_name;
    const serverless = props.env.serverless;

    const functionConfig = props.functionConfig;

    this.lambdaFunctions = {};
    this.lambdaLayers = {};

    const lambdaExecutionRole = new iam.Role(
      this,
      `${prefix}LambdaExecutionRole`,
      {
        assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
        roleName: `${prefix}LambdaExecutionRole`,
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            "service-role/AWSLambdaBasicExecutionRole"
          ),
        ],
      }
    );
    this.initializeLayers(prefix);
    this.attachSharedLayers(prefix, props.env);

    functionConfig.forEach((func) => {
      const runtime = this.getLambdaRuntime(func.runtime);
      const layers = this.getCompatibleLayers(runtime.family, func.lambda);

      const lambdaFunction = new lambda.Function(
        this,
        `${prefix}${func.lambda}`,
        {
          functionName: `${prefix}${func.lambda}`,
          runtime: runtime,
          handler: func.handler.trim(),
          code: lambda.Code.fromAsset(`./lambda_functions/${func.lambda}`, {
            exclude: [
              ".env",
              ".env.*",
              "keys/**",
              "*.md",
              ".gitignore",
              ".npmignore",
            ],
          }),
          layers: layers,
          environment: this.getFunctionEnvironment(prefix, serverless, func.lambda, {
            secretKey,
            region,
            account,
            docBucket,
          }),
          timeout: Duration.seconds(180),
          memorySize: 1536,
          role: lambdaExecutionRole,
        }
      );

      this.configureFunctionPermissions(
        lambdaExecutionRole,
        func.lambda,
        prefix,
        props
      );

      this.lambdaFunctions[func.lambda] = {
        function: lambdaFunction,
        isScheduled: func.isScheduled,
      };
    });
  }

  initializeLayers(prefix) {
    const layersPath = "./layers";
    if (!fs.existsSync(layersPath)) return;

    const layerDirs = fs.readdirSync(layersPath).filter((layerName) => {
      return fs.existsSync(path.join(layersPath, layerName));
    });

    const skipped = [];

    layerDirs.forEach((layerName) => {
      const layerDir = path.join(layersPath, layerName);

      if (this.isLayerEmpty(layerDir)) {
        skipped.push(layerName);
        return;
      }

      const layer = new lambda.LayerVersion(this, `${prefix}${layerName}`, {
        layerVersionName: `${prefix}${layerName}`,
        code: lambda.Code.fromAsset(layerDir, {
          ignoreMode: cdk.IgnoreMode.GLOB,
        }),
        removalPolicy: cdk.RemovalPolicy.RETAIN,
        description: `${layerName} layer`,
      });

      this.lambdaLayers[layerName] = layer;
    });

    console.log("🔍 Loaded layers:", Object.keys(this.lambdaLayers));
    if (skipped.length) {
      console.log("⏭️  Skipped empty layers:", skipped);
    }
  }

  attachSharedLayers(prefix, envConfig) {
    const sharedNodeArn = envConfig.shared_modules_layer_node_arn;
    if (sharedNodeArn) {
      this.lambdaLayers["shared_modules_node"] =
        lambda.LayerVersion.fromLayerVersionArn(
          this,
          `${prefix}SharedModulesNodeLayer`,
          sharedNodeArn
        );
    }

    const sharedPythonArn = envConfig.shared_modules_layer_python_arn;
    if (sharedPythonArn) {
      this.lambdaLayers["shared_modules_python"] =
        lambda.LayerVersion.fromLayerVersionArn(
          this,
          `${prefix}SharedModulesPythonLayer`,
          sharedPythonArn
        );
    }
  }

  // Trigger deploy: check files inside layers for code packaging
  isLayerEmpty(layerDir) {
    const nodejsDir = path.join(layerDir, "nodejs");
    if (fs.existsSync(nodejsDir)) {
      const entries = fs
        .readdirSync(nodejsDir)
        .filter((e) => e !== ".DS_Store" && e !== ".package-lock.json");
      if (entries.length > 0) return false;
    }

    const pythonDir = path.join(layerDir, "python");
    if (fs.existsSync(pythonDir)) {
      const entries = fs
        .readdirSync(pythonDir)
        .filter((e) => e !== ".DS_Store");
      if (entries.length > 0) return false;
    }

    return true;
  }

  getLambdaRuntime(runtimeString) {
    if (runtimeString.includes("PYTHON_")) {
      return lambda.Runtime[runtimeString.replace(".", "_")];
    }
    return lambda.Runtime[runtimeString];
  }

  getCompatibleLayers(runtimeFamily, functionName) {
    const layers = [];

    if (runtimeFamily === 0 || runtimeFamily === lambda.RuntimeFamily.NODEJS) {
      if (this.lambdaLayers["shared_modules_node"])
        layers.push(this.lambdaLayers["shared_modules_node"]);
      if (this.lambdaLayers["modules_layer"])
        layers.push(this.lambdaLayers["modules_layer"]);
      if (this.lambdaLayers["utils_layer"])
        layers.push(this.lambdaLayers["utils_layer"]);
    } else if (
      runtimeFamily === 2 ||
      runtimeFamily === lambda.RuntimeFamily.PYTHON
    ) {
      if (this.lambdaLayers["shared_modules_python"])
        layers.push(this.lambdaLayers["shared_modules_python"]);
      if (this.lambdaLayers["python_modules_layer"])
        layers.push(this.lambdaLayers["python_modules_layer"]);
      if (this.lambdaLayers["python_utils_layer"])
        layers.push(this.lambdaLayers["python_utils_layer"]);
    }

    return layers;
  }

  getFunctionEnvironment(prefix, serverless ,functionName, config) {
    const baseEnv = {
      PREFIX: prefix,
      SECRET_KEY: config.secretKey,
      SERVERLESS: serverless
    };

    return baseEnv;
  }

  configureFunctionPermissions(role, functionName, prefix, props) {

    role.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["secretsmanager:GetSecretValue"],
        resources: [
          `arn:aws:secretsmanager:${props.env.region}:${props.env.account}:secret:${props.env.secret_key}-*`,
        ],
      })
    );

    role.addToPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["s3:PutObject", "s3:GetObject", "s3:ListBucket"],
        resources: [
          `arn:aws:s3:::${props.env.prefix}*`,
          `arn:aws:s3:::${props.env.prefix}*/*`,
          `arn:aws:s3:::cargoclave-portal-admin-*`,
          `arn:aws:s3:::cargoclave-portal-admin-*/*`,
        ],
      })
    );
  }
}

module.exports = { LambdaStack };
