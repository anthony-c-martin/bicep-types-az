# Microsoft.EventHub @ 2017-04-01

## Resource Microsoft.EventHub/namespaces@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EHNamespaceProperties
* **sku**: Sku
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.EventHub/namespaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ArmDisasterRecoveryProperties
* **type**: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventhubProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AuthorizationRuleProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/eventhubs/consumergroups@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConsumerGroupProperties
* **type**: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventHub/namespaces/networkRuleSets@2017-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkRuleSetProperties
* **type**: 'Microsoft.EventHub/namespaces/networkRuleSets' (ReadOnly, DeployTimeConstant)

## EHNamespaceProperties
### Properties
* **createdAt**: string (ReadOnly)
* **isAutoInflateEnabled**: bool
* **kafkaEnabled**: bool
* **maximumThroughputUnits**: int
* **metricId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceBusEndpoint**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **name**: 'Basic' | 'Standard' (Required)
* **tier**: 'Basic' | 'Standard'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AuthorizationRuleProperties
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send'[] (Required)

## ArmDisasterRecoveryProperties
### Properties
* **alternateName**: string
* **partnerNamespace**: string
* **pendingReplicationOperationsCount**: int (ReadOnly)
* **provisioningState**: 'Accepted' | 'Failed' | 'Succeeded' (ReadOnly)
* **role**: 'Primary' | 'PrimaryNotReplicating' | 'Secondary' (ReadOnly)

## EventhubProperties
### Properties
* **captureDescription**: CaptureDescription
* **createdAt**: string (ReadOnly)
* **messageRetentionInDays**: int
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown'
* **updatedAt**: string (ReadOnly)

## CaptureDescription
### Properties
* **destination**: Destination
* **enabled**: bool
* **encoding**: 'Avro' | 'AvroDeflate'
* **intervalInSeconds**: int
* **sizeLimitInBytes**: int
* **skipEmptyArchives**: bool

## Destination
### Properties
* **name**: string
* **properties**: DestinationProperties

## DestinationProperties
### Properties
* **archiveNameFormat**: string
* **blobContainer**: string
* **storageAccountResourceId**: string

## ConsumerGroupProperties
### Properties
* **createdAt**: string (ReadOnly)
* **updatedAt**: string (ReadOnly)
* **userMetadata**: string

## NetworkRuleSetProperties
### Properties
* **defaultAction**: 'Allow' | 'Deny'
* **ipRules**: NWRuleSetIpRules[]
* **virtualNetworkRules**: NWRuleSetVirtualNetworkRules[]

## NWRuleSetIpRules
### Properties
* **action**: 'Allow'
* **ipMask**: string

## NWRuleSetVirtualNetworkRules
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **subnet**: Subnet

## Subnet
### Properties
* **id**: string (Required)
