import React, { Component } from 'react';
import './Bravo.css';

class Bravo extends Component {

  constructor(props) {
    super(props); // Do this or things won't work right
      this.state = {
        starList: [
          {name: 'hadar', diameter: 50},
          {name: 'gacrux', diameter: 60},
          {name: 'fomalhaut', diameter: 100}
        ],
        newStar: {
          name: 'North Star',
          diameter: '1000',
        }
      }
    }

    handleChangeFor = (propertyName) => (event) => {
      console.log(propertyName+":", event.target.value);
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value,
        }
      })
    }

    handleSubmit = (event) => {
      console.log('newStar:', this.state.newStar);
      event.preventDefault();
      this.setState({
        starList: [
          ...this.state.starList,
          this.state.newStar,
        ],
        newStar: {
          name: '',
          diameter: '',
        }
      })
    }
  
    render() {
      return (
        <div>
            <h1>Bravo Page</h1>
            <form onSubmit={this.handleSubmit}>
              Name <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} />&nbsp;
              Diameter <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} />
              <input type='submit' value='Submit' />
            </form>
            <ul>
              { this.state.starList.map(star => <li key={star.name}>The star { star.name } has a diameter of { star.diameter }.</li>) }
            </ul>
        </div>
    );
  }
}

export default Bravo;