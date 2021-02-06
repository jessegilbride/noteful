import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NoteHeader from './NoteHeader';
import { NotefulContext } from "./NotefulContext";
// PROPS PASSED IN:

export class AllNotesView extends Component {
  static contextType = NotefulContext;
  
  render() {
    console.log('%cprops', 'background-color:green;color:white;padding:3px 2em;border-radius:2px;', this.props);
    console.log('%ccontext', 'background-color:black;color:white;padding:3px 2em;border-radius:2px;', this.context);
    
    const allNotes = this.context.notes.map(note => {
      return (
        // <li key={note.id}>
        //   <Link to={`/${note.folderId}/${note.id}`}>
        //     <NoteHeader /* note={note} */ />
        //   </Link>
        // </li>
        <Link to={`/${note.folderId}/${note.id}`} key={note.id}>
          <li>
            <NoteHeader /* note={note} */ />
          </li>
        </Link>
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
