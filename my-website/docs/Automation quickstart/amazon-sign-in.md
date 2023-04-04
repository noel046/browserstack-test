---
sidebar_position: 1
---

# Selenium Amazon Sign-in Automation script

This Python script uses the Selenium package to automate the Amazon sign-in process. The script launches a Chrome browser and navigates to the Amazon sign-in page, enters the email address and password, selects the remember me checkbox, and clicks the sign-in button. The script is designed to run on BrowserStack, a cloud-based testing platform.

## Prerequisites
To run the script, install the following:

* Python 3.6 or later
* Selenium package
* Chrome browser
* ChromeDriver executable
* BrowserStack account.

### Download ChromeDrive executable

To download the ChromeDriver executable, go to the following link and download the version that matches your Chrome browser version: 
[https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads)

## Create a Python script

1. Create a python file and name it `test-amazonSign-In-BS.py`:

> **Tip:** You can choose any name relevant/descriptive of the script's purpose.

2. Import the required libraries from **Selenium WebDriver** and **Python**

```bash
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
```

* The `webdriver` library provides the main API for interacting with a web browser. In this script, we use `webdriver.Chrome()` to create a new Chrome browser instance.
* The `Service` library provides access to the ChromeDriver executable.
* The `By` library provides a set of locator strategies to locate web elements in the HTML document.
* The `Keys` library provides access to special keys on the keyboard, such as Enter, Shift, and Control.
* The `WebDriverWait` library provides a way to wait for certain conditions to be met before executing the next command.
* The `expected_conditions` library provides a set of predefined conditions that can be used with `WebDriverWait`.
* The `time` library provides a way to pause execution for a certain amount of time.
* The `os` library provides a way to interact with the operating system, such as getting the current working directory.

3. Initialize **Chrome** browser instance

```bash
driver = webdriver.Chrome()
```

This will create a new instance of the Chrome browser. If you want to use Firefox, replace `webdriver.Chrome()` with `webdriver.Firefox()`. Similarly, if you want to use Edge, replace it with `webdriver.Edge()`.

4. Navigate through **amazon sign-in page**

```bash
driver.get("https://www.amazon.in")
click_signIn = driver.find_element(By.ID, "nav-link-accountList-nav-line-1")
click_signIn.click()
```

The `get()` method opens the specified URL in the browser. In this case, we're opening the Amazon India website. The `find_element()` method locates the sign-in link by its ID and clicks on it.

5. Enter **email or mobile phone number**, **password** and select the **keep me signed in** check box

```bash
email_field = driver.find_element(By.ID,"ap_email")
email_field.send_keys("example@email.com")
password_field = driver.find_element(By.ID, "ap_password")
password_field.send_keys("password")
checkbox = driver.find_element(By.NAME, "rememberMe")
checkbox.click()
```

7. Click **sign-in**

```bash
sign_in_button = driver.find_element(By.ID, "signInSubmit")
sign_in_button.click()
```
This will find and click the "Sign-In" button on the amazon sign-in page.

8. Close **Browser**

```bash
driver.quit()
```

#### References

* [Selenium documentation](https://www.selenium.dev/documentation/)
* [ChromeDriver documentation](https://chromedriver.chromium.org/getting-started)
* [BrowserStack documentation](https://www.browserstack.com/docs/)