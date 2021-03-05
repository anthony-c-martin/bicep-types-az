# Microsoft.HealthcareApis @ 2019-09-16

## Resource Microsoft.HealthcareApis/services@2019-09-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-16' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **kind**: 'fhir' | 'fhir-R4' | 'fhir-Stu3' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ServicesProperties
### Properties
* **accessPolicies**: ServiceAccessPolicyEntry[]
* **authenticationConfiguration**: ServiceAuthenticationConfigurationInfo
* **corsConfiguration**: ServiceCorsConfigurationInfo
* **cosmosDbConfiguration**: ServiceCosmosDbConfigurationInfo
* **exportConfiguration**: ServiceExportConfigurationInfo
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Succeeded' | 'Updating' | 'Verifying' (ReadOnly)

## ServiceAccessPolicyEntry
### Properties
* **objectId**: string (Required)

## ServiceAuthenticationConfigurationInfo
### Properties
* **audience**: string
* **authority**: string
* **smartProxyEnabled**: bool

## ServiceCorsConfigurationInfo
### Properties
* **allowCredentials**: bool
* **headers**: string[]
* **maxAge**: int
* **methods**: string[]
* **origins**: string[]

## ServiceCosmosDbConfigurationInfo
### Properties
* **offerThroughput**: int

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string
