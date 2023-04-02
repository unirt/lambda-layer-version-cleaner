import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { DeleteOldLambdaLayerVersionsFunction } from './lambda/delete-old-lambda-layer-versions-function';

/**
 * Properties for `LambdaLayerVersionCleaner`
 */
export interface ILambdaLayerVersionCleanerProps {
  /**
   * Number of versions to retain (no default value, must be a positive integer)
   */
  retainVersions: number;

  /**
   * Schedule for the function execution (no default value)
   */
  layerCleanerSchedule: events.Schedule;

  /**
   * Maximum allowed runtime for the Lambda function (default is 15 minutes)
   * @default cdk.Duration.minutes(15)
   */
  handlerTimeout?: cdk.Duration;

  /**
   * Amount of memory allocated to the Lambda function (default is 256MB)
   * @default 256
   */
  handlerMemorySize?: number;
}

/**
 * Lambda Layer Version Cleaner Construct
 *
 * This construct creates a Lambda function that deletes old versions of a Lambda Layer. The function is
 * scheduled to run at a regular interval using an EventBridge rule. The number of versions to retain
 * must be specified as a positive integer using the `ILambdaLayerVersionCleanerProps` interface.
 * The function execution schedule is also required to be set in the `ILambdaLayerVersionCleanerProps` interface.
 */
export class LambdaLayerVersionCleaner extends Construct {
  readonly handler: lambda.Function;
  readonly rule: events.Rule;

  constructor(scope: Construct, id: string, props: ILambdaLayerVersionCleanerProps) {
    super(scope, id);

    // Check if retainVersions is a positive integer
    if (props.retainVersions <= 0 || !Number.isInteger(props.retainVersions)) {
      throw new Error('Invalid retainVersions value. It should be a positive integer.');
    }

    // Create the Lambda function to delete old layer versions
    this.handler = new DeleteOldLambdaLayerVersionsFunction(this, 'DeleteOldLambdaLayerVersionsFunction', {
      environment: { RETAIN_VERSIONS: props.retainVersions.toString() },
      timeout: props.handlerTimeout ?? cdk.Duration.minutes(15), // Set default timeout to 15 minutes
      memorySize: props.handlerMemorySize ?? 256, // Set default memory size to 256MB
    });

    // Create the LogGroup for the Lambda function
    new logs.LogGroup(this, `${this.handler.node.id}LogGroup`, {
      logGroupName: `/aws/lambda/${this.handler.functionName}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // Add the necessary IAM permissions for the Lambda function
    const handlerPolicyStatement = new iam.PolicyStatement({
      actions: ['lambda:ListLayers', 'lambda:ListLayerVersions', 'lambda:DeleteLayerVersion'],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    });
    this.handler.addToRolePolicy(handlerPolicyStatement);

    // Create the EventBridge rule for the Lambda function execution schedule
    this.rule = new events.Rule(this, 'LayerCleanerScheduleRule', {
      schedule: props.layerCleanerSchedule,
    });
    this.rule.addTarget(new targets.LambdaFunction(this.handler));

    // Add the necessary permissions for the EventBridge rule to invoke the Lambda function
    targets.addLambdaPermission(this.rule, this.handler);
  }
}