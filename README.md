# MEET APP

## Description: 

To build a serverless, progressive web application (PWA) wtih React using a test-driven development technique. The Applicatoin uses the Google Calendar API to fetch upcoming events.

## Dependencies: 
HTML5
CSS3
JavaScript
React API
Google Calendar API

## Features: 

### FEATURE 1: FILTER EVENTS BY CITY
User story:
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

**Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
 
**Scenario 2:** User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
 
**Scenario 3:** User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

**Scenario 1:** An event element is collapsed by default.
Given the user present home website 
When the user see no information of event
Then the user the event will be collapsed to reveal more information

**Scenario 2:** User can expand an event to see its details.
Given the user really curious event’s details
When the user moves the mouse to the button event to click on it
Then the event will be expanded event’s details

**Scenario 3:** User can collapse an event to hide its details.
Given the user satisfied with their knowledge of event details
When the user clicks on the same bottom again
Then the event details will be collapsed

### FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

**Scenario 1:** When user hasn’t specified a number, 32 is the default number.
Given the webpage delivered result of number of events that user searched
When the user does not specify a number to limit the result
Then the web app will be delivered by default at 32 results

**Scenario 2:** User can change the number of events they want to see
Given the user rathered number of events appear the webpage 
When the user enter the page
Then the user receives a particular number of events

### FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

**Scenario 1:** Show cached data when there’s no internet connection.
Given the user has no accessible internet.
When Cached data 
Then the user able to see the cached data of events on screen

**Scenario 2:** Show error when user changes the settings (city, time range).
Given the browser without internet 
When the user changes the settings inputs of city and time range
Then the alert display appear error immediately

### FEATURE 5: DATA VISUALIZATION
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

**Scenario 1:** Show a chart with the number of upcoming events in each city.
Given the user is already on the home page 
When the user desire to see upcoming events in each city
Then the user will able to recognize chart demonstrate upcoming events in each city  