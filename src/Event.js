import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false,
    };
  }

  render() {
    const { event } = this.props;

    return (
      <div className='event'>
        <h1 className='summary'>{event.summary}</h1>
        <p className='event-date-location'>
          {event.start.dateTime} 
          {event.start.timeZone}
          {event.start.location}
        </p>
      </div>
    );
  }
}
export default Event;