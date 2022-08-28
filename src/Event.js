import React, { Component } from 'react';

class Event extends Component {

  render() {
    const { event } = this.props;

    return (
      <div className='event-title'>
        <h1 className='summary'>{event.summary}</h1>
      </div>
    );
  }
}
export default Event;