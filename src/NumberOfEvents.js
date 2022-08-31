import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = { countEvents: 32, errorText: '' }
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if ((value < 1) || (value > 33)) {
      this.setState({ errorText: 'Limit range  from 1 to 32'});
    } else {
      this.setState({ countEvents: value});
    }
  }
  render () {
    return (
      <div className="numberOfEvents">
        <label className="label-events">
          Number of Events:
          <input
            type='number'
            className='input-number'
            value={this.state.countEvents}
            onChange={this.handleInputChange}
            />
        </label>
      </div>
    );
  }

}

export default NumberOfEvents;