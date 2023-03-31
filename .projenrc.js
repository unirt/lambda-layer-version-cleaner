const { awscdk } = require('projen');

const PROJECT_NAME = 'lambda-layer-version-cleaner';
const PROJECT_DESCRIPTION = 'A serverless application to automatically manage and delete old AWS Lambda Layer versions, retaining only the specified number of most recent versions.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'unirt',
  authorAddress: 'lunirtc@gmail.com',
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  keywords: ['aws', 'aws-cdk', 'cdk', 'lambda', 'lambda layer', 'lambda layer version', 'lambda layer version cleaner'],
  stability: 'experimental',
  repositoryUrl: 'https://github.com/unirt/lambda-layer-version-cleaner.git',
  defaultReleaseBranch: 'main',
  autoApproveOptions: {
    allowedUsernames: ['unirt'],
  },
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  license: 'Apache-2.0',
  cdkVersion: '2.72.1',
  compat: true,
  lambdaOptions: {
    runtime: awscdk.LambdaRuntime.NODEJS_18_X,
    bundlingOptions: {
      externals: ['aws-sdk', '@aws-sdk/*'],
      sourcemap: true,
    },
  },
  devDeps: [
    '@aws-sdk/client-lambda',
    '@types/aws-lambda',
  ],
  publishToPypi: {
    distName: PROJECT_NAME,
    module: 'lambda_layer_version_cleaner',
  },
});

project.eslint.addOverride({
  files: ['**/lambda/**/*.ts'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
});

project.synth();