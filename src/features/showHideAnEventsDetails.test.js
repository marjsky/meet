import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

// to load Gherkin file
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature'); 

// to define the code for that file
defineFeature(feature, test => {

  //Scenario test 1
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user present home website is loaded containing events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user see a list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the events are collapsed by default', () => {
      AppWrapper.update();
      let EventWrapper = AppWrapper.find(Event);
      EventWrapper.forEach((event) => expect(event.state('showDetails')).toBe(false));
      expect(EventWrapper.find('.event .show-button')).toHaveLength(mockData.length);
    });
  });

  //Scenario test 2
  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user really curious event elements have loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the show details button of event element', () => {
      AppWrapper.update();
      AppWrapper.find('.event .show-button').at(0).simulate('click');
    });

    then('the event element will be expanded details', () => {
      expect(AppWrapper.find('.event .description')).toHaveLength(1);
    });
  });

  //Scenario test 3
  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user satisfied with their knowledge of edxpanded event detail', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .show-button').at(0).simulate('click');
    });

    when('the user clicks on the hide bottom.', () => {
      AppWrapper.find('.event .show-button').at(0).simulate('click');
    });
  
    then('the event element detail will be collapsed.', () => {
      expect(AppWrapper.find('.event .description')).toHaveLength(0);
    });
    
  });

});