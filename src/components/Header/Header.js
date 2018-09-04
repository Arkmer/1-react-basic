import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { title: props.title }
    }
  
    render() {
        return (
            <header className="App-header">
            <h1 className="App-title">{this.state.title}</h1>
                <div className="link-holder">
                    <Link to="/alpha">Alpha</Link>&nbsp; &nbsp;
                    <Link to="/bravo">Bravo</Link>&nbsp; &nbsp;
                    <Link to="/stars">Stars</Link>&nbsp; &nbsp;
                    <Link to="/planets">Planets</Link>&nbsp; &nbsp;
                    <Link to="/time">Time</Link>
                </div>
            </header>
        );
    }
}

export default Header;

