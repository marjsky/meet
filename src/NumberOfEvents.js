import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = { countEvents: 32 }
  };

  handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    this.setState({ countEvents: value });

    if (value > 0 && value <= 32) {
      this.setState({ 
        countEvents: value,
        infoText: ''
      });
    } else if (value > 32) {
      this.setState({ 
        infoText: 'Select number from 1 to 32'
      });
    } else {
      this.setState({ infoText: 'Select number from 1 to 32'});
    }
    this.props.updateEvents(undefined, value);
  };

  render () {
    return (
      <div className="numberOfEvents">
        <p className="label-events">Number of Events:</p>
          <input
            type='number'
            className='input-number'
            value={this.state.countEvents}
            onChange={this.handleInputChange}
            />
          <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }

}

export default NumberOfEvents;