import React, { Component } from 'react';
import './Alpha.css';

class Alpha extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
  
      this.state = {
        user: {
          name: 'Ryan',
          city: 'Plymouth',
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

    handleSubmit = (event) => {
      console.log('User:', this.state.user);
      event.preventDefault();
      this.setState({
        user: {
          name: '',
          city: '',
        }
      })
    }
  
    render() {
      return (
        <div>
            <h1>Alpha Page</h1>
            <form onSubmit={this.handleSubmit}>
              Name <input value={this.state.user.name} onChange={this.handleChangeFor('name')} />&nbsp;
              City <input value={this.state.user.city} onChange={this.handleChangeFor('city')} />
              <input type='submit' value='Submit' />
            </form>
            <p>
              The user is { this.state.user.name }, he is from { this.state.user.city }!
            </p>
        </div>
    );
  }
}

export default Alpha;