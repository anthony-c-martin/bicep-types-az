# Microsoft.Solutions @ 2016-09-01-preview

## Resource Microsoft.Solutions/applianceDefinitions@2016-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplianceDefinitionProperties (Required)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/applianceDefinitions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Solutions/appliances@2016-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **kind**: string
* **location**: string
* **managedBy**: string
* **name**: string (Required, DeployTimeConstant)
* **plan**: Plan
* **properties**: ApplianceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Solutions/appliances' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## ApplianceDefinitionProperties
### Properties
* **artifacts**: ApplianceArtifact[]
* **authorizations**: ApplianceProviderAuthorization[] (Required)
* **description**: string
* **displayName**: string
* **lockLevel**: 'CanNotDelete' | 'None' | 'ReadOnly' (Required)
* **packageFileUri**: string (Required)

## ApplianceArtifact
### Properties
* **name**: string
* **type**: 'Custom' | 'Template'
* **uri**: string

## ApplianceProviderAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **model**: string
* **name**: string (Required)
* **size**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Plan
### Properties
* **name**: string (Required)
* **product**: string (Required)
* **promotionCode**: string
* **publisher**: string (Required)
* **version**: string (Required)

## ApplianceProperties
### Properties
* **applianceDefinitionId**: string
* **managedResourceGroupId**: string (Required)
* **outputs**: any (ReadOnly)
* **parameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' (ReadOnly)
* **uiDefinitionUri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

