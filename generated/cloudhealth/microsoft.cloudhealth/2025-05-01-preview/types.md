# Microsoft.CloudHealth @ 2025-05-01-preview

## Resource Microsoft.CloudHealth/healthmodels@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthModelProperties](#healthmodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.CloudHealth/healthmodels' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/authenticationsettings@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthenticationSettingProperties](#authenticationsettingproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/authenticationsettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/discoveryrules@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiscoveryRuleProperties](#discoveryruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/discoveryrules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/entities@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EntityProperties](#entityproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/entities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/relationships@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RelationshipProperties](#relationshipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/relationships' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CloudHealth/healthmodels/signaldefinitions@2025-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SignalDefinitionProperties](#signaldefinitionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CloudHealth/healthmodels/signaldefinitions' (ReadOnly, DeployTimeConstant): The resource type

## AlertConfiguration
### Properties
* **actionGroupIds**: string[]: Optional list of action group resource IDs to be notified when the alert is triggered.
* **description**: string: The alert rule description.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (Required): The severity of triggered alert.

## AuthenticationSettingProperties
* **Discriminator**: authenticationKind

### Base Properties
* **displayName**: string: Display name
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

### ManagedIdentityAuthenticationSettingProperties
#### Properties
* **authenticationKind**: 'ManagedIdentity' (Required): Kind of the authentication setting
* **managedIdentityName**: string (Required): Name of the managed identity to use. Either 'SystemAssigned' or the resourceId of a user-assigned identity.


## AzureMonitorWorkspaceSignalGroup
### Properties
* **authenticationSetting**: string (Required): Reference to the name of the authentication setting which is used for querying the data source
* **azureMonitorWorkspaceResourceId**: string (Required): Azure Monitor workspace resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[]: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

## AzureResourceSignalGroup
### Properties
* **authenticationSetting**: string (Required): Reference to the name of the authentication setting which is used for querying the data source
* **azureResourceId**: string (Required): Azure resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[]: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

## DependenciesSignalGroup
### Properties
* **aggregationType**: 'Thresholds' | 'WorstOf' | string (Required): Aggregation type for child dependencies.
* **degradedThreshold**: string: Degraded threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered degraded when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.
* **unhealthyThreshold**: string: Unhealthy threshold for aggregating the propagated health state of child dependencies. Can be either an absolute number that is greater than 0, or a percentage between 1-100%. The entity will be considered unhealthy when the number of not healthy child dependents (unhealthy, degraded, unknown) is equal to or above the threshold value. Must only be set when AggregationType is 'Thresholds'.

## DiscoveryRuleProperties
### Properties
* **addRecommendedSignals**: 'Disabled' | 'Enabled' | string (Required): Whether to add all recommended signals to the discovered entities.
* **authenticationSetting**: string (Required): Reference to the name of the authentication setting which is used for querying Azure Resource Graph. The same authentication setting will also be assigned to any discovered entities.
* **deletionDate**: string (ReadOnly): Date when the discovery rule was (soft-)deleted.
* **discoverRelationships**: 'Disabled' | 'Enabled' | string (Required): Whether to create relationships between the discovered entities based on a set of built-in rules. These relationships cannot be manually deleted.
* **displayName**: string: Display name
* **entityName**: string (Required, ReadOnly): Name of the entity which represents the discovery rule. Note: It might take a few minutes after creating the discovery rule until the entity is created.
* **errorMessage**: string (ReadOnly): Error message if the last discovery operation failed.
* **numberOfDiscoveredEntities**: int (ReadOnly): Number of discovered entities in the last discovery operation.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **resourceGraphQuery**: string (Required): Azure Resource Graph query text in KQL syntax. The query must return at least a column named 'id' which contains the resource ID of the discovered resources.

## DynamicDetectionRule
### Properties
* **dynamicThresholdDirection**: 'GreaterOrLowerThan' | 'GreaterThan' | 'LowerThan' | string (Required): Threshold direction
* **dynamicThresholdModel**: 'AnomalyDetection' | string (Required): ML model to use for dynamic thresholds
* **modelSensitivity**: int (Required): ML model sensitivity. Lowest value = high sensitivity. Supported step size = 0.5
* **trainingStartTime**: string: Start time of the training in UTC.

## EntityAlerts
### Properties
* **degraded**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to degraded
* **unhealthy**: [AlertConfiguration](#alertconfiguration): Alert to be triggered on state change to unhealthy

## EntityCoordinates
### Properties
* **x**: int (Required): X Coordinate
* **y**: int (Required): Y Coordinate

## EntityProperties
### Properties
* **alerts**: [EntityAlerts](#entityalerts): Alert configuration for this entity
* **canvasPosition**: [EntityCoordinates](#entitycoordinates): Positioning of the entity on the model canvas
* **deletionDate**: string (ReadOnly): Date when the entity was (soft-)deleted
* **discoveredBy**: string (ReadOnly): Discovered by which discovery rule. If set, the entity cannot be deleted manually.
* **displayName**: string: Display name
* **healthObjective**: int: Health objective as a percentage of time the entity should be healthy.
* **healthState**: 'Degraded' | 'Deleted' | 'Error' | 'Healthy' | 'Unknown' | string (ReadOnly): Health state of this entity
* **icon**: [IconDefinition](#icondefinition): Visual icon definition. If not set, a default icon is used.
* **impact**: 'Limited' | 'Standard' | 'Suppressed' | string: Impact of the entity in health state propagation
* **kind**: string: Entity kind
* **labels**: [EntityPropertiesLabels](#entitypropertieslabels): Optional set of labels (key-value pairs)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **signals**: [SignalGroup](#signalgroup): Signal groups which are assigned to this entity

## EntityPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EvaluationRule
### Properties
* **degradedRule**: [ThresholdRule](#thresholdrule): Degraded rule with static threshold.
* **dynamicDetectionRule**: [DynamicDetectionRule](#dynamicdetectionrule): Configure to use ML-based dynamic thresholds. When used, degradedRule and unhealthyRule must not be set.
* **unhealthyRule**: [ThresholdRule](#thresholdrule): Unhealthy rule with static threshold.

## HealthModelProperties
### Properties
* **dataplaneEndpoint**: string (ReadOnly): The data plane endpoint for interacting with health data
* **discovery**: [ModelDiscoverySettings](#modeldiscoverysettings): Configure to automatically discover entities from a given scope, such as a Service Group. The discovered entities will be linked to the root entity of the health model.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## IconDefinition
### Properties
* **customData**: string: Custom data. Base64-encoded SVG data. If set, this overrides the built-in icon.
* **iconName**: string (Required): Name of the built-in icon, or 'Custom' to use customData

## LogAnalyticsSignalGroup
### Properties
* **authenticationSetting**: string (Required): Reference to the name of the authentication setting which is used for querying the data source
* **logAnalyticsWorkspaceResourceId**: string (Required): Log Analytics Workspace resource ID
* **signalAssignments**: [SignalAssignment](#signalassignment)[]: Signal definitions which are assigned to this signal group. All assignments are combined with an OR operator.

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## ModelDiscoverySettings
### Properties
* **addRecommendedSignals**: 'Disabled' | 'Enabled' | string (Required): Whether to add all recommended signals to the discovered entities.
* **identity**: string: Which Managed Identity of the health model to use for discovery. Defaults to SystemAssigned, if not set. Can be set to 'SystemAssigned' or to the resource id of a user-assigned managed identity which is linked to the health model.
* **scope**: string (Required): The scope from which entities should be automatically discovered. For example, the resource id of a Service Group.

## RelationshipProperties
### Properties
* **childEntityName**: string (Required): Resource name of the child entity
* **deletionDate**: string (ReadOnly): Date when the relationship was (soft-)deleted
* **discoveredBy**: string (ReadOnly): Discovered by which discovery rule. If set, the relationship cannot be deleted manually.
* **displayName**: string: Display name
* **labels**: [RelationshipPropertiesLabels](#relationshippropertieslabels): Optional set of labels (key-value pairs)
* **parentEntityName**: string (Required): Resource name of the parent entity
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## RelationshipPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalAssignment
### Properties
* **signalDefinitions**: string[] (Required): Signal definitions referenced by their names. All definitions are combined with an AND operator.

## SignalDefinitionProperties
* **Discriminator**: signalKind

### Base Properties
* **dataUnit**: string: Unit of the signal result (e.g. Bytes, MilliSeconds, Percent, Count))
* **deletionDate**: string (ReadOnly): Date when the signal definition was (soft-)deleted
* **displayName**: string: Display name
* **evaluationRules**: [EvaluationRule](#evaluationrule) (Required): Evaluation rules for the signal definition
* **labels**: [SignalDefinitionPropertiesLabels](#signaldefinitionpropertieslabels): Optional set of labels (key-value pairs)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.
* **refreshInterval**: 'PT10M' | 'PT1H' | 'PT1M' | 'PT2H' | 'PT30M' | 'PT5M' | string: Interval in which the signal is being evaluated. Defaults to PT1M (1 minute).

### ResourceMetricSignalDefinitionProperties
#### Properties
* **aggregationType**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | string (Required): Type of aggregation to apply to the metric
* **dimension**: string: Optional: Dimension to split by
* **dimensionFilter**: string: Optional: Dimension filter to apply to the dimension. Must only be set if also Dimension is set.
* **metricName**: string (Required): Name of the metric
* **metricNamespace**: string (Required): Metric namespace
* **signalKind**: 'AzureResourceMetric' (Required): Kind of the signal definition
* **timeGrain**: string (Required): Time range of signal. ISO duration format like PT10M.

### LogAnalyticsQuerySignalDefinitionProperties
#### Properties
* **queryText**: string (Required): Query text in KQL syntax
* **signalKind**: 'LogAnalyticsQuery' (Required): Kind of the signal definition
* **timeGrain**: string: Time range of signal. ISO duration format like PT10M. If not specified, the KQL query must define a time range.
* **valueColumnName**: string: Name of the column in the result set to evaluate against the thresholds. Defaults to the first column in the result set if not specified. The column must be numeric.

### PrometheusMetricsSignalDefinitionProperties
#### Properties
* **queryText**: string (Required): Query text in PromQL syntax
* **signalKind**: 'PrometheusMetricsQuery' (Required): Kind of the signal definition
* **timeGrain**: string: Time range of signal. ISO duration format like PT10M.


## SignalDefinitionPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SignalGroup
### Properties
* **azureLogAnalytics**: [LogAnalyticsSignalGroup](#loganalyticssignalgroup): Log Analytics Signal Group
* **azureMonitorWorkspace**: [AzureMonitorWorkspaceSignalGroup](#azuremonitorworkspacesignalgroup): Azure Monitor Workspace Signal Group
* **azureResource**: [AzureResourceSignalGroup](#azureresourcesignalgroup): Azure Resource Signal Group
* **dependencies**: [DependenciesSignalGroup](#dependenciessignalgroup): Settings for dependency signals to control how the health state of child entities influences the health state of the parent entity.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThresholdRule
### Properties
* **operator**: 'Equals' | 'GreaterOrEquals' | 'GreaterThan' | 'LowerOrEquals' | 'LowerThan' | string (Required): Operator how to compare the signal value with the threshold
* **threshold**: string (Required): Threshold value

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

