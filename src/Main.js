import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllNotes from './AllNotes';
import Folder from './Folder';
import Note from './Note';
// PROPS PASSED IN:
// notes={dummyStore.notes}

class Main extends Component {
  render() {
    // console.log(this.props);

    return (
      <section className='main-view'>
        <Route 
          path='/' exact 
          render={props => (
            <AllNotes {...this.props} />
          )} />
        <Route 
          path='/:folderId' exact 
          render={props => (
            <Folder {...this.props} />
          )} />
        <Route 
          path='/:folderId/:note' exact 
          render={props => (
            <Note {...this.props} />
          )} />
        {/* <Route path='/:folderId/:note/:anything' component={PageNotFound} /> */}
      </section>
    )
  }
}

export default Main
