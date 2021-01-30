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
        <Route path='/' exact component={AllNotes} />
        <Route path='/:folderId' exact component={Folder} />
        <Route path='/:folderId/:note' exact component={Note} />
        {/* <Route path='/:folderId/:note/:anything' component={PageNotFound} /> */}
      </section>
    )
  }
}

export default Main
