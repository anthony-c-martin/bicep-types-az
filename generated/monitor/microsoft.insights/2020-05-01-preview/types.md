# Microsoft.Insights @ 2020-05-01-preview

## Resource Microsoft.Insights/scheduledQueryRules@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduledQueryRuleProperties (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant)

## ScheduledQueryRuleProperties
### Properties
* **actions**: Action[]
* **createdWithApiVersion**: string (ReadOnly)
* **criteria**: ScheduledQueryRuleCriteria
* **description**: string
* **displayName**: string
* **enabled**: bool
* **evaluationFrequency**: any
* **isLegacyLogAnalyticsRule**: bool (ReadOnly)
* **muteActionsDuration**: any
* **overrideQueryTimeRange**: any
* **scopes**: string[]
* **severity**: '0' | '1' | '2' | '3' | '4'
* **targetResourceTypes**: string[]
* **windowSize**: any

## Action
### Properties
* **actionGroupId**: string
* **webHookProperties**: ActionWebHookProperties

## ActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduledQueryRuleCriteria
### Properties
* **allOf**: Condition[]

## Condition
### Properties
* **dimensions**: Dimension[]
* **failingPeriods**: ConditionFailingPeriods
* **metricMeasureColumn**: string
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' (Required)
* **query**: string
* **resourceIdColumn**: string
* **threshold**: int (Required)
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' (Required)

## Dimension
### Properties
* **name**: string (Required)
* **operator**: 'Exclude' | 'Include' (Required)
* **values**: string[] (Required)

## ConditionFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int
* **numberOfEvaluationPeriods**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string
