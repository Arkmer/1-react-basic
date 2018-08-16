import React, { Component } from 'react';
import './NewStarForm.css';

class NewStarForm extends Component {
  
    // constructor(props) {
    //     super(props); // Do this or things won't work right
    //       this.state;
    // }

    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          Name <input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} />&nbsp;
          Diameter <input value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')} />
          <input type='submit' value='Submit' />
        </form>
    );
  }
}

export default NewStarForm;