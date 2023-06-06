import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const NoteItem = ({note, selected,selectNote, deleteNote}) => {
  return (
    <div className={selected ? 'note-item-wrapper active' : 'note-item-wrapper'} >
        <div className='note-info-container' onClick={() =>selectNote(note.id)}>
          <h1 className='note-item-header'>{note.header === "" ? "<Untitled note>" : note.header}</h1>
          <p className='note-item-time'>
            {`Last modified: ${note.lastModified.getDate()}/${note.lastModified.getMonth()}/${note.lastModified.getFullYear()} 
            ${String(note.lastModified.getHours()).padStart(2,'0')}:${String(note.lastModified.getMinutes()).padStart(2,'0')}`}
            </p>
        </div>
        <button type='button' className='note-item-delete-button' onClick={() => deleteNote(note.id)}>
        <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>
  )
}
