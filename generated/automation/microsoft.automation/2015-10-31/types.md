# Microsoft.Automation @ 2015-10-31

## Resource Microsoft.Automation/automationAccounts@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutomationAccountCreateOrUpdateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automation/automationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/certificates@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscCompilationJobCreateProperties (Required)
* **tags**: Dictionary<string,String> (WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/configurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DscConfigurationCreateOrUpdateProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automation/automationAccounts/configurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connections@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/connectionTypes@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectionTypeCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/connectionTypes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/credentials@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CredentialCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/credentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobs@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/jobSchedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: JobScheduleCreateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/jobSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/modules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ModuleCreateOrUpdateProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automation/automationAccounts/modules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **lastModifiedTime**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **source**: ContentSource (Required, WriteOnly)
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/runbooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: RunbookCreateOrUpdateProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automation/automationAccounts/runbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/schedules@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ScheduleCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/schedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/variables@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VariableCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/variables' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/watchers@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WatcherProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automation/automationAccounts/watchers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automation/automationAccounts/webhooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WebhookCreateOrUpdateProperties (Required)
* **type**: 'Microsoft.Automation/automationAccounts/webhooks' (ReadOnly, DeployTimeConstant)

## AutomationAccountCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **sku**: Sku
* **state**: 'Ok' | 'Suspended' | 'Unavailable' (ReadOnly)

## Sku
### Properties
* **capacity**: int
* **family**: string
* **name**: 'Basic' | 'Free' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateCreateOrUpdateProperties
### Properties
* **base64Value**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly)
* **description**: string
* **expiryTime**: string (ReadOnly)
* **isExportable**: bool
* **lastModifiedTime**: string (ReadOnly)
* **thumbprint**: string

## DscCompilationJobCreateProperties
### Properties
* **configuration**: DscConfigurationAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **incrementNodeConfigurationBuild**: bool (WriteOnly)
* **jobId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: Dictionary<string,String>
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runOn**: string (ReadOnly)
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## DscConfigurationAssociationProperty
### Properties
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **jobCount**: int (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **logProgress**: bool (WriteOnly)
* **logVerbose**: bool
* **nodeConfigurationCount**: int (ReadOnly)
* **parameters**: Dictionary<string,DscConfigurationParameter>
* **provisioningState**: 'Succeeded' (ReadOnly)
* **source**: ContentSource (Required)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## Dictionary<string,DscConfigurationParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: DscConfigurationParameter

## DscConfigurationParameter
### Properties
* **defaultValue**: string
* **isMandatory**: bool
* **position**: int
* **type**: string

## ContentSource
### Properties
* **hash**: ContentHash
* **type**: 'embeddedContent' | 'uri'
* **value**: string
* **version**: string

## ContentHash
### Properties
* **algorithm**: string (Required)
* **value**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionCreateOrUpdateProperties
### Properties
* **connectionType**: ConnectionTypeAssociationProperty (Required)
* **creationTime**: string (ReadOnly)
* **description**: string
* **fieldDefinitionValues**: Dictionary<string,String>
* **lastModifiedTime**: string (ReadOnly)

## ConnectionTypeAssociationProperty
### Properties
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConnectionTypeCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **fieldDefinitions**: Dictionary<string,FieldDefinition> (Required)
* **isGlobal**: bool
* **lastModifiedTime**: string (ReadOnly)

## Dictionary<string,FieldDefinition>
### Properties
### Additional Properties
* **Additional Properties Type**: FieldDefinition

## FieldDefinition
### Properties
* **isEncrypted**: bool
* **isOptional**: bool
* **type**: string (Required)

## CredentialCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **lastModifiedTime**: string (ReadOnly)
* **password**: string (Required, WriteOnly)
* **userName**: string (Required)

## JobCreateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **endTime**: string (ReadOnly)
* **exception**: string (ReadOnly)
* **jobId**: string (ReadOnly)
* **jobScheduleId**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **lastStatusModifiedTime**: string (ReadOnly)
* **parameters**: Dictionary<string,String>
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' (ReadOnly)
* **runbook**: RunbookAssociationProperty (Required)
* **runOn**: string
* **schedule**: ScheduleAssociationProperty (ReadOnly)
* **startedBy**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string

## ScheduleAssociationProperty
### Properties
* **name**: string (ReadOnly)

## JobScheduleCreateProperties
### Properties
* **jobScheduleId**: string (ReadOnly)
* **parameters**: Dictionary<string,String>
* **runbook**: RunbookAssociationProperty (Required)
* **runOn**: string
* **schedule**: ScheduleAssociationProperty (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModuleCreateOrUpdateProperties
### Properties
* **activityCount**: int (ReadOnly)
* **contentLink**: ContentLink (Required)
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **error**: ModuleErrorInfo (ReadOnly)
* **isComposite**: bool (ReadOnly)
* **isGlobal**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **provisioningState**: 'ActivitiesStored' | 'Cancelled' | 'ConnectionTypeImported' | 'ContentDownloaded' | 'ContentRetrieved' | 'ContentStored' | 'ContentValidated' | 'Created' | 'Creating' | 'Failed' | 'ModuleDataStored' | 'ModuleImportRunbookComplete' | 'RunningImportModuleRunbook' | 'StartingImportModuleRunbook' | 'Succeeded' | 'Updating' (ReadOnly)
* **sizeInBytes**: int (ReadOnly)
* **version**: string (ReadOnly)

## ContentLink
### Properties
* **contentHash**: ContentHash
* **uri**: string
* **version**: string

## ModuleErrorInfo
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **draft**: RunbookDraft
* **jobCount**: int (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **logActivityTrace**: int
* **logProgress**: bool
* **logVerbose**: bool
* **outputTypes**: string[] (ReadOnly)
* **parameters**: Dictionary<string,RunbookParameter> (ReadOnly)
* **provisioningState**: 'Succeeded' (ReadOnly)
* **publishContentLink**: ContentLink
* **runbookType**: 'Graph' | 'GraphPowerShell' | 'GraphPowerShellWorkflow' | 'PowerShell' | 'PowerShellWorkflow' | 'Script' (Required)
* **state**: 'Edit' | 'New' | 'Published' (ReadOnly)

## RunbookDraft
### Properties
* **creationTime**: string
* **draftContentLink**: ContentLink
* **inEdit**: bool
* **lastModifiedTime**: string
* **outputTypes**: string[]
* **parameters**: Dictionary<string,RunbookParameter>

## Dictionary<string,RunbookParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: RunbookParameter

## RunbookParameter
### Properties
* **defaultValue**: string
* **isMandatory**: bool
* **position**: int
* **type**: string

## Dictionary<string,RunbookParameter>
### Properties
### Additional Properties
* **Additional Properties Type**: RunbookParameter

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScheduleCreateOrUpdateProperties
### Properties
* **advancedSchedule**: AdvancedSchedule
* **creationTime**: string (ReadOnly)
* **description**: string
* **expiryTime**: string
* **expiryTimeOffsetMinutes**: int (ReadOnly)
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'OneTime' | 'Week' (Required)
* **interval**: any
* **isEnabled**: bool (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **nextRun**: string (ReadOnly)
* **nextRunOffsetMinutes**: int (ReadOnly)
* **startTime**: string (Required)
* **startTimeOffsetMinutes**: int (ReadOnly)
* **timeZone**: string

## AdvancedSchedule
### Properties
* **monthDays**: int[]
* **monthlyOccurrences**: AdvancedScheduleMonthlyOccurrence[]
* **weekDays**: string[]

## AdvancedScheduleMonthlyOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## VariableCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **isEncrypted**: bool
* **lastModifiedTime**: string (ReadOnly)
* **value**: string

## WatcherProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string
* **executionFrequencyInSeconds**: int
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **scriptName**: string
* **scriptParameters**: Dictionary<string,String>
* **scriptRunOn**: string
* **status**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly)
* **description**: string (ReadOnly)
* **expiryTime**: string
* **isEnabled**: bool
* **lastInvokedTime**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedTime**: string (ReadOnly)
* **parameters**: Dictionary<string,String>
* **runbook**: RunbookAssociationProperty
* **runOn**: string
* **uri**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

