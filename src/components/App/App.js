import React, { Component } from 'react';
import './App.css';

// Required for linking pages
import Header from '../Header/Header';
import Alpha from '../Alpha/Alpha';
import Bravo from '../Bravo/Bravo';
import Stars from '../Stars/Stars';
import Planets from '../Planets/Planets';
import Time from '../Time/Time';

// Required terminal command "npm i react-router-dom" to work
// Allows the use of "Router", "Route", and "Link" functions
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Put functions here
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="React Test App"/>
          <Route path="/alpha" component={Alpha} />
          <Route path="/bravo" component={Bravo} />
          <Route path="/stars" component={Stars} />
          <Route path="/planets" component={Planets} />
          <Route path="/time" component={Time} />
        </div>
      </Router>
    );
  }
}

export default App;