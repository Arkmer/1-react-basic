import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './Time.css';

class Header extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = { };
    }
  
    render() {
        return (
            <div>
                <h1>MomentJS</h1>
                <div>
                    <Moment format="HHmm:ss" interval={1000}></Moment>
                </div>
            </div>
        );
    }
}

export default Header;