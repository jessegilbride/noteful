import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllNotes from './AllNotes';
import Folder from './Folder';
import Note from './Note';
// PROPS PASSED IN:
// notes={dummyStore.notes}

class Main extends Component {
  render() {
    return (
      <section className='main-view'>
        <Route exact path='/' component={AllNotes} />
        <Route path='/folder' component={Folder} />
        <Route path='/folder/note' component={Note} />
      </section>
    )
  }
}

export default Main
