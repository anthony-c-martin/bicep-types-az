# Microsoft.EventGrid @ 2019-02-01-preview

## Resource Microsoft.EventGrid/domains@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DomainProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventGrid/domains' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/eventSubscriptions@2019-02-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventSubscriptionProperties
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2019-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: TopicProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## DomainProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inputSchema**: 'CloudEventV01Schema' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: InputSchemaMapping
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## InputSchemaMapping
* **Discriminator**: inputSchemaMappingType
### Base Properties
### Json
#### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: JsonInputSchemaMappingProperties


## Json
### Properties
* **inputSchemaMappingType**: 'Json' (Required)
* **properties**: JsonInputSchemaMappingProperties

## JsonInputSchemaMappingProperties
### Properties
* **dataVersion**: JsonFieldWithDefault
* **eventTime**: JsonField
* **eventType**: JsonFieldWithDefault
* **id**: JsonField
* **subject**: JsonFieldWithDefault
* **topic**: JsonField

## JsonFieldWithDefault
### Properties
* **defaultValue**: string
* **sourceField**: string

## JsonField
### Properties
* **sourceField**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventSubscriptionProperties
### Properties
* **deadLetterDestination**: DeadLetterDestination
* **destination**: EventSubscriptionDestination
* **eventDeliverySchema**: 'CloudEventV01Schema' | 'CustomInputSchema' | 'EventGridSchema'
* **expirationTimeUtc**: string
* **filter**: EventSubscriptionFilter
* **labels**: string[]
* **provisioningState**: 'AwaitingManualAction' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **retryPolicy**: RetryPolicy
* **topic**: string (ReadOnly)

## DeadLetterDestination
* **Discriminator**: endpointType
### Base Properties
### StorageBlob
#### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: StorageBlobDeadLetterDestinationProperties


## StorageBlob
### Properties
* **endpointType**: 'StorageBlob' (Required)
* **properties**: StorageBlobDeadLetterDestinationProperties

## StorageBlobDeadLetterDestinationProperties
### Properties
* **blobContainerName**: string
* **resourceId**: string

## EventSubscriptionDestination
* **Discriminator**: endpointType
### Base Properties
### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

### HybridConnection
#### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

### ServiceBusQueue
#### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

### StorageQueue
#### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties


## EventHub
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: EventHubEventSubscriptionDestinationProperties

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## HybridConnection
### Properties
* **endpointType**: 'HybridConnection' (Required)
* **properties**: HybridConnectionEventSubscriptionDestinationProperties

## HybridConnectionEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## ServiceBusQueue
### Properties
* **endpointType**: 'ServiceBusQueue' (Required)
* **properties**: ServiceBusQueueEventSubscriptionDestinationProperties

## ServiceBusQueueEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## StorageQueue
### Properties
* **endpointType**: 'StorageQueue' (Required)
* **properties**: StorageQueueEventSubscriptionDestinationProperties

## StorageQueueEventSubscriptionDestinationProperties
### Properties
* **queueName**: string
* **resourceId**: string

## WebHook
### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: WebHookEventSubscriptionDestinationProperties

## WebHookEventSubscriptionDestinationProperties
### Properties
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string

## EventSubscriptionFilter
### Properties
* **advancedFilters**: AdvancedFilter[]
* **includedEventTypes**: string[]
* **isSubjectCaseSensitive**: bool
* **subjectBeginsWith**: string
* **subjectEndsWith**: string

## AdvancedFilter
* **Discriminator**: operatorType
### Base Properties
* **key**: string
### BoolEquals
#### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

### NumberGreaterThan
#### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

### NumberGreaterThanOrEquals
#### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

### NumberIn
#### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

### NumberLessThan
#### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

### NumberLessThanOrEquals
#### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

### NumberNotIn
#### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

### StringBeginsWith
#### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

### StringContains
#### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

### StringEndsWith
#### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

### StringIn
#### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

### StringNotIn
#### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]


## BoolEquals
### Properties
* **operatorType**: 'BoolEquals' (Required)
* **value**: bool

## NumberGreaterThan
### Properties
* **operatorType**: 'NumberGreaterThan' (Required)
* **value**: int

## NumberGreaterThanOrEquals
### Properties
* **operatorType**: 'NumberGreaterThanOrEquals' (Required)
* **value**: int

## NumberIn
### Properties
* **operatorType**: 'NumberIn' (Required)
* **values**: int[]

## NumberLessThan
### Properties
* **operatorType**: 'NumberLessThan' (Required)
* **value**: int

## NumberLessThanOrEquals
### Properties
* **operatorType**: 'NumberLessThanOrEquals' (Required)
* **value**: int

## NumberNotIn
### Properties
* **operatorType**: 'NumberNotIn' (Required)
* **values**: int[]

## StringBeginsWith
### Properties
* **operatorType**: 'StringBeginsWith' (Required)
* **values**: string[]

## StringContains
### Properties
* **operatorType**: 'StringContains' (Required)
* **values**: string[]

## StringEndsWith
### Properties
* **operatorType**: 'StringEndsWith' (Required)
* **values**: string[]

## StringIn
### Properties
* **operatorType**: 'StringIn' (Required)
* **values**: string[]

## StringNotIn
### Properties
* **operatorType**: 'StringNotIn' (Required)
* **values**: string[]

## RetryPolicy
### Properties
* **eventTimeToLiveInMinutes**: int
* **maxDeliveryAttempts**: int

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **inputSchema**: 'CloudEventV01Schema' | 'CustomEventSchema' | 'EventGridSchema'
* **inputSchemaMapping**: InputSchemaMapping
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

