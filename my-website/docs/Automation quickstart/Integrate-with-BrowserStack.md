---
sidebar_position: 2
---

# Integrate script with BrowserStack

The `BROWSERSTACK_URL` constant is set to the URL of BrowserStack hub with the access credentials included to access the remote Chrome browser instance.

```bash
BROWSERSTACK_URL = 'https://username:access-key-value@hub-cloud.browserstack.com/wd/hub'

```

>**Note:** Replace the credentials in the URL with your own credentials.

## Configure the Chrome browser instance

A `ChromeOptions` object is created to configure the Chrome browser instance.

```bash
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--disable-extensions")
chrome_options.add_argument("--disable-popup-blocking")
chrome_options.add_argument("--disable-infobars")
chrome_options.add_argument("--start-maximized")
```

The `add_argument` method removes unwanted behaviour by extensions, disables popup-blocking, and disables the infobars. The `start-maximized argument` maximizes the Chrome window on startup.

## Desired Capabilities

The `desired_cap` dictionary is created to configure your Selenium tests on the BrowserStack Selenium grid. 
```bash
desired_cap = {
    'bstack:options': {
        'os': 'Windows',
        'osVersion': '11',
        'browserVersion': 'latest',
        'projectName': 'test-amazon-sign-in',
        'buildName': '1.0.0.3',
        'sessionName': 'Sign-in-test',
        'local': 'false',
        'debug': 'true',
        'networkLogs': 'true',
        'seleniumVersion': '4.8.0',
        'telemetryLogs': 'true',
    },
    'browserName': 'Chrome',
}
```

For more information about each capability and to use Capabilities Generator to configure your Selenium test suite in your chosen language, refer [Capabilities Generator](https://www.browserstack.com/automate/capabilities#).

## Configure Remote webdrive instance

A `webdriver.Remote` instance is created using the `command_executor`, `desired_capabilities`, and `options` parameters.

```bash
driver = webdriver.Remote(
    command_executor= BROWSERSTACK_URL,
    desired_capabilities=desired_cap,
    options=chrome_options
)
```

 The `command_executor` is set to the BrowserStack URL constant, the desired_capabilities is set to the `desired capabilities` dictionary, and the `options` are set to the ChromeOptions object created earlier.
