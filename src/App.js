import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
//import { WarningAlert } from './Alert';
import './nprogress.css';
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

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

  // function gets total number of events happening in each city
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split('.').shift()
      return {city, number};
    })
    return data;
  }

  render() {

    const { locations, numberOfEvents, events } = this.state;

    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch 
          updateEvents={this.updateEvents} 
          locations={locations}
        />
        <NumberOfEvents 
          updateEvents={this.updateEvents} 
          numberOfEvents={numberOfEvents}
        />
        <h4>Events in each city</h4>

        <ResponsiveContainer height={400}>
          <ScatterChart 
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid />
            <XAxis 
              type='category' 
              dataKey="city" 
              name="city" 
            />
            <YAxis 
              allowDecimals={false}
              type='number' 
              dataKey="number" 
              name="number of events"
            />
            
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events} />        
      </div>
    );
  }
}

export default App;
