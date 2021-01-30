import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarFolderList from './SidebarFolderList';
import SidebarFolderName from './SidebarFolderName';
// PROPS PASSED IN:
// folders={dummyStore.folders}

class Sidebar extends Component {
  

  render() {
    // console.log(this.props.folders)

    return (
      <nav>
        <Switch>
          <Route path='/' exact render={ props => <SidebarFolderList {...this.props} />} />
          <Route path='/:folder' render={ props => <SidebarFolderList {...this.props} />} />

          <Route path='/:folder/:note' render={ props => <SidebarFolderName {...props} />} />
        </Switch>
      </nav>
    )
  }
}

export default Sidebar
