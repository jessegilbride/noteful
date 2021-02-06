import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarFolderList from './SidebarFolderList';
import SidebarFolderName from './SidebarFolderName';
// PROPS PASSED IN:
// folders={dummyStore.folders}

class Sidebar extends Component {
  

  render() {
    // console.log(this.props)
    // console.log(this.props.folders)

    return (
      <nav>
        <Switch>
          <Route path='/' exact render={ routerProps => <SidebarFolderList />} />
          <Route path='/:folder' exact render={ routerProps => <SidebarFolderList />} />
          <Route path='/:folder/:note' render={ routerProps => <SidebarFolderName {...routerProps} />} />

          {/* <Route path='/' exact render={ routerProps => <SidebarFolderList {...this.props} {...routerProps} />} />
          <Route path='/:folder' exact render={ routerProps => <SidebarFolderList {...this.props} {...routerProps} />} />
          <Route path='/:folder/:note' render={ routerProps => <SidebarFolderName {...this.props} {...routerProps} />} /> */}
        </Switch>
      </nav>
    )
  }
}

export default Sidebar
