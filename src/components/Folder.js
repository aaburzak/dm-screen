import React from 'react'
import {useState} from "react";
import { FOLDER_ACTIONS } from '../pages/NotePage';
import Note from './Note';
import {Container, Row, Col, Card} from 'react-bootstrap';




export default function Folder({folder, dispatch}) {
  const [display, setDisplay] = useState('')
  const [altDisplay, setAltDisplay] = useState('none')

function minimize(){
  setDisplay('none')
  setAltDisplay('')
}

function expand(){
  setDisplay('')
  setAltDisplay('none')
}

  return (
    <Container>
        <Row>
            <Col>
                <h4>{folder.folderName}</h4>
            </Col>
            <Col style={{textAlign: 'right'}}>
            <button style={{display:display}} onClick={()=> minimize()} >Min</button>
            <button style={{display:altDisplay}} onClick={()=> expand()}>Expand</button>
            </Col>
        </Row>





        <div style={{display: display}}>
      <Row>
        <Col>
        <Note />
        </Col>
      </Row>
      </div>
      
      <Row>
      <Col>
      <button className ="remove-btn" onClick={()=> dispatch({ type: FOLDER_ACTIONS.REMOVE_FOLDER, payload:{ id: folder.id }})}>Remove Folder</button>
      </Col>
      </Row>
    </Container>
  )
}
