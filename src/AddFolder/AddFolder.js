import React, { Component } from 'react';
import config from '../config'; // for POST operation

export class AddFolder extends Component {

  constructor() {
    super();
    this.state = {
      folderName: ''
    }
  }

  updateFolderName(folderName) {
    this.setState({
      folderName: folderName
    })
  }

  handleAddFolder = (event) => {
    event.preventDefault();
    const folderName = this.state.folderName;
    const options = {
      method: 'POST',
      body: JSON.stringify(folderName),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${config.API_ENDPOINT}/folders`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to contact the server');
        }
        return response.json(); // << ASK CINDY why this needs .json()
      })
      .then(response => {
        console.log(response)
      })
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
