import React, { Component } from 'react';
import './CurrentNewStar.css';

class CurrentNewStar extends Component {
  
    render() {
      return (
        <div>
          <p>The current new star is { this.props.star.name } it has a { this.props.star.diameter } mile diameter!</p>
        </div>
    );
  }
}

export default CurrentNewStar;