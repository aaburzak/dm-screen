import React from 'react'
import { ACTIONS } from './Tracker'

export default function Character({ character, dispatch}) {
  return (
    <div>
        <span style={{ color: character.dead ? '#AAA' : '#000' }}>
            {character.name}
        </span>
        <button style={{ color: character.blinded ? '#AAA' : '', background: character.blinded ? '#CCFFFF' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_BLIND, payload:{ id: character.id }})}>Blind</button>
        <button style={{ color: character.charmed ? '#FFFFFF' : '', background: character.charmed ? '#FF99CC' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_CHARMED, payload:{ id: character.id }})}>Charmed</button>
        <button style={{ color: character.deafened ? '' : '', background: character.deafened ? '#FFCC99' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEAF, payload:{ id: character.id }})}>Deaf</button>
        <button style={{ color: character.frightened ? '' : '', background: character.frightened ? '#FFFF66' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_FRIGHTENED, payload:{ id: character.id }})}>Frightened</button>
        <button style={{ color: character.grappled ? '#FFFFFF' : '', background: character.grappled ? '#336600' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_GRAPPLE, payload:{ id: character.id }})}>Grappled</button>
        <button style={{ color: character.incapacitated ? '#FFFFFF' : '', background: character.incapacitated ? '#606060' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_INCAPACITATED, payload:{ id: character.id }})}>Incapacitated</button>

        <button style={{ color: character.dead ? '#AAA' : '', background: character.dead ? '#000' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEATH, payload:{ id: character.id }})}>Dead</button>
        <button onClick={()=> dispatch({ type: ACTIONS.REMOVE_CHARACTER, payload:{ id: character.id }})}>Remove</button>
    </div>
  )
}
