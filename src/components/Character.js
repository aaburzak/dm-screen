import React from 'react'
import { useState, } from "react";
import { ACTIONS } from './Tracker';
import Note from './Note';
import {Container, Row, Col} from 'react-bootstrap';







export default function Character({ character, dispatch}) {

const [health, setHealth] = useState(0)

  function handleSubmitAdd(e) {
      e.preventDefault()
      dispatch({type: ACTIONS.ADD_HEALTH, payload: {health: health}})
      setHealth(
        character.health = character.health - (health*-1)
        )
  }

  return (
    <Container className="char-card"  style={{background: 'linear-gradient(to left, #373b3e, #212529)', color: "whitesmoke", border: character.concentration ? '2px solid #000ADB5' : '', boxShadow: character.concentration ? 'inset 0px 0px 8px #00ADB5, 0 0 15px #00ADB5' : 'inset 0px 0px 8px #e6eaec, 0 0 15px #e6eaec'}}>
        <Row>
        <Col>
        <h4 style={{ textDecoration: character.unconscious ? 'line-through' : ''}}>
            {character.name}
        </h4>
        <button className="concentration-btn" style={{fontWeight:'bold' , color: character.concentration ? '#071163' : '#071163', background: character.concentration ? '#00ADB5': '', border: character.concentration ? 'none' : '', boxShadow: character.concentration ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FFFFFF' : '' }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_CONCENTRATION, payload:{ id: character.id }})}>Concentration</button>
        </Col>
        <Col>
        <h4>HP = {character.health}</h4>
        <b>&#43;</b> 
          <form  onSubmit={handleSubmitAdd}>
                    <input type="number"  style={{maxWidth:"50%"}} onChange={e => setHealth
                    (e.target.value)} />
                </form>
        <b>&#8722;</b>
        </Col>
        </Row>
      
        <Row>
        <Col>
        <div  className='condition-btn-box'>
        <button style={{fontWeight:'bold', color: character.blinded ? '#AAA' : '', background: character.blinded ? '#CCFFFF' : '', border: character.blinded ? 'none' : '', boxShadow: character.blinded ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #CCFFFF' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_BLIND, payload:{ id: character.id }})}>Blind</button>
        <button style={{fontWeight:'bold', color: character.charmed ? '#FFFFFF' : '', background: character.charmed ? '#FF99CC' : '', border: character.charmed ? 'none' : '', boxShadow: character.charmed ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FF99CC' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_CHARMED, payload:{ id: character.id }})}>Charmed</button>
        <button style={{fontWeight:'bold', color: character.deafened ? '' : '', background: character.deafened ? '#FFCC99' : '', border: character.deafened ? 'none' : '', boxShadow: character.deafened ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FFCC99' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_DEAF, payload:{ id: character.id }})}>Deaf</button>
        <button style={{fontWeight:'bold', color: character.frightened ? '' : '', background: character.frightened ? '#FFFF66' : '', border: character.frightened ? 'none' : '', boxShadow: character.frightened ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FFFF66' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_FRIGHTENED, payload:{ id: character.id }})}>Frightened</button>
        <button style={{fontWeight:'bold', color: character.grappled ? '#FFFFFF' : '', background: character.grappled ? '#663300' : '', border: character.grappled ? 'none' : '', boxShadow: character.grappled ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #663300' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_GRAPPLE, payload:{ id: character.id }})}>Grappled</button>
        <button style={{fontWeight:'bold', color: character.incapacitated ? '' : '', background: character.incapacitated ? '#CCCCFF' : '', border: character.incapacitated ? 'none' : '', boxShadow: character.incapacitated ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #CCCCFF' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_INCAPACITATED, payload:{ id: character.id }})}>Incapacitated</button>
        <button style={{fontWeight:'bold', color: character.invisible ? '#AAA' : '', background: character.invisible ? '#FFFFFF' : '', border: character.invisible ? 'none' : '', boxShadow: character.invisible ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FFFFFF' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_INVISIBLE, payload:{ id: character.id }})}>Invisible</button>
        <button style={{fontWeight:'bold', color: character.paralyzed ? '' : '', background: character.paralyzed ? '#99FF33' : '', border: character.paralyzed ? 'none' : '', boxShadow: character.paralyzed ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #99FF33' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PARALYZED, payload:{ id: character.id }})}>Paralyzed</button>
        <button style={{fontWeight:'bold', color: character.petrified ? '#FFFFFF' : '', background: character.petrified ? '#606060' : '', border: character.petrified ? 'none' : '', boxShadow: character.petrified ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #606060' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PETRIFIED, payload:{ id: character.id }})}>Petrified</button>
        <button style={{fontWeight:'bold', color: character.poisoned ? '#FFFFFF' : '', background: character.poisoned ? '#336600' : '', border: character.poisoned ? 'none' : '', boxShadow: character.poisoned ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #336600' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_POISONED, payload:{ id: character.id }})}>Poisoned</button>
        <button style={{fontWeight:'bold', color: character.prone ? '#FFFFFF' : '', background: character.prone ? '#CC0000' : '', border: character.prone ? 'none' : '', boxShadow: character.prone ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #CC0000' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_PRONE, payload:{ id: character.id }})}>Prone</button>
        <button style={{fontWeight:'bold', color: character.restrained ? '#FFFFFF' : '', background: character.restrained ? '#000099' : '', border: character.restrained ? 'none' : '', boxShadow: character.restrained ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #000099' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_RESTRAINED, payload:{ id: character.id }})}>Restrained</button>
        <button style={{fontWeight:'bold', color: character.stunned ? '#FFFFFF' : '', background: character.stunned ? '#FF8000' : '', border: character.stunned ? 'none' : '', boxShadow: character.stunned ? 'inset 0px 0px 8px #FFFFFF, 0 0 15px #FF8000' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_STUN, payload:{ id: character.id }})}>Stunned</button>
        <button style={{fontWeight:'bold', color: character.unconscious ? '#AAA' : '', background: character.unconscious ? '#000' : '', border: character.unconscious ? 'none' : '', boxShadow: character.unconscious ? 'inset 0px 0px 8px #AAA, 0 0 15px #000' : ''  }} onClick={()=> dispatch({ type: ACTIONS.TOGGLE_UNCONSCIOUS, payload:{ id: character.id }})}>Unconscious</button>
        </div>
      </Col>
      </Row>

      <Row>
          <h6 className='other-note'>Other Notes</h6>
      </Row>
      
      <Row>
        <Note/>
      </Row>

      <Row>
      <Col>
      <button className ="remove-btn" onClick={()=> dispatch({ type: ACTIONS.REMOVE_CHARACTER, payload:{ id: character.id }})}>Remove Character</button>
      </Col>
      </Row>
    </Container>
  )
}
