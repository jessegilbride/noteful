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
          component={AllNotes}
          /* render={(routeProps) => (
            <AllNotes {...this.props} {...routeProps} />
          )}  */
          />
        <Route 
          path='/:folderId' exact 
          render={(routeProps) => (
            // <Folder {...this.props} {...routeProps} />
            <Folder /* notes={this.props.notes.filter(noteItem => (noteItem.folderId === routeProps.match.params.folderId))} */ {...routeProps} />
          )} />
        <Route 
          path='/:folderId/:note' exact 
          component={Note}
          /* render={(routeProps) => (
            // <Note note={this.props.notes.find(noteItem => noteItem.id === routeProps.match.params.note)} {...routeProps} />
            // <Note {...routeProps} />
          )}  */
          />
        {/* <Route path='/:folderId/:note/:anything' component={PageNotFound} /> */}
      </section>
    )
  }
}

export default Main
