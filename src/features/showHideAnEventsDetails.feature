Feature: Show/Hide an Event’s Details

  Scenario: An event element is collapsed by default.
    Given the user present home website is loaded containing events
    When the user see a list of events 
    Then the events are collapsed by default

  Scenario: User can expand an event to see its details.
    Given the user really curious event elements have loaded
    When the user clicks on the show details button of event element
    Then the event element will be expanded details

  Scenario: User can collapse an event to hide its details.
    Given the user satisfied with their knowledge of edxpanded event detail 
    When the user clicks on the hide bottom. 
    Then the event element detail will be collapsed.