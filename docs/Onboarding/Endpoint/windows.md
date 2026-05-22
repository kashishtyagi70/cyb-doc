---
title: Windows
sidebar_position: 1
---

# Windows Endpoint — Agent Installation Guide

## Overview

This guide explains how to install and uninstall the Cybrovate Client Agent on Windows systems using either:

- Command Line Installation (Silent Install)
- GUI Installation (Interactive Wizard)

---

# Installation Methods

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cli" label="Installation via CLI" default>

Silent installation using Command Prompt.

---

## Step 1 — Copy Installer

Download and copy the installer to:

```powershell
C:\Temp
```

---

## Step 2 — Open Command Prompt as Administrator

1. Press `Windows`
2. Search for `cmd`
3. Right-click **Command Prompt**
4. Select **Run as administrator**

:::warning
Administrator privileges are required for installation.
:::

---

## Step 3 — Navigate to Installer Directory

```powershell
cd C:\Temp
```

---

## Step 4 — Run Installation Command

```powershell
.\cyb_datacenter_agent_win_v<version>.exe /INSTALL /SECRET=xxxxx-xxxxx-xxxxx-xxxxxx /REGION=INDIA /VERYSILENT /NORESTART
```

:::info
Replace `<version>` with the installer version provided to you.
:::

---

## Step 5 — Verify Agent Service

Open:

```powershell
services.msc
```

Verify the following service is:

- Present
- Running
- Startup Type = Automatic

Service Name:

```text
CybrovateClientAgent
```

---

## Uninstallation Command

```powershell
.\cyb_datacenter_agent_win_v<version>.exe /UNINSTALL /SECRET=xxxx-xxxx-xxxx-xxxxx /REGION=INDIA /VERYSILENT /NORESTART
```

</TabItem>

<TabItem value="gui" label="Installation via GUI">

Interactive installation using the setup wizard.

---

## Step 1 — Download Installer

Download the Windows installer executable from the official distribution portal.

---

## Step 2 — Launch Installer

Double-click:

```text
cyb_datacenter_agent_win_v<version>.exe
```

---

## Step 3 — Follow Setup Wizard

1. Click **Next**
2. Accept the License Agreement
3. Click **Install**

---

## Step 4 — Wait for Installation

Allow the installation process to complete.

---

## Step 5 — Verify Agent Service

Open:

```powershell
services.msc
```

Confirm the following service is running successfully:

```text
CybrovateClientAgent
```

</TabItem>
</Tabs>

---

# Expected Result

After successful installation:

- Agent service is active
- Endpoint appears in the Cybrovate Console
- System begins secure communication with backend services

---

# Troubleshooting

## Service Not Running

1. Open:

```powershell
services.msc
```

2. Locate:

```text
CybrovateClientAgent
```

3. Right-click the service and select:

```text
Start
```

---

## Installation Failed

- Ensure the installer is executed using Administrator privileges
- Verify internet connectivity
- Confirm the provided secret key is valid
- Check antivirus or endpoint protection restrictions

---

# FAQ

## Does the installer require administrator access?

Yes. Administrative privileges are mandatory for installation and service creation.

---

## Is a system restart required?

No. The installation uses:

```text
/NORESTART
```

which suppresses automatic reboot.

---

## How do I verify the installation?

Check the following:

- `CybrovateClientAgent` service is running
- Endpoint appears in the Cybrovate management console