const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");
const certificatemanager = require("aws-cdk-lib/aws-certificatemanager");
const fs = require("fs");

class CloudFrontStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const prefix = props.env.prefix;
    const customDomain = props.env.customDomain;
    const s3Config = JSON.parse(
      fs.readFileSync("./config/cloudfront-config.json", "utf-8"),
    );

    const removalPolicyMap = {
      RETAIN: cdk.RemovalPolicy.RETAIN,
      DESTROY: cdk.RemovalPolicy.DESTROY,
      SNAPSHOT: cdk.RemovalPolicy.SNAPSHOT,
    };

    const removalPolicy =
      removalPolicyMap[s3Config.removalPolicy] || cdk.RemovalPolicy.RETAIN;

    let reactDistributionId = null;
    let staticDistributionId = null;

    let certificateArn = null;

    certificateArn = certificatemanager.Certificate.fromCertificateArn(
      this,
      `${prefix}CloudFrontCertificate`,
      props.env.certificateArn,
    );

    s3Config.bucketDetails.forEach((bucketDetail) => {
      let domainNames = bucketDetail.bucketName.includes("react")
        ? [props.env.rootDomain]
        : bucketDetail.bucketName.includes("static")
          ? [props.env.staticDomain]
          : undefined;

      const s3Bucket = new s3.Bucket(
        this,
        `${prefix}${bucketDetail.bucketName}`,
        {
          bucketName: `${prefix}${bucketDetail.bucketName}`,
          versioned: s3Config.versioned,
          removalPolicy: removalPolicy,
          autoDeleteObjects: s3Config.autoDeleteObjects,
          publicReadAccess: s3Config.publicReadAccess,
          cors: [
            {
              allowedOrigins: bucketDetail.allowedOrigins,
              allowedMethods: [
                s3.HttpMethods.GET,
                s3.HttpMethods.POST,
                s3.HttpMethods.PUT,
                s3.HttpMethods.HEAD,
              ],
              allowedHeaders: ["*"],
              exposedHeaders: ["ETag"],
              maxAge: 3000,
            },
          ],
        },
      );

      if (bucketDetail.isCloudfrontRequired) {
        const cloudFrontOAI = new cloudfront.OriginAccessIdentity(
          this,
          `${prefix}${bucketDetail.bucketName}OAI`,
        );
        s3Bucket.grantRead(cloudFrontOAI);

        const distribution = new cloudfront.Distribution(
          this,
          `${prefix}${bucketDetail.bucketName}distribution`,
          {
            domainNames: domainNames || [],
            certificate: certificateArn || undefined,
            defaultRootObject: bucketDetail.hasDefaultRoot
              ? bucketDetail.defaultRootObject
              : undefined,
            defaultBehavior: {
              origin: new origins.S3Origin(s3Bucket, {
                originAccessIdentity: cloudFrontOAI,
              }),
              viewerProtocolPolicy:
                cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            errorResponses: [
              {
                httpStatus: 403,
                responseHttpStatus: 200,
                responsePagePath: "/index.html",
                ttl: cdk.Duration.seconds(0),
              },
              {
                httpStatus: 404,
                responseHttpStatus: 200,
                responsePagePath: "/index.html",
                ttl: cdk.Duration.seconds(0),
              },
            ],
          },
        );

        if (bucketDetail.bucketName.includes("react")) {
          reactDistributionId = distribution.distributionId;
        } else if (bucketDetail.bucketName.includes("static")) {
          staticDistributionId = distribution.distributionId;
        }
      }
    });

    if (reactDistributionId) {
      new cdk.CfnOutput(this, "ReactCloudFrontDistributionId", {
        value: reactDistributionId,
        description: "CloudFront Distribution ID for React app",
        exportName: `${prefix}ReactCloudFrontDistributionId`,
      });
    }

    if (staticDistributionId) {
      new cdk.CfnOutput(this, "StaticCloudFrontDistributionId", {
        value: staticDistributionId,
        description: "CloudFront Distribution ID for Static assets",
        exportName: `${prefix}StaticCloudFrontDistributionId`,
      });
    }
  }
}

module.exports = { CloudFrontStack };
