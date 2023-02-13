import React from "react";
import {Row, Col} from 'react-bootstrap';
import { useReducer, useState } from "react";
import Character from "./Character";

export const ACTIONS = {
    ADD_CHARACTER: 'add-character',
    TOGGLE_DEATH: 'toggle-death',
    CLEAR: 'clear',
  }

  function reducer(characters, action){
    switch (action.type){
        case ACTIONS.ADD_CHARACTER:
            return[...characters, newCharacter(action.payload.name)]
        case ACTIONS.TOGGLE_DEATH:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, dead: !character.dead }
                }
                return character
            })
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
            {characters.map(character => {
               return <Character key={character.id} character={character} dispatch={ dispatch }/>
            })}
        </Col>
    </Row>
  )
}

export default Tracker;
