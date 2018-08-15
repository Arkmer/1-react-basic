import React, { Component } from 'react';
import './Alpha.css';

class Alpha extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = {
        user: {
        }
      }
    }

    handleChangeFor = (propertyName) => (event) => {
      // this.state.user.name = this['state']['user']['name']
      // They run exactly the same way in JavaScript
      // You can run multiple levels of currying this way
      this.setState({
        user: {
          ...this.state.user,
          [propertyName]: event.target.value,
        }
      })
    }
  
    render() {
      return (
        <div>
            <h1>Alpha Page</h1>
            <p>Local State Demo</p>
            <p>
              The user is { this.state.user.name }, he is from { this.state.user.city }, { this.state.user.state }!
            </p>
            <p>
              Name <input onChange={this.handleChangeFor('name')} />&nbsp;
              City <input onChange={this.handleChangeFor('city')} />&nbsp;
              State <input onChange={this.handleChangeFor('state')} />
            </p>
        </div>
    );
  }
}

export default Alpha;