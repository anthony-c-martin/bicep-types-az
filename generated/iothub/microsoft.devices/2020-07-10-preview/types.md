# Microsoft.Devices @ 2020-07-10-preview

## Resource Microsoft.Devices/IotHubs@2020-07-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-10-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ArmIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotHubProperties
* **sku**: IotHubSkuInfo (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2020-07-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-10-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2020-07-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-10-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventHubConsumerGroupName
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/iotHubs/privateEndpointConnections@2020-07-10-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-10-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: 'Microsoft.Devices/iotHubs/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ArmIdentity
### Properties
* **identityType**: string
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **userAssignedIdentities**: Dictionary<string,ArmUserIdentity>

## Dictionary<string,ArmUserIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: ArmUserIdentity

## ArmUserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## IotHubProperties
### Properties
* **authorizationPolicies**: SharedAccessSignatureAuthorizationRule[]
* **cloudToDevice**: CloudToDeviceProperties
* **comments**: string
* **deviceStreams**: schemas:8_deviceStreams
* **enableFileUploadNotifications**: bool
* **encryption**: EncryptionPropertiesDescription
* **eventHubEndpoints**: Dictionary<string,EventHubProperties>
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: IpFilterRule[]
* **locations**: IotHubLocationDescription[] (ReadOnly)
* **messagingEndpoints**: Dictionary<string,MessagingEndpointProperties>
* **minTlsVersion**: string
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **routing**: RoutingProperties
* **state**: string (ReadOnly)
* **storageEndpoints**: Dictionary<string,StorageEndpointProperties>

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite' | 'ServiceConnect, DeviceConnect' | 'ServiceConnect' (Required)
* **secondaryKey**: string

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: string
* **feedback**: FeedbackProperties
* **maxDeliveryCount**: int

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## schemas:8_deviceStreams
### Properties
* **streamingEndpoints**: string[]

## EncryptionPropertiesDescription
### Properties
* **keySource**: string
* **keyVaultProperties**: KeyVaultKeyProperties[]

## KeyVaultKeyProperties
### Properties
* **identity**: KEKIdentity
* **keyIdentifier**: string

## KEKIdentity
### Properties
* **userAssignedIdentity**: string

## Dictionary<string,EventHubProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: EventHubProperties

## EventHubProperties
### Properties
* **endpoint**: string (ReadOnly)
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **path**: string (ReadOnly)
* **retentionTimeInDays**: int

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required)
* **filterName**: string (Required)
* **ipMask**: string (Required)

## IotHubLocationDescription
### Properties
* **location**: string
* **role**: 'primary' | 'secondary'

## Dictionary<string,MessagingEndpointProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: MessagingEndpointProperties

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## RoutingProperties
### Properties
* **endpoints**: RoutingEndpoints
* **enrichments**: EnrichmentProperties[]
* **fallbackRoute**: FallbackRouteProperties
* **routes**: RouteProperties[]

## RoutingEndpoints
### Properties
* **eventHubs**: RoutingEventHubProperties[]
* **serviceBusQueues**: RoutingServiceBusQueueEndpointProperties[]
* **serviceBusTopics**: RoutingServiceBusTopicEndpointProperties[]
* **storageContainers**: RoutingStorageContainerProperties[]

## RoutingEventHubProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusQueueEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusTopicEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingStorageContainerProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **batchFrequencyInSeconds**: int
* **connectionString**: string
* **containerName**: string (Required)
* **encoding**: 'Avro' | 'AvroDeflate' | 'JSON'
* **endpointUri**: string
* **fileNameFormat**: string
* **id**: string
* **maxChunkSizeInBytes**: int
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## EnrichmentProperties
### Properties
* **endpointNames**: string[] (Required)
* **key**: string (Required)
* **value**: string (Required)

## FallbackRouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string
* **source**: string (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'DigitalTwinChangeEvents' | 'Invalid' | 'TwinChangeEvents' (Required)

## Dictionary<string,StorageEndpointProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: StorageEndpointProperties

## StorageEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **sasTtlAsIso8601**: string

## IotHubSkuInfo
### Properties
* **capacity**: int
* **name**: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3' (Required)
* **tier**: 'Basic' | 'Free' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **certificate**: string
* **created**: string (ReadOnly)
* **expiry**: string (ReadOnly)
* **isVerified**: bool (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **updated**: string (ReadOnly)

## EventHubConsumerGroupName
### Properties
* **name**: string (WriteOnly)

