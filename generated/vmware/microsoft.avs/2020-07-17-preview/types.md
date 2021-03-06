# Microsoft.AVS @ 2020-07-17-preview

## Resource Microsoft.AVS/privateClouds@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateCloudProperties
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AVS/privateClouds' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/addons@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AddonProperties
* **type**: 'Microsoft.AVS/privateClouds/addons' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/authorizations@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExpressRouteAuthorizationProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/authorizations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/clusters@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: Sku (Required)
* **type**: 'Microsoft.AVS/privateClouds/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/globalReachConnections@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GlobalReachConnectionProperties
* **type**: 'Microsoft.AVS/privateClouds/globalReachConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HcxEnterpriseSiteProperties (ReadOnly)
* **type**: 'Microsoft.AVS/privateClouds/hcxEnterpriseSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDhcpEntity
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDnsServiceProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkDnsZoneProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkPortMirroringProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/segments@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkSegmentProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/segments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2020-07-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkloadNetworkVMGroupProperties
* **type**: 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups' (ReadOnly, DeployTimeConstant)

## PrivateCloudProperties
### Properties
* **circuit**: Circuit
* **endpoints**: Endpoints (ReadOnly)
* **identitySources**: IdentitySource[]
* **internet**: 'Disabled' | 'Enabled'
* **managementCluster**: ManagementCluster
* **managementNetwork**: string (ReadOnly)
* **networkBlock**: string (Required)
* **nsxtCertificateThumbprint**: string (ReadOnly)
* **nsxtPassword**: string
* **provisioningNetwork**: string (ReadOnly)
* **provisioningState**: 'Building' | 'Cancelled' | 'Deleting' | 'Failed' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **vcenterCertificateThumbprint**: string (ReadOnly)
* **vcenterPassword**: string
* **vmotionNetwork**: string (ReadOnly)

## Circuit
### Properties
* **expressRouteID**: string (ReadOnly)
* **expressRoutePrivatePeeringID**: string (ReadOnly)
* **primarySubnet**: string (ReadOnly)
* **secondarySubnet**: string (ReadOnly)

## Endpoints
### Properties
* **hcxCloudManager**: string (ReadOnly)
* **nsxtManager**: string (ReadOnly)
* **vcsa**: string (ReadOnly)

## IdentitySource
### Properties
* **alias**: string
* **baseGroupDN**: string
* **baseUserDN**: string
* **domain**: string
* **name**: string
* **password**: string
* **primaryServer**: string
* **secondaryServer**: string
* **ssl**: 'Disabled' | 'Enabled'
* **username**: string

## ManagementCluster
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Sku
### Properties
* **name**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AddonProperties
### Properties
* **addonType**: 'SRM' | 'VR'
* **licenseKey**: string
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ExpressRouteAuthorizationProperties
### Properties
* **expressRouteAuthorizationId**: string (ReadOnly)
* **expressRouteAuthorizationKey**: string (ReadOnly)
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ClusterProperties
### Properties
* **clusterId**: int (ReadOnly)
* **clusterSize**: int
* **hosts**: string[] (ReadOnly)
* **provisioningState**: 'Cancelled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## GlobalReachConnectionProperties
### Properties
* **addressPrefix**: string (ReadOnly)
* **authorizationKey**: string
* **circuitConnectionStatus**: 'Connected' | 'Connecting' | 'Disconnected' (ReadOnly)
* **peerExpressRouteCircuit**: string
* **provisioningState**: 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## HcxEnterpriseSiteProperties
### Properties
* **activationKey**: string (ReadOnly)
* **status**: 'Available' | 'Consumed' | 'Deactivated' | 'Deleted' (ReadOnly)

## WorkloadNetworkDhcpEntity
* **Discriminator**: dhcpType
### Base Properties
* **displayName**: string
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **segments**: string[] (ReadOnly)
### RELAY
#### Properties
* **dhcpType**: 'RELAY' (Required)
* **serverAddresses**: string[]

### SERVER
#### Properties
* **dhcpType**: 'SERVER' (Required)
* **leaseTime**: int
* **serverAddress**: string


## RELAY
### Properties
* **dhcpType**: 'RELAY' (Required)
* **serverAddresses**: string[]

## SERVER
### Properties
* **dhcpType**: 'SERVER' (Required)
* **leaseTime**: int
* **serverAddress**: string

## WorkloadNetworkDnsServiceProperties
### Properties
* **defaultDnsZone**: string
* **displayName**: string
* **dnsServiceIp**: string
* **fqdnZones**: string[]
* **logLevel**: 'DEBUG' | 'ERROR' | 'FATAL' | 'INFO' | 'WARNING'
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'FAILURE' | 'SUCCESS' (ReadOnly)

## WorkloadNetworkDnsZoneProperties
### Properties
* **displayName**: string
* **dnsServerIps**: string[]
* **dnsServices**: int
* **domain**: string[]
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **sourceIp**: string

## WorkloadNetworkPortMirroringProperties
### Properties
* **destination**: string
* **direction**: 'INGRESS, EGRESS, BIDIRECTIONAL'
* **displayName**: string
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **source**: string
* **status**: 'SUCCESS, FAILURE' (ReadOnly)

## WorkloadNetworkSegmentProperties
### Properties
* **connectedGateway**: string
* **displayName**: string
* **portVif**: WorkloadNetworkSegmentPortVif[] (ReadOnly)
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'SUCCESS, FAILURE' (ReadOnly)
* **subnet**: WorkloadNetworkSegmentSubnet

## WorkloadNetworkSegmentPortVif
### Properties
* **portName**: string

## WorkloadNetworkSegmentSubnet
### Properties
* **dhcpRanges**: string[]
* **gatewayAddress**: string

## WorkloadNetworkVMGroupProperties
### Properties
* **displayName**: string
* **members**: string[]
* **provisioningState**: 'Building' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **revision**: int
* **status**: 'SUCCESS, FAILURE' (ReadOnly)

