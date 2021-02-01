import React, { Component } from 'react'
// PROPS PASSED IN:
// folders={dummyStore.folders}
// routerProps

class SidebarFolderName extends Component {
  render() {
    // console.log(this.props);

    const thisFolder = this.props.folders.find(folder => folder.id === this.props.match.params.folder);

    return (
      <div>
        <h2>{thisFolder.name}</h2>
        <button>back</button>
      </div>
    )
  }
}

export default SidebarFolderName
