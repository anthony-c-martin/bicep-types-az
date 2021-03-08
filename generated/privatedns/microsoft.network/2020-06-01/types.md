# Microsoft.Network @ 2020-06-01

## Resource Microsoft.Network/privateDnsZones@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateZoneProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/privateDnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkLinkProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/privateDnsZones/virtualNetworkLinks' (ReadOnly, DeployTimeConstant)

## PrivateZoneProperties
### Properties
* **internalId**: string (ReadOnly)
* **maxNumberOfRecordSets**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinks**: int (ReadOnly)
* **maxNumberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **numberOfRecordSets**: int (ReadOnly)
* **numberOfVirtualNetworkLinks**: int (ReadOnly)
* **numberOfVirtualNetworkLinksWithRegistration**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VirtualNetworkLinkProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **registrationEnabled**: bool
* **virtualNetwork**: SubResource
* **virtualNetworkLinkState**: 'Completed' | 'InProgress' (ReadOnly)

## SubResource
### Properties
* **id**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

