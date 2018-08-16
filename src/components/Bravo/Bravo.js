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
      }
    }
  
    render() {
      
      return (
        <div>
            <h1>Bravo Page</h1>
            <div>
              this.state = { JSON.stringify(this.state) }
            </div>
            <ul>
              { this.state.starList.map(star => <li key={star.name}>The star { star.name } has a diameter of { star.diameter }.</li>) }
            </ul>
        </div>
    );
  }
}

export default Bravo;

// Build a form to add new stars to the list! This is the next video. Use Alpha page as a guide.