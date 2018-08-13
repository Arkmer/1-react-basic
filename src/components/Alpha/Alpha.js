import React, { Component } from 'react';
import './Alpha.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Alpha extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
      return (
        <div>
            <h1>Alpha Page</h1>
            
        </div>
    );
  }
}

export default Alpha;