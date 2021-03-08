# Microsoft.Network @ 2016-04-01

## Resource Microsoft.Network/dnsZones@2016-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-04-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ZoneProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Network/dnsZones' (ReadOnly, DeployTimeConstant)

## ZoneProperties
### Properties
* **maxNumberOfRecordSets**: int
* **maxNumberOfRecordsPerRecordSet**: int (ReadOnly)
* **nameServers**: string[] (ReadOnly)
* **numberOfRecordSets**: int
* **zoneType**: 'Private' | 'Public'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

