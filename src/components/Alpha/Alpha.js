import React, { Component } from 'react';
import './Alpha.css';

class Alpha extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = {
        user: {
          name: '',
          city: '',
        }
      }
    }

    handleChangeFor = (propertyName) => (event) => {
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
              The user is { this.state.user.name }, he is from { this.state.user.city }!
            </p>
            <p>
              User <input onChange={this.handleChangeFor('name')} />
            </p>
            <p>
              City <input onChange={this.handleChangeFor('city')} />
            </p>
        </div>
    );
  }
}

export default Alpha;