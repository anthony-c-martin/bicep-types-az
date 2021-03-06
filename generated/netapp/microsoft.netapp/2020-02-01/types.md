# Microsoft.NetApp @ 2020-02-01

## Resource Microsoft.NetApp/netAppAccounts@2020-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: accountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools@2020-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: poolProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: volumeProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-02-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: snapshotProperties
* **type**: 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' (ReadOnly, DeployTimeConstant)

## accountProperties
### Properties
* **activeDirectories**: activeDirectory[]
* **provisioningState**: string (ReadOnly)

## activeDirectory
### Properties
* **activeDirectoryId**: string
* **backupOperators**: string[]
* **dns**: string
* **domain**: string
* **organizationalUnit**: string
* **password**: string
* **site**: string
* **smbServerName**: string
* **status**: string
* **username**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## poolProperties
### Properties
* **poolId**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra' (Required)
* **size**: int (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## volumeProperties
### Properties
* **baremetalTenantId**: string (ReadOnly)
* **creationToken**: string (Required)
* **dataProtection**: schemas:21_dataProtection
* **exportPolicy**: schemas:21_exportPolicy
* **fileSystemId**: string (ReadOnly)
* **isRestoring**: bool
* **mountTargets**: mountTargetProperties[]
* **protocolTypes**: string[]
* **provisioningState**: string (ReadOnly)
* **serviceLevel**: 'Premium' | 'Standard' | 'Ultra'
* **snapshotDirectoryVisible**: bool
* **snapshotId**: string
* **subnetId**: string (Required)
* **usageThreshold**: int (Required)
* **volumeType**: string

## schemas:21_dataProtection
### Properties
* **replication**: replicationObject
* **snapshot**: volumeSnapshotProperties

## replicationObject
### Properties
* **endpointType**: 'dst' | 'src'
* **remoteVolumeRegion**: string
* **remoteVolumeResourceId**: string (Required)
* **replicationId**: string
* **replicationSchedule**: '_10minutely' | 'daily' | 'hourly' (Required)

## volumeSnapshotProperties
### Properties
* **snapshotPolicyId**: string

## schemas:21_exportPolicy
### Properties
* **rules**: exportPolicyRule[]

## exportPolicyRule
### Properties
* **allowedClients**: string
* **cifs**: bool
* **nfsv3**: bool
* **nfsv41**: bool
* **ruleIndex**: int
* **unixReadOnly**: bool
* **unixReadWrite**: bool

## mountTargetProperties
### Properties
* **endIp**: string
* **fileSystemId**: string (Required)
* **gateway**: string
* **ipAddress**: string (ReadOnly)
* **mountTargetId**: string (ReadOnly)
* **netmask**: string
* **smbServerFqdn**: string
* **startIp**: string
* **subnet**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## snapshotProperties
### Properties
* **created**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **snapshotId**: string (ReadOnly)

