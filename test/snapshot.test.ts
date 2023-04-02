import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import { LambdaLayerVersionCleaner } from '../src/index';

test('snapshot test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ExampleStack');
  new LambdaLayerVersionCleaner(stack, 'LambdaLayerVersionCleaner', {
    retainVersions: 10,
    layerCleanerSchedule: events.Schedule.rate(cdk.Duration.days(7)),
  });
  const template = Template.fromStack(stack).toJSON();

  expect(template).toMatchSnapshot();
});