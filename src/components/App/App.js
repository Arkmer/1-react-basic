import React, { Component } from 'react';
import './App.css';

// Required for linking pages
import Header from '../Header/Header';
import Home from '../Home/Home';
import Alpha from '../Alpha/Alpha';
import Bravo from '../Bravo/Bravo';
import Charlie from '../Charlie/Charlie';
import Delta from '../Delta/Delta';

// Required terminal command "npm i react-router-dom" to work
// Allows the use of "Router", "Route", and "Link" functions
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Put functions here
  render() {
    return (
      <Router>
        <div className="App">
          <Header title="React Test App"/>
          <Route path="/home" component={Home} />
          <Route path="/alpha" component={Alpha} />
          <Route path="/bravo" component={Bravo} />
          <Route path="/charlie" component={Charlie} />
          <Route path="/delta" component={Delta} />
        </div>
      </Router>
    );
  }
}

export default App;