import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';

class Main extends Component {
  render() {
    return (
      <div>
        <p>Main Component</p>
        <p>reminder: put notes from store here</p>
        <section>
          <Route exact path='/' component={Main} />
          <Route path='/folder' component={Folder} />
          <Route path='/folder/note' component={Note} />
        </section>
      </div>
    )
  }
}

export default Main
