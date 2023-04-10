import React from "react";

// import { useLocalStorage } from 'react-use';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoteBody from "./NoteBody";
import { useLocallyPersistedReducer } from "../hooks/ReducerStorage";



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


// const useStorage = (state, key) => {
//     function saveState(key,val){
//         return window.localStorage.set(key, JSON.stringify(val));
//     }

//     function getState(key) {
//         return JSON.parse(window.localStorage.get(key))
//     }

//     const storedState = getState(key)

//     useEffect(() => {
//         saveState(key, state)
//     }, [state])

//     return storedState === null ? false : storedState;
// }



export default function Note() {
    const [notes, dispatch] = useLocallyPersistedReducer(reducer,[], 'savedNotes')
    const [text, setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: NOTEACTIONS.ADD_NOTE, payload: {text: text}})
        setText('')
    }

 



  return (
   <Container>
        <Row>
            <Col>
                <form style={{marginBottom:'1rem'}} onSubmit={handleSubmit}>
                    <input type="text" value={text} onChange={e => setText
                    (e.target.value)} />
                </form>
            </Col>
        </Row>
       
        
        <Row>
        <Card >
        <Col>
            
                      
        {notes.map(note => {
                return <NoteBody key={note.id} note={note}dispatch={ dispatch }/>
            })}

           
        </Col>
        </Card>
        </Row>
        
   </Container>
  )
}
