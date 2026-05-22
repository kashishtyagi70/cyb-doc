---
title: Azure Onboarding
sidebar_position: 2
---

# Azure Onboarding

## Step 1 — Extract Package

Extract:

```text
azure-onboarding-client-bootstrap
```

to a local working folder.

---

## Step 2 — Open PowerShell

Open:

```text
Windows PowerShell
```

or:

```text
PowerShell 7
```

as Administrator.

---

## Step 3 — Navigate to Scripts Folder

```powershell
Set-Location C:\Temp\azure-onboarding-client-bootstrap\scripts
```

---

## Step 4 — Prepare Wrapper File

```powershell
Copy-Item .\Run-Interactive.ps1.example .\Run-Interactive.ps1
```

---

## Step 5 — Edit Script Values

Update the following values in:

```text
Run-Interactive.ps1
```

- TenantId
- SubscriptionId
- optional BootstrapDisplayName
- optional OutputFile

---

## Step 6 — Run Bootstrap Script

Run the bootstrap PowerShell script with updated parameters.

---

## Step 7 — Interactive Sign-In

Complete Microsoft sign-in flow in the popup window.

---

## Step 8 — Resources Created

The script creates temporary Microsoft Entra resources:

- Application
- Service Principal
- Assign Owner on the subscription
- Application Administrator
- Security Admin in Entra ID

---

## Step 9 — Review Output File

Confirm that:

```text
client-bootstrap-output.json
```

was created in the path you specified.

---

## Step 10 — Secure Handoff to Cybrovate

Send:

```text
client-bootstrap-output.json
```

securely to Cybrovate.