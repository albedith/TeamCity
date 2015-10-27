#!/usr/bin/python
# -*- coding: UTF-8 -*-

import time
import os
from appium import webdriver
import sys

# Retreiving enviroment variables
SAUCE_USERNAME = os.environ.get('SAUCE_USERNAME')
SAUCE_ACCESS_KEY = os.environ.get('SAUCE_ACCESS_KEY')


# desired_capabilities = {}
# desired_capabilities['platform'] = 'linux'
# desired_capabilities['version'] = '4.1'
# desired_capabilities['browserName'] = 'Android'
# desired_capabilities['deviceName'] = 'Samsung Galaxy S3 Emulator'

desired_capabilities = {}
desired_capabilities['platformName'] = 'Android'
desired_capabilities['platformVersion'] = '4.4'
desired_capabilities['browserName'] = 'browser'
desired_capabilities['deviceName'] = 'Android Emulator'
desired_capabilities['appiumVersion'] = '1.4.13'

driver = webdriver.Remote(command_executor = ('http://' + SAUCE_USERNAME + ':' + SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub'), desired_capabilities = desired_capabilities)

driver.implicitly_wait(30)

driver.get('https://www.google.com')
time.sleep(10)

driver.quit()
