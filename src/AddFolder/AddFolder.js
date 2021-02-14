import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import config from '../config'; // for POST operation

export class AddFolder extends Component {

  static contextType = ApiContext;

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  // this is use to put folder name into state for use in handleAddFolder(), and possible future validation. 
  // not actually necessary if just that value were to be grabbed from the text input. 
  updateFolderName(folderName) {
    this.setState({
      name: folderName
    })
  }

  handleAddFolder = (event) => {
    event.preventDefault();
    const folderName = this.state.name; // get name from local state
    // console.log(folderName);
    const options = {
      method: 'POST',
      body: JSON.stringify({ name: folderName }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${config.API_ENDPOINT}/folders`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to contact the server');
        }
        return response.json(); // reads the response as a json object
      })
      .then(response => {
        // console.log(response)
        this.context.addFolder(folderName)
      })
      .then(
        this.props.history.push(`/`)
      )
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='AddFolder api-request-form'>
        <form onSubmit={e => this.handleAddFolder(e)}>
          <label htmlFor='newFolderInput'>New folder name:</label>
          <input type='text' name='newFolderInput' id='newFolderInput' onChange={e => this.updateFolderName(e.target.value)} required />
          <button>create folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder
