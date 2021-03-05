# Microsoft.Insights @ 2016-03-01

## Resource Microsoft.Insights/alertrules@2016-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertRule (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Insights/alertrules' (ReadOnly, DeployTimeConstant)

## Resource microsoft.insights/logprofiles@2016-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogProfileProperties (Required)
* **tags**: ResourceTags
* **type**: 'microsoft.insights/logprofiles' (ReadOnly, DeployTimeConstant)

## AlertRule
### Properties
* **action**: RuleAction
* **actions**: RuleAction[]
* **condition**: RuleCondition (Required)
* **description**: string
* **isEnabled**: bool (Required)
* **lastUpdatedTime**: string (ReadOnly)
* **name**: string (Required)
* **provisioningState**: string

## RuleAction
* **Discriminator**: odata.type

### Base Properties
### RuleEmailAction
#### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

### RuleWebhookAction
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: RuleWebhookActionProperties
* **serviceUri**: string


## RuleEmailAction
### Properties
* **customEmails**: string[]
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (Required)
* **sendToServiceOwners**: bool

## RuleWebhookAction
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (Required)
* **properties**: RuleWebhookActionProperties
* **serviceUri**: string

## RuleWebhookActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RuleCondition
* **Discriminator**: odata.type

### Base Properties
* **dataSource**: RuleDataSource
### LocationThresholdRuleCondition
#### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: any

### ManagementEventRuleCondition
#### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

### ThresholdRuleCondition
#### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: any


## RuleDataSource
* **Discriminator**: odata.type

### Base Properties
* **legacyResourceId**: string
* **metricNamespace**: string
* **resourceLocation**: string
* **resourceUri**: string
### RuleManagementEventDataSource
#### Properties
* **claims**: RuleManagementEventClaimsDataSource
* **eventName**: string
* **eventSource**: string
* **level**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required)
* **operationName**: string
* **resourceGroupName**: string
* **resourceProviderName**: string
* **status**: string
* **subStatus**: string

### RuleMetricDataSource
#### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)


## RuleManagementEventDataSource
### Properties
* **claims**: RuleManagementEventClaimsDataSource
* **eventName**: string
* **eventSource**: string
* **level**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (Required)
* **operationName**: string
* **resourceGroupName**: string
* **resourceProviderName**: string
* **status**: string
* **subStatus**: string

## RuleManagementEventClaimsDataSource
### Properties
* **emailAddress**: string

## RuleMetricDataSource
### Properties
* **metricName**: string
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (Required)

## LocationThresholdRuleCondition
### Properties
* **failedLocationCount**: int (Required)
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (Required)
* **windowSize**: any

## ManagementEventRuleCondition
### Properties
* **aggregation**: ManagementEventAggregationCondition
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (Required)

## ManagementEventAggregationCondition
### Properties
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual'
* **threshold**: int
* **windowSize**: any

## ThresholdRuleCondition
### Properties
* **odata.type**: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (Required)
* **operator**: 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Last' | 'Maximum' | 'Minimum' | 'Total'
* **windowSize**: any

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogProfileProperties
### Properties
* **categories**: string[] (Required)
* **locations**: string[] (Required)
* **retentionPolicy**: RetentionPolicy (Required)
* **serviceBusRuleId**: string
* **storageAccountId**: string

## RetentionPolicy
### Properties
* **days**: int (Required)
* **enabled**: bool (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string
