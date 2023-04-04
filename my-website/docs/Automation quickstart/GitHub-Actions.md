---
sidebar_position: 3
---

# GitHub Actions

GitHub Actions is a CI (Continuous Integration) and CD (Continuous Delivery) platform to automate build, test, and deployment pipelines. Create workflows to build and test every pull request to the repository or deploy merged pull requests to production.

## Set up CI/CD with GitHub and BrowserStack

1. Create a new GitHub repository for the project and clone it to the local machine.

2. Add Selenium script and any necessary configuration files to the repository.

3. Set up GitHub secrets in the repository.

4. Create a new `.github/workflows/browserstack.yml` file in the repository.

## Create a new repository

To create a new repository and clone it to the local machine, refer [create a new repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) and [clone a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Add files to the repository

To add Selenium script and any necessary configuration files to the repository, refer 
[commit and push changes](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project).


## Set up GitHub secrets in the repository

## Create configuration file

Create a browserstack.yml configuration file at the root level of the project. The configuration file contains all the required capabilities to run tests on BrowserStack.

```yaml
name: CI-test-amazon-sign-in

on: 
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

env:
    BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}
    BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}

jobs:
  build: 

    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v3
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install webdriver-manager
    - name: Run python script
      run: |
        python test-amazonSign-In-BS.py
```

## Workflow Events

Workflows are defined by a YAML file checked in to the repository and will run when triggered by an event in the repository, or it can be triggered manually or at a defined schedule.

Workflow is triggered by two events:

* push: This event triggers the workflow when code is pushed to the main branch.
* pull_request: This event triggers the workflow when a pull request is opened or updated on the main branch.

## Environment Variables

The following environment variables are used in this action:

* `BROWSERSTACK_USERNAME`: BrowserStack username required to authenticate with the BrowserStack platform. This should be stored as a secret in your repository.
* `BROWSERSTACK_ACCESS_KEY`: BrowserStack access key required to authenticate with the BrowserStack platform. This should be stored as a secret in your repository.

```bash
env:
    BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}
    BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}
```

## Jobs




## Dependencies

**`actions/checkout@v3`**: This action checks out the repository code to the runner environment.

**`actions/setup-python@v4`**: This action sets up the Python environment on the runner.

**`webdriver-manager`**: This package manages the browser drivers required for automated testing.

**`requirements.txt`**: This file contains the list of Python packages required for testing.

