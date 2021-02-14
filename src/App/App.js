import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import ApiContext from '../ApiContext';
import config from '../config';
import './App.css';
import AddNote from '../AddNote/AddNote';
import AddFolder from '../AddFolder/AddFolder';

// console.clear();

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    // when page loads, get the notes and folders from the server: 
    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/notes`),
            fetch(`${config.API_ENDPOINT}/folders`)
        ])
            .then(([notesRes, foldersRes]) => {
                if (!notesRes.ok)
                    return notesRes.json().then(e => Promise.reject(e));
                if (!foldersRes.ok)
                    return foldersRes.json().then(e => Promise.reject(e));

                return Promise.all([notesRes.json(), foldersRes.json()]);
            })
            .then(([notes, folders]) => {
                this.setState({ notes, folders });
            })
            .catch(error => {
                console.error({ error });
            });
    }

    handleAddFolder = (folderName) => {
        this.setState({
            folders: [...this.state.folders, folderName]
        })
    }

    handleAddNote = (noteName, noteFolder, noteContent, noteModified) => {
        console.log(noteName, noteFolder, noteContent, noteModified);

        const addToFolder = this.state.folders.find(folder => folder.name === noteFolder)
        console.log(addToFolder)

        // NEW NOTE OBJECT ARCHITYPE:
        /*
        "id": "",
        "name": "",
        "folderId": "",
        "content": "",
        "modified": // UTC timestamp string
        */
        // >> IS THIS NOT THE RIGHT THING TO DO TO PUT A NOTE INTO STATE?
        const newNote = {
            "name": noteName,
            "modified": noteModified,
            "folderId": addToFolder,
            "content": noteContent
        }
        console.log(newNote);

        this.setState({
            notes: [...this.state.notes, newNote]
        })
    }

    handleDeleteNote = (noteId) => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    };

    renderNavRoutes() {
        return (
            <>
                {/* {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                ))} */}
                <Route path='/' exact component={NoteListNav} />
                <Route path='/folder/:folderId' exact component={NoteListNav} />
                <Route path='/note/:noteId' component={NotePageNav} />
                <Route path='/add-folder' component={NotePageNav} />
                <Route path='/add-note' component={NotePageNav} />
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
                {/* {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListMain}
                    />
                ))} */}
                <Route path='/' exact component={NoteListMain} />
                <Route path='/folder/:folderId' exact component={NoteListMain} />
                <Route path='/note/:noteId' component={NotePageMain} />
                <Route path='/add-folder' component={AddFolder} />
                <Route path='/add-note' component={AddNote} />
            </>
        );
    }

    render() {
        const value = {
            // references to state and methods in this component (that is, they just point to them, so no need to involve passing arguments) 
            notes: this.state.notes,
            folders: this.state.folders,
            addFolder: this.handleAddFolder,
            addNote: this.handleAddNote,
            deleteNote: this.handleDeleteNote
        };
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                    <nav className="App__nav">
                        {this.renderNavRoutes()}
                    </nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                            <FontAwesomeIcon icon="check-double" />
                        </h1>
                    </header>
                    <main className="App__main">
                        {this.renderMainRoutes()}
                    </main>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
