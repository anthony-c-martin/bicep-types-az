# Microsoft.CostManagement @ 2018-08-01-preview

## Resource Microsoft.CostManagement/connectors@2018-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CostManagement/connectors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.CostManagement/reports@2018-08-01-preview
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReportProperties
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.CostManagement/reports' (ReadOnly, DeployTimeConstant)

## ConnectorProperties
### Properties
* **collection**: ConnectorCollectionInfo (ReadOnly)
* **createdOn**: string (ReadOnly)
* **credentialsKey**: string
* **credentialsSecret**: string
* **displayName**: string
* **modifiedOn**: string (ReadOnly)
* **providerAccountId**: string (ReadOnly)
* **reportId**: string
* **status**: 'active' | 'error' | 'suspended'

## ConnectorCollectionInfo
### Properties
* **error**: ConnectorCollectionErrorInfo
* **lastRun**: string (ReadOnly)
* **lastUpdated**: string (ReadOnly)
* **sourceLastUpdated**: string (ReadOnly)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorStartTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ReportProperties
### Properties
* **definition**: ReportDefinition (Required)
* **deliveryInfo**: ReportDeliveryInfo (Required)
* **format**: 'Csv'
* **schedule**: ReportSchedule

## ReportDefinition
### Properties
* **dataset**: ReportDataset
* **timeframe**: 'Custom' | 'MonthToDate' | 'WeekToDate' (Required)
* **timePeriod**: ReportTimePeriod
* **type**: string (Required)

## ReportDataset
### Properties
* **aggregation**: Dictionary<string,ReportAggregation>
* **configuration**: ReportDatasetConfiguration
* **filter**: ReportFilter
* **granularity**: 'Daily' | 'Hourly'
* **grouping**: ReportGrouping[]

## Dictionary<string,ReportAggregation>
### Properties
### Additional Properties
* **Additional Properties Type**: ReportAggregation

## ReportAggregation
### Properties
* **function**: string (Required)
* **name**: string (Required)

## ReportDatasetConfiguration
### Properties
* **columns**: string[]

## ReportFilter
### Properties
* **and**: ReportFilter[]
* **dimension**: ReportComparisonExpression
* **not**: ReportFilter
* **or**: ReportFilter[]
* **tag**: ReportComparisonExpression

## ReportComparisonExpression
### Properties
* **name**: string (Required)
* **operator**: string (Required)
* **values**: string[] (Required)

## ReportGrouping
### Properties
* **name**: string (Required)
* **type**: 'Dimension' | 'Tag' (Required)

## ReportTimePeriod
### Properties
* **from**: string (Required)
* **to**: string (Required)

## ReportDeliveryInfo
### Properties
* **destination**: ReportDeliveryDestination (Required)

## ReportDeliveryDestination
### Properties
* **container**: string (Required)
* **resourceId**: string (Required)
* **rootFolderPath**: string

## ReportSchedule
### Properties
* **recurrence**: 'Annually' | 'Daily' | 'Monthly' | 'Weekly' (Required)
* **recurrencePeriod**: ReportRecurrencePeriod
* **status**: 'Active' | 'Inactive'

## ReportRecurrencePeriod
### Properties
* **from**: string (Required)
* **to**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

