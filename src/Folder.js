import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// PROPS PASSED IN:
// notes={dummyStore.notes}

class Folder extends Component {

  render() {
    // console.log(this.props);

    const origination = this.props.match.params.folderId;
    const notes = this.props.notes.filter(match => (match.folderId === origination)).map(note => {
      return (
        <li key={note.id}>
          <Link to={`/${note.folderId}/${note.id}`}>
            {note.name}<br />
          </Link>
          <small>Modified: {note.modified}</small>
        </li>
      )
    });
    
    return (
      <div>
        <p>This is the folder view.</p>
        <ul>
          {notes}
        </ul>
      </div>
    )
  }
}

export default Folder
