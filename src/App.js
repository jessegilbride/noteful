import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Folder from './Folder';
import Note from './Note';
import FolderListSidebar from './FolderListSidebar';
import FolderNameSidebar from './FolderNameSidebar';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <header>
          <h1>
            <Link to='/'>Noteful</Link>
          </h1>
        </header>
        <main>
          <nav>
            <Switch>
              <Route path='/folder/note' component={FolderNameSidebar} />
              <Route path='/' component={FolderListSidebar} />
            </Switch>
          </nav>
          <section className='main-view'>
            <Route exact path='/' component={Main} />
            <Route path='/folder' component={Folder} />
            <Route path='/folder/note' component={Note} />
          </section>
        </main>
      </div>
    )
  }
}

export default App
