import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaLayerVersionCleaner } from '../src/index';

test('snapshot test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'ExampleStack');
  new LambdaLayerVersionCleaner(stack, 'LambdaLayerVersionCleaner');
  const template = Template.fromStack(stack).toJSON();

  expect(template).toMatchSnapshot();
});