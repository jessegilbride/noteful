import React, { Component } from 'react';
import { NotefulContext } from "./NotefulContext";
// PROPS PASSED IN:
// folders={dummyStore.folders}
// routerProps

class SidebarFolderName extends Component {
  static contextType = NotefulContext;

  render() {
    // console.log(this.props);
    // console.log(this.context);
    // console.log(window.location)

    const thisFolder = this.context.folders.find(folder => folder.id === this.props.match.params.folder);

    return (
      <div>
        <h2>{thisFolder.name}</h2>
        <button>back</button>
      </div>
    )
  }
}

export default SidebarFolderName
