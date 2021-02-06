import React, { Component } from 'react';
import NoteHeader from './NoteHeader';
import { NotefulContext } from "./NotefulContext";
// PROPS PASSED IN:
// note={...} // << all of the data for a single note

class Note extends Component {
  static contextType = NotefulContext;
  
  render() {
    // console.log('%cprops', 'background-color:green;color:white;padding:3px 2em;border-radius:2px;', this.props);
    // console.log('%ccontext', 'background-color:black;color:white;padding:3px 2em;border-radius:2px;', this.context);

    const note = this.context.notes.find(noteItem => noteItem.id === this.props.match.params.note)
    
    return (
      <div className='note-item'>
        <NoteHeader />

        {/* <h2 className='note-name'>{this.props.name}</h2>
        <span className='note-modified'>Modified: {this.props.modified}</span>
        <input type='button' value='delete this note' className='btn note-delete' /> */}

        <div className='note-content'>{note.content}</div>
        
      </div>
    )
  }
}

export default Note
