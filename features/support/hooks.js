'use strict';

var driver = require('./world.js').getDriver();

var myHooks = function () {
  
  this.After(function(callback) {
    this.driver.manage().deleteAllCookies()
      .then(function() {
        callback();
      });
  });

  this.registerHandler('AfterFeatures', function (event, callback) {
    driver.close();
    callback();
  });
};

module.exports = myHooks;
