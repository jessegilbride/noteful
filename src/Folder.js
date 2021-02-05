import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NoteHeader from './NoteHeader';
// PROPS PASSED IN:
// notes={dummyStore.notes}
// routeProps={history, location, match}

class Folder extends Component {

  render() {
    // console.log(this.props);

    const notes = this.props.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/${note.folderId}/${note.id}`}>
            <NoteHeader note={note} />
          </Link>
        </li>
      )
    });
    
    return (
      <div>
        {/* <h2>Notes in this folder</h2> */}
        <ul className='notes-list-folder'>
          {notes}
        </ul>
      </div>
    )
  }
}

export default Folder
