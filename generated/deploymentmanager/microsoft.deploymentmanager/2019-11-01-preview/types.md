# Microsoft.DeploymentManager @ 2019-11-01-preview

## Resource Microsoft.DeploymentManager/artifactSources@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:5_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/artifactSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/rollouts@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RolloutRequestProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/rollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:13_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/serviceTopologies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:15_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:18_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DeploymentManager/steps@2019-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StepProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DeploymentManager/steps' (ReadOnly, DeployTimeConstant)

## schemas:5_properties
### Properties
* **artifactRoot**: string
* **authentication**: Authentication (Required)
* **sourceType**: string (Required)

## Authentication
* **Discriminator**: type
### Base Properties
### Sas
#### Properties
* **properties**: SasProperties
* **type**: 'Sas' (Required)


## Sas
### Properties
* **properties**: SasProperties
* **type**: 'Sas' (Required)

## SasProperties
### Properties
* **sasUri**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Identity
### Properties
* **identityIds**: string[] (Required)
* **type**: string (Required)

## RolloutRequestProperties
### Properties
* **artifactSourceId**: string
* **buildVersion**: string (Required)
* **operationInfo**: RolloutOperationInfo (ReadOnly)
* **services**: Service[] (ReadOnly)
* **status**: string (ReadOnly)
* **stepGroups**: StepGroup[] (Required)
* **targetServiceTopologyId**: string (Required)
* **totalRetryAttempts**: int (ReadOnly)

## RolloutOperationInfo
### Properties
* **endTime**: string (ReadOnly)
* **error**: CloudErrorBody (ReadOnly)
* **retryAttempt**: int (ReadOnly)
* **skipSucceededOnRetry**: bool (ReadOnly)
* **startTime**: string (ReadOnly)

## CloudErrorBody
### Properties
* **code**: string (ReadOnly)
* **details**: CloudErrorBody[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## Service
### Properties
* **name**: string (ReadOnly)
* **serviceUnits**: ServiceUnit[] (ReadOnly)
* **targetLocation**: string (ReadOnly)
* **targetSubscriptionId**: string (ReadOnly)

## ServiceUnit
### Properties
* **artifacts**: ServiceUnitArtifacts (ReadOnly)
* **deploymentMode**: 'Complete' | 'Incremental' (ReadOnly)
* **name**: string (ReadOnly)
* **steps**: RolloutStep[] (ReadOnly)
* **targetResourceGroup**: string (ReadOnly)

## ServiceUnitArtifacts
### Properties
* **parametersArtifactSourceRelativePath**: string
* **parametersUri**: string
* **templateArtifactSourceRelativePath**: string
* **templateUri**: string

## RolloutStep
### Properties
* **messages**: Message[] (ReadOnly)
* **name**: string (ReadOnly)
* **operationInfo**: StepOperationInfo (ReadOnly)
* **resourceOperations**: ResourceOperation[] (ReadOnly)
* **status**: string (ReadOnly)
* **stepGroup**: string (ReadOnly)

## Message
### Properties
* **message**: string (ReadOnly)
* **timeStamp**: string (ReadOnly)

## StepOperationInfo
### Properties
* **correlationId**: string (ReadOnly)
* **deploymentName**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **error**: CloudErrorBody (ReadOnly)
* **lastUpdatedTime**: string (ReadOnly)
* **startTime**: string (ReadOnly)

## ResourceOperation
### Properties
* **operationId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **resourceName**: string (ReadOnly)
* **resourceType**: string (ReadOnly)
* **statusCode**: string (ReadOnly)
* **statusMessage**: string (ReadOnly)

## StepGroup
### Properties
* **dependsOnStepGroups**: string[]
* **deploymentTargetId**: string (Required)
* **name**: string (Required)
* **postDeploymentSteps**: PrePostStep[]
* **preDeploymentSteps**: PrePostStep[]

## PrePostStep
### Properties
* **stepId**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:13_properties
### Properties
* **artifactSourceId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:15_properties
### Properties
* **targetLocation**: string (Required)
* **targetSubscriptionId**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:18_properties
### Properties
* **artifacts**: ServiceUnitArtifacts
* **deploymentMode**: 'Complete' | 'Incremental' (Required)
* **targetResourceGroup**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StepProperties
* **Discriminator**: stepType
### Base Properties
### HealthCheck
#### Properties
* **attributes**: HealthCheckStepAttributes (Required)
* **stepType**: 'HealthCheck' (Required)

### Wait
#### Properties
* **attributes**: WaitStepAttributes (Required)
* **stepType**: 'Wait' (Required)


## HealthCheck
### Properties
* **attributes**: HealthCheckStepAttributes (Required)
* **stepType**: 'HealthCheck' (Required)

## HealthCheckStepAttributes
* **Discriminator**: type
### Base Properties
* **healthyStateDuration**: string (Required)
* **maxElasticDuration**: string
* **waitDuration**: string
### REST
#### Properties
* **properties**: RestParameters
* **type**: 'REST' (Required)


## REST
### Properties
* **properties**: RestParameters
* **type**: 'REST' (Required)

## RestParameters
### Properties
* **healthChecks**: RestHealthCheck[] (Required)

## RestHealthCheck
### Properties
* **name**: string (Required)
* **request**: RestRequest (Required)
* **response**: RestResponse

## RestRequest
### Properties
* **authentication**: RestRequestAuthentication (Required)
* **method**: 'GET' | 'POST' (Required)
* **uri**: string (Required)

## RestRequestAuthentication
* **Discriminator**: type
### Base Properties
### ApiKey
#### Properties
* **in**: 'Header' | 'Query' (Required)
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

### RolloutIdentity
#### Properties
* **type**: 'RolloutIdentity' (Required)


## ApiKey
### Properties
* **in**: 'Header' | 'Query' (Required)
* **name**: string (Required)
* **type**: 'ApiKey' (Required)
* **value**: string (Required)

## RolloutIdentity
### Properties
* **type**: 'RolloutIdentity' (Required)

## RestResponse
### Properties
* **regex**: schemas:42_regex
* **successStatusCodes**: string[]

## schemas:42_regex
### Properties
* **matches**: string[]
* **matchQuantifier**: 'All' | 'Any'

## Wait
### Properties
* **attributes**: WaitStepAttributes (Required)
* **stepType**: 'Wait' (Required)

## WaitStepAttributes
### Properties
* **duration**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

