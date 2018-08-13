import React, { Component } from 'react';
import './Charlie.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Charlie extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
      return (
        <div>
            <h1>Charlie Page</h1>
            
        </div>
    );
  }
}

export default Charlie;