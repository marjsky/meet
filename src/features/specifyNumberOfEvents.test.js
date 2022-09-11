import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

import { loadFeature, defineFeature } from 'jest-cucumber';

// to load Gherkin file
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature'); 

// to define the code for that file
defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the webpage app has loaded', () => {
      
    });

    when('the user does not specify a number to limit the result.', () => {
      AppWrapper = mount(<App />);
    });

    then('the web app will be delivered by default at 32 results.', () => {
      AppWrapper.update();
      expect(AppWrapper.state('countEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user rathered number of events appear the webpage', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user enter the page', () => {
      AppWrapper.update();
      AppWrapper.find('.input-number').simulate('change', { target: 3});
    });

    then('the user receives a particular number of events.', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ countEvents: 3});
      expect(NumberOfEventsWrapper.state('countEvents')).toBe(3);
    });

  });
});