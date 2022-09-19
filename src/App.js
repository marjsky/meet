import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    countEvents: 32
  }

  async componentDidMount() {
    this.mounted = true;
    const isOffline = navigator.onLine ? false : true;
    this.setState({
      offlineInfo: isOffline
          ? "No internet connection. Data is loaded from cache."
          : null
    });
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.countEvents), 
          locations: extractLocations(events) 
        });
      }
    });

    // if (!navigator.onLine) {
    //   this.setState({
    //     warningText: 'Currently you are offline, data unable updated.',
    //   });
    // } else {
    //   this.setState({
    //     warningText: '',
    //   });
    // }
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
      const isOffline = navigator.onLine ? false : true;
      this.setState({
        events: locationEvents.slice(0, maxNumEvents),
        countEvents: maxNumEvents,
        locationSelected: location,
        offlineInfo: isOffline
        ? "No internet connection. Data is loaded from cache."
        : null
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <div className="warningAlert">
            <WarningAlert text={this.state.offlineInfo} />
        </div>
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents events={this.state.events} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />        
      </div>
    );
  }
}

export default App;
