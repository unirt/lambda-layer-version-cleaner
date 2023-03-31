const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'unirt',
  authorAddress: 'lunirtc@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'lambda-layer-version-cleaner',
  repositoryUrl: 'https://github.com/lunirtc/lambda-layer-version-cleaner.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();