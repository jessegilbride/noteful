import React, { Component } from 'react';
import ApiContext from '../ApiContext'; // so that the user may select a folder
import config from '../config'; // for POST operation

export class AddNote extends Component {

  addNote = () => { }

  render() {
    return (
      <div>
        <p>AddNote component</p>
      </div>
    )
  }
}

export default AddNote
