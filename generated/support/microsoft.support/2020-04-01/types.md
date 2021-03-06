# Microsoft.Support @ 2020-04-01

## Resource Microsoft.Support/supportTickets@2020-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SupportTicketDetailsProperties
* **type**: 'Microsoft.Support/supportTickets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Support/supportTickets/communications@2020-04-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CommunicationDetailsProperties
* **type**: 'Microsoft.Support/supportTickets/communications' (ReadOnly, DeployTimeConstant)

## SupportTicketDetailsProperties
### Properties
* **contactDetails**: ContactProfile (Required)
* **createdDate**: string (ReadOnly)
* **description**: string (Required)
* **enrollmentId**: string (ReadOnly)
* **modifiedDate**: string (ReadOnly)
* **problemClassificationDisplayName**: string (ReadOnly)
* **problemClassificationId**: string (Required)
* **problemStartTime**: string
* **quotaTicketDetails**: QuotaTicketDetails
* **require24X7Response**: bool
* **serviceDisplayName**: string (ReadOnly)
* **serviceId**: string (Required)
* **serviceLevelAgreement**: ServiceLevelAgreement
* **severity**: 'critical' | 'highestcriticalimpact' | 'minimal' | 'moderate' (Required)
* **status**: string (ReadOnly)
* **supportEngineer**: SupportEngineer
* **supportPlanType**: string (ReadOnly)
* **supportTicketId**: string
* **technicalTicketDetails**: TechnicalTicketDetails
* **title**: string (Required)

## ContactProfile
### Properties
* **additionalEmailAddresses**: string[]
* **country**: string (Required)
* **firstName**: string (Required)
* **lastName**: string (Required)
* **phoneNumber**: string
* **preferredContactMethod**: 'email' | 'phone' (Required)
* **preferredSupportLanguage**: string (Required)
* **preferredTimeZone**: string (Required)
* **primaryEmailAddress**: string (Required)

## QuotaTicketDetails
### Properties
* **quotaChangeRequests**: QuotaChangeRequest[]
* **quotaChangeRequestSubType**: string
* **quotaChangeRequestVersion**: string

## QuotaChangeRequest
### Properties
* **payload**: string
* **region**: string

## ServiceLevelAgreement
### Properties
* **expirationTime**: string (ReadOnly)
* **slaMinutes**: int (ReadOnly)
* **startTime**: string (ReadOnly)

## SupportEngineer
### Properties
* **emailAddress**: string (ReadOnly)

## TechnicalTicketDetails
### Properties
* **resourceId**: string

## CommunicationDetailsProperties
### Properties
* **body**: string (Required)
* **communicationDirection**: 'inbound' | 'outbound' (ReadOnly)
* **communicationType**: 'phone' | 'web' (ReadOnly)
* **createdDate**: string (ReadOnly)
* **sender**: string
* **subject**: string (Required)

