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

  // put folder name into state. possibly useful to do form validation. 
  updateFolderName(folderName) {
    this.setState({
      name: folderName
    })
  }

  handleAddFolder = (event) => {
    event.preventDefault();
    const folderName = this.state.name;
    const options = {
      method: "POST",
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
        return response.json();
      })
      .then(data => {
        console.log(data)
        this.context.addFolder(data)
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
          <input type='text' name='newFolderInput' id='newFolderInput' onChange={e => this.updateFolderName(e.target.value)} autoFocus required />
          <button>create folder</button>
        </form>
      </div>
    )
  }
}

export default AddFolder
