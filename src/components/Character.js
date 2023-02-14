import React from 'react'
import { ACTIONS } from './Tracker'

export default function Character({ character, dispatch}) {
  return (
    <div>
        <span className='charName' style={{ textDecoration: character.dead ? 'line-through' : '', color: character.unconscious ? '#AAA' : '#000' }}  onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEATH, payload:{ id: character.id }})}>
            {character.name}
        </span>
        <button style={{ color: character.blinded ? '#AAA' : '', background: character.blinded ? '#CCFFFF' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_BLIND, payload:{ id: character.id }})}>Blind</button>
        <button style={{ color: character.charmed ? '#FFFFFF' : '', background: character.charmed ? '#FF99CC' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_CHARMED, payload:{ id: character.id }})}>Charmed</button>
        <button style={{ color: character.deafened ? '' : '', background: character.deafened ? '#FFCC99' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEAF, payload:{ id: character.id }})}>Deaf</button>
        <button style={{ color: character.frightened ? '' : '', background: character.frightened ? '#FFFF66' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_FRIGHTENED, payload:{ id: character.id }})}>Frightened</button>
        <button style={{ color: character.grappled ? '#FFFFFF' : '', background: character.grappled ? '#663300' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_GRAPPLE, payload:{ id: character.id }})}>Grappled</button>
        <button style={{ color: character.incapacitated ? '' : '', background: character.incapacitated ? '#CCCCFF' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_INCAPACITATED, payload:{ id: character.id }})}>Incapacitated</button>
        <button style={{ color: character.invisible ? '#AAA' : '', background: character.invisible ? '#FFFFFF' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_INVISIBLE, payload:{ id: character.id }})}>Invisible</button>
        <button style={{ color: character.paralyzed ? '' : '', background: character.paralyzed ? '#99FF33' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PARALYZED, payload:{ id: character.id }})}>Paralyzed</button>
        <button style={{ color: character.petrified ? '#FFFFFF' : '', background: character.petrified ? '#606060' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PETRIFIED, payload:{ id: character.id }})}>Petrified</button>
        <button style={{ color: character.poisoned ? '#FFFFFF' : '', background: character.poisoned ? '#336600' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_POISONED, payload:{ id: character.id }})}>Poisoned</button>
        <button style={{ color: character.prone ? '#FFFFFF' : '', background: character.prone ? '#CC0000' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PRONE, payload:{ id: character.id }})}>Prone</button>
        <button style={{ color: character.restrained ? '#FFFFFF' : '', background: character.restrained ? '#000099' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_RESTRAINED, payload:{ id: character.id }})}>Restrained</button>
        <button style={{ color: character.stunned ? '#FFFFFF' : '', background: character.stunned ? '#FF8000' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_STUN, payload:{ id: character.id }})}>Stunned</button>
        <button style={{ color: character.unconscious ? '#AAA' : '', background: character.unconscious ? '#000' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_UNCONSCIOUS, payload:{ id: character.id }})}>Unconscious</button>
        <button onClick={()=> dispatch({ type: ACTIONS.REMOVE_CHARACTER, payload:{ id: character.id }})}>Remove</button>
    </div>
  )
}
