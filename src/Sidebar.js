import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FolderListSidebar from './FolderListSidebar';
import FolderNameSidebar from './FolderNameSidebar';

class Sidebar extends Component {
  render() {
    return (
      <nav>
        <Switch>
          <Route path='/folder/note' component={FolderNameSidebar} />
          <Route path='/' component={FolderListSidebar} />
        </Switch>
      </nav>
    )
  }
}

export default Sidebar
