import React from 'react'
import { ACTIONS } from './Tracker'

export default function Character({ character, dispatch}) {
  return (
    <div>
        <span style={{ color: character.dead ? '#AAA' : '#000' }}>
            {character.name}
        </span>
        <button style={{ color: character.dead ? '#AAA' : '', background: character.dead ? '#000' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEATH, payload:{ id: character.id }})}>Dead</button>
        <button>Delete</button>
    </div>
  )
}
