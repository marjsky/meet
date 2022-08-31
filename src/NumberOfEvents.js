import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = { countEvents: 32 }
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
            
            />
        </label>
      </div>
    );
  }

}

export default NumberOfEvents;