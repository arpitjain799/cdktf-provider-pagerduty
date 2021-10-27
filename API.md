# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Addon <a name="@cdktf/provider-pagerduty.Addon"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/addon.html pagerduty_addon}.

#### Initializers <a name="@cdktf/provider-pagerduty.Addon.Initializer"></a>

```typescript
import { Addon } from '@cdktf/provider-pagerduty'

new Addon(scope: Construct, id: string, config: AddonConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.AddonConfig`](#@cdktf/provider-pagerduty.AddonConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Addon.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `srcInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Addon.property.srcInput"></a>

```typescript
public readonly srcInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `src`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Addon.property.src"></a>

```typescript
public readonly src: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Addon.property.tfResourceType"></a>

- *Type:* `string`

---

### BusinessService <a name="@cdktf/provider-pagerduty.BusinessService"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html pagerduty_business_service}.

#### Initializers <a name="@cdktf/provider-pagerduty.BusinessService.Initializer"></a>

```typescript
import { BusinessService } from '@cdktf/provider-pagerduty'

new BusinessService(scope: Construct, id: string, config: BusinessServiceConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.BusinessServiceConfig`](#@cdktf/provider-pagerduty.BusinessServiceConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDescription` <a name="@cdktf/provider-pagerduty.BusinessService.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetPointOfContact` <a name="@cdktf/provider-pagerduty.BusinessService.resetPointOfContact"></a>

```typescript
public resetPointOfContact()
```

##### `resetTeam` <a name="@cdktf/provider-pagerduty.BusinessService.resetTeam"></a>

```typescript
public resetTeam()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.BusinessService.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `selfAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* `string`

---

##### `summary`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pointOfContactInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.pointOfContactInput"></a>

```typescript
public readonly pointOfContactInput: string;
```

- *Type:* `string`

---

##### `teamInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `pointOfContact`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.pointOfContact"></a>

```typescript
public readonly pointOfContact: string;
```

- *Type:* `string`

---

##### `team`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.BusinessService.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyBusinessService <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/business_service.html pagerduty_business_service}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.Initializer"></a>

```typescript
import { DataPagerdutyBusinessService } from '@cdktf/provider-pagerduty'

new DataPagerdutyBusinessService(scope: Construct, id: string, config: DataPagerdutyBusinessServiceConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig`](#@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessService.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyEscalationPolicy <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/escalation_policy.html pagerduty_escalation_policy}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.Initializer"></a>

```typescript
import { DataPagerdutyEscalationPolicy } from '@cdktf/provider-pagerduty'

new DataPagerdutyEscalationPolicy(scope: Construct, id: string, config: DataPagerdutyEscalationPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig`](#@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicy.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyExtensionSchema <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/extension_schema.html pagerduty_extension_schema}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.Initializer"></a>

```typescript
import { DataPagerdutyExtensionSchema } from '@cdktf/provider-pagerduty'

new DataPagerdutyExtensionSchema(scope: Construct, id: string, config: DataPagerdutyExtensionSchemaConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig`](#@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchema.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyPriority <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/priority.html pagerduty_priority}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.Initializer"></a>

```typescript
import { DataPagerdutyPriority } from '@cdktf/provider-pagerduty'

new DataPagerdutyPriority(scope: Construct, id: string, config: DataPagerdutyPriorityConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig`](#@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyPriority.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyRuleset <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/ruleset.html pagerduty_ruleset}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.Initializer"></a>

```typescript
import { DataPagerdutyRuleset } from '@cdktf/provider-pagerduty'

new DataPagerdutyRuleset(scope: Construct, id: string, config: DataPagerdutyRulesetConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig`](#@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `routingKeys`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.property.routingKeys"></a>

```typescript
public readonly routingKeys: string[];
```

- *Type:* `string`[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyRuleset.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutySchedule <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/schedule.html pagerduty_schedule}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.Initializer"></a>

```typescript
import { DataPagerdutySchedule } from '@cdktf/provider-pagerduty'

new DataPagerdutySchedule(scope: Construct, id: string, config: DataPagerdutyScheduleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig`](#@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutySchedule.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyService <a name="@cdktf/provider-pagerduty.DataPagerdutyService"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/service.html pagerduty_service}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyService.Initializer"></a>

```typescript
import { DataPagerdutyService } from '@cdktf/provider-pagerduty'

new DataPagerdutyService(scope: Construct, id: string, config: DataPagerdutyServiceConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyServiceConfig`](#@cdktf/provider-pagerduty.DataPagerdutyServiceConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyService.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyServiceIntegration <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html pagerduty_service_integration}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.Initializer"></a>

```typescript
import { DataPagerdutyServiceIntegration } from '@cdktf/provider-pagerduty'

new DataPagerdutyServiceIntegration(scope: Construct, id: string, config: DataPagerdutyServiceIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig`](#@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `integrationKey`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* `string`

---

##### `integrationSummaryInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.integrationSummaryInput"></a>

```typescript
public readonly integrationSummaryInput: string;
```

- *Type:* `string`

---

##### `serviceNameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* `string`

---

##### `integrationSummary`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.integrationSummary"></a>

```typescript
public readonly integrationSummary: string;
```

- *Type:* `string`

---

##### `serviceName`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegration.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyTeam <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html pagerduty_team}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.Initializer"></a>

```typescript
import { DataPagerdutyTeam } from '@cdktf/provider-pagerduty'

new DataPagerdutyTeam(scope: Construct, id: string, config: DataPagerdutyTeamConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyTeamConfig`](#@cdktf/provider-pagerduty.DataPagerdutyTeamConfig)

---

#### Methods <a name="Methods"></a>

##### `resetParent` <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.resetParent"></a>

```typescript
public resetParent()
```


#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `parentInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `parent`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyTeam.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyUser <a name="@cdktf/provider-pagerduty.DataPagerdutyUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/user.html pagerduty_user}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.Initializer"></a>

```typescript
import { DataPagerdutyUser } from '@cdktf/provider-pagerduty'

new DataPagerdutyUser(scope: Construct, id: string, config: DataPagerdutyUserConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyUserConfig`](#@cdktf/provider-pagerduty.DataPagerdutyUserConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `emailInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyUser.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyUserContactMethod <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html pagerduty_user_contact_method}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.Initializer"></a>

```typescript
import { DataPagerdutyUserContactMethod } from '@cdktf/provider-pagerduty'

new DataPagerdutyUserContactMethod(scope: Construct, id: string, config: DataPagerdutyUserContactMethodConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig`](#@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `labelInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethod.property.tfResourceType"></a>

- *Type:* `string`

---

### DataPagerdutyVendor <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/vendor.html pagerduty_vendor}.

#### Initializers <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.Initializer"></a>

```typescript
import { DataPagerdutyVendor } from '@cdktf/provider-pagerduty'

new DataPagerdutyVendor(scope: Construct, id: string, config: DataPagerdutyVendorConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.DataPagerdutyVendorConfig`](#@cdktf/provider-pagerduty.DataPagerdutyVendorConfig)

---

#### Methods <a name="Methods"></a>

##### `resetNameRegex` <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.resetNameRegex"></a>

```typescript
public resetNameRegex()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `nameRegexInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `nameRegex`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.DataPagerdutyVendor.property.tfResourceType"></a>

- *Type:* `string`

---

### EscalationPolicy <a name="@cdktf/provider-pagerduty.EscalationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html pagerduty_escalation_policy}.

#### Initializers <a name="@cdktf/provider-pagerduty.EscalationPolicy.Initializer"></a>

```typescript
import { EscalationPolicy } from '@cdktf/provider-pagerduty'

new EscalationPolicy(scope: Construct, id: string, config: EscalationPolicyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.EscalationPolicyConfig`](#@cdktf/provider-pagerduty.EscalationPolicyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDescription` <a name="@cdktf/provider-pagerduty.EscalationPolicy.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetNumLoops` <a name="@cdktf/provider-pagerduty.EscalationPolicy.resetNumLoops"></a>

```typescript
public resetNumLoops()
```

##### `resetTeams` <a name="@cdktf/provider-pagerduty.EscalationPolicy.resetTeams"></a>

```typescript
public resetTeams()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `numLoopsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.numLoopsInput"></a>

```typescript
public readonly numLoopsInput: number;
```

- *Type:* `number`

---

##### `ruleInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.ruleInput"></a>

```typescript
public readonly ruleInput: EscalationPolicyRule[];
```

- *Type:* [`@cdktf/provider-pagerduty.EscalationPolicyRule`](#@cdktf/provider-pagerduty.EscalationPolicyRule)[]

---

##### `teamsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `rule`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.rule"></a>

```typescript
public readonly rule: EscalationPolicyRule[];
```

- *Type:* [`@cdktf/provider-pagerduty.EscalationPolicyRule`](#@cdktf/provider-pagerduty.EscalationPolicyRule)[]

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `numLoops`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.numLoops"></a>

```typescript
public readonly numLoops: number;
```

- *Type:* `number`

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.EscalationPolicy.property.tfResourceType"></a>

- *Type:* `string`

---

### EventRule <a name="@cdktf/provider-pagerduty.EventRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html pagerduty_event_rule}.

#### Initializers <a name="@cdktf/provider-pagerduty.EventRule.Initializer"></a>

```typescript
import { EventRule } from '@cdktf/provider-pagerduty'

new EventRule(scope: Construct, id: string, config: EventRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.EventRuleConfig`](#@cdktf/provider-pagerduty.EventRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAdvancedConditionJson` <a name="@cdktf/provider-pagerduty.EventRule.resetAdvancedConditionJson"></a>

```typescript
public resetAdvancedConditionJson()
```


#### Properties <a name="Properties"></a>

##### `catchAll`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.catchAll"></a>

```typescript
public readonly catchAll: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `actionJsonInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.actionJsonInput"></a>

```typescript
public readonly actionJsonInput: string;
```

- *Type:* `string`

---

##### `advancedConditionJsonInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.advancedConditionJsonInput"></a>

```typescript
public readonly advancedConditionJsonInput: string;
```

- *Type:* `string`

---

##### `conditionJsonInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.conditionJsonInput"></a>

```typescript
public readonly conditionJsonInput: string;
```

- *Type:* `string`

---

##### `actionJson`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.actionJson"></a>

```typescript
public readonly actionJson: string;
```

- *Type:* `string`

---

##### `conditionJson`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.conditionJson"></a>

```typescript
public readonly conditionJson: string;
```

- *Type:* `string`

---

##### `advancedConditionJson`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRule.property.advancedConditionJson"></a>

```typescript
public readonly advancedConditionJson: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.EventRule.property.tfResourceType"></a>

- *Type:* `string`

---

### Extension <a name="@cdktf/provider-pagerduty.Extension"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html pagerduty_extension}.

#### Initializers <a name="@cdktf/provider-pagerduty.Extension.Initializer"></a>

```typescript
import { Extension } from '@cdktf/provider-pagerduty'

new Extension(scope: Construct, id: string, config: ExtensionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ExtensionConfig`](#@cdktf/provider-pagerduty.ExtensionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetConfig` <a name="@cdktf/provider-pagerduty.Extension.resetConfig"></a>

```typescript
public resetConfig()
```

##### `resetEndpointUrl` <a name="@cdktf/provider-pagerduty.Extension.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl()
```

##### `resetName` <a name="@cdktf/provider-pagerduty.Extension.resetName"></a>

```typescript
public resetName()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.Extension.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `configInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* `string`

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* `string`

---

##### `extensionObjectsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.extensionObjectsInput"></a>

```typescript
public readonly extensionObjectsInput: string[];
```

- *Type:* `string`[]

---

##### `extensionSchemaInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.extensionSchemaInput"></a>

```typescript
public readonly extensionSchemaInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `extensionObjects`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* `string`[]

---

##### `extensionSchema`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Extension.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* `string`

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* `string`

---

##### `endpointUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Extension.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Extension.property.tfResourceType"></a>

- *Type:* `string`

---

### ExtensionServicenow <a name="@cdktf/provider-pagerduty.ExtensionServicenow"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html pagerduty_extension_servicenow}.

#### Initializers <a name="@cdktf/provider-pagerduty.ExtensionServicenow.Initializer"></a>

```typescript
import { ExtensionServicenow } from '@cdktf/provider-pagerduty'

new ExtensionServicenow(scope: Construct, id: string, config: ExtensionServicenowConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ExtensionServicenowConfig`](#@cdktf/provider-pagerduty.ExtensionServicenowConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEndpointUrl` <a name="@cdktf/provider-pagerduty.ExtensionServicenow.resetEndpointUrl"></a>

```typescript
public resetEndpointUrl()
```

##### `resetName` <a name="@cdktf/provider-pagerduty.ExtensionServicenow.resetName"></a>

```typescript
public resetName()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.ExtensionServicenow.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.endpointUrlInput"></a>

```typescript
public readonly endpointUrlInput: string;
```

- *Type:* `string`

---

##### `extensionObjectsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.extensionObjectsInput"></a>

```typescript
public readonly extensionObjectsInput: string[];
```

- *Type:* `string`[]

---

##### `extensionSchemaInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.extensionSchemaInput"></a>

```typescript
public readonly extensionSchemaInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `refererInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.refererInput"></a>

```typescript
public readonly refererInput: string;
```

- *Type:* `string`

---

##### `snowPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.snowPasswordInput"></a>

```typescript
public readonly snowPasswordInput: string;
```

- *Type:* `string`

---

##### `snowUserInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.snowUserInput"></a>

```typescript
public readonly snowUserInput: string;
```

- *Type:* `string`

---

##### `syncOptionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.syncOptionsInput"></a>

```typescript
public readonly syncOptionsInput: string;
```

- *Type:* `string`

---

##### `targetInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* `string`

---

##### `taskTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `extensionObjects`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* `string`[]

---

##### `extensionSchema`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* `string`

---

##### `referer`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.referer"></a>

```typescript
public readonly referer: string;
```

- *Type:* `string`

---

##### `snowPassword`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.snowPassword"></a>

```typescript
public readonly snowPassword: string;
```

- *Type:* `string`

---

##### `snowUser`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.snowUser"></a>

```typescript
public readonly snowUser: string;
```

- *Type:* `string`

---

##### `syncOptions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.syncOptions"></a>

```typescript
public readonly syncOptions: string;
```

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* `string`

---

##### `taskType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* `string`

---

##### `endpointUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.ExtensionServicenow.property.tfResourceType"></a>

- *Type:* `string`

---

### MaintenanceWindow <a name="@cdktf/provider-pagerduty.MaintenanceWindow"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window.html pagerduty_maintenance_window}.

#### Initializers <a name="@cdktf/provider-pagerduty.MaintenanceWindow.Initializer"></a>

```typescript
import { MaintenanceWindow } from '@cdktf/provider-pagerduty'

new MaintenanceWindow(scope: Construct, id: string, config: MaintenanceWindowConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.MaintenanceWindowConfig`](#@cdktf/provider-pagerduty.MaintenanceWindowConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDescription` <a name="@cdktf/provider-pagerduty.MaintenanceWindow.resetDescription"></a>

```typescript
public resetDescription()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `endTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* `string`

---

##### `servicesInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* `string`[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

---

##### `services`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* `string`[]

---

##### `startTime`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.MaintenanceWindow.property.tfResourceType"></a>

- *Type:* `string`

---

### PagerdutyProvider <a name="@cdktf/provider-pagerduty.PagerdutyProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty pagerduty}.

#### Initializers <a name="@cdktf/provider-pagerduty.PagerdutyProvider.Initializer"></a>

```typescript
import { PagerdutyProvider } from '@cdktf/provider-pagerduty'

new PagerdutyProvider(scope: Construct, id: string, config: PagerdutyProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.PagerdutyProviderConfig`](#@cdktf/provider-pagerduty.PagerdutyProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-pagerduty.PagerdutyProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetSkipCredentialsValidation` <a name="@cdktf/provider-pagerduty.PagerdutyProvider.resetSkipCredentialsValidation"></a>

```typescript
public resetSkipCredentialsValidation()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.skipCredentialsValidationInput"></a>

```typescript
public readonly skipCredentialsValidationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `tokenInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.PagerdutyProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### ResponsePlay <a name="@cdktf/provider-pagerduty.ResponsePlay"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html pagerduty_response_play}.

#### Initializers <a name="@cdktf/provider-pagerduty.ResponsePlay.Initializer"></a>

```typescript
import { ResponsePlay } from '@cdktf/provider-pagerduty'

new ResponsePlay(scope: Construct, id: string, config: ResponsePlayConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlayConfig`](#@cdktf/provider-pagerduty.ResponsePlayConfig)

---

#### Methods <a name="Methods"></a>

##### `resetConferenceNumber` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetConferenceNumber"></a>

```typescript
public resetConferenceNumber()
```

##### `resetConferenceUrl` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetConferenceUrl"></a>

```typescript
public resetConferenceUrl()
```

##### `resetDescription` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetResponder` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetResponder"></a>

```typescript
public resetResponder()
```

##### `resetRespondersMessage` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetRespondersMessage"></a>

```typescript
public resetRespondersMessage()
```

##### `resetRunnability` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetRunnability"></a>

```typescript
public resetRunnability()
```

##### `resetSubscriber` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetSubscriber"></a>

```typescript
public resetSubscriber()
```

##### `resetSubscribersMessage` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetSubscribersMessage"></a>

```typescript
public resetSubscribersMessage()
```

##### `resetTeam` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetTeam"></a>

```typescript
public resetTeam()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.ResponsePlay.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `conferenceNumberInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.conferenceNumberInput"></a>

```typescript
public readonly conferenceNumberInput: string;
```

- *Type:* `string`

---

##### `conferenceUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.conferenceUrlInput"></a>

```typescript
public readonly conferenceUrlInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `fromInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `responderInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.responderInput"></a>

```typescript
public readonly responderInput: ResponsePlayResponder[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlayResponder`](#@cdktf/provider-pagerduty.ResponsePlayResponder)[]

---

##### `respondersMessageInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.respondersMessageInput"></a>

```typescript
public readonly respondersMessageInput: string;
```

- *Type:* `string`

---

##### `runnabilityInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.runnabilityInput"></a>

```typescript
public readonly runnabilityInput: string;
```

- *Type:* `string`

---

##### `subscriberInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.subscriberInput"></a>

```typescript
public readonly subscriberInput: ResponsePlaySubscriber[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlaySubscriber`](#@cdktf/provider-pagerduty.ResponsePlaySubscriber)[]

---

##### `subscribersMessageInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.subscribersMessageInput"></a>

```typescript
public readonly subscribersMessageInput: string;
```

- *Type:* `string`

---

##### `teamInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.teamInput"></a>

```typescript
public readonly teamInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `conferenceNumber`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.conferenceNumber"></a>

```typescript
public readonly conferenceNumber: string;
```

- *Type:* `string`

---

##### `conferenceUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.conferenceUrl"></a>

```typescript
public readonly conferenceUrl: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `responder`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.responder"></a>

```typescript
public readonly responder: ResponsePlayResponder[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlayResponder`](#@cdktf/provider-pagerduty.ResponsePlayResponder)[]

---

##### `respondersMessage`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.respondersMessage"></a>

```typescript
public readonly respondersMessage: string;
```

- *Type:* `string`

---

##### `runnability`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.runnability"></a>

```typescript
public readonly runnability: string;
```

- *Type:* `string`

---

##### `subscriber`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.subscriber"></a>

```typescript
public readonly subscriber: ResponsePlaySubscriber[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlaySubscriber`](#@cdktf/provider-pagerduty.ResponsePlaySubscriber)[]

---

##### `subscribersMessage`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.subscribersMessage"></a>

```typescript
public readonly subscribersMessage: string;
```

- *Type:* `string`

---

##### `team`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlay.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.ResponsePlay.property.tfResourceType"></a>

- *Type:* `string`

---

### Ruleset <a name="@cdktf/provider-pagerduty.Ruleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html pagerduty_ruleset}.

#### Initializers <a name="@cdktf/provider-pagerduty.Ruleset.Initializer"></a>

```typescript
import { Ruleset } from '@cdktf/provider-pagerduty'

new Ruleset(scope: Construct, id: string, config: RulesetConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetConfig`](#@cdktf/provider-pagerduty.RulesetConfig)

---

#### Methods <a name="Methods"></a>

##### `putTeam` <a name="@cdktf/provider-pagerduty.Ruleset.putTeam"></a>

```typescript
public putTeam(value?: RulesetTeam)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Ruleset.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetTeam`](#@cdktf/provider-pagerduty.RulesetTeam)

---

##### `resetTeam` <a name="@cdktf/provider-pagerduty.Ruleset.resetTeam"></a>

```typescript
public resetTeam()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `routingKeys`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.routingKeys"></a>

```typescript
public readonly routingKeys: string[];
```

- *Type:* `string`[]

---

##### `team`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.team"></a>

```typescript
public readonly team: RulesetTeamOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetTeamOutputReference`](#@cdktf/provider-pagerduty.RulesetTeamOutputReference)

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `teamInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.teamInput"></a>

```typescript
public readonly teamInput: RulesetTeam;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetTeam`](#@cdktf/provider-pagerduty.RulesetTeam)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Ruleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Ruleset.property.tfResourceType"></a>

- *Type:* `string`

---

### RulesetRule <a name="@cdktf/provider-pagerduty.RulesetRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html pagerduty_ruleset_rule}.

#### Initializers <a name="@cdktf/provider-pagerduty.RulesetRule.Initializer"></a>

```typescript
import { RulesetRule } from '@cdktf/provider-pagerduty'

new RulesetRule(scope: Construct, id: string, config: RulesetRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConfig`](#@cdktf/provider-pagerduty.RulesetRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `putActions` <a name="@cdktf/provider-pagerduty.RulesetRule.putActions"></a>

```typescript
public putActions(value?: RulesetRuleActions)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActions`](#@cdktf/provider-pagerduty.RulesetRuleActions)

---

##### `putConditions` <a name="@cdktf/provider-pagerduty.RulesetRule.putConditions"></a>

```typescript
public putConditions(value?: RulesetRuleConditions)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditions`](#@cdktf/provider-pagerduty.RulesetRuleConditions)

---

##### `putTimeFrame` <a name="@cdktf/provider-pagerduty.RulesetRule.putTimeFrame"></a>

```typescript
public putTimeFrame(value?: RulesetRuleTimeFrame)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrame`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrame)

---

##### `resetActions` <a name="@cdktf/provider-pagerduty.RulesetRule.resetActions"></a>

```typescript
public resetActions()
```

##### `resetConditions` <a name="@cdktf/provider-pagerduty.RulesetRule.resetConditions"></a>

```typescript
public resetConditions()
```

##### `resetDisabled` <a name="@cdktf/provider-pagerduty.RulesetRule.resetDisabled"></a>

```typescript
public resetDisabled()
```

##### `resetPosition` <a name="@cdktf/provider-pagerduty.RulesetRule.resetPosition"></a>

```typescript
public resetPosition()
```

##### `resetTimeFrame` <a name="@cdktf/provider-pagerduty.RulesetRule.resetTimeFrame"></a>

```typescript
public resetTimeFrame()
```

##### `resetVariable` <a name="@cdktf/provider-pagerduty.RulesetRule.resetVariable"></a>

```typescript
public resetVariable()
```


#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.actions"></a>

```typescript
public readonly actions: RulesetRuleActionsOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference`](#@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference)

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.conditions"></a>

```typescript
public readonly conditions: RulesetRuleConditionsOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference`](#@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `timeFrame`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.timeFrame"></a>

```typescript
public readonly timeFrame: RulesetRuleTimeFrameOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference)

---

##### `actionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: RulesetRuleActions;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActions`](#@cdktf/provider-pagerduty.RulesetRuleActions)

---

##### `conditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: RulesetRuleConditions;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditions`](#@cdktf/provider-pagerduty.RulesetRuleConditions)

---

##### `disabledInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `positionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* `number`

---

##### `rulesetInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.rulesetInput"></a>

```typescript
public readonly rulesetInput: string;
```

- *Type:* `string`

---

##### `timeFrameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: RulesetRuleTimeFrame;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrame`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrame)

---

##### `variableInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.variableInput"></a>

```typescript
public readonly variableInput: RulesetRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleVariable`](#@cdktf/provider-pagerduty.RulesetRuleVariable)[]

---

##### `ruleset`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `position`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* `number`

---

##### `variable`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRule.property.variable"></a>

```typescript
public readonly variable: RulesetRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleVariable`](#@cdktf/provider-pagerduty.RulesetRuleVariable)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.RulesetRule.property.tfResourceType"></a>

- *Type:* `string`

---

### Schedule <a name="@cdktf/provider-pagerduty.Schedule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html pagerduty_schedule}.

#### Initializers <a name="@cdktf/provider-pagerduty.Schedule.Initializer"></a>

```typescript
import { Schedule } from '@cdktf/provider-pagerduty'

new Schedule(scope: Construct, id: string, config: ScheduleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ScheduleConfig`](#@cdktf/provider-pagerduty.ScheduleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDescription` <a name="@cdktf/provider-pagerduty.Schedule.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetName` <a name="@cdktf/provider-pagerduty.Schedule.resetName"></a>

```typescript
public resetName()
```

##### `resetOverflow` <a name="@cdktf/provider-pagerduty.Schedule.resetOverflow"></a>

```typescript
public resetOverflow()
```

##### `resetTeams` <a name="@cdktf/provider-pagerduty.Schedule.resetTeams"></a>

```typescript
public resetTeams()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `layerInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.layerInput"></a>

```typescript
public readonly layerInput: ScheduleLayer[];
```

- *Type:* [`@cdktf/provider-pagerduty.ScheduleLayer`](#@cdktf/provider-pagerduty.ScheduleLayer)[]

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `overflowInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.overflowInput"></a>

```typescript
public readonly overflowInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `teamsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* `string`[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* `string`

---

##### `layer`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.layer"></a>

```typescript
public readonly layer: ScheduleLayer[];
```

- *Type:* [`@cdktf/provider-pagerduty.ScheduleLayer`](#@cdktf/provider-pagerduty.ScheduleLayer)[]

---

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `overflow`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.overflow"></a>

```typescript
public readonly overflow: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Schedule.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Schedule.property.tfResourceType"></a>

- *Type:* `string`

---

### Service <a name="@cdktf/provider-pagerduty.Service"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html pagerduty_service}.

#### Initializers <a name="@cdktf/provider-pagerduty.Service.Initializer"></a>

```typescript
import { Service } from '@cdktf/provider-pagerduty'

new Service(scope: Construct, id: string, config: ServiceConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceConfig`](#@cdktf/provider-pagerduty.ServiceConfig)

---

#### Methods <a name="Methods"></a>

##### `putAlertGroupingParameters` <a name="@cdktf/provider-pagerduty.Service.putAlertGroupingParameters"></a>

```typescript
public putAlertGroupingParameters(value?: ServiceAlertGroupingParameters)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParameters`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParameters)

---

##### `putIncidentUrgencyRule` <a name="@cdktf/provider-pagerduty.Service.putIncidentUrgencyRule"></a>

```typescript
public putIncidentUrgencyRule(value?: ServiceIncidentUrgencyRule)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule)

---

##### `putSupportHours` <a name="@cdktf/provider-pagerduty.Service.putSupportHours"></a>

```typescript
public putSupportHours(value?: ServiceSupportHours)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceSupportHours`](#@cdktf/provider-pagerduty.ServiceSupportHours)

---

##### `resetAcknowledgementTimeout` <a name="@cdktf/provider-pagerduty.Service.resetAcknowledgementTimeout"></a>

```typescript
public resetAcknowledgementTimeout()
```

##### `resetAlertCreation` <a name="@cdktf/provider-pagerduty.Service.resetAlertCreation"></a>

```typescript
public resetAlertCreation()
```

##### `resetAlertGrouping` <a name="@cdktf/provider-pagerduty.Service.resetAlertGrouping"></a>

```typescript
public resetAlertGrouping()
```

##### `resetAlertGroupingParameters` <a name="@cdktf/provider-pagerduty.Service.resetAlertGroupingParameters"></a>

```typescript
public resetAlertGroupingParameters()
```

##### `resetAlertGroupingTimeout` <a name="@cdktf/provider-pagerduty.Service.resetAlertGroupingTimeout"></a>

```typescript
public resetAlertGroupingTimeout()
```

##### `resetAutoResolveTimeout` <a name="@cdktf/provider-pagerduty.Service.resetAutoResolveTimeout"></a>

```typescript
public resetAutoResolveTimeout()
```

##### `resetDescription` <a name="@cdktf/provider-pagerduty.Service.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetIncidentUrgencyRule` <a name="@cdktf/provider-pagerduty.Service.resetIncidentUrgencyRule"></a>

```typescript
public resetIncidentUrgencyRule()
```

##### `resetScheduledActions` <a name="@cdktf/provider-pagerduty.Service.resetScheduledActions"></a>

```typescript
public resetScheduledActions()
```

##### `resetSupportHours` <a name="@cdktf/provider-pagerduty.Service.resetSupportHours"></a>

```typescript
public resetSupportHours()
```


#### Properties <a name="Properties"></a>

##### `alertGroupingParameters`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGroupingParameters"></a>

```typescript
public readonly alertGroupingParameters: ServiceAlertGroupingParametersOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference)

---

##### `createdAt`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* `string`

---

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `incidentUrgencyRule`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.incidentUrgencyRule"></a>

```typescript
public readonly incidentUrgencyRule: ServiceIncidentUrgencyRuleOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference)

---

##### `lastIncidentTimestamp`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.lastIncidentTimestamp"></a>

```typescript
public readonly lastIncidentTimestamp: string;
```

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* `string`

---

##### `supportHours`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.supportHours"></a>

```typescript
public readonly supportHours: ServiceSupportHoursOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference`](#@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference)

---

##### `acknowledgementTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.acknowledgementTimeoutInput"></a>

```typescript
public readonly acknowledgementTimeoutInput: string;
```

- *Type:* `string`

---

##### `alertCreationInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertCreationInput"></a>

```typescript
public readonly alertCreationInput: string;
```

- *Type:* `string`

---

##### `alertGroupingInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGroupingInput"></a>

```typescript
public readonly alertGroupingInput: string;
```

- *Type:* `string`

---

##### `alertGroupingParametersInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGroupingParametersInput"></a>

```typescript
public readonly alertGroupingParametersInput: ServiceAlertGroupingParameters;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParameters`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParameters)

---

##### `alertGroupingTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGroupingTimeoutInput"></a>

```typescript
public readonly alertGroupingTimeoutInput: number;
```

- *Type:* `number`

---

##### `autoResolveTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.autoResolveTimeoutInput"></a>

```typescript
public readonly autoResolveTimeoutInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.escalationPolicyInput"></a>

```typescript
public readonly escalationPolicyInput: string;
```

- *Type:* `string`

---

##### `incidentUrgencyRuleInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.incidentUrgencyRuleInput"></a>

```typescript
public readonly incidentUrgencyRuleInput: ServiceIncidentUrgencyRule;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `scheduledActionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.scheduledActionsInput"></a>

```typescript
public readonly scheduledActionsInput: ServiceScheduledActions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceScheduledActions`](#@cdktf/provider-pagerduty.ServiceScheduledActions)[]

---

##### `supportHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.supportHoursInput"></a>

```typescript
public readonly supportHoursInput: ServiceSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceSupportHours`](#@cdktf/provider-pagerduty.ServiceSupportHours)

---

##### `escalationPolicy`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.escalationPolicy"></a>

```typescript
public readonly escalationPolicy: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `acknowledgementTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.acknowledgementTimeout"></a>

```typescript
public readonly acknowledgementTimeout: string;
```

- *Type:* `string`

---

##### `alertCreation`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertCreation"></a>

```typescript
public readonly alertCreation: string;
```

- *Type:* `string`

---

##### `alertGrouping`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGrouping"></a>

```typescript
public readonly alertGrouping: string;
```

- *Type:* `string`

---

##### `alertGroupingTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.alertGroupingTimeout"></a>

```typescript
public readonly alertGroupingTimeout: number;
```

- *Type:* `number`

---

##### `autoResolveTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.autoResolveTimeout"></a>

```typescript
public readonly autoResolveTimeout: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `scheduledActions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Service.property.scheduledActions"></a>

```typescript
public readonly scheduledActions: ServiceScheduledActions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceScheduledActions`](#@cdktf/provider-pagerduty.ServiceScheduledActions)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Service.property.tfResourceType"></a>

- *Type:* `string`

---

### ServiceDependency <a name="@cdktf/provider-pagerduty.ServiceDependency"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html pagerduty_service_dependency}.

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceDependency.Initializer"></a>

```typescript
import { ServiceDependency } from '@cdktf/provider-pagerduty'

new ServiceDependency(scope: Construct, id: string, config: ServiceDependencyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyConfig`](#@cdktf/provider-pagerduty.ServiceDependencyConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `dependencyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: ServiceDependencyDependency[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyDependency`](#@cdktf/provider-pagerduty.ServiceDependencyDependency)[]

---

##### `dependency`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependency.property.dependency"></a>

```typescript
public readonly dependency: ServiceDependencyDependency[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyDependency`](#@cdktf/provider-pagerduty.ServiceDependencyDependency)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.ServiceDependency.property.tfResourceType"></a>

- *Type:* `string`

---

### ServiceEventRule <a name="@cdktf/provider-pagerduty.ServiceEventRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html pagerduty_service_event_rule}.

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceEventRule.Initializer"></a>

```typescript
import { ServiceEventRule } from '@cdktf/provider-pagerduty'

new ServiceEventRule(scope: Construct, id: string, config: ServiceEventRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConfig`](#@cdktf/provider-pagerduty.ServiceEventRuleConfig)

---

#### Methods <a name="Methods"></a>

##### `putActions` <a name="@cdktf/provider-pagerduty.ServiceEventRule.putActions"></a>

```typescript
public putActions(value?: ServiceEventRuleActions)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActions`](#@cdktf/provider-pagerduty.ServiceEventRuleActions)

---

##### `putConditions` <a name="@cdktf/provider-pagerduty.ServiceEventRule.putConditions"></a>

```typescript
public putConditions(value?: ServiceEventRuleConditions)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditions)

---

##### `putTimeFrame` <a name="@cdktf/provider-pagerduty.ServiceEventRule.putTimeFrame"></a>

```typescript
public putTimeFrame(value?: ServiceEventRuleTimeFrame)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame)

---

##### `resetActions` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetActions"></a>

```typescript
public resetActions()
```

##### `resetConditions` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetConditions"></a>

```typescript
public resetConditions()
```

##### `resetDisabled` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetDisabled"></a>

```typescript
public resetDisabled()
```

##### `resetPosition` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetPosition"></a>

```typescript
public resetPosition()
```

##### `resetTimeFrame` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetTimeFrame"></a>

```typescript
public resetTimeFrame()
```

##### `resetVariable` <a name="@cdktf/provider-pagerduty.ServiceEventRule.resetVariable"></a>

```typescript
public resetVariable()
```


#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.actions"></a>

```typescript
public readonly actions: ServiceEventRuleActionsOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference)

---

##### `conditions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.conditions"></a>

```typescript
public readonly conditions: ServiceEventRuleConditionsOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference`](#@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `timeFrame`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.timeFrame"></a>

```typescript
public readonly timeFrame: ServiceEventRuleTimeFrameOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference)

---

##### `actionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: ServiceEventRuleActions;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActions`](#@cdktf/provider-pagerduty.ServiceEventRuleActions)

---

##### `conditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: ServiceEventRuleConditions;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditions)

---

##### `disabledInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `positionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.positionInput"></a>

```typescript
public readonly positionInput: number;
```

- *Type:* `number`

---

##### `serviceInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* `string`

---

##### `timeFrameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.timeFrameInput"></a>

```typescript
public readonly timeFrameInput: ServiceEventRuleTimeFrame;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame)

---

##### `variableInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.variableInput"></a>

```typescript
public readonly variableInput: ServiceEventRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleVariable`](#@cdktf/provider-pagerduty.ServiceEventRuleVariable)[]

---

##### `service`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* `string`

---

##### `disabled`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `position`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* `number`

---

##### `variable`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.variable"></a>

```typescript
public readonly variable: ServiceEventRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleVariable`](#@cdktf/provider-pagerduty.ServiceEventRuleVariable)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.ServiceEventRule.property.tfResourceType"></a>

- *Type:* `string`

---

### ServiceIntegration <a name="@cdktf/provider-pagerduty.ServiceIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html pagerduty_service_integration}.

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceIntegration.Initializer"></a>

```typescript
import { ServiceIntegration } from '@cdktf/provider-pagerduty'

new ServiceIntegration(scope: Construct, id: string, config: ServiceIntegrationConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceIntegrationConfig`](#@cdktf/provider-pagerduty.ServiceIntegrationConfig)

---

#### Methods <a name="Methods"></a>

##### `resetIntegrationEmail` <a name="@cdktf/provider-pagerduty.ServiceIntegration.resetIntegrationEmail"></a>

```typescript
public resetIntegrationEmail()
```

##### `resetIntegrationKey` <a name="@cdktf/provider-pagerduty.ServiceIntegration.resetIntegrationKey"></a>

```typescript
public resetIntegrationKey()
```

##### `resetName` <a name="@cdktf/provider-pagerduty.ServiceIntegration.resetName"></a>

```typescript
public resetName()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.ServiceIntegration.resetType"></a>

```typescript
public resetType()
```

##### `resetVendor` <a name="@cdktf/provider-pagerduty.ServiceIntegration.resetVendor"></a>

```typescript
public resetVendor()
```


#### Properties <a name="Properties"></a>

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `integrationEmailInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.integrationEmailInput"></a>

```typescript
public readonly integrationEmailInput: string;
```

- *Type:* `string`

---

##### `integrationKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.integrationKeyInput"></a>

```typescript
public readonly integrationKeyInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `serviceInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `vendorInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.vendorInput"></a>

```typescript
public readonly vendorInput: string;
```

- *Type:* `string`

---

##### `service`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* `string`

---

##### `integrationEmail`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.integrationEmail"></a>

```typescript
public readonly integrationEmail: string;
```

- *Type:* `string`

---

##### `integrationKey`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `vendor`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.ServiceIntegration.property.tfResourceType"></a>

- *Type:* `string`

---

### SlackConnection <a name="@cdktf/provider-pagerduty.SlackConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html pagerduty_slack_connection}.

#### Initializers <a name="@cdktf/provider-pagerduty.SlackConnection.Initializer"></a>

```typescript
import { SlackConnection } from '@cdktf/provider-pagerduty'

new SlackConnection(scope: Construct, id: string, config: SlackConnectionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.SlackConnectionConfig`](#@cdktf/provider-pagerduty.SlackConnectionConfig)

---



#### Properties <a name="Properties"></a>

##### `channelName`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `sourceName`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* `string`

---

##### `channelIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* `string`

---

##### `configInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.configInput"></a>

```typescript
public readonly configInput: SlackConnectionConfigA[];
```

- *Type:* [`@cdktf/provider-pagerduty.SlackConnectionConfigA`](#@cdktf/provider-pagerduty.SlackConnectionConfigA)[]

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* `string`

---

##### `sourceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* `string`

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `channelId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* `string`

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.config"></a>

```typescript
public readonly config: SlackConnectionConfigA[];
```

- *Type:* [`@cdktf/provider-pagerduty.SlackConnectionConfigA`](#@cdktf/provider-pagerduty.SlackConnectionConfigA)[]

---

##### `notificationType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* `string`

---

##### `sourceId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* `string`

---

##### `sourceType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnection.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.SlackConnection.property.tfResourceType"></a>

- *Type:* `string`

---

### Team <a name="@cdktf/provider-pagerduty.Team"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/team.html pagerduty_team}.

#### Initializers <a name="@cdktf/provider-pagerduty.Team.Initializer"></a>

```typescript
import { Team } from '@cdktf/provider-pagerduty'

new Team(scope: Construct, id: string, config: TeamConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.TeamConfig`](#@cdktf/provider-pagerduty.TeamConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDescription` <a name="@cdktf/provider-pagerduty.Team.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetParent` <a name="@cdktf/provider-pagerduty.Team.resetParent"></a>

```typescript
public resetParent()
```


#### Properties <a name="Properties"></a>

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Team.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Team.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `parentInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Team.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.Team.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Team.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `parent`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.Team.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.Team.property.tfResourceType"></a>

- *Type:* `string`

---

### TeamMembership <a name="@cdktf/provider-pagerduty.TeamMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/team_membership.html pagerduty_team_membership}.

#### Initializers <a name="@cdktf/provider-pagerduty.TeamMembership.Initializer"></a>

```typescript
import { TeamMembership } from '@cdktf/provider-pagerduty'

new TeamMembership(scope: Construct, id: string, config: TeamMembershipConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.TeamMembershipConfig`](#@cdktf/provider-pagerduty.TeamMembershipConfig)

---

#### Methods <a name="Methods"></a>

##### `resetRole` <a name="@cdktf/provider-pagerduty.TeamMembership.resetRole"></a>

```typescript
public resetRole()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `roleInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembership.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.TeamMembership.property.tfResourceType"></a>

- *Type:* `string`

---

### User <a name="@cdktf/provider-pagerduty.User"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html pagerduty_user}.

#### Initializers <a name="@cdktf/provider-pagerduty.User.Initializer"></a>

```typescript
import { User } from '@cdktf/provider-pagerduty'

new User(scope: Construct, id: string, config: UserConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.UserConfig`](#@cdktf/provider-pagerduty.UserConfig)

---

#### Methods <a name="Methods"></a>

##### `resetColor` <a name="@cdktf/provider-pagerduty.User.resetColor"></a>

```typescript
public resetColor()
```

##### `resetDescription` <a name="@cdktf/provider-pagerduty.User.resetDescription"></a>

```typescript
public resetDescription()
```

##### `resetJobTitle` <a name="@cdktf/provider-pagerduty.User.resetJobTitle"></a>

```typescript
public resetJobTitle()
```

##### `resetRole` <a name="@cdktf/provider-pagerduty.User.resetRole"></a>

```typescript
public resetRole()
```

##### `resetTeams` <a name="@cdktf/provider-pagerduty.User.resetTeams"></a>

```typescript
public resetTeams()
```

##### `resetTimeZone` <a name="@cdktf/provider-pagerduty.User.resetTimeZone"></a>

```typescript
public resetTimeZone()
```


#### Properties <a name="Properties"></a>

##### `avatarUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* `string`

---

##### `htmlUrl`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `invitationSent`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.invitationSent"></a>

```typescript
public readonly invitationSent: any;
```

- *Type:* `any`

---

##### `colorInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `emailInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* `string`

---

##### `jobTitleInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `roleInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* `string`

---

##### `teamsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.teamsInput"></a>

```typescript
public readonly teamsInput: string[];
```

- *Type:* `string`[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.User.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `color`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `jobTitle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

---

##### `timeZone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.User.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.User.property.tfResourceType"></a>

- *Type:* `string`

---

### UserContactMethod <a name="@cdktf/provider-pagerduty.UserContactMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html pagerduty_user_contact_method}.

#### Initializers <a name="@cdktf/provider-pagerduty.UserContactMethod.Initializer"></a>

```typescript
import { UserContactMethod } from '@cdktf/provider-pagerduty'

new UserContactMethod(scope: Construct, id: string, config: UserContactMethodConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.UserContactMethodConfig`](#@cdktf/provider-pagerduty.UserContactMethodConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCountryCode` <a name="@cdktf/provider-pagerduty.UserContactMethod.resetCountryCode"></a>

```typescript
public resetCountryCode()
```

##### `resetSendShortEmail` <a name="@cdktf/provider-pagerduty.UserContactMethod.resetSendShortEmail"></a>

```typescript
public resetSendShortEmail()
```


#### Properties <a name="Properties"></a>

##### `blacklisted`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.blacklisted"></a>

```typescript
public readonly blacklisted: any;
```

- *Type:* `any`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.enabled"></a>

```typescript
public readonly enabled: any;
```

- *Type:* `any`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `addressInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* `string`

---

##### `countryCodeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: number;
```

- *Type:* `number`

---

##### `labelInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* `string`

---

##### `sendShortEmailInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.sendShortEmailInput"></a>

```typescript
public readonly sendShortEmailInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `address`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* `string`

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `countryCode`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.countryCode"></a>

```typescript
public readonly countryCode: number;
```

- *Type:* `number`

---

##### `sendShortEmail`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethod.property.sendShortEmail"></a>

```typescript
public readonly sendShortEmail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.UserContactMethod.property.tfResourceType"></a>

- *Type:* `string`

---

### UserNotificationRule <a name="@cdktf/provider-pagerduty.UserNotificationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html pagerduty_user_notification_rule}.

#### Initializers <a name="@cdktf/provider-pagerduty.UserNotificationRule.Initializer"></a>

```typescript
import { UserNotificationRule } from '@cdktf/provider-pagerduty'

new UserNotificationRule(scope: Construct, id: string, config: UserNotificationRuleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.parameter.config"></a>

- *Type:* [`@cdktf/provider-pagerduty.UserNotificationRuleConfig`](#@cdktf/provider-pagerduty.UserNotificationRuleConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `contactMethodInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.contactMethodInput"></a>

```typescript
public readonly contactMethodInput: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `startDelayInMinutesInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.startDelayInMinutesInput"></a>

```typescript
public readonly startDelayInMinutesInput: number;
```

- *Type:* `number`

---

##### `urgencyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* `string`

---

##### `userIdInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* `string`

---

##### `contactMethod`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.contactMethod"></a>

```typescript
public readonly contactMethod: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

---

##### `startDelayInMinutes`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.startDelayInMinutes"></a>

```typescript
public readonly startDelayInMinutes: number;
```

- *Type:* `number`

---

##### `urgency`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-pagerduty.UserNotificationRule.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### AddonConfig <a name="@cdktf/provider-pagerduty.AddonConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AddonConfig } from '@cdktf/provider-pagerduty'

const addonConfig: AddonConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/addon.html#name Addon#name}.

---

##### `src`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.AddonConfig.property.src"></a>

```typescript
public readonly src: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/addon.html#src Addon#src}.

---

### BusinessServiceConfig <a name="@cdktf/provider-pagerduty.BusinessServiceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { BusinessServiceConfig } from '@cdktf/provider-pagerduty'

const businessServiceConfig: BusinessServiceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html#name BusinessService#name}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html#description BusinessService#description}.

---

##### `pointOfContact`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.pointOfContact"></a>

```typescript
public readonly pointOfContact: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html#point_of_contact BusinessService#point_of_contact}.

---

##### `team`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html#team BusinessService#team}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.BusinessServiceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/business_service.html#type BusinessService#type}.

---

### DataPagerdutyBusinessServiceConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyBusinessServiceConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyBusinessServiceConfig: DataPagerdutyBusinessServiceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyBusinessServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/business_service.html#name DataPagerdutyBusinessService#name}.

---

### DataPagerdutyEscalationPolicyConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyEscalationPolicyConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyEscalationPolicyConfig: DataPagerdutyEscalationPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyEscalationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/escalation_policy.html#name DataPagerdutyEscalationPolicy#name}.

---

### DataPagerdutyExtensionSchemaConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyExtensionSchemaConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyExtensionSchemaConfig: DataPagerdutyExtensionSchemaConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyExtensionSchemaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/extension_schema.html#name DataPagerdutyExtensionSchema#name}.

---

### DataPagerdutyPriorityConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyPriorityConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyPriorityConfig: DataPagerdutyPriorityConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyPriorityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the priority to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/priority.html#name DataPagerdutyPriority#name}

---

### DataPagerdutyRulesetConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyRulesetConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyRulesetConfig: DataPagerdutyRulesetConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/ruleset.html#name DataPagerdutyRuleset#name}.

---

### DataPagerdutyScheduleConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyScheduleConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyScheduleConfig: DataPagerdutyScheduleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/schedule.html#name DataPagerdutySchedule#name}.

---

### DataPagerdutyServiceConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyServiceConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyServiceConfig: DataPagerdutyServiceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/service.html#name DataPagerdutyService#name}.

---

### DataPagerdutyServiceIntegrationConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyServiceIntegrationConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyServiceIntegrationConfig: DataPagerdutyServiceIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `integrationSummary`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.integrationSummary"></a>

```typescript
public readonly integrationSummary: string;
```

- *Type:* `string`

examples 'Amazon CloudWatch', 'New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html#integration_summary DataPagerdutyServiceIntegration#integration_summary}

---

##### `serviceName`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyServiceIntegrationConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/service_integration.html#service_name DataPagerdutyServiceIntegration#service_name}.

---

### DataPagerdutyTeamConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyTeamConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyTeamConfig: DataPagerdutyTeamConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the team to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html#name DataPagerdutyTeam#name}

---

##### `parent`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyTeamConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/team.html#parent DataPagerdutyTeam#parent}.

---

### DataPagerdutyUserConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyUserConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyUserConfig: DataPagerdutyUserConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user.html#email DataPagerdutyUser#email}.

---

### DataPagerdutyUserContactMethodConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyUserContactMethodConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyUserContactMethodConfig: DataPagerdutyUserContactMethodConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

The name of the contact method to find in the PagerDuty API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#label DataPagerdutyUserContactMethod#label}

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

The type of the contact method.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#type DataPagerdutyUserContactMethod#type}

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyUserContactMethodConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/user_contact_method.html#user_id DataPagerdutyUserContactMethod#user_id}.

---

### DataPagerdutyVendorConfig <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataPagerdutyVendorConfig } from '@cdktf/provider-pagerduty'

const dataPagerdutyVendorConfig: DataPagerdutyVendorConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/vendor.html#name DataPagerdutyVendor#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.DataPagerdutyVendorConfig.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/vendor.html#name_regex DataPagerdutyVendor#name_regex}.

---

### EscalationPolicyConfig <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EscalationPolicyConfig } from '@cdktf/provider-pagerduty'

const escalationPolicyConfig: EscalationPolicyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#name EscalationPolicy#name}.

---

##### `rule`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.rule"></a>

```typescript
public readonly rule: EscalationPolicyRule[];
```

- *Type:* [`@cdktf/provider-pagerduty.EscalationPolicyRule`](#@cdktf/provider-pagerduty.EscalationPolicyRule)[]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#rule EscalationPolicy#rule}

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#description EscalationPolicy#description}.

---

##### `numLoops`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.numLoops"></a>

```typescript
public readonly numLoops: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#num_loops EscalationPolicy#num_loops}.

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#teams EscalationPolicy#teams}.

---

### EscalationPolicyRule <a name="@cdktf/provider-pagerduty.EscalationPolicyRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EscalationPolicyRule } from '@cdktf/provider-pagerduty'

const escalationPolicyRule: EscalationPolicyRule = { ... }
```

##### `escalationDelayInMinutes`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyRule.property.escalationDelayInMinutes"></a>

```typescript
public readonly escalationDelayInMinutes: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}.

---

##### `target`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyRule.property.target"></a>

```typescript
public readonly target: EscalationPolicyRuleTarget[];
```

- *Type:* [`@cdktf/provider-pagerduty.EscalationPolicyRuleTarget`](#@cdktf/provider-pagerduty.EscalationPolicyRuleTarget)[]

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#target EscalationPolicy#target}

---

### EscalationPolicyRuleTarget <a name="@cdktf/provider-pagerduty.EscalationPolicyRuleTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EscalationPolicyRuleTarget } from '@cdktf/provider-pagerduty'

const escalationPolicyRuleTarget: EscalationPolicyRuleTarget = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyRuleTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#id EscalationPolicy#id}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EscalationPolicyRuleTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/escalation_policy.html#type EscalationPolicy#type}.

---

### EventRuleConfig <a name="@cdktf/provider-pagerduty.EventRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EventRuleConfig } from '@cdktf/provider-pagerduty'

const eventRuleConfig: EventRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `actionJson`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.actionJson"></a>

```typescript
public readonly actionJson: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#action_json EventRule#action_json}.

---

##### `conditionJson`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.conditionJson"></a>

```typescript
public readonly conditionJson: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#condition_json EventRule#condition_json}.

---

##### `advancedConditionJson`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.EventRuleConfig.property.advancedConditionJson"></a>

```typescript
public readonly advancedConditionJson: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/event_rule.html#advanced_condition_json EventRule#advanced_condition_json}.

---

### ExtensionConfig <a name="@cdktf/provider-pagerduty.ExtensionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExtensionConfig } from '@cdktf/provider-pagerduty'

const extensionConfig: ExtensionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `extensionObjects`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#extension_objects Extension#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#extension_schema Extension#extension_schema}.

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#config Extension#config}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#endpoint_url Extension#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#name Extension#name}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension.html#type Extension#type}.

---

### ExtensionServicenowConfig <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExtensionServicenowConfig } from '@cdktf/provider-pagerduty'

const extensionServicenowConfig: ExtensionServicenowConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `extensionObjects`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.extensionObjects"></a>

```typescript
public readonly extensionObjects: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#extension_objects ExtensionServicenow#extension_objects}.

---

##### `extensionSchema`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.extensionSchema"></a>

```typescript
public readonly extensionSchema: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#extension_schema ExtensionServicenow#extension_schema}.

---

##### `referer`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.referer"></a>

```typescript
public readonly referer: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#referer ExtensionServicenow#referer}.

---

##### `snowPassword`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.snowPassword"></a>

```typescript
public readonly snowPassword: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#snow_password ExtensionServicenow#snow_password}.

---

##### `snowUser`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.snowUser"></a>

```typescript
public readonly snowUser: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#snow_user ExtensionServicenow#snow_user}.

---

##### `syncOptions`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.syncOptions"></a>

```typescript
public readonly syncOptions: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#sync_options ExtensionServicenow#sync_options}.

---

##### `target`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#target ExtensionServicenow#target}.

---

##### `taskType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#task_type ExtensionServicenow#task_type}.

---

##### `endpointUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#name ExtensionServicenow#name}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ExtensionServicenowConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/extension_servicenow.html#type ExtensionServicenow#type}.

---

### MaintenanceWindowConfig <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { MaintenanceWindowConfig } from '@cdktf/provider-pagerduty'

const maintenanceWindowConfig: MaintenanceWindowConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `endTime`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window.html#end_time MaintenanceWindow#end_time}.

---

##### `services`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window.html#services MaintenanceWindow#services}.

---

##### `startTime`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window.html#start_time MaintenanceWindow#start_time}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.MaintenanceWindowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/maintenance_window.html#description MaintenanceWindow#description}.

---

### PagerdutyProviderConfig <a name="@cdktf/provider-pagerduty.PagerdutyProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PagerdutyProviderConfig } from '@cdktf/provider-pagerduty'

const pagerdutyProviderConfig: PagerdutyProviderConfig = { ... }
```

##### `token`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#token PagerdutyProvider#token}.

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#alias PagerdutyProvider#alias}

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.PagerdutyProviderConfig.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty#skip_credentials_validation PagerdutyProvider#skip_credentials_validation}.

---

### ResponsePlayConfig <a name="@cdktf/provider-pagerduty.ResponsePlayConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ResponsePlayConfig } from '@cdktf/provider-pagerduty'

const responsePlayConfig: ResponsePlayConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `from`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#from ResponsePlay#from}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#name ResponsePlay#name}.

---

##### `conferenceNumber`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.conferenceNumber"></a>

```typescript
public readonly conferenceNumber: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#conference_number ResponsePlay#conference_number}.

---

##### `conferenceUrl`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.conferenceUrl"></a>

```typescript
public readonly conferenceUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#conference_url ResponsePlay#conference_url}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#description ResponsePlay#description}.

---

##### `responder`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.responder"></a>

```typescript
public readonly responder: ResponsePlayResponder[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlayResponder`](#@cdktf/provider-pagerduty.ResponsePlayResponder)[]

responder block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#responder ResponsePlay#responder}

---

##### `respondersMessage`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.respondersMessage"></a>

```typescript
public readonly respondersMessage: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#responders_message ResponsePlay#responders_message}.

---

##### `runnability`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.runnability"></a>

```typescript
public readonly runnability: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#runnability ResponsePlay#runnability}.

---

##### `subscriber`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.subscriber"></a>

```typescript
public readonly subscriber: ResponsePlaySubscriber[];
```

- *Type:* [`@cdktf/provider-pagerduty.ResponsePlaySubscriber`](#@cdktf/provider-pagerduty.ResponsePlaySubscriber)[]

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#subscriber ResponsePlay#subscriber}

---

##### `subscribersMessage`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.subscribersMessage"></a>

```typescript
public readonly subscribersMessage: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#subscribers_message ResponsePlay#subscribers_message}.

---

##### `team`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#team ResponsePlay#team}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}.

---

### ResponsePlayResponder <a name="@cdktf/provider-pagerduty.ResponsePlayResponder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ResponsePlayResponder } from '@cdktf/provider-pagerduty'

const responsePlayResponder: ResponsePlayResponder = { ... }
```

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayResponder.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#description ResponsePlay#description}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayResponder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#id ResponsePlay#id}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayResponder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#name ResponsePlay#name}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlayResponder.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}.

---

### ResponsePlaySubscriber <a name="@cdktf/provider-pagerduty.ResponsePlaySubscriber"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ResponsePlaySubscriber } from '@cdktf/provider-pagerduty'

const responsePlaySubscriber: ResponsePlaySubscriber = { ... }
```

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlaySubscriber.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#id ResponsePlay#id}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ResponsePlaySubscriber.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/response_play.html#type ResponsePlay#type}.

---

### RulesetConfig <a name="@cdktf/provider-pagerduty.RulesetConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetConfig } from '@cdktf/provider-pagerduty'

const rulesetConfig: RulesetConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#name Ruleset#name}.

---

##### `team`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetConfig.property.team"></a>

```typescript
public readonly team: RulesetTeam;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetTeam`](#@cdktf/provider-pagerduty.RulesetTeam)

team block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#team Ruleset#team}

---

### RulesetRuleActions <a name="@cdktf/provider-pagerduty.RulesetRuleActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActions } from '@cdktf/provider-pagerduty'

const rulesetRuleActions: RulesetRuleActions = { ... }
```

##### `annotate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.annotate"></a>

```typescript
public readonly annotate: RulesetRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate`](#@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate)[]

annotate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#annotate RulesetRule#annotate}

---

##### `eventAction`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.eventAction"></a>

```typescript
public readonly eventAction: RulesetRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsEventAction`](#@cdktf/provider-pagerduty.RulesetRuleActionsEventAction)[]

event_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#event_action RulesetRule#event_action}

---

##### `extractions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.extractions"></a>

```typescript
public readonly extractions: RulesetRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsExtractions`](#@cdktf/provider-pagerduty.RulesetRuleActionsExtractions)[]

extractions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#extractions RulesetRule#extractions}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.priority"></a>

```typescript
public readonly priority: RulesetRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsPriority`](#@cdktf/provider-pagerduty.RulesetRuleActionsPriority)[]

priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#priority RulesetRule#priority}

---

##### `route`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.route"></a>

```typescript
public readonly route: RulesetRuleActionsRoute[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsRoute`](#@cdktf/provider-pagerduty.RulesetRuleActionsRoute)[]

route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#route RulesetRule#route}

---

##### `severity`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.severity"></a>

```typescript
public readonly severity: RulesetRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSeverity`](#@cdktf/provider-pagerduty.RulesetRuleActionsSeverity)[]

severity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#severity RulesetRule#severity}

---

##### `suppress`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.suppress"></a>

```typescript
public readonly suppress: RulesetRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuppress`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuppress)[]

suppress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#suppress RulesetRule#suppress}

---

##### `suspend`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActions.property.suspend"></a>

```typescript
public readonly suspend: RulesetRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuspend`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuspend)[]

suspend block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#suspend RulesetRule#suspend}

---

### RulesetRuleActionsAnnotate <a name="@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsAnnotate } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsAnnotate: RulesetRuleActionsAnnotate = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsEventAction <a name="@cdktf/provider-pagerduty.RulesetRuleActionsEventAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsEventAction } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsEventAction: RulesetRuleActionsEventAction = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsEventAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsExtractions <a name="@cdktf/provider-pagerduty.RulesetRuleActionsExtractions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsExtractions } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsExtractions: RulesetRuleActionsExtractions = { ... }
```

##### `regex`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsExtractions.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#regex RulesetRule#regex}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsExtractions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#source RulesetRule#source}.

---

##### `target`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsExtractions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#target RulesetRule#target}.

---

##### `template`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsExtractions.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#template RulesetRule#template}.

---

### RulesetRuleActionsPriority <a name="@cdktf/provider-pagerduty.RulesetRuleActionsPriority"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsPriority } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsPriority: RulesetRuleActionsPriority = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsPriority.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsRoute <a name="@cdktf/provider-pagerduty.RulesetRuleActionsRoute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsRoute } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsRoute: RulesetRuleActionsRoute = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsRoute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsSeverity <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSeverity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsSeverity } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSeverity: RulesetRuleActionsSeverity = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSeverity.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsSuppress <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuppress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsSuppress } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSuppress: RulesetRuleActionsSuppress = { ... }
```

##### `thresholdTimeAmount`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuppress.property.thresholdTimeAmount"></a>

```typescript
public readonly thresholdTimeAmount: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_time_amount RulesetRule#threshold_time_amount}.

---

##### `thresholdTimeUnit`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuppress.property.thresholdTimeUnit"></a>

```typescript
public readonly thresholdTimeUnit: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_time_unit RulesetRule#threshold_time_unit}.

---

##### `thresholdValue`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuppress.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#threshold_value RulesetRule#threshold_value}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuppress.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleActionsSuspend <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuspend"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleActionsSuspend } from '@cdktf/provider-pagerduty'

const rulesetRuleActionsSuspend: RulesetRuleActionsSuspend = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsSuspend.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleConditions <a name="@cdktf/provider-pagerduty.RulesetRuleConditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleConditions } from '@cdktf/provider-pagerduty'

const rulesetRuleConditions: RulesetRuleConditions = { ... }
```

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#operator RulesetRule#operator}.

---

##### `subconditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditions.property.subconditions"></a>

```typescript
public readonly subconditions: RulesetRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions)[]

subconditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#subconditions RulesetRule#subconditions}

---

### RulesetRuleConditionsSubconditions <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleConditionsSubconditions } from '@cdktf/provider-pagerduty'

const rulesetRuleConditionsSubconditions: RulesetRuleConditionsSubconditions = { ... }
```

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#operator RulesetRule#operator}.

---

##### `parameter`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions.property.parameter"></a>

```typescript
public readonly parameter: RulesetRuleConditionsSubconditionsParameter[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditionsParameter`](#@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditionsParameter)[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#parameter RulesetRule#parameter}

---

### RulesetRuleConditionsSubconditionsParameter <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleConditionsSubconditionsParameter } from '@cdktf/provider-pagerduty'

const rulesetRuleConditionsSubconditionsParameter: RulesetRuleConditionsSubconditionsParameter = { ... }
```

##### `path`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditionsParameter.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditionsParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetRuleConfig <a name="@cdktf/provider-pagerduty.RulesetRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleConfig } from '@cdktf/provider-pagerduty'

const rulesetRuleConfig: RulesetRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `ruleset`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#ruleset RulesetRule#ruleset}.

---

##### `actions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.actions"></a>

```typescript
public readonly actions: RulesetRuleActions;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActions`](#@cdktf/provider-pagerduty.RulesetRuleActions)

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#actions RulesetRule#actions}

---

##### `conditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: RulesetRuleConditions;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditions`](#@cdktf/provider-pagerduty.RulesetRuleConditions)

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#conditions RulesetRule#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#disabled RulesetRule#disabled}.

---

##### `position`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#position RulesetRule#position}.

---

##### `timeFrame`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.timeFrame"></a>

```typescript
public readonly timeFrame: RulesetRuleTimeFrame;
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrame`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrame)

time_frame block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#time_frame RulesetRule#time_frame}

---

##### `variable`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConfig.property.variable"></a>

```typescript
public readonly variable: RulesetRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleVariable`](#@cdktf/provider-pagerduty.RulesetRuleVariable)[]

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#variable RulesetRule#variable}

---

### RulesetRuleTimeFrame <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrame"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleTimeFrame } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrame: RulesetRuleTimeFrame = { ... }
```

##### `activeBetween`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrame.property.activeBetween"></a>

```typescript
public readonly activeBetween: RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween)[]

active_between block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#active_between RulesetRule#active_between}

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrame.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly)[]

scheduled_weekly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#scheduled_weekly RulesetRule#scheduled_weekly}

---

### RulesetRuleTimeFrameActiveBetween <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleTimeFrameActiveBetween } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrameActiveBetween: RulesetRuleTimeFrameActiveBetween = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#end_time RulesetRule#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#start_time RulesetRule#start_time}.

---

### RulesetRuleTimeFrameScheduledWeekly <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleTimeFrameScheduledWeekly } from '@cdktf/provider-pagerduty'

const rulesetRuleTimeFrameScheduledWeekly: RulesetRuleTimeFrameScheduledWeekly = { ... }
```

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#duration RulesetRule#duration}.

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#start_time RulesetRule#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#timezone RulesetRule#timezone}.

---

##### `weekdays`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: number[];
```

- *Type:* `number`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#weekdays RulesetRule#weekdays}.

---

### RulesetRuleVariable <a name="@cdktf/provider-pagerduty.RulesetRuleVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleVariable } from '@cdktf/provider-pagerduty'

const rulesetRuleVariable: RulesetRuleVariable = { ... }
```

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#name RulesetRule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleVariable.property.parameters"></a>

```typescript
public readonly parameters: RulesetRuleVariableParameters[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleVariableParameters`](#@cdktf/provider-pagerduty.RulesetRuleVariableParameters)[]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#parameters RulesetRule#parameters}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#type RulesetRule#type}.

---

### RulesetRuleVariableParameters <a name="@cdktf/provider-pagerduty.RulesetRuleVariableParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetRuleVariableParameters } from '@cdktf/provider-pagerduty'

const rulesetRuleVariableParameters: RulesetRuleVariableParameters = { ... }
```

##### `path`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleVariableParameters.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#path RulesetRule#path}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleVariableParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset_rule.html#value RulesetRule#value}.

---

### RulesetTeam <a name="@cdktf/provider-pagerduty.RulesetTeam"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RulesetTeam } from '@cdktf/provider-pagerduty'

const rulesetTeam: RulesetTeam = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetTeam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/ruleset.html#id Ruleset#id}.

---

### ScheduleConfig <a name="@cdktf/provider-pagerduty.ScheduleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ScheduleConfig } from '@cdktf/provider-pagerduty'

const scheduleConfig: ScheduleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `layer`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.layer"></a>

```typescript
public readonly layer: ScheduleLayer[];
```

- *Type:* [`@cdktf/provider-pagerduty.ScheduleLayer`](#@cdktf/provider-pagerduty.ScheduleLayer)[]

layer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#layer Schedule#layer}

---

##### `timeZone`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#time_zone Schedule#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#description Schedule#description}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#name Schedule#name}.

---

##### `overflow`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.overflow"></a>

```typescript
public readonly overflow: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#overflow Schedule#overflow}.

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#teams Schedule#teams}.

---

### ScheduleLayer <a name="@cdktf/provider-pagerduty.ScheduleLayer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ScheduleLayer } from '@cdktf/provider-pagerduty'

const scheduleLayer: ScheduleLayer = { ... }
```

##### `rotationTurnLengthSeconds`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.rotationTurnLengthSeconds"></a>

```typescript
public readonly rotationTurnLengthSeconds: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#rotation_turn_length_seconds Schedule#rotation_turn_length_seconds}.

---

##### `rotationVirtualStart`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.rotationVirtualStart"></a>

```typescript
public readonly rotationVirtualStart: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#rotation_virtual_start Schedule#rotation_virtual_start}.

---

##### `start`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start Schedule#start}.

---

##### `users`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#users Schedule#users}.

---

##### `end`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#end Schedule#end}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#name Schedule#name}.

---

##### `restriction`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayer.property.restriction"></a>

```typescript
public readonly restriction: ScheduleLayerRestriction[];
```

- *Type:* [`@cdktf/provider-pagerduty.ScheduleLayerRestriction`](#@cdktf/provider-pagerduty.ScheduleLayerRestriction)[]

restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#restriction Schedule#restriction}

---

### ScheduleLayerRestriction <a name="@cdktf/provider-pagerduty.ScheduleLayerRestriction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ScheduleLayerRestriction } from '@cdktf/provider-pagerduty'

const scheduleLayerRestriction: ScheduleLayerRestriction = { ... }
```

##### `durationSeconds`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayerRestriction.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#duration_seconds Schedule#duration_seconds}.

---

##### `startTimeOfDay`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayerRestriction.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start_time_of_day Schedule#start_time_of_day}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayerRestriction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#type Schedule#type}.

---

##### `startDayOfWeek`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ScheduleLayerRestriction.property.startDayOfWeek"></a>

```typescript
public readonly startDayOfWeek: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/schedule.html#start_day_of_week Schedule#start_day_of_week}.

---

### ServiceAlertGroupingParameters <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceAlertGroupingParameters } from '@cdktf/provider-pagerduty'

const serviceAlertGroupingParameters: ServiceAlertGroupingParameters = { ... }
```

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParameters.property.config"></a>

```typescript
public readonly config: ServiceAlertGroupingParametersConfig;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig)

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#config Service#config}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceAlertGroupingParametersConfig } from '@cdktf/provider-pagerduty'

const serviceAlertGroupingParametersConfig: ServiceAlertGroupingParametersConfig = { ... }
```

##### `aggregate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```typescript
public readonly aggregate: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#aggregate Service#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#fields Service#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#timeout Service#timeout}.

---

### ServiceConfig <a name="@cdktf/provider-pagerduty.ServiceConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceConfig } from '@cdktf/provider-pagerduty'

const serviceConfig: ServiceConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `escalationPolicy`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.escalationPolicy"></a>

```typescript
public readonly escalationPolicy: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#name Service#name}.

---

##### `acknowledgementTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.acknowledgementTimeout"></a>

```typescript
public readonly acknowledgementTimeout: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alertCreation`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.alertCreation"></a>

```typescript
public readonly alertCreation: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_creation Service#alert_creation}.

---

##### `alertGrouping`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.alertGrouping"></a>

```typescript
public readonly alertGrouping: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping Service#alert_grouping}.

---

##### `alertGroupingParameters`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.alertGroupingParameters"></a>

```typescript
public readonly alertGroupingParameters: ServiceAlertGroupingParameters;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParameters`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParameters)

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alertGroupingTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.alertGroupingTimeout"></a>

```typescript
public readonly alertGroupingTimeout: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `autoResolveTimeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.autoResolveTimeout"></a>

```typescript
public readonly autoResolveTimeout: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#description Service#description}.

---

##### `incidentUrgencyRule`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.incidentUrgencyRule"></a>

```typescript
public readonly incidentUrgencyRule: ServiceIncidentUrgencyRule;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule)

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#incident_urgency_rule Service#incident_urgency_rule}

---

##### `scheduledActions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.scheduledActions"></a>

```typescript
public readonly scheduledActions: ServiceScheduledActions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceScheduledActions`](#@cdktf/provider-pagerduty.ServiceScheduledActions)[]

scheduled_actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#scheduled_actions Service#scheduled_actions}

---

##### `supportHours`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceConfig.property.supportHours"></a>

```typescript
public readonly supportHours: ServiceSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceSupportHours`](#@cdktf/provider-pagerduty.ServiceSupportHours)

support_hours block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#support_hours Service#support_hours}

---

### ServiceDependencyConfig <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceDependencyConfig } from '@cdktf/provider-pagerduty'

const serviceDependencyConfig: ServiceDependencyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `dependency`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyConfig.property.dependency"></a>

```typescript
public readonly dependency: ServiceDependencyDependency[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyDependency`](#@cdktf/provider-pagerduty.ServiceDependencyDependency)[]

dependency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#dependency ServiceDependency#dependency}

---

### ServiceDependencyDependency <a name="@cdktf/provider-pagerduty.ServiceDependencyDependency"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceDependencyDependency } from '@cdktf/provider-pagerduty'

const serviceDependencyDependency: ServiceDependencyDependency = { ... }
```

##### `dependentService`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependency.property.dependentService"></a>

```typescript
public readonly dependentService: ServiceDependencyDependencyDependentService[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyDependencyDependentService`](#@cdktf/provider-pagerduty.ServiceDependencyDependencyDependentService)[]

dependent_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#dependent_service ServiceDependency#dependent_service}

---

##### `supportingService`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependency.property.supportingService"></a>

```typescript
public readonly supportingService: ServiceDependencyDependencySupportingService[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceDependencyDependencySupportingService`](#@cdktf/provider-pagerduty.ServiceDependencyDependencySupportingService)[]

supporting_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#supporting_service ServiceDependency#supporting_service}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependency.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}.

---

### ServiceDependencyDependencyDependentService <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencyDependentService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceDependencyDependencyDependentService } from '@cdktf/provider-pagerduty'

const serviceDependencyDependencyDependentService: ServiceDependencyDependencyDependentService = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencyDependentService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#id ServiceDependency#id}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencyDependentService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}.

---

### ServiceDependencyDependencySupportingService <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencySupportingService"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceDependencyDependencySupportingService } from '@cdktf/provider-pagerduty'

const serviceDependencyDependencySupportingService: ServiceDependencyDependencySupportingService = { ... }
```

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencySupportingService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#id ServiceDependency#id}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceDependencyDependencySupportingService.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_dependency.html#type ServiceDependency#type}.

---

### ServiceEventRuleActions <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActions } from '@cdktf/provider-pagerduty'

const serviceEventRuleActions: ServiceEventRuleActions = { ... }
```

##### `annotate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.annotate"></a>

```typescript
public readonly annotate: ServiceEventRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate)[]

annotate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#annotate ServiceEventRule#annotate}

---

##### `eventAction`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.eventAction"></a>

```typescript
public readonly eventAction: ServiceEventRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction)[]

event_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#event_action ServiceEventRule#event_action}

---

##### `extractions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.extractions"></a>

```typescript
public readonly extractions: ServiceEventRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions)[]

extractions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#extractions ServiceEventRule#extractions}

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.priority"></a>

```typescript
public readonly priority: ServiceEventRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority)[]

priority block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#priority ServiceEventRule#priority}

---

##### `severity`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.severity"></a>

```typescript
public readonly severity: ServiceEventRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity)[]

severity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#severity ServiceEventRule#severity}

---

##### `suppress`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.suppress"></a>

```typescript
public readonly suppress: ServiceEventRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress)[]

suppress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#suppress ServiceEventRule#suppress}

---

##### `suspend`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActions.property.suspend"></a>

```typescript
public readonly suspend: ServiceEventRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend)[]

suspend block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#suspend ServiceEventRule#suspend}

---

### ServiceEventRuleActionsAnnotate <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsAnnotate } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsAnnotate: ServiceEventRuleActionsAnnotate = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsEventAction <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsEventAction } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsEventAction: ServiceEventRuleActionsEventAction = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsExtractions <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsExtractions } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsExtractions: ServiceEventRuleActionsExtractions = { ... }
```

##### `regex`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#regex ServiceEventRule#regex}.

---

##### `source`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#source ServiceEventRule#source}.

---

##### `target`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#target ServiceEventRule#target}.

---

##### `template`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#template ServiceEventRule#template}.

---

### ServiceEventRuleActionsPriority <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsPriority } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsPriority: ServiceEventRuleActionsPriority = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSeverity <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsSeverity } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsSeverity: ServiceEventRuleActionsSeverity = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSuppress <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsSuppress } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsSuppress: ServiceEventRuleActionsSuppress = { ... }
```

##### `thresholdTimeAmount`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress.property.thresholdTimeAmount"></a>

```typescript
public readonly thresholdTimeAmount: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_time_amount ServiceEventRule#threshold_time_amount}.

---

##### `thresholdTimeUnit`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress.property.thresholdTimeUnit"></a>

```typescript
public readonly thresholdTimeUnit: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_time_unit ServiceEventRule#threshold_time_unit}.

---

##### `thresholdValue`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress.property.thresholdValue"></a>

```typescript
public readonly thresholdValue: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#threshold_value ServiceEventRule#threshold_value}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSuspend <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleActionsSuspend } from '@cdktf/provider-pagerduty'

const serviceEventRuleActionsSuspend: ServiceEventRuleActionsSuspend = { ... }
```

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleConditions <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleConditions } from '@cdktf/provider-pagerduty'

const serviceEventRuleConditions: ServiceEventRuleConditions = { ... }
```

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#operator ServiceEventRule#operator}.

---

##### `subconditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditions.property.subconditions"></a>

```typescript
public readonly subconditions: ServiceEventRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions)[]

subconditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#subconditions ServiceEventRule#subconditions}

---

### ServiceEventRuleConditionsSubconditions <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleConditionsSubconditions } from '@cdktf/provider-pagerduty'

const serviceEventRuleConditionsSubconditions: ServiceEventRuleConditionsSubconditions = { ... }
```

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#operator ServiceEventRule#operator}.

---

##### `parameter`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions.property.parameter"></a>

```typescript
public readonly parameter: ServiceEventRuleConditionsSubconditionsParameter[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditionsParameter`](#@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditionsParameter)[]

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#parameter ServiceEventRule#parameter}

---

### ServiceEventRuleConditionsSubconditionsParameter <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleConditionsSubconditionsParameter } from '@cdktf/provider-pagerduty'

const serviceEventRuleConditionsSubconditionsParameter: ServiceEventRuleConditionsSubconditionsParameter = { ... }
```

##### `path`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditionsParameter.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#path ServiceEventRule#path}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditionsParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceEventRuleConfig <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleConfig } from '@cdktf/provider-pagerduty'

const serviceEventRuleConfig: ServiceEventRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `service`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#service ServiceEventRule#service}.

---

##### `actions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.actions"></a>

```typescript
public readonly actions: ServiceEventRuleActions;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActions`](#@cdktf/provider-pagerduty.ServiceEventRuleActions)

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#actions ServiceEventRule#actions}

---

##### `conditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: ServiceEventRuleConditions;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditions)

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#conditions ServiceEventRule#conditions}

---

##### `disabled`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#disabled ServiceEventRule#disabled}.

---

##### `position`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.position"></a>

```typescript
public readonly position: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#position ServiceEventRule#position}.

---

##### `timeFrame`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.timeFrame"></a>

```typescript
public readonly timeFrame: ServiceEventRuleTimeFrame;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame)

time_frame block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#time_frame ServiceEventRule#time_frame}

---

##### `variable`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConfig.property.variable"></a>

```typescript
public readonly variable: ServiceEventRuleVariable[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleVariable`](#@cdktf/provider-pagerduty.ServiceEventRuleVariable)[]

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#variable ServiceEventRule#variable}

---

### ServiceEventRuleTimeFrame <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleTimeFrame } from '@cdktf/provider-pagerduty'

const serviceEventRuleTimeFrame: ServiceEventRuleTimeFrame = { ... }
```

##### `activeBetween`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame.property.activeBetween"></a>

```typescript
public readonly activeBetween: ServiceEventRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween)[]

active_between block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#active_between ServiceEventRule#active_between}

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrame.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: ServiceEventRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly)[]

scheduled_weekly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#scheduled_weekly ServiceEventRule#scheduled_weekly}

---

### ServiceEventRuleTimeFrameActiveBetween <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleTimeFrameActiveBetween } from '@cdktf/provider-pagerduty'

const serviceEventRuleTimeFrameActiveBetween: ServiceEventRuleTimeFrameActiveBetween = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween.property.endTime"></a>

```typescript
public readonly endTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#end_time ServiceEventRule#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#start_time ServiceEventRule#start_time}.

---

### ServiceEventRuleTimeFrameScheduledWeekly <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleTimeFrameScheduledWeekly } from '@cdktf/provider-pagerduty'

const serviceEventRuleTimeFrameScheduledWeekly: ServiceEventRuleTimeFrameScheduledWeekly = { ... }
```

##### `duration`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#duration ServiceEventRule#duration}.

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#start_time ServiceEventRule#start_time}.

---

##### `timezone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#timezone ServiceEventRule#timezone}.

---

##### `weekdays`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```typescript
public readonly weekdays: number[];
```

- *Type:* `number`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#weekdays ServiceEventRule#weekdays}.

---

### ServiceEventRuleVariable <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleVariable } from '@cdktf/provider-pagerduty'

const serviceEventRuleVariable: ServiceEventRuleVariable = { ... }
```

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#name ServiceEventRule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariable.property.parameters"></a>

```typescript
public readonly parameters: ServiceEventRuleVariableParameters[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleVariableParameters`](#@cdktf/provider-pagerduty.ServiceEventRuleVariableParameters)[]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#parameters ServiceEventRule#parameters}

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#type ServiceEventRule#type}.

---

### ServiceEventRuleVariableParameters <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariableParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceEventRuleVariableParameters } from '@cdktf/provider-pagerduty'

const serviceEventRuleVariableParameters: ServiceEventRuleVariableParameters = { ... }
```

##### `path`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariableParameters.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#path ServiceEventRule#path}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleVariableParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_event_rule.html#value ServiceEventRule#value}.

---

### ServiceIncidentUrgencyRule <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRule } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRule: ServiceIncidentUrgencyRule = { ... }
```

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

##### `duringSupportHours`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```typescript
public readonly duringSupportHours: ServiceIncidentUrgencyRuleDuringSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours)

during_support_hours block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#during_support_hours Service#during_support_hours}

---

##### `outsideSupportHours`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```typescript
public readonly outsideSupportHours: ServiceIncidentUrgencyRuleOutsideSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours)

outside_support_hours block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#outside_support_hours Service#outside_support_hours}

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRule.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRuleDuringSupportHours } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRuleDuringSupportHours: ServiceIncidentUrgencyRuleDuringSupportHours = { ... }
```

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRuleOutsideSupportHours } from '@cdktf/provider-pagerduty'

const serviceIncidentUrgencyRuleOutsideSupportHours: ServiceIncidentUrgencyRuleOutsideSupportHours = { ... }
```

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#urgency Service#urgency}.

---

### ServiceIntegrationConfig <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceIntegrationConfig } from '@cdktf/provider-pagerduty'

const serviceIntegrationConfig: ServiceIntegrationConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `service`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#service ServiceIntegration#service}.

---

##### `integrationEmail`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.integrationEmail"></a>

```typescript
public readonly integrationEmail: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#integration_email ServiceIntegration#integration_email}.

---

##### `integrationKey`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#integration_key ServiceIntegration#integration_key}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#name ServiceIntegration#name}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#type ServiceIntegration#type}.

---

##### `vendor`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIntegrationConfig.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service_integration.html#vendor ServiceIntegration#vendor}.

---

### ServiceScheduledActions <a name="@cdktf/provider-pagerduty.ServiceScheduledActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceScheduledActions } from '@cdktf/provider-pagerduty'

const serviceScheduledActions: ServiceScheduledActions = { ... }
```

##### `at`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceScheduledActions.property.at"></a>

```typescript
public readonly at: ServiceScheduledActionsAt[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceScheduledActionsAt`](#@cdktf/provider-pagerduty.ServiceScheduledActionsAt)[]

at block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#at Service#at}

---

##### `toUrgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceScheduledActions.property.toUrgency"></a>

```typescript
public readonly toUrgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#to_urgency Service#to_urgency}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceScheduledActions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

### ServiceScheduledActionsAt <a name="@cdktf/provider-pagerduty.ServiceScheduledActionsAt"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceScheduledActionsAt } from '@cdktf/provider-pagerduty'

const serviceScheduledActionsAt: ServiceScheduledActionsAt = { ... }
```

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceScheduledActionsAt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#name Service#name}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceScheduledActionsAt.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

### ServiceSupportHours <a name="@cdktf/provider-pagerduty.ServiceSupportHours"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ServiceSupportHours } from '@cdktf/provider-pagerduty'

const serviceSupportHours: ServiceSupportHours = { ... }
```

##### `daysOfWeek`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHours.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: number[];
```

- *Type:* `number`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#days_of_week Service#days_of_week}.

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHours.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#end_time Service#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHours.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#start_time Service#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHours.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#time_zone Service#time_zone}.

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHours.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/service.html#type Service#type}.

---

### SlackConnectionConfig <a name="@cdktf/provider-pagerduty.SlackConnectionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SlackConnectionConfig } from '@cdktf/provider-pagerduty'

const slackConnectionConfig: SlackConnectionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `channelId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#channel_id SlackConnection#channel_id}.

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.config"></a>

```typescript
public readonly config: SlackConnectionConfigA[];
```

- *Type:* [`@cdktf/provider-pagerduty.SlackConnectionConfigA`](#@cdktf/provider-pagerduty.SlackConnectionConfigA)[]

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#config SlackConnection#config}

---

##### `notificationType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#notification_type SlackConnection#notification_type}.

---

##### `sourceId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#source_id SlackConnection#source_id}.

---

##### `sourceType`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#source_type SlackConnection#source_type}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#workspace_id SlackConnection#workspace_id}.

---

### SlackConnectionConfigA <a name="@cdktf/provider-pagerduty.SlackConnectionConfigA"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SlackConnectionConfigA } from '@cdktf/provider-pagerduty'

const slackConnectionConfigA: SlackConnectionConfigA = { ... }
```

##### `events`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfigA.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#events SlackConnection#events}.

---

##### `priorities`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfigA.property.priorities"></a>

```typescript
public readonly priorities: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#priorities SlackConnection#priorities}.

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.SlackConnectionConfigA.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/slack_connection.html#urgency SlackConnection#urgency}.

---

### TeamConfig <a name="@cdktf/provider-pagerduty.TeamConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TeamConfig } from '@cdktf/provider-pagerduty'

const teamConfig: TeamConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team.html#name Team#name}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team.html#description Team#description}.

---

##### `parent`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team.html#parent Team#parent}.

---

### TeamMembershipConfig <a name="@cdktf/provider-pagerduty.TeamMembershipConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TeamMembershipConfig } from '@cdktf/provider-pagerduty'

const teamMembershipConfig: TeamMembershipConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team_membership.html#team_id TeamMembership#team_id}.

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team_membership.html#user_id TeamMembership#user_id}.

---

##### `role`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.TeamMembershipConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/team_membership.html#role TeamMembership#role}.

---

### UserConfig <a name="@cdktf/provider-pagerduty.UserConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserConfig } from '@cdktf/provider-pagerduty'

const userConfig: UserConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#email User#email}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#name User#name}.

---

##### `color`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#color User#color}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#description User#description}.

---

##### `jobTitle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#job_title User#job_title}.

---

##### `role`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#role User#role}.

---

##### `teams`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.teams"></a>

```typescript
public readonly teams: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#teams User#teams}.

---

##### `timeZone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user.html#time_zone User#time_zone}.

---

### UserContactMethodConfig <a name="@cdktf/provider-pagerduty.UserContactMethodConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserContactMethodConfig } from '@cdktf/provider-pagerduty'

const userContactMethodConfig: UserContactMethodConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `address`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#address UserContactMethod#address}.

---

##### `label`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#label UserContactMethod#label}.

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#type UserContactMethod#type}.

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#user_id UserContactMethod#user_id}.

---

##### `countryCode`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.countryCode"></a>

```typescript
public readonly countryCode: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#country_code UserContactMethod#country_code}.

---

##### `sendShortEmail`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserContactMethodConfig.property.sendShortEmail"></a>

```typescript
public readonly sendShortEmail: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_contact_method.html#send_short_email UserContactMethod#send_short_email}.

---

### UserNotificationRuleConfig <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { UserNotificationRuleConfig } from '@cdktf/provider-pagerduty'

const userNotificationRuleConfig: UserNotificationRuleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `contactMethod`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.contactMethod"></a>

```typescript
public readonly contactMethod: IResolvable | {[ key: string ]: string};
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | {[ key: string ]: `string`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#contact_method UserNotificationRule#contact_method}.

---

##### `startDelayInMinutes`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.startDelayInMinutes"></a>

```typescript
public readonly startDelayInMinutes: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#start_delay_in_minutes UserNotificationRule#start_delay_in_minutes}.

---

##### `urgency`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#urgency UserNotificationRule#urgency}.

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.UserNotificationRuleConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/r/user_notification_rule.html#user_id UserNotificationRule#user_id}.

---

## Classes <a name="Classes"></a>

### RulesetRuleActionsOutputReference <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.Initializer"></a>

```typescript
import { RulesetRuleActionsOutputReference } from '@cdktf/provider-pagerduty'

new RulesetRuleActionsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetAnnotate` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetAnnotate"></a>

```typescript
public resetAnnotate()
```

##### `resetEventAction` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction()
```

##### `resetExtractions` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetExtractions"></a>

```typescript
public resetExtractions()
```

##### `resetPriority` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetPriority"></a>

```typescript
public resetPriority()
```

##### `resetRoute` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetRoute"></a>

```typescript
public resetRoute()
```

##### `resetSeverity` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity()
```

##### `resetSuppress` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetSuppress"></a>

```typescript
public resetSuppress()
```

##### `resetSuspend` <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.resetSuspend"></a>

```typescript
public resetSuspend()
```


#### Properties <a name="Properties"></a>

##### `annotateInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.annotateInput"></a>

```typescript
public readonly annotateInput: RulesetRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate`](#@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate)[]

---

##### `eventActionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: RulesetRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsEventAction`](#@cdktf/provider-pagerduty.RulesetRuleActionsEventAction)[]

---

##### `extractionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.extractionsInput"></a>

```typescript
public readonly extractionsInput: RulesetRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsExtractions`](#@cdktf/provider-pagerduty.RulesetRuleActionsExtractions)[]

---

##### `priorityInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: RulesetRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsPriority`](#@cdktf/provider-pagerduty.RulesetRuleActionsPriority)[]

---

##### `routeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.routeInput"></a>

```typescript
public readonly routeInput: RulesetRuleActionsRoute[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsRoute`](#@cdktf/provider-pagerduty.RulesetRuleActionsRoute)[]

---

##### `severityInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: RulesetRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSeverity`](#@cdktf/provider-pagerduty.RulesetRuleActionsSeverity)[]

---

##### `suppressInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.suppressInput"></a>

```typescript
public readonly suppressInput: RulesetRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuppress`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuppress)[]

---

##### `suspendInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: RulesetRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuspend`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuspend)[]

---

##### `annotate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.annotate"></a>

```typescript
public readonly annotate: RulesetRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate`](#@cdktf/provider-pagerduty.RulesetRuleActionsAnnotate)[]

---

##### `eventAction`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: RulesetRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsEventAction`](#@cdktf/provider-pagerduty.RulesetRuleActionsEventAction)[]

---

##### `extractions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.extractions"></a>

```typescript
public readonly extractions: RulesetRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsExtractions`](#@cdktf/provider-pagerduty.RulesetRuleActionsExtractions)[]

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.priority"></a>

```typescript
public readonly priority: RulesetRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsPriority`](#@cdktf/provider-pagerduty.RulesetRuleActionsPriority)[]

---

##### `route`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.route"></a>

```typescript
public readonly route: RulesetRuleActionsRoute[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsRoute`](#@cdktf/provider-pagerduty.RulesetRuleActionsRoute)[]

---

##### `severity`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.severity"></a>

```typescript
public readonly severity: RulesetRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSeverity`](#@cdktf/provider-pagerduty.RulesetRuleActionsSeverity)[]

---

##### `suppress`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.suppress"></a>

```typescript
public readonly suppress: RulesetRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuppress`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuppress)[]

---

##### `suspend`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleActionsOutputReference.property.suspend"></a>

```typescript
public readonly suspend: RulesetRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleActionsSuspend`](#@cdktf/provider-pagerduty.RulesetRuleActionsSuspend)[]

---


### RulesetRuleConditionsOutputReference <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.Initializer"></a>

```typescript
import { RulesetRuleConditionsOutputReference } from '@cdktf/provider-pagerduty'

new RulesetRuleConditionsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetOperator` <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator()
```

##### `resetSubconditions` <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.resetSubconditions"></a>

```typescript
public resetSubconditions()
```


#### Properties <a name="Properties"></a>

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `subconditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.property.subconditionsInput"></a>

```typescript
public readonly subconditionsInput: RulesetRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions)[]

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `subconditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleConditionsOutputReference.property.subconditions"></a>

```typescript
public readonly subconditions: RulesetRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.RulesetRuleConditionsSubconditions)[]

---


### RulesetRuleTimeFrameOutputReference <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.Initializer"></a>

```typescript
import { RulesetRuleTimeFrameOutputReference } from '@cdktf/provider-pagerduty'

new RulesetRuleTimeFrameOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetActiveBetween` <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.resetActiveBetween"></a>

```typescript
public resetActiveBetween()
```

##### `resetScheduledWeekly` <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```typescript
public resetScheduledWeekly()
```


#### Properties <a name="Properties"></a>

##### `activeBetweenInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```typescript
public readonly activeBetweenInput: RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween)[]

---

##### `scheduledWeeklyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```typescript
public readonly scheduledWeeklyInput: RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly)[]

---

##### `activeBetween`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.property.activeBetween"></a>

```typescript
public readonly activeBetween: RulesetRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameActiveBetween)[]

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: RulesetRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.RulesetRuleTimeFrameScheduledWeekly)[]

---


### RulesetTeamOutputReference <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.Initializer"></a>

```typescript
import { RulesetTeamOutputReference } from '@cdktf/provider-pagerduty'

new RulesetTeamOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.RulesetTeamOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---


### ServiceAlertGroupingParametersConfigOutputReference <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```typescript
import { ServiceAlertGroupingParametersConfigOutputReference } from '@cdktf/provider-pagerduty'

new ServiceAlertGroupingParametersConfigOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetAggregate` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```typescript
public resetAggregate()
```

##### `resetFields` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```typescript
public resetFields()
```

##### `resetTimeout` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```typescript
public resetTimeout()
```


#### Properties <a name="Properties"></a>

##### `aggregateInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```typescript
public readonly aggregateInput: string;
```

- *Type:* `string`

---

##### `fieldsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* `string`[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* `number`

---

##### `aggregate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```typescript
public readonly aggregate: string;
```

- *Type:* `string`

---

##### `fields`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* `string`[]

---

##### `timeout`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* `number`

---


### ServiceAlertGroupingParametersOutputReference <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```typescript
import { ServiceAlertGroupingParametersOutputReference } from '@cdktf/provider-pagerduty'

new ServiceAlertGroupingParametersOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `putConfig` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```typescript
public putConfig(value?: ServiceAlertGroupingParametersConfig)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig)

---

##### `resetConfig` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```typescript
public resetConfig()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `config`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```typescript
public readonly config: ServiceAlertGroupingParametersConfigOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfigOutputReference)

---

##### `configInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```typescript
public readonly configInput: ServiceAlertGroupingParametersConfig;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig`](#@cdktf/provider-pagerduty.ServiceAlertGroupingParametersConfig)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---


### ServiceEventRuleActionsOutputReference <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.Initializer"></a>

```typescript
import { ServiceEventRuleActionsOutputReference } from '@cdktf/provider-pagerduty'

new ServiceEventRuleActionsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetAnnotate` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetAnnotate"></a>

```typescript
public resetAnnotate()
```

##### `resetEventAction` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetEventAction"></a>

```typescript
public resetEventAction()
```

##### `resetExtractions` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetExtractions"></a>

```typescript
public resetExtractions()
```

##### `resetPriority` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetPriority"></a>

```typescript
public resetPriority()
```

##### `resetSeverity` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetSeverity"></a>

```typescript
public resetSeverity()
```

##### `resetSuppress` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetSuppress"></a>

```typescript
public resetSuppress()
```

##### `resetSuspend` <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.resetSuspend"></a>

```typescript
public resetSuspend()
```


#### Properties <a name="Properties"></a>

##### `annotateInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.annotateInput"></a>

```typescript
public readonly annotateInput: ServiceEventRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate)[]

---

##### `eventActionInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.eventActionInput"></a>

```typescript
public readonly eventActionInput: ServiceEventRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction)[]

---

##### `extractionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.extractionsInput"></a>

```typescript
public readonly extractionsInput: ServiceEventRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions)[]

---

##### `priorityInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: ServiceEventRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority)[]

---

##### `severityInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: ServiceEventRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity)[]

---

##### `suppressInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.suppressInput"></a>

```typescript
public readonly suppressInput: ServiceEventRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress)[]

---

##### `suspendInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.suspendInput"></a>

```typescript
public readonly suspendInput: ServiceEventRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend)[]

---

##### `annotate`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.annotate"></a>

```typescript
public readonly annotate: ServiceEventRuleActionsAnnotate[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsAnnotate)[]

---

##### `eventAction`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: ServiceEventRuleActionsEventAction[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsEventAction)[]

---

##### `extractions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.extractions"></a>

```typescript
public readonly extractions: ServiceEventRuleActionsExtractions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsExtractions)[]

---

##### `priority`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.priority"></a>

```typescript
public readonly priority: ServiceEventRuleActionsPriority[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsPriority)[]

---

##### `severity`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.severity"></a>

```typescript
public readonly severity: ServiceEventRuleActionsSeverity[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSeverity)[]

---

##### `suppress`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.suppress"></a>

```typescript
public readonly suppress: ServiceEventRuleActionsSuppress[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuppress)[]

---

##### `suspend`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleActionsOutputReference.property.suspend"></a>

```typescript
public readonly suspend: ServiceEventRuleActionsSuspend[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend`](#@cdktf/provider-pagerduty.ServiceEventRuleActionsSuspend)[]

---


### ServiceEventRuleConditionsOutputReference <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.Initializer"></a>

```typescript
import { ServiceEventRuleConditionsOutputReference } from '@cdktf/provider-pagerduty'

new ServiceEventRuleConditionsOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetOperator` <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.resetOperator"></a>

```typescript
public resetOperator()
```

##### `resetSubconditions` <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.resetSubconditions"></a>

```typescript
public resetSubconditions()
```


#### Properties <a name="Properties"></a>

##### `operatorInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* `string`

---

##### `subconditionsInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.property.subconditionsInput"></a>

```typescript
public readonly subconditionsInput: ServiceEventRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions)[]

---

##### `operator`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* `string`

---

##### `subconditions`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleConditionsOutputReference.property.subconditions"></a>

```typescript
public readonly subconditions: ServiceEventRuleConditionsSubconditions[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions`](#@cdktf/provider-pagerduty.ServiceEventRuleConditionsSubconditions)[]

---


### ServiceEventRuleTimeFrameOutputReference <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.Initializer"></a>

```typescript
import { ServiceEventRuleTimeFrameOutputReference } from '@cdktf/provider-pagerduty'

new ServiceEventRuleTimeFrameOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetActiveBetween` <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.resetActiveBetween"></a>

```typescript
public resetActiveBetween()
```

##### `resetScheduledWeekly` <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```typescript
public resetScheduledWeekly()
```


#### Properties <a name="Properties"></a>

##### `activeBetweenInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```typescript
public readonly activeBetweenInput: ServiceEventRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween)[]

---

##### `scheduledWeeklyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```typescript
public readonly scheduledWeeklyInput: ServiceEventRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly)[]

---

##### `activeBetween`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.property.activeBetween"></a>

```typescript
public readonly activeBetween: ServiceEventRuleTimeFrameActiveBetween[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameActiveBetween)[]

---

##### `scheduledWeekly`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```typescript
public readonly scheduledWeekly: ServiceEventRuleTimeFrameScheduledWeekly[];
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly`](#@cdktf/provider-pagerduty.ServiceEventRuleTimeFrameScheduledWeekly)[]

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference } from '@cdktf/provider-pagerduty'

new ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```typescript
public resetType()
```

##### `resetUrgency` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```typescript
public resetUrgency()
```


#### Properties <a name="Properties"></a>

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `urgencyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

---


### ServiceIncidentUrgencyRuleOutputReference <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRuleOutputReference } from '@cdktf/provider-pagerduty'

new ServiceIncidentUrgencyRuleOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `putDuringSupportHours` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```typescript
public putDuringSupportHours(value?: ServiceIncidentUrgencyRuleDuringSupportHours)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours)

---

##### `putOutsideSupportHours` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```typescript
public putOutsideSupportHours(value?: ServiceIncidentUrgencyRuleOutsideSupportHours)
```

###### `value`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.parameter.value"></a>

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours)

---

##### `resetDuringSupportHours` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```typescript
public resetDuringSupportHours()
```

##### `resetOutsideSupportHours` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```typescript
public resetOutsideSupportHours()
```

##### `resetUrgency` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```typescript
public resetUrgency()
```


#### Properties <a name="Properties"></a>

##### `duringSupportHours`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```typescript
public readonly duringSupportHours: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference)

---

##### `outsideSupportHours`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```typescript
public readonly outsideSupportHours: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference)

---

##### `duringSupportHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```typescript
public readonly duringSupportHoursInput: ServiceIncidentUrgencyRuleDuringSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleDuringSupportHours)

---

##### `outsideSupportHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```typescript
public readonly outsideSupportHoursInput: ServiceIncidentUrgencyRuleOutsideSupportHours;
```

- *Type:* [`@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours`](#@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHours)

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `urgencyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```typescript
import { ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference } from '@cdktf/provider-pagerduty'

new ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetType` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```typescript
public resetType()
```

##### `resetUrgency` <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```typescript
public resetUrgency()
```


#### Properties <a name="Properties"></a>

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `urgencyInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```typescript
public readonly urgencyInput: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

##### `urgency`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```typescript
public readonly urgency: string;
```

- *Type:* `string`

---


### ServiceSupportHoursOutputReference <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.Initializer"></a>

```typescript
import { ServiceSupportHoursOutputReference } from '@cdktf/provider-pagerduty'

new ServiceSupportHoursOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---

#### Methods <a name="Methods"></a>

##### `resetDaysOfWeek` <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek()
```

##### `resetEndTime` <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.resetEndTime"></a>

```typescript
public resetEndTime()
```

##### `resetStartTime` <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.resetStartTime"></a>

```typescript
public resetStartTime()
```

##### `resetTimeZone` <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone()
```

##### `resetType` <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.resetType"></a>

```typescript
public resetType()
```


#### Properties <a name="Properties"></a>

##### `daysOfWeekInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: number[];
```

- *Type:* `number`[]

---

##### `endTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* `string`

---

##### `startTimeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* `string`

---

##### `timeZoneInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* `string`

---

##### `typeInput`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* `string`

---

##### `daysOfWeek`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: number[];
```

- *Type:* `number`[]

---

##### `endTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* `string`

---

##### `timeZone`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="@cdktf/provider-pagerduty.ServiceSupportHoursOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---



