import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Note.css'

// console.clear();

export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => { },
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        // return res.json() // this is empty, nothing to do with it
      })
      .then(() => {
        this.context.deleteNote(noteId)
        // when parent is NotePageMain, allows use of history.push(`/`) to send user to homepage: 
        this.props.onDeleteNote(noteId) // << [!] this is the beginning of a bug to fix where deleting a note while in note view crashes the app
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified:&nbsp;
            <span className='Date'>
              {/* {format(new Date(modified), 'yyyy-MM-dd HH:mm:ss')} */}
              {/* {Date(modified)} */}
              {modified}
            </span>
          </div>
        </div>
      </div>
    )
  }

}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired
};
