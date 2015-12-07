// In order to run a end to end (e2e) test using protractor you need the following:
// 1. AngularJS application
// 2. A test also known as "spec"
// 3. configuration file

// The test or spec is a Jasmine test developed with the Jasmine framework. The first thing that a Jasmine test requieres is a call to the Jasmine function "describe" with two parameters: a string and a function. The string is the name of the test in this case "angularjs homepage" and the function is a block of code that implements the test or spec.

// The function for the spec or test has to have a call to the Jasmine function "it" which also takes a string and a function. The string is a title for this specific test and the function is the actual test or spec. The Jasmine test ends with a expect which is a call to the function expect in which the actual value is verified against a matcher function.

// browser is a global created by Protractor, which is used for browser-level commands such as navigation with browser.get

describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('https://angularjs.org/');
	expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
  });
});
