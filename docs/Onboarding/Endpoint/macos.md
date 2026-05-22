---
title: macOS 
sidebar_position: 3 
---

# macOS Endpoint — Agent Installation Guide

## Overview

This guide explains how to install and uninstall the Cybrovate Client Agent on macOS systems using the terminal.

---

# Installing Cybrovate Agent on macOS

Silent installation using command-line interface.

---

## Step 1 — Copy Package to Installation Directory

Download and place the installation package in the current working directory:

```bash
cyb-prod_datacenter_agent_mac_v<version>.pkg
```

:::info
All commands below must be executed from the same directory where the `.pkg` file is downloaded.
:::

---

## Step 2 — Configure Secret

Create the secret file required by the agent.

```bash
sudo sh -c 'echo "xxxx-xxxx-xxxx-xxxxx" > /private/var/tmp/cybrovate_secret && chmod 600 /private/var/tmp/cybrovate_secret'
```

:::warning
Ensure the secret value is valid before proceeding with installation.
:::

---

## Step 3 — Install the Agent

Run the installer package.

```bash
sudo installer -pkg cyb-prod_datacenter_agent_mac_v<version>.pkg -target /
```

Expected output:

```text
installer: Package name is Cybrovate Client Agent
installer: Installing at base path /
installer: The install was successful.
```

---

## Step 4 — Start CYB Agent Services

Start or restart the Cybrovate service.

```bash
sudo launchctl kickstart -k system/com.cybrovate.remote.clientagent
```

---

## Step 5 — Verify Agent Status

Check whether the Cybrovate agent process is running.

```bash
ps aux | grep -i cybrovate
```

Expected result:

```text
com.cybrovate.remote.clientagent
```

---

# Uninstallation

## Step 1 — Stop CYB Agent Services

```bash
sudo launchctl bootout system/com.cybrovate.remote.clientagent
```

---

## Step 2 — Run Uninstallation Command

```bash
sudo /Applications/CybrovateClientAgent/uninstall.sh --secret "<SECRET>"
```

:::info
Replace `<SECRET>` with the same secret used during installation.
:::

---

# Expected Result

After successful installation:

- Cybrovate agent service is active
- Endpoint appears in the Cybrovate Console
- Secure communication with backend services is established

---

# Troubleshooting

## Agent Process Not Running

Restart the service manually:

```bash
sudo launchctl kickstart -k system/com.cybrovate.remote.clientagent
```

Then verify again:

```bash
ps aux | grep -i cybrovate
```

---

## Installation Failed

Verify the following:

- Installer package is not corrupted
- Commands are executed with `sudo`
- Secret value is valid
- macOS security permissions allow the installation

---

# FAQ

## Does the installation require sudo access?

Yes. Administrative privileges are required for installation and service management.

---

## Where is the secret stored?

The secret is stored temporarily at:

```text
/private/var/tmp/cybrovate_secret
```

---

## How do I verify installation success?

Check the following:

- Agent process is running
- Service starts successfully
- Endpoint appears in the Cybrovate management console
````
