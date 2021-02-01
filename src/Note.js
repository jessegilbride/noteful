import React, { Component } from 'react'
// PROPS PASSED IN:

class Note extends Component {
  
  render() {
    // console.log(this.props);

    // modified timestamp in UTC format
    
    return (
      <div className='note-item'>
        <h2 className='note-name'>{this.props.name}</h2>
        <span className='note-modified'>Modified: {this.props.modified}</span>
        {/* <span className='note-modified'>Modified: {new Date().toISOString(this.props.modified)}</span> */}
        {/* <span className='note-modified'>Modified: {new Date().toUTCString(this.props.modified)}</span> */}
        <div className='note-content'>{this.props.content}</div>
        <input type='button' value='delete this note' className='btn note-delete' />
      </div>
    )
  }
}

export default Note
