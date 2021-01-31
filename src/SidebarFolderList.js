import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// PROPS PASSED IN:
// folders={dummyStore.folders}

class SidebarFolderList extends Component {
  render() {
    // console.log(this.props);

    const folderList = this.props.folders.map(folder => {
      return (
        <li key={folder.id} className='folder-list-item'>
          <NavLink to={`/${folder.id}`} className='folder-link' activeClassName='active'>
            {folder.name}
          </NavLink>
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
