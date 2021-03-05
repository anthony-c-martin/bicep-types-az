# Microsoft.DBForMariaDB @ 2018-06-01

## Resource Microsoft.DBForMariaDB/servers@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerPropertiesForCreate (Required)
* **sku**: Sku
* **tags**: ServerForCreateTags
* **type**: 'Microsoft.DBForMariaDB/servers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/configurations@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProperties
* **type**: 'Microsoft.DBForMariaDB/servers/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/databases@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **type**: 'Microsoft.DBForMariaDB/servers/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/firewallRules@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: FirewallRuleProperties (Required)
* **type**: 'Microsoft.DBForMariaDB/servers/firewallRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBForMariaDB/servers/virtualNetworkRules@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkRuleProperties
* **type**: 'Microsoft.DBForMariaDB/servers/virtualNetworkRules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.DBforMariaDB/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'Default' (Required, DeployTimeConstant)
* **properties**: SecurityAlertPolicyProperties
* **type**: 'Microsoft.DBforMariaDB/servers/securityAlertPolicies' (ReadOnly, DeployTimeConstant)

## ServerPropertiesForCreate
* **Discriminator**: createMode

### Base Properties
* **administratorLogin**: string (ReadOnly)
* **earliestRestoreDate**: string (ReadOnly)
* **fullyQualifiedDomainName**: string (ReadOnly)
* **masterServerId**: string (ReadOnly)
* **privateEndpointConnections**: ServerPrivateEndpointConnection[] (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **replicaCapacity**: int (ReadOnly)
* **replicationRole**: string (ReadOnly)
* **sslEnforcement**: 'Disabled' | 'Enabled'
* **storageProfile**: StorageProfile
* **userVisibleState**: 'Disabled' | 'Dropping' | 'Ready' (ReadOnly)
* **version**: '5.6' | '5.7'
### ServerPropertiesForDefaultCreate
#### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: any (Required, WriteOnly)
* **createMode**: 'Default' (Required)

### ServerPropertiesForGeoRestore
#### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

### ServerPropertiesForRestore
#### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

### ServerPropertiesForReplica
#### Properties
* **createMode**: 'Replica' (Required)
* **sourceServerId**: string (Required, WriteOnly)


## ServerPrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **properties**: ServerPrivateEndpointConnectionProperties (ReadOnly)

## ServerPrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpointProperty (ReadOnly)
* **privateLinkServiceConnectionState**: ServerPrivateLinkServiceConnectionStateProperty (ReadOnly)
* **provisioningState**: 'Approving' | 'Dropping' | 'Failed' | 'Ready' | 'Rejecting' (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string (ReadOnly)

## ServerPrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: 'None' (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (ReadOnly)

## StorageProfile
### Properties
* **backupRetentionDays**: int
* **geoRedundantBackup**: 'Disabled' | 'Enabled'
* **storageAutogrow**: 'Disabled' | 'Enabled'
* **storageMB**: int

## ServerPropertiesForDefaultCreate
### Properties
* **administratorLogin**: string (Required, WriteOnly)
* **administratorLoginPassword**: any (Required, WriteOnly)
* **createMode**: 'Default' (Required)

## ServerPropertiesForGeoRestore
### Properties
* **createMode**: 'GeoRestore' (Required)
* **sourceServerId**: string (Required, WriteOnly)

## ServerPropertiesForRestore
### Properties
* **createMode**: 'PointInTimeRestore' (Required)
* **restorePointInTime**: string (Required, WriteOnly)
* **sourceServerId**: string (Required, WriteOnly)

## ServerPropertiesForReplica
### Properties
* **createMode**: 'Replica' (Required)
* **sourceServerId**: string (Required, WriteOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: string (Required)
* **size**: string
* **tier**: 'Basic' | 'GeneralPurpose' | 'MemoryOptimized'

## ServerForCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationProperties
### Properties
* **allowedValues**: string (ReadOnly)
* **dataType**: string (ReadOnly)
* **defaultValue**: string (ReadOnly)
* **description**: string (ReadOnly)
* **source**: string
* **value**: string

## DatabaseProperties
### Properties
* **charset**: string
* **collation**: string

## FirewallRuleProperties
### Properties
* **endIpAddress**: string (Required)
* **startIpAddress**: string (Required)

## VirtualNetworkRuleProperties
### Properties
* **ignoreMissingVnetServiceEndpoint**: bool
* **state**: 'Deleting' | 'InProgress' | 'Initializing' | 'Ready' | 'Unknown' (ReadOnly)
* **virtualNetworkSubnetId**: string (Required)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpointProperty
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionStateProperty
* **provisioningState**: string (ReadOnly)

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## SecurityAlertPolicyProperties
### Properties
* **disabledAlerts**: string[]
* **emailAccountAdmins**: bool
* **emailAddresses**: string[]
* **retentionDays**: int
* **state**: 'Disabled' | 'Enabled' (Required)
* **storageAccountAccessKey**: string
* **storageEndpoint**: string
