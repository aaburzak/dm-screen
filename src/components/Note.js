import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteBody from "./NoteBody";



export const NOTEACTIONS = {
    ADD_NOTE: 'add-note'
}

function reducer(notes, action){
    switch(action.type){
        case NOTEACTIONS.ADD_NOTE:
            return[...notes, newNote(action.payload.text)]
    
        case NOTEACTIONS.REMOVE_NOTE:
                return notes.filter(note => note.id !== action.payload.id)
                default:
                    return notes
    }
}

function newNote(text){
    return {key:uuidv4(), id:Date.now(), text: text}
}




export default function Note() {
    const [notes, dispatch] = useReducer(reducer,[])
    const [text, setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: NOTEACTIONS.ADD_NOTE, payload: {text: text}})
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
       
        
  
        {notes.map(note => {
                return <Col><NoteBody key={note.id} note={note} dispatch={ dispatch }/></Col>
            })}

        {/* {notes.map(note => {
                return <Col><OtherNoteBody key={note.id} note={note} dispatch={ dispatch }/></Col>
            })} */}


       
    
        
        </Row>
   </Container>
  )
}
