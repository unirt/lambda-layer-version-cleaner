[![NPM version](https://badge.fury.io/js/lambda-layer-version-cleaner.svg)](https://badge.fury.io/js/lambda-layer-version-cleaner)
[![PyPI version](https://badge.fury.io/py/lambda-layer-version-cleaner.svg)](https://badge.fury.io/py/lambda-layer-version-cleaner)
![Release](https://github.com/unirt/lambda-layer-version-cleaner/workflows/release/badge.svg)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
# lambda-layer-version-cleaner
`lambda-layer-version-cleaner` is a CDK Construct that helps you manage and automatically clean up old versions of AWS Lambda Layers. It works with both JavaScript / TypeScript and Python CDK apps. Please note that this cleaner will only clean up versions of Lambda Layers in the region where it's deployed.
## Installation
For JavaScript / TypeScript projects:
```bash
npm install lambda-layer-version-cleaner
```

For Python projects:
```bash
pip install lambda-layer-version-cleaner
```
## Usage
To use the `LambdaLayerVersionCleaner` in your CDK project, simply import it and add it to your stack.
### JavaScript / TypeScript
```javascript
import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import { LambdaLayerVersionCleaner } from 'lambda-layer-version-cleaner';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'ExampleStack');

new LambdaLayerVersionCleaner(stack, 'LambdaLayerVersionCleaner', {
  retainVersions: '5',
  layerCleanerSchedule: events.Schedule.rate(cdk.Duration.days(7)),
});
```
### Python
```python
from aws_cdk import core as cdk
from aws_cdk.aws_events import Schedule
from aws_cdk.core import Duration
from lambda_layer_version_cleaner import LambdaLayerVersionCleaner

app = cdk.App()
stack = cdk.Stack(app, "ExampleStack")

LambdaLayerVersionCleaner(stack, "LambdaLayerVersionCleaner",
    retain_versions="5",
    layer_cleaner_schedule=Schedule.rate(Duration.days(7))
)

app.synth()
```
## Configuration
The `LambdaLayerVersionCleaner` construct takes two optional parameters:
- `retainVersions` (default: `'5'`): The number of layer versions to retain, specified as a string containing a positive integer. The cleaner will delete older versions beyond this count. Note that this value should be a string, not a number. If not specified, the default is '5'. Note that if a Layer has only one version, it won't be deleted.
- `layerCleanerSchedule` (default: `events.Schedule.rate(cdk.Duration.days(1))`): The schedule for running the cleanup process. If not specified, the default is to run once per day.