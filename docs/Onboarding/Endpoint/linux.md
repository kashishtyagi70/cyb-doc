---
title: Linux
sidebar_position: 2
---

# Ubuntu Endpoint — Agent Installation Guide

## Overview

This guide explains how to install and uninstall the Cybrovate Client Agent on Ubuntu systems using the terminal.

---

# Installing Agent on Ubuntu Machine

Silent installation using command-line interface.

---

## Step 1 — Copy Package to Installation Directory

Download and place the installation package in the `/tmp` directory:

```bash
cyb-prod_datacenter_agent_ubuntu_v<version>.deb
```

:::info
All commands below must be executed from the same directory where the `.deb` package is downloaded.
:::

---

## Step 2 — Open Terminal with Administrator Privileges

Use an account with permission to:

- Install software
- Manage services
- Execute sudo commands

:::warning
Administrative privileges are required for installation and service management.
:::

---

## Step 3 — Install the Agent

Run the installer package.

```bash
sudo SECRET=xxxx-xxxx-xxxx-xxxxx dpkg -i cyb-prod_datacenter_agent_ubuntu_v<version>.deb
```

Expected output:

```text
Setting up cybrovate-client-agent ...
Installation completed successfully.
```

---

## Step 4 — Verify Agent Status

Check whether the Cybrovate service is running.

```bash
systemctl status cybrovateclientagent
```

Expected result:

```text
Active: active (running)
```

---

# Uninstallation

## Step 1 — Remove the Agent Package

```bash
sudo SECRET=xxxx-xxxx-xxxx-xxxxx dpkg -P cybrovate-datacenter-client-agent
```

---

## Step 2 — Stop Cybrovate Agent Services

```bash
sudo systemctl stop cybrovateclientagent
```

---

## Step 3 — Complete Package Removal

```bash
sudo SECRET=xxxx-xxxx-xxxx-xxxxx dpkg -P cybrovate-client-agent
```

:::info
Replace the secret value with the same secret used during installation.
:::

---

# Expected Result

After successful installation:

- Cybrovate agent service is active
- Endpoint appears in the Cybrovate Console
- Secure communication with backend services is established

---

# Troubleshooting

## Service Not Running

Restart the service manually:

```bash
sudo systemctl restart cybrovateclientagent
```

Verify status again:

```bash
systemctl status cybrovateclientagent
```

---

## Installation Failed

Verify the following:

- The `.deb` package is not corrupted
- Commands are executed with `sudo`
- Secret value is valid
- Required dependencies are available on the system

---

# FAQ

## Does the installation require sudo access?

Yes. Administrative privileges are mandatory for package installation and service management.

---

## How do I verify installation success?

Run:

```bash
systemctl status cybrovateclientagent
```

Ensure the service status shows:

```text
active (running)
```

---

## Which package format is supported?

Ubuntu installation uses the Debian package format:

```text
.deb
```