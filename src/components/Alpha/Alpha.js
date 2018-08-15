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
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleCityChange = this.handleCityChange.bind(this);
    }

    handleNameChange(event){
      console.log(event.target.value)
      this.setState({
        user: {
          ...this.state.user,
          name: event.target.value,
        }
      })
    }
    handleCityChange(event){
      console.log(event.target.value)
      this.setState({
        user: {
          ...this.state.user,
          city: event.target.value,
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
              User <input onChange={this.handleNameChange} />
            </p>
            <p>
              City <input onChange={this.handleCityChange} />
            </p>
        </div>
    );
  }
}

export default Alpha;