import React, { Component } from "react";

class NumberOfEvents extends Component {

  render () {
    return (
      <div className="numberOfEvents">
        <label className="label-events">
          Number of Events:
          <input
            type='number'
            className='input-number'

            />
        </label>
      </div>
    );
  }

}

export default NumberOfEvents;