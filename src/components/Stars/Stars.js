import React, { Component } from 'react';
import './Stars.css';

import CurrentNewStar from './components/CurrentNewStar/CurrentNewStar';
import StarList from './components/StarList/StarList';
import NewStarForm from './components/NewStarForm/NewStarForm';

class Stars extends Component {

  constructor(props) {
    super(props); // Do this or things won't work right
      this.state = {
        starList: [
          {name: 'hadar', diameter: 50},
          {name: 'gacrux', diameter: 60},
          {name: 'fomalhaut', diameter: 100}
        ],
        newStar: {
          name: '',
          diameter: '',
        },
        planetList: [

        ],
      }
    }

    handleChangeFor = (propertyName) => (event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value,
        }
      })
    }

    handleSubmit = (event) => {
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
            <CurrentNewStar star={this.state.newStar}/>
            <NewStarForm
              newStar={this.state.newStar}
              handleChangeFor={this.handleChangeFor}
              handleSubmit={this.handleSubmit}
            />
            <StarList starList={this.state.starList} />
        </div>
    );
  }
}

export default Stars;