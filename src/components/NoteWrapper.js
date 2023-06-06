import React, { useState } from 'react'
import { NoteItem } from './NoteItem'
import { NoteView } from './NoteView'
import {v4 as uuidv4} from 'uuid'
uuidv4()

export const NoteWrapper = () => {
    const [notes,setNotes] = useState([])
    // const [selected,setSelected] = useState()

    const addNote = () => {
        // setNotes(notes.map(note => ({...note, selected: false} )))
        let newNote = {
            id: uuidv4(),
            header:"",
            body:"",
            selected:true,
            lastModified: new Date()
        }

        setNotes([...notes.map(note => ({...note, selected: false} )),newNote])
        // console.log(notes)
        // handleSelect(newNote.id)
        // setSelected(newNote)
    }


    const handleSelect = id => {
        setNotes(notes.map(note => note.id === id ? {...note,selected: true} : {...note,selected: false})) 
    }

    const handleHeaderEdit = (id,header) =>{
        setNotes(notes.map(note => note.id === id ? {...note,header: header, lastModified:new Date()} : note))
        // handleSelect(id)
    }

    const handleBodyEdit = (id,body) => {
        setNotes(notes.map(note => note.id === id ? {...note,body:body, lastModified:new Date()} : note))
        // handleSelect(id)
    }

    const handleDelete = id => {
        setNotes(notes.filter(note => note.id !== id))
        console.log(notes)
    }


  return (
    <div className='app-wrapper'>
        <div className='notes-panel'>
            <button type='button' className='add-button' onClick={()=> addNote()}>Add New Note</button>
            <div className='note-list'>
                {/* note items */}
                {notes.map((note, index) => 
                    <NoteItem note={note} key={index} selected={note.selected} selectNote={handleSelect} deleteNote={handleDelete}/>
                )}
            </div>
        </div>
        <div className='note-view'>
            {/* NoteView */}
            {
                notes.filter(note => note.selected)[0]?
                <NoteView selected={notes.filter(note => note.selected)[0]} editHeader={handleHeaderEdit} editBody={handleBodyEdit} />:
                <p>Add or select a note</p>
            }
            
        </div>
    </div>
  )
}
