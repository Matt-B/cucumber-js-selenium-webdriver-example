# Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver

![build status](https://travis-ci.org/Matt-B/cucumber-js-selenium-webdriver-example.svg?branch=master)

This is an example project using cucumber-js and selenium-webdriver to run browser-based automated tests, in both desktop Chrome and Chrome on Android.

I've put this here as it took me a while to get going with this setup, and I thought others might find this useful as a starter to experiment with cucumber and webdriver in JavaScript, or as a base on which to build their own test suites.

Currently, the project has a single test which searches Google for 'cucumbers' and verifies some results are shown. It runs the tests in Chrome and so you'll need Chrome and the Chromedriver executable on your path. If you're running the tests on Android, you'll need an Android device with Chrome installed. All the JavaScript is linted using jshint before the tests are run (using options specified in the Gruntfile). If any scenarios fail, a screenshot will be taken as a PNG and put in ./screenshots/. After each scenario all cookies are deleted (in the context of the page the browser is displaying at the time) and after the tests are finished Cucumber shuts down the Webdriver instance.

## Running the tests on the desktop

To get going, you'll need Chrome (or Chromium) installed, and you'll also need the Chromedriver executable available on your path. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and then, in Linux, you can add the directory to your path like this:

    export PATH=$PATH:~/path/to/directory/containing/chromedriver

Verify it is working by opening a terminal and typing 'chromedriver'. You should see:

    [me@computer ~]$ chromedriver 
    Starting ChromeDriver (v2.10) on port 9515
    Only local connections are allowed.

If all seems OK, Ctrl+C to get rid of that, and carry on:

    git clone git://github.com/Matt-B/cucumber-js-selenium-webdriver-example.git
    cd cucumber-js-selenium-webdriver-example
    npm install
    node_modules/grunt-cli/bin/grunt

Which should first use jshint to lint the step definitions (options are specified in the Gruntfile.js), and then run the tests, producing output that looks something like:

    [me@computer cucumber-js-selenium-webdriver-example]$ grunt
    Running "jshint:files" (jshint) task
    >> 4 files lint free.
    
    Running "exec:run_cucumber_tests" (exec) task
    
    Feature: Searching for cucumbers
      As an internet user
      In order to find out more about cucumbers
      I want to be able to search for information about cucumbers
    
    
      Scenario: Google cucumber search       # features/google.feature:6
        When I search Google for "cucumbers" # features/google.feature:7
        Then I should see some results       # features/google.feature:8
    
    
    1 scenario (1 passed)
    2 steps (2 passed)
    
    Done, without errors.

## Running the tests on an Android device

I've only tried this with a physical device, but it should work with the emulator with some small changes.

To get started, connect an Android device to your computer via USB and ensure USB debugging is turned on. You might need to authorise the computer on the phone before anything will work.

If you haven't done so already, ensure you've got the project and installed dependencies:

    git clone git://github.com/Matt-B/cucumber-js-selenium-webdriver-example.git
    cd cucumber-js-selenium-webdriver-example
    npm install

This will install Appium, but you'll need to start the server (it's probably best to do this in a separate terminal):

    node_modules/appium/bin/appium.js

Once that has started successfully, then try running the test:

    [me@computer cucumber-js-selenium-webdriver-example]$ grunt android
    Running "jshint:files" (jshint) task
    >> 4 files lint free.

    Running "exec:run_cucumber_tests" (exec) task

    Feature: Searching for cucumbers
      As an internet user
      In order to find out more about cucumbers
      I want to be able to search for information about cucumbers
 

      Scenario: Google cucumber search       # features/google.feature:6
        When I search Google for "cucumbers" # features/google.feature:7
        Then I should see some results       # features/google.feature:8
 

    1 scenario (1 passed)
    2 steps (2 passed)

    Done, without errors.


All done!

## Writing your own tests

If you want to use this as a jumping off point for a new test project, then remove all the git gubbins:

    rm -R .git

You're now ready to make your changes and put it under your own source control (git, or otherwise).
