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
To use the `LambdaLayerVersionCleaner` in your CDK project, simply import it and add it to your stack. Note that the cleaner will delete old versions of Lambda Layers even if they are associated with Lambda functions. Please ensure that you are aware of this behavior before using the cleaner in your project.
### JavaScript / TypeScript
```javascript
import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import { LambdaLayerVersionCleaner } from 'lambda-layer-version-cleaner';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'ExampleStack');

new LambdaLayerVersionCleaner(stack, 'LambdaLayerVersionCleaner', {
  retainVersions: 10,
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
    retain_versions=10,
    layer_cleaner_schedule=Schedule.rate(Duration.days(7))
)

app.synth()
```
## Configuration
The `LambdaLayerVersionCleaner` construct takes two required parameters and two optional parameters:
- `retainVersions`: The number of layer versions to retain, specified as a positive integer. The cleaner will delete older versions beyond this count. Note that if a Layer has only one version, it won't be deleted.
- `layerCleanerSchedule`: The schedule for running the cleanup process.

The optional parameters are:
- `handlerTimeout` (default: `cdk.Duration.minutes(15)`): Maximum allowed runtime for the Lambda function.
- `handlerMemorySize` (default: `256`): Amount of memory allocated to the Lambda function.
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersionCleaner <a name="LambdaLayerVersionCleaner" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner"></a>

Lambda Layer Version Cleaner Construct.

This construct creates a Lambda function that deletes old versions of a Lambda Layer. The function is
scheduled to run at a regular interval using an EventBridge rule. The number of versions to retain
must be specified as a positive integer using the `ILambdaLayerVersionCleanerProps` interface.
The function execution schedule is also required to be set in the `ILambdaLayerVersionCleanerProps` interface.

#### Initializers <a name="Initializers" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer"></a>

```typescript
import { LambdaLayerVersionCleaner } from 'lambda-layer-version-cleaner'

new LambdaLayerVersionCleaner(scope: Construct, id: string, props: ILambdaLayerVersionCleanerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.props">props</a></code> | <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps">ILambdaLayerVersionCleanerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.props"></a>

- *Type:* <a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps">ILambdaLayerVersionCleanerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.isConstruct"></a>

```typescript
import { LambdaLayerVersionCleaner } from 'lambda-layer-version-cleaner'

LambdaLayerVersionCleaner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.handler">handler</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handler`<sup>Required</sup> <a name="handler" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.handler"></a>

```typescript
public readonly handler: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `rule`<sup>Required</sup> <a name="rule" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ILambdaLayerVersionCleanerProps <a name="ILambdaLayerVersionCleanerProps" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps"></a>

- *Implemented By:* <a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps">ILambdaLayerVersionCleanerProps</a>

Properties for `LambdaLayerVersionCleaner`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.layerCleanerSchedule">layerCleanerSchedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Schedule for the function execution (no default value). |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.retainVersions">retainVersions</a></code> | <code>number</code> | Number of versions to retain (no default value, must be a positive integer). |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.handlerMemorySize">handlerMemorySize</a></code> | <code>number</code> | Amount of memory allocated to the Lambda function (default is 256MB). |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.handlerTimeout">handlerTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Maximum allowed runtime for the Lambda function (default is 15 minutes). |

---

##### `layerCleanerSchedule`<sup>Required</sup> <a name="layerCleanerSchedule" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.layerCleanerSchedule"></a>

```typescript
public readonly layerCleanerSchedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Schedule for the function execution (no default value).

---

##### `retainVersions`<sup>Required</sup> <a name="retainVersions" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.retainVersions"></a>

```typescript
public readonly retainVersions: number;
```

- *Type:* number

Number of versions to retain (no default value, must be a positive integer).

---

##### `handlerMemorySize`<sup>Optional</sup> <a name="handlerMemorySize" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.handlerMemorySize"></a>

```typescript
public readonly handlerMemorySize: number;
```

- *Type:* number
- *Default:* 256

Amount of memory allocated to the Lambda function (default is 256MB).

---

##### `handlerTimeout`<sup>Optional</sup> <a name="handlerTimeout" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.handlerTimeout"></a>

```typescript
public readonly handlerTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* cdk.Duration.minutes(15)

Maximum allowed runtime for the Lambda function (default is 15 minutes).

---

