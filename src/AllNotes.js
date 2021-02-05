import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NoteHeader from './NoteHeader';
// PROPS PASSED IN:

export class AllNotesView extends Component {
  
  render() {
    // console.log(this.props);

    const allNotes = this.props.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/${note.folderId}/${note.id}`}>
            <NoteHeader note={note} />
          </Link>
        </li>
      )
    })

    return (
      <div>
        {/* <h2>All Notes</h2> */}
        <ul className='notes-list-all'>
          {allNotes}
        </ul>
      </div>
    )
  }
}

export default AllNotesView
