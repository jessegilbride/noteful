import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// PROPS PASSED IN:
// folders={dummyStore.folders}

class SidebarFolderList extends Component {
  render() {
    // console.log(this.props);

    const folderList = this.props.folders.map(folder => {
      return (
        <li key={folder.id} className='folder-list-item'>
          <Link to={``} className='folder-link'>
            {folder.name}
          </Link>
        </li>
      )
    })

    return (
      <ul className='folder-list'>
        {folderList}
      </ul>
    )
  }
}

export default SidebarFolderList
