import React, { Component } from 'react'
// PROPS PASSED IN:

class Folder extends Component {

  render() {
    console.log(this.props);

    // const notes = 
    
    // const origination = this.match.params.folderId; // probably wrong, just an experiment! :P

    return (
      <div>
        <p>This is the folder view.</p>
        {/* <p>{origination}</p> */}
      </div>
    )
  }
}

export default Folder
