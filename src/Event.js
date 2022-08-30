import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false,
    };
  }

  handleDetailClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p className='event-dateTime-location'>
          {event.start.dateTime} 
          {event.start.timeZone}
          {event.start.location}
        </p>
        {this.state.showDetails && (
          <p className='description'>{event.description}</p>
        )}
        <button className='show-button' onClick={this.handleDetailClick}>
          {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
        </button>
      </div>
    );
  }
}
export default Event;