from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
BROWSERSTACK_URL = 'https://noelmj_tLY84E:zW2wvsyNEsqn7WEKVuwQ@hub-cloud.browserstack.com/wd/hub'

# create a new Chrome browser instance using the ChromeOptions object
chrome_options = webdriver.ChromeOptions()
#remove conflicts or unwanted behavior by extensions
chrome_options.add_argument("--disable-extensions")
chrome_options.add_argument("--disable-popup-blocking")
chrome_options.add_argument("--disable-infobars")
chrome_options.add_argument("--start-maximized")

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

driver = webdriver.Remote(
    command_executor= BROWSERSTACK_URL,
    desired_capabilities=desired_cap,ṇ
    options=chrome_options
)


# navigate to the Amazon sign-in page
driver.get("https://www.amazon.in")
click_signIn = driver.find_element(By.ID, "nav-link-accountList-nav-line-1")
click_signIn.click()

email1 = "noelmj@outlook.com"
pass1 = "uhcGieA9MvbcZvQ"


# enter email or mobile phone number in the email field
email_field = driver.find_element(By.ID, "ap_email")
email_field.send_keys(email1)

# Verify email address is correct
#email_input = email_field.get_attribute("value")
#assert email_input == email1, "Email address is not valid"
#print("Email address is correct")

# click the continue button
continue_button = driver.find_element(By.ID, "continue")
continue_button.click()

# enter password in the password field
password_field = driver.find_element(By.ID, "ap_password")
password_field.send_keys(pass1)

# Verify password is correct
#assert password_field.get_attribute("value") == pass1, "Password is not correct"
#print("Password is correct")

# select the remember me checkbox
checkbox = driver.find_element(By.NAME, "rememberMe")
checkbox.click()

# Verify select “Keep me signed in” checkbox to retain login session
#assert checkbox.is_selected(), "The 'Keep me signed in' checkbox is not selected"
#print("'Keep me signed in' checkbox is selected")

# click the sign-in button
sign_in_button = driver.find_element(By.ID, "signInSubmit")
sign_in_button.click()

# close the browser
driver.quit()
