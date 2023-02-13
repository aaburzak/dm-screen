import React from "react";
import {Row, Col} from 'react-bootstrap';
import { useReducer, useState } from "react";
import Character from "./Character";

export const ACTIONS = {
    ADD_CHARACTER: 'add-character',
    TOGGLE_DEATH: 'toggle-death',
    TOGGLE_BLIND: 'toggle-blind',
    TOGGLE_CHARMED: 'toggle-charmed',
    TOGGLE_DEAF:    'toggle-deaf',
    TOGGLE_FRIGHTENED:    'toggle-frightened',
    TOGGLE_GRAPPLE:    'toggle-grapple',
    TOGGLE_INCAPACITATED:    'toggle-incapacitated',
    REMOVE_CHARACTER: 'remove-character',
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
            case ACTIONS.TOGGLE_BLIND:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, blinded: !character.blinded }
                }
                return character
            })
            case ACTIONS.TOGGLE_CHARMED:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, charmed: !character.charmed }
                }
                return character
            })
            case ACTIONS.TOGGLE_DEAF:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, deafened: !character.deafened }
                }
                return character
            })
            case ACTIONS.TOGGLE_FRIGHTENED:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, frightened: !character.frightened }
                }
                return character
            })
            case ACTIONS.TOGGLE_GRAPPLE:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, grappled: !character.grappled }
                }
                return character
            })
            case ACTIONS.TOGGLE_INCAPACITATED:
            return characters.map(character =>{
                if (character.id === action.payload.id){
                    return{ ...character, incapacitated: !character.incapacitated }
                }
                return character
            })
        case ACTIONS.REMOVE_CHARACTER:
            return characters.filter(character => character.id !== action.payload.id)
            default:
                return characters
    }
  }

  function newCharacter(name){
    return { id:Date.now(), name: name, dead: false, blinded: false, charmed: false, deafened: false, frightened: false, grappled: false, incapacitated: false, invisible: false, paralyzed: false, petrified: false, poisoned: false, prone: false, restrained: false, stunned: false, unconscious: false}
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
