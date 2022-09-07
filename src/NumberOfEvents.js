import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = { countEvents: 32 }
  };

  handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 0 && value <= 32) {
      this.setState({ countEvents: value});
    } else if (value > 32) {
      this.setState({ countEvents: 32});
      value = 32;
    } else {
      this.setState({ countEvents: NaN});
      value = NaN;
    }
    this.props.updateEvents(undefined, value);
  };

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