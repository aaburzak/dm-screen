import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { useReducer, useState } from "react";


import OtherNoteBody from "./OtherNoteBody";


export const OTHER_NOTEACTIONS = {
    ADD_NOTE: 'add-note'
}

function reducer(notes, action){
    switch(action.type){
        case OTHER_NOTEACTIONS.ADD_NOTE:
            return[...notes, newNote(action.payload.text)]
    
        case OTHER_NOTEACTIONS.REMOVE_NOTE:
                return notes.filter(note => note.id !== action.payload.id)
                default:
                    return notes
    }
}

function newNote(text){
    return {id:Date.now(), text: text}
}




export default function OtherNote() {
    const [notes, dispatch] = useReducer(reducer,[])
    const [text, setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: OTHER_NOTEACTIONS.ADD_NOTE, payload: {text: text}})
        setText('')
    }

    // console.log(notes)



  return (
   <Container>
        <Row>
            <Col className="md-auto  text-center">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={text} onChange={e => setText
                    (e.target.value)} />
                </form>
            </Col>
        </Row>
        <Row>
       
        
  
        {/* {notes.map(note => {
                return <Col><NoteBody key={note.id} note={note} dispatch={ dispatch }/></Col>
            })} */}

        {notes.map(note => {
                return <Col><OtherNoteBody key={note.id} note={note} dispatch={ dispatch }/></Col>
            })}


       
    
        
        </Row>
   </Container>
  )
}