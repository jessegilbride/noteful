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
          render={(routeProps) => (
            <AllNotes {...this.props} {...routeProps} />
          )} />
        <Route 
          path='/:folderId' exact 
          render={(routeProps) => (
            <Folder {...this.props} {...routeProps} />
          )} />
        <Route 
          path='/:folderId/:note' exact 
          render={(routeProps) => (
            <Note {...this.props.notes.find(note => note.id === routeProps.match.params.note)} {...routeProps} />
            // <Note {...routeProps} />
          )} />
        {/* <Route path='/:folderId/:note/:anything' component={PageNotFound} /> */}
      </section>
    )
  }
}

export default Main
