import React, { Component } from 'react';
import axios from 'axios';
import './Stars.css';

import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

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
          name: '',
          diameter: '',
        }
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

    componentDidMount(){
      console.log('Stars Page -- Mounted');
      this.getPlanets();
    }

    getPlanets(){
      axios.get('https://swapi.co/api/planets/?format=json&page')
      .then(response => {
        console.log('getPlanetsResponse:', response);
      })
      .catch(error => {
        console.log('getPlanets Error', error);
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

export default Bravo;