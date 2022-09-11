Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the webpage app has loaded 
    When the user does not specify a number to limit the result. 
    Then the web app will be delivered by default at 32 results.

  Scenario: User can change the number of events they want to see.
    Given the user rathered number of events appear the webpage 
    When the user enter the page 
    Then the user receives a particular number of events.