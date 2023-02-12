import React from "react";
import {Row, Col} from 'react-bootstrap';
import { useReducer, useState } from "react";

export const ACTIONS = {
    ADD_CHARACTER: 'add-character',
    CLEAR: 'clear',
  }

  function reducer(characters, action){
    switch (action.type){
        case ACTIONS.ADD_CHARACTER:
            return[...characters, newCharacter(action.payload.name)]
    }
  }

  function newCharacter(name){
    return { id:Date.now(), name: name, dead: false}
  }


function Tracker() {
    const [characters, dispatch] = useReducer(reducer,[])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_CHARACTER, payload: {name: name}})
        setName('')
    }


console.log(characters)

  return (
    <Row className="justify-content-md-center botRow">
        <h3>Add Character</h3>
        <Col className="md-auto botCol text-center">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName
                (e.target.value)} />
            </form>
        </Col>
    </Row>
  )
}

export default Tracker;
