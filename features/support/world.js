'use strict';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
  withCapabilities(webdriver.Capabilities.chrome()).
  build();

var getDriver = function() {
  return driver;
};

var World = function World(callback) {

  var defaultTimeout = 20000;

  this.webdriver = webdriver;
  this.driver = driver;
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };

  callback();
};

module.exports.World = World;
module.exports.getDriver = getDriver;
