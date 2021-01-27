import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main';
import Folder from './Folder';
import Note from './Note';
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
        {/* <Sidebar>
          <Route path='/' component={FolderListSidebar} />
          <Route path='/' component={FolderNameSidebar} />
        </Sidebar> */}
        <Main>
        </Main>
          <section>
            <Route exact path='/' component={Main} />
            <Route path='/folder' component={Folder} />
            <Route path='folder/note' component={Note} />
          </section>
        </main>
      </div>
    )
  }
}

export default App
