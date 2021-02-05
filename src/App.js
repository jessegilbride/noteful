// COMPONENTS --------------------
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Sidebar from './Sidebar';
import { NotefulContext } from "./NotefulContext";
// FILES & HELPERS --------------------
import dummyStore from './dummyStore';
// CSS --------------------
import './App.css';

console.clear();

class App extends Component {

  state = {
    folders: dummyStore.folders,
    notes: dummyStore.notes
  }

  deleteNote = (noteId) => {}
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote
    }

    return (
      <div className='App'>
        <header>
          <h1>
            <Link to='/' className='header-link'>Noteful</Link>
          </h1>
        </header>
        <NotefulContext.Provider value={contextValue} >
        <main className='flex-container'>
          <Sidebar folders={this.state.folders} />
          <Main notes={this.state.notes} />
        </main>
        </NotefulContext.Provider>

      </div>
    )
  }
}

export default App
