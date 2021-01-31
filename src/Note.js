import React, { Component } from 'react'
// PROPS PASSED IN:

class Note extends Component {
  
  render() {
    console.log(this.props);
    
    return (
      <div>
        <p>This is the note view.</p>
      </div>
    )
  }
}

export default Note
