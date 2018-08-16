import React, { Component } from 'react';
import './StarList.css';

class StarList extends Component {
  
    render() {
      return (
        <ul>
          { this.props.starList.map(star => <li key={star.name}>The star { star.name } has a diameter of { star.diameter }.</li>) }
        </ul>
    );
  }
}

export default StarList;