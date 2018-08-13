import React, { Component } from 'react';
import './Bravo.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Bravo extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
      return (
        <div>
            <h1>Bravo Page</h1>
            
        </div>
    );
  }
}

export default Bravo;