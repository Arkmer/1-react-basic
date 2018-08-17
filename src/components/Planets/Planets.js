import React, { Component } from 'react';
import axios from 'axios';
import './Planets.css';

class Planets extends Component {

    constructor(props) {
      super(props); // Do this or things won't work right
        this.state = {
            planetList: [

            ],
            next: `https://swapi.co/api/planets/?format=json&page=`,
            warning: 'Do not change the page!',
        }
    }

    componentDidMount(){
        console.log('Planets Page -- Mounted');
        this.getPlanets(this.state.next);
    }

    getPlanets(url){
        axios.get(url)
        .then(response => {
        this.setState({
            planetList: [
            ...this.state.planetList,
            ...response.data.results,
            ],
            next: response.data.next,
        })
        console.log('planetList:', this.state.next);
        if(this.state.next === null){ // '===' required
            console.log('getPlanets -- Complete');
            console.log(this.state.planetList);
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
            <table>
                <tbody>
                    <tr>
                        <th>Planet</th>
                        <th>Diameter</th>
                        <th>Population</th>
                    </tr>
                    { this.state.planetList.map(planet => <tr key={planet.name}>
                        <td>{ planet.name }</td>
                        <td>{ planet.diameter }</td>
                        <td>{ planet.population }</td>
                    </tr>) }
                </tbody>
            </table>
        </div>
    );
  }
}

export default Planets;