# Microsoft.RecoveryServices @ 2017-07-01

## Resource Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2017-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-07-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProtectionIntent
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent' (ReadOnly, DeployTimeConstant)

## ProtectionIntent
* **Discriminator**: protectionIntentItemType
### Base Properties
* **backupManagementType**: 'AzureBackupServer' | 'AzureIaasVM' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup' | 'DPM' | 'Invalid' | 'MAB'
* **itemId**: string
* **policyId**: string
* **protectionState**: 'Invalid' | 'NotProtected' | 'Protected' | 'Protecting' | 'ProtectionFailed'
* **sourceResourceId**: string
### AzureResourceItem
#### Properties
* **friendlyName**: string
* **protectionIntentItemType**: 'AzureResourceItem' (Required)

### RecoveryServiceVaultItem
#### Properties
* **protectionIntentItemType**: 'RecoveryServiceVaultItem' (Required)


## AzureResourceItem
### Properties
* **friendlyName**: string
* **protectionIntentItemType**: 'AzureResourceItem' (Required)

## RecoveryServiceVaultItem
### Properties
* **protectionIntentItemType**: 'RecoveryServiceVaultItem' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

