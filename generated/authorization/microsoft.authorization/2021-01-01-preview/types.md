# Microsoft.Authorization @ 2021-01-01-preview

## Resource Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-01-01-preview' (ReadOnly, DeployTimeConstant)
* **assignedToMe**: bool (ReadOnly, WriteOnly)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **justification**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentApprovalStepProperties (ReadOnly)
* **reviewedBy**: RoleAssignmentApprovalActorIdentity (ReadOnly, WriteOnly)
* **reviewedDateTime**: string (ReadOnly, WriteOnly)
* **reviewResult**: 'Approve' | 'Deny' | 'NotReviewed' (WriteOnly)
* **status**: 'Completed' | 'Completing' | 'Escalated' | 'Escalating' | 'Expired' | 'InProgress' | 'Initializing' | 'NotStarted' (ReadOnly, WriteOnly)
* **type**: 'Microsoft.Authorization/roleAssignmentApprovals/stages' (ReadOnly, DeployTimeConstant)

## RoleAssignmentApprovalStepProperties
### Properties
* **assignedToMe**: bool (ReadOnly)
* **displayName**: string (ReadOnly)
* **justification**: string (ReadOnly)
* **reviewedBy**: RoleAssignmentApprovalActorIdentity (ReadOnly)
* **reviewedDateTime**: string (ReadOnly)
* **reviewResult**: 'Approve' | 'Deny' | 'NotReviewed' (ReadOnly)
* **status**: 'Completed' | 'Completing' | 'Escalated' | 'Escalating' | 'Expired' | 'InProgress' | 'Initializing' | 'NotStarted' (ReadOnly)

## RoleAssignmentApprovalActorIdentity
### Properties
* **principalId**: string (ReadOnly, WriteOnly)
* **principalName**: string (ReadOnly, WriteOnly)
* **principalType**: 'servicePrincipal' | 'user' (ReadOnly, WriteOnly)
* **userPrincipalName**: string (ReadOnly, WriteOnly)

