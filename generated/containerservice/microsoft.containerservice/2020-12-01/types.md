# Microsoft.ContainerService @ 2020-12-01

## Resource Microsoft.ContainerService/managedClusters@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedClusterIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedClusterProperties
* **sku**: ManagedClusterSKU
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerService/managedClusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerService/managedClusters/agentPools@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagedClusterAgentPoolProfileProperties
* **type**: 'Microsoft.ContainerService/managedClusters/agentPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceConfigurationProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ContainerService/managedClusters/privateEndpointConnections@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.ContainerService/managedClusters/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ManagedClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: ManagedClusterIdentityUserAssignedIdentities

## ManagedClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties

## Components1Umhcm8SchemasManagedclusteridentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ManagedClusterProperties
### Properties
* **aadProfile**: ManagedClusterAADProfile
* **addonProfiles**: ManagedClusterPropertiesAddonProfiles
* **agentPoolProfiles**: ManagedClusterAgentPoolProfile[]
* **apiServerAccessProfile**: ManagedClusterAPIServerAccessProfile
* **autoScalerProfile**: ManagedClusterPropertiesAutoScalerProfile
* **autoUpgradeProfile**: ManagedClusterAutoUpgradeProfile
* **diskEncryptionSetID**: string
* **dnsPrefix**: string
* **enablePodSecurityPolicy**: bool
* **enableRBAC**: bool
* **fqdn**: string (ReadOnly)
* **identityProfile**: ManagedClusterPropertiesIdentityProfile
* **kubernetesVersion**: string
* **linuxProfile**: ContainerServiceLinuxProfile
* **maxAgentPools**: int (ReadOnly)
* **networkProfile**: ContainerServiceNetworkProfile
* **nodeResourceGroup**: string
* **podIdentityProfile**: ManagedClusterPodIdentityProfile
* **powerState**: PowerState (ReadOnly)
* **privateFQDN**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **servicePrincipalProfile**: ManagedClusterServicePrincipalProfile
* **windowsProfile**: ManagedClusterWindowsProfile

## ManagedClusterAADProfile
### Properties
* **adminGroupObjectIDs**: string[]
* **clientAppID**: string
* **enableAzureRBAC**: bool
* **managed**: bool
* **serverAppID**: string
* **serverAppSecret**: string
* **tenantID**: string

## ManagedClusterPropertiesAddonProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: ManagedClusterAddonProfile

## ManagedClusterAddonProfile
### Properties
* **config**: ManagedClusterAddonProfileConfig
* **enabled**: bool (Required)
* **identity**: ManagedClusterAddonProfileIdentity (ReadOnly)

## ManagedClusterAddonProfileConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAddonProfileIdentity
### Properties
* **clientId**: string
* **objectId**: string
* **resourceId**: string

## ManagedClusterAgentPoolProfile
### Properties
* **availabilityZones**: string[]
* **count**: int
* **enableAutoScaling**: bool
* **enableEncryptionAtHost**: bool
* **enableNodePublicIP**: bool
* **kubeletConfig**: KubeletConfig
* **kubeletDiskType**: 'OS'
* **linuxOSConfig**: LinuxOSConfig
* **maxCount**: int
* **maxPods**: int
* **minCount**: int
* **mode**: 'System' | 'User'
* **name**: string (Required)
* **nodeImageVersion**: string (ReadOnly)
* **nodeLabels**: ManagedClusterAgentPoolProfilePropertiesNodeLabels
* **nodeTaints**: string[]
* **orchestratorVersion**: string
* **osDiskSizeGB**: int
* **osDiskType**: 'Ephemeral' | 'Managed'
* **osType**: 'Linux' | 'Windows'
* **podSubnetID**: string
* **powerState**: PowerState (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroupID**: string
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete'
* **scaleSetPriority**: 'Regular' | 'Spot'
* **spotMaxPrice**: int
* **tags**: ManagedClusterAgentPoolProfilePropertiesTags
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets'
* **upgradeSettings**: AgentPoolUpgradeSettings
* **vmSize**: 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'
* **vnetSubnetID**: string

## KubeletConfig
### Properties
* **allowedUnsafeSysctls**: string[]
* **containerLogMaxFiles**: int
* **containerLogMaxSizeMB**: int
* **cpuCfsQuota**: bool
* **cpuCfsQuotaPeriod**: string
* **cpuManagerPolicy**: string
* **failSwapOn**: bool
* **imageGcHighThreshold**: int
* **imageGcLowThreshold**: int
* **podMaxPids**: int
* **topologyManagerPolicy**: string

## LinuxOSConfig
### Properties
* **swapFileSizeMB**: int
* **sysctls**: SysctlConfig
* **transparentHugePageDefrag**: string
* **transparentHugePageEnabled**: string

## SysctlConfig
### Properties
* **fsAioMaxNr**: int
* **fsFileMax**: int
* **fsInotifyMaxUserWatches**: int
* **fsNrOpen**: int
* **kernelThreadsMax**: int
* **netCoreNetdevMaxBacklog**: int
* **netCoreOptmemMax**: int
* **netCoreRmemDefault**: int
* **netCoreRmemMax**: int
* **netCoreSomaxconn**: int
* **netCoreWmemDefault**: int
* **netCoreWmemMax**: int
* **netIpv4IpLocalPortRange**: string
* **netIpv4NeighDefaultGcThresh1**: int
* **netIpv4NeighDefaultGcThresh2**: int
* **netIpv4NeighDefaultGcThresh3**: int
* **netIpv4TcpFinTimeout**: int
* **netIpv4TcpkeepaliveIntvl**: int
* **netIpv4TcpKeepaliveProbes**: int
* **netIpv4TcpKeepaliveTime**: int
* **netIpv4TcpMaxSynBacklog**: int
* **netIpv4TcpMaxTwBuckets**: int
* **netIpv4TcpTwReuse**: bool
* **netNetfilterNfConntrackBuckets**: int
* **netNetfilterNfConntrackMax**: int
* **vmMaxMapCount**: int
* **vmSwappiness**: int
* **vmVfsCachePressure**: int

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PowerState
### Properties
* **code**: 'Running' | 'Stopped'

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AgentPoolUpgradeSettings
### Properties
* **maxSurge**: string

## ManagedClusterAPIServerAccessProfile
### Properties
* **authorizedIPRanges**: string[]
* **enablePrivateCluster**: bool
* **privateDNSZone**: string

## ManagedClusterPropertiesAutoScalerProfile
### Properties
* **balance-similar-node-groups**: string
* **expander**: 'least-waste' | 'most-pods' | 'priority' | 'random'
* **max-empty-bulk-delete**: string
* **max-graceful-termination-sec**: string
* **max-node-provision-time**: string
* **max-total-unready-percentage**: string
* **new-pod-scale-up-delay**: string
* **ok-total-unready-count**: string
* **scale-down-delay-after-add**: string
* **scale-down-delay-after-delete**: string
* **scale-down-delay-after-failure**: string
* **scale-down-unneeded-time**: string
* **scale-down-unready-time**: string
* **scale-down-utilization-threshold**: string
* **scan-interval**: string
* **skip-nodes-with-local-storage**: string
* **skip-nodes-with-system-pods**: string

## ManagedClusterAutoUpgradeProfile
### Properties
* **upgradeChannel**: 'none' | 'patch' | 'rapid' | 'stable'

## ManagedClusterPropertiesIdentityProfile
### Properties
### Additional Properties
* **Additional Properties Type**: ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties

## ComponentsQit0EtSchemasManagedclusterpropertiesPropertiesIdentityprofileAdditionalproperties
### Properties
* **clientId**: string
* **objectId**: string
* **resourceId**: string

## ContainerServiceLinuxProfile
### Properties
* **adminUsername**: string (Required)
* **ssh**: ContainerServiceSshConfiguration (Required)

## ContainerServiceSshConfiguration
### Properties
* **publicKeys**: ContainerServiceSshPublicKey[] (Required)

## ContainerServiceSshPublicKey
### Properties
* **keyData**: string (Required)

## ContainerServiceNetworkProfile
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **loadBalancerProfile**: ManagedClusterLoadBalancerProfile
* **loadBalancerSku**: 'basic' | 'standard'
* **networkMode**: 'bridge' | 'transparent'
* **networkPlugin**: 'azure' | 'kubenet'
* **networkPolicy**: 'azure' | 'calico'
* **outboundType**: 'loadBalancer' | 'userDefinedRouting'
* **podCidr**: string
* **serviceCidr**: string

## ManagedClusterLoadBalancerProfile
### Properties
* **allocatedOutboundPorts**: int
* **effectiveOutboundIPs**: ResourceReference[]
* **idleTimeoutInMinutes**: int
* **managedOutboundIPs**: ManagedClusterLoadBalancerProfileManagedOutboundIPs
* **outboundIPPrefixes**: ManagedClusterLoadBalancerProfileOutboundIPPrefixes
* **outboundIPs**: ManagedClusterLoadBalancerProfileOutboundIPs

## ResourceReference
### Properties
* **id**: string

## ManagedClusterLoadBalancerProfileManagedOutboundIPs
### Properties
* **count**: int

## ManagedClusterLoadBalancerProfileOutboundIPPrefixes
### Properties
* **publicIPPrefixes**: ResourceReference[]

## ManagedClusterLoadBalancerProfileOutboundIPs
### Properties
* **publicIPs**: ResourceReference[]

## ManagedClusterPodIdentityProfile
### Properties
* **enabled**: bool
* **userAssignedIdentities**: ManagedClusterPodIdentity[]
* **userAssignedIdentityExceptions**: ManagedClusterPodIdentityException[]

## ManagedClusterPodIdentity
### Properties
* **identity**: UserAssignedIdentity (Required)
* **name**: string (Required)
* **namespace**: string (Required)
* **provisioningInfo**: ManagedClusterPodIdentityProvisioningInfo (ReadOnly)
* **provisioningState**: 'Assigned' | 'Deleting' | 'Failed' | 'Updating' (ReadOnly)

## UserAssignedIdentity
### Properties
* **clientId**: string
* **objectId**: string
* **resourceId**: string

## ManagedClusterPodIdentityProvisioningInfo
### Properties
* **error**: CloudError

## CloudError
### Properties
* **error**: CloudErrorBody

## CloudErrorBody
### Properties
* **code**: string
* **details**: CloudErrorBody[]
* **message**: string
* **target**: string

## ManagedClusterPodIdentityException
### Properties
* **name**: string (Required)
* **namespace**: string (Required)
* **podLabels**: ManagedClusterPodIdentityExceptionPodLabels (Required)

## ManagedClusterPodIdentityExceptionPodLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterServicePrincipalProfile
### Properties
* **clientId**: string (Required)
* **secret**: string

## ManagedClusterWindowsProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string (Required)
* **licenseType**: 'None' | 'Windows_Server'

## ManagedClusterSKU
### Properties
* **name**: 'Basic'
* **tier**: 'Free' | 'Paid'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfileProperties
### Properties
* **availabilityZones**: string[]
* **count**: int
* **enableAutoScaling**: bool
* **enableEncryptionAtHost**: bool
* **enableNodePublicIP**: bool
* **kubeletConfig**: KubeletConfig
* **kubeletDiskType**: 'OS'
* **linuxOSConfig**: LinuxOSConfig
* **maxCount**: int
* **maxPods**: int
* **minCount**: int
* **mode**: 'System' | 'User'
* **nodeImageVersion**: string (ReadOnly)
* **nodeLabels**: ManagedClusterAgentPoolProfilePropertiesNodeLabels
* **nodeTaints**: string[]
* **orchestratorVersion**: string
* **osDiskSizeGB**: int
* **osDiskType**: 'Ephemeral' | 'Managed'
* **osType**: 'Linux' | 'Windows'
* **podSubnetID**: string
* **powerState**: PowerState (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **proximityPlacementGroupID**: string
* **scaleSetEvictionPolicy**: 'Deallocate' | 'Delete'
* **scaleSetPriority**: 'Regular' | 'Spot'
* **spotMaxPrice**: int
* **tags**: ManagedClusterAgentPoolProfilePropertiesTags
* **type**: 'AvailabilitySet' | 'VirtualMachineScaleSets'
* **upgradeSettings**: AgentPoolUpgradeSettings
* **vmSize**: 'Standard_A1' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2' | 'Standard_A2_v2' | 'Standard_A2m_v2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A4_v2' | 'Standard_A4m_v2' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A8_v2' | 'Standard_A8m_v2' | 'Standard_A9' | 'Standard_B2ms' | 'Standard_B2s' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D11' | 'Standard_D11_v2' | 'Standard_D11_v2_Promo' | 'Standard_D12' | 'Standard_D12_v2' | 'Standard_D12_v2_Promo' | 'Standard_D13' | 'Standard_D13_v2' | 'Standard_D13_v2_Promo' | 'Standard_D14' | 'Standard_D14_v2' | 'Standard_D14_v2_Promo' | 'Standard_D15_v2' | 'Standard_D16_v3' | 'Standard_D16s_v3' | 'Standard_D1_v2' | 'Standard_D2' | 'Standard_D2_v2' | 'Standard_D2_v2_Promo' | 'Standard_D2_v3' | 'Standard_D2s_v3' | 'Standard_D3' | 'Standard_D32_v3' | 'Standard_D32s_v3' | 'Standard_D3_v2' | 'Standard_D3_v2_Promo' | 'Standard_D4' | 'Standard_D4_v2' | 'Standard_D4_v2_Promo' | 'Standard_D4_v3' | 'Standard_D4s_v3' | 'Standard_D5_v2' | 'Standard_D5_v2_Promo' | 'Standard_D64_v3' | 'Standard_D64s_v3' | 'Standard_D8_v3' | 'Standard_D8s_v3' | 'Standard_DS1' | 'Standard_DS11' | 'Standard_DS11_v2' | 'Standard_DS11_v2_Promo' | 'Standard_DS12' | 'Standard_DS12_v2' | 'Standard_DS12_v2_Promo' | 'Standard_DS13' | 'Standard_DS13-2_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13_v2' | 'Standard_DS13_v2_Promo' | 'Standard_DS14' | 'Standard_DS14-4_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14_v2' | 'Standard_DS14_v2_Promo' | 'Standard_DS15_v2' | 'Standard_DS1_v2' | 'Standard_DS2' | 'Standard_DS2_v2' | 'Standard_DS2_v2_Promo' | 'Standard_DS3' | 'Standard_DS3_v2' | 'Standard_DS3_v2_Promo' | 'Standard_DS4' | 'Standard_DS4_v2' | 'Standard_DS4_v2_Promo' | 'Standard_DS5_v2' | 'Standard_DS5_v2_Promo' | 'Standard_E16_v3' | 'Standard_E16s_v3' | 'Standard_E2_v3' | 'Standard_E2s_v3' | 'Standard_E32-16s_v3' | 'Standard_E32-8s_v3' | 'Standard_E32_v3' | 'Standard_E32s_v3' | 'Standard_E4_v3' | 'Standard_E4s_v3' | 'Standard_E64-16s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64_v3' | 'Standard_E64s_v3' | 'Standard_E8_v3' | 'Standard_E8s_v3' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F16s_v2' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F2s_v2' | 'Standard_F32s_v2' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F4s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_F8' | 'Standard_F8s' | 'Standard_F8s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS4-4' | 'Standard_GS4-8' | 'Standard_GS5' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H16' | 'Standard_H16m' | 'Standard_H16mr' | 'Standard_H16r' | 'Standard_H8' | 'Standard_H8m' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_M128-32ms' | 'Standard_M128-64ms' | 'Standard_M128ms' | 'Standard_M128s' | 'Standard_M64-16ms' | 'Standard_M64-32ms' | 'Standard_M64ms' | 'Standard_M64s' | 'Standard_NC12' | 'Standard_NC12s_v2' | 'Standard_NC12s_v3' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC24rs_v2' | 'Standard_NC24rs_v3' | 'Standard_NC24s_v2' | 'Standard_NC24s_v3' | 'Standard_NC6' | 'Standard_NC6s_v2' | 'Standard_NC6s_v3' | 'Standard_ND12s' | 'Standard_ND24rs' | 'Standard_ND24s' | 'Standard_ND6s' | 'Standard_NV12' | 'Standard_NV24' | 'Standard_NV6'
* **vnetSubnetID**: string

## ManagedClusterAgentPoolProfilePropertiesNodeLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedClusterAgentPoolProfilePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationProperties
### Properties
* **notAllowedTime**: TimeSpan[]
* **timeInWeek**: TimeInWeek[]

## TimeSpan
### Properties
* **end**: string
* **start**: string

## TimeInWeek
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **hourSlots**: int[]

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string

## PrivateLinkServiceConnectionState
### Properties
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected'
