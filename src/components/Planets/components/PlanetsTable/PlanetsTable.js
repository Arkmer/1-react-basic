import React, { Component } from 'react';
import './PlanetsTable.css';

class PlanetsTable extends Component {
  
    render() {
      return (
        <table>
            <tbody>
                <tr>
                    <th>Planet</th>
                    <th>Diameter</th>
                    <th>Population</th>
                </tr>
                { this.props.planetList.map(planet => <tr key={planet.name}>
                    <td>{ planet.name }</td>
                    <td>{ planet.diameter }</td>
                    <td>{ planet.population }</td>
                </tr>) }
            </tbody>
        </table>
    );
  }
}

export default PlanetsTable;