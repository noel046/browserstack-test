---
sidebar_position: 1
slug: /
---

# Automation quickstart

This document will guide you through the process of automating the Amazon sign-in page using selenium and integrating it with BrowserStack for continuous testing in your CI/CD pipeline using GitHub Actions.

## Objectives

* Create a Python script to automate sign-in using Selenium.
* Integrate the script with BrowserStack.
* Create CI/CD pipeline to test on BrowserStack using GitHub actions.

## Prerequisites
Before you begin, make sure you have the following:

* A web browser with access to the internet.
* Sign-up for a trail account of BrowserStack Automate.
* Sign-up for a GitHub account.
* Install Git on the node/system.
* Install Python 3.x on the node/system.
* Install Selenium.

### BrowserStack Automate trail account sign-up

To sign up for a free trail account, refer [BrowserStack Automate](https://www.browserstack.com/users/sign_up).

### GitHub sign-up

To sign up for a GitHub account, refer [GitHub sign-up](https://github.com/signup).

### Install Git

To install Git, refer [Git Installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Install Python

To install Python, refer [Python Setup and Usage](https://docs.python.org/3/using/index.html).

#### Upgrade Python package manager

If necessary, upgrade the Python package manager.  
To upgrade the pip package manager for Python, run the following command in your terminal:

```bash
python.exe -m pip install --upgrade pip
```

### Install Selenium

To install selenium, run the following command in your terminal:

```bash
pip install selenium
```

This will install the latest version of selenium.