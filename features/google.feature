Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers
  
  Scenario: Google cucumber search
    When I search Google for "cucumbers"
    Then I should see some results
