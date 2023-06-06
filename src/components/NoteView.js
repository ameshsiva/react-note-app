import { counter } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'

export const NoteView = ({selected, editHeader, editBody}) => {
  // const [header,setHeader] = useState(selected.header)
  // const [body,setBody] = useState(selected.body)


  const handleHeaderChange = text => {
    // setHeader(text)
    // if(selected === undefined) return
    editHeader(selected.id, text)
  }

  const handleBodyChange = text => {
    // setBody(text)
    // if(selected === undefined) return
    editBody(selected.id, text)
  }

  return (
    <div className='note-view-wrapper'>
      <input type='text' placeholder='Provide a title' className='note-view-header' 
        value={selected.header} onChange={e => handleHeaderChange(e.target.value)} />
      <textarea className='note-view-text' placeholder='Type here...' 
        value={selected.body} onChange={e => handleBodyChange(e.target.value)}>
      </textarea>
    </div>
  )
}
