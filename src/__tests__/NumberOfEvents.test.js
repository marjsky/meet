import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('component render', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  
  test('render label number of events', () => {
    expect(NumberOfEventsWrapper.find('.label-events')).toHaveLength(1);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.input-number')).toHaveLength(1);
  })

  test('render default event count is 32', () => {
    expect(NumberOfEventsWrapper.state('countEvents')).toBe(32);
  });

  test('render change state of events number input', () => {
    NumberOfEventsWrapper.setState({ countEvents: 32});
    const eventObject = { target: {value: 7 }};
    NumberOfEventsWrapper.find('.input-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('countEvents')).toBe(7);
  });
  
});
