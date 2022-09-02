import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <NumberOfEvents />
        <EventList events={this.state.events} />        
      </div>
    );
  }
}

export default App;
