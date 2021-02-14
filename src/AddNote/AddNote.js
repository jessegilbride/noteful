import React, { Component } from 'react';
import ApiContext from '../ApiContext'; // to update state, and so the user may select a folder from state
import config from '../config'; // for POST operation

export class AddNote extends Component {

  static contextType = ApiContext;

  constructor() {
    super();
    this.state = {
      name: '',
      folder: '',
      content: '',
      modified: ''
    }
  }

  componentDidMount() {
    // put the first folder in the drop-down list into state as a default in case user doesn't trigger the onChange()
    this.setState({
      folder: document.querySelector('#selectedFolder').value
    })
  }

  // this is use to put note name into state for use in handleAddNote(), and possible future validation. 
  // not actually necessary if just that value were to be grabbed from the text input. 
  updateNoteNameState(noteName) {
    this.setState({
      name: noteName
    })
  }
  updateNoteContentState(noteContent) {
    this.setState({
      content: noteContent
    })
  }

  handleAddNote = (event) => {
    event.preventDefault();

    const timestamp = (new Date()).toISOString();
    // console.log(timestamp)
    this.setState({
      modified: timestamp
    })

    const noteName = this.state.name;
    const noteFolder = this.state.folder;
    const noteContent = this.state.content;
    const noteModified = this.state.modified;

    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: noteName,
        folderId: noteFolder,
        content: noteContent,
        modified: noteModified
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${config.API_ENDPOINT}/notes`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to contact the server');
        }
        console.log(response.json())
        return response.json(); // reads the response as a json object
      })
      .then(response => {
        console.log('response:')
        console.log(response)
        // console.log(this.state.modified)
        this.context.addNote(noteName, noteFolder, noteContent, noteModified)

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
      <div className='AddNote api-request-form'>
        <form onSubmit={e => this.handleAddNote(e)}>
          <div>
            <label htmlFor='newNoteInput'>New note name:</label>
            <input type='text' name='newNoteInput' id='newNoteInput' onChange={e => this.updateNoteNameState(e.target.value)} autoFocus required />
          </div>
          <div>
            <select name='selectedFolder' id='selectedFolder' onChange={e => this.setState({ folder: e.target.value })}>
              {this.context.folders.map(folder => {
                return <option key={folder.id}>{folder.name}</option>
              })}
            </select>
          </div>
          <div>
            <input type='textarea' name='newNoteContent' id='newNoteContent' onChange={e => this.updateNoteContentState(e.target.value)} />
          </div>
          <button>create note</button>
        </form>
      </div>
    )
  }
}

export default AddNote

/*
"name": "",
"folderId": "",
"content": "",
"modified": // UTC timestamp string
 */