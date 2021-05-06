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
    // put the first folder in the drop-down list into state as a default, in case user doesn't trigger the onChange()
    this.setState({
      folder: document.querySelector('#selectedFolder').value // the select gets its value from the option's value
    })
  }

  // put folder name into state. possibly useful to do form validation. 
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

    const note = {
      name: this.state.name,
      folderid: this.state.folder,
      content: this.state.content,
      modified: new Date()
    };

    const options = {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch(`${config.API_ENDPOINT}/notes`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to contact the server');
        }
        return response.json();
      })
      .then(data => {
        this.context.addNote(data)
        this.props.history.push(`/`)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='AddNote api-request-form'>
        <form onSubmit={e => this.handleAddNote(e)}>
          <div>
            <label htmlFor='newNoteInput'>New note name: </label>
            <input type='text' name='newNoteInput' id='newNoteInput' onChange={e => this.updateNoteNameState(e.target.value)} autoFocus required />
          </div>
          <div>
            <select name='selectedFolder' id='selectedFolder' onChange={e => this.setState({ folder: e.target.value })}>
              {this.context.folders.map(folder => {
                return <option key={folder.id} value={folder.id}>{folder.name}</option>
              })}
            </select>
          </div>
          <div>
            <input type='textarea' name='newNoteContent' id='newNoteContent' onChange={e => this.updateNoteContentState(e.target.value)} />
          </div>
          <button type='submit'>create note</button>
        </form>
      </div>
    )
  }
}

export default AddNote
