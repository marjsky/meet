import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render list of events', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render event date and location', () => {
    expect(EventWrapper.find('.event-dateTime-location')).toHaveLength(1);
  });

  test('render false on show details', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('again click showDetails to hides details', () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find('.show-button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

});