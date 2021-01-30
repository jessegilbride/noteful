// COMPONENTS --------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Sidebar from './Sidebar';
// FILES & HELPERS --------------------
import dummyStore from './dummyStore';
// CSS --------------------
import './App.css';

console.clear();

class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <header>
          <h1>
            <Link to='/' className='header-link'>Noteful</Link>
          </h1>
        </header>
        <main className='flex-container'>
          <Sidebar folders={dummyStore.folders} />
          <Main notes={dummyStore.notes} />
        </main>

        {/* {console.log(dummyStore.folders)} */}
        {/* {console.log(dummyStore.notes)} */}

      </div>
    )
  }
}

export default App
