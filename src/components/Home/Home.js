import React, { Component } from 'react';
import './Home.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
      return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
  }
}

export default Home;