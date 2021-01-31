import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// PROPS PASSED IN:

export class AllNotesView extends Component {
  
  render() {
    console.log(this.props);

    const allNotes = this.props.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/${note.folderId}/${note.id}`}>
            {note.name}<br />
          </Link>
          <small>Modified: {note.modified}</small>
        </li>
      )
    })

    return (
      <div>
        <h2>All Notes</h2>
        <ul className='all-notes-list'>
          {allNotes}
        </ul>
      </div>
    )
  }
}

export default AllNotesView
