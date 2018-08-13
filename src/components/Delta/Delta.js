import React, { Component } from 'react';
import './Delta.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Delta extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
      return (
        <div>
            <h1>Delta Page</h1>
            
        </div>
    );
  }
}

export default Delta;