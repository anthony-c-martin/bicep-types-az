# Microsoft.MachineLearningServices @ 2020-08-01

## Resource Microsoft.MachineLearningServices/workspaces@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/connections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceConnectionProps
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,Schemas26UserAssignedIdentitiesValue>

## Dictionary<string,Schemas26UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: schemas:26_userAssignedIdentitiesValue

## schemas:26_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool
* **applicationInsights**: string
* **containerRegistry**: string
* **creationTime**: string (ReadOnly)
* **description**: string
* **discoveryUrl**: string
* **encryption**: EncryptionProperty
* **friendlyName**: string
* **hbiWorkspace**: bool
* **imageBuildCompute**: string
* **keyVault**: string
* **notebookInfo**: NotebookResourceInfo (ReadOnly)
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **privateLinkCount**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceProvisionedResourceGroup**: string (ReadOnly)
* **sharedPrivateLinkResources**: SharedPrivateLinkResource[]
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## EncryptionProperty
### Properties
* **keyVaultProperties**: KeyVaultProperties (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string (Required)
* **keyVaultArmId**: string (Required)

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: NotebookPreparationError
* **resourceId**: string

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## SharedPrivateLinkResource
### Properties
* **name**: string
* **properties**: SharedPrivateLinkResourceProperty

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **requestMessage**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## Sku
### Properties
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType
### Base Properties
* **computeLocation**: string
* **createdOn**: string (ReadOnly)
* **description**: string
* **isAttachedCompute**: bool (ReadOnly)
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: MachineLearningServiceError[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:35_properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: schemas:36_properties

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: schemas:37_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue


## MachineLearningServiceError
### Properties
* **error**: ErrorResponse (ReadOnly)

## ErrorResponse
### Properties
* **code**: string (ReadOnly)
* **details**: ErrorDetail[] (ReadOnly)
* **message**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:35_properties

## schemas:35_properties
### Properties
* **agentCount**: int
* **agentVmSize**: string
* **aksNetworkingConfiguration**: AksNetworkingConfiguration
* **clusterFqdn**: string
* **sslConfiguration**: SslConfiguration
* **systemServices**: SystemService[] (ReadOnly)

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **serviceCidr**: string
* **subnetId**: string

## SslConfiguration
### Properties
* **cert**: string
* **cname**: string
* **key**: string
* **status**: 'Auto' | 'Disabled' | 'Enabled'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: string (ReadOnly)
* **version**: string (ReadOnly)

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: schemas:36_properties

## schemas:36_properties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **nodeStateCounts**: NodeStateCounts (ReadOnly)
* **osType**: 'Linux' | 'Windows'
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: UserAccountCredentials
* **vmPriority**: 'Dedicated' | 'LowPriority'
* **vmSize**: string

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preemptedNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required)
* **minNodeCount**: int
* **nodeIdleTimeBeforeScaleDown**: string

## ResourceId
### Properties
* **id**: string (Required)

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## ComputeInstance
### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: schemas:37_properties

## schemas:37_properties
### Properties
* **applications**: ComputeInstanceApplication[] (ReadOnly)
* **applicationSharingPolicy**: 'Personal' | 'Shared'
* **computeInstanceAuthorizationType**: 'personal'
* **connectivityEndpoints**: ComputeInstanceConnectivityEndpoints (ReadOnly)
* **createdBy**: ComputeInstanceCreatedBy (ReadOnly)
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **lastOperation**: ComputeInstanceLastOperation (ReadOnly)
* **personalComputeInstanceSettings**: PersonalComputeInstanceSettings
* **sshSettings**: ComputeInstanceSshSettings
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly)
* **subnet**: ResourceId
* **vmSize**: string

## ComputeInstanceApplication
### Properties
* **displayName**: string
* **endpointUri**: string

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly)
* **publicIpAddress**: string (ReadOnly)

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly)
* **userName**: string (ReadOnly)
* **userOrgId**: string (ReadOnly)

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop'
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded'
* **operationTime**: string

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: AssignedUser

## AssignedUser
### Properties
* **objectId**: string (Required)
* **tenantId**: string (Required)

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string
* **adminUserName**: string (ReadOnly)
* **sshPort**: int (ReadOnly)
* **sshPublicAccess**: 'Disabled' | 'Enabled'

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:26_userAssignedIdentitiesValue

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionProps
### Properties
* **authType**: string
* **category**: string
* **target**: string
* **value**: string

