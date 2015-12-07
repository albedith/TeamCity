// conf.js
// This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress).
// It will use the defaults for all other configuration. Chrome is the default browser.

// You can run the test by executing the folliwng line on your terminal:
// >protractor conf.js

//If you don't specify a browser or Operating System the default browser will be Chrome and the Operating System will be Linux

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

 //Capabilities to be passed to the webdriver instance
capabilities: {
    'browserName':'Chrome',
    'platform':'Windows 8.1',
    'name':'My Test'},


//The defaultTimeoutInterval is originally set to 30000. For Mobile tests the simulators/emulators take longer to load which can cause the test to timeout within the 30000 msec. Increasing the defaultTimeoutInterval to at least 50000 msec helps.

//The maximum value for the defaultTimeoutInterval is 360000.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000},


  specs: ['spec.js']
}
