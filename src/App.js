import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    countEvents: 24
  }


  // https://github.com/kir-net/meet/commit/9d8710b1d23d54e2d41383f4ea91fbf47716d606#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67R20


  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.countEvents), 
          locations: extractLocations(events) 
        });
      }
    });
  }

  updateEvents = (location, maxNumEvents) => {
    if(maxNumEvents === undefined) {
      maxNumEvents = this.state.countEvents;
    } else {
      this.setState({ countEvents: maxNumEvents});
    }
    if (location === undefined) {
      location = this.state.locationSelected;
    } 
    console.log(maxNumEvents, location)

    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events 
      : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, maxNumEvents),
        countEvents: maxNumEvents,
        locationSelected: location
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents events={this.state.events} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />        
      </div>
    );
  }
}

export default App;
