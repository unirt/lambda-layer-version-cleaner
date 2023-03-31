# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersionCleaner <a name="LambdaLayerVersionCleaner" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner"></a>

#### Initializers <a name="Initializers" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer"></a>

```typescript
import { LambdaLayerVersionCleaner } from 'lambda-layer-version-cleaner'

new LambdaLayerVersionCleaner(scope: Construct, id: string, props?: ILambdaLayerVersionCleanerProps)
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

##### `props`<sup>Optional</sup> <a name="props" id="lambda-layer-version-cleaner.LambdaLayerVersionCleaner.Initializer.parameter.props"></a>

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


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.layerCleanerSchedule">layerCleanerSchedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | *No description.* |
| <code><a href="#lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.retainVersions">retainVersions</a></code> | <code>string</code> | *No description.* |

---

##### `layerCleanerSchedule`<sup>Optional</sup> <a name="layerCleanerSchedule" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.layerCleanerSchedule"></a>

```typescript
public readonly layerCleanerSchedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

---

##### `retainVersions`<sup>Optional</sup> <a name="retainVersions" id="lambda-layer-version-cleaner.ILambdaLayerVersionCleanerProps.property.retainVersions"></a>

```typescript
public readonly retainVersions: string;
```

- *Type:* string

---

