import React from 'react';
import { shallow } from 'enzyme';

import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
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

  test('display 32 by default', () => {
    expect(
        NumberOfEventsWrapper.find('.input-number').get(0).props.value
    ).toEqual(32);
});

  test('user input is not in range 1-32', () => {
    NumberOfEventsWrapper.find('.input-number').simulate(
        'change', {target: { value: 40 }}
    );
    expect(NumberOfEventsWrapper.state('countEvents')).toEqual(32);
});

  test('render change state of events number input', () => {
    NumberOfEventsWrapper.setState({ countEvents: 32});
    const eventObject = { target: {value: 7 }};
    NumberOfEventsWrapper.find('.input-number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('countEvents')).not.toEqual(undefined);
    expect(NumberOfEventsWrapper.state('countEvents')).toBe(7);
  });
  
});
