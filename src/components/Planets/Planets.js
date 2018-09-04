import React, { Component } from 'react';
import axios from 'axios';
import './Planets.css';
import PlanetsTable from './components/PlanetsTable/PlanetsTable';

class Planets extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
        this.state = {
            planetList: [

            ],
            next: `https://swapi.co/api/planets/?format=json&page=`,
            warning: 'Please uncomment this.getPlanets() in the componentDidMount to use this page.',
        }
    }

    componentDidMount(){
        console.log('Planets Page -- Mounted');
        // this.getPlanets(this.state.next);
    }

    getPlanets(url){
        this.setState({
            warning: 'Do not change the page!',
        })
        axios.get(url)
        .then(response => {
        this.setState({
            planetList: [
            ...this.state.planetList,
            ...response.data.results,
            ],
            next: response.data.next,
        })
        console.log('"next" url:', this.state.next);
        // console.log('New Planets:', response.data);
        if(this.state.next === null){ // '===' required
            this.setState({
                warning: 'It is now safe to change pages.',
            })
        } else {
            this.getPlanets(this.state.next);
        }
      })
      .catch(error => {
        console.log('getPlanets Error', error);
      })
    }
  
    render() {
      return (
        <div>
            <h1>{ this.state.warning }</h1>
            <PlanetsTable planetList={this.state.planetList} />
        </div>
    );
  }
}

export default Planets;