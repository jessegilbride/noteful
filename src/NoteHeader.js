import React, { Component } from 'react'
// PROPS PASSED IN:
// note={...} // << all of the data for a single note

class NoteHeader extends Component {
  render() {
    // console.log(this.props);

    // modified timestamp in UTC format?
    return (
      <div className='note-header'>
        <h2 className='note-name'>{this.props.note.name}</h2>
        <span className='note-modified'>Modified: {this.props.note.modified}</span>
        <input type='button' value='delete this note' className='btn note-delete' />
      </div>
    )
  }
}

export default NoteHeader
