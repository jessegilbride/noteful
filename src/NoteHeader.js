import React, { Component } from 'react';
import { NotefulContext } from "./NotefulContext";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
// PROPS PASSED IN:
// note={...} // << all of the data for a single note

class NoteHeader extends Component {
  static contextType = NotefulContext;

  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // };

  render() {
    console.log('%cprops', 'background-color:green;color:white;padding:3px 2em;border-radius:2px;', this.props);
    console.log('%ccontext', 'background-color:black;color:white;padding:3px 2em;border-radius:2px;', this.context);

    const note = this.context.notes.find(noteItem => noteItem.id === this.props.match.params.note);
    console.log(note);

    // modified timestamp in UTC format
    return (
      <div className='note-header'>
        {/* <h2 className='note-name'>{note.name}</h2> */}
        {/* <span className='note-modified'>Modified: {note.modified}</span> */}
        <input type='button' value='delete this note' className='btn note-delete' />
      </div>
    )
  }
}

export default withRouter(NoteHeader)
