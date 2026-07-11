const cdk = require("aws-cdk-lib");
const { LambdaStack } = require("./stacks/lambda-stack");
const { ApiStack } = require("./stacks/api-stack");
const fs = require("fs");
const settings = require("./config/settings.json");

const env = process.argv[2];
const environmentSettings = settings[env];

if (!environmentSettings) {
  console.error(`Invalid environment: ${env}`);
  process.exit(1);
}

class App extends cdk.App {
  constructor() {
    super();

    const functionConfig = JSON.parse(
      fs.readFileSync("./config/functions-config.json", "utf-8")
    );

    // Lambda stack
    const lambdaStack = new LambdaStack(
      this,
      `${environmentSettings.prefix}lambda-stack`,
      {
        env: environmentSettings,
        functionConfig,
      }
    );

    // API stack (depends on Lambda stack)
    const apiStack = new ApiStack(
      this,
      `${environmentSettings.prefix}api-stack`,
      {
        env: environmentSettings,
      }
    );
    apiStack.addDependency(lambdaStack);
  }
}

new App();
