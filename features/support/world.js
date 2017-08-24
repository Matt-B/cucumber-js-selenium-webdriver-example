'use strict';

var {defineSupportCode} = require('cucumber');
var {Builder, By, until} = require('selenium-webdriver');
var fs = require('fs');
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      deviceName: 'Android device',
      browserName: 'Chrome'
    }).
    build();
};

var buildChromeDriver = function() {
  return new Builder().forBrowser("chrome").build();
};

var buildFirefoxDriver = function() {
    return new Builder().forBrowser("firefox").build();
};

var buildDriver = function() {
  switch(platform) {
    case 'ANDROID':
      return buildAndroidDriver();
    case 'FIREFOX':
      return buildFirefoxDriver();
    default:
      return buildChromeDriver();
  }
};

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});

var World = function World() {

  var screenshotPath = "screenshots";

  this.driver = buildDriver();

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

};

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(World);
});
