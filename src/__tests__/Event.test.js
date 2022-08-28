import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event}/>);
  });

  test('render title in event item', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event date and location', () => {
    expect(EventWrapper.find('.event-date-location')).toHaveLength(1);
  });

  
})

