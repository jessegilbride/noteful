import React, { Component } from 'react'
import NoteHeader from './NoteHeader';
// PROPS PASSED IN:
// note={...} // << all of the data for a single note

class Note extends Component {
  
  render() {
    // console.log(this.props);
    
    return (
      <div className='note-item'>
        <NoteHeader {...this.props} />

        {/* <h2 className='note-name'>{this.props.name}</h2>
        <span className='note-modified'>Modified: {this.props.modified}</span>
        <input type='button' value='delete this note' className='btn note-delete' /> */}

        <div className='note-content'>{this.props.note.content}</div>
        
      </div>
    )
  }
}

export default Note
