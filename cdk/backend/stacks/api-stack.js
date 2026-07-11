const cdk = require("aws-cdk-lib");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const lambda = require("aws-cdk-lib/aws-lambda");
const fs = require("fs");

class ApiStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const prefix = props.env.prefix;
    const stage = props.env.stage;
    const region = props.env.region;
    const account = props.env.account;
    const throttlingRateLimit = Number(props.env.rate_limit ?? 100);
    const throttlingBurstLimit = Number(props.env.burst_limit ?? 200);

    const functionConfig = JSON.parse(
      fs.readFileSync("./config/functions-config.json", "utf-8")
    );

    const disallowedMethods = ["DELETE", "HEAD"];
    const allowedMethodsForAny = ["GET", "POST", "PUT", "PATCH"];
    const validMethods = [
      ...allowedMethodsForAny,
      "OPTIONS",
      "DELETE",
      "HEAD",
      "ANY",
    ];

    const api = new apigateway.RestApi(this, `${prefix}api`, {
      restApiName: `${prefix}api-gateway`,
      deployOptions: {
        stageName: stage,
        throttlingRateLimit,
        throttlingBurstLimit,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: [
          "Content-Type",
          "Authorization",
          "X-Requested-With",
          "Access-Control-Allow-Origin",
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Methods",
        ],
      },
    });

    const methodMap = new Map();

    functionConfig.forEach((func) => {
      if (
        !func.routes ||
        !Array.isArray(func.routes) ||
        func.routes.length === 0
      )
        return;

      const lambdaFunction = lambda.Function.fromFunctionArn(
        this,
        `${prefix}${func.lambda}`,
        `arn:aws:lambda:${region}:${account}:function:${prefix}${func.lambda}`
      );

      const lambdaIntegration = new apigateway.LambdaIntegration(
        lambdaFunction
      );

      func.routes.forEach((route) => {
        const { path, method } = route;

        if (!path || !method) {
          throw new Error(`Invalid route config for function: ${func.lambda}`);
        }

        if (!validMethods.includes(method)) {
          throw new Error(`Unsupported method ${method} in route: ${path}`);
        }

        const pathSegments = path.split("/").filter((p) => p !== "");
        const isProxy = path.includes("{proxy+}");

        const createResourcePath = (segments) => {
          let current = api.root;
          for (const segment of segments) {
            current =
              current.getResource(segment) || current.addResource(segment);
          }
          return current;
        };

        const addMethodOnce = (res, method) => {
          if (method === "OPTIONS") return;
          const key = `${res.node.path}:${method}`;
          if (methodMap.has(key)) return;
          res.addMethod(method, lambdaIntegration);
          methodMap.set(key, true);
        };

        const methodsToAdd =
          method === "ANY"
            ? allowedMethodsForAny
            : !disallowedMethods.includes(method) && method !== "OPTIONS"
            ? [method]
            : [];

        if (methodsToAdd.length === 0) return;

        if (isProxy) {
          const baseSegments = pathSegments.slice(
            0,
            pathSegments.indexOf("{proxy+}")
          );
          const baseResource = createResourcePath(baseSegments);

          const proxyResource =
            baseResource.getResource("{proxy+}") ||
            baseResource.addProxy({ anyMethod: false });
          methodsToAdd.forEach((m) => addMethodOnce(proxyResource, m));
        } else {
          const resource = createResourcePath(pathSegments);
          methodsToAdd.forEach((m) => addMethodOnce(resource, m));
        }
      });
    });
  }
}

module.exports = { ApiStack };
