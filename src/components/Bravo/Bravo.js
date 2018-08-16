import React, { Component } from 'react';
import './Bravo.css';

class Bravo extends Component {

  constructor(props) {
    super(props); // Do this or things won't work right
      this.state = {
        starList: ['hadar', 'gacrux', 'fomalhaut'],
      }
    }
  
    render() {
      let starListItemArray = [];
      for(let i = 0; i < this.state.starList.length; i++){
        let starListItem = <li>{ this.state.starList[i] }</li>;
        starListItemArray.push(starListItem);
      }
      return (
        <div>
            <h1>Bravo Page</h1>
            <div>
              this.state = { JSON.stringify(this.state) }
            </div>
            <div>
              this.state.starList = { this.state.starList }
            </div>
            <ul>
              { starListItemArray }
            </ul>
        </div>
    );
  }
}

export default Bravo;