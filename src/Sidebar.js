import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FolderListSidebar from './FolderListSidebar';
import FolderNameSidebar from './FolderNameSidebar';
// PROPS PASSED IN:
// folders={dummyStore.folders}

class Sidebar extends Component {
  

  render() {
    // console.log(this.props.folders)

    return (
      <nav>
        <Switch>
          <Route path='/folder/note' component={FolderNameSidebar} folders={this.props.folders} />
          <Route path='/' render={props => <FolderListSidebar {...props} />} />
        </Switch>
      </nav>
    )
  }
}

export default Sidebar
